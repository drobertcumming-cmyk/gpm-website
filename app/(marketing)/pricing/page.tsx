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

// /pricing page composition (post-2026-05-01).
// Section order matches v3.5 copy with two CMO overrides applied:
//   1. Render four foundational commitments, not five (Commitment 5 "No
//      phone-gate on pricing" is dropped — the page itself is the proof).
//   2. Section sequence per v3.5 — worked examples remain after "What we
//      don't charge", NOT directly after the hero. Math-forward reorder
//      option is closed.
//
//   §1 SiteHeader     (rendered by app/(marketing)/layout.tsx)
//   §2 PricingHero
//   §3 WhyTheNumberSection
//   §4 CommitmentList (4)
//   §5 HowWeGetPaidSection
//   §6 WhatWeDoNotChargeSection
//   §7 WorkedExamplesGrid (3 panels + CategoryComparison child)
//   §8 PricingFAQ
//   §9 PricingDisclaimerStack
//   §10 SiteFooter    (rendered by app/(marketing)/layout.tsx)
//
// SectionDivider rhythm matches the homepage's uniform pattern: one
// 70%-width centered hairline at every transition between padded
// content sections. Seven dividers total. PricingFAQ→PricingDisclaimerStack
// has no divider — the FAQ band ends and the dark walnut disclaimer band
// begins, which reads as a band-to-band transition that doesn't need a rule.

export const metadata = {
  title: 'Our Pricing — Grace Precious Metals',
  description:
    'Our spread on gold is 11.1%, all-in. No admin fee. No setup fee. Buyback at spot, never below. Published before you call.',
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <SectionDivider />
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
