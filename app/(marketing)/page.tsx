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
//   §4  AmericasFirstBlock                ← SectionDivider above
//   §5  FoundationalCommitments — four cards   ← SectionDivider above
//   §6  BullionGrid                       ← SectionDivider above
//   §7  WilliamPullQuote                   (own framing rules)
//   §8  TestimonialsGrid — 4 named placeholders, see LB-10
//   §9  ComparisonBlock                    ← SectionDivider above
//   §10 BriefingSection — cover artwork + WHAT'S INSIDE list + BriefingForm
//                                         (own framing rules)
//   §11 FindWhatFits   — three path cards (Path 3 → Inheriting)
//   §12 HomepageDisclaimer
//   §13 SiteFooter     (rendered by app/(marketing)/layout.tsx)
//
// SectionDivider placement (2026-04-30 second pass): four 60%-width
// centered hairline rules between content sections that don't already
// carry their own framing rules, so the page reads with consistent
// architectural rhythm. PullQuote (§7) and BriefingSection (§10)
// retain their own internal top + bottom rules.

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
      <WilliamPullQuote />
      <TestimonialsGrid />
      <SectionDivider />
      <ComparisonBlock />
      <BriefingSection />
      <FindWhatFits />
      <HomepageDisclaimer />
    </>
  )
}
