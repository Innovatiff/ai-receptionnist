"use client";

import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

/**
 * The signature "live line" element: an animated soundwave that reads as the
 * AI actively answering. Recurs across the site (hero, "hear it" player,
 * dividers, loading states). Pure CSS transforms; static bars under
 * prefers-reduced-motion.
 */
export function Soundwave({
  bars = 5,
  active = true,
  className,
  barClassName,
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

  // Varied per-bar heights + durations for an organic wave.
  const config = Array.from({ length: bars }, (_, i) => {
    const seeds = [0.55, 0.9, 0.7, 1, 0.65, 0.85, 0.75];
    const durs = [1.1, 0.9, 1.25, 0.8, 1.05, 0.95, 1.15];
    return {
      peak: seeds[i % seeds.length],
      dur: durs[i % durs.length],
      delay: (i % bars) * 0.09,
    };
  });

  return (
    <div
      className={cn("flex items-center gap-[3px]", className)}
      style={{ height }}
      aria-hidden
    >
      {config.map((c, i) => (
        <span
          key={i}
          className={cn(
            "w-[3px] rounded-full bg-gradient-to-t from-signal to-live",
            barClassName
          )}
          style={
            animate
              ? {
                  height: "100%",
                  transformOrigin: "center",
                  animation: `wave ${c.dur}s ease-in-out ${c.delay}s infinite`,
                }
              : {
                  // static resting state — mid heights, no motion
                  height: `${Math.round(c.peak * 100)}%`,
                }
          }
        />
      ))}
    </div>
  );
}

/** A thin full-width soundwave used as a quiet section divider. */
export function SoundwaveDivider({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion();
  return (
    <div
      className={cn("flex items-end justify-center gap-1 opacity-40", className)}
      aria-hidden
    >
      {Array.from({ length: 40 }).map((_, i) => {
        const peak = 0.3 + 0.7 * Math.abs(Math.sin(i * 0.5));
        return (
          <span
            key={i}
            className="w-[2px] rounded-full bg-gradient-to-t from-signal/50 to-live/70"
            style={
              reduced
                ? { height: `${Math.round(peak * 20)}px` }
                : {
                    height: `${Math.round(peak * 20)}px`,
                    animation: `wave ${0.9 + (i % 5) * 0.12}s ease-in-out ${
                      (i % 8) * 0.08
                    }s infinite`,
                    transformOrigin: "bottom",
                  }
            }
          />
        );
      })}
    </div>
  );
}
