"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TierCard } from "@/components/ui/TierCard";
import { easeOutExpo } from "@/lib/animations";
import { TIERS } from "@/content/pricing";
import { cn } from "@/lib/utils";

/**
 * 4.6 (revised) — condensed three-card tier comparison (home) or full cards
 * (pricing). Desktop: side by side, Professional centered & elevated. Mobile:
 * Professional first (order-first). Professional reveals last with a pop.
 */

// Per-tier reveal delay so Professional settles LAST on desktop.
const DELAY: Record<string, number> = {
  essential: 0,
  multi: 0.14,
  professional: 0.28,
};

const cardVariant = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay, duration: 0.6, ease: easeOutExpo },
  }),
};

export function PricingTiers({
  variant = "condensed",
  tone = "light",
  eyebrow = "Plans that scale with you",
  title = "Pick your plan. Cancel anytime.",
  intro = "Every plan includes the full setup, done for you, live in 7 days.",
  showHelpLine = true,
  withHeading = true,
}: {
  variant?: "condensed" | "full";
  tone?: "light" | "deep";
  eyebrow?: string;
  title?: string;
  intro?: string;
  showHelpLine?: boolean;
  withHeading?: boolean;
}) {
  const light = tone === "light";
  return (
    <Section tone={tone} id="pricing-tiers">
      {withHeading && (
        <SectionHeading
          tone={light ? "light" : "dark"}
          eyebrow={eyebrow}
          title={title}
          intro={intro}
        />
      )}

      <div className="mx-auto mt-14 grid max-w-6xl items-center gap-6 pt-4 lg:grid-cols-3">
        {TIERS.map((tier) => (
          <motion.div
            key={tier.id}
            custom={DELAY[tier.id]}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className={cn(
              "h-full",
              tier.badge === "MOST POPULAR" ? "order-first lg:order-none lg:z-10" : ""
            )}
          >
            <TierCard tier={tier} variant={variant} className="h-full" />
          </motion.div>
        ))}
      </div>

      {showHelpLine && (
        <p className={cn("mt-10 text-center", light ? "text-void" : "text-cloud/60")}>
          Not sure which fits?{" "}
          <Link
            href="/demo"
            className={cn(
              "font-semibold underline underline-offset-4",
              light ? "text-violet" : "text-mint"
            )}
          >
            Book the demo — I&apos;ll tell you straight.
          </Link>
        </p>
      )}
    </Section>
  );
}
