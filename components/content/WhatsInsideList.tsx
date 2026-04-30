// Production-brief homepage §10 — WHAT'S INSIDE list.
// 8 numbered items with hairline gold rules between (and above first /
// below last). Numeral 13px Inter 600 gold-secondary; description 15px
// Source Serif 4 ink-body.
//
// Reference: production brief §10; homepage_copy_v3_6.md §10.

interface Item {
  numeral: string
  description: React.ReactNode
}

const ITEMS: ReadonlyArray<Item> = [
  {
    numeral: '01',
    description: (
      <>
        Grace&rsquo;s pricing in full &mdash; 11.1% spread, no admin fee, buyback at spot &mdash; with the math on a $100,000 rollover.
      </>
    ),
  },
  {
    numeral: '02',
    description: (
      <>How the industry hides its real margin &mdash; the four pricing tactics every commissioned salesperson uses.</>
    ),
  },
  {
    numeral: '03',
    description: (
      <>
        What Grace sells &mdash; standard bullion only. Why we refuse numismatic and &ldquo;rare&rdquo; coins, with the markup math (30&ndash;50%).
      </>
    ),
  },
  {
    numeral: '04',
    description: (
      <>What &ldquo;buyback at spot&rdquo; actually means &mdash; and how to verify any company&rsquo;s policy.</>
    ),
  },
  {
    numeral: '05',
    description: (
      <>The rollover process, step by step &mdash; what you sign, what your custodian handles, what your timeline looks like.</>
    ),
  },
  {
    numeral: '06',
    description: (
      <>The IRS rules that matter &mdash; eligibility, contribution limits, distribution timing, and what changes for inherited accounts.</>
    ),
  },
  {
    numeral: '07',
    description: (
      <>What to ask before you sign &mdash; a one-page checklist of questions for any Gold IRA company, with what good and bad answers look like.</>
    ),
  },
  {
    numeral: '08',
    description: (
      <>
        Grace&rsquo;s structural commitments &mdash; the four operational promises this company is built on, written in plain English.
      </>
    ),
  },
]

export function WhatsInsideList() {
  return (
    <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {ITEMS.map((item, i) => (
        <li
          key={item.numeral}
          style={{
            display: 'flex',
            gap: 12,
            padding: '12px 0',
            borderTop: '0.5px solid rgba(184, 143, 47, 0.35)',
            borderBottom:
              i === ITEMS.length - 1 ? '0.5px solid rgba(184, 143, 47, 0.35)' : 'none',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--gpm-gold-secondary)',
              flexShrink: 0,
              minWidth: 24,
            }}
          >
            {item.numeral}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 1.55,
              color: 'var(--gpm-ink-body)',
            }}
          >
            {item.description}
          </span>
        </li>
      ))}
    </ol>
  )
}
