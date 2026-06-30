import type { Metadata } from "next";
import { faqs } from "@/lib/content";
import { siteUrl } from "@/lib/utils";

export const defaultDescription =
  "Watergate Flow Technologies supplies dosing pumps, prepaid water meters, reverse osmosis systems, and water treatment plant accessories for estates, industries, institutions, water operators, and commercial facilities.";

export function pageMetadata(title: string, description = defaultDescription, path = ""): Metadata {
  return {
    title,
    description,
    alternates: { canonical: siteUrl(path) },
    openGraph: {
      title,
      description,
      url: siteUrl(path),
      siteName: "Watergate Flow Technologies",
      images: [{ url: siteUrl("/assets/water-flow-1.png"), width: 1600, height: 900 }],
      type: "website"
    }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "Watergate Flow Technologies",
    url: siteUrl(),
    logo: siteUrl("/assets/watergate-logo.png"),
    description: defaultDescription,
    areaServed: "Nigeria",
    knowsAbout: [
      "Water utility products Nigeria",
      "Dosing pumps Nigeria",
      "Prepaid water meters Nigeria",
      "Reverse osmosis systems Nigeria",
      "Water treatment plant accessories"
    ]
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Watergate Flow Technologies",
    url: siteUrl(),
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl("/products")}?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
}

export function productJsonLd(product: {
  name: string;
  shortDescription: string;
  imageUrl?: string | null;
  slug: string;
  category?: { name: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: siteUrl(product.imageUrl || "/assets/water-flow-1.png"),
    category: product.category?.name,
    url: siteUrl(`/products/${product.slug}`),
    brand: { "@type": "Brand", name: "Watergate Flow Technologies" },
    offers: {
      "@type": "Offer",
      priceCurrency: "NGN",
      availability: "https://schema.org/InStock",
      url: siteUrl(`/products/${product.slug}`)
    }
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: siteUrl(item.href)
    }))
  };
}
