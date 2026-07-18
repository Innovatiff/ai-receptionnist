import type { Metadata } from "next";
import { site } from "@/content/site";

const baseUrl = site.domain;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${site.name} — Never miss another call, or another customer`,
    template: `%s · ${site.name}`,
  },
  description:
    "A done-for-you AI receptionist that answers every call 24/7, books appointments straight into your calendar, and texts back every missed lead. Live in 7 days.",
  applicationName: site.name,
  keywords: [
    "AI receptionist",
    "24/7 call answering",
    "appointment booking",
    "missed call text back",
    "virtual receptionist",
    "answering service",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    siteName: site.name,
    url: baseUrl,
    title: `${site.name} — Never miss another call, or another customer`,
    description:
      "Your AI receptionist answers every call 24/7, books appointments, and texts back every lead. Set up for you in 7 days.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Never miss another call, or another customer`,
    description:
      "Your AI receptionist answers every call 24/7, books appointments, and texts back every lead. Set up for you in 7 days.",
  },
  robots: { index: true, follow: true },
};

/** Build per-page metadata with a canonical path. */
export function pageMeta({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${site.name}`,
      description,
      url: `${baseUrl}${path}`,
    },
    twitter: { title: `${title} · ${site.name}`, description },
  };
}

/** LocalBusiness JSON-LD for relevant pages. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description:
      "AI receptionist that answers calls 24/7, books appointments, and texts back missed leads for local businesses.",
    url: site.domain,
    telephone: site.contact.phone,
    email: site.contact.email,
    areaServed: "US",
    availableLanguage: ["English", "French", "Spanish"],
    priceRange: "$$",
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
