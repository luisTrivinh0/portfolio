export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/cases";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/pt-br`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/archive`, changeFrequency: "yearly", priority: 0.5 },
    {
      url: `${siteUrl}/pt-br/archive`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    { url: `${siteUrl}/resume`, changeFrequency: "yearly", priority: 0.4 },
    {
      url: `${siteUrl}/pt-br/resume`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    ...caseStudies.map(({ slug }) => ({
      url: `${siteUrl}/work/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
    ...caseStudies.map(({ slug }) => ({
      url: `${siteUrl}/pt-br/work/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
