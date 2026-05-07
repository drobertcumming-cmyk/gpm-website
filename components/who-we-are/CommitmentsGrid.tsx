import Link from 'next/link'

// /who-we-are — Four Commitments grid (2-col desktop, 1-col mobile).
// Linen-warm bg, border-light, 4px radius. Each card: 01/02/03/04
// numeric eyebrow + serif headline + serif body + tier-4 link.
//
// The four commitments mirror the site-wide foundational standard
// established 2026-04-30: published spread / buyback at spot /
// IRS-eligible bullion only / salaried advisors.

interface Commitment {
  num: string
  headline: string
  body: string
  link: { href: string; label: string }
}

const COMMITMENTS: Commitment[] = [
  {
    num: '01',
    headline: 'Published spread, 11.1% all-in.',
    body: 'The number is on the page. It includes the dealer margin, the custodian setup, and the first year of storage. There is no second fee schedule behind the phone call.',
    link: { href: '/pricing', label: 'See our pricing' },
  },
  {
    num: '02',
    headline: 'Buyback at spot, never below.',
    body: 'When you sell back, we pay the spot price on the day. There is no exit markdown, no “processing fee,” and no second margin on the way out.',
    link: { href: '/pricing/buyback', label: 'How buyback works' },
  },
  {
    num: '03',
    headline: 'Standard IRS-eligible bullion only.',
    body: 'The catalogue does not include numismatic, “premium,” “exclusive,” or “proof” coins. Every product has a transparent, globally quoted spot price.',
    link: { href: '/pricing/numismatic-coins', label: 'Why no numismatic' },
  },
  {
    num: '04',
    headline: 'Salaried advisors, no commission.',
    body: 'Our advisors are paid a salary. They have no financial incentive to recommend one product over another, or to close a sale that is not in your interest.',
    link: { href: '/advisor', label: 'Talk to an advisor' },
  },
]

export function CommitmentsGrid() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2"
      style={{ gap: 32, marginTop: 40 }}
    >
      {COMMITMENTS.map((c) => (
        <article
          key={c.num}
          style={{
            background: 'var(--gpm-linen-warm)',
            border: '1px solid var(--gpm-border-light)',
            borderRadius: 4,
            padding: '32px 28px',
          }}
        >
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--gpm-gold-secondary)',
              letterSpacing: '0.08em',
              marginBottom: 12,
            }}
          >
            {c.num}
          </span>
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
            {c.headline}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 15,
              fontWeight: 400,
              color: 'var(--gpm-ink-body)',
              lineHeight: 1.6,
              margin: 0,
              marginBottom: 14,
            }}
          >
            {c.body}
          </p>
          <Link
            href={c.link.href}
            className="gpm-link-tier4"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            {c.link.label} <span aria-hidden="true">→</span>
          </Link>
        </article>
      ))}
    </div>
  )
}
