import type { Metadata } from "next";
import { Check } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { OfferStack } from "@/components/sections/OfferStack";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";
import { ScarcityNote } from "@/components/ui/ScarcityNote";
import { CtaCluster } from "@/components/ui/CtaCluster";
import { guarantees, pricing } from "@/content/offer";

export const metadata: Metadata = pageMeta({
  title: "Pricing",
  description:
    "$18,800+ of value for $997 setup, then $297/month — less than one missed job. Two guarantees reverse all the risk. Month-to-month, no lock-in.",
  path: "/pricing",
});

const included = [
  "Custom AI voice receptionist, trained on your business",
  "24/7/365 answering — nights, weekends, holidays, overflow",
  "Books appointments straight into your calendar",
  "Instant text-back + automated follow-up",
  "Full lead capture, transcripts & dashboard",
  "Bilingual / trilingual (EN / FR / ES)",
  "Done-for-you setup in 7 days",
  "4 bonuses: Missed-Money Audit, Chat Widget, Review Booster, 30-day tuning",
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        pill="Pays for itself the first week"
        eyebrow="Simple, honest pricing"
        title={
          <>
            One price. <span className="text-live-gradient">Everything included.</span>
          </>
        }
        intro="No per-minute surprises, no lock-in. Less than the cost of a single missed job — with two guarantees that put the risk on us."
      >
        <CtaCluster trackLabel="pricing_hero" secondaryHref="/#hear-it" />
      </PageHero>

      {/* Price summary card */}
      <Section tone="ink" innerClassName="max-w-4xl">
        <div className="grid gap-6 rounded-3xl border border-signal/25 bg-ink-800/50 p-6 shadow-glow sm:p-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow text-live">{`The 24/7 Booking Machine`}</p>
            <p className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
              {pricing.setupLabel}{" "}
              <span className="text-xl font-medium text-mist/60">setup</span>
            </p>
            <p className="mt-1 font-display text-2xl font-semibold text-white">
              then {pricing.monthlyLabel}
            </p>
            <p className="mt-3 text-mist/65">{pricing.kicker}</p>
            <p className="mt-4 text-sm text-mist/50 line-through">
              Total value {pricing.totalValueLabel} · a full-time receptionist{" "}
              {pricing.receptionistCompare.price}
            </p>
            <div className="mt-6">
              <CtaCluster align="left" trackLabel="pricing_card" showSecondary={false} />
            </div>
          </div>
          <ul className="grid gap-2.5 self-center">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-mist/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-live" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Full value stack + price drop */}
      <OfferStack />

      {/* Both guarantees, full */}
      <Section tone="ink-deep">
        <SectionHeading
          eyebrow="Risk, reversed twice"
          title="Two guarantees. Zero risk to you."
          intro="You either get booked jobs, or you don't pay. And if it doesn't pay for itself, we refund your setup — and you keep the bonuses."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {guarantees.map((g) => (
            <GuaranteeBadge key={g.id} guarantee={g} variant="card" tone="dark" />
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-2xl">
          <ScarcityNote showFounding />
        </div>
      </Section>

      <ComparisonTable withHeading withCta={false} />
      <Faq />
      <CtaBand title="Ready when you are." />
    </>
  );
}
