// /pricing — TwoCostsCallout panel.
// Linen-warm panel inside WhatWeDoNotChargeSection describing the two
// third-party charges (custodian + depository) that aren't Grace's.
// All copy verbatim from Pricing Page Design Specification §16.

export function TwoCostsCallout() {
  return (
    <aside
      aria-label="Two third-party charges"
      style={{
        marginTop: 28,
        background: 'var(--gpm-linen-warm)',
        borderRadius: 2,
        padding: 24,
      }}
    >
      <p style={rowStyle}>
        <strong style={labelStyle}>Custodian annual fee:</strong> approximately $175 per
        year (varies by custodian; billed directly to your IRA).
      </p>
      <p style={{ ...rowStyle, marginBottom: 0 }}>
        <strong style={labelStyle}>Depository storage fee:</strong> approximately 0.75% of
        stored value per year (varies by depository; billed directly to your IRA).
      </p>
      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 12,
          fontWeight: 400,
          lineHeight: 1.6,
          color: 'rgba(31, 27, 22, 0.65)',
          marginTop: 16,
          marginBottom: 0,
        }}
      >
        Sample figures reflect current partner schedules as of publication date. Actual
        fees are set by the custodian and depository you select. Grace does not receive
        any portion of these fees.
      </p>
    </aside>
  )
}

const rowStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 14.5,
  fontWeight: 400,
  lineHeight: 1.6,
  color: 'var(--gpm-ink-body)',
  margin: '0 0 12px',
}

const labelStyle: React.CSSProperties = {
  fontWeight: 600,
  color: 'var(--gpm-ink-display)',
}
