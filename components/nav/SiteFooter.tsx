import Link from 'next/link'
import { FooterAccordion, type FooterAccordionSection } from './FooterAccordion'

// Production-brief homepage SiteFooter (post-2026-04-29 Option A).
// Full-bleed walnut-deep background; cream type. Footer-rewrite spec: three
// nav-mirror columns (PAGES / RESOURCES / TALK TO US) at desktop; 2-col at
// tablet; mobile is a one-open-at-a-time accordion. The legal/utility set is
// demoted from a standalone COMPLIANCE column to a single inline strip above
// the copyright row. Bottom block: legal strip + copyright, hairline divider.
//
// Reference: production brief §13; homepage_copy_v3_6.md §13; footer-rewrite
// brief (nav-mirror columns + demoted legal strip). Paths are reconciled
// against the App Router route table and mirror SiteHeader.tsx.

interface FooterLink {
  label: string
  href: string
}

const COL_PAGES: ReadonlyArray<FooterLink> = [
  { label: 'Our Pricing', href: '/pricing' },
  { label: 'How A Rollover Works', href: '/rollover' },
  { label: 'Why Invest', href: '/why-invest' },
  { label: 'Who We Are', href: '/who-we-are' },
  { label: "William’s Story", href: '/who-we-are/williams-story' },
  { label: 'How We Operate', href: '/who-we-are/how-we-operate' },
  { label: 'Talk To An Advisor', href: '/advisor' },
]

const COL_RESOURCES: ReadonlyArray<FooterLink> = [
  { label: 'Resources Library', href: '/resources' },
  { label: 'Buyback', href: '/pricing/buyback' },
  { label: 'Numismatic Coins', href: '/pricing/numismatic-coins' },
  { label: 'FAQ', href: '/faq' },
]

const COL_TALK: ReadonlyArray<FooterLink> = [
  { label: 'Get the Briefing', href: '/briefing' },
  { label: 'Contact', href: '/contact' },
]
const COL_TALK_PENDING = 'Office hours and phone — pending confirmation.'

// Legal/utility set — demoted from a standalone COMPLIANCE column to a single
// inline strip above the copyright row (footer-rewrite spec). Paths resolved
// against the route table: live routes are /legal/*, not bare /privacy etc.
const LEGAL_STRIP: ReadonlyArray<FooterLink> = [
  { label: 'Privacy', href: '/legal/privacy' },
  { label: 'Terms', href: '/legal/terms' },
  { label: 'Disclosures', href: '/legal/disclosures' },
  { label: 'State Licenses', href: '/legal/licenses' },
]

const ACCORDION_SECTIONS: ReadonlyArray<FooterAccordionSection> = [
  { heading: 'PAGES', links: COL_PAGES },
  { heading: 'RESOURCES', links: COL_RESOURCES },
  { heading: 'TALK TO US', links: COL_TALK, pendingNote: COL_TALK_PENDING },
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

const BASELINE_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 12,
  fontWeight: 400,
  color: 'rgba(242, 237, 224, 0.50)',
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
        {/* Desktop — 3-col nav-mirror grid */}
        <div className="hidden lg:grid grid-cols-3" style={{ gap: 32 }}>
          <FooterColumn heading="PAGES" links={COL_PAGES} />
          <FooterColumn heading="RESOURCES" links={COL_RESOURCES} />
          <FooterColumn heading="TALK TO US" links={COL_TALK} pendingNote={COL_TALK_PENDING} />
        </div>
        {/* Tablet — 2-col, three columns reflow 2 + 1 */}
        <div className="hidden md:grid lg:hidden grid-cols-2" style={{ gap: 32 }}>
          <FooterColumn heading="PAGES" links={COL_PAGES} />
          <FooterColumn heading="RESOURCES" links={COL_RESOURCES} />
          <FooterColumn heading="TALK TO US" links={COL_TALK} pendingNote={COL_TALK_PENDING} />
        </div>

        {/* Mobile — accordion */}
        <FooterAccordion sections={ACCORDION_SECTIONS} />

        {/* Baseline block — hairline divider, then legal strip, then copyright.
            Both rows share the muted, subordinate treatment per spec. */}
        <div
          style={{
            marginTop: 32,
            paddingTop: 24,
            borderTop: '0.5px solid rgba(242, 237, 224, 0.20)',
          }}
        >
          {/* Legal/utility strip — single inline row, center-dot separators */}
          <div style={BASELINE_STYLE}>
            {LEGAL_STRIP.map((l, i) => (
              <span key={l.href}>
                {i > 0 ? (
                  <span aria-hidden="true" style={{ margin: '0 8px' }}>
                    ·
                  </span>
                ) : null}
                <Link
                  href={l.href}
                  className="gpm-link-footer"
                  style={{ color: 'rgba(242, 237, 224, 0.50)' }}
                >
                  {l.label}
                </Link>
              </span>
            ))}
          </div>

          {/* Copyright row — text unchanged; placeholders intentional */}
          <div style={{ ...BASELINE_STYLE, marginTop: 12 }}>
            Grace Precious Metals · [address — pending confirmation] · &copy; 2026 Grace Precious Metals. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
