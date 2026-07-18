import { PlayCircle } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * The one CTA, everywhere: primary "Book My Free Demo" + support line, with
 * an optional ghost secondary ("Hear a 30-second demo"). Consistent vocabulary.
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
          <Button
            href={secondaryHref}
            size="lg"
            variant={tone === "dark" ? "ghost" : "dark"}
            trackLabel={`${trackLabel}_secondary`}
          >
            <PlayCircle className="h-5 w-5" aria-hidden />
            {site.cta.secondary}
          </Button>
        )}
      </div>
      {showSupport && (
        <p
          className={cn(
            "max-w-md text-sm",
            tone === "dark" ? "text-mist/60" : "text-slate",
            align === "center" && "mx-auto"
          )}
        >
          {site.cta.primarySupport}
        </p>
      )}
    </div>
  );
}
