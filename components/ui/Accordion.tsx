"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

export type AccordionItem = { q: string; a: React.ReactNode };

export function Accordion({
  items,
  tone = "light",
  className,
}: {
  items: AccordionItem[];
  tone?: "dark" | "light";
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = usePrefersReducedMotion();
  const baseId = useId();

  return (
    <div className={cn("divide-y", tone === "dark" ? "divide-ink-700/70" : "divide-slate/12", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={i}>
            <h3>
              <button
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 py-5 text-left transition-colors",
                  tone === "dark"
                    ? "text-white hover:text-live"
                    : "text-ink-900 hover:text-signal"
                )}
              >
                <span className="font-display text-lg font-semibold">{item.q}</span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors",
                    isOpen
                      ? "border-transparent bg-signal text-white"
                      : tone === "dark"
                        ? "border-ink-700 text-mist/70"
                        : "border-slate/25 text-slate"
                  )}
                >
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
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
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      "pb-6 pr-12 text-[0.98rem] leading-relaxed",
                      tone === "dark" ? "text-mist/70" : "text-slate"
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
