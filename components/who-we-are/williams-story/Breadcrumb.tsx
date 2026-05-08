import Link from 'next/link'

// /who-we-are/williams-story — breadcrumb.
// Sits between SiteHeader and the editorial hero. Border-bottom
// border-light hairline.

export function WilliamsStoryBreadcrumb() {
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
        style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
      >
        <Link
          href="/who-we-are"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            fontWeight: 400,
            color: 'var(--gpm-gold-secondary)',
            textDecoration: 'none',
          }}
        >
          Who We Are
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
          William&rsquo;s Story
        </span>
      </div>
    </nav>
  )
}
