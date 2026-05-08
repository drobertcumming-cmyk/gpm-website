// /pricing/buyback — Grace Posture commit panel ("The math, on Grace's
// posture").
//
// Layout shift 2026-05-08: from a narrow inline aside under the prose
// → a full-width stage panel that fills the 1200 rail. Three big
// figures (11.1% / 0% / 11.1%) anchor the math visually so the panel
// reads as a takeaway rather than an inline footnote. Internal padding
// bumped, content center-aligned for the "stage" feel per the brief.
//
// Reference: 2026-05-08 zero-deadspace brief.

export function CommitPanel() {
  return (
    <aside
      aria-labelledby="commit-headline"
      className="mx-auto"
      style={{
        maxWidth: 1200,
        marginTop: 56,
        background: 'var(--gpm-surface)',
        borderLeft: '4px solid var(--gpm-gold-deep)',
        borderRadius: 2,
        padding: '56px 64px',
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
          textAlign: 'center',
          marginBottom: 14,
        }}
      >
        THE MATH
      </span>
      <h3
        id="commit-headline"
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(24px, 2.4vw, 30px)',
          fontWeight: 500,
          color: 'var(--gpm-ink-display)',
          textAlign: 'center',
          margin: 0,
          marginBottom: 36,
          lineHeight: 1.25,
        }}
      >
        The math, on Grace&rsquo;s posture.
      </h3>

      {/* Three figures — tabular, centered, equal weight */}
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ gap: 32, marginBottom: 32 }}
      >
        <Figure value="11.1%" label="Entry spread" />
        <Figure value="0%" label="Exit markdown" />
        <Figure value="11.1%" label="Round-trip cost" emphasis />
      </div>

      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 17,
          fontWeight: 400,
          color: 'var(--gpm-walnut-deep)',
          lineHeight: 1.6,
          textAlign: 'center',
          margin: '0 auto',
          maxWidth: 720,
        }}
      >
        On standard bullion, in any market environment. The number on{' '}
        <span style={{ fontFeatureSettings: '"tnum"' }}>/pricing</span> is the
        number on the way out, too.
      </p>
    </aside>
  )
}

function Figure({
  value,
  label,
  emphasis = false,
}: {
  value: string
  label: string
  emphasis?: boolean
}) {
  return (
    <div
      style={{
        textAlign: 'center',
        paddingTop: 8,
        paddingBottom: 8,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'clamp(48px, 6vw, 72px)',
          lineHeight: 1.0,
          letterSpacing: '-0.01em',
          color: emphasis ? 'var(--gpm-gold-deep)' : 'var(--gpm-walnut-deep)',
          fontFeatureSettings: '"tnum"',
          marginBottom: 12,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: '0.10em',
          textTransform: 'uppercase',
          color: emphasis ? 'var(--gpm-gold-secondary)' : 'rgba(31, 27, 22, 0.65)',
        }}
      >
        {label}
      </div>
    </div>
  )
}
