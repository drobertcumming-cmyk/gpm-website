import { ProseContainer } from '@/components/layout'
import { TwoCostsCallout } from './TwoCostsCallout'

// /pricing §8 — What we don't charge.
// All copy verbatim from Pricing Page Design Specification §16. The
// TwoCostsCallout component renders the two third-party charge rows.
//
// Reference: Grace Precious Metals — Pricing Page Design Specification.

export function WhatWeDoNotChargeSection() {
  return (
    <section
      aria-labelledby="what-we-do-not-charge-heading"
      className="w-full py-16 md:py-24"
      style={{
        paddingLeft: 32,
        paddingRight: 32,
      }}
    >
      <ProseContainer>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.14em',
            color: 'var(--gpm-gold-secondary)',
            margin: 0,
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
            lineHeight: 1.2,
            color: 'var(--gpm-walnut-deep)',
            margin: 0,
            marginBottom: 24,
          }}
        >
          No admin fee. No setup fee. No exit fee.
        </h2>

        <p style={paragraphStyle}>
          Many Gold IRA companies layer fees on top of their spread: account setup fees,
          annual administration fees, wire transfer fees, and liquidation fees. Grace
          charges none of these. The 11.1% spread is the complete cost of doing business
          with us.
        </p>

        <p style={{ ...paragraphStyle, marginBottom: 0 }}>
          Your IRA will carry two third-party charges that are not set by Grace and are
          billed directly by the custodian and depository:
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
  margin: '0 0 20px',
}
