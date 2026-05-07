import Image from 'next/image'
import { CTAButton } from '@/components/cta'
import { withBase } from '@/lib/basepath'

// /pricing §1 hero — full-bleed photograph with cream gradient overlay
// (rebuilt 2026-05-01 to match the example reference image, which
// supersedes the v2 brief's two-zone language).
//
// Layout:
//   - Full-bleed photograph extends edge-to-edge across the band
//   - Cream-to-transparent linear gradient overlay sits on top of the
//     photo on the left half, ensuring legible contrast for the copy
//   - Content (eyebrow / 11.1% figure / H1 / subline / body / CTAs /
//     footnote) is overlaid in the left third inside a WideContainer
//
// Copy matches the example image exactly — subline / body / compliance
// footnote differ from the v2 brief Hero block. The compliance footnote
// (removed in brief Delta #7) is restored per the example.
//
// Reference: example reference image 2026-05-01.

const HERO_IMAGE_WIDTH = 1600
const HERO_IMAGE_HEIGHT = 900

export function PricingHero() {
  return (
    <section
      aria-labelledby="pricing-h1"
      style={{
        position: 'relative',
        background: 'var(--gpm-canvas)',
        overflow: 'hidden',
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
          width={HERO_IMAGE_WIDTH}
          height={HERO_IMAGE_HEIGHT}
          priority
          loading="eager"
          sizes="100vw"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center right',
            display: 'block',
          }}
        />
      </div>

      {/* Cream gradient overlay — solid on the left, fading to transparent
          toward the right so the photo reads cleanly on the right side
          while the copy on the left sits on a legible cream surface. */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(to right, var(--gpm-canvas) 0%, var(--gpm-canvas) 32%, rgba(242, 237, 224, 0.92) 42%, rgba(242, 237, 224, 0.55) 54%, rgba(242, 237, 224, 0.18) 64%, transparent 74%)',
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
          className="px-0 md:px-0 py-12 md:py-20"
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
            className="sr-only"
          >
            Our spread on gold is 11.1%, all-in.
          </h1>

          {/* Visible italic subline (matches example image) */}
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: 'clamp(18px, 1.6vw, 20px)',
              lineHeight: 1.4,
              color: 'var(--gpm-walnut-deep)',
              margin: 0,
              marginBottom: 22,
              maxWidth: 460,
            }}
          >
            All-in. No admin fee, no setup fee. Buyback at spot.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.3vw, 16px)',
              lineHeight: 1.65,
              color: 'var(--gpm-ink-body)',
              margin: 0,
              marginBottom: 28,
              maxWidth: 460,
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

          {/* Compliance footnote (restored per example image) */}
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 11,
              lineHeight: 1.55,
              color: 'rgba(45, 38, 32, 0.65)',
              margin: 0,
              maxWidth: 460,
            }}
          >
            Spread applies to standard IRS-eligible bullion (Gold Eagles, Gold Maple
            Leafs, qualifying bars). Custodian and depository fees are third-party
            charges billed separately; see below for sample figures. Published spread
            subject to periodic review.
          </p>
        </div>
      </div>
    </section>
  )
}
