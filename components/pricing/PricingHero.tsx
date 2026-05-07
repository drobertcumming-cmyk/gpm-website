import { CTAButton } from '@/components/cta'
import { withBase } from '@/lib/basepath'

// /pricing §4 Hero — Option B (lifestyle couple) per the
// "Grace Precious Metals — Pricing Page Design Specification.md".
//
// Layout per spec §4:
//   - Full-width section, min-height 640px
//   - Hero Inner Padding: 96px 32px 80px (NOT inside the 1200px centered
//     container; content is left-anchored at 32px from the section edge
//     so the cream gradient + content + photo composite reads correctly
//     at any viewport width)
//   - Inner grid 58fr 42fr — text in the left column; right column empty
//
// Background per spec:
//   - 9-stop gradient over couple photograph at 68% center / cover
//   - Solid linen-base 0–40% fading to fully transparent at 70%
//   - Warm vignette top + bottom

export function PricingHero() {
  return (
    <section
      aria-labelledby="pricing-h1"
      className="pricing-hero"
      style={{
        position: 'relative',
        background: 'var(--gpm-canvas)',
        overflow: 'hidden',
        minHeight: 640,
      }}
    >
      {/* Gradient + couple photograph composite background.
          Gradient stops use calc() so cream solid extends just past the
          right edge of the centered 1200 container's left grid column
          (viewport center + ~90px). This keeps the cream area locked to
          the content area at any viewport width — at wider viewports the
          photo gets MORE visible on the right rather than being pushed
          off-screen by a viewport-percentage gradient. */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundColor: 'var(--gpm-canvas)',
          backgroundImage: `linear-gradient(to right,
            #EDE5D2 0%,
            #EDE5D2 calc(50% + 90px),
            rgba(237, 229, 210, 0.85) calc(50% + 160px),
            rgba(237, 229, 210, 0.55) calc(50% + 230px),
            rgba(237, 229, 210, 0.20) calc(50% + 310px),
            rgba(237, 229, 210, 0.00) calc(50% + 400px)
          ), url('${withBase('/images/pricing/hero-couple.webp')}')`,
          backgroundPosition: 'left center, 68% center',
          backgroundSize: 'auto, cover',
          backgroundRepeat: 'no-repeat, no-repeat',
        }}
      />

      {/* Warm vignette overlay — softens top + bottom edges */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: `linear-gradient(to bottom,
            rgba(237, 229, 210, 0.18) 0%,
            transparent 12%,
            transparent 88%,
            rgba(237, 229, 210, 0.22) 100%
          )`,
          pointerEvents: 'none',
        }}
      />

      {/* Inner content — centered 1200px container per design system. The
          58fr/42fr grid sits inside it; text in the left column, right
          column empty/decorative. */}
      <div
        className="mx-auto"
        style={{
          maxWidth: 1200,
          paddingLeft: 32,
          paddingRight: 32,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          className="grid grid-cols-1"
          style={{
            gridTemplateColumns: 'minmax(0, 58fr) minmax(0, 42fr)',
            paddingTop: 96,
            paddingBottom: 80,
          }}
        >
          <div style={{ maxWidth: 560 }}>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: 'var(--gpm-gold-secondary)',
                margin: 0,
                marginBottom: 24,
              }}
            >
              OUR PRICING
            </p>

            {/* PricingBlock — oversized 11.1% as visual anchor (sighted only) */}
            <div
              aria-hidden="true"
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                fontSize: 'clamp(72px, 8vw, 112px)',
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                color: 'var(--gpm-gold-deep)',
                fontVariantNumeric: 'tabular-nums',
                marginBottom: 18,
              }}
            >
              11.1%
            </div>

            <h1
              id="pricing-h1"
              className="sr-only"
            >
              Our spread on gold is 11.1%, all-in.
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 18,
                lineHeight: 1.4,
                color: 'var(--gpm-walnut-deep)',
                margin: 0,
                marginBottom: 24,
                maxWidth: 540,
              }}
            >
              All-in. No admin fee, no setup fee. Buyback at spot.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: 'clamp(16px, 1.4vw, 17px)',
                lineHeight: 1.6,
                color: 'var(--gpm-ink-body)',
                margin: 0,
                marginBottom: 28,
                maxWidth: 540,
              }}
            >
              Grace charges a single published spread of 11.1% on IRS-eligible bullion.
              That is the entire cost of entry. There is no admin fee, no setup fee, no
              annual account fee, and no exit fee. When you sell, we buy back at the live
              spot price &mdash; never below.
            </p>

            <div className="flex flex-wrap items-center" style={{ gap: 12, marginBottom: 28 }}>
              <CTAButton href="/advisor" tier={1}>
                Talk to a salaried advisor
              </CTAButton>
              <CTAButton href="/briefing" tier={3}>
                Get the Briefing
              </CTAButton>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 11,
                lineHeight: 1.55,
                color: 'rgba(31, 27, 22, 0.65)',
                margin: 0,
                maxWidth: 540,
              }}
            >
              Spread applies to standard IRS-eligible bullion (Gold Eagles, Gold Maple
              Leafs, qualifying bars). Custodian and depository fees are third-party
              charges billed separately; see below for sample figures. Published spread
              subject to periodic review.
            </p>
          </div>
          <div aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
