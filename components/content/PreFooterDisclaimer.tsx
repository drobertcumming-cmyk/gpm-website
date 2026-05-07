import type { ReactNode } from 'react'

// Site-wide pre-footer disclaimer block — sits above the dark SiteFooter
// on every page. Cream-on-canvas band with "DISCLAIMERS" eyebrow heading
// top-left and disclaimer body paragraphs below. The container width and
// horizontal padding match SiteFooter's inner content (max-width 1200,
// padding 32) so the heading and the footer's column headings (PAGES,
// RESOURCES, TALK TO US, COMPLIANCE) share an identical left edge.
//
// Per-page disclaimer copy is passed as children. The component handles
// the heading, container, typography, and band background.
//
// Replaces the per-page HomepageDisclaimer (cream, no heading) and
// pricing DisclaimerStack (walnut-deep, with heading) — both retired
// in favour of this consistent treatment site-wide.

interface PreFooterDisclaimerProps {
  /** Disclaimer body paragraphs, passed as <p> elements. The component
   *  applies the body typography (Source Serif 4 13px, line-height 1.6,
   *  ink-body at 0.75 alpha) via inherited styles on a wrapper div. */
  children: ReactNode
}

export function PreFooterDisclaimer({ children }: PreFooterDisclaimerProps) {
  return (
    <aside
      aria-label="Disclaimers"
      style={{ background: 'var(--gpm-canvas)' }}
    >
      <div
        style={{
          paddingLeft: 32,
          paddingRight: 32,
          paddingTop: 48,
          paddingBottom: 48,
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 1200 }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.14em',
              color: 'rgba(45, 38, 32, 0.55)',
              margin: 0,
              marginBottom: 20,
            }}
          >
            DISCLAIMERS
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              maxWidth: 880,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </aside>
  )
}

/** Body paragraph styling for use inside <PreFooterDisclaimer>.
 *  Source Serif 4, 13px, line-height 1.6, ink-body at 0.75 alpha
 *  against canvas — passes WCAG AA. Pages should apply this style
 *  to their <p> children for consistent typography. */
export const preFooterDisclaimerParagraphStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontWeight: 400,
  fontSize: 13,
  lineHeight: 1.6,
  color: 'rgba(45, 38, 32, 0.75)',
  margin: 0,
}
