import Image from 'next/image'
import Link from 'next/link'

// /who-we-are — Leadership Profiles.
//
// Layout shift 2026-05-08: from 3 stacked horizontal rows (portrait
// left, content right, full-width row each) → 3-up vertical-card
// grid. Each card: centered portrait at top, title eyebrow, name H3,
// truncated bio, optional link. md:grid-cols-3 at 768+, single
// column below.
//
// The 3-up grid lets the user see "the team" as a single unit of
// trust per the brief, rather than scrolling through three separate
// rows.
//
// William has a portrait asset (public/images/homepage/william-portrait.png).
// Andrew and Duncan use a neutral initial-based placeholder until
// commissioned portraits land.

interface Profile {
  title: string
  name: string
  initials: string
  portraitSrc?: string
  bio: string
  link?: { href: string; label: string }
}

const PROFILES: Profile[] = [
  {
    title: 'CO-FOUNDER & CHIEF EXECUTIVE OFFICER',
    name: 'William Armour',
    initials: 'WA',
    portraitSrc: '/images/homepage/william-portrait.png',
    bio:
      'A pastor. Spent a decade as a senior salesperson at a large Gold IRA firm before co-founding Grace. His full account of why he left the industry is on a dedicated page — the single most important piece of writing on this website.',
    link: {
      href: '/who-we-are/williams-story',
      label: 'Read William’s full story',
    },
  },
  {
    title: 'CO-FOUNDER & CHIEF FINANCIAL OFFICER',
    name: 'Andrew Armour',
    initials: 'AA',
    bio:
      'William’s brother and a qualified accountant. The financial architect of Grace’s published-pricing model. The CFO sign-off on the 11.1% spread is an auditable gate that sits at the CMS level — every change is logged.',
  },
  {
    title: 'CO-FOUNDER & CHIEF MARKETING OFFICER',
    name: 'Duncan Cumming',
    initials: 'DC',
    bio:
      'Runs Grace’s go-to-market strategy. Worked inside the Gold IRA marketing industry before co-founding Grace and brought a working knowledge of how the category markets itself. Owns positioning, messaging, and partner relationships.',
  },
]

export function LeadershipProfiles() {
  return (
    <div
      className="mx-auto"
      style={{ maxWidth: 1200, marginTop: 40 }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ gap: 32 }}
      >
        {PROFILES.map((p) => (
          <article
            key={p.name}
            aria-labelledby={`profile-${p.initials}-name`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              background: 'var(--gpm-linen-warm)',
              border: '1px solid var(--gpm-border-light)',
              borderRadius: 4,
              padding: '40px 28px 32px',
            }}
          >
            <div style={{ marginBottom: 24 }}>
              {p.portraitSrc ? (
                <Image
                  src={p.portraitSrc}
                  alt={`${p.name} portrait`}
                  width={140}
                  height={140}
                  style={{
                    width: 140,
                    height: 140,
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <PortraitPlaceholder initials={p.initials} name={p.name} />
              )}
            </div>

            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                fontWeight: 600,
                color: 'var(--gpm-gold-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                lineHeight: 1.4,
                marginBottom: 10,
              }}
            >
              {p.title}
            </span>
            <h3
              id={`profile-${p.initials}-name`}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 24,
                fontWeight: 500,
                color: 'var(--gpm-ink-display)',
                lineHeight: 1.2,
                margin: 0,
                marginBottom: 16,
              }}
            >
              {p.name}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 15,
                fontWeight: 400,
                color: 'var(--gpm-ink-body)',
                lineHeight: 1.6,
                margin: 0,
                marginBottom: p.link ? 20 : 0,
                flex: 1,
              }}
            >
              {p.bio}
            </p>
            {p.link && (
              <Link
                href={p.link.href}
                className="gpm-link-tier4"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  fontWeight: 500,
                  marginTop: 'auto',
                }}
              >
                {p.link.label} <span aria-hidden="true">→</span>
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}

// Neutral placeholder portrait — circular linen-warm field with
// initials in walnut Source Serif. No emoji, no stock illustration.
// Replace with commissioned portrait when delivered.
function PortraitPlaceholder({
  initials,
  name,
}: {
  initials: string
  name: string
}) {
  return (
    <div
      role="img"
      aria-label={`${name} placeholder portrait`}
      style={{
        width: 140,
        height: 140,
        background: 'var(--gpm-canvas)',
        border: '1px solid var(--gpm-border-light)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-serif)',
        fontSize: 36,
        fontWeight: 500,
        color: 'var(--gpm-walnut-deep)',
        letterSpacing: '0.04em',
      }}
    >
      {initials}
    </div>
  )
}
