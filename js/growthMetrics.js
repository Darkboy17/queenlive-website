window.initGrowthMetrics = function () {
  function animateCounter(el, target, suffix = "", duration = 2000) {
    let start = 0;
    let startTime = null;

    // Check if the original content has a "+" sign that should be preserved
    const hasPlusSign = el.textContent.trim().startsWith('+');
    const prefix = hasPlusSign ? '+' : (el.dataset.prefix || "");

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = prefix + value + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  // Only animate when scrolled into view
  const counters = document.querySelectorAll(".counter");
  const observerOptions = {
    threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10) || 0;
        const suffix = el.dataset.suffix || "";
        animateCounter(el, target, suffix);
        observer.unobserve(el); // Stop observing this element after animation starts
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    observer.observe(counter);
  });
};
