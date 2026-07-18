import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * Wordmark + a tiny static soundwave glyph (the "live line" motif in miniature).
 */
export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const bars = [0.4, 0.75, 1, 0.6, 0.85];
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn(
        "group inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight",
        tone === "dark" ? "text-white" : "text-ink-900",
        className
      )}
    >
      <span
        className="flex h-9 w-9 items-center justify-center gap-[2px] rounded-lg bg-gradient-to-br from-signal to-signal-700 shadow-glow"
        aria-hidden
      >
        {bars.map((h, i) => (
          <span
            key={i}
            className="w-[2.5px] rounded-full bg-gradient-to-t from-live to-white transition-transform duration-300 group-hover:scale-y-110"
            style={{ height: `${h * 18}px` }}
          />
        ))}
      </span>
      <span>
        {site.name}
        <span className="text-signal-400">.</span>
      </span>
    </Link>
  );
}
