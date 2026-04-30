// Section divider — 60% width centered hairline rule used to separate
// adjacent homepage sections that don't already carry their own framing
// rules. Matches the visual weight of the rules inside WilliamPullQuote
// (§7) and BriefingSection (§10) so the page reads with consistent
// architectural rhythm rather than the previous asymmetry where some
// sections had visible dividers and others didn't.
//
// Placement (per app/(marketing)/page.tsx):
//   - Above §4 AmericasFirstBlock
//   - Above §5 FoundationalCommitments
//   - Above §6 BullionGrid
//   - Above §9 ComparisonBlock
//
// Sections §3 (TrustStrip — full-bleed band on linen-warm), §7 (own top
// + bottom rules), §10 (own top + bottom rules) and the transitions
// they border do not need a SectionDivider.
//
// Reference: DESIGN_BRIEF.md production-brief override note (section
// divider entry, 2026-04-30 second pass).

export function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto"
      style={{
        width: '60%',
        height: 0.5,
        background: 'rgba(184, 150, 46, 0.50)',
      }}
    />
  )
}
