// DisclaimerStack — Block 9 of the homepage. Italic text-body-sm in body-ink
// color. Each disclaimer is its own paragraph; multiple disclaimers stack
// with space-2 between them.
//
// Reference: DESIGN_BRIEF.md Section 14.6 (DisclaimerStack) + fragments
// Block 9.

interface DisclaimerStackProps {
  /** Array of disclaimer paragraphs, rendered in order. */
  disclaimers: ReadonlyArray<string>
}

export function DisclaimerStack({ disclaimers }: DisclaimerStackProps) {
  return (
    <aside
      aria-label="Standing disclaimer"
      className="space-y-2 max-w-prose"
    >
      {disclaimers.map((d, i) => (
        <p key={i} className="text-body-sm italic text-ink-body opacity-90">
          {d}
        </p>
      ))}
    </aside>
  )
}
