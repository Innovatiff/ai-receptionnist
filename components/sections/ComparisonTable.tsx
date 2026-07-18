"use client";

import { Check, X, Minus } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaCluster } from "@/components/ui/CtaCluster";
import {
  comparisonColumns,
  comparisonRows,
  type Cell,
} from "@/content/comparison";
import { cn } from "@/lib/utils";

function CellValue({ value, highlight }: { value: Cell; highlight: boolean }) {
  if (value === true)
    return (
      <span className={cn("inline-flex", highlight ? "text-live" : "text-signal-300")}>
        <Check className="h-5 w-5" aria-label="Yes" />
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex text-mist/30">
        <X className="h-5 w-5" aria-label="No" />
      </span>
    );
  if (value === "partial")
    return (
      <span className="inline-flex text-amber-300/80">
        <Minus className="h-5 w-5" aria-label="Partial" />
      </span>
    );
  return (
    <span className={cn("text-sm font-medium", highlight ? "text-white" : "text-mist/70")}>
      {value}
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
    <Section tone="ink-deep" id="comparison">
      {withHeading && (
        <SectionHeading
          eyebrow="Why not just… X?"
          title="The honest comparison."
          intro="Voicemail, a human hire, an answering service — here's how each one stacks up against an AI receptionist that actually books the job."
        />
      )}

      <div className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[720px] border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="w-[26%] p-4 text-left align-bottom text-sm font-medium text-mist/50">
                <span className="sr-only">Feature</span>
              </th>
              {comparisonColumns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    "p-4 text-center align-bottom",
                    col.highlight
                      ? "rounded-t-2xl border-x border-t border-live/30 bg-live/[0.07]"
                      : ""
                  )}
                >
                  <span
                    className={cn(
                      "font-display text-sm font-semibold sm:text-base",
                      col.highlight ? "text-live" : "text-mist/70"
                    )}
                  >
                    {col.label}
                  </span>
                  {col.highlight && (
                    <span className="mt-1 block text-[0.65rem] font-medium uppercase tracking-wide text-live/70">
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
                    className="border-t border-ink-700/60 p-4 text-left text-sm font-medium text-mist/80"
                  >
                    {row.feature}
                  </th>
                  {comparisonColumns.map((col) => {
                    const value = row[col.key as keyof typeof row] as Cell;
                    return (
                      <td
                        key={col.key}
                        className={cn(
                          "border-t border-ink-700/60 p-4 text-center",
                          col.highlight && "border-x border-live/30 bg-live/[0.05]",
                          col.highlight && last && "rounded-b-2xl border-b"
                        )}
                      >
                        <CellValue value={value} highlight={col.highlight} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-mist/45">
        <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-live" /> Yes</span>
        <span className="flex items-center gap-1.5"><Minus className="h-3.5 w-3.5 text-amber-300/80" /> Sometimes / extra cost</span>
        <span className="flex items-center gap-1.5"><X className="h-3.5 w-3.5 text-mist/30" /> No</span>
      </p>

      {withCta && (
        <div className="mt-12">
          <CtaCluster trackLabel="comparison" secondaryHref="#hear-it" />
        </div>
      )}
    </Section>
  );
}
