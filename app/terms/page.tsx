import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { site } from "@/content/site";

export const metadata: Metadata = pageMeta({
  title: "Terms of Service",
  description: `The terms that govern your use of the ${site.name} AI receptionist service.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      updated="July 2026"
      intro={`The terms that govern your use of ${site.name}.`}
    >
      <section>
        <h2>Agreement</h2>
        <p>
          By using {site.name}, you agree to these terms. If you don&apos;t agree, please
          don&apos;t use the service. {/* PLACEHOLDER */}
        </p>
      </section>
      <section>
        <h2>The service</h2>
        <p>
          We provide a done-for-you AI receptionist that answers calls, books
          appointments, and follows up with leads. Setup is completed within the
          timeframe described at purchase. Service is month-to-month with no long-term
          lock-in.
        </p>
      </section>
      <section>
        <h2>Billing</h2>
        <ul>
          <li>A one-time setup fee is charged at the start.</li>
          <li>A recurring monthly fee is billed until you cancel.</li>
          <li>You can cancel anytime; access continues through the paid period.</li>
        </ul>
      </section>
      <section>
        <h2>Guarantees</h2>
        <p>
          Our published guarantees apply as described on the site. Refunds and continued
          work under those guarantees are governed by their stated terms. {/* PLACEHOLDER */}
        </p>
      </section>
      <section>
        <h2>Acceptable use</h2>
        <p>
          You&apos;re responsible for the accuracy of the business information you provide and
          for using the service lawfully, including compliance with call-recording and
          messaging regulations in your area.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms? Email{" "}
          <a href={`mailto:${site.contact.email}`} className="text-signal underline underline-offset-4">
            {site.contact.email}
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
