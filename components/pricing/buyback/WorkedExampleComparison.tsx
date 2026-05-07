// /pricing/buyback — Worked Example Comparison panel.
// Two-column ledger (1fr 1fr) on desktop, stacked single column on
// mobile. Each column: eyebrow + title + 4 rows. The "Round-trip
// dealer revenue" total row has a solid top border separating it
// from the line items, with tabular-nums for currency and gold-deep
// for Customer A's total (Grace) per spec.
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
  },
]

const tnum: React.CSSProperties = { fontFeatureSettings: '"tnum"' }

export function WorkedExampleComparison() {
  return (
    <div
      className="mx-auto"
      style={{
        maxWidth: 880,
        marginTop: 40,
        background: 'var(--gpm-linen-warm)',
        border: '1px solid var(--gpm-border-light)',
        borderRadius: 4,
        padding: 36,
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: 48 }}
      >
        {COLUMNS.map((col) => (
          <div key={col.customer} className="flex flex-col">
            <span style={colHeaderStyle}>CUSTOMER {col.customer}</span>
            <div style={colTitleStyle}>{col.title}</div>
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
            />
            <TotalRow value={col.total} isGrace={col.totalIsGrace} />
          </div>
        ))}
      </div>
    </div>
  )
}

function Row({
  label,
  value,
  note,
}: {
  label: string
  value: string
  note?: string
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: '10px 0',
        borderBottom: '1px dashed rgba(213, 205, 182, 0.6)',
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

function TotalRow({ value, isGrace }: { value: string; isGrace: boolean }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: '16px 0 0',
        marginTop: 8,
        borderTop: '1px solid var(--gpm-border-light)',
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
        Round-trip dealer revenue
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: isGrace ? 20 : 16,
          fontWeight: isGrace ? 600 : 500,
          color: isGrace ? 'var(--gpm-gold-deep)' : 'var(--gpm-ink-body)',
          textAlign: 'right',
          ...tnum,
        }}
      >
        {value}
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
  marginBottom: 24,
  paddingBottom: 16,
  borderBottom: '1px solid var(--gpm-border-light)',
}
