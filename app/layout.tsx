import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { fontVariables } from "@/lib/fonts";
import { defaultMetadata, localBusinessJsonLd } from "@/lib/seo";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className="min-h-dvh bg-void text-cloud">
        <JsonLd data={localBusinessJsonLd()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-void-900"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Header />
          <main id="main" className="pb-20 lg:pb-0">
            {children}
          </main>
          <Footer />
          <MobileCtaBar />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
