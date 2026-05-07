// /pricing §9 — Category Comparison panel.
// Sits inside the WorkedExamplesGrid section. Canvas-deep background,
// 4px gold-deep left border, padding 28px. All copy verbatim from
// Pricing Page Design Specification §16.

export function CategoryComparison() {
  return (
    <aside
      aria-labelledby="comparison-heading"
      style={{
        background: 'var(--gpm-canvas-deep)',
        borderLeft: '4px solid var(--gpm-gold-deep)',
        padding: 28,
        marginTop: 48,
      }}
    >
      <h3
        id="comparison-heading"
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 18,
          lineHeight: 1.3,
          color: 'var(--gpm-walnut-deep)',
          margin: 0,
          marginBottom: 16,
        }}
      >
        The comparison, at category level.
      </h3>

      <div
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'clamp(28px, 3vw, 36px)',
          lineHeight: 1.0,
          color: 'var(--gpm-gold-deep)',
          fontFeatureSettings: '"tnum"',
          marginBottom: 16,
        }}
      >
        17&ndash;33%
      </div>

      <p style={bodyStyle}>
        Published research and regulatory enforcement records show that the typical Gold
        IRA costs between <span style={tnum}>17% and 33%</span> on a round-trip basis
        &mdash; combining entry spread, ongoing fees, and exit costs. That range
        represents the category norm, not an outlier.
      </p>

      <p style={{ ...bodyStyle, marginBottom: 0 }}>
        Grace&rsquo;s entry cost is{' '}
        <span style={emphasisStyle}>11.1%</span>. Buyback is at spot. The round-trip cost
        is the entry cost.
      </p>
    </aside>
  )
}

const bodyStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.6,
  color: 'var(--gpm-ink-body)',
  margin: '0 0 12px',
}

const tnum: React.CSSProperties = { fontFeatureSettings: '"tnum"' }

const emphasisStyle: React.CSSProperties = {
  color: 'var(--gpm-gold-deep)',
  fontWeight: 500,
  fontFeatureSettings: '"tnum"',
}
