import { build } from "esbuild";

build({
  entryPoints: ["lib/structured-data/index.ts"], // main entry
  bundle: true,                                 // bundle all imports
  outfile: "public/lib/structured-data.bundle.js", // output file
  format: "esm",                                // ES module format
  target: ["es6"],                              // compatible JS
  sourcemap: false,
}).catch(() => process.exit(1));
