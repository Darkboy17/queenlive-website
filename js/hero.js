function initHero() {
  const mainTextContent = "대한민국 최고의 라이브 솔루션";
  const subTextContent = "여러분께 소개합니다";
  const descriptionContent =
    "누구나 쉽게 라이브 방송을 시작하고, 쉽고 빠르게 상품을 판매할 수 있도록 돕습니다. 입점부터 실시간 커머스 마케팅까지 퀸라이브는 당신의 제품을 고객과 연결합니다.";

  const mainTextEl = document.getElementById("mainText");
  const subTextEl = document.getElementById("subText");
  const descriptionEl = document.getElementById("description");

  if (!mainTextEl || !subTextEl || !descriptionEl) {
    console.warn("⚠️ Hero elements not found");
    return;
  }

  // Utility: random delay
  function randomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Typewriter effect with random speed
  function typeText(element, text, minDelay = 50, maxDelay = 150, startDelay = 0) {
    return new Promise((resolve) => {
      element.textContent = "";
      let i = 0;

      const cursor = document.createElement("span");
      cursor.className = "typing-cursor";
      element.appendChild(cursor);

      function typeChar() {
        if (i < text.length) {
          cursor.insertAdjacentText("beforebegin", text[i]);
          i++;
          setTimeout(typeChar, randomDelay(minDelay, maxDelay));
        } else {
          cursor.remove();
          resolve();
        }
      }

      // ✅ Wait for startDelay before typing
      setTimeout(typeChar, startDelay);
    });
  }

  async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function startTyping() {

    // 2️⃣ Main text (with human-like typing)
    await typeText(mainTextEl, mainTextContent, 70, 100);

    // 3️⃣ Start pendulum animation
    mainTextEl.classList.add("pendulum");

    // 1️⃣ Show blinking cursor ONLY before typing main text
    //    by creating temporarily an empty cursor span
    const preCursor = document.createElement("span");
    preCursor.className = "typing-cursor";
    mainTextEl.appendChild(preCursor);

    await delay(1200); // Wait a bit before removing the cursor
    preCursor.remove();

    // 4️⃣ SubText
    await typeText(subTextEl, subTextContent, 60, 150);

    await delay(600); // Wait a bit before removing the cursor
    preCursor.remove();

    // 5️⃣ Description
    await typeText(descriptionEl, descriptionContent, 10, 30);



    // 6️⃣ Stop pendulum after a bit
    setTimeout(() => {
      mainTextEl.classList.remove("pendulum");
    }, 1500);
  }

  startTyping();
}

document.addEventListener("DOMContentLoaded", initHero);