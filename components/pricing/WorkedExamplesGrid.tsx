import { WideContainer } from '@/components/layout'
import { CategoryComparison } from './CategoryComparison'

// /pricing §6 — Worked examples (v3.5.1, Delta #3).
// Three-panel grid laid out across the WideContainer (1200px). Each
// panel: EXAMPLE 0n eyebrow + dollar-figure header + line-item rows
// (Rollover amount / Grace spread / Bullion delivered to vault / Admin
// fee / Setup fee / Annual account fee) + Total entry cost row + exit
// cost callout.
//
// Reference: example reference image + GPM_Pricing_ClaudeCode_Brief_v2.

interface WorkedExample {
  panelNumber: string
  amountLabel: string
  rollover: string
  graceSpread: string
  bullion: string
  total: string
}

const EXAMPLES: WorkedExample[] = [
  { panelNumber: '01', amountLabel: '$75,000',  rollover: '$75,000',  graceSpread: '$8,325',  bullion: '$66,675',  total: '$8,325' },
  { panelNumber: '02', amountLabel: '$150,000', rollover: '$150,000', graceSpread: '$16,650', bullion: '$133,350', total: '$16,650' },
  { panelNumber: '03', amountLabel: '$250,000', rollover: '$250,000', graceSpread: '$27,750', bullion: '$222,250', total: '$27,750' },
]

export function WorkedExamplesGrid() {
  return (
    <section
      aria-labelledby="worked-examples-heading"
      className="mx-auto py-16 md:py-24"
      style={{
        maxWidth: 1200,
        paddingLeft: 32,
        paddingRight: 32,
      }}
    >
      <WideContainer>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: 'var(--gpm-gold-secondary)',
            marginBottom: 16,
          }}
        >
          WHAT THE NUMBERS LOOK LIKE
        </p>
        <h2
          id="worked-examples-heading"
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 500,
            fontSize: 'clamp(28px, 3vw, 36px)',
            lineHeight: 1.25,
            color: 'var(--gpm-walnut-deep)',
            margin: 0,
            marginBottom: 56,
          }}
        >
          On a real rollover.
        </h2>

        {/* Grid wrapper — top + bottom hairlines bracket the panels */}
        <div
          style={{
            borderTop: '0.5px solid var(--gpm-border-light)',
            borderBottom: '0.5px solid var(--gpm-border-light)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {EXAMPLES.map((ex, i) => (
              <ExamplePanel key={ex.panelNumber} example={ex} isFirst={i === 0} />
            ))}
          </div>
        </div>

        <CategoryComparison />
      </WideContainer>
    </section>
  )
}

function ExamplePanel({ example, isFirst }: { example: WorkedExample; isFirst: boolean }) {
  return (
    <div
      style={{ padding: 32 }}
      className={isFirst ? '' : 'lg:border-l lg:border-[color:var(--gpm-border-light)]/50'}
    >
      <h3
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.14em',
          color: 'var(--gpm-gold-secondary)',
          marginBottom: 8,
        }}
      >
        EXAMPLE {example.panelNumber}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 28,
          lineHeight: 1.0,
          color: 'var(--gpm-ink-display)',
          fontFeatureSettings: '"tnum"',
          margin: 0,
          marginBottom: 24,
        }}
      >
        {example.amountLabel}
      </p>

      <dl style={{ margin: 0, padding: 0 }}>
        <LineItem label="Rollover amount" value={example.rollover} />
        <LineItem label="Grace spread (11.1%)" value={example.graceSpread} />
        <LineItem label="Bullion delivered to vault" value={example.bullion} />
        <LineItem label="Admin fee" value="$0" zero />
        <LineItem label="Setup fee" value="$0" zero />
        <LineItem label="Annual account fee" value="$0" zero />
        <TotalRow label="Total entry cost" value={example.total} />
      </dl>

      {/* Exit cost callout — linen-warm, gold-primary left rule */}
      <div
        style={{
          marginTop: 16,
          background: 'var(--gpm-linen-warm)',
          borderLeft: '2px solid var(--gpm-gold-primary)',
          padding: '10px 14px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            fontWeight: 400,
            lineHeight: 1.5,
            color: 'var(--gpm-ink-body)',
            margin: 0,
          }}
        >
          Exit cost:{' '}
          <span style={{ fontWeight: 500, color: 'var(--gpm-gold-deep)' }}>
            $0 markup.
          </span>{' '}
          Buyback at spot.
        </p>
      </div>
    </div>
  )
}

interface LineItemProps {
  label: string
  value: string
  zero?: boolean
}

function LineItem({ label, value, zero = false }: LineItemProps) {
  // Zero-fee rows render at reduced alpha — semantically present, visually
  // quiet. 0.75 alpha keeps the visual hierarchy ("zero rows quieter than
  // real values") while clearing WCAG AA at 6.86:1 against canvas. Earlier
  // 0.55 dropped to 3.70:1 — failed AA — fixed 2026-05-07 per accessibility
  // review.
  const alpha = zero ? 0.75 : 1
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 12,
        paddingTop: 9,
        paddingBottom: 9,
        borderBottom: '1px dashed var(--gpm-border-light)',
        opacity: alpha,
      }}
    >
      <dt
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 12.5,
          fontWeight: 400,
          lineHeight: 1.45,
          color: 'var(--gpm-ink-body)',
          flex: 1,
        }}
      >
        {label}
      </dt>
      <dd
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 12.5,
          fontWeight: 500,
          lineHeight: 1.45,
          color: 'var(--gpm-ink-display)',
          fontFeatureSettings: '"tnum"',
          margin: 0,
          flexShrink: 0,
        }}
      >
        {value}
      </dd>
    </div>
  )
}

function TotalRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 12,
        marginTop: 4,
        paddingTop: 12,
        paddingBottom: 4,
        borderTop: '1px solid var(--gpm-border-light)',
      }}
    >
      <dt
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          fontWeight: 500,
          lineHeight: 1.45,
          color: 'var(--gpm-ink-display)',
          flex: 1,
        }}
      >
        {label}
      </dt>
      <dd
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          fontWeight: 600,
          lineHeight: 1.45,
          color: 'var(--gpm-ink-display)',
          fontFeatureSettings: '"tnum"',
          margin: 0,
          flexShrink: 0,
        }}
      >
        {value}
      </dd>
    </div>
  )
}
