"use client";

import { Check, X, TriangleAlert } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaCluster } from "@/components/ui/CtaCluster";
import {
  comparisonColumns,
  comparisonRows,
  comparisonPunchline,
  type Cell,
} from "@/content/comparison";
import { cn } from "@/lib/utils";

function CellValue({ cell, highlight }: { cell: Cell; highlight: boolean }) {
  if (cell.t === "yes")
    return (
      <div className="flex flex-col items-center gap-0.5">
        <Check className={cn("h-5 w-5", highlight ? "text-mint" : "text-violet-300")} aria-label="Yes" />
        {cell.note && (
          <span className={cn("text-[0.68rem] leading-tight", highlight ? "text-mint/80" : "text-cloud/55")}>
            {cell.note}
          </span>
        )}
      </div>
    );
  if (cell.t === "no")
    return (
      <div className="flex flex-col items-center gap-0.5">
        <X className="h-5 w-5 text-cloud/25" aria-label="No" />
        {cell.note && <span className="text-[0.68rem] leading-tight text-cloud/40">{cell.note}</span>}
      </div>
    );
  if (cell.t === "warn")
    return (
      <div className="flex flex-col items-center gap-0.5">
        <TriangleAlert className="h-[18px] w-[18px] text-amber-300/80" aria-label="Only if" />
        {cell.note && <span className="text-[0.68rem] leading-tight text-amber-200/70">{cell.note}</span>}
      </div>
    );
  if (cell.t === "dash") return <span className="text-cloud/25" aria-label="Not applicable">—</span>;
  return (
    <span className={cn("text-sm font-medium", highlight ? "text-white" : "text-cloud/75")}>
      {cell.v}
    </span>
  );
}

export function ComparisonTable({
  withHeading = true,
  withCta = true,
}: {
  withHeading?: boolean;
  withCta?: boolean;
}) {
  return (
    <Section tone="deep" id="comparison">
      {withHeading && (
        <SectionHeading
          eyebrow="Why not just… X?"
          title="The honest comparison."
          intro="Voicemail, a $49 app, an answering service, a hire — here's how each one really stacks up."
        />
      )}

      <p className="mt-6 text-center text-xs text-cloud/40 lg:hidden">Scroll to compare →</p>

      <div className="mt-6 overflow-x-auto lg:mt-12">
        <table className="w-full min-w-[860px] border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="w-[24%] p-4 text-left align-bottom">
                <span className="sr-only">Feature</span>
              </th>
              {comparisonColumns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    "p-4 text-center align-bottom",
                    col.highlight ? "rounded-t-2xl border-x border-t border-mint/30 bg-mint/[0.07]" : ""
                  )}
                >
                  <span
                    className={cn(
                      "font-display text-sm font-semibold",
                      col.highlight ? "text-mint" : "text-cloud/70"
                    )}
                  >
                    {col.label}
                  </span>
                  {col.highlight && (
                    <span className="mt-1 block text-[0.65rem] font-medium uppercase tracking-wide text-mint/70">
                      That's us
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, rIdx) => {
              const last = rIdx === comparisonRows.length - 1;
              return (
                <tr key={row.feature}>
                  <th
                    scope="row"
                    className={cn(
                      "border-t border-void-700/60 p-4 text-left text-sm",
                      row.emphasize ? "font-semibold text-white" : "font-medium text-cloud/80"
                    )}
                  >
                    {row.feature}
                  </th>
                  {comparisonColumns.map((col) => {
                    const cell = row[col.key as keyof typeof row] as Cell;
                    return (
                      <td
                        key={col.key}
                        className={cn(
                          "border-t border-void-700/60 p-4 text-center",
                          col.highlight && "border-x border-mint/30 bg-mint/[0.05]",
                          col.highlight && last && "rounded-b-2xl border-b"
                        )}
                      >
                        <CellValue cell={cell} highlight={col.highlight} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-cloud/45">
        <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-mint" /> Yes</span>
        <span className="flex items-center gap-1.5"><TriangleAlert className="h-3.5 w-3.5 text-amber-300/80" /> Only if you build/pay for it</span>
        <span className="flex items-center gap-1.5"><X className="h-3.5 w-3.5 text-cloud/30" /> No</span>
      </p>

      {/* Positioning punchline — the whole argument in one paragraph */}
      <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-violet/25 bg-gradient-to-br from-violet/[0.08] to-void-900 p-6 text-center sm:p-8">
        <p className="font-display text-xl font-bold text-white sm:text-2xl">
          {comparisonPunchline.lead}
        </p>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-cloud/75">
          {comparisonPunchline.body}
        </p>
      </div>

      {withCta && (
        <div className="mt-12">
          <CtaCluster trackLabel="comparison" secondaryHref="#hear-it" />
        </div>
      )}
    </Section>
  );
}
