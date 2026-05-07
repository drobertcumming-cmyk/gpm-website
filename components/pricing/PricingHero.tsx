import Image from 'next/image'
import { CTAButton } from '@/components/cta'
import { withBase } from '@/lib/basepath'

// /pricing §1 hero — full-bleed photograph with cream gradient overlay
// covering only the left text area. The photograph fills the entire band
// edge-to-edge; the gradient is solid cream at the very left, fading to
// transparent by ~55% width so the photo reads cleanly across most of
// the hero.
//
// Reference: example reference image 2026-05-01.
//
// Layout:
//   - Section position: relative; overflow hidden
//   - Photograph absolutely positioned (fill), object-fit cover, object-
//     position center, full-bleed across the section
//   - Cream gradient overlay absolutely positioned over the photo,
//     covering only the left ~55% with a soft fade
//   - Content layer (z-index 2) sits inside a 1200px container, content
//     pinned to the left at maxWidth 480px
//
// Copy follows the v2 brief Hero block (subline / body restored to brief
// language; compliance footnote removed per Delta #7 since DisclaimerStack
// at the foot of page carries the same disclosure).

export function PricingHero() {
  return (
    <section
      aria-labelledby="pricing-h1"
      style={{
        position: 'relative',
        background: 'var(--gpm-canvas)',
        overflow: 'hidden',
        minHeight: 600,
      }}
    >
      {/* Full-bleed photographic backdrop */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src={withBase('/images/pricing/hero-couple.webp')}
          alt=""
          fill
          priority
          loading="eager"
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>

      {/* Cream gradient overlay — solid cream at 0%, fading to transparent
          by ~55% so the photo is visible across the right two-thirds of
          the band while the text area on the left sits on a legible
          cream surface. */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(to right, var(--gpm-canvas) 0%, rgba(242, 237, 224, 0.92) 18%, rgba(242, 237, 224, 0.55) 32%, rgba(242, 237, 224, 0.18) 45%, transparent 58%)',
        }}
      />

      {/* Content layer — overlaid on the gradient on the left */}
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
          className="py-12 md:py-20"
          style={{ maxWidth: 480 }}
        >
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
    </section>
  )
}
