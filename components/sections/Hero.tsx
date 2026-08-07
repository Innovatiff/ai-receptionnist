"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CallSequence } from "@/components/interactive/CallSequence";
import { CtaCluster } from "@/components/ui/CtaCluster";
import { Aurora } from "@/components/ui/Aurora";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";
import { fadeUp, staggerParent } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { trustStrip, site } from "@/content/site";

const ROTATING = ["answers", "books", "follows up", "never sleeps"];

function RotatingWord() {
  const reduced = usePrefersReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const t = window.setInterval(() => setI((v) => (v + 1) % ROTATING.length), 2400);
    return () => window.clearInterval(t);
  }, [reduced]);

  if (reduced) {
    return <span className="text-gradient">answers</span>;
  }

  return (
    // The in-flow invisible word sets the height; the animated words are
    // absolutely positioned so overflow-hidden reliably clips the slot-machine
    // transition (incoming overlaps outgoing — the line is never blank).
    <span className="relative block overflow-hidden">
      <span className="invisible block whitespace-nowrap pb-[0.09em]" aria-hidden>
        follows up
      </span>
      {/*
        Crossfade in place. A vertical slot-machine slide reads as two
        half-words at once at this line-height, so we dissolve instead: the
        incoming word fades up over the outgoing one, always in the same spot.
      */}
      <AnimatePresence initial={false}>
        <motion.span
          key={i}
          initial={{ opacity: 0, y: "12%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-12%" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-gradient absolute inset-0 whitespace-nowrap pb-[0.09em]"
        >
          {ROTATING[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[calc(var(--header-h)+2.5rem)] sm:pt-[calc(var(--header-h)+4rem)] lg:pt-[calc(var(--header-h)+5rem)]">
      <Aurora intensity="loud" fade={false} />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden />
      {/* top vignette so the header floats cleanly */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-void to-transparent"
        aria-hidden
      />

      <div className="container-page relative pb-20 sm:pb-24 lg:pb-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12 xl:gap-20">
          <motion.div
            variants={staggerParent(0.09)}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start"
          >
            <motion.div variants={fadeUp}>
              <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-3.5 py-1.5 text-violet-300">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-live-dot rounded-full bg-mint" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
                </span>
                AI receptionists, built for you
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-6 text-hero text-white">
              <span className="block">The AI that</span>
              <RotatingWord />
              <span className="block">every call you miss.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-body-lg text-haze sm:mt-7"
            >
              {site.name} builds your business its own AI receptionist — answering 24/7,
              booking straight into your calendar, texting back every lead. Live in 7 days.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 w-full sm:mt-10">
              <CtaCluster align="left" trackLabel="hero" secondaryHref="#hear-it" />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <GuaranteeBadge variant="seal" />
            </motion.div>

            <motion.ul variants={fadeUp} className="mt-8 flex flex-wrap gap-2 sm:gap-2.5">
              {trustStrip.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-haze lg:backdrop-blur-xl"
                >
                  <span className="h-1 w-1 rounded-full bg-violet-400" aria-hidden />
                  {item}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
          >
            <div className="lg:motion-safe:animate-float-slow">
              <CallSequence />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
