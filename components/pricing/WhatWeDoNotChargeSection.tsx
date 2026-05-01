// /pricing §5 — What we don't charge.
// Prose section with a linen-warm callout panel for the two costs that
// are not Grace's (custodian fee + depository fee).
//
// Reference: v3.5 Section 1 "What we don't charge". Custodian/depository
// sample fees are CFO-substantiation pending — flag in PR description.

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
      <div className="mx-auto" style={{ maxWidth: 640 }}>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.10em',
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
          Listed plainly, because they don&rsquo;t exist.
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

        {/* Custodian / depository callout — linen-warm panel, gold-primary left rule */}
        <aside
          style={{
            marginTop: 32,
            background: 'var(--gpm-linen-warm)',
            borderLeft: '2px solid var(--gpm-gold-primary)',
            padding: '24px 28px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.10em',
              color: 'var(--gpm-gold-secondary)',
              marginBottom: 12,
            }}
          >
            TWO COSTS THAT ARE NOT OURS
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(15px, 1.3vw, 16px)',
              fontWeight: 400,
              lineHeight: 1.65,
              color: 'var(--gpm-ink-body)',
              margin: 0,
            }}
          >
            Every Gold IRA customer pays two costs that are not Grace&rsquo;s, regardless
            of which company they use: the IRS-approved custodian&rsquo;s annual fee
            (typically <span style={tnumStyle}>$80&ndash;$225</span> depending on the
            custodian, disclosed in your custodian&rsquo;s fee schedule) and the
            IRS-approved depository&rsquo;s annual storage fee (typically{' '}
            <span style={tnumStyle}>0.5%&ndash;1.0%</span> of holdings, depending on the
            depository and whether storage is segregated or non-segregated). These go to
            the custodian and the depository, not to Grace. We do not mark them up. We do
            not receive a rebate on them. They are what they are, and your custodian and
            depository will show you the figures directly.
          </p>
        </aside>
      </div>
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

const tnumStyle: React.CSSProperties = { fontFeatureSettings: '"tnum"' }
