import { Button } from "./Button";
import { DemoButton } from "./DemoButton";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/** One CTA, everywhere: primary + optional animated demo secondary. */
export function CtaCluster({
  align = "center",
  tone = "dark",
  showSupport = true,
  showSecondary = true,
  secondaryHref = "/#hear-it",
  trackLabel = "generic",
  className,
}: {
  align?: "center" | "left";
  tone?: "dark" | "light";
  showSupport?: boolean;
  showSecondary?: boolean;
  secondaryHref?: string;
  trackLabel?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
        <Button href={site.cta.href} size="xl" withArrow trackLabel={trackLabel}>
          {site.cta.primary}
        </Button>
        {showSecondary && (
          <DemoButton href={secondaryHref} tone={tone} trackLabel={trackLabel} />
        )}
      </div>
      {showSupport && (
        <p
          className={cn(
            "text-sm",
            tone === "dark" ? "text-haze/80" : "text-void/55",
            align === "center" && "mx-auto"
          )}
        >
          {site.cta.primarySupport}
        </p>
      )}
    </div>
  );
}
