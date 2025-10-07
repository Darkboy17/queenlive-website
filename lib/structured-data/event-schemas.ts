// 이벤트/타임라인 스키마들
export const eventSchemas = [
  {
    "@type": "Event",
    "@id": "https://queenlive.kr/timeline#founding",
    name: "퀸라이브 설립",
    description: "퀸라이브 회사 설립",
    startDate: "2021-07-01",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KR",
        addressRegion: "서울",
      },
    },
    organizer: {
      "@id": "https://queenlive.kr/#organization",
    },
    eventStatus: "https://schema.org/EventScheduled",
  },
  {
    "@type": "Event",
    "@id": "https://queenlive.kr/timeline#launch",
    name: "클릭메이트 라이브커머스 서비스 런칭",
    description: "클릭메이트 라이브커머스 플랫폼 정식 서비스 시작",
    startDate: "2023-03-01",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KR",
        addressRegion: "서울",
      },
    },
    organizer: {
      "@id": "https://queenlive.kr/#organization",
    },
    eventStatus: "https://schema.org/EventScheduled",
  },
  {
    "@type": "Event",
    "@id": "https://queenlive.kr/timeline#investment",
    name: "스파크랩 투자유치",
    description: "스파크랩으로부터 투자 유치 성공",
    startDate: "2023-04-01",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KR",
        addressRegion: "서울",
      },
    },
    organizer: {
      "@id": "https://queenlive.kr/#organization",
    },
    eventStatus: "https://schema.org/EventScheduled",
  },
  {
    "@type": "Event",
    "@id": "https://queenlive.kr/timeline#milestone1",
    name: "누적 가입자수 10,000명 달성",
    description: "플랫폼 사용자 1만 명 돌파",
    startDate: "2023-12-01",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KR",
        addressRegion: "서울",
      },
    },
    organizer: {
      "@id": "https://queenlive.kr/#organization",
    },
    eventStatus: "https://schema.org/EventScheduled",
  },
  {
    "@type": "Event",
    "@id": "https://queenlive.kr/timeline#revenue",
    name: "1년 거래액 318억원 달성",
    description: "연간 거래액 318억 원 달성",
    startDate: "2024-12-01",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KR",
        addressRegion: "서울",
      },
    },
    organizer: {
      "@id": "https://queenlive.kr/#organization",
    },
    eventStatus: "https://schema.org/EventScheduled",
  },
  {
    "@type": "Event",
    "@id": "https://queenlive.kr/timeline#milestone2",
    name: "누적 가입자수 400,000명 달성",
    description: "플랫폼 사용자 40만 명 돌파",
    startDate: "2025-05-01",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KR",
        addressRegion: "서울",
      },
    },
    organizer: {
      "@id": "https://queenlive.kr/#organization",
    },
    eventStatus: "https://schema.org/EventScheduled",
  },
];
