"use client";

import { motion } from "framer-motion";
import { PhoneCall, CalendarCheck, MessageSquareText, Clock } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaCluster } from "@/components/ui/CtaCluster";
import { revealScale, staggerParent, inViewSoft } from "@/lib/animations";

const cards = [
  {
    icon: PhoneCall,
    title: "Answers instantly",
    body: "Picks up in 2 rings. Every time.",
  },
  {
    icon: CalendarCheck,
    title: "Books the job",
    body: "Straight into your calendar, automatically.",
  },
  {
    icon: MessageSquareText,
    title: "Texts back every lead",
    body: "No lead ever goes cold.",
  },
  {
    icon: Clock,
    title: "Works 24/7/365",
    body: "Nights, weekends, lunch, overflow.",
  },
];

export function SolutionCards() {
  return (
    <Section tone="mist" id="solution">
      <SectionHeading
        tone="light"
        eyebrow="The plug for your leaky bucket"
        title="Never sleeps. Never quits. Never misses."
        intro="One system that answers, books, and follows up — 24/7."
      />

      <motion.div
        variants={staggerParent(0.1)}
        {...inViewSoft}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {cards.map((c) => (
          <motion.div
            key={c.title}
            variants={revealScale}
            className="group flex flex-col gap-4 rounded-2xl border border-slate/10 bg-paper p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card hover:border-signal/30"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-signal/10 text-signal transition-all duration-300 group-hover:scale-110 group-hover:bg-signal group-hover:text-white">
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
