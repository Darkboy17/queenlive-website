// lib/structured-data/base-schemas.ts
var organizationSchema = {
  "@type": "Organization",
  "@id": "https://queenlive.kr/#organization",
  name: "\uD038\uB77C\uC774\uBE0C",
  alternateName: "QueenLive",
  url: "https://queenlive.kr",
  logo: "https://queenlive.kr/images/logo-outline.png",
  description: "\uB204\uAD6C\uB098 \uC27D\uAC8C \uB77C\uC774\uBE0C \uBC29\uC1A1\uC744 \uC2DC\uC791\uD558\uACE0, \uC27D\uACE0 \uBE60\uB974\uAC8C \uC0C1\uD488\uC744 \uD310\uB9E4\uD560 \uC218 \uC788\uB3C4\uB85D \uB3D5\uC2B5\uB2C8\uB2E4.",
  email: "official@queenlive.co.kr",
  telephone: "+821877-8613",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KR",
    addressRegion: "\uC11C\uC6B8"
  },
  sameAs: ["https://queenlive.kr"],
  foundingDate: "2022",
  numberOfEmployees: "10-50",
  industry: "Technology",
  knowsAbout: [
    "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4",
    "\uB77C\uC774\uBE0C\uBC29\uC1A1",
    "\uC2E4\uC2DC\uAC04\uC815\uC0B0",
    "\uC774\uCEE4\uBA38\uC2A4",
    "\uC628\uB77C\uC778\uC1FC\uD551"
  ]
};
var websiteSchema = {
  "@type": "WebSite",
  "@id": "https://queenlive.kr/#website",
  url: "https://queenlive.kr",
  name: "\uD038\uB77C\uC774\uBE0C - \uB300\uD55C\uBBFC\uAD6D \uCD5C\uACE0\uC758 \uB77C\uC774\uBE0C \uC194\uB8E8\uC158",
  description: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uD50C\uB7AB\uD3FC\uC73C\uB85C \uB204\uAD6C\uB098 \uC27D\uAC8C \uB77C\uC774\uBE0C \uBC29\uC1A1\uC744 \uD1B5\uD574 \uC0C1\uD488\uC744 \uD310\uB9E4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
  publisher: {
    "@id": "https://queenlive.kr/#organization"
  },
  inLanguage: "ko-KR"
};
var softwareApplicationSchema = {
  "@type": "SoftwareApplication",
  "@id": "https://queenlive.kr/#software",
  name: "\uD038\uB77C\uC774\uBE0C",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uD50C\uB7AB\uD3FC\uC73C\uB85C \uB204\uAD6C\uB098 \uC27D\uAC8C \uB77C\uC774\uBE0C \uBC29\uC1A1\uC744 \uD1B5\uD574 \uC0C1\uD488\uC744 \uD310\uB9E4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "KRW",
    description: "\uBB34\uB8CC \uC140\uB7EC \uC785\uC810"
  },
  publisher: {
    "@id": "https://queenlive.kr/#organization"
  },
  features: [
    "\uC2E4\uC2DC\uAC04 \uB77C\uC774\uBE0C \uBC29\uC1A1",
    "\uC989\uC2DC \uC815\uC0B0 \uC2DC\uC2A4\uD15C",
    "\uAC04\uD3B8 \uC0C1\uD488 \uB4F1\uB85D",
    "\uC2E4\uC2DC\uAC04 \uCC44\uD305",
    "\uB9C8\uCF00\uD305 \uC9C0\uC6D0"
  ]
};
var serviceSchema = {
  "@type": "Service",
  "@id": "https://queenlive.kr/#service",
  name: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uD50C\uB7AB\uD3FC \uC11C\uBE44\uC2A4",
  description: "\uB77C\uC774\uBE0C \uBC29\uC1A1\uC744 \uD1B5\uD55C \uC0C1\uD488 \uD310\uB9E4 \uBC0F \uB9C8\uCF00\uD305 \uC11C\uBE44\uC2A4",
  provider: {
    "@id": "https://queenlive.kr/#organization"
  },
  serviceType: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4",
  audience: {
    "@type": "Audience",
    audienceType: "\uC628\uB77C\uC778 \uC140\uB7EC, \uBE0C\uB79C\uB4DC, \uAC1C\uC778\uC0AC\uC5C5\uC790"
  },
  offers: {
    "@type": "Offer",
    description: "\uBB34\uB8CC \uC785\uC810, \uC2E4\uC2DC\uAC04 \uC815\uC0B0, \uB9C8\uCF00\uD305 \uC9C0\uC6D0"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uC194\uB8E8\uC158",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "\uC2E4\uC2DC\uAC04 \uB77C\uC774\uBE0C \uBC29\uC1A1"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "\uC989\uC2DC \uC815\uC0B0 \uC2DC\uC2A4\uD15C"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "\uAC04\uD3B8 \uC0C1\uD488 \uB4F1\uB85D"
        }
      }
    ]
  }
};
var aggregateRatingSchema = {
  "@type": "AggregateRating",
  "@id": "https://queenlive.kr/#aggregateRating",
  ratingValue: "4.8",
  reviewCount: "150",
  bestRating: "5",
  worstRating: "1",
  itemReviewed: {
    "@id": "https://queenlive.kr/#software"
  }
};
var localBusinessSchema = {
  "@type": "LocalBusiness",
  "@id": "https://queenlive.kr/#localbusiness",
  name: "\uD038\uB77C\uC774\uBE0C",
  image: "https://queenlive.kr/images/logo-outline.png",
  description: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uD50C\uB7AB\uD3FC\uC73C\uB85C \uB204\uAD6C\uB098 \uC27D\uAC8C \uB77C\uC774\uBE0C \uBC29\uC1A1\uC744 \uD1B5\uD574 \uC0C1\uD488\uC744 \uD310\uB9E4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "\uC62C\uB9BC\uD53D\uB85C 240, \uB86F\uB370\uC6D4\uB4DC\uC6F0\uBE59\uC13C\uD130 2F",
    addressLocality: "\uC1A1\uD30C\uAD6C",
    addressRegion: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC",
    addressCountry: "KR"
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
        closes: "19:00"
      }
    },
    {
      "@type": "ContactPoint",
      email: "official@queenlive.co.kr",
      contactType: "customer service",
      availableLanguage: "Korean"
    }
  ],
  openingHours: "Mo-Fr 10:00-19:00",
  url: "https://queenlive.kr",
  sameAs: [
    "https://www.instagram.com/clickmate.official/",
    "https://www.linkedin.com/company/queenlive/"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uC11C\uBE44\uC2A4",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "\uC140\uB7EC \uB4F1\uB85D \uBC0F \uC81C\uD734",
          description: "\uBB34\uB8CC \uC140\uB7EC \uB4F1\uB85D, 1-2\uC601\uC5C5\uC77C \uB0B4 \uC2B9\uC778"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "\uAE30\uC220 \uC9C0\uC6D0",
          description: "24\uC2DC\uAC04 \uB77C\uC774\uBE0C \uBC29\uC1A1 \uC9C0\uC6D0 \uBC0F \uAE30\uC220 \uBB38\uC758"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "\uACB0\uC81C \uBC0F \uC815\uC0B0 \uBB38\uC758",
          description: "\uC989\uC2DC \uC815\uC0B0 \uC2DC\uC2A4\uD15C \uBC0F \uACB0\uC81C \uAD00\uB828 \uC9C0\uC6D0"
        }
      }
    ]
  }
};

// lib/structured-data/reviews-schemas.ts
var reviewSchemas = [
  {
    "@type": "Review",
    "@id": "https://queenlive.kr/#review1",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5"
    },
    author: {
      "@type": "Person",
      name: "\uBC14\uB2D0\uB77C\uC724"
    },
    reviewBody: "\uB2E8 \uD558\uB8E8 \uB77C\uC774\uBE0C\uB85C 1\uC5B5 9\uCC9C9\uBC31\uB9CC\uC6D0! \uD074\uB9AD\uBA54\uC774\uD2B8 \uAD11\uACE0 \uC601\uC0C1\uC774 38.9\uB9CC \uBDF0\uB97C \uAE30\uB85D\uD558\uACE0, \uACE0\uAC1D \uC120\uD0DD\uAD8C\uC744 \uC704\uD55C '\uCDE8\uC18C\uCFE0\uD3F0' \uAE30\uB2A5\uB3C4 \uD6A8\uACFC\uC801\uC774\uC5C8\uC8E0. \uBB34\uC5C7\uBCF4\uB2E4 \uCF58\uD150\uCE20 \uAE30\uD68D\uACFC \uAFB8\uC900\uD55C \uAC1C\uC120 \uB355\uBD84\uC5D0 \uAC00\uB2A5\uD55C \uACB0\uACFC\uC600\uC2B5\uB2C8\uB2E4.",
    itemReviewed: {
      "@id": "https://queenlive.kr/#software"
    },
    datePublished: "2024-12-01"
  },
  {
    "@type": "Review",
    "@id": "https://queenlive.kr/#review2",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5"
    },
    author: {
      "@type": "Person",
      name: "\uC624\uB4DC\uB9AC\uACB8"
    },
    reviewBody: "\uC778\uC2A4\uD0C0, \uC720\uD29C\uBE0C\uC5D0\uC11C \uD588\uC73C\uBA74 \uC9C0\uAE08 \uB9E4\uCD9C\uC758 \uBC18\uB3C4 \uBABB \uB0C8\uC744 \uAC70\uC608\uC694. \uD074\uB9AD\uBA54\uC774\uD2B8\uB294 \uBC29\uC1A1 \uC54C\uB9BC\uBD80\uD130 \uCF54\uB514 \uADF8\uB300\uB85C\uC758 \uAD6C\uB9E4 \uB3D9\uC120, \uC2E4\uC2DC\uAC04 \uC18C\uD1B5\uACFC \uACB0\uC81C\uAE4C\uC9C0 \uC220\uC220 \uC774\uC5B4\uC838\uC11C \uB77C\uBC29 \uD558\uB098\uC5D0 \uC218\uBC31 \uAC74\uC758 \uC8FC\uBB38\uC774 \uB4E4\uC5B4\uC640\uC694!",
    itemReviewed: {
      "@id": "https://queenlive.kr/#software"
    },
    datePublished: "2024-11-15"
  },
  {
    "@type": "Review",
    "@id": "https://queenlive.kr/#review3",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5"
    },
    author: {
      "@type": "Person",
      name: "\uC4F0\uB9AC\uBC31"
    },
    reviewBody: "\uC4F0\uB9AC\uBC31\uC758 1\uC8FC\uB144\uACFC 10\uB9CC \uB2E8\uACE8 \uB3CC\uD30C\uB97C \uAE30\uB150\uD574 4\uC77C\uAC04 \uC9C4\uD589\uB41C \uD2B9\uBCC4 \uB77C\uC774\uBE0C \uBC29\uC1A1! \uCC3D\uACE0 \uB300\uBC29\uCD9C\uBD80\uD130 \uC5ED\uB300\uAE09 \uCF5C\uB77C\uBCF4, \uBCF8\uC0AC \uD2B9\uAC00\uC804\uACFC \uD53C\uB0A0\uB808\uAE4C\uC9C0, \uB2E8\uACE8\uB2D8\uB4E4\uACFC \uC9C4\uC2EC\uC73C\uB85C \uC18C\uD1B5\uD558\uBA70 10\uC5B5 \uC6D0\uC774\uB77C\uB294 \uB180\uB77C\uC6B4 \uC131\uACFC\uB97C \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uB2E8\uC21C\uD55C \uB9E4\uCD9C\uC744 \uB118\uC5B4, \uC4F0\uB9AC\uBC31\uC774 \uC2E0\uB8B0\uC758 \uD50C\uB7AB\uD3FC\uC73C\uB85C \uC131\uC7A5\uD558\uACE0 \uC788\uC74C\uC744 \uC99D\uBA85\uD558\uB294 \uAC10\uB3D9\uC758 \uC21C\uAC04\uC774\uC5C8\uC2B5\uB2C8\uB2E4.",
    itemReviewed: {
      "@id": "https://queenlive.kr/#software"
    },
    datePublished: "2025-07-08"
  }
];

// lib/structured-data/news-schemas.ts
var newsArticleSchemas = [
  {
    "@type": "NewsArticle",
    "@id": "https://queenlive.kr/news#article1",
    headline: "\uD074\uB9AD\uBA54\uC774\uD2B8, \uB86F\uB370\uD648\uC1FC\uD551\uACFC \uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uBC29\uC1A1\uD611\uB825\uC73C\uB85C \uC131\uC7A5\uBAA8\uB378 \uD655\uB300",
    description: "\u321C\uD038\uB77C\uC774\uBE0C(\uB300\uD45C\uC774\uC0AC \uC724\uC815\uD0C1) \u2018\uD074\uB9AD\uBA54\uC774\uD2B8\u2019\uB294 \uB86F\uB370\uD648\uC1FC\uD551\uACFC \uD611\uB825\uC744 \uD1B5\uD574 \uD074\uB9AD\uBA54\uC774\uD2B8 \uD2B9\uBCC4\uBC29\uC1A1\uC744 \uCD94\uC9C4\uD588\uB2E4. \uB86F\uB370\uD648\uC1FC\uD551\uC774 \uBCF4\uC720\uD55C \uB300\uD45C \uBE0C\uB79C\uB4DC\uC778 LBL\uB97C \uBE44\uB86F\uD574 \uAD6D\uB0B4 \uBC31\uD654\uC810 \uBE0C\uB79C\uB4DC 30\uC5EC\uC885\uC744 \u2018\uD074\uB9AD\uBA54\uC774\uD2B8\u2019\uC758 \uBE45\uC140\uB7EC\uC640\uC758 \uB9E4\uCE6D\uC744 \uD1B5\uD574 \uBC29\uC1A1\uC744 \uCD94\uC9C4\uD588\uB2E4.",
    datePublished: "2025-09-02",
    dateModified: "2025-09-02",
    author: {
      "@type": "Organization",
      name: "\uB9E4\uC77C\uACBD\uC81C"
    },
    publisher: {
      "@id": "https://queenlive.kr/#organization"
    },
    url: "https://www.mk.co.kr/news/business/11408875",
    image: "https://queenlive.kr/images/audreygyum-news.jpg",
    articleSection: "Business",
    inLanguage: "ko-KR"
  },
  {
    "@type": "NewsArticle",
    "@id": "https://queenlive.kr/news#article2",
    headline: "\uD074\uB9AD\uBA54\uC774\uD2B8, \uD328\uC158\uC140\uB7EC \uC81C\uC774\uD50C\uB7EC\uC2A4 \uBC29\uC1A1 \uD55C \uBC88\uC5D0 1\uC5B52\uCC9C\uB9CC\uC6D0 \uB9E4\uCD9C \uB2EC\uC131",
    description: "\uD038\uB77C\uC774\uBE0C\uC758 \u2018\uD074\uB9AD\uBA54\uC774\uD2B8\u2019\uAC00 \uBE0C\uB79C\uB4DC\uC0AC\uC640 \uC140\uB7EC\uAC04 \uB9E4\uCE6D \uD504\uB85C\uADF8\uB7A8\uC744 \uD1B5\uD574 \uC758\uBBF8 \uC788\uB294 \uC131\uACFC\uB97C \uCC3D\uCD9C\uD588\uB2E4. \uC9C0\uB09C8\uC6D427\uC77C, \uD328\uC158\uAE30\uC5C5 \uB3D9\uAD11\uCF54\uD37C\uB808\uC774\uC158\uACFC \uD074\uB9AD\uBA54\uC774\uD2B8\uC758 \uBE45\uC140\uB7EC \uC81C\uC774\uD50C\uB7EC\uC2A4\uAC00 \uD568\uAED8 \uC9C4\uD589\uD55C \uB77C\uC774\uBE0C \uBC29\uC1A1\uC5D0\uC11C \uB2E8 4\uC2DC\uAC04 \uB9CC\uC5D0 1\uC5B52\uCC9C\uB9CC\uC6D0\uC758 \uB9E4\uCD9C\uC744 \uB2EC\uC131\uD55C \uAC83\uC774\uB2E4.",
    datePublished: "2025-09-02",
    dateModified: "2025-09-02",
    author: {
      "@type": "Organization",
      name: "\uD328\uC158\uBE44\uC988"
    },
    publisher: {
      "@id": "https://queenlive.kr/#organization"
    },
    url: "https://fashionbiz.co.kr/article/219169",
    image: "https://queenlive.kr/images/jplus-news.png",
    articleSection: "Business",
    inLanguage: "ko-KR"
  },
  {
    "@type": "NewsArticle",
    "@id": "https://queenlive.kr/news#article3",
    headline: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \u2018\uB3CC\uD48D\u2019 \uD074\uB9AD\uBA54\uC774\uD2B8, \uC6D4 \uAC70\uB798\uC561 160\uC5B5 \uB3CC\uD30C",
    description: "\uB2E8\uACE8 \uACE0\uAC1D \uCEE4\uBA38\uC2A4 \uD50C\uB7AB\uD3FC\uC778 \uD074\uB9AD\uBA54\uC774\uD2B8\uAC00 \uC9C0\uB09C\uB2EC \uC6D4 \uAE30\uC900 \uAC70\uB798\uC561 160\uC5B5\uC6D0\uC744 \uB3CC\uD30C\uD558\uBA70 \uCEE4\uBA38\uC2A4 \uC2DC\uC7A5\uC5D0 \uB3CC\uD48D\uC744 \uC774\uB04C\uACE0 \uC788\uB2E4.",
    datePublished: "2025-08-18",
    dateModified: "2025-08-18",
    author: {
      "@type": "Organization",
      name: "\uC774\uB274\uC2A4\uD22C\uB370\uC774"
    },
    publisher: {
      "@id": "https://queenlive.kr/#organization"
    },
    url: "https://www.enewstoday.co.kr/news/articleView.html?idxno=2316881",
    image: "https://queenlive.kr/images/enewstoday-sens.jpg",
    articleSection: "Business",
    inLanguage: "ko-KR"
  },
  {
    "@type": "NewsArticle",
    "@id": "https://queenlive.kr/news#article4",
    headline: "\uD328\uC158\uADF8\uB8F9 \uB3D9\uAD11\uC778\uD130\uB0B4\uC154\uB0A0, \uD074\uB9AD\uBA54\uC774\uD2B8\uC640 \uC804\uB7B5\uC801 \uC0AC\uC5C5\uBAA8\uB378 \uD1B5\uD55C \uB3D9\uBC18\uC131\uC7A5 \uCD94\uC9C4",
    description: "\u321C\uB3D9\uAD11\uC778\uD130\uB0B4\uC154\uB0A0\uC740 \u321C\uD038\uB77C\uC774\uBE0C\uC758 \uD074\uB9AD\uBA54\uC774\uD2B8 \uCC44\uB110\uC744 \uD1B5\uD55C \uC0C8\uB85C\uC6B4 \uC131\uC7A5\uBAA8\uB378\uAD6C\uCD95 \uBC0F \uB3D9\uBC18\uC131\uC7A5\uC5D0 \uC591 \uC0AC\uAC00 \uD569\uC758\uD588\uB2E4\uACE0 \uBC1D\uD614\uB2E4.",
    datePublished: "2025-07-18",
    dateModified: "2025-07-18",
    author: {
      "@type": "Organization",
      name: "\uB3D9\uC544\uC77C\uBCF4"
    },
    publisher: {
      "@id": "https://queenlive.kr/#organization"
    },
    url: "https://www.donga.com/news/article/all/20250718/132025418/1",
    image: "https://queenlive.kr/images/withdongguang.jpg",
    articleSection: "Business",
    inLanguage: "ko-KR"
  },
  {
    "@type": "NewsArticle",
    "@id": "https://queenlive.kr/news#article5",
    headline: "\uD038\uB77C\uC774\uBE0C, \uBE0C\uB79C\uB4DC\xB7\uC140\uB7EC \uD611\uC5C5 \u2018Growth with Clickmate\u2019 \uD3EC\uB7FC",
    description: "\uB2E8\uACE8\uACE0\uAC1D\uC744 \uAE30\uBC18\uC73C\uB85C \uD55C \uD3D0\uC1C4\uD615 \uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4\uB85C \uC2DC\uC7A5\uC5D0\uC11C \uD3ED\uBC1C\uC801 \uC131\uC7A5\uC744 \uC774\uB04C\uACE0 \uC788\uB294 \u321C\uD038\uB77C\uC774\uBE0C(\uB300\uD45C \uC724\uC815\uD0C1)\uAC00 \uC81C2\uD68C \uD3EC\uB7FC \u2018Growth with Clickmate\u2019\uB97C \uD1B5\uD574 \uBE0C\uB79C\uB4DC\uC640 \uC140\uB7EC\uC758 \uD611\uC5C5\uBAA8\uB378\uC744 \uC131\uACF5\uC801\uC73C\uB85C \uC774\uB04C\uC5C8\uB2E4\uACE0 \uBC1D\uD614\uB2E4.",
    datePublished: "2025-07-11",
    dateModified: "2025-07-11",
    author: {
      "@type": "Organization",
      name: "\uC911\uC559\uC77C\uBCF4"
    },
    publisher: {
      "@id": "https://queenlive.kr/#organization"
    },
    url: "https://www.joongang.co.kr/article/25350849",
    image: "https://queenlive.kr/images/conferencegrowth.jpg",
    articleSection: "Business",
    inLanguage: "ko-KR"
  },
  {
    "@type": "NewsArticle",
    "@id": "https://queenlive.kr/news#article6",
    headline: "\uD074\uB9AD\uBA54\uC774\uD2B8, \uB300\uD45C \uC140\uB7EC '\uC4F0\uB9AC\uBC31' \uB2E8\uACE8 10\uB9CC\uBA85 \uB3CC\uD30C\u2026 \uB2E8\uC77C \uBC29\uC1A1 \uB9E4\uCD9C 4\uC5B5\uC6D0 \uAE30\uB85D",
    description: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uD50C\uB7AB\uD3FC \uD074\uB9AD\uBA54\uC774\uD2B8\uC758 \uC785\uC810 \uC140\uB7EC '\uC4F0\uB9AC\uBC31'\uC774 \uBE0C\uB79C\uB4DC \uB860\uCE6D 1\uC8FC\uB144\uC744 \uB9DE\uC544 \uB204\uC801 \uB2E8\uACE8 10\uB9CC\uBA85 \uB3CC\uD30C, \uB2E8\uC77C \uD68C\uCC28 \uB9E4\uCD9C 4\uC5B5\uC6D0, \uC8FC\uBB38 7\uB9CC5\uCC9C\uAC74\uC744 \uAE30\uB85D\uD588\uB2E4\uACE0 \uBC1D\uD614\uB2E4.",
    datePublished: "2025-07-08",
    dateModified: "2025-07-08",
    author: {
      "@type": "Organization",
      name: "\uBA38\uB2C8\uD22C\uB370\uC774"
    },
    publisher: {
      "@id": "https://queenlive.kr/#organization"
    },
    url: "https://n.news.naver.com/article/008/0005218767?sid=101",
    image: "https://queenlive.kr/images/threebagnewnews.png",
    articleSection: "Business",
    inLanguage: "ko-KR"
  },
  {
    "@type": "NewsArticle",
    "@id": "https://queenlive.kr/news#article7",
    headline: "\uC5D4\uB77C\uC778 '\uB09C\uB2DD\uAD6C', \uD038\uB77C\uC774\uBE0C '\uD074\uB9AD\uBA54\uC774\uD2B8'\uC640 \uC2DC\uB108\uC9C0 \uC704\uD55C \uD611\uC57D \uCCB4\uACB0",
    description: "\uC5D4\uB77C\uC778(\uB300\uD45C \uC774\uC815\uBBFC)\uC758 '\uB09C\uB2DD\uAD6C'\uC640 \uD038\uB77C\uC774\uBE0C(\uB300\uD45C \uC724\uC815\uD0C1)\uC758 \uD074\uB9AD\uBA54\uC774\uD2B8\uAC00 \uB3D9\uBC18\uC131\uC7A5\uC744 \uC704\uD55C \uD611\uB825\uC5D0 \uC591\uC0AC\uC758 \uC2DC\uB108\uC9C0\uB97C \uB0B4\uAE30\uB85C \uD611\uC57D\uD588\uB2E4.",
    datePublished: "2025-06-05",
    dateModified: "2025-06-05",
    author: {
      "@type": "Organization",
      name: "TENANT news"
    },
    publisher: {
      "@id": "https://queenlive.kr/#organization"
    },
    url: "http://tnnews.co.kr/archives/236787",
    image: "https://queenlive.kr/images/news_25_06_05.jpg",
    articleSection: "Technology",
    inLanguage: "ko-KR"
  },
  {
    "@type": "NewsArticle",
    "@id": "https://queenlive.kr/news#article8",
    headline: "\uD038\uB77C\uC774\uBE0C \uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uB300\uD45C \uC140\uB7EC '\uC4F0\uB9AC\uBC31', 4\uC6D4 \uBC29\uC1A1 \uC2E4\uC2DC\uAC04 \uB9E4\uCD9C 30\uC5B5 \uB3CC\uD30C",
    description: "\uD038\uB77C\uC774\uBE0C\uC758 \uB300\uD45C \uC140\uB7EC '\uC4F0\uB9AC\uBC31'\uC774 4\uC6D4 \uD55C \uB2EC\uAC04 \uC9C4\uD589\uD55C \uB77C\uC774\uBE0C \uBC29\uC1A1\uC5D0\uC11C \uC2E4\uC2DC\uAC04 \uB9E4\uCD9C 30\uC5B5\uC6D0\uC744 \uB3CC\uD30C\uD588\uC2B5\uB2C8\uB2E4.",
    datePublished: "2025-05-02",
    dateModified: "2025-05-02",
    author: {
      "@type": "Organization",
      name: "\uBA38\uB2C8\uD22C\uB370\uC774"
    },
    publisher: {
      "@id": "https://queenlive.kr/#organization"
    },
    url: "https://news.mt.co.kr/mtview.php?no=2025050214390438436",
    image: "https://queenlive.kr/images/news_25_05_02.png",
    articleSection: "Business",
    inLanguage: "ko-KR"
  },
  {
    "@type": "NewsArticle",
    "@id": "https://queenlive.kr/news#article9",
    headline: '\uD038\uB77C\uC774\uBE0C, 2\uC6D4 \uAC70\uB798\uC561 90\uC5B5 \uC6D0 \uB3CC\uD30C\u2026"\uC140\uB7EC \uC131\uC7A5 \uC9C0\uC6D0 \uD6A8\uACFC \uC785\uC99D"',
    description: "\uD038\uB77C\uC774\uBE0C\uAC00 2\uC6D4 \uD55C \uB2EC\uAC04 90\uC5B5 \uC6D0\uC758 \uAC70\uB798\uC561\uC744 \uB2EC\uC131\uD588\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uC140\uB7EC \uC911\uC2EC\uC758 \uD50C\uB7AB\uD3FC \uC804\uB7B5\uACFC \uC131\uC7A5 \uC9C0\uC6D0 \uD504\uB85C\uADF8\uB7A8\uC758 \uD6A8\uACFC\uB97C \uC785\uC99D\uD558\uB294 \uACB0\uACFC\uC785\uB2C8\uB2E4.",
    datePublished: "2025-02-28",
    dateModified: "2025-02-28",
    author: {
      "@type": "Organization",
      name: "\uBA38\uB2C8\uD22C\uB370\uC774"
    },
    publisher: {
      "@id": "https://queenlive.kr/#organization"
    },
    url: "https://news.nate.com/view/20250228n25983",
    image: "https://queenlive.kr/images/news_25_02_28.png",
    articleSection: "Business",
    inLanguage: "ko-KR"
  },
  {
    "@type": "NewsArticle",
    "@id": "https://queenlive.kr/news#article10",
    headline: "\uD038\uB77C\uC774\uBE0C, '2024 \uCEE8\uD37C\uB7F0\uC2A4' \uC131\uD669\uB9AC \uAC1C\uCD5C...",
    description: "\uD038\uB77C\uC774\uBE0C\uAC00 '2024 \uCEE8\uD37C\uB7F0\uC2A4'\uB97C \uC131\uD669\uB9AC\uC5D0 \uAC1C\uCD5C\uD588\uC2B5\uB2C8\uB2E4. \uCEE8\uD37C\uB7F0\uC2A4 \uC911 \uC9C4\uD589\uB41C \uB77C\uC774\uBE0C \uBC29\uC1A1\uC5D0\uC11C\uB294 \uB2E8 1\uC2DC\uAC04 \uB9CC\uC5D0 5\uCC9C\uB9CC\uC6D0\uC758 \uB9E4\uCD9C\uC744 \uAE30\uB85D\uD588\uC2B5\uB2C8\uB2E4.",
    datePublished: "2024-12-23",
    dateModified: "2024-12-23",
    author: {
      "@type": "Organization",
      name: "\uC2DC\uC0AC\uB9E4\uAC70\uC9C4"
    },
    publisher: {
      "@id": "https://queenlive.kr/#organization"
    },
    url: "https://www.sisamagazine.co.kr/news/articleView.html?idxno=509849",
    image: "https://queenlive.kr/images/news_24_12_23.png",
    articleSection: "Business",
    inLanguage: "ko-KR"
  }
];

// lib/structured-data/video-schemas.ts
var videoSchemas = [
  {
    "@type": "VideoObject",
    "@id": "https://queenlive.kr/video#gwcconference",
    name: "\uC81C2\uD68C 'Growth with Clickmate' \uD3EC\uB7FC \uC2A4\uCF00\uCE58 \uC601\uC0C1",
    description: "\uC9C0\uB09C 7\uC6D4 9\uC77C \uB86F\uB370\uC6D4\uB4DC\uD0C0\uC6CC\uC5D0\uC11C \uC131\uD669\uB9AC\uC5D0 \uAC1C\uCD5C\uB41C \uC81C2\uD68C 'Growth with Clickmate",
    embedUrl: "https://www.youtube.com/embed/zRUAmMRvvZU",
    contentUrl: "https://www.youtube.com/watch?v=zRUAmMRvvZU",
    uploadDate: "2025-07-21",
    duration: "PT2M50S",
    thumbnailUrl: "https://img.youtube.com/vi/zRUAmMRvvZU/maxresdefault.jpg",
    publisher: {
      "@id": "https://queenlive.kr/#organization"
    },
    creator: {
      "@id": "https://queenlive.kr/#organization"
    },
    inLanguage: "ko-KR",
    genre: "Business",
    keywords: [
      "\uD3EC\uB7FC",
      "\uD074\uB9AD\uBA54\uC774\uD2B8",
      "\uC131\uC7A5 \uC804\uB7B5",
      "\uBE0C\uB79C\uB4DC",
      "\uC720\uD1B5\uC0AC",
      "\uC774\uCEE4\uBA38\uC2A4",
      "\uB9C8\uCF00\uD305 \uCEE8\uD37C\uB7F0\uC2A4"
    ]
  },
  {
    "@type": "VideoObject",
    "@id": "https://queenlive.kr/video#intro",
    name: "\uD074\uB9AD\uBA54\uC774\uD2B8 \uD50C\uB7AB\uD3FC \uC18C\uAC1C \uC601\uC0C1",
    description: "\uD074\uB9AD\uBA54\uC774\uD2B8 \uD50C\uB7AB\uD3FC\uC758 \uC8FC\uC694 \uAE30\uB2A5\uACFC \uD2B9\uC9D5\uC744 \uC18C\uAC1C\uD558\uB294 \uC601\uC0C1\uC785\uB2C8\uB2E4. \uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4\uC758 \uBAA8\uB4E0 \uAE30\uB2A5\uC744 \uD55C\uB208\uC5D0 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
    embedUrl: "https://www.youtube.com/embed/07vB93j9Q9s",
    contentUrl: "https://www.youtube.com/watch?v=07vB93j9Q9s",
    uploadDate: "2024-01-15",
    duration: "PT3M45S",
    thumbnailUrl: "https://img.youtube.com/vi/07vB93j9Q9s/maxresdefault.jpg",
    publisher: {
      "@id": "https://queenlive.kr/#organization"
    },
    creator: {
      "@id": "https://queenlive.kr/#organization"
    },
    inLanguage: "ko-KR",
    genre: "Technology",
    keywords: [
      "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4",
      "\uD074\uB9AD\uBA54\uC774\uD2B8",
      "\uD50C\uB7AB\uD3FC \uC18C\uAC1C",
      "\uB77C\uC774\uBE0C \uBC29\uC1A1",
      "\uC628\uB77C\uC778 \uC1FC\uD551"
    ]
  },
  {
    "@type": "VideoObject",
    "@id": "https://queenlive.kr/video#success",
    name: "\uD074\uB9AD\uBA54\uC774\uD2B8 \uC140\uB7EC \uC131\uACF5 \uC0AC\uB840",
    description: "\uD074\uB9AD\uBA54\uC774\uD2B8\uB97C \uD1B5\uD574 \uC131\uACF5\uD55C \uC140\uB7EC\uB4E4\uC758 \uC774\uC57C\uAE30\uB97C \uB2F4\uC740 \uC601\uC0C1\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uB9E4\uCD9C \uC131\uACFC\uC640 \uC131\uACF5 \uBE44\uACB0\uC744 \uACF5\uC720\uD569\uB2C8\uB2E4.",
    embedUrl: "https://www.youtube.com/embed/LG6nhnguc8I",
    contentUrl: "https://www.youtube.com/watch?v=LG6nhnguc8I",
    uploadDate: "2024-03-20",
    duration: "PT5M12S",
    thumbnailUrl: "https://img.youtube.com/vi/LG6nhnguc8I/maxresdefault.jpg",
    publisher: {
      "@id": "https://queenlive.kr/#organization"
    },
    creator: {
      "@id": "https://queenlive.kr/#organization"
    },
    inLanguage: "ko-KR",
    genre: "Business",
    keywords: [
      "\uC131\uACF5 \uC0AC\uB840",
      "\uC140\uB7EC \uD6C4\uAE30",
      "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uC131\uACFC",
      "\uB9E4\uCD9C \uC99D\uB300",
      "\uD074\uB9AD\uBA54\uC774\uD2B8"
    ]
  }
];

// lib/structured-data/event-schemas.ts
var eventSchemas = [
  {
    "@type": "Event",
    "@id": "https://queenlive.kr/timeline#founding",
    name: "\uD038\uB77C\uC774\uBE0C \uC124\uB9BD",
    description: "\uD038\uB77C\uC774\uBE0C \uD68C\uC0AC \uC124\uB9BD",
    startDate: "2021-07-01",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KR",
        addressRegion: "\uC11C\uC6B8"
      }
    },
    organizer: {
      "@id": "https://queenlive.kr/#organization"
    },
    eventStatus: "https://schema.org/EventScheduled"
  },
  {
    "@type": "Event",
    "@id": "https://queenlive.kr/timeline#launch",
    name: "\uD074\uB9AD\uBA54\uC774\uD2B8 \uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uC11C\uBE44\uC2A4 \uB7F0\uCE6D",
    description: "\uD074\uB9AD\uBA54\uC774\uD2B8 \uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uD50C\uB7AB\uD3FC \uC815\uC2DD \uC11C\uBE44\uC2A4 \uC2DC\uC791",
    startDate: "2023-03-01",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KR",
        addressRegion: "\uC11C\uC6B8"
      }
    },
    organizer: {
      "@id": "https://queenlive.kr/#organization"
    },
    eventStatus: "https://schema.org/EventScheduled"
  },
  {
    "@type": "Event",
    "@id": "https://queenlive.kr/timeline#investment",
    name: "\uC2A4\uD30C\uD06C\uB7A9 \uD22C\uC790\uC720\uCE58",
    description: "\uC2A4\uD30C\uD06C\uB7A9\uC73C\uB85C\uBD80\uD130 \uD22C\uC790 \uC720\uCE58 \uC131\uACF5",
    startDate: "2023-04-01",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KR",
        addressRegion: "\uC11C\uC6B8"
      }
    },
    organizer: {
      "@id": "https://queenlive.kr/#organization"
    },
    eventStatus: "https://schema.org/EventScheduled"
  },
  {
    "@type": "Event",
    "@id": "https://queenlive.kr/timeline#milestone1",
    name: "\uB204\uC801 \uAC00\uC785\uC790\uC218 10,000\uBA85 \uB2EC\uC131",
    description: "\uD50C\uB7AB\uD3FC \uC0AC\uC6A9\uC790 1\uB9CC \uBA85 \uB3CC\uD30C",
    startDate: "2023-12-01",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KR",
        addressRegion: "\uC11C\uC6B8"
      }
    },
    organizer: {
      "@id": "https://queenlive.kr/#organization"
    },
    eventStatus: "https://schema.org/EventScheduled"
  },
  {
    "@type": "Event",
    "@id": "https://queenlive.kr/timeline#revenue",
    name: "1\uB144 \uAC70\uB798\uC561 318\uC5B5\uC6D0 \uB2EC\uC131",
    description: "\uC5F0\uAC04 \uAC70\uB798\uC561 318\uC5B5 \uC6D0 \uB2EC\uC131",
    startDate: "2024-12-01",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KR",
        addressRegion: "\uC11C\uC6B8"
      }
    },
    organizer: {
      "@id": "https://queenlive.kr/#organization"
    },
    eventStatus: "https://schema.org/EventScheduled"
  },
  {
    "@type": "Event",
    "@id": "https://queenlive.kr/timeline#milestone2",
    name: "\uB204\uC801 \uAC00\uC785\uC790\uC218 400,000\uBA85 \uB2EC\uC131",
    description: "\uD50C\uB7AB\uD3FC \uC0AC\uC6A9\uC790 40\uB9CC \uBA85 \uB3CC\uD30C",
    startDate: "2025-05-01",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KR",
        addressRegion: "\uC11C\uC6B8"
      }
    },
    organizer: {
      "@id": "https://queenlive.kr/#organization"
    },
    eventStatus: "https://schema.org/EventScheduled"
  }
];

// lib/structured-data/person-schemas.ts
var personSchemas = [
  {
    "@type": "Person",
    "@id": "https://queenlive.kr/sellers#vanillayun",
    name: "\uBC14\uB2D0\uB77C\uC724",
    description: "10\uB144\uAC04 \uC758\uB958\uC5C5\uACC4 \uACBD\uD5D8, \uB9E4\uC8FC \uC0C8\uB85C\uC6B4 \uD2B8\uB80C\uB4DC\uB85C \uC628\uB3D9\uB124 \uBA4B\uC7C1\uC774 \uB9CC\uB4E4\uAE30",
    jobTitle: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uC140\uB7EC",
    worksFor: {
      "@id": "https://queenlive.kr/#organization"
    },
    knowsAbout: ["\uC758\uB958", "\uD328\uC158", "\uB77C\uC774\uBE0C\uBC29\uC1A1", "\uC628\uB77C\uC778\uD310\uB9E4"],
    hasOccupation: {
      "@type": "Occupation",
      name: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uC140\uB7EC",
      occupationLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "KR"
        }
      }
    }
  },
  {
    "@type": "Person",
    "@id": "https://queenlive.kr/sellers#audreygyum",
    name: "\uC624\uB4DC\uB9AC\uACB8",
    description: "\uAC13\uC131\uBE44 \uBC31\uD654\uC810\uBE0C\uB79C\uB4DC \uC804\uBB38\uAC00, \uB9E4\uC8FC \uC6D4\uC694\uC77C \uBC24 8\uC2DC \uC758\uB958\uBC29\uC1A1",
    jobTitle: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uC140\uB7EC",
    worksFor: {
      "@id": "https://queenlive.kr/#organization"
    },
    knowsAbout: ["\uBC31\uD654\uC810\uBE0C\uB79C\uB4DC", "\uC758\uB958", "\uB77C\uC774\uBE0C\uBC29\uC1A1", "\uC628\uB77C\uC778\uD310\uB9E4"],
    hasOccupation: {
      "@type": "Occupation",
      name: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uC140\uB7EC",
      occupationLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "KR"
        }
      }
    }
  },
  {
    "@type": "Person",
    "@id": "https://queenlive.kr/sellers#threebag",
    name: "\uC4F0\uB9AC\uBC31",
    description: "\uC720\uD1B5\uACBD\uB825 14\uB144\uCC28, \uC77C\uB9E4\uCD9C 4\uC5B5 \uB300\uD615\uC140\uB7EC, \uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4\uC758 \uD0B9",
    jobTitle: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uC140\uB7EC",
    worksFor: {
      "@id": "https://queenlive.kr/#organization"
    },
    knowsAbout: ["\uC720\uD1B5", "\uB3C4\uB9E4", "\uB77C\uC774\uBE0C\uBC29\uC1A1", "\uC628\uB77C\uC778\uD310\uB9E4", "\uB300\uB7C9\uD310\uB9E4"],
    hasOccupation: {
      "@type": "Occupation",
      name: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uC140\uB7EC",
      occupationLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "KR"
        }
      }
    }
  },
  {
    "@type": "Person",
    "@id": "https://queenlive.kr/sellers#sinnandae",
    name: "\uC2E0\uB09C\uB370\uC774",
    description: "\uBC29\uC1A1\uACBD\uB825 16\uB144\uCC28, \uD074\uB9AD\uBA54\uC774\uD2B8 \uC138\uC190\uAC00\uB77D \uC140\uB7EC, \uB3D9\uB300\uBB38 \uCF54\uC2A4\uD2B8\uCF54 \uC810\uB839\uC911",
    jobTitle: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uC140\uB7EC",
    worksFor: {
      "@id": "https://queenlive.kr/#organization"
    },
    knowsAbout: ["\uBC29\uC1A1", "\uB3D9\uB300\uBB38", "\uB3C4\uB9E4", "\uB77C\uC774\uBE0C\uBC29\uC1A1", "\uC628\uB77C\uC778\uD310\uB9E4"],
    hasOccupation: {
      "@type": "Occupation",
      name: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uC140\uB7EC",
      occupationLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "KR"
        }
      }
    }
  },
  {
    "@type": "Person",
    "@id": "https://queenlive.kr/sellers#nov",
    name: "\uB178\uBE0C",
    description: "\uD328\uC158\uD68C\uC0AC \uC18C\uC2F1\uACBD\uB825, 3040\uB97C \uC704\uD55C \uB370\uC77C\uB9AC\uB8E9 \uC804\uBB38\uAC00",
    jobTitle: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uC140\uB7EC",
    worksFor: {
      "@id": "https://queenlive.kr/#organization"
    },
    knowsAbout: ["\uD328\uC158\uC18C\uC2F1", "\uB370\uC77C\uB9AC\uB8E9", "3040\uD328\uC158", "\uB77C\uC774\uBE0C\uBC29\uC1A1"],
    hasOccupation: {
      "@type": "Occupation",
      name: "\uB77C\uC774\uBE0C\uCEE4\uBA38\uC2A4 \uC140\uB7EC",
      occupationLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "KR"
        }
      }
    }
  }
];

// lib/structured-data/faq-schemas.ts
var faqSchema = {
  "@type": "FAQPage",
  "@id": "https://queenlive.kr/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "\uD038\uB77C\uC774\uBE0C\uC5D0\uC11C \uC140\uB7EC\uB85C \uB4F1\uB85D\uD558\uB824\uBA74 \uC5B4\uB5BB\uAC8C \uD574\uC57C \uD558\uB098\uC694?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "\uD038\uB77C\uC774\uBE0C \uC140\uB7EC \uB4F1\uB85D\uC740 \uAC04\uB2E8\uD569\uB2C8\uB2E4. '\uBB38\uC758\uD558\uAE30' \uD0ED\uC5D0 \uB4E4\uC5B4\uAC00\uC2E0 \uD6C4 '\uC140\uB7EC \uB4F1\uB85D \uBC0F \uC81C\uD734' \uCE74\uD14C\uACE0\uB9AC \uD074\uB9AD, \uC140\uB7EC \uB4F1\uB85D\uC744 \uC6D0\uD558\uC2E0\uB2E4\uACE0 \uBB38\uC758\uB97C \uB0A8\uACA8\uC8FC\uC2DC\uBA74 \uB2F4\uB2F9\uC790\uAC00 1-2\uC601\uC5C5\uC77C \uB0B4\uC5D0 \uC5F0\uB77D\uB4DC\uB9BD\uB2C8\uB2E4. \uBCC4\uB3C4\uC758 \uAC00\uC785\uBE44\uB098 \uCD08\uAE30 \uBE44\uC6A9\uC774 \uC5C6\uC73C\uBA70, \uC2B9\uC778 \uD6C4 \uBC14\uB85C \uD310\uB9E4\uB97C \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
      }
    },
    {
      "@type": "Question",
      name: "\uB77C\uC774\uBE0C \uBC29\uC1A1\uC740 \uC5B8\uC81C\uB4E0\uC9C0 \uC2DC\uC791\uD560 \uC218 \uC788\uB098\uC694?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "\uB124, \uC140\uB7EC\uB85C \uC2B9\uC778\uB418\uC2DC\uBA74 \uC5B8\uC81C\uB4E0\uC9C0 \uB77C\uC774\uBE0C \uBC29\uC1A1\uC744 \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD038\uB77C\uC774\uBE0C\uB294 24\uC2DC\uAC04 \uC140\uB7EC \uBC29\uC1A1\uC744 \uC9C0\uC6D0\uD558\uBA70, \uC0AC\uC804 \uC608\uC57D\uC744 \uD1B5\uD574 \uC815\uAE30 \uBC29\uC1A1 \uC77C\uC815\uC744 \uC7A1\uC744 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4."
      }
    },
    {
      "@type": "Question",
      name: "\uC815\uC0B0\uC740 \uC5BC\uB9C8\uB098 \uBE68\uB9AC \uC774\uB8E8\uC5B4\uC9C0\uB098\uC694?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "\uD038\uB77C\uC774\uBE0C\uB294 \uACE0\uAC1D\uC774 \uC140\uB7EC\uC5D0\uAC8C \uC9C1\uC811 \uACB0\uC81C\uD558\uB294 \uC2DC\uC2A4\uD15C\uC744 \uC6B4\uC601\uD569\uB2C8\uB2E4. \uACE0\uAC1D\uC740 \uB77C\uC774\uBE0C \uBC29\uC1A1 \uC911 \uB610\uB294 \uBC29\uC1A1 \uD6C4 \uC140\uB7EC\uC5D0\uAC8C \uC9C1\uC811 \uACC4\uC88C\uC774\uCCB4\uB098 \uCE74\uB4DC\uACB0\uC81C\uB85C \uC0C1\uD488 \uB300\uAE08\uC744 \uC9C0\uBD88\uD558\uBA70, \uBCC4\uB3C4\uC758 \uD50C\uB7AB\uD3FC \uC815\uC0B0 \uACFC\uC815 \uC5C6\uC774 \uC989\uC2DC \uAC70\uB798\uAC00 \uC644\uB8CC\uB429\uB2C8\uB2E4."
      }
    },
    {
      "@type": "Question",
      name: "\uC218\uC218\uB8CC\uB294 \uC5B4\uB5BB\uAC8C \uB418\uB098\uC694?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "\uD038\uB77C\uC774\uBE0C\uB294 \uC2DC\uAC04\uBCC4, \uC778\uC6D0\uBCC4 \uCC28\uB4F1 \uC218\uC218\uB8CC \uC2DC\uC2A4\uD15C\uC744 \uC6B4\uC601\uD569\uB2C8\uB2E4. \uC2E0\uADDC \uC140\uB7EC\uC5D0\uAC8C\uB294 \uCDA9\uBD84\uD55C \uBB34\uB8CC \uD3EC\uC778\uD2B8\uB97C \uC81C\uACF5\uD558\uC5EC \uBD80\uB2F4 \uC5C6\uC774 \uC2DC\uC791\uD560 \uC218 \uC788\uB3C4\uB85D \uC9C0\uC6D0\uD558\uBA70, \uC774\uD6C4 \uBC29\uC1A1 \uC2DC\uAC04\uACFC \uC2DC\uCCAD\uC790 \uC218\uC5D0 \uB530\uB77C \uD569\uB9AC\uC801\uC778 \uC218\uC218\uB8CC\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4. \uC790\uC138\uD55C \uC218\uC218\uB8CC \uCCB4\uACC4\uB294 \uC140\uB7EC \uB4F1\uB85D \uC2DC \uC548\uB0B4\uD574 \uB4DC\uB9BD\uB2C8\uB2E4."
      }
    },
    {
      "@type": "Question",
      name: "\uD574\uC678\uC5D0\uC11C\uB3C4 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uB098\uC694?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "\uD604\uC7AC \uD038\uB77C\uC774\uBE0C\uB294 \uD55C\uAD6D \uB0B4 \uC11C\uBE44\uC2A4\uB97C \uC911\uC2EC\uC73C\uB85C \uC6B4\uC601\uB418\uACE0 \uC788\uC73C\uBA70, 2025\uB144\uBD80\uD130 \uC77C\uBCF8, \uBBF8\uAD6D, \uC911\uAD6D \uB4F1 \uD574\uC678 \uC2DC\uC7A5 \uC9C4\uCD9C\uC744 \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4. \uD574\uC678 \uC140\uB7EC \uD30C\uD2B8\uB108\uC2ED\uC5D0 \uAD00\uC2EC\uC774 \uC788\uC73C\uC2DC\uBA74 \uACF5\uC2DD \uD038\uB77C\uC774\uBE0C \uC774\uBA54\uC77C \uC0AC\uC5C5\uD300(official@queenlive.co.kr)\uC73C\uB85C \uBB38\uC758\uD574 \uC8FC\uC138\uC694."
      }
    }
  ]
};

// lib/structured-data/breadcrumb-schemas.ts
var baseBreadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": "https://queenlive.kr/#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "\uD648",
      item: "https://queenlive.kr/"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "\uB274\uC2A4",
      item: "https://queenlive.kr/news"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "\uC5F0\uB77D\uCC98",
      item: "https://queenlive.kr/contact"
    }
  ]
};
var createBreadcrumbSchema = (pages) => {
  var _a;
  return {
    "@type": "BreadcrumbList",
    "@id": `${(_a = pages[pages.length - 1]) == null ? void 0 : _a.url}#breadcrumb`,
    itemListElement: pages.map((page, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: page.name,
      item: page.url
    }))
  };
};

// lib/structured-data/index.ts
var mainStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    softwareApplicationSchema,
    serviceSchema,
    aggregateRatingSchema,
    localBusinessSchema,
    ...reviewSchemas,
    faqSchema,
    baseBreadcrumbSchema,
    ...newsArticleSchemas,
    ...videoSchemas,
    ...eventSchemas,
    ...personSchemas
  ]
};
var homePageSchemas = [
  organizationSchema,
  websiteSchema,
  softwareApplicationSchema,
  serviceSchema,
  aggregateRatingSchema,
  ...reviewSchemas,
  faqSchema
];
var newsPageSchemas = [
  organizationSchema,
  ...newsArticleSchemas,
  ...videoSchemas
];
var contactPageSchemas = [
  organizationSchema,
  localBusinessSchema,
  faqSchema
];
export {
  aggregateRatingSchema,
  baseBreadcrumbSchema,
  contactPageSchemas,
  createBreadcrumbSchema,
  eventSchemas,
  faqSchema,
  homePageSchemas,
  localBusinessSchema,
  mainStructuredData,
  newsArticleSchemas,
  newsPageSchemas,
  organizationSchema,
  personSchemas,
  reviewSchemas,
  serviceSchema,
  softwareApplicationSchema,
  videoSchemas,
  websiteSchema
};
