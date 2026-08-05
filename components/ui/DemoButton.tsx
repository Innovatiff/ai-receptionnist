"use client";

import Link from "next/link";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { site } from "@/content/site";

/** Secondary CTA — pill with a pulsing play badge. Never wraps. */
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
        "group inline-flex h-14 items-center gap-3 whitespace-nowrap rounded-full pl-2 pr-6 text-[0.95rem] font-medium transition-all duration-300 ease-out-expo sm:h-16 sm:pl-2.5 sm:pr-7 sm:text-base",
        tone === "dark"
          ? "border border-white/12 bg-white/[0.04] text-cloud lg:backdrop-blur-xl hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-white/[0.09]"
          : "border border-void/10 bg-void/[0.03] text-void hover:-translate-y-0.5 hover:border-violet-600/40",
        className
      )}
    >
      <span className="relative flex h-10 w-10 items-center justify-center sm:h-11 sm:w-11">
        {!reduced && (
          <>
            <motion.span
              className="absolute inset-0 rounded-full bg-violet-500/30"
              animate={{ scale: [1, 1.7], opacity: [0.55, 0] }}
              transition={{ duration: 1.9, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 rounded-full bg-violet-500/20"
              animate={{ scale: [1, 1.7], opacity: [0.4, 0] }}
              transition={{ duration: 1.9, repeat: Infinity, ease: "easeOut", delay: 0.95 }}
            />
          </>
        )}
        <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-300 via-violet to-violet-700 text-white shadow-[0_0_24px_-4px_rgba(124,92,255,0.9)] transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
          <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden />
        </span>
      </span>
      {label}
    </Link>
  );
}
