import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import { globSync } from 'glob';
import pLimit from 'p-limit';
import cliProgress from 'cli-progress';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import { cpus } from 'os';

// ---------------------------- flags & paths ----------------------------
const noConversion = process.argv.includes('--no-conversion');
console.log(chalk.gray(`Build mode: ${noConversion ? 'SKIP media conversion' : 'FULL build'}\n`));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SRC = __dirname;
const DIST = path.join(SRC, 'dist');

const CONCURRENCY = Math.max(2, cpus().length - 1);
const limit = pLimit(CONCURRENCY);

function createBar(mb, total, label) {
  return mb.create(total, 0, { label: chalk.cyan(label.padEnd(6)) });
}

// ---------------------------- clean + prepare ----------------------------
// Only remove dist folder on FULL build
if (!noConversion) {
  await fs.rm(DIST, { recursive: true, force: true });
  console.log('🧹 Cleaned DIST folder for FULL build');
}

// Always ensure dist exists
await fs.mkdir(DIST, { recursive: true });

// MultiBar for progress
const multibar = new cliProgress.MultiBar({
  clearOnComplete: false,
  hideCursor: true,
  format: '{label} |{bar}| {value}/{total} {percentage}% ETA:{eta_formatted}'
}, cliProgress.Presets.shades_grey);

// ---------------------------- 1) Images → webp ----------------------------
if (!noConversion) {
  const images = globSync('**/*.{png,jpg,jpeg}', { cwd: SRC, nodir: true });
  const imgBar = createBar(multibar, images.length, 'IMG');

  await Promise.all(
    images.map(f => limit(async () => {
      const src = path.join(SRC, f);
      const destDir = path.dirname(path.join(DIST, f));
      const lower = f.toLowerCase().replace(/\\/g, '/');
      await fs.mkdir(destDir, { recursive: true });

      if (lower.includes('/thumbnail.') || lower.endsWith('thumbnail.png') || lower.endsWith('thumbnail.jpg') || lower.endsWith('thumbnail.jpeg')) {
        // Copy thumbnail as-is
        const dest = path.join(DIST, f);
        await fs.copyFile(src, dest);
        console.log(`🟡 Copied (no conversion): ${f}`);
        imgBar.increment();
        return;
      }

      const dest = path.join(DIST, f).replace(/\.(png|jpe?g)$/i, '.webp');

      try {
        await sharp(src).webp({ quality: 80 }).toFile(dest);
        console.log(`✅ Converted: ${f} → ${path.relative(DIST, dest)}`);
      } catch (err) {
        console.error(`❌ Failed to convert ${f}:`, err.message);
      }
      imgBar.increment();
    }))
  );
} else {
  console.log(chalk.yellow('⏭️ Skipping image conversions (--no-conversion)'));
}

// ---------------------------- 2) Videos → webm ----------------------------
if (!noConversion) {
  const videos = globSync('**/*.mp4', { cwd: SRC, nodir: true });
  const vidBar = createBar(multibar, videos.length, 'VID');

  await Promise.all(
    videos.map(f => limit(async () => {
      const src = path.join(SRC, f);
      const dest = path.join(DIST, f).replace(/\.mp4$/i, '.webm');
      await fs.mkdir(path.dirname(dest), { recursive: true });

      await new Promise((res, rej) => {
        ffmpeg(src)
          .setFfmpegPath(ffmpegPath)
          .outputOptions([
            '-c:v', 'libvpx-vp9',
            '-crf', '30',
            '-b:v', '0',
            '-cpu-used', '5',
            '-deadline', 'realtime',
            '-tile-columns', '4',
            '-row-mt', '1',
            '-threads', String(cpus().length),
            '-c:a', 'libopus',
            '-b:a', '96k'
          ])
          .on('error', rej)
          .on('end', res)
          .save(dest);
      });

      vidBar.increment();
    }))
  );
} else {
  console.log(chalk.yellow('⏭️ Skipping video conversions (--no-conversion)'));
}

// ---------------------------- 3) Other files copy ----------------------------
const others = globSync('**/*', {
  cwd: SRC,
  nodir: true,
  ignore: ['**/*.{png,jpg,jpeg}', '**/*.mp4', 'dist/**', 'node_modules/**']
});
const othBar = createBar(multibar, others.length, 'COPY');

await Promise.all(
  others.map(f => limit(async () => {
    const src = path.join(SRC, f);
    const dest = path.join(DIST, f);
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.copyFile(src, dest);
    othBar.increment();
  }))
);

// ---------------------------- 4) HTML rewrite ----------------------------
const htmlFiles = globSync('**/*.html', { cwd: DIST, nodir: true });
const htmlBar = createBar(multibar, htmlFiles.length, 'HTML');

await Promise.all(
  htmlFiles.map(f => limit(async () => {
    const file = path.join(DIST, f);
    let html = await fs.readFile(file, 'utf8');

    html = html
      .replace(/(?<!thumbnail)\.(png|jpe?g)(?=["'])/gi, '.webp')
      .replace(/\.mp4(?=["'])/gi, '.webm');

    await fs.writeFile(file, html);
    htmlBar.increment();
  }))
);

// ---------------------------- 5) JS string-literal rewrite ----------------------------
const jsFiles = globSync('**/*.{js,jsx,ts,tsx,mjs,cjs}', { cwd: DIST, nodir: true });
const jsBar = createBar(multibar, jsFiles.length, 'JS  ');

const EXT_REGEX_IMAGE = /(?<!thumbnail)\.(png|jpe?g)(?=["'])/gi;
const EXT_REGEX_VIDEO = /\.mp4(?=["'])/gi;

await Promise.all(
  jsFiles.map(f => limit(async () => {
    const file = path.join(DIST, f);
    let code = await fs.readFile(file, 'utf8');

    code = code
      .replace(EXT_REGEX_IMAGE, '.webp')
      .replace(EXT_REGEX_VIDEO, '.webm');

    await fs.writeFile(file, code);
    jsBar.increment();
  }))
);

// ---------------------------- done ----------------------------
multibar.stop();
console.log(chalk.green('\n✅ All assets ready → ' + DIST));
console.log(chalk.gray(`Parallelism: ${CONCURRENCY} concurrent jobs\n`));