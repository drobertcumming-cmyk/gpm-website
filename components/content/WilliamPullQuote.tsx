import Image from 'next/image'
import Link from 'next/link'

// Production-brief homepage §7. Hairline rules above and below at 60% width.
// Circular 120px portrait left + attribution beneath; quote right of portrait
// with curly quote glyphs in gold-secondary; Tier 4 link below.
// Mobile stacks: portrait → attribution → quote → link.
//
// Reference: production brief §7; homepage_copy_v3_6.md §7 (with in-repo
// correction (a) — phrasing kept at "the Gold IRA industry").

export function WilliamPullQuote() {
  return (
    <section
      aria-labelledby="william-quote-heading"
      className="mx-auto"
      style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32, paddingTop: 96, paddingBottom: 96 }}
    >
      <h2 id="william-quote-heading" className="sr-only">A word from William Armour</h2>

      {/* Hairline rule above — 60% width centered */}
      <div
        aria-hidden="true"
        style={{
          width: '60%',
          height: 0.5,
          margin: '0 auto 60px',
          background: 'rgba(184, 150, 46, 0.50)',
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr]" style={{ gap: 48, alignItems: 'start' }}>
        <div className="flex flex-col items-center" style={{ minWidth: 0 }}>
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '1px solid rgba(184, 150, 46, 0.35)',
              background: 'var(--gpm-canvas-deep)',
              position: 'relative',
            }}
          >
            <Image
              src="/images/homepage/william-portrait.png"
              alt="William Armour, Co-Founder & CEO"
              fill
              sizes="120px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 16,
              fontWeight: 600,
              color: 'var(--gpm-walnut-deep)',
              marginTop: 12,
              textAlign: 'center',
            }}
          >
            William Armour
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.18em',
              color: 'var(--gpm-gold-secondary)',
              marginTop: 4,
              textAlign: 'center',
            }}
          >
            CO-FOUNDER &amp; CEO
          </p>
        </div>

        <div style={{ maxWidth: 580 }}>
          <blockquote
            style={{
              margin: 0,
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(20px, 2vw, 24px)',
              fontWeight: 400,
              lineHeight: 1.45,
              color: 'var(--gpm-walnut-deep)',
            }}
          >
            <span aria-hidden="true" style={{ color: 'var(--gpm-gold-secondary)' }}>&ldquo;</span>
            I left the Gold IRA industry because I couldn&rsquo;t reconcile what I was selling with what I preached. This is the company I built to change that.
            <span aria-hidden="true" style={{ color: 'var(--gpm-gold-secondary)' }}>&rdquo;</span>
          </blockquote>

          <p style={{ marginTop: 18 }}>
            <Link
              href="/who-we-are/williams-story"
              className="gpm-link-tier4"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Read William&rsquo;s story <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </div>

      {/* Hairline rule below — 60% width centered */}
      <div
        aria-hidden="true"
        style={{
          width: '60%',
          height: 0.5,
          margin: '60px auto 0',
          background: 'rgba(184, 150, 46, 0.50)',
        }}
      />
    </section>
  )
}
