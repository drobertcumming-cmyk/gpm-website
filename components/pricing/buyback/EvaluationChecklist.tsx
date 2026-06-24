// /pricing/buyback — Evaluation Checklist.
// Four numbered questions in a 2×2 grid at md+, single column on
// mobile. 1200 max container shared with sibling sections. Each cell
// is a self-contained card: numbered eyebrow + h4 question (Source
// Serif 4) + answer prose.
//
// Layout shift 2026-05-08: from a single 4-row vertical list (full
// width, hairline-separated rows) → 2×2 card grid using the section's
// 12-col container. Eliminates the long vertical scroll and gives the
// section a "checklist" rhythm rather than "deck of equally-weighted
// rows."
//
// Hierarchy: parent section uses h2; structural-factor cards use h3;
// these question cards use h4 to maintain the deeper hierarchy the
// brief asked for.

interface Item {
  num: string
  question: string
  answer: React.ReactNode
}

const ITEMS: Item[] = [
  {
    num: '01',
    question: '“What is your buyback price relative to spot?”',
    answer: (
      <>
        The answer should be a specific number &mdash; ideally &ldquo;at spot&rdquo; or
        a stated percentage below spot. If the answer is &ldquo;competitive&rdquo; or
        &ldquo;market-based,&rdquo; it means the markdown is discretionary and
        unpublished.
      </>
    ),
  },
  {
    num: '02',
    question: '“Is there a minimum holding period before I can sell?”',
    answer: (
      <>
        Some dealers impose a 12&ndash;24 month holding period during which buyback is
        unavailable or penalized. This locks the customer in and removes competitive
        pressure on the exit price.
      </>
    ),
  },
]

export function EvaluationChecklist() {
  return (
    <div
      className="mx-auto"
      style={{ maxWidth: 1200, marginTop: 36 }}
    >
      <ul
        className="grid grid-cols-1 md:grid-cols-2"
        style={{
          gap: 24,
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {ITEMS.map((it) => (
          <li
            key={it.num}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              padding: '32px 32px 28px',
              background: 'var(--gpm-linen-warm)',
              border: '1px solid var(--gpm-border-light)',
              borderRadius: 4,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--gpm-gold-secondary)',
                letterSpacing: '0.08em',
                margin: 0,
              }}
            >
              {it.num}
            </span>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 18,
                fontWeight: 500,
                color: 'var(--gpm-ink-display)',
                lineHeight: 1.35,
                margin: 0,
                marginBottom: 4,
              }}
            >
              {it.question}
            </h4>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 16,
                fontWeight: 400,
                color: 'var(--gpm-ink-body)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {it.answer}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
