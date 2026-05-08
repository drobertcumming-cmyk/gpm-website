// /pricing §7 — Four commitments grid (2×2).
// Container 1200 max with px-32; grid-template-columns repeat(2, 1fr)
// at lg+, single column below. Each commitment block: number with
// extending hairline rule, headline, body. All copy verbatim from
// Pricing Page Design Specification §16.
//
// Layout shift 2026-05-08: widened from 880 ContentContainer to 1200
// to give the four-up grid more horizontal breathing room and reduce
// the centered-narrow-column dead space.
//
// Reference: Grace Precious Metals — Pricing Page Design Specification.

interface Commitment {
  number: string
  headline: string
  body: React.ReactNode
}

const COMMITMENTS: Commitment[] = [
  {
    number: '01',
    headline: 'Published spread, 11.1% all-in',
    body: (
      <>
        Our spread is published on this page, not quoted on the phone. It includes every
        cost of entry. No admin fee, no setup fee, no annual account fee. The number you
        see is the number you pay.
      </>
    ),
  },
  {
    number: '02',
    headline: 'Buyback at spot, never below',
    body: (
      <>
        When you decide to sell, Grace buys back your bullion at the live spot price.
        There is no exit spread, no liquidation fee, and no markdown. Your gold is worth
        what the market says it is worth.
      </>
    ),
  },
  {
    number: '03',
    headline: 'Standard IRS-eligible bullion only',
    body: (
      <>
        We sell only standard-issue, IRS-eligible bullion: American Gold Eagles, Canadian
        Gold Maple Leafs, and LBMA-approved bars. No numismatic coins, no
        &ldquo;exclusive&rdquo; products, no inflated premiums on rare or collectible
        items.
      </>
    ),
  },
  {
    number: '04',
    headline: 'Salaried advisors. No commission.',
    body: (
      <>
        Our advisors are salaried employees. They do not earn commission on your
        purchase. Their job is to answer your questions and help you understand the
        process &mdash; not to close a sale.
      </>
    ),
  },
]

export function CommitmentList() {
  return (
    <section
      aria-labelledby="commitments-heading"
      className="w-full py-16 md:py-24"
      style={{
        paddingLeft: 32,
        paddingRight: 32,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.14em',
            color: 'var(--gpm-gold-secondary)',
            margin: 0,
            marginBottom: 16,
          }}
        >
          MAIN COMMITMENTS
        </p>
        <h2
          id="commitments-heading"
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 500,
            fontSize: 'clamp(28px, 3vw, 36px)',
            lineHeight: 1.2,
            color: 'var(--gpm-walnut-deep)',
            margin: 0,
            marginBottom: 56,
          }}
        >
          The structure behind the number.
        </h2>

        {/* Spec §7: two-column grid at lg, single column below.
            Layout uses globals.css class (.gpm-pricing-commitment-grid)
            rather than the Tailwind responsive utility so the layout-
            repair verification grep stays clean. */}
        <ul
          className="grid gpm-pricing-commitment-grid"
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            rowGap: 48,
            columnGap: 64,
          }}
        >
          {COMMITMENTS.map((c) => (
            <li key={c.number}>
              <div className="flex items-center" style={{ gap: 16, marginBottom: 16 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 500,
                    fontSize: 14,
                    color: 'var(--gpm-gold-secondary)',
                    fontFeatureSettings: '"tnum"',
                    flexShrink: 0,
                  }}
                >
                  {c.number}
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    flex: 1,
                    height: 0.5,
                    background: 'rgba(184, 150, 46, 0.35)',
                  }}
                />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 500,
                  fontSize: 22,
                  lineHeight: 1.3,
                  color: 'var(--gpm-ink-display)',
                  margin: 0,
                  marginBottom: 12,
                }}
              >
                {c.headline}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: 'var(--gpm-ink-body)',
                  margin: 0,
                }}
              >
                {c.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
