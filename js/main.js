// Load file into <main>
async function loadPageContent(file, initFnName = null, append = false) {
  try {
    const res = await fetch(`/components/${file}`);
    if (!res.ok) throw new Error(`Failed to load ${file}: ${res.statusText}`);

    const html = await res.text();

    const content = document.getElementById("content");
    if (!append) {
      // Replace main content
      content.innerHTML = html;
    } else {
      // Append new section
      const wrapper = document.createElement("div");
      wrapper.innerHTML = html;
      content.appendChild(wrapper);
    }

    // Run init function if specified
    if (initFnName && typeof window[initFnName] === "function") {
      requestAnimationFrame(() => window[initFnName]());
    }
  } catch (err) {
    console.error(`Error loading ${file}:`, err);
  }
}

// SPA Router
function router(path) {
  const routes = {
    "/": [
      { file: "hero.html", init: "initHero" },
      { file: "showcase.html" },
      { file: "purpose.html", init: "initPurpose" },
      { file: "features.html" },
      { file: "sellerCases.html", init: "initSellers" },
      { file: "successStories.html", init: "initSuccessStories" },
      { file: "sellerInterview.html", init: "initSellerInterview" },
      { file: "growthMetrics.html", init: "initGrowthMetrics" },
      { file: "news.html" },
      { file: "timeline.html", init: "initTimeline" },
      { file: "partners.html" },
      { file: "partners-marquee.html", init: "initPartnersMarquee" },
      { file: "callToAction.html" }
    ],
    "/news": { file: "news.html" },
    "/news-tab": { file: "news-tab/index.html", init: "initNewsTab" },
    "/contact-tab": { file: "contact-tab/index.html", init: "initContactSection" },
    // 🔮 add any other single-page sections here
  };

  const content = document.getElementById("content");
  content.innerHTML = ""; // clear on every route change

  // Handle homepage (array of sections)
  if (Array.isArray(routes[path])) {
    // Load components sequentially to ensure correct order
    async function loadSequentially() {
      for (let i = 0; i < routes[path].length; i++) {
        const r = routes[path][i];
        await loadPageContent(r.file, r.init, i !== 0);
        // i==0 → replace, others → append
      }
      // Update active navigation after all components are loaded
      if (typeof window.updateActiveNav === "function") {
        window.updateActiveNav();
      }
    }

    loadSequentially();
    return;
  }

  // Handle single section page
  const route = routes[path] || routes["/"];
  loadPageContent(route.file, route.init);
  // Update active navigation
  if (typeof window.updateActiveNav === "function") {
    window.updateActiveNav();
  }
}

function initSPA() {
  // Intercept link clicks
  document.body.addEventListener("click", e => {
    const link = e.target.closest("a[data-link]");
    if (link) {
      e.preventDefault();
      const href = link.getAttribute("href");
      history.pushState({}, "", href);
      router(href);
    }
  });

  // Handle back/forward
  window.addEventListener("popstate", () => router(location.pathname));

  // Initial load
  router(location.pathname);
}

document.addEventListener("DOMContentLoaded", async () => {
  // Load header & footer (they stay persistent)
  const headerHtml = await fetch("/components/header.html").then(r => r.text());
  document.getElementById("header").innerHTML = headerHtml;
  if (typeof window.initHeader === "function") window.initHeader();

  const footerHtml = await fetch("/components/footer.html").then(r => r.text());
  document.getElementById("footer").innerHTML = footerHtml;

  // Init SPA
  initSPA();
});
