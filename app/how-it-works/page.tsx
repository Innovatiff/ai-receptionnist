import type { Metadata } from "next";
import Link from "next/link";
import { PhoneForwarded, Settings2, Shield, Zap } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaCluster } from "@/components/ui/CtaCluster";

export const metadata: Metadata = pageMeta({
  title: "How It Works",
  description:
    "Done-for-you in 3 steps: we build your AI receptionist, plug it into your calls (keep your number), and it books appointments 24/7. Live in 7 days.",
  path: "/how-it-works",
});

const details = [
  {
    icon: Settings2,
    title: "Trained on your business — not a generic script",
    body: "We load your services, prices, hours, booking rules, and the questions your callers actually ask. It greets people by your business name and sounds like part of your team.",
  },
  {
    icon: PhoneForwarded,
    title: "Keep your number — forwarding does the work",
    body: "You choose when it answers: every call, only after hours, or only when your line is busy (overflow). No new number, no hardware, no app for your customers.",
  },
  {
    icon: Zap,
    title: "Books straight into your calendar",
    body: "It checks real availability and sets the appointment — then texts the caller a confirmation and reminder. You just see the booking appear.",
  },
  {
    icon: Shield,
    title: "You stay in control",
    body: "Live transcripts of every call, a simple dashboard, and rules for what to book, what to transfer, and when to take a message. Tune it anytime.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        pill="Live in 7 days"
        eyebrow="How it works"
        title={
          <>
            We build it. We plug it in.{" "}
            <span className="text-live-gradient">It books for you.</span>
          </>
        }
        intro="No tech skills, no new number, no lifting a finger. Here's exactly what happens — and what your callers experience."
      >
        <CtaCluster trackLabel="how_hero" secondaryHref="/#hear-it" />
      </PageHero>

      <HowItWorks />

      <Section tone="mist">
        <SectionHeading
          tone="light"
          eyebrow="Under the hood"
          title="Simple for you. Seamless for your callers."
          intro="The setup is done for you. The experience for your customers feels like calling a great front desk — one that's always open."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {details.map((d) => (
            <div
              key={d.title}
              className="flex gap-4 rounded-2xl border border-slate/10 bg-paper p-6 shadow-soft"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal">
                <d.icon className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink-900">{d.title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate">{d.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-slate">
          Curious what it costs?{" "}
          <Link href="/pricing" className="font-medium text-signal underline underline-offset-4">
            See the full offer and pricing
          </Link>
          .
        </p>
      </Section>

      <Faq limit={6} />
      <CtaBand showScarcity />
    </>
  );
}
