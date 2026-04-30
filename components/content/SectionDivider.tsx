// Section divider — 70% width centered hairline rule used to separate
// adjacent homepage sections that don't already carry their own framing
// rules. The 70% width matches the BriefingSection (§10) framing rules
// and is the site-wide standard for section dividers (per CMO live-review
// 2026-04-30, third pass).
//
// **William's pull-quote (§7) is the deliberate exception.** Its framing
// rules stay at 60% width — narrower than the section-divider standard —
// to mark the pull-quote as a quieter, more editorial pause distinct
// from the regular content-section transitions.
//
// Placement (per app/(marketing)/page.tsx):
//   - Above §4 AmericasFirstBlock
//   - Above §5 FoundationalCommitments
//   - Above §6 BullionGrid
//   - Above §9 ComparisonBlock
//
// Sections §3 (TrustStrip — full-bleed band on linen-warm), §7 (own
// top + bottom rules at 60%), §10 (own top + bottom rules at 70%) and
// the transitions they border do not need a SectionDivider.
//
// Reference: DESIGN_BRIEF.md production-brief override note (section
// divider entry, 2026-04-30).

export function SectionDivider() {
  // The rule is wrapped in the same 1200px container + 32px padding that
  // every content section uses, so 70% of (1200 - 64) = 795.2px renders
  // at exactly the same pixel width as the BriefingSection's framing
  // rules. Without the wrapper, 70% would resolve against the full
  // viewport and the rendered pixel width would drift between dividers
  // and framing rules even though the spec percentage matched.
  return (
    <div className="mx-auto" style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}>
      <div
        aria-hidden="true"
        className="mx-auto"
        style={{
          width: '70%',
          height: 0.5,
          background: 'rgba(184, 150, 46, 0.50)',
        }}
      />
    </div>
  )
}
