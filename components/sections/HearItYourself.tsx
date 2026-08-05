"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AudioPlayer } from "@/components/interactive/AudioPlayer";
import { Button } from "@/components/ui/Button";
import { fadeUp, inViewOnce } from "@/lib/animations";
import { site } from "@/content/site";

/** 4.4 Hear It Yourself — live proof. A prominent credibility unlock. */
export function HearItYourself() {
  return (
    <Section tone="void" id="hear-it">
      <div
        className="pointer-events-none absolute inset-0 bg-violet-glow opacity-30"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Don't take our word for it"
          title={
            <>
              Don&apos;t take our word for it. <span className="text-gradient">Hear it.</span>
            </>
          }
          intro="Press play — or call the live line and talk to it yourself."
        />

        <motion.div variants={fadeUp} {...inViewOnce} className="mt-10">
          {/* PLACEHOLDER — replace /audio/sample-call.mp3 with a real sample call. */}
          <AudioPlayer src="/audio/sample-call.mp3" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          {...inViewOnce}
          className="mt-6 flex flex-col items-center gap-4 rounded-3xl border border-mint/20 bg-mint/[0.05] p-6 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint/15 text-mint">
              <PhoneCall className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="font-display font-semibold text-white">Call the live demo line</p>
              <p className="text-sm text-cloud/60">
                Talk to the AI receptionist right now — no booking needed.
              </p>
            </div>
          </div>
          <Button
            href={site.contact.demoLineHref}
            variant="ghost"
            trackLabel="hear_it_call"
          >
            {site.contact.demoLine}
          </Button>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button href={site.cta.href} size="lg" withArrow trackLabel="hear_it">
            {site.cta.primary}
          </Button>
        </div>
      </div>
    </Section>
  );
}
