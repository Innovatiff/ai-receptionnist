"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerParent, inViewOnce } from "@/lib/animations";
import { pricing } from "@/content/offer";

/**
 * The price-anchoring reveal (Section 2.1): total value → receptionist
 * comparison → the actual price "drops" in. Animated stagger with a static
 * fallback (Framer respects the reduced-motion CSS + these are opacity/transform).
 */
export function PriceDrop({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const muted = tone === "dark" ? "text-mist/70" : "text-slate";
  const strong = tone === "dark" ? "text-white" : "text-ink-900";

  return (
    <motion.div
      variants={staggerParent(0.14)}
      {...inViewOnce}
      className={cn("flex flex-col gap-4", className)}
    >
      <motion.div
        variants={fadeUp}
        className={cn("flex items-baseline justify-between gap-4", muted)}
      >
        <span>Total value</span>
        <span className={cn("font-display text-xl font-semibold line-through decoration-2", tone === "dark" ? "text-mist/50" : "text-slate/70")}>
          {pricing.totalValueLabel}
        </span>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className={cn("flex items-baseline justify-between gap-4", muted)}
      >
        <span className="max-w-[16rem]">
          {pricing.receptionistCompare.label}{" "}
          <span className="text-sm opacity-80">— {pricing.receptionistCompare.caveat}</span>
        </span>
        <span className={cn("font-display text-xl font-semibold line-through decoration-2", tone === "dark" ? "text-mist/50" : "text-slate/70")}>
          {pricing.receptionistCompare.price}
        </span>
      </motion.div>

      {/* The drop */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 18, scale: 0.98 },
          show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          },
        }}
        className={cn(
          "relative overflow-hidden rounded-2xl border p-6",
          tone === "dark"
            ? "border-pulse/40 bg-gradient-to-br from-pulse/[0.12] to-signal/[0.06]"
            : "border-pulse/30 bg-gradient-to-br from-pulse/[0.08] to-signal/[0.04]"
        )}
      >
        <p className={cn("eyebrow mb-2", tone === "dark" ? "text-pulse" : "text-pulse-deep")}>
          Your price today
        </p>
        <p className={cn("font-display text-3xl font-bold sm:text-4xl", strong)}>
          {pricing.setupLabel}{" "}
          <span className={cn("text-xl font-medium", muted)}>to set up,</span>{" "}
          <span className="whitespace-nowrap">then {pricing.monthlyLabel}</span>
        </p>
        <p className={cn("mt-3 text-[0.95rem] leading-relaxed", muted)}>
          {pricing.kicker}
        </p>
      </motion.div>
    </motion.div>
  );
}
