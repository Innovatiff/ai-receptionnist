"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  CalendarCheck,
  MessageSquareText,
  Globe,
  Star,
  LineChart,
  Check,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Soundwave } from "@/components/ui/Soundwave";
import { Aurora } from "@/components/ui/Aurora";
import { CtaCluster } from "@/components/ui/CtaCluster";
import { revealScale, staggerParent, inViewSoft } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

/**
 * Bento capability grid — every card carries a small live visual so the
 * section feels alive rather than a list of icons.
 */
export function BentoGrid() {
  const reduced = usePrefersReducedMotion();

  return (
    <Section tone="void" id="capabilities">
      <Aurora intensity="soft" />
      <SectionHeading
        eyebrow="What it does"
        title={
          <>
            A complete front desk,{" "}
            <span className="text-gradient">tailored to your business.</span>
          </>
        }
        intro="Every capability below is built, branded, and tuned for you — not a template you configure."
      />

      <motion.div
        variants={staggerParent(0.08)}
        {...inViewSoft}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6 lg:gap-5"
      >
        {/* Answers every call — wide feature */}
        <motion.article
          variants={revealScale}
          className="glass card-hover group relative overflow-hidden p-6 sm:p-8 lg:col-span-4"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.26),transparent_70%)]" aria-hidden />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300 ring-1 ring-violet-400/25 transition-transform duration-500 group-hover:scale-110">
                <PhoneCall className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
                Answers every call in 2 rings
              </h3>
              <p className="mt-3 text-haze">
                Nights, weekends, lunch, overflow. Your callers always reach a real
                conversation — never voicemail.
              </p>
            </div>
            {/* live voice visual */}
            <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-4">
              <Soundwave bars={6} height={38} />
              <div className="leading-tight">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-mint">
                  On a call
                </p>
                <p className="mt-0.5 text-xs text-haze">00:42</p>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Books it */}
        <motion.article
          variants={revealScale}
          className="glass card-hover group relative overflow-hidden p-6 sm:p-7 lg:col-span-2"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ember/15 text-ember ring-1 ring-ember/25 transition-transform duration-500 group-hover:scale-110">
            <CalendarCheck className="h-5 w-5" aria-hidden />
          </span>
          <h3 className="mt-5 font-display text-xl font-bold text-white">Books the job</h3>
          <p className="mt-2 text-sm text-haze">Straight into your calendar, automatically.</p>
          <div className="mt-5 grid grid-cols-3 gap-1.5 text-center text-[0.65rem]">
            {["9:00", "10:30", "2:00"].map((t, idx) => (
              <motion.span
                key={t}
                animate={reduced ? undefined : { opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: idx * 0.7 }}
                className={cn(
                  "rounded-lg py-2 font-medium",
                  idx === 2
                    ? "bg-gradient-to-br from-ember-glow to-ember-deep text-void"
                    : "border border-white/[0.07] text-haze"
                )}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.article>

        {/* Texts back */}
        <motion.article
          variants={revealScale}
          className="glass card-hover group relative overflow-hidden p-6 sm:p-7 lg:col-span-2"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint/15 text-mint ring-1 ring-mint/25 transition-transform duration-500 group-hover:scale-110">
            <MessageSquareText className="h-5 w-5" aria-hidden />
          </span>
          <h3 className="mt-5 font-display text-xl font-bold text-white">Texts back instantly</h3>
          <p className="mt-2 text-sm text-haze">No lead ever goes cold.</p>
          <div className="mt-5 space-y-1.5">
            <div className="ml-auto w-fit max-w-full rounded-xl rounded-tr-sm bg-mint/15 px-3 py-1.5 text-[0.7rem] text-cloud">
              Thanks for calling! Book here →
            </div>
            <div className="flex items-center justify-end gap-1 text-[0.6rem] text-haze">
              <Check className="h-3 w-3 text-mint" /> Delivered
            </div>
          </div>
        </motion.article>

        {/* Languages */}
        <motion.article
          variants={revealScale}
          className="glass card-hover group relative overflow-hidden p-6 sm:p-7 lg:col-span-2"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300 ring-1 ring-violet-400/25 transition-transform duration-500 group-hover:scale-110">
            <Globe className="h-5 w-5" aria-hidden />
          </span>
          <h3 className="mt-5 font-display text-xl font-bold text-white">Speaks EN / FR / ES</h3>
          <p className="mt-2 text-sm text-haze">Answers how your callers speak.</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {["Hello", "Bonjour", "Hola"].map((w) => (
              <span
                key={w}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[0.7rem] text-cloud"
              >
                {w}
              </span>
            ))}
          </div>
        </motion.article>

        {/* Reviews */}
        <motion.article
          variants={revealScale}
          className="glass card-hover group relative overflow-hidden p-6 sm:p-7 lg:col-span-2"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ember/15 text-ember ring-1 ring-ember/25 transition-transform duration-500 group-hover:scale-110">
            <Star className="h-5 w-5" aria-hidden />
          </span>
          <h3 className="mt-5 font-display text-xl font-bold text-white">Grows your reviews</h3>
          <p className="mt-2 text-sm text-haze">Happy customers → 5-star reviews, automatically.</p>
          <div className="mt-5 flex gap-1">
            {Array.from({ length: 5 }).map((_, idx) => (
              <motion.span
                key={idx}
                animate={reduced ? undefined : { scale: [1, 1.25, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: idx * 0.18 }}
              >
                <Star className="h-4 w-4 fill-ember text-ember" aria-hidden />
              </motion.span>
            ))}
          </div>
        </motion.article>

        {/* Dashboard — wide */}
        <motion.article
          variants={revealScale}
          className="glass card-hover group relative overflow-hidden p-6 sm:p-7 lg:col-span-4"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xs">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300 ring-1 ring-violet-400/25 transition-transform duration-500 group-hover:scale-110">
                <LineChart className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-white">
                Every call, logged and searchable
              </h3>
              <p className="mt-2 text-sm text-haze">
                Live transcripts and a simple dashboard — see exactly what got booked.
              </p>
            </div>
            {/* mini bar chart */}
            <div className="flex h-24 shrink-0 items-end gap-2">
              {[38, 62, 45, 78, 56, 92, 70].map((h, idx) => (
                <motion.span
                  key={idx}
                  className="w-4 rounded-t-md bg-gradient-to-t from-violet-700 to-violet-400 sm:w-5"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                />
              ))}
            </div>
          </div>
        </motion.article>
      </motion.div>

      <div className="mt-14 flex justify-center lg:mt-16">
        <CtaCluster trackLabel="bento" secondaryHref="#hear-it" />
      </div>
    </Section>
  );
}
