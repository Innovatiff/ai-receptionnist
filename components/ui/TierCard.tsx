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
 * A single pricing tier card. The "MOST POPULAR" tier (Professional) renders as
 * an elevated dark card so it's the obvious choice; the others are clean light
 * cards. Calls-first framing (never "unlimited"). Used condensed on the home
 * page and full on /pricing.
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
          ? "border border-ember/40 bg-void-900 text-cloud shadow-[0_30px_80px_-24px_rgba(255,122,89,0.4)] ring-1 ring-ember/20"
          : "border border-void/12 bg-paper text-void-900 shadow-soft",
        className
      )}
    >
      {tier.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-ember to-ember-deep px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-void shadow-ember">
            <Star className="h-3.5 w-3.5 fill-current" aria-hidden />
            {tier.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className={cn(tier.badge && "mt-2")}>
        <h3 className={cn("font-display text-xl font-bold", featured ? "text-white" : "text-void-900")}>
          {tier.name}
        </h3>
        <p className={cn("mt-1 text-sm", featured ? "text-cloud/55" : "text-void")}>
          Best for {tier.bestFor.toLowerCase()}
        </p>
      </div>

      {/* Price */}
      <div className="mt-5">
        <div className="flex items-baseline gap-1">
          <span className={cn("font-display text-4xl font-bold", featured ? "text-white" : "text-void-900")}>
            {monthlyLabel(tier)}
          </span>
          <span className={cn("text-base font-medium", featured ? "text-cloud/55" : "text-void")}>
            /month
          </span>
        </div>
        <p className={cn("mt-1 text-sm", featured ? "text-cloud/55" : "text-void")}>
          + ${tier.setup.toLocaleString()} one-time setup
        </p>
      </div>

      {/* Included calls — calls-first */}
      <div
        className={cn(
          "mt-5 flex items-start gap-2.5 rounded-xl border p-3.5",
          featured ? "border-mint/25 bg-mint/[0.06]" : "border-violet/15 bg-violet/[0.04]"
        )}
      >
        <Phone className={cn("mt-0.5 h-4 w-4 shrink-0", featured ? "text-mint" : "text-violet")} aria-hidden />
        <div>
          <p className={cn("text-sm font-semibold", featured ? "text-white" : "text-void-900")}>
            {callsLabel(tier)} included
          </p>
          <p className={cn("text-xs", featured ? "text-cloud/50" : "text-void")}>
            {minutesLabel(tier)}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-5">
        <Button
          href={site.cta.href}
          size="md"
          withArrow
          variant={featured ? "primary" : "dark"}
          trackLabel={`tier_${tier.id}`}
          className="w-full"
        >
          {site.cta.primary}
        </Button>
      </div>

      {/* Features */}
      <ul className="mt-6 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check className={cn("mt-0.5 h-4 w-4 shrink-0", featured ? "text-mint" : "text-violet")} aria-hidden />
            <span className={featured ? "text-cloud/85" : "text-void-800"}>{f}</span>
          </li>
        ))}
        {moreCount > 0 && (
          <li className={cn("pl-6 text-sm font-medium", featured ? "text-mint" : "text-violet")}>
            + {moreCount} more
          </li>
        )}
      </ul>

      {variant === "full" && (
        <p
          className={cn(
            "mt-5 rounded-xl border border-dashed p-3 text-xs leading-relaxed",
            featured ? "border-void-700 text-cloud/55" : "border-void/20 text-void"
          )}
        >
          {extraMinutesNote(tier)}
        </p>
      )}

      <div className="mt-6 border-t pt-4 border-current/10">
        <GuaranteeBadge variant="mini" tone={featured ? "dark" : "light"} />
      </div>
    </div>
  );
}
