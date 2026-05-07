import { CTAButton } from '@/components/cta'
import { withBase } from '@/lib/basepath'

// /pricing §4 Hero — Option B (lifestyle couple) per the
// "Grace Precious Metals — Pricing Page Design Specification.md".
//
// The couple lifestyle photograph is composited via a CSS background
// stack on the section: a 9-stop linear gradient layered above the
// hero-couple-landscape image positioned at 68% center / cover. The
// gradient renders solid linen-base (#EDE5D2) across the left 40% and
// fades through six intermediate alpha stops to fully transparent at
// 70%, so both people in the photograph remain fully visible in the
// right half.
//
// A second ::after vignette (top + bottom) softens the band's vertical
// edges into the surrounding cream rhythm.
//
// All hero copy is verbatim from spec §16 (hero block).

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
      {/* 9-stop gradient + couple photograph composite background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundColor: 'var(--gpm-canvas)',
          backgroundImage: `linear-gradient(to right,
            #EDE5D2 0%,
            #EDE5D2 40%,
            rgba(237, 229, 210, 0.92) 46%,
            rgba(237, 229, 210, 0.70) 52%,
            rgba(237, 229, 210, 0.35) 58%,
            rgba(237, 229, 210, 0.08) 64%,
            rgba(237, 229, 210, 0.00) 70%
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

      {/* Inner grid — 58fr 42fr; text occupies the left column. */}
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
            paddingTop: 96,
            paddingBottom: 80,
            gridTemplateColumns: 'minmax(0, 58fr) minmax(0, 42fr)',
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

            {/* Compliance text per spec */}
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
          {/* Right column intentionally empty — photographic content is the
              background image; no overlaid content needed. */}
          <div aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
