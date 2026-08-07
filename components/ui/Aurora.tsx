"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { useIsDesktop } from "@/lib/useIsDesktop";
import { cn } from "@/lib/utils";

/**
 * Living aurora backdrop.
 *
 * PERF: the orbs are radial-gradients, which are already soft — stacking a
 * `filter: blur()` on top of them was pure cost for no visual gain and was the
 * single most expensive paint on mobile Safari. So: no blur filter at all, and
 * the drift animation only runs on desktop pointers (phones get the same
 * gradient, statically). Decorative + aria-hidden.
 */
export function Aurora({
  className,
  intensity = "normal",
  fade = true,
}: {
  className?: string;
  intensity?: "soft" | "normal" | "loud";
  /**
   * Fade the glow out at the top/bottom edges. Sections clip their contents, so
   * an orb that reaches the section boundary gets sliced off and reads as a
   * hard rectangle. Fading means the cut happens where alpha is already 0.
   */
  fade?: boolean;
}) {
  const reduced = usePrefersReducedMotion();
  const isDesktop = useIsDesktop();
  const animate = isDesktop && !reduced;

  const fadeMask = fade
    ? {
        maskImage:
          "linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)",
      }
    : undefined;

  const o = intensity === "loud" ? 1 : intensity === "soft" ? 0.5 : 0.75;

  const orbs = [
    { c: `rgba(124,92,255,${0.42 * o})`, s: 620, x: "-12%", y: "-10%", d: 18 },
    { c: `rgba(255,138,76,${0.26 * o})`, s: 480, x: "68%", y: "-6%", d: 22 },
    { c: `rgba(82,50,196,${0.38 * o})`, s: 560, x: "38%", y: "55%", d: 26 },
  ];

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={fadeMask}
      aria-hidden
    >
      {orbs.map((orb, i) => {
        const style = {
          width: orb.s,
          height: orb.s,
          left: orb.x,
          top: orb.y,
          background: `radial-gradient(circle at center, ${orb.c}, transparent 70%)`,
        } as const;

        if (!animate) {
          return <span key={i} className="absolute rounded-full" style={style} />;
        }
        return (
          <motion.span
            key={i}
            className="absolute rounded-full will-change-transform"
            style={style}
            animate={{
              x: [0, i % 2 === 0 ? 70 : -70, 0],
              y: [0, i % 2 === 0 ? -50 : 50, 0],
              scale: [1, 1.18, 1],
            }}
            transition={{ duration: orb.d, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}
