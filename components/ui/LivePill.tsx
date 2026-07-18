import { cn } from "@/lib/utils";

/** Small "● LIVE — Answering now" status pill. The live dot pulses (CSS). */
export function LivePill({
  label = "Answering now",
  className,
  tone = "dark",
}: {
  label?: string;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-eyebrow font-mono uppercase tracking-[0.14em]",
        tone === "dark"
          ? "border border-live/30 bg-live/10 text-live"
          : "border border-signal/30 bg-signal/10 text-signal-700",
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-live-dot rounded-full bg-live" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
      </span>
      {label}
    </span>
  );
}
