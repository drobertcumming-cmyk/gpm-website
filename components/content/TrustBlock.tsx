import { LinkArrow } from '@/components/cta'

// TrustBlock — Block 5 of the homepage. Three short lines on canvas with a
// hairline gold rule above and below. No card surface, no badges, no logos.
// Refusal of category-default badge salad (brief Section 3, Refusal 6).
//
// Reference: DESIGN_BRIEF.md Section 18.2 (Trust architecture block).

export function TrustBlock() {
  return (
    <section aria-label="Compliance and licensing summary">
      <div aria-hidden="true" className="bg-gold w-full h-[0.5px]" />
      <div className="py-8 lg:py-12">
        <p className="text-body text-ink-body max-w-prose">
          Grace Precious Metals uses IRS-approved custodians and IRS-approved
          depositories for Gold IRA holdings. Our dealer operations carry
          state licensing where required. The regulatory posture, licensing
          detail, and partner disclosures are on the compliance page.
        </p>
        <div className="mt-4">
          <LinkArrow href="/who-we-are/compliance">
            Our compliance and licensing
          </LinkArrow>
        </div>
      </div>
      <div aria-hidden="true" className="bg-gold w-full h-[0.5px]" />
    </section>
  )
}
