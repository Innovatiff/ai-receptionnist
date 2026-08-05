"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

type Variant = "primary" | "violet" | "ghost" | "light" | "dark";
type Size = "sm" | "md" | "lg" | "xl";

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-[-0.01em] transition-all duration-300 ease-out-expo focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-60 active:translate-y-px will-change-transform";

const variants: Record<Variant, string> = {
  // Warm ember CTA — the money action
  primary:
    "bg-gradient-to-r from-ember-glow via-ember to-ember-deep text-void shadow-ember hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-12px_rgba(255,138,76,0.75)]",
  // Violet brand action
  violet:
    "bg-gradient-to-r from-violet-400 via-violet to-violet-700 text-white shadow-violet hover:-translate-y-0.5",
  ghost:
    "border border-white/15 bg-white/[0.04] text-cloud backdrop-blur-xl hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-white/[0.09]",
  light: "bg-white text-void hover:-translate-y-0.5 hover:bg-cloud shadow-soft",
  dark: "border border-white/10 bg-void-700 text-cloud hover:bg-void-600",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-7 text-base",
  xl: "h-14 px-8 text-base sm:h-16 sm:px-10 sm:text-lg",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
  trackLabel?: string;
};

type AsLink = CommonProps & { href: string } & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "className" | "children"
  >;
type AsButton = CommonProps & { href?: undefined } & Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "children"
  >;

type Props = AsLink | AsButton;

export const Button = forwardRef<HTMLAnchorElement & HTMLButtonElement, Props>(
  function Button(
    { variant = "primary", size = "md", withArrow = false, className, children, trackLabel, ...rest },
    ref
  ) {
    const classes = cn(base, variants[variant], sizes[size], className);
    const content = (
      <>
        {/* sheen sweep on hover */}
        <span
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
          aria-hidden
        >
          <span className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/25 blur-md transition-transform duration-700 ease-out-expo group-hover:translate-x-[300%]" />
        </span>
        <span className="relative z-10">{children}</span>
        {withArrow && (
          <ArrowRight
            className="relative z-10 h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
            aria-hidden
          />
        )}
      </>
    );

    if ("href" in rest && rest.href) {
      const { href, onClick, ...anchorRest } = rest as AsLink;
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

    const { onClick, type, ...buttonRest } = rest as AsButton;
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
