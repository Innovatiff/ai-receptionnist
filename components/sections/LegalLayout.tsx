import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";

/** Shared shell for /privacy and /terms. */
export function LegalLayout({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro={intro} showWave={false} />
      <Section tone="mist" innerClassName="max-w-3xl">
        <p className="mb-8 rounded-xl border border-amber-400/40 bg-amber-400/10 px-4 py-3 text-sm text-amber-700">
          Template only — replace this with your reviewed legal copy before launch.
          Last updated: {updated}.
        </p>
        <div className="space-y-8 text-ink-800 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink-900 [&_h2]:mb-2 [&_p]:leading-relaxed [&_p]:text-slate [&_li]:text-slate [&_ul]:mt-2 [&_ul]:space-y-1.5 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>
      </Section>
    </>
  );
}
