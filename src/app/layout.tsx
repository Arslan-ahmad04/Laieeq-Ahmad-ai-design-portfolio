import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { clientConfig } from "@/config/client.config";

import { SiteShell } from "@/components/layout/SiteShell";

import { siteOrigin } from "@/lib/seo";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: siteOrigin ? new URL(siteOrigin) : undefined,
  title: {
    default: clientConfig.name + " | " + clientConfig.professionalTitle,
    template: "%s | " + clientConfig.name,
  },
  description: clientConfig.seo.description,
  robots: { index: false, follow: true },
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05080c",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={GeistSans.variable + " " + GeistMono.variable}
      data-theme="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
