import type { Metadata } from "next";
import { PhoneMissed, HeartHandshake, Wrench } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";
import { site } from "@/content/site";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "Why I built a done-for-you AI receptionist for local businesses — and why I still personally onboard every single account.",
  path: "/about",
});

const values = [
  {
    icon: PhoneMissed,
    title: "Missed calls are missed money",
    body: "I watched good businesses lose real customers to voicemail every single day. Not because they didn't care — because they were busy doing the work. That's the problem worth solving.",
  },
  {
    icon: Wrench,
    title: "Done-for-you, or it doesn't count",
    body: "Busy owners don't have time to configure software. So we build it, plug it in, and tune it — you get the result without the work.",
  },
  {
    icon: HeartHandshake,
    title: "I onboard every account myself",
    body: "That's why I only take a handful of new clients a month. If it's going into your business with your name on the greeting, it's going to be right.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            I built this because voicemail was{" "}
            <span className="text-gradient">costing you customers.</span>
          </>
        }
        intro={`${site.bigIdea} That one idea is the whole reason ${site.name} exists.`}
      />

      <Section tone="light" innerClassName="max-w-3xl">
        <div className="prose-invert space-y-5 text-lg leading-relaxed text-void-800">
          <p>
            Here&apos;s the thing nobody tells you when you start a local business: the
            phone is your lifeline, and it rings at the worst possible times. When
            you&apos;re elbow-deep in a job. When you&apos;re with a customer. At 7pm on a
            Saturday, when you&apos;re finally sitting down.
          </p>
          <p>
            Every one of those calls is someone who needs what you sell — right now. If
            you don&apos;t pick up, they don&apos;t leave a message. They call the next name on
            the list. That&apos;s not a small leak. Over a month, it&apos;s real money walking
            out the door.
          </p>
          <p>
            {/* PLACEHOLDER — replace with the founder's real story. */}
            I spent years around owner-operated businesses and heard the same thing over
            and over: <em>&ldquo;I know I&apos;m missing calls, but I can&apos;t afford a
            receptionist and I don&apos;t have time to answer.&rdquo;</em> So I built the
            thing I wished they had — an AI receptionist that answers every call, books
            the job, and texts the caller back. Done for you. Live in a week.
          </p>
          <p className="font-display text-xl font-semibold text-void-900">
            You never miss another call. You never lose another customer. That&apos;s it.
            That&apos;s the whole promise.
          </p>
          <p className="text-void">
            — {site.founder.name}, {site.founder.role}
          </p>
        </div>
      </Section>

      <Section tone="void">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-void-700/60 bg-void-800/40 p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet/10 text-violet">
                <v.icon className="h-6 w-6" aria-hidden />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold text-white">{v.title}</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-cloud/65">{v.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <GuaranteeBadge variant="seal" />
        </div>
      </Section>

      <CtaBand title="Let's make sure you never miss another call." showScarcity />
    </>
  );
}
