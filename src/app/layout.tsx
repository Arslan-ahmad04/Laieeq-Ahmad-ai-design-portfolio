import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { clientConfig } from "@/config/client.config";
import { designConfig } from "@/config/design.config";
import { getThemeScript } from "@/lib/theme";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: clientConfig.seo.siteUrl ? new URL(clientConfig.seo.siteUrl) : undefined,
  title: { default: `${clientConfig.name} | ${clientConfig.professionalTitle}`, template: `%s | ${clientConfig.name}` },
  description: clientConfig.seo.description,
  openGraph: { title: `${clientConfig.name} | ${clientConfig.professionalTitle}`, description: clientConfig.seo.description, type: "website" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: designConfig.theme.defaultMode === "dark" ? "#0a0e0b" : "#f5f7f2" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: getThemeScript(designConfig.theme.defaultMode) }} /></head><body>{children}</body></html>;
}
