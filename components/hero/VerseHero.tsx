import { CTAButton } from '@/components/cta'

// VerseHero — Block 1 of the homepage. Renders the Proverbs 11:1 verse band
// at the top of the page, followed by the H1, deck prose, and two CTAs.
//
// Reference: DESIGN_BRIEF.md Section 9 (verse treatment) + Section 18.2.
//
// The italic emphasis on "His" is config-flag controllable per Section 9.1.
// Default: italic on. Strip only on William's call (Section 38 open decision).

interface VerseHeroProps {
  emphasizePronoun?: boolean
}

export function VerseHero({ emphasizePronoun = true }: VerseHeroProps) {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-24 lg:pb-16">
        {/* Verse band — Section 9 */}
        <div className="max-w-[720px]">
          {/* Structural rule: 24px wide, hairline, deep gold */}
          <div
            aria-hidden="true"
            className="bg-gold-deep w-6 h-[0.5px]"
          />
          <p className="text-eyebrow text-gold-deep mt-4">Proverbs 11:1</p>
          <p className="text-display-xl text-ink-display mt-6">
            A just weight is{' '}
            {emphasizePronoun ? (
              <em className="font-medium">His</em>
            ) : (
              <>His</>
            )}{' '}
            delight.
          </p>
        </div>

        {/* H1 + deck — 32px below verse */}
        <div className="mt-8 max-w-[760px]">
          <h1 className="text-display-lg text-ink-display">
            No Hidden Costs. Low Fees.
          </h1>
          <div className="mt-6 max-w-prose space-y-4">
            <p className="text-body-lg text-ink-body">
              A typical Gold IRA costs about a third more. Grace&apos;s spread
              is{' '}
              <span className="inline-pricing tabular-nums">11.1%</span>,
              all-in &mdash; no admin fee, no setup fee, buyback at spot, never
              below.
            </p>
            <p className="text-body-lg text-ink-body">
              Most of the industry will not show you a number until you are on
              a call with a commissioned salesperson. We think that is the
              wrong order. If you want to know what you will pay before you
              decide to pay it, you are in the right place.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="/pricing" variant="primary">
              See what it actually costs
            </CTAButton>
            <CTAButton href="/advisor" variant="secondary">
              Talk to a salaried advisor
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
