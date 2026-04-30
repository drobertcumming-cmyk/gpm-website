import Image from 'next/image'
import { CTAButton } from '@/components/cta'

// VerseHero — Block 1 of the homepage. Two-column at desktop: left column
// carries verse + H1 + deck + CTAs (~60% of the wide content width), right
// column holds an editorial image (~40%). Single column at mobile with the
// editorial image hidden.
//
// Verse sized so it fits one line inside the left column, smaller than H1
// so the H1 carries the strongest visual weight in the hero. This is a
// deliberate deviation from brief Section 9.1 (verse at 72px / H1 at 56px)
// per CMO direction.
//
// Italic emphasis on "His" is config-flag controllable per Section 9.1.
// Default: italic on. Strip only on William's call (Section 38).

interface VerseHeroProps {
  emphasizePronoun?: boolean
}

export function VerseHero({ emphasizePronoun = true }: VerseHeroProps) {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-stretch">
          {/* Left column — verse + H1 + deck + CTAs */}
          <div>
            {/* Verse band — Section 9 */}
            <div>
              <div
                aria-hidden="true"
                className="bg-gold-deep w-6 h-[0.5px]"
              />
              <p className="text-eyebrow text-gold-deep mt-4">Proverbs 11:1</p>
              <p
                className="font-serif text-ink-display mt-6"
                style={{
                  fontSize: 44,
                  lineHeight: 1.1,
                  letterSpacing: '-0.015em',
                  fontWeight: 400,
                }}
              >
                A just weight is{' '}
                {emphasizePronoun ? (
                  <em className="font-medium">His</em>
                ) : (
                  <>His</>
                )}{' '}
                delight.
              </p>
            </div>

            {/* H1 + deck */}
            <div className="mt-8">
              <h1 className="text-display-lg text-ink-display">
                No Hidden Costs. Low Fees.
              </h1>
              <div className="mt-6 max-w-prose space-y-4">
                <p className="text-body-lg text-ink-body">
                  A typical Gold IRA costs about a third more. Grace&apos;s
                  spread is{' '}
                  <span className="inline-pricing tabular-nums">11.1%</span>,
                  all-in &mdash; no admin fee, no setup fee, buyback at spot,
                  never below.
                </p>
                <p className="text-body-lg text-ink-body">
                  Most of the industry will not show you a number until you
                  are on a call with a commissioned salesperson. We think
                  that is the wrong order. If you want to know what you will
                  pay before you decide to pay it, you are in the right
                  place.
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

          {/* Right column — editorial image fills column height; top edge
              offset down 16px to align with the "PROVERBS 11:1" eyebrow
              (which sits below the structural rule), bottom edge to CTA
              row bottom via grid stretch. No gap between columns. */}
          <div className="hidden lg:block relative">
            <div
              className="absolute overflow-hidden"
              style={{ top: 16, left: 0, right: 0, bottom: 0 }}
            >
              <Image
                src="/images/homepage/hero-gold-coins.jpg"
                alt="Close-up of gold bullion coins on a neutral surface"
                fill
                className="object-cover"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
