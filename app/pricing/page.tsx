import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { OfferStack } from "@/components/sections/OfferStack";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";
import { ScarcityNote } from "@/components/ui/ScarcityNote";
import { Accordion } from "@/components/ui/Accordion";
import { CtaCluster } from "@/components/ui/CtaCluster";
import { guarantees } from "@/content/offer";
import { pricingFaqs } from "@/content/pricing";

export const metadata: Metadata = pageMeta({
  title: "Pricing",
  description:
    "Three simple plans with included call volume — from $297/mo. Setup once, cancel anytime, two guarantees. One booked job pays for the month.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        pill="One booked job pays for the month"
        eyebrow="Simple, honest pricing"
        title={
          <>
            Simple pricing.{" "}
            <span className="text-gradient">One booked job pays for the month.</span>
          </>
        }
        intro="Pick a plan with the call volume you need. Setup once, done for you. Month-to-month, cancel anytime — and two guarantees put the risk on us."
      >
        <CtaCluster trackLabel="pricing_hero" secondaryHref="/#hear-it" />
      </PageHero>

      {/* Full tier cards */}
      <PricingTiers
        variant="full"
        tone="deep"
        eyebrow="Three plans, one finished front desk"
        title="Pick your plan. Cancel anytime."
        intro="Every plan is built for your business and live in 7 days. Extra minutes are billed at the plain rate on your plan — no surprises."
      />

      {/* Full value stack for Professional + price drop */}
      <OfferStack />

      {/* Both guarantees, full */}
      <Section tone="deep">
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
      </Section>

      {/* Comparison table */}
      <ComparisonTable withHeading withCta={false} />

      {/* Scarcity + pricing FAQ */}
      <Section tone="deep">
        <div className="mx-auto max-w-3xl">
          <ScarcityNote tone="dark" className="mb-12" />
          <SectionHeading
            tone="dark"
            eyebrow="Pricing questions"
            title="Straight answers on price."
          />
          <div className="mt-8">
            <Accordion
              tone="dark"
              items={pricingFaqs.map((f) => ({ q: f.q, a: f.a }))}
            />
          </div>
        </div>
      </Section>

      <CtaBand title="Ready when you are." />
    </>
  );
}
