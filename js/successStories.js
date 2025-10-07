window.initSuccessStories = function () {
  // === DATA ===
  const sellersData = [
    {
      name: "바닐라윤",
      title: "하이엔드 여성의류 전문가",
      image: "public/images/sellers/1.webp",
      highlight: "라이브 3시간 매출 3억 돌파",
      subHighlight: "단 3시간 라이브 판매로 달성",
      description: "오늘 사고치겠구나... 했는데 방송 3시간 만에 최종 매출 3억을 기록했어요. 1,700명의 고객님들이 끝까지 자리를 채워주셨죠.",
      stats: [
        { label: "일 최고 매출", value: "3억 원" },
        { label: "월 매출", value: "11억원" }
      ],
      link: "https://cafe.naver.com/sellshortform/908"
    },
    {
      name: "오드리겸",
      title: "백화점 브랜드 전문가",
      image: "public/images/sellers/2.webp",
      highlight: "일매출 2억5천",
      subHighlight: "라방 시작 1년내 저녁방송으로 2억 5천 달성!",
      description: "인스타, 유튜브보다 매출 효과가 훨씬 커요. 라방 하나에 수백 건의 주문이 들어옵니다!",
      stats: [
        { label: "월 매출", value: "10억원" },
        { label: "플랫폼 적응 기간", value: "1년이내" }
      ],
      link: "https://cafe.naver.com/sellshortform/653?tc=shared_link"
    },
    {
      name: "쓰리백",
      title: "유통 전문가",
      image: "public/images/sellers/5.webp",
      highlight: "일매출 4억 원",
      subHighlight: "클릭메이트 초대형 셀러",
      description: "10만 단골 돌파 기념 라이브로 10억 원 성과를 만들었습니다!",
      stats: [
        { label: "일 최고 매출", value: "4억 원" },
        { label: "유통 경력", value: "14년" }
      ],
      extra: "사실상 라이브커머스의 제왕 👑",
      link: "https://m.cafe.naver.com/sellshortform/722"
    },
    {
      name: "시스터즈키즈",
      title: "아동복 독주 셀러",
      image: "public/images/sellers/sisterskids.jpeg",
      highlight: "남편의 사업을 접게한 성공신화",
      subHighlight: "꾸준함으로 나는 아동복의 여왕이 되었다",
      description: "꾸준히 신상을 소개하니 단골도 늘고 안정적인 매출이 나오게 됐어요. 남편도 합류해 든든한 동반자가 되었답니다!",
      stats: [
        { label: "주요 성과", value: "아동복을 통한 안정적인 매출" },
        { label: "성공 비결", value: "꾸준한 신상 소개와 소통" }
      ],
      link: "https://m.cafe.naver.com/sellshortform/573"
    }
  ];

  // === RENDERING LOGIC ===
  const gridContainer = document.getElementById("sellers-grid");

  sellersData.forEach((seller) => {
    const card = document.createElement("div");
    card.className = "rounded-lg border bg-white text-gray-900 shadow-sm overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg";

    card.innerHTML = `
      <div class="p-6">
        <div class="flex items-center mb-4">
          <div class="h-12 w-12 overflow-hidden rounded-full mr-4">
            <img src="${seller.image}" alt="${seller.name}" class="object-cover w-full h-full">
          </div>
          <div>
            <h3 class="font-bold">${seller.name}</h3>
            <p class="text-sm text-pink-600">${seller.title}</p>
          </div>
        </div>

        <div class="mb-4">
          <h4 class="text-lg font-bold text-gray-900">${seller.highlight}</h4>
          <p class="text-sm text-gray-500">${seller.subHighlight}</p>
        </div>

        <blockquote class="text-gray-600 mb-4 text-sm leading-relaxed">
          ${seller.description}
        </blockquote>

        <div class="border-t pt-4">
          ${seller.stats
        .map(
          (stat) => `
              <div class="flex justify-between text-sm mb-2">
                <span class="text-gray-500">${stat.label}</span>
                <span class="font-bold text-pink-600">${stat.value}</span>
              </div>`
        )
        .join("")
      }
          
          ${seller.extra
        ? `<div class="text-purple-600 text-sm font-medium mb-2">${seller.extra}</div>`
        : ""
      }

          <a href="${seller.link}" target="_blank" rel="noopener noreferrer" 
            class="text-pink-600 text-sm font-medium hover:underline">
            후기 자세히 보기 →
          </a>
        </div>
      </div>
    `;

    gridContainer.appendChild(card);
  });
}