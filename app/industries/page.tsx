import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { IndustryIcon } from "@/components/ui/IndustryIcon";
import { industries } from "@/content/industries";

export const metadata: Metadata = pageMeta({
  title: "Industries",
  description:
    "Built for appointment-driven local businesses: dentists, med spas, HVAC & trades, salons, auto shops, law offices, contractors, and clinics.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Who it's for"
        title={
          <>
            Built for businesses that{" "}
            <span className="text-gradient">book by phone.</span>
          </>
        }
        intro="If a missed call means a lost customer, this is for you. Pick your world to see exactly how it plugs in."
      />

      <Section tone="void">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border border-void-700/60 bg-void-800/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet/50 hover:bg-void-800/70"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet/10 text-violet transition-colors group-hover:bg-violet group-hover:text-white">
                <IndustryIcon name={ind.icon} className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold text-white">{ind.name}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-cloud/60">{ind.sub}</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-mint">
                See how it works
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand title="Don't see your exact business?" intro="If you book customers by phone, it works for you. Book a demo and we'll tailor it to your world." />
    </>
  );
}
