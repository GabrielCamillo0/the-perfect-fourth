import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const routes = ["", "/privacy", "/terms", "/refund", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date("2026-07-02"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.5
  }));
}
