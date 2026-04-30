// DisclaimerStack — Block 9 of the homepage. Body-sm in body-ink. Each
// paragraph optionally has a `lead` phrase italicised; the rest is
// upright. Where a paragraph has no natural lead-in phrase (e.g. a
// substantiation footnote opening with a quoted comparative claim), the
// paragraph renders fully upright — asymmetric treatment is acceptable.
//
// Brief conflict: Section 14.6 specifies italic for the disclaimer stack;
// Section 8.6 warns against italic on long paragraphs. Resolved against
// Section 14.6 per CMO direction (2026-04-28) — italicising the leading
// phrase only (where one exists) anchors the disclaimer register without
// taxing readability for the 60-80 audience.
//
// Reference: DESIGN_BRIEF.md Section 14.6 (resolution note appended
// 2026-04-28) + Section 8.6 (italic readability warning).

interface DisclaimerEntry {
  /** Optional italicised leading phrase. Omit for paragraphs that lack a natural lead. */
  lead?: string
  /** Body of the paragraph, set in upright body-sm. */
  rest: string
}

interface DisclaimerStackProps {
  disclaimers: ReadonlyArray<DisclaimerEntry>
}

export function DisclaimerStack({ disclaimers }: DisclaimerStackProps) {
  return (
    <aside
      aria-label="Standing disclaimer"
      className="space-y-2"
    >
      {disclaimers.map((d, i) => (
        <p key={i} className="text-body-sm text-ink-body opacity-90">
          {d.lead ? (
            <>
              <em>{d.lead}</em>{' '}
            </>
          ) : null}
          {d.rest}
        </p>
      ))}
    </aside>
  )
}
