import {
  Stethoscope,
  Sparkles,
  Wrench,
  Scissors,
  Car,
  Scale,
  Hammer,
  HeartPulse,
  Building2,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Stethoscope,
  Sparkles,
  Wrench,
  Scissors,
  Car,
  Scale,
  Hammer,
  HeartPulse,
};

/** Renders a lucide icon by name (from content/industries.ts). */
export function IndustryIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? Building2;
  return <Icon className={className} aria-hidden />;
}
