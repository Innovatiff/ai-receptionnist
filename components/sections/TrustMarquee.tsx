"use client";

import { LogoMark } from "@/components/layout/Logo";
import { trustLogos } from "@/content/testimonials";

/**
 * Infinite logo marquee. Uses clearly-labeled PLACEHOLDER business names
 * (no fabricated brand marks) until real, permissioned logos exist.
 */
export function TrustMarquee() {
  const row = [...trustLogos, ...trustLogos];

  return (
    <section className="relative border-y border-white/[0.06] bg-void-900/60 py-10 sm:py-12">
      <p className="mb-7 whitespace-nowrap px-4 text-center text-[0.6rem] font-medium uppercase tracking-[0.12em] text-haze/70 sm:text-xs sm:tracking-[0.2em]">
        Trusted by local businesses
      </p>
      <div className="marquee-mask relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 sm:gap-14 sm:pr-14 motion-reduce:animate-none">
          {row.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-2.5 opacity-45 transition-opacity hover:opacity-80"
            >
              <LogoMark className="h-6 w-6 shrink-0" gradient={false} />
              <span className="whitespace-nowrap font-display text-base font-semibold text-cloud sm:text-lg">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-7 text-center text-[0.7rem] text-haze/45">
        Placeholder names — replaced with real clients as they come online.
      </p>
    </section>
  );
}
