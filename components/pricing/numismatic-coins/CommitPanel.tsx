// /pricing/numismatic-coins — Grace's position commit panel.
// Tinted callout: surface bg #E8E2CC + 4px gold-deep left border per spec.
// "at any margin" emphasized in gold-deep weight 500.

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
        Grace&rsquo;s position, in one sentence.
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
        &lsquo;We do not sell the product category most associated with the documented
        pattern of retirement-account consumer harm,{' '}
        <span style={emphasis}>at any margin</span>.&rsquo;
      </p>
    </aside>
  )
}

const emphasis: React.CSSProperties = {
  color: 'var(--gpm-gold-deep)',
  fontWeight: 500,
}
