"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerParent, inViewOnce } from "@/lib/animations";
import { formatUSD } from "@/lib/utils";
import { ANCHORS, professional, type Tier } from "@/content/pricing";

/**
 * The price-anchoring reveal (Section 2.3), in this exact order:
 *   total value → human receptionist → answering service → your price drops in.
 * The two comparison lines do the anchoring work. Tier-aware (default Professional).
 */
export function PriceDrop({
  tier = professional,
  tone = "dark",
  className,
}: {
  tier?: Tier;
  tone?: "dark" | "light";
  className?: string;
}) {
  const muted = tone === "dark" ? "text-cloud/70" : "text-void";
  const strong = tone === "dark" ? "text-white" : "text-void-900";
  const strike = tone === "dark" ? "text-cloud/50" : "text-void/70";

  const rows = [
    { label: "Total value", value: formatUSD(tier.totalValue), note: "" },
    {
      label: "A full-time receptionist",
      value: `${ANCHORS.humanReceptionistMonthly}/mo`,
      note: "— and they sleep, take lunch, get sick, and quit.",
    },
    {
      label: "A live answering service",
      value: `${ANCHORS.answeringServiceMonthly}/mo`,
      note: "— and they take a message instead of booking the job.",
    },
  ];

  return (
    <motion.div
      variants={staggerParent(0.14)}
      {...inViewOnce}
      className={cn("flex flex-col gap-3.5", className)}
    >
      {rows.map((r) => (
        <motion.div
          key={r.label}
          variants={fadeUp}
          className={cn("flex items-baseline justify-between gap-4", muted)}
        >
          <span className="max-w-[16rem]">
            {r.label}
            {r.note && <span className="block text-sm opacity-80">{r.note}</span>}
          </span>
          <span
            className={cn(
              "shrink-0 font-display text-xl font-semibold line-through decoration-2",
              strike
            )}
          >
            {r.value}
          </span>
        </motion.div>
      ))}

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
          "relative mt-1 overflow-hidden rounded-2xl border p-6",
          tone === "dark"
            ? "border-ember/40 bg-gradient-to-br from-ember/[0.12] to-violet/[0.06]"
            : "border-ember/30 bg-gradient-to-br from-ember/[0.08] to-violet/[0.04]"
        )}
      >
        <p className={cn("eyebrow mb-2", tone === "dark" ? "text-ember" : "text-ember-deep")}>
          Your price
        </p>
        <p className={cn("font-display text-3xl font-bold sm:text-4xl", strong)}>
          ${tier.setup.toLocaleString()}{" "}
          <span className={cn("text-xl font-medium", muted)}>to set up,</span>{" "}
          <span className="whitespace-nowrap">then ${tier.monthly}/month</span>
        </p>
        <p className={cn("mt-3 text-[0.95rem] font-medium", strong)}>
          One booked job pays for the month.{" "}
          <span className={muted}>Everything after that is profit.</span>
        </p>
      </motion.div>
    </motion.div>
  );
}
