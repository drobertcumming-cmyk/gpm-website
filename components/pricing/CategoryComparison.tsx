// /pricing §6b — Category comparison panel.
// Child of WorkedExamplesGrid (rendered inside the same section), NOT a
// sibling section.  canvas-deep background, 4px gold-deep left border.
// 17–33% figure rendered with a real Unicode en-dash (–), not a
// hyphen-minus.
//
// Reference: v3.5 Section 1 "The comparison, at category level". 17–33%
// claim is counsel-gated and substantiation-flagged in PR description.

export function CategoryComparison() {
  return (
    <aside
      aria-labelledby="comparison-heading"
      style={{
        background: 'var(--gpm-canvas-deep)',
        borderLeft: '4px solid var(--gpm-gold-deep)',
        padding: '28px',
        maxWidth: 560,
        marginTop: 64,
      }}
    >
      <h3
        id="comparison-heading"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.12em',
          color: 'var(--gpm-gold-secondary)',
          margin: 0,
          marginBottom: 16,
          textTransform: 'none',
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

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(15px, 1.3vw, 16px)',
          fontWeight: 400,
          lineHeight: 1.65,
          color: 'var(--gpm-ink-body)',
          margin: 0,
          marginBottom: 14,
        }}
      >
        Independent research and documented enforcement records place the industry-typical
        all-in entry cost on a standard Gold IRA rollover in a wide range &mdash; commonly
        between <span style={{ fontFeatureSettings: '"tnum"' }}>17% and 33%</span> once
        the full stack of markup, administrative, setup, and buyback-spread costs is
        aggregated. The <span style={{ fontFeatureSettings: '"tnum"' }}>17%-to-33%</span>{' '}
        band is substantiated from published research on the category and from CFTC and
        state enforcement records documenting consumer losses.
      </p>

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(15px, 1.3vw, 16px)',
          fontWeight: 500,
          lineHeight: 1.65,
          color: 'var(--gpm-ink-display)',
          margin: 0,
          marginBottom: 14,
        }}
      >
        Grace&rsquo;s entry cost is the <span style={{ fontFeatureSettings: '"tnum"' }}>11.1%</span>{' '}
        spread.
      </p>

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(15px, 1.3vw, 16px)',
          fontWeight: 400,
          lineHeight: 1.65,
          color: 'var(--gpm-ink-body)',
          margin: 0,
        }}
      >
        There are no category companies named on this page; the substantiation is at
        category level. If you want to test the comparison against your current or
        prospective provider, request their buyback quote on the amount you are
        considering &mdash; that number, plus any administration or setup fees they
        charge, is what you would actually pay.
      </p>
    </aside>
  )
}
