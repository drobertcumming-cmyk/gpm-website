import { ProseContainer } from '@/components/layout'
import { TwoCostsCallout } from './TwoCostsCallout'

// /pricing §5 — What we don't charge (v3.5.1).
// Prose section enumerating the fees that don't exist, then the
// TwoCostsCallout panel describing the two third-party costs that are
// not Grace's. Inner container is ProseContainer (640px) per brief.
//
// Reference: GPM_Pricing_ClaudeCode_Brief_v2; v3.5.1 "What we don't charge".

export function WhatWeDoNotChargeSection() {
  return (
    <section
      aria-labelledby="what-we-do-not-charge-heading"
      className="mx-auto"
      style={{
        maxWidth: 1200,
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 96,
        paddingBottom: 96,
      }}
    >
      <ProseContainer>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: 'var(--gpm-gold-secondary)',
            marginBottom: 16,
          }}
        >
          WHAT WE DON&rsquo;T CHARGE
        </p>
        <h2
          id="what-we-do-not-charge-heading"
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 500,
            fontSize: 'clamp(28px, 3vw, 36px)',
            lineHeight: 1.25,
            color: 'var(--gpm-walnut-deep)',
            margin: 0,
            marginBottom: 28,
          }}
        >
          No admin fee. No setup fee. No buyback markdown.
        </h2>

        <p style={paragraphStyle}>
          The category&rsquo;s pricing complexity hides in fees that sit above or beside
          the spread. Ours don&rsquo;t exist, so we can list them plainly.
        </p>

        <p style={paragraphStyle}>
          There is no administration fee. There is no setup fee. There is no
          account-opening fee payable to Grace. There is no annual fee payable to Grace.
          There is no buyback-markup &mdash; we buy at spot, never below. There is no
          &ldquo;liquidation fee.&rdquo; There is no minimum purchase required to access
          the published spread &mdash; the 11.1% applies to the first dollar of your
          rollover and to the last.
        </p>

        <TwoCostsCallout />
      </ProseContainer>
    </section>
  )
}

const paragraphStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'clamp(16px, 1.4vw, 17px)',
  fontWeight: 400,
  lineHeight: 1.65,
  color: 'var(--gpm-ink-body)',
  margin: '0 0 22px',
}
