// MDX rendering utilities. Stub for Phase 1 — full implementation follows
// the v3.5 MDX content drop in Phase 2.
// Reference: DESIGN_BRIEF.md Section 37.3 (MDX frontmatter schema).

export interface ContentFrontmatter {
  title: string
  slug: string
  description: string
  template:
    | 'pillar-hub'
    | 'supporting-article'
    | 'narrative-testimony'
    | 'compliance-disclosure'
    | 'homepage'
    | 'briefing-landing'
    | 'faq'
    | 'contact'
    | 'legal'
    | 'reviews'
    | 'sitemap'
    | 'rollover-sub'
    | 'who-we-are-parent'
    | 'advisor'
  eyebrow?: string
  author?: string
  date: string
  counselReviewDate?: string
  complianceFlags?: string[]
  ogImage?: string
  targetKeyword?: string
}
