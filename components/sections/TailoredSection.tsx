"use client";

import { motion } from "framer-motion";
import { Fingerprint, MessageSquareText, CalendarCog, BadgeCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Soundwave } from "@/components/ui/Soundwave";
import { CtaCluster } from "@/components/ui/CtaCluster";
import { fadeUp, staggerParent, inViewOnce } from "@/lib/animations";
import { site } from "@/content/site";

/**
 * The white-label / tailored differentiator: Novex AI builds each client a
 * custom AI receptionist + booking system, trained on their business, answering
 * as their business, with its own name. The example "deployments" show a
 * differently-named AI per business — reinforcing the tailoring.
 */

const tailored = [
  {
    icon: Fingerprint,
    title: "Its own name and voice",
    body: "Your AI gets a name that fits your brand and a natural voice that greets callers as your business — not a generic bot.",
  },
  {
    icon: MessageSquareText,
    title: "Trained on your business",
    body: "Your services, prices, hours, and the exact questions your callers ask — so every answer sounds like it came from your best front-desk person.",
  },
  {
    icon: CalendarCog,
    title: "Booking built around your workflow",
    body: "We wire it into your calendar and set the booking rules the way you actually run — deposits, buffers, service types, the works.",
  },
  {
    icon: BadgeCheck,
    title: "Fully done for you",
    body: "You don't touch software. We build, brand, connect, and tune the whole system. You just watch the calendar fill.",
  },
];

// PLACEHOLDER — example tailored deployments (each client gets its own named AI).
const deployments = [
  { assistant: "Ava", business: "Brightwater Dental", industry: "Dental" },
  { assistant: "Marcus", business: "Summit Air & Heating", industry: "HVAC" },
  { assistant: "Sofia", business: "Lumière Med Spa", industry: "Med Spa" },
];

export function TailoredSection() {
  return (
    <Section tone="ink-deep" id="tailored">
      <div className="signal-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative grid gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Not off-the-shelf — built for you"
            title={
              <>
                Your AI. <span className="text-live-gradient">Your name.</span> Your rules.
              </>
            }
            intro={`${site.name} doesn't hand you generic software. We build you a custom AI receptionist and booking system — trained on your business, answering as your business, with its own name. Your callers just experience a front desk that never misses.`}
          />

          <motion.div
            variants={staggerParent(0.1)}
            {...inViewOnce}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {tailored.map((t) => (
              <motion.div
                key={t.title}
                variants={fadeUp}
                className="rounded-2xl border border-ink-700/60 bg-ink-800/40 p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal/10 text-signal">
                  <t.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-white">
                  {t.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-mist/65">{t.body}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8">
            <CtaCluster align="left" trackLabel="tailored" secondaryHref="#hear-it" />
          </div>
        </div>

        {/* Example named deployments */}
        <motion.div variants={fadeUp} {...inViewOnce} className="lg:pl-4">
          <div className="rounded-3xl border border-ink-700/60 bg-gradient-to-br from-ink-800/70 to-ink-950 p-6 shadow-card sm:p-8">
            <p className="eyebrow text-live">One brain, tailored per business</p>
            <p className="mt-2 text-sm text-mist/60">
              A few examples of how the same technology shows up — each with its own
              name, brand, and booking setup.
            </p>
            <div className="mt-6 space-y-3">
              {deployments.map((d) => (
                <div
                  key={d.business}
                  className="flex items-center gap-3.5 rounded-2xl border border-ink-700/60 bg-ink-900/60 p-3.5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-signal to-signal-700 font-display text-sm font-bold text-white ring-1 ring-white/10">
                    {d.assistant.charAt(0)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">
                      {d.assistant}{" "}
                      <span className="font-normal text-mist/50">· {d.business}</span>
                    </p>
                    <p className="text-xs text-mist/45">{d.industry} · AI Receptionist</p>
                  </div>
                  <Soundwave bars={4} height={20} />
                </div>
              ))}
            </div>
            <p className="mt-5 flex items-center gap-2 text-[0.7rem] text-mist/40">
              <span className="h-1.5 w-1.5 rounded-full bg-live" aria-hidden />
              Illustrative examples — your deployment is built around your business.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
