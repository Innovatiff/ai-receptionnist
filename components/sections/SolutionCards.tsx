"use client";

import { motion } from "framer-motion";
import { PhoneCall, CalendarCheck, MessageSquareText, Clock } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaCluster } from "@/components/ui/CtaCluster";
import { fadeUp, staggerParent, inViewOnce } from "@/lib/animations";

const cards = [
  {
    icon: PhoneCall,
    title: "Answers every call, instantly",
    body: "Picks up in two rings, every time — no hold music, no voicemail, no missed leads.",
  },
  {
    icon: CalendarCheck,
    title: "Books straight into your calendar",
    body: "Sets the appointment while you work or sleep. You wake up to a calendar that filled itself.",
  },
  {
    icon: MessageSquareText,
    title: "Texts back every lead",
    body: "The moment a call ends, the caller gets a text — so no lead ever goes cold.",
  },
  {
    icon: Clock,
    title: "Works 24/7/365",
    body: "Nights, weekends, holidays, lunch, overflow — for a fraction of the cost of a hire.",
  },
];

export function SolutionCards() {
  return (
    <Section tone="mist" id="solution">
      <SectionHeading
        tone="light"
        eyebrow="The plug for your leaky bucket"
        title="Meet the receptionist that never sleeps, never quits, and never misses."
        intro="One always-on system that answers, books, and follows up — so every call turns into a customer instead of a missed opportunity."
      />

      <motion.div
        variants={staggerParent(0.1)}
        {...inViewOnce}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {cards.map((c) => (
          <motion.div
            key={c.title}
            variants={fadeUp}
            className="group flex flex-col gap-4 rounded-2xl border border-slate/10 bg-paper p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-signal/10 text-signal transition-colors group-hover:bg-signal group-hover:text-white">
              <c.icon className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="font-display text-lg font-semibold text-ink-900">{c.title}</h3>
            <p className="text-[0.95rem] leading-relaxed text-slate">{c.body}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-14">
        <CtaCluster tone="light" trackLabel="solution" secondaryHref="#hear-it" />
      </div>
    </Section>
  );
}
