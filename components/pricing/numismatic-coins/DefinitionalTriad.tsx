// /pricing/numismatic-coins — Definitional Triad.
// Three-card grid laid out at lg+ (1fr 1fr 1fr); stacks single-column
// at mobile. Each card: tier label + range figure + title + body +
// optional note (Grace's catalogue marker on Tier 1).
//
// Tier 3 range "50–100%+" renders in state-error #A03A28 (rust) per
// spec to signal the documented pattern of harm. Tier 1 in gold-deep,
// Tier 2 in walnut.

interface TriadCard {
  tier: string
  range: string
  rangeColor: 'gold' | 'walnut' | 'rust'
  title: string
  body: React.ReactNode
  note?: string
}

const CARDS: TriadCard[] = [
  {
    tier: 'Tier 1',
    range: '3–15%',
    rangeColor: 'gold',
    title: 'Standard bullion',
    body: (
      <>
        Coins and bars whose value is the underlying weight of metal at current market
        prices. American Eagles, Canadian Maple Leafs, Austrian Philharmonics,
        LBMA-approved bars. The premium over spot reflects minting costs and dealer
        margin &mdash; bounded, transparent, and the market value is the metal weight.
      </>
    ),
    note: 'Grace’s catalogue is here.',
  },
  {
    tier: 'Tier 2',
    range: '15–30%+',
    rangeColor: 'walnut',
    title: 'Genuine numismatic',
    body: (
      <>
        Coins valued for rarity, historical significance, condition, or collector
        interest rather than metal weight. A legitimate market segment served by
        specialized dealers, auctions, and grading services. Genuine numismatic value
        is determined by scarcity and provenance &mdash; not by a marketing label.
      </>
    ),
  },
  {
    tier: 'Tier 3',
    range: '50–100%+',
    rangeColor: 'rust',
    title: '“Premium” in the Gold IRA channel',
    body: (
      <>
        Products sold in the retail Gold IRA channel positioned as carrying value
        above metal content. Some carry genuine numismatic value. Others carry a
        marketing label. The gap between the marketed value and the independent
        resale value is where the pattern of harm sits.
      </>
    ),
  },
]

const RANGE_COLOR: Record<TriadCard['rangeColor'], string> = {
  gold: 'var(--gpm-gold-deep)',
  walnut: 'var(--gpm-walnut)',
  rust: 'var(--gpm-state-error)',
}

export function DefinitionalTriad() {
  return (
    <div
      className="mx-auto"
      style={{ maxWidth: 880, marginTop: 48 }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-3"
        style={{ gap: 32 }}
      >
        {CARDS.map((card) => (
          <article
            key={card.tier}
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
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--gpm-gold-secondary)',
                marginBottom: 12,
              }}
            >
              {card.tier}
            </span>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 32,
                fontWeight: 600,
                lineHeight: 1.1,
                color: RANGE_COLOR[card.rangeColor],
                marginBottom: 20,
                paddingBottom: 20,
                borderBottom: '1px solid var(--gpm-border-light)',
                fontFeatureSettings: '"tnum"',
              }}
            >
              {card.range}
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 18,
                fontWeight: 500,
                color: 'var(--gpm-ink-display)',
                lineHeight: 1.3,
                margin: 0,
                marginBottom: 14,
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 15,
                fontWeight: 400,
                color: 'var(--gpm-ink-body)',
                lineHeight: 1.6,
                margin: 0,
                flex: 1,
              }}
            >
              {card.body}
            </p>
            {card.note && (
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 12,
                  fontWeight: 500,
                  color: 'var(--gpm-gold-secondary)',
                  marginTop: 16,
                  paddingTop: 14,
                  borderTop: '1px dashed rgba(213, 205, 182, 0.6)',
                }}
              >
                {card.note}
              </span>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
