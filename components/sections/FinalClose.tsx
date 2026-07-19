"use client";

import { motion } from "framer-motion";
import { PhoneCall, CalendarCheck, MessageSquareText } from "lucide-react";
import { CtaCluster } from "@/components/ui/CtaCluster";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";
import { ScarcityNote } from "@/components/ui/ScarcityNote";
import { Soundwave } from "@/components/ui/Soundwave";
import { AnimatedBackdrop } from "@/components/ui/AnimatedBackdrop";
import { fadeUp, staggerParent, inViewOnce } from "@/lib/animations";

const recap = [
  { icon: PhoneCall, text: "Answers every call 24/7 — never a voicemail again" },
  { icon: CalendarCheck, text: "Books the job straight into your calendar" },
  { icon: MessageSquareText, text: "Texts back every lead so none goes cold" },
];

/** 4.11 Final Close — recap + scarcity + CTA. The risk-free, easy yes. */
export function FinalClose() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
      <AnimatedBackdrop variant="mix" />
      <div className="signal-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="container-page relative">
        <motion.div
          variants={staggerParent(0.1)}
          {...inViewOnce}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <Soundwave bars={7} height={32} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-6 text-display-lg font-bold text-white"
          >
            Your phone is ringing right now.
            <br />
            <span className="text-live-gradient">Are you answering it?</span>
          </motion.h2>

          <motion.ul variants={fadeUp} className="mx-auto mt-8 flex max-w-xl flex-col gap-3">
            {recap.map((r) => (
              <li
                key={r.text}
                className="flex items-center gap-3 rounded-xl border border-ink-700/60 bg-ink-800/40 px-4 py-3 text-left text-mist/80"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-live/10 text-live">
                  <r.icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="text-[0.95rem]">{r.text}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-8 flex justify-center">
            <GuaranteeBadge variant="seal" />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <CtaCluster trackLabel="final_close" secondaryHref="#hear-it" />
          </motion.div>

          <motion.div variants={fadeUp} className="mx-auto mt-10 max-w-xl text-left">
            <ScarcityNote />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
