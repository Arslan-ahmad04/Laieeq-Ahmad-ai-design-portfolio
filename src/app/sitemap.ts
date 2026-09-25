import type { MetadataRoute } from "next";
import { indexingEnabled, indexablePaths, siteOrigin } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  return indexingEnabled
    ? indexablePaths().map((path) => ({ url: siteOrigin + path }))
    : [];
}
