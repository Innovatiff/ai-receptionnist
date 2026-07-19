"use client";

import { motion } from "framer-motion";
import { CallSequence } from "@/components/interactive/CallSequence";
import { CtaCluster } from "@/components/ui/CtaCluster";
import { LivePill } from "@/components/ui/LivePill";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";
import { fadeUp, staggerParent } from "@/lib/animations";
import { trustStrip, site } from "@/content/site";

/**
 * 4.1 Hero — the thesis. NOT a generic big-number/gradient hero: the star is a
 * live call in progress (the CallSequence signature element), branded to an
 * example client to show the white-label/tailored positioning.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-[calc(var(--header-h)+2.5rem)] pb-16 sm:pt-[calc(var(--header-h)+3rem)] sm:pb-24">
      {/* backdrop: dotted signal grid + soft glow */}
      <div className="signal-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full glow-signal opacity-60 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          variants={staggerParent(0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-6"
        >
          <motion.div variants={fadeUp}>
            <LivePill label="Your line is being answered" />
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-display-xl text-white">
            Never Miss a Call.
            <br className="hidden sm:block" /> Never Lose a Customer.{" "}
            <span className="text-live-gradient">Ever.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-relaxed text-mist/75 sm:text-lg"
          >
            {site.name} builds you a custom AI receptionist that answers every call
            24/7 — as your business, in its own name — books appointments straight into
            your calendar, and texts back every lead. Done for you, live in 7 days.
          </motion.p>

          <motion.div variants={fadeUp} className="w-full">
            <CtaCluster align="left" trackLabel="hero" secondaryHref="#hear-it" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <GuaranteeBadge variant="seal" />
          </motion.div>

          {/* Trust strip — product facts, not fabricated stats. Wraps cleanly on mobile. */}
          <motion.ul
            variants={fadeUp}
            className="flex flex-wrap gap-x-2.5 gap-y-2 pt-1"
          >
            {trustStrip.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-700/70 bg-ink-900/50 px-3 py-1.5 text-xs font-medium text-mist/70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-live" aria-hidden />
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <CallSequence />
        </motion.div>
      </div>
    </section>
  );
}
