"use client";

import { motion } from "framer-motion";
import { PhoneOff, MoonStar, Users, TrendingDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";
import { Button } from "@/components/ui/Button";
import { Aurora } from "@/components/ui/Aurora";
import { revealScale, staggerParent, inViewSoft } from "@/lib/animations";
import { site } from "@/content/site";

const moments = [
  {
    icon: MoonStar,
    title: "7:04 PM, Saturday",
    body: "You're closed. Voicemail picks up. They call the next name on the list.",
  },
  {
    icon: Users,
    title: "Mid-job with a customer",
    body: "You can't answer. No message. They book with whoever picks up.",
  },
  {
    icon: PhoneOff,
    title: "The lunch-hour rush",
    body: "Calls roll to voicemail. By the time you check, it's gone.",
  },
];

export function ProblemLeak() {
  return (
    <Section tone="void" id="problem">
      <Aurora intensity="soft" />
      <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="The hidden leak"
            title={
              <>
                Every missed call is a customer{" "}
                <span className="bg-gradient-to-r from-ember-soft to-ember-deep bg-clip-text text-transparent">
                  calling your competitor.
                </span>
              </>
            }
            intro="A large share of calls to local businesses go unanswered. Most callers who hit voicemail just hang up and dial the next name."
          />

          <motion.div
            variants={staggerParent(0.1)}
            {...inViewSoft}
            className="mt-9 space-y-3.5"
          >
            {moments.map((m) => (
              <motion.div
                key={m.title}
                variants={revealScale}
                className="glass card-hover flex gap-4 p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ember/12 text-ember ring-1 ring-ember/20">
                  <m.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-display font-semibold text-white">{m.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-haze">{m.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-9">
            <Button href={site.cta.href} size="lg" withArrow trackLabel="problem">
              {site.cta.primary}
            </Button>
          </div>
        </div>

        {/* Money counter */}
        <motion.div variants={revealScale} {...inViewSoft}>
          <div className="glass-strong relative overflow-hidden p-8 text-center sm:p-10">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,138,76,0.24),transparent_70%)]"
              aria-hidden
            />
            <p className="relative inline-flex items-center gap-2 rounded-full border border-ember/25 bg-ember/10 px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ember">
              <TrendingDown className="h-3.5 w-3.5" aria-hidden />
              The leak, in dollars
            </p>
            <p className="relative mt-7 font-display text-6xl font-bold text-white sm:text-7xl">
              <span className="bg-gradient-to-br from-ember-soft to-ember-deep bg-clip-text text-transparent">
                $<StatCounter to={4800} duration={2000} />
              </span>
            </p>
            <p className="relative mt-3 text-sm text-haze">
              estimated monthly leak for a typical local business
            </p>
            <div className="relative mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 text-left">
              <p className="font-display font-semibold text-white">
                Your phone is a leaky bucket.
              </p>
              <p className="mt-1.5 text-sm text-haze">
                See what you could recover with the{" "}
                <a
                  href="/calculator"
                  className="text-violet-300 underline underline-offset-4 hover:text-white"
                >
                  Missed-Money Calculator
                </a>
                .
              </p>
            </div>
            <p className="relative mt-5 text-[0.7rem] text-haze/50">
              Illustrative estimate — not a claim about your business.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
