import Link from "next/link";
import { Mail, Phone, Globe } from "lucide-react";
import { Logo } from "./Logo";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";
import { Button } from "@/components/ui/Button";
import { footerNav, site } from "@/content/site";

export function Footer() {
  const year = 2026; // static to avoid runtime date; update yearly.
  return (
    <footer className="border-t border-ink-700/60 bg-ink-950">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-mist/60">
              {site.bigIdea} An always-on AI receptionist that answers every
              call, books the job, and texts back every lead — so you never lose
              a customer to voicemail again.
            </p>
            <GuaranteeBadge variant="mini" />
            <div>
              <Button href={site.cta.href} size="sm" trackLabel="footer" withArrow>
                {site.cta.primary}
              </Button>
            </div>
          </div>

          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="eyebrow mb-4 text-mist/50">{col.title}</h2>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-mist/70 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink-700/60 pt-8 text-sm text-mist/55 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={`mailto:${site.contact.email}`}
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {site.contact.email}
            </a>
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {site.contact.phone}
            </a>
            <span className="inline-flex items-center gap-2">
              <Globe className="h-4 w-4" aria-hidden />
              {site.contact.languages}
            </span>
          </div>
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
