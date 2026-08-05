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
  themeColor: "#08060F",
  width: "device-width",
  initialScale: 1,
  // Required for env(safe-area-inset-*) to report real values on iPhone —
  // without it the sticky bottom CTA sits under the home indicator.
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      {/* Bottom padding clears the sticky mobile CTA bar (incl. the iPhone
          home indicator) for the whole page — footer included. */}
      <body className="min-h-dvh bg-void pb-[calc(5.25rem+env(safe-area-inset-bottom))] text-cloud lg:pb-0">
        <JsonLd data={localBusinessJsonLd()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-void-900"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Header />
          <main id="main">
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
