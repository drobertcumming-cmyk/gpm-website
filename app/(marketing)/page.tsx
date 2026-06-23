import { Hero } from '@/components/hero'
import {
  TrustStrip,
  SectionDivider,
  AmericasFirstBlock,
  FoundationalCommitments,
  BullionGrid,
  AmbassadorBand,
  WilliamPullQuote,
  ComparisonBlock,
  BriefingSection,
  FindWhatFits,
  PreFooterDisclaimer,
  preFooterDisclaimerParagraphStyle,
} from '@/components/content'

// Production-brief homepage composition (post-2026-04-29 Option A).
// Section order matches homepage_copy_v3_6.md and the production brief:
//
//   §1  SiteHeader     (rendered by app/(marketing)/layout.tsx)
//   §2  Hero           — three-zone composition with HeroBriefingForm
//   §3  TrustStrip     — config-flagged 4th signal
//   §4  AmericasFirstBlock
//   §5  FoundationalCommitments — four cards
//   §6  BullionGrid
//       AmbassadorBand   — MTG ambassador band (added 2026-06-05, off-brief)
//   §7  WilliamPullQuote
//       §8 TestimonialsGrid removed from the homepage 2026-06-23 (component
//       file retained in components/content but no longer rendered). The
//       single SectionDivider after WilliamPullQuote now leads straight into
//       ComparisonBlock, preserving the one-divider-per-transition rhythm.
//   §9  ComparisonBlock
//   §10 BriefingSection — cover artwork + WHAT'S INSIDE list + BriefingForm
//   §11 FindWhatFits   — three path cards (Path 3 → Inheriting)
//   §12 HomepageDisclaimer
//   §13 SiteFooter     (rendered by app/(marketing)/layout.tsx)
//
// SectionDivider placement (2026-04-30 fourth pass — uniform-gap revision):
// every transition between padded content sections carries one 70%-width
// centered hairline rule. The Pullquote and Briefing sections previously
// rendered their own internal top + bottom rules at 60% / 70% with
// asymmetric spacing (192px cream above the rule, 60px below); those
// internal rules were retired and replaced by sibling SectionDividers so
// the cream-space rhythm is uniform across the page (96px above the rule,
// 96px below).

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <SectionDivider />
      <AmericasFirstBlock />
      <SectionDivider />
      <FoundationalCommitments />
      <SectionDivider />
      <BullionGrid />
      <SectionDivider />
      <AmbassadorBand />
      <SectionDivider />
      <WilliamPullQuote />
      <SectionDivider />
      <ComparisonBlock />
      <SectionDivider />
      <BriefingSection />
      <SectionDivider />
      <FindWhatFits />
      <PreFooterDisclaimer>
        <p style={preFooterDisclaimerParagraphStyle}>
          <em>Grace Precious Metals is a precious metals dealer.</em> Gold IRAs require an
          IRS-approved custodian and an IRS-approved depository. Grace Precious Metals is not a
          financial, tax, or legal advisor. Gold and precious metals investments carry risk,
          including the potential loss of principal. Past performance does not guarantee future
          results. Consult qualified professionals before making investment decisions. Pricing
          reflects CFO-reviewed published policy as of the date shown.
        </p>
        <p style={preFooterDisclaimerParagraphStyle}>
          &ldquo;A typical Gold IRA costs about a third more&rdquo; compares Grace&rsquo;s
          round-trip cost (entry spread plus ongoing custodian and depository fees; buyback at
          spot, zero exit spread) against the midpoint of the category-typical round-trip cost
          range of 17%&ndash;33%, substantiated from published research on Gold IRA pricing and
          regulatory enforcement records. Substantiation files available on counsel request. No
          specific competitor is identified on this page.
        </p>
      </PreFooterDisclaimer>
    </>
  )
}
