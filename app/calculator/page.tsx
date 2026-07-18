import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { MissedMoneyCalculator } from "@/components/interactive/MissedMoneyCalculator";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = pageMeta({
  title: "Missed-Money Calculator",
  description:
    "See how much revenue you lose to missed calls each month — and how much you could recover with a 24/7 AI receptionist. A transparent estimate in seconds.",
  path: "/calculator",
});

export default function CalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Missed-Money Calculator"
        title={
          <>
            How much is your <span className="text-pulse">leaky bucket</span> costing you?
          </>
        }
        intro="Every unanswered call is money dripping out. Move the sliders to see your estimated leak — and what you could recover by answering every call."
      />

      <section className="relative bg-ink-900 pb-20 sm:pb-24">
        <div className="container-page">
          <MissedMoneyCalculator tone="dark" />
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-mist/50">
            These figures are estimates to help you think about the cost of missed
            calls — not a promise of results or a claim about your specific business.
          </p>
        </div>
      </section>

      <CtaBand
        title="That money is recoverable."
        intro="Book a free demo and I'll show you exactly how your AI receptionist captures the calls you're missing today."
        trackLabel="calculator_band"
        showScarcity
      />
    </>
  );
}
