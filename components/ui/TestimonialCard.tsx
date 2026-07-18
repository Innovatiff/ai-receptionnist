import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/content/testimonials";

/**
 * Testimonial card. Uses initials as an avatar (no fabricated stock photos).
 * When `placeholder`, a small clearly-labeled tag is shown so nothing reads
 * as a verified customer quote until it's real.
 */
export function TestimonialCard({
  t,
  tone = "dark",
  className,
}: {
  t: Testimonial;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col gap-5 rounded-2xl border p-6",
        tone === "dark"
          ? "border-ink-700/70 bg-ink-800/60"
          : "border-slate/10 bg-paper shadow-soft",
        className
      )}
    >
      <Quote
        className={cn("h-7 w-7", tone === "dark" ? "text-signal-400" : "text-signal")}
        aria-hidden
      />
      <blockquote
        className={cn(
          "flex-1 text-[1.02rem] leading-relaxed",
          tone === "dark" ? "text-mist/85" : "text-ink-800"
        )}
      >
        “{t.quote}”
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <span
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-semibold",
            tone === "dark"
              ? "bg-signal/15 text-signal-300"
              : "bg-signal/10 text-signal"
          )}
          aria-hidden
        >
          {t.initials}
        </span>
        <div className="text-sm">
          <div className={cn("font-semibold", tone === "dark" ? "text-white" : "text-ink-900")}>
            {t.name}
          </div>
          <div className={tone === "dark" ? "text-mist/60" : "text-slate"}>
            {t.business} · {t.location}
          </div>
        </div>
        {t.placeholder && (
          <span className="ml-auto rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-amber-300/90">
            Placeholder
          </span>
        )}
      </figcaption>
    </figure>
  );
}
