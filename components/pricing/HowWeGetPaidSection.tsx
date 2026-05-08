// /pricing §8 — How we get paid.
// 12-col 8/4 split at lg+: main prose 8 cols, "spread is the revenue"
// data callout 4 cols. Stacks at mobile. Eyebrow + H2 span full width.
//
// Layout shift 2026-05-08: widened from 640px ProseContainer to a 1200
// main+sidebar grid for editorial parity with WhyTheNumberSection and
// WhatWeDoNotChargeSection.
//
// Reference: Grace Precious Metals — Pricing Page Design Specification §16.

export function HowWeGetPaidSection() {
  return (
    <section
      aria-labelledby="how-we-get-paid-heading"
      className="w-full py-16 md:py-24"
      style={{
        paddingLeft: 32,
        paddingRight: 32,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <p style={eyebrowStyle}>HOW WE GET PAID</p>
        <h2 id="how-we-get-paid-heading" style={headlineStyle}>
          The spread is our revenue.
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-12"
          style={{ rowGap: 32, columnGap: 48 }}
        >
          {/* Main prose — 8 cols */}
          <div className="lg:col-span-8">
            <p style={paragraphStyle}>
              Grace earns revenue from the spread between the price we pay for
              bullion and the price we charge you. That spread is 11.1%,
              applied once, at the time of purchase. We do not earn ongoing
              fees, we do not earn commission on custodian or depository
              charges, and we do not earn revenue when you sell.
            </p>

            <p style={{ ...paragraphStyle, marginBottom: 0 }}>
              If the economics of our business ever require raising the
              spread, we will publish the new figure on this page before it
              takes effect. No such change is planned, and the current spread
              is what you are quoted.
            </p>
          </div>

          {/* Sidebar — 4 cols, data callout */}
          <aside
            className="lg:col-span-4"
            aria-label="Revenue model summary"
            style={{
              background: 'var(--gpm-linen-warm)',
              border: '1px solid var(--gpm-border-light)',
              borderRadius: 4,
              padding: '28px 32px',
              alignSelf: 'start',
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
            }}
          >
            <RevenueRow
              label="Entry spread"
              value="11.1%"
              valueColor="var(--gpm-gold-deep)"
            />
            <Hairline />
            <RevenueRow
              label="Ongoing fees to Grace"
              value="$0"
              valueColor="var(--gpm-walnut-deep)"
              muted
            />
            <Hairline />
            <RevenueRow
              label="Exit fee on buyback"
              value="$0"
              valueColor="var(--gpm-walnut-deep)"
              muted
            />
            <Hairline />
            <RevenueRow
              label="Commission on the sale"
              value="$0"
              valueColor="var(--gpm-walnut-deep)"
              muted
            />

            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 13,
                fontWeight: 400,
                color: 'rgba(31, 27, 22, 0.65)',
                lineHeight: 1.55,
                margin: 0,
                marginTop: 6,
              }}
            >
              The spread is the whole revenue model.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}

function RevenueRow({
  label,
  value,
  valueColor,
  muted = false,
}: {
  label: string
  value: string
  valueColor: string
  muted?: boolean
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 16,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          fontWeight: 400,
          color: muted ? 'rgba(31, 27, 22, 0.75)' : 'var(--gpm-ink-body)',
          lineHeight: 1.45,
          flex: 1,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 18,
          fontWeight: 600,
          color: valueColor,
          fontFeatureSettings: '"tnum"',
          lineHeight: 1.0,
          flexShrink: 0,
        }}
      >
        {value}
      </span>
    </div>
  )
}

function Hairline() {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'block',
        height: 0.5,
        background: 'var(--gpm-border-light)',
      }}
    />
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
