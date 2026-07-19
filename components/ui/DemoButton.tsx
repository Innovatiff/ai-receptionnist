"use client";

import Link from "next/link";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { site } from "@/content/site";

/**
 * The secondary "Hear a 30-second demo" CTA — a pill with a pulsing play badge
 * (the live-line motif) and a no-wrap label. Fixes the old wrapping/stacking
 * layout. Motion is disabled under prefers-reduced-motion.
 */
export function DemoButton({
  href = "#hear-it",
  label = site.cta.secondary,
  tone = "dark",
  trackLabel = "demo_button",
  className,
}: {
  href?: string;
  label?: string;
  tone?: "dark" | "light";
  trackLabel?: string;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();

  return (
    <Link
      href={href}
      onClick={() => trackEvent("cta_click", { label: `${trackLabel}_secondary` })}
      className={cn(
        "group inline-flex h-14 items-center gap-3 whitespace-nowrap rounded-full pl-2 pr-6 text-[0.95rem] font-medium transition-all duration-200 ease-out-expo",
        tone === "dark"
          ? "border border-mist/15 bg-white/[0.04] text-mist backdrop-blur hover:-translate-y-0.5 hover:border-live/40 hover:bg-white/[0.07] hover:text-white"
          : "border border-ink-900/10 bg-ink-900/[0.03] text-ink-800 hover:-translate-y-0.5 hover:border-signal/40 hover:text-ink-900",
        className
      )}
    >
      <span className="relative flex h-10 w-10 items-center justify-center">
        {/* pulsing rings */}
        {!reduced && (
          <>
            <motion.span
              className="absolute inset-0 rounded-full bg-live/25"
              animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 rounded-full bg-live/20"
              animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.9 }}
            />
          </>
        )}
        <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-live to-signal text-ink-950 shadow-[0_0_20px_-4px_rgba(56,225,255,0.6)] transition-transform duration-200 group-hover:scale-105">
          <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden />
        </span>
      </span>
      {label}
    </Link>
  );
}
