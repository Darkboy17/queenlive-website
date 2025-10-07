window.initContactSection = function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  // Tabs switching
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;

      // Remove all possible active classes from all tabs
      tabButtons.forEach(b => {
        b.classList.remove("bg-white", "text-pink-600", "text-green-600", "shadow-sm");
        // Add back the default inactive state (gray text)
        if (!b.classList.contains("text-gray-600")) {
          b.classList.add("text-gray-600");
        }
      });

      // Remove the inactive state and add active classes to clicked tab
      btn.classList.remove("text-gray-600");
      btn.classList.add("bg-white", "text-pink-600", "shadow-sm");

      tabPanels.forEach(panel => {
        panel.id === targetId ? panel.classList.remove("hidden") : panel.classList.add("hidden");
      });
    });
  });

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach(q => {
    q.addEventListener("click", () => {
      const parent = q.closest(".faq-item");
      const answer = parent.querySelector(".faq-answer");
      const icon = q.querySelector(".faq-icon");

      // toggle
      answer.classList.toggle("hidden");
      icon.classList.toggle("rotate-180");
    });
  });

  // Dummy contact form submission
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("문의가 성공적으로 전송되었습니다!\n빠른 시일 내에 답변드리겠습니다.");
      form.reset();
    });
  }
};
