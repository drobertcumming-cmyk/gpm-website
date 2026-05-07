import {
  PricingHero,
  WhyTheNumberSection,
  CommitmentList,
  HowWeGetPaidSection,
  WhatWeDoNotChargeSection,
  WorkedExamplesGrid,
  PricingFAQ,
  PricingDisclaimerStack,
} from '@/components/pricing'
import { SectionDivider } from '@/components/content'

// /pricing page composition (v3.5.1 — post-2026-05-01).
// Section order matches v3.5.1 copy with seven CMO-confirmed deltas
// from the v3.5 baseline (see GPM_Pricing_ClaudeCode_Brief_v2):
//   1. Four foundational commitments, not five.
//   2. Hero is two-zone with documentary couple photograph.
//   3. Worked-examples math model is Grace-only with bullion-delivered line.
//   4. Section H2s tightened in two places.
//   5. FAQ section on `surface` tinted band (not canvas-deep).
//   6. CategoryComparison adds Grace's like-for-like 12–13% figure.
//   7. Hero compliance footnote removed.
//
//   §1 SiteHeader     (rendered by app/(marketing)/layout.tsx)
//   §2 PricingHero          ← no SectionDivider above (abuts header)
//   §3 WhyTheNumberSection  ← no SectionDivider above (hero is full-bleed band)
//   §4 CommitmentList (4)
//   §5 HowWeGetPaidSection
//   §6 WhatWeDoNotChargeSection (with TwoCostsCallout panel inside)
//   §7 WorkedExamplesGrid (3 panels + CategoryComparison child)
//   §8 PricingFAQ           ← `surface` band (Delta #5)
//   §9 PricingDisclaimerStack ← no SectionDivider (band-to-band transition)
//   §10 SiteFooter   (rendered by app/(marketing)/layout.tsx)
//
// Six SectionDivider instances. Two intentional outliers: hero abuts
// header (no top divider); FAQ→Disclaimer is band-to-band (no divider).

export const metadata = {
  title: 'Our Pricing — Grace Precious Metals',
  description:
    'Our spread on gold is 11.1%, all-in. No admin fee. No setup fee. Buyback at spot, never below. Published before you call.',
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <WhyTheNumberSection />
      <SectionDivider />
      <CommitmentList />
      <SectionDivider />
      <HowWeGetPaidSection />
      <SectionDivider />
      <WhatWeDoNotChargeSection />
      <SectionDivider />
      <WorkedExamplesGrid />
      <SectionDivider />
      <PricingFAQ />
      <PricingDisclaimerStack />
    </>
  )
}
