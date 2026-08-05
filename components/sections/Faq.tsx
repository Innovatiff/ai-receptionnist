"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";

/** 4.10 FAQ — objection handling. `limit` trims for the home page. */
export function Faq({
  limit,
  withHeading = true,
}: {
  limit?: number;
  withHeading?: boolean;
}) {
  const items = (limit ? faqs.slice(0, limit) : faqs).map((f) => ({
    q: f.q,
    a:
      f.q === "Which businesses is this for?" ? (
        <>
          Appointment-driven local businesses — dentists, med spas, HVAC and
          trades, salons, auto shops, law offices, clinics, and contractors.{" "}
          <Link href="/industries" className="text-violet underline underline-offset-4">
            See the full list on Industries
          </Link>
          .
        </>
      ) : (
        f.a
      ),
  }));

  return (
    <Section tone="deep" id="faq">
      {withHeading && (
        <SectionHeading
          tone="dark"
          eyebrow="Questions, answered"
          title="Everything you're wondering, before you ask."
        />
      )}
      <div className="mx-auto mt-10 max-w-3xl">
        <Accordion items={items} tone="dark" />
        {limit && limit < faqs.length && (
          <div className="mt-8 flex justify-center">
            <Button href="/faq" variant="dark" withArrow trackLabel="faq_more">
              See all questions
            </Button>
          </div>
        )}
        {!limit && (
          <div className="mt-10 flex justify-center">
            <Button href={site.cta.href} size="lg" withArrow trackLabel="faq">
              {site.cta.primary}
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}
