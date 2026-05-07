import Link from 'next/link'

// Breadcrumb for /pricing/numismatic-coins. Sits between SiteHeader
// and the editorial hero. Border-bottom border-light hairline.

export function NumismaticBreadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        paddingTop: 16,
        paddingBottom: 16,
        borderBottom: '0.5px solid var(--gpm-border-light)',
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: 680, paddingLeft: 32, paddingRight: 32 }}
      >
        <Link
          href="/pricing"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            fontWeight: 400,
            color: 'var(--gpm-gold-secondary)',
            textDecoration: 'none',
          }}
        >
          Pricing
        </Link>
        <span
          aria-hidden="true"
          style={{
            margin: '0 8px',
            color: 'var(--gpm-border-light)',
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
          }}
        >
          /
        </span>
        <span
          aria-current="page"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            fontWeight: 500,
            color: 'var(--gpm-ink-body)',
          }}
        >
          Numismatic Coins
        </span>
      </div>
    </nav>
  )
}
