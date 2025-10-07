// 인물(셀러) 스키마들
export const personSchemas = [
    {
        "@type": "Person",
        "@id": "https://queenlive.kr/sellers#vanillayun",
        name: "바닐라윤",
        description: "10년간 의류업계 경험, 매주 새로운 트렌드로 온동네 멋쟁이 만들기",
        jobTitle: "라이브커머스 셀러",
        worksFor: {
            "@id": "https://queenlive.kr/#organization",
        },
        knowsAbout: ["의류", "패션", "라이브방송", "온라인판매"],
        hasOccupation: {
            "@type": "Occupation",
            name: "라이브커머스 셀러",
            occupationLocation: {
                "@type": "Place",
                address: {
                    "@type": "PostalAddress",
                    addressCountry: "KR",
                },
            },
        },
    },
    {
        "@type": "Person",
        "@id": "https://queenlive.kr/sellers#audreygyum",
        name: "오드리겸",
        description: "갓성비 백화점브랜드 전문가, 매주 월요일 밤 8시 의류방송",
        jobTitle: "라이브커머스 셀러",
        worksFor: {
            "@id": "https://queenlive.kr/#organization",
        },
        knowsAbout: ["백화점브랜드", "의류", "라이브방송", "온라인판매"],
        hasOccupation: {
            "@type": "Occupation",
            name: "라이브커머스 셀러",
            occupationLocation: {
                "@type": "Place",
                address: {
                    "@type": "PostalAddress",
                    addressCountry: "KR",
                },
            },
        },
    },
    {
        "@type": "Person",
        "@id": "https://queenlive.kr/sellers#threebag",
        name: "쓰리백",
        description: "유통경력 14년차, 일매출 4억 대형셀러, 라이브커머스의 킹",
        jobTitle: "라이브커머스 셀러",
        worksFor: {
            "@id": "https://queenlive.kr/#organization",
        },
        knowsAbout: ["유통", "도매", "라이브방송", "온라인판매", "대량판매"],
        hasOccupation: {
            "@type": "Occupation",
            name: "라이브커머스 셀러",
            occupationLocation: {
                "@type": "Place",
                address: {
                    "@type": "PostalAddress",
                    addressCountry: "KR",
                },
            },
        },
    },
    {
        "@type": "Person",
        "@id": "https://queenlive.kr/sellers#sinnandae",
        name: "신난데이",
        description: "방송경력 16년차, 클릭메이트 세손가락 셀러, 동대문 코스트코 점령중",
        jobTitle: "라이브커머스 셀러",
        worksFor: {
            "@id": "https://queenlive.kr/#organization",
        },
        knowsAbout: ["방송", "동대문", "도매", "라이브방송", "온라인판매"],
        hasOccupation: {
            "@type": "Occupation",
            name: "라이브커머스 셀러",
            occupationLocation: {
                "@type": "Place",
                address: {
                    "@type": "PostalAddress",
                    addressCountry: "KR",
                },
            },
        },
    },
    {
        "@type": "Person",
        "@id": "https://queenlive.kr/sellers#nov",
        name: "노브",
        description: "패션회사 소싱경력, 3040를 위한 데일리룩 전문가",
        jobTitle: "라이브커머스 셀러",
        worksFor: {
            "@id": "https://queenlive.kr/#organization",
        },
        knowsAbout: ["패션소싱", "데일리룩", "3040패션", "라이브방송"],
        hasOccupation: {
            "@type": "Occupation",
            name: "라이브커머스 셀러",
            occupationLocation: {
                "@type": "Place",
                address: {
                    "@type": "PostalAddress",
                    addressCountry: "KR",
                },
            },
        },
    },
];
