"use client";

import { motion } from "framer-motion";
import { Link as LinkIcon, PhoneOff, MoonStar, Users } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerParent, inViewOnce } from "@/lib/animations";
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
    <Section tone="ink-deep" id="problem">
      <div className="signal-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="The hidden leak in your business"
            title={
              <>
                Every missed call is a customer{" "}
                <span className="text-pulse">calling your competitor.</span>
              </>
            }
            intro="A large share of calls to local businesses go unanswered. Most callers who hit voicemail just hang up and dial the next name. No second chance."
          />

          <motion.div
            variants={staggerParent(0.12)}
            {...inViewOnce}
            className="mt-8 space-y-4"
          >
            {moments.map((m) => (
              <motion.div
                key={m.title}
                variants={fadeUp}
                className="flex gap-4 rounded-2xl border border-ink-700/60 bg-ink-800/40 p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pulse/10 text-pulse">
                  <m.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-display font-semibold text-white">{m.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-mist/65">{m.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8">
            <Button href={site.cta.href} withArrow trackLabel="problem">
              {site.cta.primary}
            </Button>
          </div>
        </div>

        {/* Money-lost counter */}
        <motion.div variants={fadeUp} {...inViewOnce} className="lg:pl-6">
          <div className="relative overflow-hidden rounded-3xl border border-pulse/25 bg-gradient-to-br from-pulse/[0.1] to-ink-900 p-8 text-center shadow-card">
            <div
              className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-pulse/20 blur-3xl"
              aria-hidden
            />
            <p className="eyebrow text-pulse">The leaky bucket, in dollars</p>
            <p className="mt-6 font-display text-5xl font-bold text-white sm:text-6xl">
              <span className="text-pulse">$</span>
              <StatCounter to={4800} duration={2000} />
            </p>
            <p className="mt-2 text-sm text-mist/60">
              estimated monthly leak for a typical local business
            </p>
            <div className="mt-6 rounded-xl border border-ink-700/60 bg-ink-950/40 p-4 text-left text-sm text-mist/65">
              <p className="font-semibold text-white">Your phone is a leaky bucket.</p>
              <p className="mt-1">
                See what you could recover with the{" "}
                <a href="/calculator" className="text-live underline underline-offset-4 hover:text-live-soft">
                  Missed-Money Calculator
                </a>
                .
              </p>
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-mist/40">
              <LinkIcon className="h-3.5 w-3.5" aria-hidden />
              Illustrative estimate — not a claim about your business.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
