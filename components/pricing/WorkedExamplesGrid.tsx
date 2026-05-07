import { ContentContainer } from '@/components/layout'
import { CategoryComparison } from './CategoryComparison'

// /pricing §6 — Worked examples (v3.5.1, Delta #3).
// Three-panel grid. Each panel shows Grace-only entry math: the rollover
// amount, the 11.1% spread, the bullion delivered to the vault, and the
// zero-fee rows (admin / setup / annual) which render at reduced alpha
// but remain semantically present and accessible. The total is Grace's
// spread only — third-party custodian and depository fees live in the
// TwoCostsCallout panel above and the footnote below the grid.
//
// CategoryComparison renders inside this section (not a sibling).
//
// Reference: GPM_Pricing_ClaudeCode_Brief_v2; v3.5.1 "Worked examples".

interface Row {
  label: string
  /** Render at reduced alpha to visually quiet zero-fee rows while
   *  keeping them semantically present and accessible (≥ 4.5:1). */
  zero?: boolean
}

interface WorkedExample {
  amountLabel: string
  rollover: string
  graceSpread: string
  bullion: string
  total: string
}

const EXAMPLES: WorkedExample[] = [
  { amountLabel: '$75,000',  rollover: '$75,000',  graceSpread: '$8,325',  bullion: '$66,675',  total: '$8,325' },
  { amountLabel: '$150,000', rollover: '$150,000', graceSpread: '$16,650', bullion: '$133,350', total: '$16,650' },
  { amountLabel: '$250,000', rollover: '$250,000', graceSpread: '$27,750', bullion: '$222,250', total: '$27,750' },
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
      <ContentContainer>
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
            marginBottom: 16,
          }}
        >
          On a real rollover.
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(16px, 1.4vw, 17px)',
            fontWeight: 400,
            lineHeight: 1.65,
            color: 'var(--gpm-ink-body)',
            margin: 0,
            marginBottom: 56,
            maxWidth: 640,
          }}
        >
          For readers who want to see the math on their own situation. These use the
          11.1% spread and the partner sample figures from the panel above. Your specific
          custodian fee, depository fee, and timing may produce a different total
          &mdash; the figures below are representative, not a quote.
        </p>

        {/* Grid wrapper — top + bottom hairlines bracket the panels */}
        <div
          style={{
            borderTop: '0.5px solid var(--gpm-border-light)',
            borderBottom: '0.5px solid var(--gpm-border-light)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {EXAMPLES.map((ex, i) => (
              <ExamplePanel key={ex.amountLabel} example={ex} isFirst={i === 0} />
            ))}
          </div>
        </div>

        {/* Footnote beneath the grid */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 11.5,
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'rgba(45, 38, 32, 0.70)',
            margin: '24px 0 0',
            maxWidth: 540,
          }}
        >
          Custodian and depository fees are not included in the entry cost above
          &mdash; they are billed by those parties directly. Sample figures: custodian
          ~$175/year, depository ~0.75% of holdings/year. Your specific custodian and
          depository will quote their own.
        </p>

        <CategoryComparison />
      </ContentContainer>
    </section>
  )
}

function ExamplePanel({ example, isFirst }: { example: WorkedExample; isFirst: boolean }) {
  return (
    <div
      style={{ padding: 24 }}
      className={isFirst ? '' : 'lg:border-l lg:border-[color:var(--gpm-border-light)]/50'}
    >
      <h3
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '0.14em',
          color: 'var(--gpm-gold-secondary)',
          marginBottom: 8,
        }}
      >
        ROLLOVER OF
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
        <LineItem label="Annual fee (to Grace)" value="$0" zero />
        <TotalRow label="Total entry cost (to Grace)" value={example.total} />
      </dl>

      {/* Exit cost callout — linen-warm, gold-primary left rule */}
      <div
        style={{
          marginTop: 20,
          background: 'var(--gpm-linen-warm)',
          borderLeft: '2px solid var(--gpm-gold-primary)',
          padding: '12px 14px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            fontWeight: 400,
            lineHeight: 1.55,
            color: 'var(--gpm-ink-body)',
            margin: 0,
          }}
        >
          <span style={{ fontWeight: 500, color: 'var(--gpm-gold-deep)' }}>$0 markup.</span>{' '}
          Buyback at spot on the day of sale.
        </p>
      </div>
    </div>
  )
}

function LineItem({ label, value, zero = false }: Row & { value: string }) {
  // Zero-fee rows render at reduced alpha — semantically present, visually
  // quiet. Both label and value drop in alpha together to maintain ≥ 4.5:1
  // against canvas (cream).
  const alpha = zero ? 0.55 : 1
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
