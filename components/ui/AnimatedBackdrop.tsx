"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

/**
 * Ambient moving illustration for dark sections: slow-drifting gradient orbs.
 * Pure transform/opacity, pointer-events-none, and fully static under
 * prefers-reduced-motion. Purely decorative (aria-hidden).
 */
export function AnimatedBackdrop({
  className,
  variant = "signal",
}: {
  className?: string;
  variant?: "signal" | "pulse" | "mix";
}) {
  const reduced = usePrefersReducedMotion();

  const orbs =
    variant === "pulse"
      ? [
          { c: "rgba(255,122,89,0.20)", size: 420, x: "-10%", y: "0%" },
          { c: "rgba(91,108,255,0.16)", size: 360, x: "70%", y: "40%" },
        ]
      : variant === "mix"
        ? [
            { c: "rgba(91,108,255,0.22)", size: 460, x: "-8%", y: "10%" },
            { c: "rgba(56,225,255,0.16)", size: 380, x: "75%", y: "0%" },
            { c: "rgba(255,122,89,0.12)", size: 320, x: "55%", y: "60%" },
          ]
        : [
            { c: "rgba(91,108,255,0.22)", size: 480, x: "-6%", y: "0%" },
            { c: "rgba(56,225,255,0.16)", size: 400, x: "72%", y: "30%" },
          ];

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      {orbs.map((o, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: o.size,
            height: o.size,
            left: o.x,
            top: o.y,
            background: `radial-gradient(circle at center, ${o.c}, transparent 70%)`,
          }}
          animate={
            reduced
              ? undefined
              : {
                  x: [0, i % 2 === 0 ? 40 : -40, 0],
                  y: [0, i % 2 === 0 ? -30 : 30, 0],
                  scale: [1, 1.12, 1],
                }
          }
          transition={{
            duration: 16 + i * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
