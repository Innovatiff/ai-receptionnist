"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { StatCounter } from "@/components/ui/StatCounter";
import { revealScale, staggerParent, inViewSoft } from "@/lib/animations";
import { testimonials, resultStats, trustLogos } from "@/content/testimonials";

/** 4.8 Proof — placeholder-driven social proof. Nothing here is a real claim yet. */
export function ProofBlock() {
  return (
    <Section tone="void" id="proof">
      <SectionHeading
        eyebrow="Proof it works"
        title="Local businesses stopped losing calls. So can you."
        intro="Real numbers and quotes land here as clients go live. Placeholders for now."
      />

      {/* Results strip */}
      <motion.div
        variants={staggerParent(0.1)}
        {...inViewSoft}
        className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4"
      >
        {resultStats.map((s) => (
          <motion.div
            key={s.label}
            variants={revealScale}
            className="rounded-2xl border border-void-700/60 bg-void-800/50 p-6 text-center"
          >
            <p className="font-display text-3xl font-bold text-mint sm:text-4xl">
              <StatCounter
                to={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                duration={1800}
              />
            </p>
            <p className="mt-1.5 text-sm text-cloud/60">{s.label}</p>
            <span className="mt-2 inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-amber-300/80">
              Placeholder
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonials */}
      <motion.div
        variants={staggerParent(0.1)}
        {...inViewSoft}
        className="mt-8 grid gap-5 md:grid-cols-3"
      >
        {testimonials.map((t, i) => (
          <motion.div key={i} variants={revealScale}>
            <TestimonialCard t={t} tone="dark" />
          </motion.div>
        ))}
      </motion.div>

      {/* Trust logos */}
      <div className="mt-12">
        <p className="text-center text-sm text-cloud/45">
          As trusted by local businesses{" "}
          <span className="text-amber-300/70">(placeholder logos)</span>
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {trustLogos.map((logo) => (
            <span
              key={logo}
              className="rounded-lg border border-dashed border-void-600 px-4 py-2 font-display text-sm font-semibold text-cloud/40"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
