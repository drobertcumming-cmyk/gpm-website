// Homepage metadata. Plays the same role as MDX frontmatter on imported
// pages: drives the pre-launch banner via lib/route-meta.ts and is available
// to the page composition for any future metadata needs.
//
// The page lives in TSX (composed from React components) rather than MDX, so
// this file is the single source of truth for its compliance state. Update
// this file when claims on the homepage change; lib/route-meta.ts mirrors
// the complianceFlags array via direct import.
//
// Reference: DESIGN_BRIEF.md Section 37.3 (frontmatter schema) and Block 9
// of homepage_copy_fragments_v3_5.md for the substantiation context behind
// each flag.

export const homepageMeta = {
  title: 'Grace Precious Metals — The Gold IRA with a Published Price',
  description:
    'A typical Gold IRA costs about a third more than Grace. Our spread is 11.1% all-in — no admin fee, no setup fee, buyback at spot. Pastor-led, salaried advisors, standard bullion only.',
  slug: '',
  template: 'homepage',
  eyebrow: 'Proverbs 11:1',
  author: 'Grace Precious Metals',
  date: '2026-04-27',
  counselReviewDate: '2026-04-27',
  complianceFlags: [
    'external-counsel-review-required',
    'pending-counsel-reclearance-prior-role-phrasing',
    'william-non-compete-genesis-exposure',
    'cfo-signoff-required-on-publication',
    'comparative-claim-substantiation-file-applies',
  ],
} as const

export const homepageFlags: readonly string[] = homepageMeta.complianceFlags
