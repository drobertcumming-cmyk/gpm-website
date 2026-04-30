import { Hero } from '@/components/hero'
import {
  TrustStrip,
  SectionDivider,
  AmericasFirstBlock,
  FoundationalCommitments,
  BullionGrid,
  WilliamPullQuote,
  TestimonialsGrid,
  ComparisonBlock,
  BriefingSection,
  FindWhatFits,
  HomepageDisclaimer,
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
//   §7  WilliamPullQuote
//   §8  TestimonialsGrid — 4 named placeholders, see LB-10
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
      <WilliamPullQuote />
      <SectionDivider />
      <TestimonialsGrid />
      <SectionDivider />
      <ComparisonBlock />
      <SectionDivider />
      <BriefingSection />
      <SectionDivider />
      <FindWhatFits />
      <SectionDivider />
      <HomepageDisclaimer />
    </>
  )
}
