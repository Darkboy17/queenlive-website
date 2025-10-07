window.initSellers = function () {
    const container = document.getElementById("sellers-container");
    if (!container) {
        console.warn("Sellers container not found");
        return;
    }

    const sellersData = [
        {
            name: "바닐라윤",
            specialty: "여성 하이엔드 패션 전문가",
            description: "10년간 의류업계에 있었어요\n매주 새로운 트렌드로\n온동네 멋쟁이 만들기 프로젝트",
            image: "public/images/sellers/1.webp",
            link: "https://player.clickmate.kr/seller/10214"
        },
        {
            name: "오드리겸",
            specialty: "백화점 브랜드 전문가",
            description: "갓성비 백화점브랜드\n매주 월요일 밤 8시 의류방송\n자 드가자~ 오드리겸 행차요~",
            image: "public/images/sellers/2.webp",
            link: "https://player.clickmate.kr/seller/63728"
        },
        {
            name: "신난데이",
            specialty: "방송 전문가",
            description: "방송경력 16년차\n클릭메이트 세손가락 셀러\n동대문 코스트코 점령 중",
            image: "public/images/sellers/3.webp",
            link: "https://player.clickmate.kr/seller/18978"
        },
        {
            name: "센스",
            specialty: "센스 가득한 상품 정복자",
            description: "센스있는 상품들만 보여주는\n건강기능, 축산물, 수산물, 생활용품 등\n여긴 없는게 없다.",
            image: "public/images/sellers/4.png",
            link: "https://player.clickmate.kr/seller/159370"
        },
        {
            name: "쓰리백",
            specialty: "유통 전문가",
            description: "유통경력 14년차\n일매출 4억 대형셀러\n내가 라이브커머스 킹이다.",
            image: "public/images/sellers/5.webp",
            link: "https://player.clickmate.kr/seller/48134"
        },
        {
            name: "제이플러스",
            specialty: "토탈 패션 전문가",
            description: "머리부터 발끝까지\n여자들의 논스톱 쇼핑\n인스타그램 화제의 영상",
            image: "public/images/sellers/6.webp",
            link: "https://player.clickmate.kr/seller/27878"
        },
        {
            name: "더베이지",
            specialty: "동대문 패션 전문가",
            description: "옷가게 10년차\n동대문 밑바닥부터 정상까지\n라방씬의 절반은 내꺼",
            image: "public/images/sellers/7.webp",
            link: "https://player.clickmate.kr/seller/74052"
        },
        {
            name: "오늘만",
            specialty: "특가 전문가",
            description: "장안의 화제 미남셀러\n코스트코 창고 전문\n땡처리 초특가의 신",
            image: "public/images/sellers/8.webp",
            link: "https://player.clickmate.kr/seller/133836"
        }
    ];

    sellersData.forEach(seller => {
        const sellerElement = document.createElement("a");
        sellerElement.href = seller.link;
        sellerElement.target = "_blank";
        sellerElement.rel = "noopener noreferrer";
        sellerElement.className = "group relative flex flex-col items-center text-center transition-transform duration-300 hover:scale-105";

        // Image container
        const imageContainer = document.createElement("div");
        imageContainer.className = "relative w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-lg";
        imageContainer.style.boxShadow = "0 0 0 2px rgb(219 39 119)";

        // Seller image
        const sellerImage = document.createElement("img");
        sellerImage.alt = seller.name;
        sellerImage.width = 128;
        sellerImage.height = 128;
        sellerImage.decoding = "async";
        sellerImage.className = "w-full h-full object-container transition-opacity duration-300 group-hover:opacity-40";
        sellerImage.src = seller.image;

        // Logo overlay
        const logoOverlay = document.createElement("div");
        logoOverlay.className = "absolute inset-0 flex items-center justify-center pointer-events-none";

        const logoImage = document.createElement("img");
        logoImage.alt = "로고";
        logoImage.loading = "lazy";
        logoImage.width = 40;
        logoImage.height = 40;
        logoImage.decoding = "async";
        logoImage.className = "opacity-0 group-hover:opacity-100 transition-opacity duration-300";
        logoImage.src = "public/images/logo-outline.png";

        logoOverlay.appendChild(logoImage);
        imageContainer.appendChild(sellerImage);
        imageContainer.appendChild(logoOverlay);

        // Seller name
        const nameElement = document.createElement("h3");
        nameElement.className = "mt-4 text-lg font-medium";
        nameElement.textContent = seller.name;

        // Specialty
        const specialtyElement = document.createElement("p");
        specialtyElement.className = "mt-1 text-sm text-pink-600";
        specialtyElement.textContent = seller.specialty;

        // Description
        const descriptionElement = document.createElement("p");
        descriptionElement.className = "mt-2 text-sm text-gray-500 whitespace-pre-line";
        descriptionElement.textContent = seller.description;

        // Append all elements
        sellerElement.appendChild(imageContainer);
        sellerElement.appendChild(nameElement);
        sellerElement.appendChild(specialtyElement);
        sellerElement.appendChild(descriptionElement);

        container.appendChild(sellerElement);
    });
};