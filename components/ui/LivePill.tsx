import { cn } from "@/lib/utils";

/** "● LIVE" status pill with a pulsing dot. */
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
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.7rem] font-mono font-medium uppercase tracking-[0.16em]",
        tone === "dark"
          ? "border border-mint/30 bg-mint/10 text-mint"
          : "border border-violet-600/25 bg-violet-600/10 text-violet-700",
        className
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-live-dot rounded-full bg-current" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
      </span>
      {label}
    </span>
  );
}
