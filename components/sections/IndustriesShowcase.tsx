"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IndustryIcon } from "@/components/ui/IndustryIcon";
import { revealScale, staggerParent, inViewSoft } from "@/lib/animations";
import { industries } from "@/content/industries";

/** Industry grid — every vertical links to its templated page. */
export function IndustriesShowcase() {
  return (
    <Section tone="void" id="industries">
      <SectionHeading
        eyebrow="Who it's for"
        title={
          <>
            Built for businesses that{" "}
            <span className="text-gradient">book by phone.</span>
          </>
        }
        intro="If a missed call means a lost customer, this is for you."
      />

      <motion.div
        variants={staggerParent(0.06)}
        {...inViewSoft}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
      >
        {industries.map((ind) => (
          <motion.div key={ind.slug} variants={revealScale}>
            <Link
              href={`/industries/${ind.slug}`}
              className="glass card-hover group flex h-full flex-col gap-4 p-5 sm:p-6"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/12 text-violet-300 ring-1 ring-violet-400/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white">
                  <IndustryIcon name={ind.icon} className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-haze/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">{ind.name}</h3>
              <p className="text-sm leading-relaxed text-haze">{ind.sub}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 underline underline-offset-4 hover:text-white"
        >
          See every industry we serve
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
