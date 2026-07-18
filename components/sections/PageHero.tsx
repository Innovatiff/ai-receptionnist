"use client";

import { motion } from "framer-motion";
import { LivePill } from "@/components/ui/LivePill";
import { Soundwave } from "@/components/ui/Soundwave";
import { fadeUp, staggerParent } from "@/lib/animations";
import { cn } from "@/lib/utils";

/** Consistent interior-page header band with the live-line motif. */
export function PageHero({
  eyebrow,
  title,
  intro,
  pill,
  children,
  showWave = true,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  pill?: string;
  children?: React.ReactNode;
  showWave?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-[calc(var(--header-h)+3.5rem)] pb-16 sm:pb-20">
      <div className="signal-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 glow-signal opacity-40 blur-3xl"
        aria-hidden
      />
      <div className="container-page relative">
        <motion.div
          variants={staggerParent(0.09)}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          {showWave && (
            <motion.div variants={fadeUp} className="flex justify-center">
              <Soundwave bars={5} height={24} />
            </motion.div>
          )}
          {pill && (
            <motion.div variants={fadeUp} className={cn("mt-5 flex justify-center", showWave && "")}>
              <LivePill label={pill} />
            </motion.div>
          )}
          {eyebrow && (
            <motion.p variants={fadeUp} className="eyebrow mt-6 text-live">
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            variants={fadeUp}
            className="mt-4 text-display-lg font-bold text-white sm:text-display-xl"
          >
            {title}
          </motion.h1>
          {intro && (
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mist/70"
            >
              {intro}
            </motion.p>
          )}
          {children && (
            <motion.div variants={fadeUp} className="mt-8">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
