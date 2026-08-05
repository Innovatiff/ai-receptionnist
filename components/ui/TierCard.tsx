"use client";

import { Check, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GuaranteeBadge } from "@/components/ui/GuaranteeBadge";
import { cn } from "@/lib/utils";
import {
  type Tier,
  callsLabel,
  minutesLabel,
  monthlyLabel,
  extraMinutesNote,
} from "@/content/pricing";
import { site } from "@/content/site";

/**
 * Pricing tier card. Dark-first: standard tiers are glass, the MOST POPULAR
 * tier is elevated with a violet wash, ember ribbon and ember CTA so it's the
 * obvious choice. Calls-first framing (never "unlimited").
 */
export function TierCard({
  tier,
  variant = "condensed",
  className,
}: {
  tier: Tier;
  variant?: "condensed" | "full";
  className?: string;
}) {
  const featured = tier.badge === "MOST POPULAR";
  const features = variant === "condensed" ? tier.features.slice(0, 5) : tier.features;
  const moreCount = variant === "condensed" ? tier.features.length - features.length : 0;

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-3xl p-6 sm:p-7",
        featured
          ? "border border-violet-400/40 bg-gradient-to-b from-violet-500/[0.16] to-violet-700/[0.05] shadow-violet ring-1 ring-white/[0.06] backdrop-blur-xl"
          : "border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl transition-colors duration-300 hover:border-white/15",
        className
      )}
    >
      {tier.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-ember-glow to-ember-deep px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-wider text-void shadow-ember">
            <Star className="h-3 w-3 fill-current" aria-hidden />
            {tier.badge}
          </span>
        </div>
      )}

      <div className={cn(tier.badge && "mt-3")}>
        <h3 className="font-display text-xl font-bold text-white">{tier.name}</h3>
        <p className="mt-1.5 text-sm text-haze">Best for {tier.bestFor.toLowerCase()}</p>
      </div>

      {/* Price */}
      <div className="mt-6">
        <div className="flex items-baseline gap-1.5">
          <span
            className={cn(
              "font-display text-5xl font-bold",
              featured ? "text-gradient" : "text-white"
            )}
          >
            {monthlyLabel(tier)}
          </span>
          <span className="text-base font-medium text-haze">/month</span>
        </div>
        <p className="mt-1.5 text-sm text-haze">
          + ${tier.setup.toLocaleString()} one-time setup
        </p>
      </div>

      {/* Included calls — calls-first */}
      <div
        className={cn(
          "mt-6 flex items-start gap-3 rounded-2xl border p-4",
          featured ? "border-violet-400/25 bg-violet-500/[0.1]" : "border-white/[0.07] bg-white/[0.03]"
        )}
      >
        <Phone
          className={cn("mt-0.5 h-4 w-4 shrink-0", featured ? "text-violet-300" : "text-haze")}
          aria-hidden
        />
        <div>
          <p className="text-sm font-semibold text-white">{callsLabel(tier)} included</p>
          <p className="text-xs text-haze">{minutesLabel(tier)}</p>
        </div>
      </div>

      <div className="mt-6">
        <Button
          href={site.cta.href}
          size="md"
          withArrow
          variant={featured ? "primary" : "ghost"}
          trackLabel={`tier_${tier.id}`}
          className="w-full"
        >
          {site.cta.primary}
        </Button>
      </div>

      <ul className="mb-7 mt-7 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                featured ? "text-violet-300" : "text-mint"
              )}
              aria-hidden
            />
            <span className="text-cloud/85">{f}</span>
          </li>
        ))}
        {moreCount > 0 && (
          <li className="pl-6 text-sm font-semibold text-violet-300">+ {moreCount} more</li>
        )}
      </ul>

      {variant === "full" && (
        <p className="mt-6 rounded-2xl border border-dashed border-white/10 p-3.5 text-xs leading-relaxed text-haze">
          {extraMinutesNote(tier)}
        </p>
      )}

      <div className="mt-auto border-t border-white/[0.07] pt-5">
        <GuaranteeBadge variant="mini" tone="dark" />
      </div>
    </div>
  );
}
