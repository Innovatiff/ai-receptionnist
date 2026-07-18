import type { Metadata } from "next";
import { pageMeta, faqJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = pageMeta({
  title: "FAQ",
  description:
    "Answers on robot voice, keeping your number, setup speed, existing staff, data safety, cancellation, and how this beats an answering service.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHero
        eyebrow="Questions, answered"
        title="Everything you're wondering, before you ask."
        intro="Straight answers to the questions busy owners ask us most. Still unsure? Book a demo and hear it for yourself."
      />
      <Faq withHeading={false} />
      <CtaBand />
    </>
  );
}
