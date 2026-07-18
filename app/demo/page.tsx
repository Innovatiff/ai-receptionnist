import type { Metadata } from "next";
import { PhoneCall, Clock, ShieldCheck } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { DemoScheduler } from "@/components/interactive/DemoScheduler";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";
import { site } from "@/content/site";

export const metadata: Metadata = pageMeta({
  title: "Book Your Free Demo",
  description:
    "Book a free demo and hear your AI receptionist answer a live call before you decide. No pressure, no lock-in, and two guarantees that reverse the risk.",
  path: "/demo",
});

const reassurances = [
  {
    icon: PhoneCall,
    title: "Hear it live, first",
    body: "I'll have your AI receptionist answer a real call so you can hear it before you commit to anything.",
  },
  {
    icon: Clock,
    title: "Takes 15 minutes",
    body: "Quick, no-pressure walkthrough. We'll map it to your business and answer every question.",
  },
  {
    icon: ShieldCheck,
    title: "Zero risk",
    body: "Month-to-month, no lock-in, and two guarantees. You either get booked jobs, or you don't pay.",
  },
];

export default function DemoPage() {
  return (
    <>
      <PageHero
        pill="I'll answer a live call for you"
        eyebrow="Book your free demo"
        title={
          <>
            Hear it answer a live call.{" "}
            <span className="text-live-gradient">Then decide.</span>
          </>
        }
        intro={site.cta.primarySupport}
      />

      <section className="relative bg-ink-900 pb-20 sm:pb-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <div className="space-y-4">
              {reassurances.map((r) => (
                <div
                  key={r.title}
                  className="flex gap-4 rounded-2xl border border-ink-700/60 bg-ink-800/40 p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-live/10 text-live">
                    <r.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display font-semibold text-white">{r.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-mist/65">{r.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <GuaranteeBadge variant="card" tone="dark" />
            <div className="rounded-2xl border border-ink-700/60 bg-ink-950/40 p-5 text-sm text-mist/65">
              Prefer to just hear it now? Call the live demo line:{" "}
              <a
                href={site.contact.demoLineHref}
                className="font-semibold text-live underline underline-offset-4"
              >
                {site.contact.demoLine}
              </a>
            </div>
          </div>

          <div>
            <DemoScheduler />
          </div>
        </div>
      </section>
    </>
  );
}
