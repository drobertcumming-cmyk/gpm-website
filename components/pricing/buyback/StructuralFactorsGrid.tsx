// /pricing/buyback — Structural Factors Grid (3 columns at md+).
// 12-col / 1200 max container; three pillar cards in a md:grid-cols-3
// row. Each card uses the numeric eyebrow as a large low-opacity
// background flair behind the content for visual flair (per the
// 2026-05-08 layout brief), with a small foreground numeric eyebrow
// retained for legibility and screen-reader order.
//
// Layout shift 2026-05-08: from 880 max → 1200 max with bordered cards
// and numeric background flair, using the full content rail rather
// than a centered narrow column.

interface Factor {
  num: string
  headline: string
  body: React.ReactNode
}

const FACTORS: Factor[] = [
  {
    num: '01',
    headline: 'Commission compensation',
    body: (
      <>
        Most Gold IRA salespeople are paid on commission, typically 10&ndash;25% of the
        total revenue generated. This creates a direct financial incentive to sell
        higher-markup (higher revenue) products &mdash; numismatic coins,
        &ldquo;premium&rdquo; coins, proof sets &mdash; regardless of whether those
        products serve the customer&rsquo;s interest. The salesperson&rsquo;s income is
        a function of the markup.
      </>
    ),
  },
  {
    num: '02',
    headline: 'Information asymmetry',
    body: (
      <>
        Gold pricing is opaque to most retail buyers. The difference between a $2,400
        Gold Eagle and a $4,200 &ldquo;certified MS-70 Gold Eagle&rdquo; is not obvious
        to someone who has never purchased bullion before. Dealers exploit this gap by
        steering customers toward products whose markups are difficult to verify
        independently. In some cases they even create the market themselves owning the
        exclusive rights to a particular coin or product so that no consumer can shop
        their pricing.
      </>
    ),
  },
  {
    num: '03',
    headline: 'Buyback structure',
    body: (
      <>
        Because the customer cannot easily sell IRA-held metal on the open market, the
        dealer controls the exit. If the dealer offers buyback at 10% below spot, the
        customer has limited recourse &mdash; the alternative is to pay shipping,
        insurance, and transfer fees to move the metal to another dealer, which may
        cost more than accepting the markdown.
      </>
    ),
  },
]

export function StructuralFactorsGrid() {
  return (
    <div
      className="mx-auto"
      style={{ maxWidth: 1200, marginTop: 48 }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ gap: 24 }}
      >
        {FACTORS.map((f) => (
          <article
            key={f.num}
            aria-labelledby={`factor-${f.num}-title`}
            style={{
              position: 'relative',
              overflow: 'hidden',
              background: 'var(--gpm-linen-warm)',
              border: '1px solid var(--gpm-border-light)',
              borderRadius: 4,
              padding: '40px 32px 36px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Decorative oversized numeral — low-opacity background flair.
                aria-hidden so SR users don't hear "01 01" — the small
                foreground eyebrow below carries the semantics. */}
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: -18,
                right: 4,
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                fontSize: 'clamp(110px, 14vw, 160px)',
                lineHeight: 1.0,
                color: 'rgba(184, 150, 46, 0.10)',
                fontFeatureSettings: '"tnum"',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              {f.num}
            </span>

            <span
              style={{
                position: 'relative',
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--gpm-gold-secondary)',
                letterSpacing: '0.08em',
                marginBottom: 12,
              }}
            >
              {f.num}
            </span>
            <h3
              id={`factor-${f.num}-title`}
              style={{
                position: 'relative',
                fontFamily: 'var(--font-serif)',
                fontSize: 20,
                fontWeight: 500,
                color: 'var(--gpm-ink-display)',
                lineHeight: 1.3,
                margin: 0,
                marginBottom: 14,
              }}
            >
              {f.headline}
            </h3>
            <p
              style={{
                position: 'relative',
                fontFamily: 'var(--font-serif)',
                fontSize: 16,
                fontWeight: 400,
                color: 'var(--gpm-ink-body)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {f.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}
