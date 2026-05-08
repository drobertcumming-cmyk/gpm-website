// /pricing/buyback — Worked Example Comparison (high-impact two-card).
// 12-col / 1200 max container; two distinct cards side-by-side at md+.
// Customer A (Grace) gets a subtle surface-tinted background to anchor
// the comparison; Customer B sits on linen-warm. The total figures
// ($16,650 vs ~$96,000) render at a hero scale to do the comparison
// visually rather than make the reader add the line items in their head.
//
// Layout shift 2026-05-08: from a single linen-warm panel containing a
// 1fr 1fr ledger inside an 880 max wrapper → two free-standing cards
// in a 12-col grid (md:grid-cols-2, 1200 max). Eliminates the centered-
// narrow-table feel; cards now read as parallel statements.
//
// Reference: buyback.html worked-example-panel block.

interface CompCol {
  customer: 'A' | 'B'
  title: string
  rollover: string
  entryMarkup: string
  entryMarkupNote: string
  exitMarkdown: string
  exitMarkdownNote?: string
  total: string
  totalIsGrace: boolean
  cardBg: string
}

const COLUMNS: CompCol[] = [
  {
    customer: 'A',
    title: 'Grace’s posture',
    rollover: '$150,000',
    entryMarkup: '$16,650',
    entryMarkupNote: '(11.1%)',
    exitMarkdown: '$0',
    total: '$16,650',
    totalIsGrace: true,
    cardBg: 'var(--gpm-surface)',
  },
  {
    customer: 'B',
    title: 'Industry pattern',
    rollover: '$150,000',
    entryMarkup: '$90,000',
    entryMarkupNote: '(60% over bullion)',
    exitMarkdown: '$6,000',
    exitMarkdownNote: '(10% under spot)',
    total: '~$96,000',
    totalIsGrace: false,
    cardBg: 'var(--gpm-linen-warm)',
  },
]

const tnum: React.CSSProperties = { fontFeatureSettings: '"tnum"' }

export function WorkedExampleComparison() {
  return (
    <div
      className="mx-auto"
      style={{ maxWidth: 1200, marginTop: 40 }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: 24 }}
      >
        {COLUMNS.map((col) => (
          <article
            key={col.customer}
            aria-labelledby={`compcard-${col.customer}-title`}
            className="flex flex-col"
            style={{
              background: col.cardBg,
              border: col.totalIsGrace
                ? '1px solid var(--gpm-gold-deep)'
                : '1px solid var(--gpm-border-light)',
              borderRadius: 4,
              padding: '36px 36px 32px',
              ...(col.totalIsGrace
                ? { borderLeft: '4px solid var(--gpm-gold-deep)' }
                : {}),
            }}
          >
            <span style={colHeaderStyle}>CUSTOMER {col.customer}</span>
            <h3 id={`compcard-${col.customer}-title`} style={colTitleStyle}>
              {col.title}
            </h3>

            {/* Hero total — visual centerpiece of the card */}
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(40px, 5.4vw, 64px)',
                fontWeight: 500,
                lineHeight: 1.0,
                color: col.totalIsGrace
                  ? 'var(--gpm-gold-deep)'
                  : 'var(--gpm-walnut-deep)',
                margin: '4px 0 8px',
                ...tnum,
              }}
            >
              {col.total}
            </div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 500,
                color: col.totalIsGrace
                  ? 'var(--gpm-gold-secondary)'
                  : 'rgba(31, 27, 22, 0.65)',
                textTransform: 'uppercase',
                letterSpacing: '0.10em',
                margin: 0,
                marginBottom: 28,
              }}
            >
              Round-trip dealer revenue
            </p>

            {/* Line items */}
            <Row label="Rollover" value={col.rollover} />
            <Row
              label="Entry markup"
              value={col.entryMarkup}
              note={col.entryMarkupNote}
            />
            <Row
              label="Exit markdown"
              value={col.exitMarkdown}
              note={col.exitMarkdownNote}
              isLast
            />
          </article>
        ))}
      </div>
    </div>
  )
}

function Row({
  label,
  value,
  note,
  isLast = false,
}: {
  label: string
  value: string
  note?: string
  isLast?: boolean
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: '12px 0',
        borderBottom: isLast
          ? 'none'
          : '1px dashed rgba(213, 205, 182, 0.6)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          fontWeight: 400,
          color: 'var(--gpm-ink-body)',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          fontWeight: 500,
          color: 'var(--gpm-ink-display)',
          textAlign: 'right',
          ...tnum,
        }}
      >
        {value}
        {note && (
          <span style={{ opacity: 0.6, marginLeft: 4 }}>{note}</span>
        )}
      </span>
    </div>
  )
}

const colHeaderStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 11,
  fontWeight: 600,
  color: 'var(--gpm-gold-secondary)',
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  marginBottom: 6,
}

const colTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: 18,
  fontWeight: 500,
  color: 'var(--gpm-ink-display)',
  margin: 0,
  marginBottom: 24,
  paddingBottom: 16,
  borderBottom: '1px solid var(--gpm-border-light)',
}
