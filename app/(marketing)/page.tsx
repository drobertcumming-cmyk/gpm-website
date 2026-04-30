import { Hero } from '@/components/hero'
import {
  TrustStrip,
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

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AmericasFirstBlock />
      <FoundationalCommitments />
      <BullionGrid />
      <WilliamPullQuote />
      <TestimonialsGrid />
      <ComparisonBlock />
      <BriefingSection />
      <FindWhatFits />
      <HomepageDisclaimer />
    </>
  )
}
