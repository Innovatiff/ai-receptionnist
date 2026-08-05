"use client";

import { motion } from "framer-motion";
import { PhoneCall, CalendarCheck, MessageSquareText } from "lucide-react";
import { CtaCluster } from "@/components/ui/CtaCluster";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";
import { ScarcityNote } from "@/components/ui/ScarcityNote";
import { Aurora } from "@/components/ui/Aurora";
import { fadeUp, staggerParent, inViewSoft } from "@/lib/animations";

const recap = [
  { icon: PhoneCall, text: "Answers every call, 24/7" },
  { icon: CalendarCheck, text: "Books the job into your calendar" },
  { icon: MessageSquareText, text: "Texts back every lead" },
];

export function FinalClose() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <Aurora intensity="loud" />
      <div className="grid-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="container-page relative">
        <motion.div
          variants={staggerParent(0.1)}
          {...inViewSoft}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2 variants={fadeUp} className="text-display-xl text-white">
            Your phone is ringing right now.
            <br />
            <span className="text-gradient">Are you answering it?</span>
          </motion.h2>

          <motion.ul
            variants={fadeUp}
            className="mx-auto mt-10 flex max-w-xl flex-col gap-3"
          >
            {recap.map((r) => (
              <li
                key={r.text}
                className="glass flex items-center gap-3.5 px-5 py-4 text-left"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 ring-1 ring-violet-400/20">
                  <r.icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="text-[0.98rem] font-medium text-cloud">{r.text}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-9 flex justify-center">
            <GuaranteeBadge variant="seal" />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9">
            <CtaCluster trackLabel="final_close" secondaryHref="#hear-it" />
          </motion.div>

          <motion.div variants={fadeUp} className="mx-auto mt-12 max-w-xl text-left">
            <ScarcityNote />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
