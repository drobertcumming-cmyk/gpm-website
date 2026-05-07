import Image from 'next/image'
import { CTAButton } from '@/components/cta'
import { WideContainer } from '@/components/layout'
import { withBase } from '@/lib/basepath'

// /pricing §1 hero — two-zone composition (v3.5.1, Delta #2).
// Left zone (cream canvas): eyebrow / oversized 11.1% figure /
// sentence H1 / italic subline / body paragraph / dual CTA cluster.
// Right zone: documentary couple photograph (placeholder slot until
// Manus delivers final asset). Cream extends full-bleed across both
// zones; only the right zone overlays the photograph.
//
// Mobile (< md): right zone hides via `hidden md:block`. Left-zone
// content stacks at full width. If Manus mobile shows photo stacked
// below content, removing `hidden md:block` reflows naturally.
//
// Reference: GPM_Pricing_ClaudeCode_Brief_v2; v3.5.1 Hero block.

const HERO_IMAGE_WIDTH = 720
const HERO_IMAGE_HEIGHT = 900

export function PricingHero() {
  return (
    <section
      aria-labelledby="pricing-h1"
      style={{ background: 'var(--gpm-canvas)' }}
    >
      <WideContainer>
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ alignItems: 'center', gap: 0 }}
        >
          <HeroCopyZone />
          <HeroSpecimenZone />
        </div>
      </WideContainer>
    </section>
  )
}

function HeroCopyZone() {
  return (
    <div className="px-6 md:px-9 py-12 md:py-16">
      <div style={{ maxWidth: 460 }}>
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
            marginBottom: 18,
          }}
        >
          11.1%
        </div>

        <h1
          id="pricing-h1"
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 500,
            fontSize: 'clamp(26px, 3vw, 32px)',
            lineHeight: 1.18,
            letterSpacing: '-0.005em',
            color: 'var(--gpm-ink-display)',
            margin: 0,
            marginBottom: 16,
            maxWidth: 420,
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
            fontSize: 17,
            lineHeight: 1.4,
            color: 'var(--gpm-walnut-deep)',
            margin: 0,
            marginBottom: 18,
            maxWidth: 420,
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
            marginBottom: 28,
            maxWidth: 420,
          }}
        >
          This is the whole price. Nothing is added to it on a phone call, and nothing is
          negotiated away from it. The spread that applies to the first customer who walked
          through our door applies to the thousandth. You can read it here before you decide
          whether to speak to us.
        </p>

        <div className="flex flex-wrap items-center" style={{ gap: 12 }}>
          <CTAButton href="/advisor" tier={1}>
            Talk to a salaried advisor
          </CTAButton>
          <CTAButton href="/briefing" tier={3}>
            Get the Briefing
          </CTAButton>
        </div>
      </div>
    </div>
  )
}

function HeroSpecimenZone() {
  // Right zone — documentary couple photograph (placeholder).
  // Final asset swap separate; brief allows placeholder accepted in this PR.
  // Hidden < md so the left-zone content stacks cleanly on mobile.
  // Single <Image> with explicit width and height per brief spec.
  return (
    <div
      className="hidden md:block"
      style={{
        position: 'relative',
        width: '100%',
        background: 'var(--gpm-canvas-deep)',
        overflow: 'hidden',
      }}
    >
      <Image
        src={withBase('/images/pricing/hero-couple.webp')}
        alt="An older couple seated together in a sunlit interior, looking at the camera with relaxed expressions."
        width={HERO_IMAGE_WIDTH}
        height={HERO_IMAGE_HEIGHT}
        priority
        loading="eager"
        sizes="(min-width: 1024px) 600px, 100vw"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
      />
    </div>
  )
}
