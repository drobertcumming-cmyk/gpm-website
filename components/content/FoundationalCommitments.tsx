import Link from 'next/link'

// Production-brief homepage §5. Eyebrow + section headline + lead paragraph
// over a 4-card grid. Equal-height cards via Tailwind's stretch behaviour and
// flex-column layout. 4-col desktop, 2x2 tablet, 1-col mobile.
//
// Reference: production brief §5; homepage_copy_v3_6.md §5.

interface Card {
  numeral: string
  title: string
  body: string
  linkLabel: string
  linkHref: string
}

const CARDS: ReadonlyArray<Card> = [
  {
    numeral: '01',
    title: 'Published spread, 11.1% all-in',
    body: 'The markup over spot is 11.1%. That is the whole markup. Nothing is added on a phone call. Nothing is negotiated off it.',
    linkLabel: 'See the pricing page',
    linkHref: '/pricing',
  },
  {
    numeral: '02',
    title: 'Buyback at spot, never below',
    body: 'When you sell back to us, we pay the spot price on the day. We do not mark the buyback down to build a second margin on exit.',
    linkLabel: 'How buyback works',
    linkHref: '/resources/buyback',
  },
  {
    numeral: '03',
    title: 'Standard IRS-eligible bullion only',
    body: 'American Eagles, Canadian Maple Leafs, LBMA-approved bars. No numismatic, exclusive, rare, premium, or proof coins in any form.',
    linkLabel: 'Why we refuse numismatics',
    linkHref: '/resources/numismatic-coins',
  },
  {
    numeral: '04',
    title: 'Salaried advisors. No commission.',
    body: 'The person you speak to earns the same whether you buy or sell. No commissions, no referral fees, no volume incentives.',
    linkLabel: 'Meet the advisor team',
    linkHref: '/advisor',
  },
]

function CommitmentCard({ card }: { card: Card }) {
  return (
    <article className="flex flex-col h-full">
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          fontWeight: 600,
          color: 'var(--gpm-gold-secondary)',
          letterSpacing: 0,
        }}
      >
        {card.numeral}
      </p>
      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 18,
          fontWeight: 600,
          color: 'var(--gpm-walnut-deep)',
          lineHeight: 1.25,
          marginTop: 8,
        }}
      >
        {card.title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 16,
          fontWeight: 400,
          color: 'var(--gpm-ink-body)',
          lineHeight: 1.55,
          marginTop: 12,
          flexGrow: 1,
        }}
      >
        {card.body}
      </p>
      <Link
        href={card.linkHref}
        className="gpm-link-tier4"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          fontWeight: 500,
          marginTop: 16,
        }}
      >
        {card.linkLabel} <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}

export function FoundationalCommitments() {
  return (
    <section
      aria-labelledby="commitments-heading"
      className="mx-auto"
      style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32, paddingTop: 96, paddingBottom: 96 }}
    >
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: '0.10em',
          color: 'var(--gpm-gold-secondary)',
          marginBottom: 16,
        }}
      >
        OUR PROMISE
      </p>
      <h2
        id="commitments-heading"
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 600,
          fontSize: 32,
          lineHeight: 1.20,
          color: 'var(--gpm-walnut-deep)',
          margin: 0,
          maxWidth: 800,
        }}
      >
        Grace Precious Metals: Our Foundational Commitments
      </h2>
      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 18,
          fontWeight: 400,
          lineHeight: 1.55,
          color: 'var(--gpm-ink-body)',
          marginTop: 16,
          maxWidth: 720,
        }}
      >
        Building trust through transparency, authenticity, and insight.
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        style={{ gap: 32, marginTop: 48 }}
      >
        {CARDS.map((c) => (
          <CommitmentCard key={c.numeral} card={c} />
        ))}
      </div>
    </section>
  )
}
