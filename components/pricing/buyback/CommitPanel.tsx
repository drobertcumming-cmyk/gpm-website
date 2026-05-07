// /pricing/buyback — Grace Posture commit panel.
// Tinted callout: surface bg #E8E2CC + 4px gold-deep left border per spec.
// "11.1%" / "0%" / "11.1%" emphasized in gold-deep weight 500.

export function CommitPanel() {
  return (
    <aside
      aria-labelledby="commit-headline"
      style={{
        background: 'var(--gpm-surface)',
        borderLeft: '4px solid var(--gpm-gold-deep)',
        borderRadius: 2,
        padding: '28px 32px',
        marginTop: 40,
      }}
    >
      <h3
        id="commit-headline"
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 18,
          fontWeight: 500,
          color: 'var(--gpm-ink-display)',
          margin: 0,
          marginBottom: 14,
        }}
      >
        The math, on Grace&rsquo;s posture.
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 17,
          fontWeight: 400,
          color: 'var(--gpm-ink-body)',
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        Entry spread <span style={emphasis}>11.1%</span>. Exit markdown{' '}
        <span style={emphasis}>0%</span>. Round-trip cost to Grace, on standard
        bullion, in any market environment: <span style={emphasis}>11.1%</span>. The
        number on /pricing is the number on the way out, too.
      </p>
    </aside>
  )
}

const emphasis: React.CSSProperties = {
  color: 'var(--gpm-gold-deep)',
  fontWeight: 500,
  fontFeatureSettings: '"tnum"',
}
