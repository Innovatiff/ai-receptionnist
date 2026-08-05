"use client";

import { motion } from "framer-motion";
import { CtaCluster } from "@/components/ui/CtaCluster";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";
import { ScarcityNote } from "@/components/ui/ScarcityNote";
import { Aurora } from "@/components/ui/Aurora";
import { fadeUp, staggerParent, inViewSoft } from "@/lib/animations";

/** Reusable closing CTA band for interior pages. */
export function CtaBand({
  title = "Ready to stop losing calls?",
  intro = "Book a free demo — we'll have your AI receptionist answer a live call so you can hear it before you decide.",
  showScarcity = false,
  trackLabel = "cta_band",
}: {
  title?: React.ReactNode;
  intro?: React.ReactNode;
  showScarcity?: boolean;
  trackLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <Aurora intensity="normal" />
      <div className="grid-dots pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div className="container-page relative">
        <motion.div
          variants={staggerParent(0.1)}
          {...inViewSoft}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2 variants={fadeUp} className="text-display-lg text-white">
            {title}
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-body-lg text-haze">
            {intro}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex justify-center">
            <CtaCluster trackLabel={trackLabel} secondaryHref="/#hear-it" />
          </motion.div>
          <motion.div variants={fadeUp} className="mt-9 flex justify-center">
            <GuaranteeBadge variant="seal" />
          </motion.div>
          {showScarcity && (
            <motion.div variants={fadeUp} className="mx-auto mt-10 max-w-xl text-left">
              <ScarcityNote />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
