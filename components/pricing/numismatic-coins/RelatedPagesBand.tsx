import Link from 'next/link'

// /pricing/numismatic-coins — Related Pages band on canvas-deep tinted band.
// Two cards: /pricing/buyback + /pricing.

interface Card {
  tag: string
  headline: string
  body: string
  href: string
}

const CARDS: Card[] = [
  {
    tag: 'PRICING / BUYBACK AT SPOT',
    headline:
      'How buyback works — and why the exit number matters more than the entry number.',
    body: 'The documented industry pattern of marking buybacks below spot, and Grace’s structural commitment to buy back at cost with no markdown.',
    href: '/pricing/buyback',
  },
  {
    tag: 'PRICING',
    headline: 'Our spread on gold is 11.1%, all-in.',
    body: 'Entry-side pricing: what you pay, what it includes, and why the number is on the page rather than behind a phone call.',
    href: '/pricing',
  },
]

export function RelatedPagesBand() {
  return (
    <section
      aria-label="Related pages"
      style={{
        background: 'var(--gpm-canvas-deep)',
      }}
    >
      <div
        className="mx-auto py-16 md:py-24"
        style={{
          maxWidth: 1200,
          paddingLeft: 32,
          paddingRight: 32,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 32 }}>
          {CARDS.map((card) => (
            <article
              key={card.href}
              style={{
                background: 'var(--gpm-linen-warm)',
                border: '1px solid var(--gpm-border-light)',
                borderRadius: 4,
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--gpm-gold-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  marginBottom: 12,
                }}
              >
                {card.tag}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 18,
                  fontWeight: 500,
                  color: 'var(--gpm-ink-display)',
                  lineHeight: 1.35,
                  margin: 0,
                  marginBottom: 12,
                }}
              >
                {card.headline}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 15,
                  fontWeight: 400,
                  color: 'var(--gpm-ink-body)',
                  lineHeight: 1.55,
                  margin: 0,
                  marginBottom: 16,
                  flex: 1,
                }}
              >
                {card.body}
              </p>
              <Link
                href={card.href}
                className="gpm-link-tier4"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Read the page <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
