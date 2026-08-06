"use client";

import { motion } from "framer-motion";
import { Fingerprint, MessageSquareText, CalendarCog, BadgeCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Soundwave } from "@/components/ui/Soundwave";
import { CtaCluster } from "@/components/ui/CtaCluster";
import { Aurora } from "@/components/ui/Aurora";
import { fadeUp, revealScale, staggerParent, inViewOnce, inViewSoft } from "@/lib/animations";

/**
 * The white-label / tailored differentiator: Booklead builds each client a
 * custom AI receptionist + booking system, trained on their business, answering
 * as their business, with its own name. The example "deployments" show a
 * differently-named AI per business — reinforcing the tailoring.
 */

const tailored = [
  {
    icon: Fingerprint,
    title: "Its own name & voice",
    body: "Branded to you. Not a generic bot.",
  },
  {
    icon: MessageSquareText,
    title: "Trained on your business",
    body: "Your services, prices, hours, FAQs.",
  },
  {
    icon: CalendarCog,
    title: "Booking your way",
    body: "Wired to your calendar and rules.",
  },
  {
    icon: BadgeCheck,
    title: "Fully done for you",
    body: "We build it. You watch it fill.",
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
    <Section tone="deep" id="tailored">
      <Aurora intensity="soft" />
      <div className="grid-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative grid gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Built for your business"
            title={
              <>
                Your AI. <span className="text-gradient">Your name.</span> Your rules.
              </>
            }
            intro="Not generic software. We build your AI — trained on your business, answering in its own name."
          />

          <motion.div
            variants={staggerParent(0.1)}
            {...inViewSoft}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {tailored.map((t) => (
              <motion.div
                key={t.title}
                variants={revealScale}
                className="group rounded-2xl border border-void-700/60 bg-void-800/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 hover:bg-void-800/70"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet/10 text-violet transition-all duration-300 group-hover:scale-110 group-hover:bg-violet group-hover:text-white">
                  <t.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-white">
                  {t.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cloud/65">{t.body}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8">
            <CtaCluster align="left" trackLabel="tailored" secondaryHref="#hear-it" />
          </div>
        </div>

        {/* Example named deployments */}
        <motion.div variants={fadeUp} {...inViewOnce} className="lg:pl-4">
          <div className="rounded-3xl border border-void-700/60 bg-gradient-to-br from-void-800/70 to-void p-6 shadow-card sm:p-8">
            <p className="eyebrow text-mint">Each client, their own named AI</p>
            <div className="mt-6 space-y-3">
              {deployments.map((d) => (
                <div
                  key={d.business}
                  className="flex items-center gap-3.5 rounded-2xl border border-void-700/60 bg-void-900/60 p-3.5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-violet-700 font-display text-sm font-bold text-white ring-1 ring-white/10">
                    {d.assistant.charAt(0)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">
                      {d.assistant}{" "}
                      <span className="font-normal text-cloud/50">· {d.business}</span>
                    </p>
                    <p className="text-xs text-cloud/45">{d.industry} · AI Receptionist</p>
                  </div>
                  <Soundwave bars={4} height={20} />
                </div>
              ))}
            </div>
            <p className="mt-5 flex items-center gap-2 text-[0.7rem] text-cloud/40">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" aria-hidden />
              Illustrative examples — your deployment is built around your business.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
