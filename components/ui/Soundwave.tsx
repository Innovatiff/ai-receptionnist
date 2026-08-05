"use client";

import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

/** Animated voice bars — the "AI is talking" motif. Static under reduced motion. */
export function Soundwave({
  bars = 5,
  active = true,
  className,
  height = 28,
}: {
  bars?: number;
  active?: boolean;
  className?: string;
  barClassName?: string;
  height?: number;
}) {
  const reduced = usePrefersReducedMotion();
  const animate = active && !reduced;
  const seeds = [0.55, 0.95, 0.7, 1, 0.65, 0.85, 0.75];
  const durs = [1.1, 0.85, 1.25, 0.75, 1.05, 0.95, 1.15];

  return (
    <div className={cn("flex items-center gap-[3px]", className)} style={{ height }} aria-hidden>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-gradient-to-t from-violet-600 via-violet-400 to-ember"
          style={
            animate
              ? {
                  height: "100%",
                  transformOrigin: "center",
                  animation: `wave ${durs[i % durs.length]}s ease-in-out ${(i % bars) * 0.09}s infinite`,
                }
              : { height: `${Math.round(seeds[i % seeds.length] * 100)}%` }
          }
        />
      ))}
    </div>
  );
}
