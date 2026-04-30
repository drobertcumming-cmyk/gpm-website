import Image from 'next/image'
import { CTAButton } from '@/components/cta'
import { HeroBriefingForm } from './HeroBriefingForm'

// Production-brief homepage Hero (post-2026-04-29 Option A) with the
// 2026-04-30 CMO hero composition correction applied:
//
//   "Hero composition follows Manus's final render — stacked gold coins on
//    the dark studio backdrop. The cream linen surface and single-coin
//    specification in the production brief §2 is superseded."
//
// Background is the dark studio photograph (hero-background-gold-coins.jpg
// from the Manus image bundle). The section background falls through to
// walnut-deep so any uncovered region (e.g. before the image loads) renders
// dark, not cream. The dark gradient overlay continues to carry the
// headline copy on the left; the form panel continues to sit on the right.
//
// Reference: production brief §2 with hero composition correction;
// homepage_copy_v3_6.md §2.

export function Hero() {
  return (
    <section
      aria-label="Grace Precious Metals — pricing and briefing"
      style={{
        position: 'relative',
        background: 'var(--gpm-walnut-deep)',
        overflow: 'hidden',
      }}
    >
      {/* Photographic backdrop — full-bleed gold coin photograph */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/images/homepage/hero-background-gold-coins.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Dark gradient overlay — left zone */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(to right, rgba(10, 7, 3, 0.94) 0%, rgba(10, 7, 3, 0.92) 32%, rgba(10, 7, 3, 0.78) 42%, rgba(10, 7, 3, 0.42) 52%, rgba(10, 7, 3, 0.15) 62%, transparent 68%)',
        }}
      />

      {/* Inner container */}
      <div
        className="mx-auto"
        style={{
          maxWidth: 1200,
          paddingLeft: 32,
          paddingRight: 32,
          position: 'relative',
          zIndex: 2,
          minHeight: 520,
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] items-center"
          style={{ gap: 32, paddingTop: 80, paddingBottom: 80 }}
        >
          {/* Left zone — copy + CTA */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.10em',
                color: 'var(--gpm-gold-primary)',
                marginBottom: 24,
              }}
            >
              PROVERBS 11:1 — A JUST WEIGHT IS HIS DELIGHT.
            </p>
            {/*
              Hero H1 sizing follows production brief discrete steps:
                28px mobile (<768), 36px tablet (768-1023), 48px desktop (1024+).
              clamp(28px, 4.6vw, 48px) approximates this with a smooth curve and
              keeps the protected non-breaking-space phrases inside the container
              at every viewport.
            */}
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 600,
                fontSize: 'clamp(28px, 4.6vw, 48px)',
                lineHeight: 1.18,
                letterSpacing: '-0.005em',
                color: '#FFFFFF',
                margin: 0,
              }}
            >
              {/* Non-breaking spaces lock "11.1% spread, all-in." and "Buyback at spot." per v3.6 §2 */}
              A Gold IRA at 11.1%&nbsp;spread,&nbsp;all-in. Buyback&nbsp;at&nbsp;spot.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 18,
                fontWeight: 500,
                color: '#FFFFFF',
                marginTop: 18,
                lineHeight: 1.4,
              }}
            >
              No admin fee. No setup fee.
            </p>
            <div style={{ marginTop: 30 }}>
              <CTAButton href="/pricing" tier={1}>
                See our pricing
              </CTAButton>
            </div>
          </div>

          {/*
            Right zone — single form instance. CSS Grid positions it to the
            right of the copy at lg, and stacks it below the copy at smaller
            breakpoints. One DOM instance keeps form input ids unique.
          */}
          <div className="lg:justify-self-end w-full lg:max-w-[320px]">
            <HeroBriefingForm />
          </div>
        </div>
      </div>
    </section>
  )
}
