import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { guarantees, type Guarantee } from "@/content/offer";

/**
 * Reusable guarantee component.
 *  - variant="seal"  → compact badge (hero, near CTAs)
 *  - variant="card"  → full guarantee with body (offer/pricing)
 *  - variant="mini"  → one-line footer badge
 */
export function GuaranteeBadge({
  guarantee = guarantees[0],
  variant = "seal",
  tone = "dark",
  className,
}: {
  guarantee?: Guarantee;
  variant?: "seal" | "card" | "mini";
  tone?: "dark" | "light";
  className?: string;
}) {
  if (variant === "mini") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 text-sm font-medium",
          tone === "dark" ? "text-mist/80" : "text-ink-800",
          className
        )}
      >
        <ShieldCheck className="h-4 w-4 text-live" aria-hidden />
        {guarantee.name}
      </span>
    );
  }

  if (variant === "card") {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border p-6 sm:p-7",
          tone === "dark"
            ? "border-live/25 bg-live/[0.06]"
            : "border-signal/20 bg-signal/[0.04]",
          className
        )}
      >
        <div className="flex items-start gap-4">
          <span
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
              tone === "dark" ? "bg-live/15 text-live" : "bg-signal/10 text-signal"
            )}
          >
            <ShieldCheck className="h-6 w-6" aria-hidden />
          </span>
          <div className="space-y-1.5">
            <p
              className={cn(
                "eyebrow",
                tone === "dark" ? "text-live" : "text-signal"
              )}
            >
              {guarantee.name}
            </p>
            <p
              className={cn(
                "font-display text-lg font-semibold",
                tone === "dark" ? "text-white" : "text-ink-900"
              )}
            >
              {guarantee.headline}
            </p>
            <p
              className={cn(
                "text-[0.95rem] leading-relaxed",
                tone === "dark" ? "text-mist/70" : "text-slate"
              )}
            >
              {guarantee.body}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // seal
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-4 py-2",
        tone === "dark"
          ? "border-live/30 bg-ink-800/60 text-mist"
          : "border-signal/25 bg-white text-ink-800 shadow-soft",
        className
      )}
    >
      <ShieldCheck className="h-5 w-5 text-live" aria-hidden />
      <span className="text-sm font-semibold">{guarantee.name}</span>
    </span>
  );
}
