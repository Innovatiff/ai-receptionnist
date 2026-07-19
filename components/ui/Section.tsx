import { cn } from "@/lib/utils";

type Tone = "ink" | "ink-deep" | "mist" | "paper";

const toneClasses: Record<Tone, string> = {
  ink: "bg-ink-900 text-mist",
  "ink-deep": "bg-ink-950 text-mist",
  mist: "bg-mist text-ink-900 section-light",
  paper: "bg-paper text-ink-900 section-light",
};

/**
 * Consistent section shell. One source of vertical rhythm so paddings never
 * cancel each other out (see brief's CSS-specificity warning). `id` enables
 * anchor scrolling; `tone` sets the light/dark theme for the band.
 */
export function Section({
  children,
  tone = "ink",
  className,
  innerClassName,
  id,
  narrow = false,
  as: Tag = "section",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  innerClassName?: string;
  id?: string;
  narrow?: boolean;
  as?: "section" | "div";
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative scroll-mt-24 py-16 sm:py-20 lg:py-28",
        toneClasses[tone],
        className
      )}
    >
      <div className={cn(narrow ? "container-narrow" : "container-page", innerClassName)}>
        {children}
      </div>
    </Tag>
  );
}
