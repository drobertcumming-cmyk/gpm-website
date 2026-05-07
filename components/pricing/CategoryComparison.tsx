// /pricing §6b — Category comparison panel.
// Full-width box (1200px) sitting below the WorkedExamplesGrid, sharing
// its WideContainer. Tinted canvas-deep background, 4px gold-deep left
// border. "The comparison, at category level." renders as a serif
// heading line; oversized 17–33% figure follows; two body paragraphs
// summarising round-trip framing and Grace's stance.
//
// Reference: example reference image 2026-05-07.

export function CategoryComparison() {
  return (
    <aside
      aria-labelledby="comparison-heading"
      style={{
        background: 'var(--gpm-canvas-deep)',
        borderLeft: '4px solid var(--gpm-gold-deep)',
        padding: '40px 48px',
        marginTop: 56,
      }}
    >
      <h3
        id="comparison-heading"
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'clamp(20px, 1.8vw, 22px)',
          lineHeight: 1.3,
          color: 'var(--gpm-walnut-deep)',
          margin: 0,
          marginBottom: 24,
        }}
      >
        The comparison, at category level.
      </h3>

      <div
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'clamp(48px, 5.4vw, 60px)',
          lineHeight: 1.0,
          color: 'var(--gpm-gold-deep)',
          fontFeatureSettings: '"tnum"',
          marginBottom: 28,
        }}
      >
        17&ndash;33%
      </div>

      <p style={bodyStyle}>
        Published research and regulatory enforcement records show that the typical
        Gold IRA costs between <span style={tnum}>17% and 33%</span> on a round-trip
        basis &mdash; combining entry spread, ongoing fees, and exit costs. That range
        represents the category norm, not an outlier.
      </p>

      <p style={{ ...bodyStyle, marginBottom: 0 }}>
        Grace&rsquo;s entry cost is{' '}
        <span style={{ ...tnum, color: 'var(--gpm-gold-deep)', fontWeight: 500 }}>
          11.1%
        </span>
        . Buyback is at spot. The round-trip cost is the entry cost.
      </p>
    </aside>
  )
}

const bodyStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'clamp(15px, 1.3vw, 16px)',
  fontWeight: 400,
  lineHeight: 1.65,
  color: 'var(--gpm-ink-body)',
  margin: '0 0 16px',
  maxWidth: 880,
}

const tnum: React.CSSProperties = { fontFeatureSettings: '"tnum"' }
