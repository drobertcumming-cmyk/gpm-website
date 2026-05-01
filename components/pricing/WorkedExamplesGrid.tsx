import { CategoryComparison } from './CategoryComparison'

// /pricing §6 — Worked examples on three rollover amounts.
// Three-column grid at lg, single column below. Hairline column dividers
// at desktop. Each panel: header ($X), line items (dashed bottom borders),
// total row (solid top border), exit-cost callout in linen-warm with 2px
// gold-primary left rule.
//
// CategoryComparison renders inside this section (not a sibling), per
// brief.
//
// Reference: v3.5 Section 1 "What the numbers look like on a real
// rollover" + "The comparison, at category level". Custodian/depository
// sample fees are CFO-substantiation pending; flag in PR description.

interface WorkedExample {
  amountLabel: string
  rollover: string
  entryLabel: string
  entry: string
  custodian: string
  depository: string
  total: string
}

const EXAMPLES: WorkedExample[] = [
  {
    amountLabel: '$75,000',
    rollover: '$75,000',
    entryLabel: '11.1% of $75,000',
    entry: '$8,325',
    custodian: '$175',
    depository: '$500',
    total: '$9,000',
  },
  {
    amountLabel: '$150,000',
    rollover: '$150,000',
    entryLabel: '11.1% of $150,000',
    entry: '$16,650',
    custodian: '$175',
    depository: '$1,000',
    total: '$17,825',
  },
  {
    amountLabel: '$250,000',
    rollover: '$250,000',
    entryLabel: '11.1% of $250,000',
    entry: '$27,750',
    custodian: '$175',
    depository: '$1,700',
    total: '$29,625',
  },
]

export function WorkedExamplesGrid() {
  return (
    <section
      aria-labelledby="worked-examples-heading"
      className="mx-auto"
      style={{
        maxWidth: 1200,
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 96,
        paddingBottom: 96,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 880 }}>
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
          WORKED EXAMPLES
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
          What the numbers look like on a real rollover.
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
          For readers who want to see the math on their own situation, here are three
          worked examples. These use the 11.1% spread and sample custodian/depository
          figures. Your specific custodian fee, depository fee, and timing may produce a
          different total &mdash; the figures below are representative, not a quote.
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

        <CategoryComparison />
      </div>
    </section>
  )
}

function ExamplePanel({ example, isFirst }: { example: WorkedExample; isFirst: boolean }) {
  return (
    <div
      style={{
        padding: 24,
        // Vertical hairlines between columns at lg only — apply via inline
        // border because Tailwind's lg:border-l would interfere with the
        // wrapper's top/bottom rules.
        borderLeft: isFirst ? 'none' : undefined,
      }}
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
        <LineItem label={`Grace entry cost (${example.entryLabel})`} value={example.entry} />
        <LineItem
          label="Custodian setup and year-one annual fee (sample)"
          value={example.custodian}
        />
        <LineItem
          label="Depository year-one storage fee (sample, 0.75% of holdings)"
          value={example.depository}
        />
        <TotalRow label="Year-one total cost to you" value={example.total} />
      </dl>

      {/* Exit cost callout — linen-warm, gold-primary left rule */}
      <div
        style={{
          marginTop: 20,
          background: 'var(--gpm-linen-warm)',
          borderLeft: '2px solid var(--gpm-gold-primary)',
          padding: '14px 16px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11.5,
            fontWeight: 400,
            lineHeight: 1.55,
            color: 'var(--gpm-ink-body)',
            margin: 0,
          }}
        >
          <span style={{ fontWeight: 500, color: 'var(--gpm-gold-deep)' }}>
            $0 markup.
          </span>{' '}
          Exit cost at Grace when you sell back: you receive the spot price on the metals
          on the day of the buyback.
        </p>
      </div>
    </div>
  )
}

function LineItem({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 12,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottom: '1px dashed var(--gpm-border-light)',
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
        paddingTop: 14,
        paddingBottom: 4,
        borderTop: '1px solid var(--gpm-ink-display)',
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
