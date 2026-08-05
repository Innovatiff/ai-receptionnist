"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardList, PlugZap, CalendarHeart } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaCluster } from "@/components/ui/CtaCluster";
import { Aurora } from "@/components/ui/Aurora";
import { revealScale, inViewSoft } from "@/lib/animations";

const steps = [
  {
    icon: ClipboardList,
    title: "We build it",
    body: "Send your info once. We train your AI on your services, hours & FAQs — and give it a name.",
    tag: "~15 minutes of your time",
  },
  {
    icon: PlugZap,
    title: "We plug it in",
    body: "Forward your calls — keep your number. All calls, after-hours, or overflow only.",
    tag: "Live in 7 days",
  },
  {
    icon: CalendarHeart,
    title: "It books for you",
    body: "Answers, books & follows up 24/7 while you work or sleep. You just see bookings appear.",
    tag: "Working 24/7/365",
  },
];

export function HowItWorks() {
  const lineRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !lineRef.current || !wrapRef.current) {
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
            trigger: wrapRef.current,
            start: "top 70%",
            end: "bottom 65%",
            scrub: true,
          },
        }
      );
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section tone="deep" id="how-it-works">
      <Aurora intensity="soft" />
      <SectionHeading
        eyebrow="How it works"
        title={
          <>
            Live in 7 days. <span className="text-gradient">You don&apos;t lift a finger.</span>
          </>
        }
      />

      <div ref={wrapRef} className="relative mx-auto mt-14 max-w-3xl lg:mt-20">
        {/* progress rail */}
        <div
          className="absolute bottom-6 left-[27px] top-6 w-px bg-white/10 sm:left-[31px]"
          aria-hidden
        >
          <div
            ref={lineRef}
            className="h-full w-full origin-top bg-gradient-to-b from-violet-300 via-violet to-ember"
            style={{ transform: "scaleY(0)" }}
          />
        </div>

        <div className="space-y-5 sm:space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={revealScale}
              {...inViewSoft}
              className="relative flex gap-5 sm:gap-7"
            >
              <div className="relative z-10 shrink-0">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/25 bg-void-800 sm:h-16 sm:w-16">
                  <step.icon className="h-6 w-6 text-violet-300" aria-hidden />
                </span>
                <span className="absolute -right-1.5 -top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-ember-glow to-ember-deep font-display text-xs font-bold text-void shadow-ember">
                  {i + 1}
                </span>
              </div>
              <div className="glass card-hover flex-1 p-5 sm:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                    {step.title}
                  </h3>
                  <span className="rounded-full border border-mint/20 bg-mint/10 px-2.5 py-1 text-[0.7rem] font-medium text-mint">
                    {step.tag}
                  </span>
                </div>
                <p className="mt-2.5 leading-relaxed text-haze">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex justify-center lg:mt-16">
        <CtaCluster trackLabel="how_it_works" secondaryHref="#hear-it" />
      </div>
    </Section>
  );
}
