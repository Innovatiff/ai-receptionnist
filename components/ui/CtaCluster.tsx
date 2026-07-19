import { Button } from "./Button";
import { DemoButton } from "./DemoButton";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * The one CTA, everywhere: primary "Book My Free Demo" + a short support line,
 * with an optional animated "Hear a 30-second demo" secondary.
 */
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
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <Button href={site.cta.href} size="lg" withArrow trackLabel={trackLabel}>
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
            tone === "dark" ? "text-mist/55" : "text-slate",
            align === "center" && "mx-auto"
          )}
        >
          {site.cta.primarySupport}
        </p>
      )}
    </div>
  );
}
