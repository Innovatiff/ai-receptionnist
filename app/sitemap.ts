import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { industries } from "@/content/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain;
  const staticRoutes = [
    "",
    "/how-it-works",
    "/results",
    "/pricing",
    "/industries",
    "/calculator",
    "/about",
    "/faq",
    "/demo",
    "/privacy",
    "/terms",
  ];

  const lastModified = new Date("2026-07-18");

  const pages: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const industryPages: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${base}/industries/${i.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...industryPages];
}
