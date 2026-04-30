import Link from 'next/link'
import { FooterAccordion, type FooterAccordionSection } from './FooterAccordion'

// Production-brief homepage SiteFooter (post-2026-04-29 Option A).
// Full-bleed walnut-deep background; cream type; 4 columns at desktop; 2x2 at
// tablet; mobile becomes a one-open-at-a-time accordion. Bottom row: single
// line with center-dot separators per v3.6 §13.
//
// Reference: production brief §13; homepage_copy_v3_6.md §13.

interface FooterLink {
  label: string
  href: string
}

const COL_PAGES: ReadonlyArray<FooterLink> = [
  { label: 'Our Pricing', href: '/pricing' },
  { label: 'How A Rollover Works', href: '/rollover' },
  { label: 'Inherited IRA', href: '/rollover/inherited-ira' },
  { label: 'Transfer Guide', href: '/rollover/transfer' },
  { label: 'Who We Are', href: '/who-we-are' },
  { label: "William’s Story", href: '/who-we-are/williams-story' },
  { label: 'Compliance', href: '/who-we-are/compliance' },
  { label: 'Talk To An Advisor', href: '/advisor' },
]

const COL_RESOURCES: ReadonlyArray<FooterLink> = [
  { label: 'Resources Library', href: '/resources' },
  { label: 'Buyback', href: '/resources/buyback' },
  { label: 'Round-trip Cost', href: '/resources/round-trip-cost' },
  { label: 'Numismatic Coins', href: '/resources/numismatic-coins' },
  { label: 'FAQ', href: '/faq' },
]

const COL_TALK: ReadonlyArray<FooterLink> = [
  { label: 'Get the Briefing', href: '/briefing' },
  { label: 'Contact', href: '/contact' },
]
const COL_TALK_PENDING = 'Office hours and phone — pending confirmation.'

const COL_COMPLIANCE: ReadonlyArray<FooterLink> = [
  { label: 'Privacy', href: '/legal/privacy' },
  { label: 'Terms', href: '/legal/terms' },
  { label: 'Disclosures', href: '/legal/disclosures' },
  { label: 'State Licenses', href: '/legal/licenses' },
]

const ACCORDION_SECTIONS: ReadonlyArray<FooterAccordionSection> = [
  { heading: 'PAGES', links: COL_PAGES },
  { heading: 'RESOURCES', links: COL_RESOURCES },
  { heading: 'TALK TO US', links: COL_TALK, pendingNote: COL_TALK_PENDING },
  { heading: 'COMPLIANCE', links: COL_COMPLIANCE },
]

const HEADING_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.12em',
  color: 'var(--gpm-gold-primary)',
  marginBottom: 16,
}

const LINK_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.8,
  color: 'var(--gpm-canvas)',
}

function FooterColumn({
  heading,
  links,
  pendingNote,
}: {
  heading: string
  links: ReadonlyArray<FooterLink>
  pendingNote?: string
}) {
  return (
    <div>
      <h2 style={HEADING_STYLE}>{heading}</h2>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="gpm-link-footer" style={LINK_STYLE}>
              {l.label}
            </Link>
          </li>
        ))}
        {pendingNote ? (
          <li>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 13,
                color: 'rgba(242, 237, 224, 0.65)',
              }}
            >
              {pendingNote}
            </span>
          </li>
        ) : null}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer style={{ background: 'var(--gpm-walnut-deep)', paddingTop: 48, paddingLeft: 32, paddingRight: 32, paddingBottom: 32 }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Desktop / tablet — 4-col grid */}
        <div className="hidden lg:grid grid-cols-4" style={{ gap: 32 }}>
          <FooterColumn heading="PAGES" links={COL_PAGES} />
          <FooterColumn heading="RESOURCES" links={COL_RESOURCES} />
          <FooterColumn heading="TALK TO US" links={COL_TALK} pendingNote={COL_TALK_PENDING} />
          <FooterColumn heading="COMPLIANCE" links={COL_COMPLIANCE} />
        </div>
        <div className="hidden md:grid lg:hidden grid-cols-2" style={{ gap: 32 }}>
          <FooterColumn heading="PAGES" links={COL_PAGES} />
          <FooterColumn heading="RESOURCES" links={COL_RESOURCES} />
          <FooterColumn heading="TALK TO US" links={COL_TALK} pendingNote={COL_TALK_PENDING} />
          <FooterColumn heading="COMPLIANCE" links={COL_COMPLIANCE} />
        </div>

        {/* Mobile — accordion */}
        <FooterAccordion sections={ACCORDION_SECTIONS} />

        {/* Bottom row — single line, center-dot separators */}
        <div
          className="text-center"
          style={{
            marginTop: 32,
            paddingTop: 24,
            borderTop: '0.5px solid rgba(242, 237, 224, 0.20)',
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            fontWeight: 400,
            color: 'rgba(242, 237, 224, 0.50)',
          }}
        >
          Grace Precious Metals · [address — pending confirmation] · &copy; 2026 Grace Precious Metals. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
