import Image from 'next/image'
import Link from 'next/link'

// /who-we-are — Leadership Profiles.
// Three rows: William, Andrew, Duncan. Desktop: 120px circular portrait
// pinned left, content right. Mobile (< 768): centered column, 100px
// portrait. Border-light hairlines between rows; top border on first.
//
// William has a portrait asset (public/images/homepage/william-portrait.png).
// Andrew and Duncan use a neutral initial-based placeholder until
// commissioned portraits land — flagged in the open-decisions log.

interface Profile {
  title: string
  name: string
  initials: string
  portraitSrc?: string
  bio: React.ReactNode
  link?: { href: string; label: string }
}

const bioStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: 16,
  fontWeight: 400,
  color: 'var(--gpm-ink-body)',
  lineHeight: 1.6,
  margin: 0,
  marginBottom: 12,
}

const PROFILES: Profile[] = [
  {
    title: 'CO-FOUNDER & CHIEF EXECUTIVE OFFICER',
    name: 'William Armour',
    initials: 'WA',
    portraitSrc: '/images/homepage/william-portrait.png',
    bio: (
      <>
        <p style={bioStyle}>
          William is a pastor. He spent a decade as a senior salesperson at a
          large Gold IRA firm before co-founding Grace. His full account of why
          he left the industry is on a dedicated page.
        </p>
        <p style={bioStyle}>
          It is the single most important piece of writing on this website,
          and we recommend it to any reader trying to decide whether Grace is a
          company they can work with.
        </p>
      </>
    ),
    link: {
      href: '/who-we-are/williams-story',
      label: 'Read William’s full story',
    },
  },
  {
    title: 'CO-FOUNDER & CHIEF FINANCIAL OFFICER',
    name: 'Andrew Armour',
    initials: 'AA',
    bio: (
      <>
        <p style={bioStyle}>
          Andrew is William&rsquo;s brother and a qualified accountant. He is
          the financial architect of Grace&rsquo;s published-pricing model and
          the person who signs off on every pricing figure that appears on this
          website.
        </p>
        <p style={bioStyle}>
          The CFO sign-off on the 11.1% spread is not a rubber stamp &mdash; it
          is an auditable gate that sits at the CMS level. If the published
          spread changes at any future point, it changes because Andrew has
          signed off on the change, and the change is logged.
        </p>
      </>
    ),
  },
  {
    title: 'CO-FOUNDER & CHIEF MARKETING OFFICER',
    name: 'Duncan Cumming',
    initials: 'DC',
    bio: (
      <>
        <p style={bioStyle}>
          Duncan runs Grace&rsquo;s go-to-market strategy. He worked inside the
          Gold IRA marketing industry before co-founding Grace and brought to
          the company a working knowledge of how the category markets itself.
        </p>
        <p style={bioStyle}>
          He owns positioning, messaging, and the partner and publisher
          relationships that bring qualified prospects to a company built around
          honest pricing. Marketing&rsquo;s job is to make sure the people who
          would value that difference can find it.
        </p>
      </>
    ),
  },
]

export function LeadershipProfiles() {
  return (
    <div style={{ marginTop: 40 }}>
      {PROFILES.map((p, i) => (
        <article
          key={p.name}
          className="gpm-profile-row"
          style={{
            padding: '40px 0',
            borderBottom: '1px solid var(--gpm-border-light)',
            ...(i === 0
              ? { borderTop: '1px solid var(--gpm-border-light)' }
              : {}),
          }}
        >
          <div className="gpm-profile-portrait-wrap">
            {p.portraitSrc ? (
              <Image
                src={p.portraitSrc}
                alt={`${p.name} portrait`}
                width={120}
                height={120}
                className="gpm-profile-portrait"
                style={{
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <PortraitPlaceholder initials={p.initials} name={p.name} />
            )}
          </div>
          <div style={{ flex: 1 }}>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                fontWeight: 600,
                color: 'var(--gpm-gold-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: 8,
              }}
            >
              {p.title}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 22,
                fontWeight: 500,
                color: 'var(--gpm-ink-display)',
                lineHeight: 1.3,
                margin: 0,
                marginBottom: 16,
              }}
            >
              {p.name}
            </h3>
            {p.bio}
            {p.link && (
              <Link
                href={p.link.href}
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  fontWeight: 500,
                  color: 'var(--gpm-gold-secondary)',
                  textDecoration: 'none',
                  marginTop: 8,
                }}
                className="gpm-link-tier4"
              >
                {p.link.label} <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </article>
      ))}
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
      className="gpm-profile-portrait"
      style={{
        background: 'var(--gpm-linen-warm)',
        border: '1px solid var(--gpm-border-light)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-serif)',
        fontSize: 30,
        fontWeight: 500,
        color: 'var(--gpm-walnut-deep)',
        letterSpacing: '0.04em',
      }}
    >
      {initials}
    </div>
  )
}
