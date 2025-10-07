// 메인 구조화된 데이터 조합
import { organizationSchema, websiteSchema, softwareApplicationSchema, serviceSchema, aggregateRatingSchema, localBusinessSchema, } from "./base-schemas";
import { reviewSchemas } from "./reviews-schemas";
import { newsArticleSchemas } from "./news-schemas";
import { videoSchemas } from "./video-schemas";
import { eventSchemas } from "./event-schemas";
import { personSchemas } from "./person-schemas";
import { faqSchema } from "./faq-schemas";
import { baseBreadcrumbSchema } from "./breadcrumb-schemas";
// 메인 레이아웃용 전체 구조화된 데이터
export const mainStructuredData = {
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
        ...personSchemas,
    ],
};
// 페이지별 특화 스키마들
export const homePageSchemas = [
    organizationSchema,
    websiteSchema,
    softwareApplicationSchema,
    serviceSchema,
    aggregateRatingSchema,
    ...reviewSchemas,
    faqSchema,
];
export const newsPageSchemas = [
    organizationSchema,
    ...newsArticleSchemas,
    ...videoSchemas,
];
export const contactPageSchemas = [
    organizationSchema,
    localBusinessSchema,
    faqSchema,
];
// 개별 스키마들 export
export * from "./base-schemas";
export * from "./reviews-schemas";
export * from "./news-schemas";
export * from "./video-schemas";
export * from "./event-schemas";
export * from "./person-schemas";
export * from "./faq-schemas";
export * from "./breadcrumb-schemas";
