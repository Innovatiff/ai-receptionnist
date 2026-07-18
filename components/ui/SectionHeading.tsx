"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerParent, inViewOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

/**
 * Reusable eyebrow + headline + optional intro block with a staggered reveal.
 * `tone` controls text color for dark vs light sections.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "dark",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <motion.div
      variants={staggerParent(0.08)}
      {...inViewOnce}
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className={cn(
            "eyebrow",
            tone === "dark" ? "text-live" : "text-signal"
          )}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.div variants={fadeUp}>
        <Tag
          className={cn(
            "text-display-md sm:text-display-lg max-w-3xl",
            tone === "dark" ? "text-white" : "text-ink-900",
            align === "center" && "mx-auto"
          )}
        >
          {title}
        </Tag>
      </motion.div>
      {intro && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "max-w-2xl text-lg leading-relaxed",
            tone === "dark" ? "text-mist/70" : "text-slate",
            align === "center" && "mx-auto"
          )}
        >
          {intro}
        </motion.p>
      )}
    </motion.div>
  );
}
