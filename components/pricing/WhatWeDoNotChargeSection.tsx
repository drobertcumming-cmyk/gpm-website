import { TwoCostsCallout } from './TwoCostsCallout'

// /pricing §8 — What we don't charge.
// 12-col 8/4 split at lg+: main prose 8 cols, TwoCostsCallout 4-col
// sidebar (third-party charges that aren't Grace's). Stacks at mobile.
//
// Layout shift 2026-05-08: widened from 640px ProseContainer to a 1200
// main+sidebar grid. The TwoCostsCallout moves from inline-below-prose
// to the sidebar, sitting alongside the narrative rather than below it.
//
// Reference: Grace Precious Metals — Pricing Page Design Specification §16.

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
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <p style={eyebrowStyle}>WHAT WE DON&rsquo;T CHARGE</p>
        <h2 id="what-we-do-not-charge-heading" style={headlineStyle}>
          No admin fee. No setup fee. No exit fee.
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-12"
          style={{ rowGap: 32, columnGap: 48 }}
        >
          {/* Main prose — 8 cols */}
          <div className="lg:col-span-8">
            <p style={paragraphStyle}>
              Many Gold IRA companies layer fees on top of their spread:
              account setup fees, annual administration fees, wire transfer
              fees, and liquidation fees. Grace charges none of these. The
              11.1% spread is the complete cost of doing business with us.
            </p>

            <p style={{ ...paragraphStyle, marginBottom: 0 }}>
              Your IRA will carry two third-party charges that are not set by
              Grace and are billed directly by the custodian and depository
              &mdash; the figures are in the panel alongside.
            </p>
          </div>

          {/* Sidebar — 4 cols, third-party costs callout */}
          <div className="lg:col-span-4" style={{ alignSelf: 'start' }}>
            <TwoCostsCallout />
          </div>
        </div>
      </div>
    </section>
  )
}

const eyebrowStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.14em',
  color: 'var(--gpm-gold-secondary)',
  margin: 0,
  marginBottom: 16,
}

const headlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontWeight: 500,
  fontSize: 'clamp(28px, 3vw, 36px)',
  lineHeight: 1.2,
  color: 'var(--gpm-walnut-deep)',
  margin: 0,
  marginBottom: 40,
}

const paragraphStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'clamp(16px, 1.4vw, 17px)',
  fontWeight: 400,
  lineHeight: 1.65,
  color: 'var(--gpm-ink-body)',
  margin: '0 0 20px',
}
