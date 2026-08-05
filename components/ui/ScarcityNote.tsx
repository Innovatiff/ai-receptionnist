import { CalendarClock } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCARCITY } from "@/content/pricing";

/**
 * Honest founding-client scarcity (Section 2.5): editable spot count, NOT a
 * fake resetting timer. `spotsRemaining` comes from content/pricing.ts.
 */
export function ScarcityNote({
  spotsRemaining = SCARCITY.spotsRemaining,
  tone = "dark",
  className,
}: {
  spotsRemaining?: number;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-5 text-sm leading-relaxed",
        tone === "dark"
          ? "border-ember/30 bg-ember/[0.07] text-cloud/85"
          : "border-ember/25 bg-ember/[0.06] text-void-800",
        className
      )}
    >
      <p className="flex items-center gap-2 font-semibold text-ember">
        <CalendarClock className="h-4 w-4" aria-hidden />
        Founding-client pricing · {spotsRemaining}{" "}
        {spotsRemaining === 1 ? "spot" : "spots"} left this month
      </p>
      <p className="mt-2">
        I personally build and tune every account, so I only take on a handful of new
        businesses each month. The first <strong>{spotsRemaining}</strong> businesses
        this month lock today&apos;s rate for 12 months — in exchange for a testimonial
        once it&apos;s working.
      </p>
    </div>
  );
}
