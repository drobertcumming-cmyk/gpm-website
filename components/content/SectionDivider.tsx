// Section divider — 70% width centered hairline rule used to separate
// every adjacent pair of padded homepage sections, so the cream-space
// rhythm is uniform across the page. 96px of cream above the rule,
// 96px below (contributed by the bordering sections' paddingBottom and
// paddingTop respectively).
//
// 2026-04-30 fourth pass — uniform-gap revision. The earlier "deliberate
// 60% Pullquote exception" and the internal top/bottom rules that
// Pullquote (§7) and Briefing (§10) carried were retired and replaced
// by sibling SectionDividers so every section transition reads with the
// same cream/rule/cream rhythm.
//
// Placement (per app/(marketing)/page.tsx): one SectionDivider between
// every pair of padded content sections — TrustStrip→AmericasFirst,
// AmericasFirst→Foundational, Foundational→Bullion, Bullion→Pullquote,
// Pullquote→Testimonials, Testimonials→Comparison, Comparison→Briefing,
// Briefing→FindWhatFits, FindWhatFits→Disclaimer.
//
// Hero→TrustStrip is the only intra-page transition without a divider:
// both are full-bleed bands with their own internal padding and they
// touch by design.
//
// Reference: DESIGN_BRIEF.md production-brief override note (section
// divider entry, 2026-04-30 fourth pass).

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
          maxWidth: 840,
          height: 0.5,
          background: 'rgba(184, 150, 46, 0.50)',
        }}
      />
    </div>
  )
}
