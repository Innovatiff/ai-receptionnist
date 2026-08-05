import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Aurora } from "@/components/ui/Aurora";
import { LogoMark } from "@/components/layout/Logo";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-[var(--header-h)]">
      <Aurora intensity="normal" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="container-page relative flex flex-col items-center text-center">
        <LogoMark className="h-14 w-14 motion-safe:animate-float" />
        <p className="eyebrow mt-8 text-violet-300">Line dropped</p>
        <h1 className="mt-5 text-display-xl text-white">
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-5 max-w-md text-body-lg text-haze">
          But we&apos;d never drop your customers&apos; calls like that. Let&apos;s get you
          back on track.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="ghost" size="lg" withArrow>
            Back home
          </Button>
          <Button href={site.cta.href} size="lg" withArrow trackLabel="404">
            {site.cta.primary}
          </Button>
        </div>
        <Link
          href={site.contact.demoLineHref}
          className="mt-8 inline-flex items-center gap-2 text-sm text-haze transition-colors hover:text-white"
        >
          <PhoneCall className="h-4 w-4" aria-hidden />
          Or hear the demo line: {site.contact.demoLine}
        </Link>
      </div>
    </section>
  );
}
