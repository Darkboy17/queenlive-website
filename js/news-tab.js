window.initNewsTab = function () {

    const newsArticles = [
        {
            id: 1,
            title: "클릭메이트, 롯데홈쇼핑과 라이브커머스 방송협력으로 성장모델 확대",
            source: "매일경제",
            date: "2025.09.02",
            excerpt: "㈜퀸라이브 ‘클릭메이트’는 롯데홈쇼핑과 협력을 통해 클릭메이트 특별방송을 추진했다. 롯데홈쇼핑이 보유한 대표 브랜드인 LBL를 비롯해 국내 백화점 브랜드 30여종을 ‘클릭메이트’의 빅셀러와의 매칭을 통해 방송을 추진했다.",
            url: "https://www.mk.co.kr/news/business/11408875",
            imageUrl: "/public/images/audreygyum-news.jpg"
        },
        {
            id: 2,
            title: "클릭메이트, 패션셀러 제이플러스 방송 한 번에 1억2천만원 매출 달성",
            source: "패션비즈",
            date: "2025.09.02",
            excerpt: "퀸라이브의 ‘클릭메이트’가 브랜드사와 셀러간 매칭 프로그램을 통해 의미 있는 성과를 창출했다. 지난8월27일, 패션기업 동광코퍼레이션과 클릭메이트의 빅셀러 제이플러스가 함께 진행한 라이브 방송에서 단 4시간 만에 1억2천만원의 매출을 달성한 것이다.",
            url: "https://fashionbiz.co.kr/article/219169",
            imageUrl: "/public/images/jplus-news.png"
        },
        {
            id: 3,
            title: "라이브커머스 ‘돌풍’ 클릭메이트, 월 거래액 160억 돌파",
            source: "이뉴스투데이",
            date: "2025.08.18",
            excerpt: "단골 고객 커머스 플랫폼인 클릭메이트가 지난달 월 기준 거래액 160억원을 돌파하며 커머스 시장에 돌풍을 이끌고 있다.",
            url: "https://www.enewstoday.co.kr/news/articleView.html?idxno=2316881",
            imageUrl: "/public/images/enewstoday-sens.jpg"
        },
        {
            id: 4,
            title: "패션그룹 동광인터내셔날, 클릭메이트와 전략적 사업모델 통한 동반성장 추진",
            source: "동아일보",
            date: "2025.07.18",
            excerpt: "㈜동광인터내셔날은 ㈜퀸라이브의 클릭메이트 채널을 통한 새로운 성장모델구축 및 동반성장에 양 사가 합의했다고 밝혔다.",
            url: "https://www.donga.com/news/article/all/20250718/132025418/1",
            imageUrl: "/public/images/withdongguang.jpg"
        },
        {
            id: 5,
            title: "퀸라이브, 브랜드·셀러 협업 ‘Growth with Clickmate’ 포럼",
            source: "중앙일보",
            date: "2025.07.11",
            excerpt: "단골고객을 기반으로 한 폐쇄형 라이브커머스로 시장에서 폭발적 성장을 이끌고 있는 ㈜퀸라이브(대표 윤정탁)가 제2회 포럼 ‘Growth with Clickmate’를 통해 브랜드와 셀러의 협업모델을 성공적으로 이끌었다고 밝혔다.",
            url: "https://www.joongang.co.kr/article/25350849",
            imageUrl: "/public/images/conferencegrowth.jpg"
        },
        {
            id: 6,
            title: "클릭메이트, 대표 셀러 '쓰리백' 10만명 돌파… 단일 방송 매출 4억원 기록",
            source: "머니투데이",
            date: "2025.07.08",
            excerpt: "라이브커머스 플랫폼 클릭메이트의 입점 셀러 '쓰리백'이 브랜드 론칭 1주년을 맞아 누적 단골 10만명 돌파, 단일 회차 매출 4억원, 주문 7만5천건을 기록했다고 밝혔다.",
            url: "https://n.news.naver.com/article/008/0005218767?sid=101",
            imageUrl: "/public/images/threebagnewnews.png"
        },
        {
            id: 7,
            title: "엔라인 '난닝구', 퀸라이브 '클릭메이트'와 시너지 위한 협약 체결",
            source: "TENANT news",
            date: "2025.06.05",
            excerpt: "엔라인(대표 이정민)의 '난닝구'와 퀸라이브(대표 윤정민)의 클릭메이트가 동반성장을 위한 협력에 양사의 시너지를 내기로 협약했다.",
            url: "http://tnnews.co.kr/archives/236787",
            imageUrl: "/public/images/news_25_06_05.jpg"
        },
        {
            id: 8,
            title: "퀸라이브 라이브커머스 대표 셀러 '쓰리백', 4월 방송 실시간 매출 30억 돌파",
            source: "머니투데이",
            date: "2025.05.02",
            excerpt: "퀸라이브의 대표 셀러 '쓰리백'이 4월 한 달간 진행한 라이브 방송에서 실시간 매출 30억원을 돌파했습니다. 이는 라이브커머스 플랫폼의 성장 가능성을 보여주는 중요한 사례입니다.",
            url: "https://news.mt.co.kr/mtview.php?no=2025050214390438436",
            imageUrl: "/public/images/news_25_05_02.png"
        },
        {
            id: 9,
            title: "퀸라이브, 2월 거래액 90억 원 돌파…\"셀러 성장 지원 효과 입증\"",
            source: "머니투데이",
            date: "2025.02.28",
            excerpt: "퀸라이브가 2월 한 달간 90억 원의 거래액을 달성했습니다. 이는 셀러 중심의 플랫폼 전략과 성장 지원 프로그램의 효과를 입증하는 결과입니다.",
            url: "https://news.nate.com/view/20250228n25983",
            imageUrl: "/public/images/news_25_02_28.png"
        },
        {
            id: 10,
            title: "퀸라이브, '2024 컨퍼런스' 성황리 개최...",
            source: "시사매거진",
            date: "2024.12.23",
            excerpt: "퀸라이브가 '2024 컨퍼런스'를 성황리에 개최했습니다. 컨퍼런스 중 진행된 라이브 방송에서는 단 1시간 만에 5천만원의 매출을 기록하며 라이브커머스의 파급력을 입증했습니다.",
            url: "https://www.sisamagazine.co.kr/news/articleView.html?idxno=509849",
            imageUrl: "/public/images/news_24_12_23.png"
        }
    ];

    const youtubeVideos = [
        {
            id: 1,
            title: "클릭메이트 플랫폼 소개 영상",
            description: "클릭메이트 플랫폼의 주요 기능과 특징을 소개하는 영상입니다.",
            videoId: "07vB93j9Q9s"
        },
        {
            id: 2,
            title: "클릭메이트 셀러 성공 사례",
            description: "클릭메이트를 통해 성공한 셀러들의 이야기를 담은 영상입니다.",
            videoId: "LG6nhnguc8I"
        },
        {
            id: 3,
            title: "Queen Live - Clickmate 하이라이트 영상",
            description: "퀸라이브의 최신 활동과 성과를 보여주는 하이라이트 영상입니다.",
            videoId: "zRUAmMRvvZU"
        }
    ].reverse(); // 최신 영상이 위로 오도록 순서 변경

    const articlesContainer = document.getElementById("articles");
    const videosContainer = document.getElementById("videos");

    // Insert articles
    if (articlesContainer) {
        articlesContainer.innerHTML = "";
        newsArticles.forEach(article => {
            articlesContainer.innerHTML += `
        <div class="bg-white rounded-lg shadow overflow-hidden flex flex-col news-fade">
          <img src="${article.imageUrl}" alt="${article.title}" class="h-48 w-full object-cover">
          <div class="p-6 flex flex-col flex-1">
            <div class="flex justify-between text-sm text-gray-500 mb-2">
              <span>${article.source}</span><span>${article.date}</span>
            </div>
            <h3 class="text-lg font-bold mb-2">${article.title}</h3>
            <p class="text-gray-600 mb-4 flex-1">${article.excerpt}</p>
            <a href="${article.url}" target="_blank" class="text-pink-600 font-medium hover:underline">
              기사 읽기 →
            </a>
          </div>
        </div>`;
        });
    }

    // Insert videos
    if (videosContainer) {
        videosContainer.innerHTML = "";
        youtubeVideos.forEach(video => {
            videosContainer.innerHTML += `
        <div class="space-y-4 news-fade">
          <div class="mx-auto max-w-3xl">
            <iframe class="w-full h-64 rounded-lg" src="https://www.youtube.com/embed/${video.videoId}" 
              frameborder="0" allowfullscreen></iframe>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-bold">${video.title}</h3>
            <p class="mt-2 text-gray-600">${video.description}</p>
          </div>
        </div>`;
        });
    }

    // Tab switching
    const tabArticles = document.getElementById("tab-articles");
    const tabVideos = document.getElementById("tab-videos");

    if (tabArticles && tabVideos) {
        tabArticles.addEventListener("click", () => {
            // ✅ If already active, do nothing
            if (tabArticles.classList.contains("active-tab")) return;

            // Update active classes
            tabArticles.classList.add("bg-white", "text-pink-600", "shadow-sm", "active-tab");
            tabVideos.classList.remove("bg-white", "text-pink-600", "shadow-sm", "active-tab");

            // Toggle visibility
            articlesContainer.classList.remove("hidden");
            videosContainer.classList.add("hidden");
        });

        tabVideos.addEventListener("click", () => {
            // ✅ If already active, do nothing
            if (tabVideos.classList.contains("active-tab")) return;

            // Update active classes
            tabVideos.classList.add("bg-white", "text-pink-600", "shadow-sm", "active-tab");
            tabArticles.classList.remove("bg-white", "text-pink-600", "shadow-sm", "active-tab");

            // Toggle visibility
            videosContainer.classList.remove("hidden");
            articlesContainer.classList.add("hidden");
        });
    }
};