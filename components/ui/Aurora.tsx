"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

/**
 * Living aurora backdrop — slow-drifting violet/ember orbs behind dark
 * sections. Transform/opacity only, decorative, static under reduced motion.
 */
export function Aurora({
  className,
  intensity = "normal",
}: {
  className?: string;
  intensity?: "soft" | "normal" | "loud";
}) {
  const reduced = usePrefersReducedMotion();
  const o = intensity === "loud" ? 1 : intensity === "soft" ? 0.5 : 0.75;

  const orbs = [
    { c: `rgba(124,92,255,${0.42 * o})`, s: 620, x: "-12%", y: "-10%", d: 18 },
    { c: `rgba(255,138,76,${0.26 * o})`, s: 480, x: "68%", y: "-6%", d: 22 },
    { c: `rgba(82,50,196,${0.38 * o})`, s: 560, x: "38%", y: "55%", d: 26 },
  ];

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {orbs.map((orb, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full blur-[100px]"
          style={{
            width: orb.s,
            height: orb.s,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle at center, ${orb.c}, transparent 70%)`,
          }}
          animate={
            reduced
              ? undefined
              : {
                  x: [0, i % 2 === 0 ? 70 : -70, 0],
                  y: [0, i % 2 === 0 ? -50 : 50, 0],
                  scale: [1, 1.18, 1],
                }
          }
          transition={{ duration: orb.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
