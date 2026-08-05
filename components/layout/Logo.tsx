import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * BOOKLEAD mark — a rounded squircle carved by four petal notches, forming a
 * four-point "signal" star at the centre. Geometric, confident, brandable at
 * 16px. Rendered as inline SVG so it stays crisp and theme-aware.
 */
export function LogoMark({
  className,
  gradient = true,
}: {
  className?: string;
  gradient?: boolean;
}) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden focusable="false">
      <defs>
        <linearGradient id="bl-mark" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9B80FF" />
          <stop offset="0.55" stopColor="#7C5CFF" />
          <stop offset="1" stopColor="#5232C4" />
        </linearGradient>
      </defs>
      {/*
        Squircle with four inward arcs cut from each edge midpoint — the
        negative space reads as a 4-point star / booking "check-in" burst.
      */}
      <path
        fill={gradient ? "url(#bl-mark)" : "currentColor"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 3h14c3.9 0 6.9 0 9.2 1.2a10 10 0 0 1 4.6 4.6C46 11.1 46 14.1 46 18v12c0 3.9 0 6.9-1.2 9.2a10 10 0 0 1-4.6 4.6C37.9 45 34.9 45 31 45H17c-3.9 0-6.9 0-9.2-1.2a10 10 0 0 1-4.6-4.6C2 36.9 2 33.9 2 30V18c0-3.9 0-6.9 1.2-9.2a10 10 0 0 1 4.6-4.6C10.1 3 13.1 3 17 3Zm5.6 4.3c0 5-.3 7.9-2 9.6-1.7 1.7-4.6 2-9.6 2-1.6 0-2.7.9-2.7 2.1 0 1.2 1.1 2.1 2.7 2.1 5 0 7.9.3 9.6 2 1.7 1.7 2 4.6 2 9.6 0 1.6.9 2.7 2.1 2.7 1.2 0 2.1-1.1 2.1-2.7 0-5 .3-7.9 2-9.6 1.7-1.7 4.6-2 9.6-2 1.6 0 2.7-.9 2.7-2.1 0-1.2-1.1-2.1-2.7-2.1-5 0-7.9-.3-9.6-2-1.7-1.7-2-4.6-2-9.6 0-1.6-.9-2.7-2.1-2.7-1.2 0-2.1 1.1-2.1 2.7Z"
      />
    </svg>
  );
}

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn(
        "group inline-flex items-center gap-2.5 font-display text-[1.35rem] font-bold tracking-[-0.03em]",
        tone === "dark" ? "text-white" : "text-void",
        className
      )}
    >
      <LogoMark className="h-9 w-9 transition-transform duration-500 ease-out-expo group-hover:rotate-[90deg]" />
      <span className="leading-none">{site.name}</span>
    </Link>
  );
}
