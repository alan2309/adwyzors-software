import type { Metadata } from "next";
import { siteConfig } from "./constants";

type SeoProps = {
    title: string;
    description: string;
    path: string;
    image?: string;
    noindex?: boolean;
};

export function generateMetadata({
    title,
    description,
    path,
    image = "/og.png",
    noindex = false,
}: SeoProps): Metadata {
    const url = `${siteConfig.url}${path}`;
    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: { title, description, url, images: [{ url: image, width: 1200, height: 630 }] },
        twitter: { card: "summary_large_image", title, description, images: [image] },
        robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    };
}

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Adwyzors",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description:
        "Business Process Digitization & Custom Software Development company building custom ERP, inventory, and operations software for Indian SMEs.",
    sameAs: [siteConfig.social.linkedin, siteConfig.social.twitter],
    contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
    },
};

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
});

export const serviceSchema = (service: { title: string; description: string; slug: string }) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "Organization", name: "Adwyzors" },
    areaServed: { "@type": "Country", name: "India" },
    url: `${siteConfig.url}/solutions/${service.slug}`,
});