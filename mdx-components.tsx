import type { MDXComponents } from 'mdx/types'

// Required by @next/mdx for App Router. Step 3 directive: render raw MDX,
// no template wrapping, no design tokens. Returns the default component map
// untouched so MDX content renders with browser defaults.
//
// When Phase 2 review is complete, this file is the seam for mapping MDX
// elements to brand components (DESIGN_BRIEF.md Section 14).
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components }
}
