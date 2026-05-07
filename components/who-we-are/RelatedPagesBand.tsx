import Link from 'next/link'

// /who-we-are — Related Pages band on canvas-deep tinted background.
// Two cards: William's story + How We Operate.

interface Card {
  tag: string
  headline: string
  body?: string
  href: string
}

const CARDS: Card[] = [
  {
    tag: 'WHO WE ARE / WILLIAM’S STORY',
    headline:
      'A decade inside the industry, the conversation that changed his mind, and the company he built afterwards.',
    href: '/who-we-are/williams-story',
  },
  {
    tag: 'HOW WE OPERATE',
    headline: 'The business, end to end.',
    body: 'Licensing, custody and depository partners, advisor compensation, the pricing-governance workflow, and how disagreements get resolved.',
    href: '/how-we-operate',
  },
]

export function RelatedPagesBand() {
  return (
    <section
      aria-label="Related pages"
      style={{ background: 'var(--gpm-canvas-deep)' }}
    >
      <div
        className="mx-auto py-16 md:py-24"
        style={{ maxWidth: 880, paddingLeft: 32, paddingRight: 32 }}
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
              {card.body && (
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
              )}
              <Link
                href={card.href}
                className="gpm-link-tier4"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  fontWeight: 500,
                  marginTop: card.body ? 0 : 'auto',
                }}
              >
                {card.tag.includes('WILLIAM') ? 'Read the testimony' : 'Read the page'}{' '}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
