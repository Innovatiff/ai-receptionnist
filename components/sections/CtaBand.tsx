"use client";

import { motion } from "framer-motion";
import { CtaCluster } from "@/components/ui/CtaCluster";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";
import { ScarcityNote } from "@/components/ui/ScarcityNote";
import { AnimatedBackdrop } from "@/components/ui/AnimatedBackdrop";
import { fadeUp, staggerParent, inViewOnce } from "@/lib/animations";

/** Reusable closing CTA band for interior pages. */
export function CtaBand({
  title = "Ready to stop losing calls?",
  intro = "Book a free demo and I'll have your AI receptionist answer a live call — hear it before you decide.",
  showScarcity = false,
  trackLabel = "cta_band",
}: {
  title?: React.ReactNode;
  intro?: React.ReactNode;
  showScarcity?: boolean;
  trackLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-24">
      <AnimatedBackdrop variant="mix" />
      <div className="container-page relative">
        <motion.div
          variants={staggerParent(0.1)}
          {...inViewOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2 variants={fadeUp} className="text-display-md font-bold text-white sm:text-display-lg">
            {title}
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-lg text-mist/70">
            {intro}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <CtaCluster trackLabel={trackLabel} secondaryHref="/#hear-it" />
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 flex justify-center">
            <GuaranteeBadge variant="seal" />
          </motion.div>
          {showScarcity && (
            <motion.div variants={fadeUp} className="mx-auto mt-8 max-w-xl text-left">
              <ScarcityNote />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
