// /pricing — TwoCostsCallout panel.
// Child component of WhatWeDoNotChargeSection. Linen-warm panel with
// two label/body rows describing the third-party custodian and depository
// fees that every Gold IRA customer pays regardless of dealer.
//
// Reference: GPM_Pricing_ClaudeCode_Brief_v2; v3.5.1 "TwoCostsCallout"
// copy block.

interface CostRow {
  label: string
  body: React.ReactNode
}

const tnum: React.CSSProperties = { fontFeatureSettings: '"tnum"' }

const ROWS: CostRow[] = [
  {
    label: 'Custodian annual fee',
    body: (
      <>
        typically <span style={tnum}>$80&ndash;$225</span> per year, depending on the
        custodian, disclosed in your custodian&rsquo;s fee schedule.
      </>
    ),
  },
  {
    label: 'Depository storage fee',
    body: (
      <>
        typically <span style={tnum}>0.5%&ndash;1.0%</span> of holdings per year,
        depending on the depository and whether storage is segregated or non-segregated.
      </>
    ),
  },
]

export function TwoCostsCallout() {
  return (
    <aside
      aria-labelledby="two-costs-eyebrow"
      style={{
        marginTop: 32,
        background: 'var(--gpm-linen-warm)',
        borderRadius: 2,
        padding: '26px 28px',
        maxWidth: 540,
      }}
    >
      <p
        id="two-costs-eyebrow"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.14em',
          color: 'var(--gpm-gold-secondary)',
          marginBottom: 12,
        }}
      >
        TWO COSTS THAT ARE NOT OURS
      </p>

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          fontWeight: 400,
          lineHeight: 1.55,
          color: 'var(--gpm-ink-body)',
          marginBottom: 16,
        }}
      >
        Every Gold IRA customer pays two costs that are not Grace&rsquo;s, regardless of
        which company they use:
      </p>

      <dl style={{ margin: 0 }}>
        {ROWS.map((row, i) => (
          <div
            key={row.label}
            style={{
              paddingTop: i === 0 ? 0 : 14,
              paddingBottom: i === ROWS.length - 1 ? 0 : 14,
              borderTop: i === 0 ? 'none' : '1px dashed var(--gpm-border-light)',
            }}
          >
            <dt
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 500,
                lineHeight: 1.45,
                color: 'var(--gpm-ink-display)',
                marginBottom: 4,
              }}
            >
              {row.label}
            </dt>
            <dd
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 400,
                lineHeight: 1.55,
                color: 'var(--gpm-ink-body)',
                margin: 0,
              }}
            >
              {row.body}
            </dd>
          </div>
        ))}
      </dl>

      <div
        style={{
          marginTop: 16,
          paddingTop: 14,
          borderTop: '0.5px solid var(--gpm-border-light)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 11.5,
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'rgba(45, 38, 32, 0.70)',
            margin: 0,
          }}
        >
          These go to the custodian and the depository, not to Grace. We do not mark them
          up. We do not receive a rebate on them. They are what they are, and your
          custodian and depository will show you the figures directly.
        </p>
      </div>
    </aside>
  )
}
