import Link from "next/link";
import { Mail, Phone, Globe } from "lucide-react";
import { Logo } from "./Logo";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";
import { Button } from "@/components/ui/Button";
import { footerNav, site } from "@/content/site";

export function Footer() {
  const year = 2026; // static to avoid runtime date; update yearly.
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-void-900">
      <div className="aurora pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div className="container-page relative pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-6">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-haze">
              {site.bigIdea} We build your business its own AI receptionist — answering,
              booking, and following up 24/7.
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
              <h2 className="eyebrow mb-5 text-haze/60">{col.title}</h2>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-haze transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/[0.07] pt-8 text-sm text-haze sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-7">
            <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4" aria-hidden />
              {site.contact.email}
            </a>
            <a href={site.contact.phoneHref} className="inline-flex items-center gap-2 hover:text-white">
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

      {/* Giant wordmark */}
      <div className="relative mt-10 select-none overflow-hidden" aria-hidden>
        <p className="translate-y-[18%] bg-gradient-to-b from-white/[0.09] to-transparent bg-clip-text text-center font-display font-bold leading-none tracking-[-0.05em] text-transparent [font-size:clamp(4.5rem,17vw,17rem)]">
          {site.name}
        </p>
      </div>
    </footer>
  );
}
