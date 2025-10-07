// 리뷰 관련 스키마들
export const reviewSchemas = [
    {
        "@type": "Review",
        "@id": "https://queenlive.kr/#review1",
        reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
        },
        author: {
            "@type": "Person",
            name: "바닐라윤",
        },
        reviewBody: "단 하루 라이브로 1억 9천9백만원! 클릭메이트 광고 영상이 38.9만 뷰를 기록하고, 고객 선택권을 위한 '취소쿠폰' 기능도 효과적이었죠. 무엇보다 콘텐츠 기획과 꾸준한 개선 덕분에 가능한 결과였습니다.",
        itemReviewed: {
            "@id": "https://queenlive.kr/#software",
        },
        datePublished: "2024-12-01",
    },
    {
        "@type": "Review",
        "@id": "https://queenlive.kr/#review2",
        reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
        },
        author: {
            "@type": "Person",
            name: "오드리겸",
        },
        reviewBody: "인스타, 유튜브에서 했으면 지금 매출의 반도 못 냈을 거예요. 클릭메이트는 방송 알림부터 코디 그대로의 구매 동선, 실시간 소통과 결제까지 술술 이어져서 라방 하나에 수백 건의 주문이 들어와요!",
        itemReviewed: {
            "@id": "https://queenlive.kr/#software",
        },
        datePublished: "2024-11-15",
    },
    {
        "@type": "Review",
        "@id": "https://queenlive.kr/#review3",
        reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
        },
        author: {
            "@type": "Person",
            name: "쓰리백",
        },
        reviewBody: "쓰리백의 1주년과 10만 단골 돌파를 기념해 4일간 진행된 특별 라이브 방송! 창고 대방출부터 역대급 콜라보, 본사 특가전과 피날레까지, 단골님들과 진심으로 소통하며 10억 원이라는 놀라운 성과를 만들었습니다. 이는 단순한 매출을 넘어, 쓰리백이 신뢰의 플랫폼으로 성장하고 있음을 증명하는 감동의 순간이었습니다.",
        itemReviewed: {
            "@id": "https://queenlive.kr/#software",
        },
        datePublished: "2025-07-08",
    },
];
