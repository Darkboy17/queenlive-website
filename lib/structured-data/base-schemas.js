// 공통 기본 스키마들
export const organizationSchema = {
    "@type": "Organization",
    "@id": "https://queenlive.kr/#organization",
    name: "퀸라이브",
    alternateName: "QueenLive",
    url: "https://queenlive.kr",
    logo: "https://queenlive.kr/images/logo-outline.png",
    description: "누구나 쉽게 라이브 방송을 시작하고, 쉽고 빠르게 상품을 판매할 수 있도록 돕습니다.",
    email: "official@queenlive.co.kr",
    telephone: "+821877-8613",
    address: {
        "@type": "PostalAddress",
        addressCountry: "KR",
        addressRegion: "서울",
    },
    sameAs: ["https://queenlive.kr"],
    foundingDate: "2022",
    numberOfEmployees: "10-50",
    industry: "Technology",
    knowsAbout: [
        "라이브커머스",
        "라이브방송",
        "실시간정산",
        "이커머스",
        "온라인쇼핑",
    ],
};
export const websiteSchema = {
    "@type": "WebSite",
    "@id": "https://queenlive.kr/#website",
    url: "https://queenlive.kr",
    name: "퀸라이브 - 대한민국 최고의 라이브 솔루션",
    description: "라이브커머스 플랫폼으로 누구나 쉽게 라이브 방송을 통해 상품을 판매할 수 있습니다.",
    publisher: {
        "@id": "https://queenlive.kr/#organization",
    },
    inLanguage: "ko-KR",
};
export const softwareApplicationSchema = {
    "@type": "SoftwareApplication",
    "@id": "https://queenlive.kr/#software",
    name: "퀸라이브",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "라이브커머스 플랫폼으로 누구나 쉽게 라이브 방송을 통해 상품을 판매할 수 있습니다.",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "KRW",
        description: "무료 셀러 입점",
    },
    publisher: {
        "@id": "https://queenlive.kr/#organization",
    },
    features: [
        "실시간 라이브 방송",
        "즉시 정산 시스템",
        "간편 상품 등록",
        "실시간 채팅",
        "마케팅 지원",
    ],
};
export const serviceSchema = {
    "@type": "Service",
    "@id": "https://queenlive.kr/#service",
    name: "라이브커머스 플랫폼 서비스",
    description: "라이브 방송을 통한 상품 판매 및 마케팅 서비스",
    provider: {
        "@id": "https://queenlive.kr/#organization",
    },
    serviceType: "라이브커머스",
    audience: {
        "@type": "Audience",
        audienceType: "온라인 셀러, 브랜드, 개인사업자",
    },
    offers: {
        "@type": "Offer",
        description: "무료 입점, 실시간 정산, 마케팅 지원",
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "라이브커머스 솔루션",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "실시간 라이브 방송",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "즉시 정산 시스템",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "간편 상품 등록",
                },
            },
        ],
    },
};
export const aggregateRatingSchema = {
    "@type": "AggregateRating",
    "@id": "https://queenlive.kr/#aggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
    itemReviewed: {
        "@id": "https://queenlive.kr/#software",
    },
};
export const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://queenlive.kr/#localbusiness",
    name: "퀸라이브",
    image: "https://queenlive.kr/images/logo-outline.png",
    description: "라이브커머스 플랫폼으로 누구나 쉽게 라이브 방송을 통해 상품을 판매할 수 있습니다.",
    address: {
        "@type": "PostalAddress",
        streetAddress: "올림픽로 240, 롯데월드웰빙센터 2F",
        addressLocality: "송파구",
        addressRegion: "서울특별시",
        addressCountry: "KR",
    },
    contactPoint: [
        {
            "@type": "ContactPoint",
            telephone: "+821877-8613",
            contactType: "customer service",
            availableLanguage: "Korean",
            hoursAvailable: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "10:00",
                closes: "19:00",
            },
        },
        {
            "@type": "ContactPoint",
            email: "official@queenlive.co.kr",
            contactType: "customer service",
            availableLanguage: "Korean",
        },
    ],
    openingHours: "Mo-Fr 10:00-19:00",
    url: "https://queenlive.kr",
    sameAs: [
        "https://www.instagram.com/clickmate.official/",
        "https://www.linkedin.com/company/queenlive/",
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "라이브커머스 서비스",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "셀러 등록 및 제휴",
                    description: "무료 셀러 등록, 1-2영업일 내 승인",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "기술 지원",
                    description: "24시간 라이브 방송 지원 및 기술 문의",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "결제 및 정산 문의",
                    description: "즉시 정산 시스템 및 결제 관련 지원",
                },
            },
        ],
    },
};
