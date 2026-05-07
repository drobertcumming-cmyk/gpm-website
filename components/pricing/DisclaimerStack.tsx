import { WideContainer } from '@/components/layout'

// /pricing §8 — Disclaimer stack (v3.5.1).
// Full-bleed walnut-deep band. Three italic paragraphs in Source Serif 4
// at 11.5–12px. Body text reads against the dark background at a faded
// alpha that clears WCAG AA at body size.
//
// Tighter padding than other padded sections (64/64), per brief, so it
// abuts the footer without an extra divider.
//
// Inner container is WideContainer (1200px) per brief.
//
// Reference: GPM_Pricing_ClaudeCode_Brief_v2; v3.5.1 "Disclaimer stack".

export function DisclaimerStack() {
  return (
    <aside
      aria-label="Pricing disclaimer"
      style={{
        background: 'var(--gpm-walnut-deep)',
      }}
    >
      <div
        className="py-12 md:py-16"
        style={{
          paddingLeft: 32,
          paddingRight: 32,
        }}
      >
        <WideContainer>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.14em',
            color: 'rgba(201, 169, 108, 0.65)',
            marginBottom: 24,
          }}
        >
          DISCLAIMERS
        </p>

        <p style={paragraphStyle}>
          <em>
            Pricing reflects CFO-reviewed published policy as of the date shown and is
            subject to change by CFO-signed-off update. Custodian and depository fees
            quoted are representative sample figures from Grace&rsquo;s partner schedules;
            your specific fees will be disclosed by your custodian and depository
            directly.
          </em>
        </p>

        <p style={paragraphStyle}>
          <em>
            Grace Precious Metals is a precious metals dealer. Gold IRAs require an
            IRS-approved custodian and an IRS-approved depository. Grace Precious Metals
            is not a financial, tax, or legal advisor. Gold and precious metals
            investments carry risk, including the potential loss of principal. Past
            performance does not guarantee future results. Consult qualified
            professionals before making investment decisions.
          </em>
        </p>

        <p style={{ ...paragraphStyle, marginBottom: 0 }}>
          <em>
            Category-level pricing comparison references are substantiated from
            independent research on Gold IRA industry pricing practices and from
            published CFTC and state regulatory enforcement records. Substantiation
            files are maintained and available on counsel request. No specific
            competitor is identified on this page.
          </em>
        </p>
        </WideContainer>
      </div>
    </aside>
  )
}

// 4.5:1 against #3D2817 walnut-deep — verified against a contrast checker
// for body-size italic. Color is a desaturated cream — sits within the
// brand palette, not a new hex.
const paragraphStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: 12,
  lineHeight: 1.65,
  color: 'rgba(242, 237, 224, 0.78)',
  margin: '0 0 18px',
  maxWidth: 880,
}
