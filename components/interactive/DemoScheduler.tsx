"use client";

import { useEffect } from "react";
import { LeadForm } from "./LeadForm";
import { trackEvent } from "@/lib/analytics";

/**
 * Demo scheduler. If a scheduler URL is configured (Cal.com / Calendly) via
 * NEXT_PUBLIC_SCHEDULER_URL, it embeds it in an iframe. Otherwise it falls back
 * to the lead form so the page always converts end-to-end out of the box.
 *
 * To use Cal.com: set NEXT_PUBLIC_SCHEDULER_URL="https://cal.com/your-handle/demo".
 * To use Calendly: set it to "https://calendly.com/your-handle/demo".
 */
export function DemoScheduler() {
  const url = process.env.NEXT_PUBLIC_SCHEDULER_URL;

  useEffect(() => {
    trackEvent("demo_view");
  }, []);

  if (url) {
    return (
      <div className="overflow-hidden rounded-3xl border border-void-700/70 bg-white shadow-violet">
        <iframe
          src={url}
          title="Book your free demo"
          className="h-[720px] w-full"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-void-700/70 bg-void-800/50 p-6 shadow-violet sm:p-8">
      <LeadForm />
    </div>
  );
}
