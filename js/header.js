(function () {
  function initHeader() {
    const toggleBtn = document.getElementById("mobile-nav-toggle");
    const drawer = document.getElementById("mobile-drawer");
    const overlay = document.getElementById("drawerOverlay");
    const closeBtn = document.getElementById("drawer-close");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const closeIcon = document.getElementById("close-icon");

    if (!toggleBtn || !drawer || !overlay) return;

    function openDrawer() {
      drawer.classList.remove("translate-x-full");
      overlay.classList.remove("hidden");
      hamburgerIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
      toggleBtn.setAttribute("aria-expanded", "true");

      // Focus the close button when drawer opens
      if (closeBtn) {
        closeBtn.focus();
      }

    }

    function closeDrawer() {
      drawer.classList.add("translate-x-full");
      overlay.classList.add("hidden");
      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      toggleBtn.setAttribute("aria-expanded", "false");
    }

    function toggleDrawer() {
      if (drawer.classList.contains("translate-x-full")) {
        openDrawer();
      } else {
        closeDrawer();
      }
    }

    // Function to update active navigation link
    function updateActiveNav() {
      const currentPath = window.location.pathname;
      const navLinks = document.querySelectorAll("nav a[data-link]");

      navLinks.forEach(link => {
        // Remove active class from all links
        link.classList.remove("text-pink-600");
        // Add hover class back if it was removed
        if (!link.classList.contains("hover:text-pink-600")) {
          link.classList.add("transition-colors", "hover:text-pink-600");
        }

        // Check if this link matches the current path
        if (link.getAttribute("href") === currentPath) {
          link.classList.add("text-pink-600");
          link.classList.remove("transition-colors", "hover:text-pink-600");
        }
      });
    }

    toggleBtn.addEventListener("click", toggleDrawer);
    closeBtn.addEventListener("click", closeDrawer);
    overlay.addEventListener("click", closeDrawer);

    // Close when ESC key is pressed
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeDrawer();
      }
    });

    // Auto close when clicking a drawer nav link
    document.querySelectorAll("#mobile-drawer nav a").forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });

    // Update active navigation on initial load
    updateActiveNav();

    // Make updateActiveNav available globally for router to call
    window.updateActiveNav = updateActiveNav;
  }

  window.initHeader = initHeader;
})();
