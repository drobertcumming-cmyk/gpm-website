// /pricing §6b — Category comparison panel (v3.5.1, Delta #6).
// Child of WorkedExamplesGrid (rendered inside the same section).
// canvas-deep background, 4px gold-deep left border. 17–33% figure
// rendered with a real Unicode en-dash. Three body paragraphs:
// industry range / Grace's like-for-like all-in / no companies named.
//
// Reference: GPM_Pricing_ClaudeCode_Brief_v2; v3.5.1 "CategoryComparison
// panel — like-for-like math".

export function CategoryComparison() {
  return (
    <aside
      aria-labelledby="comparison-heading"
      style={{
        background: 'var(--gpm-canvas-deep)',
        borderLeft: '4px solid var(--gpm-gold-deep)',
        padding: 28,
        maxWidth: 560,
        marginTop: 56,
      }}
    >
      <h3
        id="comparison-heading"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.14em',
          color: 'var(--gpm-gold-secondary)',
          margin: 0,
          marginBottom: 16,
        }}
      >
        THE COMPARISON, AT CATEGORY LEVEL
      </h3>

      <div
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'clamp(32px, 3.4vw, 36px)',
          lineHeight: 1.0,
          color: 'var(--gpm-gold-deep)',
          fontFeatureSettings: '"tnum"',
          marginBottom: 16,
        }}
      >
        17&ndash;33%
      </div>

      <p style={bodyStyle}>
        Independent research and documented enforcement records place the industry-typical
        all-in entry cost on a standard Gold IRA rollover commonly between{' '}
        <span style={tnum}>17% and 33%</span> once the full stack of markup,
        administrative, setup, and buyback-spread costs is aggregated.
      </p>

      <p style={bodyStyle}>
        Grace&rsquo;s like-for-like all-in entry cost &mdash; the{' '}
        <span style={tnum}>11.1%</span> spread plus the third-party custodian and
        depository fees described above &mdash; typically lands between{' '}
        <span style={tnum}>12% and 13%</span> on a representative year-one rollover.
        The <span style={tnum}>11.1%</span> you see on this page is what Grace bills.
        The custodian and depository numbers are billed by those parties directly and
        disclosed by them.
      </p>

      <p style={{ ...bodyStyle, marginBottom: 0 }}>
        There are no category companies named on this page; the substantiation is at
        category level. If you want to test the comparison against your current or
        prospective provider, request their buyback quote on the amount you are
        considering &mdash; that number, plus any administration or setup fees they
        charge, is what you would actually pay.
      </p>
    </aside>
  )
}

const bodyStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 13,
  fontWeight: 400,
  lineHeight: 1.65,
  color: 'var(--gpm-ink-body)',
  margin: '0 0 14px',
}

const tnum: React.CSSProperties = { fontFeatureSettings: '"tnum"' }
