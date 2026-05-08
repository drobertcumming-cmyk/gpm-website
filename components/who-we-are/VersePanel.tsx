// /who-we-are — Proverbs 11:1 anchor verse panel.
// Tinted callout: surface bg #E8E2CC + 4px gold-deep left border per spec.
// Italic verse text in Source Serif 4. Reference eyebrow above.
//
// 2026-05-08: marginBottom dropped — the verse panel now lives in
// the left column of a 7/5 anchor grid alongside its prose, so the
// parent grid owns spacing rather than the panel itself.

export function VersePanel() {
  return (
    <aside
      aria-labelledby="verse-ref"
      style={{
        background: 'var(--gpm-surface)',
        borderLeft: '4px solid var(--gpm-gold-deep)',
        borderRadius: 2,
        padding: '32px 36px',
      }}
    >
      <span
        id="verse-ref"
        style={{
          display: 'block',
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          fontWeight: 600,
          color: 'var(--gpm-gold-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          marginBottom: 14,
        }}
      >
        PROVERBS 11:1
      </span>
      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 22,
          fontWeight: 400,
          fontStyle: 'italic',
          color: 'var(--gpm-ink-display)',
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        &ldquo;A false balance is an abomination to the Lord, but a just weight
        is his delight.&rdquo;
      </p>
    </aside>
  )
}
