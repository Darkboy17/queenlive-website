window.initTimeline = function () {
  const container = document.getElementById("timelineContainer");
  if (!container) return;

  const milestones = [
    {
      date: "2021년 07월",
      title: "퀸라이브 설립",
      desc: "한국의 이커머스를 변화시키겠다는 비전으로 퀸라이브가 설립되었습니다.",
      highlight: false,
    },
    {
      date: "2023년 03월",
      title: "클릭메이트 라이브커머스 런칭",
      desc: "퀸라이브의 라이브커머스 플랫폼 '클릭메이트'가 공식 런칭되었습니다.",
      highlight: false,
    },
    {
      date: "2023년 04월",
      title: "스파크랩 투자유치",
      desc: "스파크랩으로부터 초기 투자를 유치하며 사업 확장의 발판을 마련했습니다.",
      highlight: false,
    },
    {
      date: "2023년 12월",
      title: "누적 가입자 수 10,000명 달성",
      desc: "서비스 런칭 9개월 만에 10,000명의 가입자를 확보하는 성과를 달성했습니다.",
      highlight: false,
    },
    {
      date: "2024년 12월",
      title: "1년 거래액 318억 달성",
      desc: "2024년 한 해 동안 318억 원의 거래액을 달성하며 빠른 성장세를 보였습니다.",
      highlight: false,
    },
    {
      date: "2025년 05월",
      title: "누적 가입자수 400,000명 달성",
      desc: "플랫폼 사용자가 40만 명을 돌파하며 국내 라이브커머스 시장에서 주요 플레이어로 자리매김했습니다.",
      highlight: false,
    },
    {
      date: "2025년 07월",
      title: "누적 가입자수 500,000명 달성",
      desc: "플랫폼 사용자가 50만 명을 돌파하여 국내 라이브커머스 시장에서의 입지를 더욱 확고히 했습니다.",
      highlight: false,
    },
    {
      date: "2025년 07월",
      title: "7월 한달 거래액 160억 돌파",
      desc: "2025년 7월, 단 한달간의 거래액이 160억을 돌파해 초성장세를 유지하고 있습니다.",
      highlight: false,
    },
    {
      date: "2025년 08월",
      title: "클릭메이트x롯데홈쇼핑 콜라보레이션",
      desc: "클릭메이트가 롯데홈쇼핑과 함께 진행한 콜라보레이션 첫 방송에서 시청자 11,000명, 판매액 약 1.7억 원을 달성했습니다.",
      highlight: false,
    },
    {
      date: "현재",
      title: "글로벌 진출 준비 중",
      desc: "일본, 미국, 중국 등 해외 시장 진출을 위한 준비를 진행하고 있습니다.",
      highlight: true, // this special one gets shimmer styling
    },
  ];

  container.innerHTML = milestones
    .map((item, idx) => {
      // Alternate left/right per index
      const isLeft = idx % 2 === 0;
      const delay = 0.2 + idx * 0.2;

      const marker = item.highlight
        ? `
          <div class="absolute left-1/2 top-4 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-lg shadow-yellow-500/30 text-white">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12,6 12,12 16,14"></polyline>
            </svg>
          </div>`
        : `
          <div class="absolute left-1/2 top-4 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-pink-600 text-white shadow-md">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>`;

      const shimmerClass = item.highlight ? "shimmer-text" : "";

      const content = `
        <div class="flex flex-col relative ${isLeft
          ? "ml-[50%] pl-8 text-left md:ml-0 md:mr-[50%] md:pl-0 md:pr-8 md:text-right"
          : "mr-[50%] pr-8 text-right md:mr-0 md:ml-[50%] md:pr-0 md:pl-8 md:text-left"
        } opacity-0 translate-y-8 animate-fade-up ${shimmerClass}" style="animation-delay:${delay}s">
        <div class="${item.highlight ? "pulse-grow" : ""}">
         <div class="text-sm font-medium ${item.highlight ? "text-yellow-600" : "text-pink-600"} mb-1">${item.date}</div>
          <h3 class="text-lg font-bold ${item.highlight ? "text-yellow-600" : ""}">${item.title}</h3>
          <p class="mt-1 max-w-md text-gray-600 ${isLeft ? "md:ml-32" : ""}">${item.desc}</p>
        </div>
         
        </div>
      `;

      return `<div class="relative">${marker}${content}</div>`;
    })
    .join("");
};