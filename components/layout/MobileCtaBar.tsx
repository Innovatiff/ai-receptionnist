"use client";

import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

/**
 * Persistent bottom CTA bar (mobile only). Present on every page except the
 * demo page itself (where the scheduler is the primary action).
 *
 * Solid background (no backdrop-blur on phones) plus safe-area padding so the
 * button clears the iPhone home indicator / Safari toolbar. Requires
 * `viewportFit: "cover"` in the root viewport for env() to report real values.
 */
export function MobileCtaBar() {
  const pathname = usePathname();
  if (pathname === site.cta.href) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      {/* soft fade so page content doesn't butt hard against the bar */}
      <div
        className="pointer-events-none h-8 bg-gradient-to-t from-void-900 to-transparent"
        aria-hidden
      />
      <div className="border-t border-white/[0.1] bg-void-900 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
        <div className="flex items-center gap-3">
          <a
            href={site.contact.demoLineHref}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] text-mint"
            aria-label="Call the live demo line"
          >
            <Phone className="h-5 w-5" />
          </a>
          <Button
            href={site.cta.href}
            size="md"
            withArrow
            trackLabel="mobile_bar"
            className="h-12 flex-1"
          >
            {site.cta.primary}
          </Button>
        </div>
      </div>
    </div>
  );
}
