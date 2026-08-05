"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerParent, inViewSoft } from "@/lib/animations";
import { cn } from "@/lib/utils";

/** Eyebrow + big title + optional intro, with a staggered reveal. */
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
      {...inViewSoft}
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className={cn(
            "eyebrow inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5",
            tone === "dark"
              ? "border-violet-500/25 bg-violet-500/10 text-violet-300"
              : "border-violet-600/20 bg-violet-600/[0.07] text-violet-700"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
          {eyebrow}
        </motion.span>
      )}
      <motion.div variants={fadeUp}>
        <Tag
          className={cn(
            "text-display-lg max-w-4xl",
            tone === "dark" ? "text-white" : "text-void",
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
            "max-w-2xl text-body-lg",
            tone === "dark" ? "text-haze" : "text-void/60",
            align === "center" && "mx-auto"
          )}
        >
          {intro}
        </motion.p>
      )}
    </motion.div>
  );
}
