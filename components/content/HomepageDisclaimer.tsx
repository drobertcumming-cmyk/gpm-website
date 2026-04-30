// Production-brief homepage §12. Two paragraphs of disclaimer copy at 13px
// Source Serif 4. First paragraph has italic lead "Grace Precious Metals is
// a precious metals dealer." then upright body. Second paragraph all upright.
//
// Reference: production brief §12; homepage_copy_v3_6.md §12.

const PARA_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontWeight: 400,
  fontSize: 13,
  lineHeight: 1.6,
  color: 'rgba(45, 38, 32, 0.75)',
  margin: 0,
}

export function HomepageDisclaimer() {
  return (
    <aside
      aria-label="Disclaimer"
      className="mx-auto"
      style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32, paddingTop: 64, paddingBottom: 64 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <p style={PARA_STYLE}>
          <em>Grace Precious Metals is a precious metals dealer.</em> Gold IRAs require an
          IRS-approved custodian and an IRS-approved depository. Grace Precious Metals is not a
          financial, tax, or legal advisor. Gold and precious metals investments carry risk,
          including the potential loss of principal. Past performance does not guarantee future
          results. Consult qualified professionals before making investment decisions. Pricing
          reflects CFO-reviewed published policy as of the date shown.
        </p>
        <p style={PARA_STYLE}>
          &ldquo;A typical Gold IRA costs about a third more&rdquo; compares Grace&rsquo;s
          round-trip cost (entry spread plus ongoing custodian and depository fees; buyback at
          spot, zero exit spread) against the midpoint of the category-typical round-trip cost
          range of 17%&ndash;33%, substantiated from published research on Gold IRA pricing and
          regulatory enforcement records. Substantiation files available on counsel request. No
          specific competitor is identified on this page.
        </p>
      </div>
    </aside>
  )
}
