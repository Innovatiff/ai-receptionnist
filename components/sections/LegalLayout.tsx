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
      <PageHero eyebrow="Legal" title={title} intro={intro} />
      <Section tone="deep" innerClassName="max-w-3xl">
        <p className="mb-10 rounded-2xl border border-amber-400/25 bg-amber-400/[0.07] px-5 py-4 text-sm text-amber-200/85">
          Template only — replace with your reviewed legal copy before launch. Last
          updated: {updated}.
        </p>
        <div className="space-y-10 [&_a]:text-violet-300 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_li]:text-haze [&_p]:leading-relaxed [&_p]:text-haze [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </Section>
    </>
  );
}
