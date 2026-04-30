import Link from 'next/link'

// TrustBlock — Block 5 of the homepage. Three short architectural lines on
// canvas with a hairline gold rule above and below the group. Each line is
// a single operational fact linking to the corresponding subsection of
// /who-we-are/compliance. No card surface, no badges, no logos. Refusal of
// category-default badge salad (brief Section 3, Refusal 6).
//
// PENDING COUNSEL REVIEW (2026-04-28): the three line strings below
// ("IRS-approved custodian for Gold IRA holdings", "IRS-approved
// depository for storage", "State dealer licensing where required") are
// placeholder copy authored during the structural restructure from
// single-paragraph to three-line list. They are NOT from v3.5 launch
// copy. The structural form (three lines bracketed by hairlines, each
// linking to its compliance subsection) is per brief Section 18.2 and
// stays as-is. The copy itself requires counsel review before launch —
// custodian and depository naming is contract-dependent (Architecture
// Decision 1) and the state-licensing line depends on the final state
// list (open decision per Section 38).
//
// Reference: DESIGN_BRIEF.md Section 18.2 (Trust architecture block).

interface TrustLine {
  label: string
  href: string
}

const LINES: ReadonlyArray<TrustLine> = [
  {
    label: 'IRS-approved custodian for Gold IRA holdings',
    href: '/who-we-are/compliance#custodian',
  },
  {
    label: 'IRS-approved depository for storage',
    href: '/who-we-are/compliance#depository',
  },
  {
    label: 'State dealer licensing where required',
    href: '/who-we-are/compliance#state-licensing',
  },
]

export function TrustBlock() {
  return (
    <section aria-label="On the record">
      <div aria-hidden="true" className="bg-gold w-full h-[0.5px]" />
      <div className="pt-8 lg:pt-10">
        <h2 className="text-h2 text-walnut">On the record.</h2>
        <p className="text-body-sm text-walnut mt-3">
          Independently held, properly registered, publicly verifiable.
        </p>
      </div>
      <ul className="py-8 lg:py-10 space-y-4">
        {LINES.map((line) => (
          <li key={line.href}>
            <Link
              href={line.href}
              className="text-body text-ink-body no-underline hover:underline transition-colors"
              style={{
                textDecorationThickness: '0.5px',
                textUnderlineOffset: 4,
              }}
            >
              {line.label}{' '}
              <span aria-hidden="true" className="text-gold-deep ml-1">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div aria-hidden="true" className="bg-gold w-full h-[0.5px]" />
    </section>
  )
}
