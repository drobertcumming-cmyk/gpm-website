// /pricing/numismatic-coins — Structural Factors Grid (3 columns at lg).
// Each card: numeric eyebrow (01/02/03) + serif headline + serif body.
// Content explains why the documented pattern persists in the channel.

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
        When advisors are compensated on commission rather than salary, the incentive
        is to sell the product with the highest margin &mdash; not the product most
        appropriate for the customer. Numismatic and &ldquo;premium&rdquo; coins carry
        the highest margins in the Gold IRA channel. The compensation structure and
        the product recommendation are not independent variables.
      </>
    ),
  },
  {
    num: '02',
    headline: 'Information asymmetry',
    body: (
      <>
        The customer typically cannot independently verify the resale value of a
        numismatic or &ldquo;premium&rdquo; coin at the point of purchase. Standard
        bullion has a transparent, globally quoted spot price. Numismatic value is
        opaque, subjective, and verifiable only through specialist channels the
        average retirement-account holder does not access.
      </>
    ),
  },
  {
    num: '03',
    headline: 'Buyback structure',
    body: (
      <>
        When the same dealer who sold the product at a high markup is also the
        primary buyback channel, the customer has limited price discovery at the
        point of exit. The dealer sets both the entry price and the exit price
        &mdash; and the customer discovers the true round-trip cost only when
        attempting to liquidate, often years later.
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
