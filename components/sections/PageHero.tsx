"use client";

import { motion } from "framer-motion";
import { Aurora } from "@/components/ui/Aurora";
import { fadeUp, staggerParent } from "@/lib/animations";
import { cn } from "@/lib/utils";

/**
 * Interior-page hero — same treatment as the home hero: aurora backdrop,
 * line grid, eyebrow pill, big fluid title. Keeps every page on-system.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  pill,
  children,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  pill?: string;
  children?: React.ReactNode;
  align?: "center" | "left";
  /** @deprecated kept for call-site compatibility */
  showWave?: boolean;
}) {
  const centered = align === "center";
  return (
    <section className="relative overflow-hidden pb-16 pt-[calc(var(--header-h)+3.5rem)] sm:pb-20 sm:pt-[calc(var(--header-h)+5rem)] lg:pb-24 lg:pt-[calc(var(--header-h)+6.5rem)]">
      <Aurora intensity="normal" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-void to-transparent"
        aria-hidden
      />
      {/* fade into the next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-void to-transparent"
        aria-hidden
      />

      <div className="container-page relative">
        <motion.div
          variants={staggerParent(0.09)}
          initial="hidden"
          animate="show"
          className={cn(
            "flex flex-col",
            centered ? "mx-auto max-w-4xl items-center text-center" : "max-w-3xl items-start text-left"
          )}
        >
          {pill && (
            <motion.span
              variants={fadeUp}
              className="eyebrow inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-3.5 py-1.5 text-violet-300"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-live-dot rounded-full bg-mint" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
              </span>
              {pill}
            </motion.span>
          )}

          {eyebrow && (
            <motion.p
              variants={fadeUp}
              className={cn("eyebrow text-violet-300", pill ? "mt-6" : "")}
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h1
            variants={fadeUp}
            className={cn("text-display-xl text-white", eyebrow || pill ? "mt-5" : "")}
          >
            {title}
          </motion.h1>

          {intro && (
            <motion.p
              variants={fadeUp}
              className={cn(
                "mt-6 max-w-2xl text-body-lg text-haze",
                centered && "mx-auto"
              )}
            >
              {intro}
            </motion.p>
          )}

          {children && (
            <motion.div variants={fadeUp} className="mt-9 w-full">
              <div className={cn("flex", centered ? "justify-center" : "justify-start")}>
                {children}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
