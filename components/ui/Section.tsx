import { cn } from "@/lib/utils";

type Tone = "void" | "deep" | "raised" | "light" | "paper";

const toneClasses: Record<Tone, string> = {
  void: "bg-void text-cloud",
  deep: "bg-void-900 text-cloud",
  raised: "bg-void-800 text-cloud",
  light: "bg-cloud text-void section-light",
  paper: "bg-paper text-void section-light",
};

/**
 * Section shell — single source of vertical rhythm. Mobile-first spacing that
 * opens up generously on large screens (375px → 2000px).
 */
export function Section({
  children,
  tone = "void",
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
        "relative scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-32 3xl:py-40",
        toneClasses[tone],
        className
      )}
    >
      <div className={cn(narrow ? "container-narrow" : "container-page", "relative", innerClassName)}>
        {children}
      </div>
    </Tag>
  );
}
