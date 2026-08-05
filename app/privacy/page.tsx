import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { site } from "@/content/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your information and your callers' data.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="July 2026"
      intro={`How ${site.name} handles your information and your callers' data.`}
    >
      <section>
        <h2>Overview</h2>
        <p>
          {site.name} provides an AI receptionist service that answers calls, books
          appointments, and follows up with leads on behalf of local businesses. This
          policy explains what we collect and how we use it. {/* PLACEHOLDER */}
        </p>
      </section>
      <section>
        <h2>Information we collect</h2>
        <ul>
          <li>Business details you provide during onboarding (services, hours, FAQs).</li>
          <li>Call data processed to answer and book — including caller name, number, and reason for calling.</li>
          <li>Call transcripts and recordings used to operate and improve your receptionist.</li>
          <li>Account and billing information needed to provide the service.</li>
        </ul>
      </section>
      <section>
        <h2>How we use it</h2>
        <ul>
          <li>To answer calls, book appointments, and send text and email follow-ups.</li>
          <li>To provide transcripts, dashboards, and support.</li>
          <li>To maintain, secure, and improve the service.</li>
        </ul>
      </section>
      <section>
        <h2>Data security</h2>
        <p>
          Call and lead data is encrypted in transit and at rest and stored securely. We
          never sell your data or your callers&apos; data. Access is limited to what&apos;s
          needed to run your receptionist. {/* PLACEHOLDER */}
        </p>
      </section>
      <section>
        <h2>Your choices</h2>
        <p>
          You can request export or deletion of your data at any time by emailing{" "}
          <a href={`mailto:${site.contact.email}`} className="text-violet underline underline-offset-4">
            {site.contact.email}
          </a>
          .
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Questions about this policy? Email {site.contact.email} or call{" "}
          {site.contact.phone}.
        </p>
      </section>
    </LegalLayout>
  );
}
