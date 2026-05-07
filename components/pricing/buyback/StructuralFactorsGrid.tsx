// /pricing/buyback — Structural Factors Grid (3 columns at lg).
// Each card: numeric eyebrow (01/02/03) + serif headline + serif body.

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
        Most Gold IRA salespeople are paid on commission, typically 3&ndash;8% of the
        transaction value. This creates a direct financial incentive to sell
        higher-markup products &mdash; numismatic coins, &ldquo;premium&rdquo; coins,
        proof sets &mdash; regardless of whether those products serve the
        customer&rsquo;s interest. The salesperson&rsquo;s income is a function of the
        markup, not the outcome.
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
        independently.
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
      style={{ maxWidth: 880, marginTop: 48 }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-3"
        style={{ gap: 48 }}
      >
        {FACTORS.map((f) => (
          <div key={f.num} className="flex flex-col">
            <span
              style={{
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
              style={{
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
          </div>
        ))}
      </div>
    </div>
  )
}
