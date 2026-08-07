"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";
import { Aurora } from "@/components/ui/Aurora";
import { revealScale, staggerParent, inViewSoft } from "@/lib/animations";

/**
 * Product-fact stats band. These are capabilities of the system (not client
 * results), so they're safe to state plainly.
 */
const stats = [
  { value: 24, suffix: "/7", label: "Always answering", sub: "Nights, weekends, holidays" },
  { value: 2, suffix: " rings", label: "Average pickup", sub: "No hold music, no voicemail" },
  { value: 7, suffix: " days", label: "Live and booking", sub: "Done for you, start to finish" },
  { value: 3, suffix: " languages", label: "EN · FR · ES", sub: "Answers how your callers speak" },
];

export function StatsBand() {
  return (
    <Section tone="deep" id="stats" backdrop={<Aurora intensity="soft" />}>
      <SectionHeading
        eyebrow="Why it works"
        title={
          <>
            We don&apos;t just answer calls —{" "}
            <span className="text-gradient">we fill your calendar.</span>
          </>
        }
        intro="A finished front desk that runs itself, priced like software."
      />

      <motion.div
        variants={staggerParent(0.1)}
        {...inViewSoft}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5"
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={revealScale}
            className="glass card-hover group relative overflow-hidden p-6 sm:p-7"
          >
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.22),transparent_70%)] transition-opacity duration-500 group-hover:opacity-100 sm:opacity-60"
              aria-hidden
            />
            <p className="relative font-display text-4xl font-bold text-white sm:text-5xl">
              <span className="text-gradient">
                <StatCounter to={s.value} suffix={s.suffix} duration={1600} />
              </span>
            </p>
            <p className="relative mt-3 font-display text-base font-semibold text-white">
              {s.label}
            </p>
            <p className="relative mt-1 text-sm text-haze">{s.sub}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
