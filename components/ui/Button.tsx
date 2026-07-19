"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

type Variant = "primary" | "ghost" | "light" | "dark";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 ease-out-expo focus-visible:ring-2 disabled:opacity-60 disabled:pointer-events-none active:translate-y-px will-change-transform";

const variants: Record<Variant, string> = {
  // Primary CTA — the coral "pulse" (money/action). Dark text for AA contrast.
  primary:
    "bg-pulse text-ink-950 shadow-pulse-glow hover:bg-pulse-hover hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_rgba(255,122,89,0.7)]",
  // Ghost — for secondary actions on dark backgrounds.
  ghost:
    "border border-mist/20 bg-white/[0.04] text-mist backdrop-blur hover:border-live/50 hover:bg-white/[0.08] hover:text-white",
  light:
    "bg-mist text-ink-900 hover:bg-white hover:-translate-y-0.5 shadow-soft",
  dark:
    "border border-ink-700 bg-ink-900 text-mist hover:border-ink-600 hover:bg-ink-800",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
  /** analytics label; if set, a cta_click event fires on click */
  trackLabel?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type Props = ButtonAsLink | ButtonAsButton;

export const Button = forwardRef<HTMLAnchorElement & HTMLButtonElement, Props>(
  function Button(
    {
      variant = "primary",
      size = "md",
      withArrow = false,
      className,
      children,
      trackLabel,
      ...rest
    },
    ref
  ) {
    const classes = cn(base, variants[variant], sizes[size], className);
    const content = (
      <>
        <span className="relative z-10">{children}</span>
        {withArrow && (
          <ArrowRight
            className="relative z-10 h-4 w-4 transition-transform duration-200 ease-out-expo group-hover:translate-x-1"
            aria-hidden
          />
        )}
      </>
    );

    if ("href" in rest && rest.href) {
      const { href, onClick, ...anchorRest } = rest as ButtonAsLink;
      return (
        <Link
          ref={ref}
          href={href}
          className={classes}
          onClick={(e) => {
            if (trackLabel) trackEvent("cta_click", { label: trackLabel });
            onClick?.(e);
          }}
          {...anchorRest}
        >
          {content}
        </Link>
      );
    }

    const { onClick, type, ...buttonRest } = rest as ButtonAsButton;
    return (
      <button
        ref={ref}
        type={type ?? "button"}
        className={classes}
        onClick={(e) => {
          if (trackLabel) trackEvent("cta_click", { label: trackLabel });
          onClick?.(e);
        }}
        {...buttonRest}
      >
        {content}
      </button>
    );
  }
);
