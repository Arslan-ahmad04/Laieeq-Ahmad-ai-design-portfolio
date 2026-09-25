import type { Metadata } from "next";
import { clientConfig } from "@/config/client.config";
import { portfolio } from "@/data/portfolio";
function getSiteOrigin() {
  if (!clientConfig.seo.siteUrl) return null;
  const url = new URL(clientConfig.seo.siteUrl);
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  )
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be a bare http(s) origin without credentials, a path, query, or fragment.",
    );
  return url.origin;
}
export const siteOrigin = getSiteOrigin();
export const indexingEnabled =
  Boolean(siteOrigin) && process.env.SITE_INDEXING === "true";
export function routeReady(path: string) {
  if (path === "/" || path === "/portfolio")
    return portfolio.length > 0 && portfolio.every((p) => p.artworkVerified);
  if (path.startsWith("/portfolio/"))
    return portfolio.some(
      (p) => "/portfolio/" + p.slug === path && p.artworkVerified,
    );
  return true;
}
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const fullTitle = path === "/" ? title : title + " | " + clientConfig.name;
  const url = siteOrigin ? siteOrigin + path : undefined;
  const index = indexingEnabled && routeReady(path);
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: url ? { canonical: url } : undefined,
    robots: { index, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      siteName: clientConfig.name,
      url,
      images: siteOrigin
        ? [
            {
              url: siteOrigin + "/opengraph-image",
              width: 1200,
              height: 630,
              alt: clientConfig.name + " — " + clientConfig.professionalTitle,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: siteOrigin ? [siteOrigin + "/opengraph-image"] : [],
    },
  };
}
export function indexablePaths() { return routeReady("/") ? ["/"] : []; }

