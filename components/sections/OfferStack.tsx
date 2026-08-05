"use client";

import { motion } from "framer-motion";
import { Gift, Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PriceDrop } from "@/components/ui/PriceDrop";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";
import { CtaCluster } from "@/components/ui/CtaCluster";
import { StatCounter } from "@/components/ui/StatCounter";
import { fadeUp, staggerParent, inViewOnce } from "@/lib/animations";
import { formatUSD } from "@/lib/utils";
import { valueStackFor, professional } from "@/content/pricing";

/**
 * The full value stack for the Professional plan (used on /pricing). Struck-through
 * values build on scroll; the total lands hard before the price drop.
 */
export function OfferStack() {
  const stack = valueStackFor("professional");
  return (
    <Section tone="light" id="offer">
      <SectionHeading
        tone="light"
        eyebrow="Everything in Professional"
        title="Everything you get — and what it's worth."
        intro="The Professional plan, itemized. Stacked up, here's the real value."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        {/* The stack */}
        <motion.div
          variants={staggerParent(0.06)}
          {...inViewOnce}
          className="overflow-hidden rounded-3xl border border-void/10 bg-paper shadow-card"
        >
          <ul className="divide-y divide-void/10">
            {stack.map((item) => (
              <motion.li
                key={item.label}
                variants={fadeUp}
                className="flex items-start justify-between gap-4 px-5 py-3.5 sm:px-6"
              >
                <div className="flex items-start gap-3">
                  <span
                    className={
                      item.isBonus
                        ? "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember/10 text-ember"
                        : "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet/10 text-violet"
                    }
                  >
                    {item.isBonus ? (
                      <Gift className="h-3.5 w-3.5" aria-hidden />
                    ) : (
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    )}
                  </span>
                  <div>
                    <p className="font-medium leading-snug text-void-900">{item.label}</p>
                    {item.detail && (
                      <p className="mt-0.5 text-sm text-void">{item.detail}</p>
                    )}
                  </div>
                </div>
                <span className="shrink-0 font-mono text-sm text-void/70 line-through decoration-void/40">
                  {formatUSD(item.value)}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Total */}
          <motion.div
            variants={fadeUp}
            {...inViewOnce}
            className="flex items-center justify-between gap-4 bg-void-900 px-5 py-5 sm:px-6"
          >
            <span className="font-display text-lg font-semibold text-white">
              Total value
            </span>
            <span className="font-display text-2xl font-bold text-mint sm:text-3xl">
              <StatCounter to={professional.totalValue} prefix="$" duration={2000} />
            </span>
          </motion.div>
        </motion.div>

        {/* Price drop + guarantee */}
        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-void/10 bg-paper p-6 shadow-card sm:p-7">
            <PriceDrop tone="light" />
          </div>
          <GuaranteeBadge variant="card" tone="light" />
          <CtaCluster tone="light" align="left" trackLabel="offer" secondaryHref="#hear-it" />
        </div>
      </div>
    </Section>
  );
}
