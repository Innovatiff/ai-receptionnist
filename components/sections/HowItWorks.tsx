"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardList, PlugZap, CalendarHeart } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaCluster } from "@/components/ui/CtaCluster";
import { fadeUp, inViewOnce } from "@/lib/animations";

const steps = [
  {
    icon: ClipboardList,
    title: "We build it",
    body: "Send your info once. We train your AI on your services, hours & FAQs.",
    tag: "~15 minutes",
  },
  {
    icon: PlugZap,
    title: "We plug it in",
    body: "Forward your calls — keep your number. Zero effort from you.",
    tag: "Live in 7 days",
  },
  {
    icon: CalendarHeart,
    title: "It books for you",
    body: "Answers, books & follows up 24/7 while you work or sleep.",
    tag: "24/7/365",
  },
];

export function HowItWorks() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !lineRef.current || !sectionRef.current) {
      // Static: show the line fully drawn.
      if (lineRef.current) lineRef.current.style.transform = "scaleY(1)";
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section tone="ink-deep" id="how-it-works">
      <SectionHeading
        eyebrow="Done for you in 3 steps"
        title="Live in 7 days. You don't lift a finger."
      />

      <div ref={sectionRef} className="relative mx-auto mt-16 max-w-3xl">
        {/* Progress rail */}
        <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-ink-700/70 sm:left-[31px]" aria-hidden>
          <div
            ref={lineRef}
            className="h-full w-full origin-top bg-gradient-to-b from-live via-signal to-signal-700"
            style={{ transform: "scaleY(0)" }}
          />
        </div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              {...inViewOnce}
              className="relative flex gap-5 sm:gap-7"
            >
              <div className="relative z-10 shrink-0">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-signal/30 bg-ink-900 sm:h-16 sm:w-16">
                  <step.icon className="h-6 w-6 text-live" aria-hidden />
                </span>
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-pulse font-display text-xs font-bold text-ink-950">
                  {i + 1}
                </span>
              </div>
              <div className="flex-1 rounded-2xl border border-ink-700/60 bg-ink-800/40 p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <span className="rounded-full bg-live/10 px-2.5 py-0.5 text-xs font-medium text-live">
                    {step.tag}
                  </span>
                </div>
                <p className="mt-2 leading-relaxed text-mist/70">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <CtaCluster trackLabel="how_it_works" secondaryHref="#hear-it" />
      </div>
    </Section>
  );
}
