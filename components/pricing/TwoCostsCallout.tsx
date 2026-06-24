// /pricing — TwoCostsCallout panel.
// Linen-warm panel describing the two third-party charges (custodian +
// depository) that aren't Grace's. All copy verbatim from Pricing Page
// Design Specification §16.
//
// 2026-05-08: now lives in the WhatWeDoNotChargeSection sidebar (4-col
// at lg+), so the inline 28px top margin is dropped — the parent grid
// owns spacing.

export function TwoCostsCallout() {
  return (
    <aside
      aria-label="Two third-party charges"
      style={{
        background: 'var(--gpm-linen-warm)',
        border: '1px solid var(--gpm-border-light)',
        borderRadius: 4,
        padding: 28,
      }}
    >
      <span
        style={{
          display: 'block',
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.14em',
          color: 'var(--gpm-gold-secondary)',
          textTransform: 'uppercase',
          marginBottom: 14,
        }}
      >
        TWO COSTS THAT ARE NOT OURS
      </span>
      <p style={rowStyle}>
        <strong style={labelStyle}>Custodian annual fee:</strong> approximately $250 per
        year (varies by custodian; billed directly to your IRA).
      </p>
      <p style={{ ...rowStyle, marginBottom: 0 }}>
        <strong style={labelStyle}>Depository storage fee:</strong> approximately $100 flat
        rate for storage and insurance (varies by depository; billed directly to your IRA).
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
