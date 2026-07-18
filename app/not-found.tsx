import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Soundwave } from "@/components/ui/Soundwave";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink-950 pt-[var(--header-h)]">
      <div className="signal-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="container-page relative flex flex-col items-center text-center">
        <Soundwave bars={6} height={30} />
        <p className="eyebrow mt-6 text-live">Line dropped</p>
        <h1 className="mt-4 text-display-lg font-bold text-white">
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-4 max-w-md text-lg text-mist/70">
          But we&apos;d never drop your customers&apos; calls like that. Let&apos;s get you
          back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="ghost" withArrow>
            Back home
          </Button>
          <Button href={site.cta.href} withArrow trackLabel="404">
            {site.cta.primary}
          </Button>
        </div>
        <a
          href={site.contact.demoLineHref}
          className="mt-6 inline-flex items-center gap-2 text-sm text-mist/50 hover:text-live"
        >
          <PhoneCall className="h-4 w-4" aria-hidden />
          Or hear the demo line: {site.contact.demoLine}
        </a>
      </div>
    </section>
  );
}
