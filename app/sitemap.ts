import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content/navigation";
import { sectors } from "@/lib/content/sectors";
import { portfolio } from "@/lib/content/portfolio";
import { insights } from "@/lib/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/institutional",
    "/individual",
    "/about",
    "/sectors",
    "/portfolio",
    "/insights",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const sectorRoutes = sectors.map((s) => ({
    url: `${base}/sectors/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const portfolioRoutes = portfolio.map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const insightRoutes = insights.map((i) => ({
    url: `${base}/insights/${i.slug}`,
    lastModified: new Date(i.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...sectorRoutes, ...portfolioRoutes, ...insightRoutes];
}
