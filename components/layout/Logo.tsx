import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * BOOKLEAD mark — a squircle split into four petals by a narrow cross. Each
 * petal rounds convexly toward the centre, so the negative space resolves into
 * a four-point "signal" star. One petal path rotated 4× = exact symmetry, and
 * it stays legible down to 16px.
 */
const PETAL =
  "M 12,3 L 22.5,3 L 22.5,12.5 A 10 10 0 0 1 12.5,22.5 L 3,22.5 L 3,12 A 9 9 0 0 1 12,3 Z";

export function LogoMark({
  className,
  gradient = true,
}: {
  className?: string;
  gradient?: boolean;
}) {
  const fill = gradient ? "url(#bl-mark)" : "currentColor";
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden focusable="false">
      <defs>
        <linearGradient id="bl-mark" x1="4" y1="2" x2="44" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B9A5FF" />
          <stop offset="0.5" stopColor="#7C5CFF" />
          <stop offset="1" stopColor="#5232C4" />
        </linearGradient>
      </defs>
      <g fill={fill}>
        <path d={PETAL} />
        <path d={PETAL} transform="rotate(90 24 24)" />
        <path d={PETAL} transform="rotate(180 24 24)" />
        <path d={PETAL} transform="rotate(270 24 24)" />
      </g>
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
        "group inline-flex items-center gap-2.5 font-display text-[1.3rem] font-bold tracking-[-0.035em]",
        tone === "dark" ? "text-white" : "text-void",
        className
      )}
    >
      <LogoMark className="h-8 w-8 shrink-0 transition-transform duration-700 ease-out-expo group-hover:rotate-90" />
      <span className="leading-none">{site.name}</span>
    </Link>
  );
}
