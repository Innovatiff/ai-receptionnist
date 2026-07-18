import { CalendarClock } from "lucide-react";
import { cn } from "@/lib/utils";
import { scarcity } from "@/content/site";

/**
 * Honest scarcity (Section 2.3): editable spot count, NOT a fake resetting
 * timer. `spotsRemaining` and copy come from content/site.ts.
 */
export function ScarcityNote({
  spotsRemaining = scarcity.spotsRemaining,
  showFounding = false,
  tone = "dark",
  className,
}: {
  spotsRemaining?: number;
  showFounding?: boolean;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-5 text-sm leading-relaxed",
        tone === "dark"
          ? "border-pulse/30 bg-pulse/[0.07] text-mist/85"
          : "border-pulse/25 bg-pulse/[0.06] text-ink-800",
        className
      )}
    >
      <p className="flex items-center gap-2 font-semibold text-pulse">
        <CalendarClock className="h-4 w-4" aria-hidden />
        {spotsRemaining} onboarding {spotsRemaining === 1 ? "spot" : "spots"} left{" "}
        {scarcity.monthLabel}
      </p>
      <p className="mt-2">{scarcity.note}</p>
      {showFounding && (
        <p className="mt-2">
          Founding-client pricing is locked for the first{" "}
          <strong>{scarcity.foundingClients}</strong> businesses {scarcity.monthLabel}.
          After that, setup goes to ${scarcity.foundingPriceAfter.toLocaleString()}.
        </p>
      )}
    </div>
  );
}
