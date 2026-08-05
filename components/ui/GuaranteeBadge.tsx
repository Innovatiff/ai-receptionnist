import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { guarantees, type Guarantee } from "@/content/offer";

/** seal (compact) · card (full) · mini (one line). */
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
          tone === "dark" ? "text-haze" : "text-void/70",
          className
        )}
      >
        <ShieldCheck className="h-4 w-4 text-mint" aria-hidden />
        {guarantee.name}
      </span>
    );
  }

  if (variant === "card") {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl border p-6 sm:p-8",
          tone === "dark"
            ? "border-mint/20 bg-mint/[0.05]"
            : "border-violet-600/15 bg-violet-600/[0.04]",
          className
        )}
      >
        <div className="flex items-start gap-4">
          <span
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
              tone === "dark" ? "bg-mint/15 text-mint" : "bg-violet-600/10 text-violet-700"
            )}
          >
            <ShieldCheck className="h-6 w-6" aria-hidden />
          </span>
          <div className="space-y-2">
            <p className={cn("eyebrow", tone === "dark" ? "text-mint" : "text-violet-700")}>
              {guarantee.name}
            </p>
            <p
              className={cn(
                "font-display text-lg font-semibold sm:text-xl",
                tone === "dark" ? "text-white" : "text-void"
              )}
            >
              {guarantee.headline}
            </p>
            <p className={cn("text-[0.95rem] leading-relaxed", tone === "dark" ? "text-haze" : "text-void/60")}>
              {guarantee.body}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-4 py-2",
        tone === "dark"
          ? "border-mint/25 bg-mint/[0.07] text-cloud lg:backdrop-blur-xl"
          : "border-violet-600/20 bg-white text-void shadow-soft",
        className
      )}
    >
      <ShieldCheck className="h-5 w-5 text-mint" aria-hidden />
      <span className="text-sm font-semibold">{guarantee.name}</span>
    </span>
  );
}
