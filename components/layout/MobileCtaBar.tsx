"use client";

import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

/**
 * Persistent bottom CTA bar (mobile only). Present on every page except the
 * demo page itself (where the scheduler is the primary action).
 */
export function MobileCtaBar() {
  const pathname = usePathname();
  if (pathname === site.cta.href) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div className="border-t border-ink-700/70 bg-ink-950/90 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md">
        <div className="flex items-center gap-3">
          <a
            href={site.contact.demoLineHref}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink-700 text-live"
            aria-label="Call the live demo line"
          >
            <Phone className="h-5 w-5" />
          </a>
          <Button
            href={site.cta.href}
            size="md"
            withArrow
            trackLabel="mobile_bar"
            className="flex-1"
          >
            {site.cta.primary}
          </Button>
        </div>
      </div>
    </div>
  );
}
