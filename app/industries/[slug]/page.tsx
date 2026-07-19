import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IndustryIcon } from "@/components/ui/IndustryIcon";
import { CtaCluster } from "@/components/ui/CtaCluster";
import { TierCard } from "@/components/ui/TierCard";
import { MissedMoneyCalculator } from "@/components/interactive/MissedMoneyCalculator";
import { industries, getIndustry } from "@/content/industries";
import { INDUSTRY_TIER, getTier } from "@/content/pricing";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  return pageMeta({
    title: `AI Receptionist for ${ind.name}`,
    description: `${ind.headline} A 24/7 AI receptionist that answers, books, and texts back every ${ind.short.toLowerCase()} lead — live in 7 days.`,
    path: `/industries/${ind.slug}`,
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  const recommendedTier = getTier(INDUSTRY_TIER[slug] ?? "professional");

  return (
    <>
      <PageHero
        pill={`Built for ${ind.short}`}
        eyebrow={`AI Receptionist for ${ind.name}`}
        title={ind.headline}
        intro={ind.sub}
      >
        <CtaCluster trackLabel={`industry_${ind.slug}`} secondaryHref="/#hear-it" />
      </PageHero>

      {/* Pains vs handles */}
      <Section tone="ink">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-pulse/25 bg-pulse/[0.05] p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-white">
              What&apos;s leaking now
            </h2>
            <ul className="mt-5 space-y-3">
              {ind.pains.map((p) => (
                <li key={p} className="flex items-start gap-3 text-mist/75">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pulse/15 text-pulse">
                    <X className="h-3 w-3" aria-hidden />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-live/25 bg-live/[0.05] p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-white">
              What your AI receptionist does
            </h2>
            <ul className="mt-5 space-y-3">
              {ind.handles.map((h) => (
                <li key={h} className="flex items-start gap-3 text-mist/75">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-live/15 text-live">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Industry-tuned calculator */}
      <Section tone="ink-deep">
        <SectionHeading
          eyebrow="Your missed-money estimate"
          title={
            <>
              What missed calls likely cost a{" "}
              <span className="text-pulse">{ind.short.toLowerCase()}</span> business.
            </>
          }
          intro="Pre-filled with typical numbers for your industry. Adjust them to match your business — it's an estimate, not a promise."
        />
        <div className="mt-12">
          <MissedMoneyCalculator tone="dark" defaults={ind.calc} />
        </div>
      </Section>

      {/* Recommended plan for this vertical */}
      <Section tone="mist">
        <SectionHeading
          tone="light"
          eyebrow="The right-sized plan"
          title={
            <>
              Most {ind.name} choose{" "}
              <span className="text-signal">{recommendedTier.name}</span>.
            </>
          }
          intro={`Based on typical ${ind.short.toLowerCase()} call volume, ${recommendedTier.name} gives you the calls you need with room to grow — priced to the value of a booked ${ind.short.toLowerCase()} job.`}
        />
        <div className="mx-auto mt-12 max-w-sm">
          <TierCard tier={recommendedTier} variant="condensed" />
        </div>
        <p className="mt-8 text-center text-slate">
          <Link href="/pricing" className="font-semibold text-signal underline underline-offset-4">
            Compare all plans →
          </Link>
        </p>
      </Section>

      <Section tone="ink" innerClassName="max-w-3xl text-center">
        <p className="text-lg text-mist/70">
          Run a different business?{" "}
          <Link href="/industries" className="font-medium text-live underline underline-offset-4">
            See every industry we serve
          </Link>
          .
        </p>
      </Section>

      <CtaBand
        title={`Stop losing ${ind.short.toLowerCase()} calls.`}
        intro="Book a free demo and hear your AI receptionist answer a live call before you decide."
        showScarcity
        trackLabel={`industry_band_${ind.slug}`}
      />
    </>
  );
}
