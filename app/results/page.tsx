import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { StatCounter } from "@/components/ui/StatCounter";
import { caseStudies, testimonials, resultStats } from "@/content/testimonials";

export const metadata: Metadata = pageMeta({
  title: "Results",
  description:
    "How local businesses stopped losing calls and started booking more jobs with a 24/7 AI receptionist. Case studies and results.",
  path: "/results",
});

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title={
          <>
            Fewer missed calls. <span className="text-live-gradient">More booked jobs.</span>
          </>
        }
        intro="Real case studies and numbers will live here as clients come online. Everything below is a clearly-labeled placeholder — nothing is presented as a verified fact until it's real."
      />

      {/* Stat strip */}
      <Section tone="ink" innerClassName="max-w-4xl">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {resultStats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-ink-700/60 bg-ink-800/50 p-6 text-center"
            >
              <p className="font-display text-3xl font-bold text-live sm:text-4xl">
                <StatCounter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mt-1.5 text-sm text-mist/60">{s.label}</p>
              <span className="mt-2 inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-amber-300/80">
                Placeholder
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Case studies */}
      <Section tone="mist">
        <SectionHeading
          tone="light"
          eyebrow="Case studies"
          title="Before and after, by the numbers."
        />
        <div className="mt-12 space-y-6">
          {caseStudies.map((c) => (
            <div
              key={c.business}
              className="grid gap-6 rounded-3xl border border-slate/10 bg-paper p-6 shadow-soft sm:p-8 lg:grid-cols-[0.8fr_1.2fr]"
            >
              <div>
                <span className="inline-block rounded-full bg-signal/10 px-3 py-1 text-xs font-semibold text-signal">
                  {c.industry}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-ink-900">{c.business}</h3>
                <span className="mt-2 inline-block rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-amber-600">
                  Placeholder
                </span>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-pulse">The challenge</p>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-slate">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-signal">What changed</p>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-slate">{c.result}</p>
                </div>
                <div className="rounded-xl bg-mist p-4">
                  <p className="text-sm font-medium text-ink-900">{c.stat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="ink-deep">
        <SectionHeading eyebrow="In their words" title="What owners say." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} tone="dark" />
          ))}
        </div>
      </Section>

      <CtaBand title="Your results start with one answered call." />
    </>
  );
}
