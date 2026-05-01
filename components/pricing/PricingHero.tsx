import { CTAButton } from '@/components/cta'

// /pricing §1 hero — Option A is default (PricingBlock-led on cream).
// Option B (two-zone with image right) is switchable via the `variant`
// prop so the CMO can toggle without code change once Manus selects the
// hero specimen image.
//
// Page H1 is the sentence "Our spread on gold is 11.1%, all-in." per
// v3.5. The oversized 11.1% PricingBlock figure sits above the H1 as an
// aria-hidden visual anchor with the same numeric value — screen readers
// get the H1 sentence; sighted readers get the figure as the dominant
// visual.
//
// Reference: GPM_Pricing_ClaudeCode_Brief_v1; v3.5 Section 1 Hero block.

interface PricingHeroProps {
  variant?: 'A' | 'B'
}

export function PricingHero({ variant = 'A' }: PricingHeroProps) {
  return (
    <section
      aria-labelledby="pricing-h1"
      className="mx-auto"
      style={{
        maxWidth: 1200,
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 96,
        paddingBottom: 96,
        background: 'var(--gpm-canvas)',
      }}
    >
      {variant === 'B' ? (
        <div
          className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]"
          style={{ gap: 64, alignItems: 'center' }}
        >
          <HeroCopyZone />
          <HeroSpecimenZone />
        </div>
      ) : (
        <HeroCopyZone />
      )}
    </section>
  )
}

function HeroCopyZone() {
  return (
    <div>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.12em',
          color: 'var(--gpm-gold-secondary)',
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
          fontSize: 'clamp(72px, 9vw, 120px)',
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
          color: 'var(--gpm-gold-deep)',
          fontFeatureSettings: '"tnum"',
          marginBottom: 24,
        }}
      >
        11.1%
      </div>

      <h1
        id="pricing-h1"
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'clamp(28px, 3vw, 36px)',
          lineHeight: 1.2,
          letterSpacing: '-0.005em',
          color: 'var(--gpm-ink-display)',
          margin: 0,
          marginBottom: 18,
          maxWidth: 720,
        }}
      >
        Our spread on gold is{' '}
        <span style={{ color: 'var(--gpm-gold-deep)', fontFeatureSettings: '"tnum"' }}>
          11.1%
        </span>
        , all-in.
      </h1>

      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontWeight: 500,
          fontSize: 18,
          lineHeight: 1.4,
          color: 'var(--gpm-walnut-deep)',
          margin: 0,
          marginBottom: 24,
          maxWidth: 540,
        }}
      >
        No admin fee. No setup fee. When you sell back to us, we buy at spot. Never below.
      </p>

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontSize: 'clamp(16px, 1.4vw, 17px)',
          lineHeight: 1.65,
          color: 'var(--gpm-ink-body)',
          margin: 0,
          marginBottom: 32,
          maxWidth: 540,
        }}
      >
        This is the whole price. Nothing is added to it on a phone call, and nothing is
        negotiated away from it. The spread that applies to the first customer who walked
        through our door applies to the thousandth. You can read it here before you decide
        whether to speak to us.
      </p>

      <div className="flex flex-wrap items-center" style={{ gap: 16 }}>
        <CTAButton href="/advisor" tier={1}>
          Talk to a salaried advisor
        </CTAButton>
        <CTAButton href="/briefing" tier={3}>
          Get the Briefing
        </CTAButton>
      </div>
    </div>
  )
}

function HeroSpecimenZone() {
  // Option B placeholder — single specimen image. Wire a real image once
  // Manus delivers public/images/pricing/specimen-eagle.webp. The
  // aria-hidden empty container preserves the 60/40 layout in dev.
  return (
    <div
      aria-hidden="true"
      style={{
        background: 'var(--gpm-canvas-deep)',
        border: '0.5px solid var(--gpm-border-light)',
        borderRadius: 6,
        aspectRatio: '4 / 5',
        width: '100%',
      }}
    />
  )
}
