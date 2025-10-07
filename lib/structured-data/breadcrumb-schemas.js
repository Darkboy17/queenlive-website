// Breadcrumb 스키마들
export const baseBreadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": "https://queenlive.kr/#breadcrumb",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "홈",
            item: "https://queenlive.kr/",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "뉴스",
            item: "https://queenlive.kr/news",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "연락처",
            item: "https://queenlive.kr/contact",
        },
    ],
};
export const createBreadcrumbSchema = (pages) => {
    var _a;
    return {
        "@type": "BreadcrumbList",
        "@id": `${(_a = pages[pages.length - 1]) === null || _a === void 0 ? void 0 : _a.url}#breadcrumb`,
        itemListElement: pages.map((page, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: page.name,
            item: page.url,
        })),
    };
};
