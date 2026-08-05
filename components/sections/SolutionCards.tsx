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
    <Section tone="deep" id="solution">
      <SectionHeading
        tone="dark"
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
            className="glass card-hover group flex flex-col gap-4 p-6 sm:p-7"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/12 text-violet-300 ring-1 ring-violet-400/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white">
              <c.icon className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="font-display text-lg font-semibold text-white">{c.title}</h3>
            <p className="text-[0.95rem] leading-relaxed text-haze">{c.body}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-14">
        <CtaCluster tone="dark" trackLabel="solution" secondaryHref="#hear-it" />
      </div>
    </Section>
  );
}
