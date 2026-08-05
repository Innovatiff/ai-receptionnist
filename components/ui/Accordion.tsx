"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

export type AccordionItem = { q: string; a: React.ReactNode };

export function Accordion({
  items,
  tone = "dark",
  className,
}: {
  items: AccordionItem[];
  tone?: "dark" | "light";
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = usePrefersReducedMotion();
  const baseId = useId();
  const dark = tone === "dark";

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div
            key={i}
            className={cn(
              "overflow-hidden rounded-2xl border transition-colors duration-300",
              dark
                ? isOpen
                  ? "border-violet-500/35 bg-violet-500/[0.06]"
                  : "border-white/[0.08] bg-white/[0.025] hover:border-white/15"
                : isOpen
                  ? "border-violet-600/30 bg-violet-600/[0.04]"
                  : "border-void/10 bg-white hover:border-void/20"
            )}
          >
            <h3>
              <button
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6",
                  dark ? "text-white" : "text-void"
                )}
              >
                <span className="font-display text-base font-semibold sm:text-lg">
                  {item.q}
                </span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    isOpen
                      ? "rotate-45 border-transparent bg-gradient-to-br from-violet-400 to-violet-700 text-white"
                      : dark
                        ? "border-white/15 text-haze"
                        : "border-void/15 text-void/50"
                  )}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={reduced ? undefined : { height: 0, opacity: 0 }}
                  animate={reduced ? undefined : { height: "auto", opacity: 1 }}
                  exit={reduced ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      "px-5 pb-6 pr-10 text-[0.95rem] leading-relaxed sm:px-6",
                      dark ? "text-haze" : "text-void/65"
                    )}
                  >
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
