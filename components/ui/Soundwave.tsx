"use client";

import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { useIsDesktop } from "@/lib/useIsDesktop";
import { cn } from "@/lib/utils";

/**
 * Animated voice bars — the "AI is talking" motif. Static under reduced motion.
 *
 * PERF: every bar is its own infinite CSS animation, so a page with several
 * Soundwaves runs dozens of concurrent loops. On phones only the `hero` ones
 * animate; decorative repeats render as static bars (visually near-identical).
 */
export function Soundwave({
  bars = 5,
  active = true,
  hero = false,
  className,
  height = 28,
}: {
  bars?: number;
  active?: boolean;
  /** Animate on mobile too — reserve for the one signature instance in view. */
  hero?: boolean;
  className?: string;
  barClassName?: string;
  height?: number;
}) {
  const reduced = usePrefersReducedMotion();
  const isDesktop = useIsDesktop();
  const animate = active && !reduced && (isDesktop || hero);
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
