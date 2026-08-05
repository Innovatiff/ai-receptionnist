"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerParent, inViewOnce } from "@/lib/animations";
import { primaryGuarantee } from "@/content/offer";
import { site } from "@/content/site";

/** 4.7 The Guarantee — its own bold band. Full-width, high-contrast. */
export function GuaranteeBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-violet to-violet-800">
      <div className="grid-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-mint/25 blur-3xl"
        aria-hidden
      />
      <div className="container-page relative py-20 sm:py-24">
        <motion.div
          variants={staggerParent(0.1)}
          {...inViewOnce}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUp}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25"
          >
            <ShieldCheck className="h-8 w-8" aria-hidden />
          </motion.span>
          <motion.p variants={fadeUp} className="eyebrow mt-6 text-mint">
            {primaryGuarantee.name}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-display-md font-bold text-white sm:text-display-lg"
          >
            {primaryGuarantee.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85"
          >
            {primaryGuarantee.body}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <Button href={site.cta.href} variant="light" size="lg" withArrow trackLabel="guarantee_band">
              {site.cta.primary}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
