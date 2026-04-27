import type { ReactNode } from 'react'

// Vertical-rhythm wrapper for sections within a page.
// Default rhythm: space-12 mobile, space-16 desktop.
// Reference: DESIGN_BRIEF.md Section 13.2 and 13.4.
export function SectionContainer({
  children,
  as: Tag = 'section',
}: {
  children: ReactNode
  as?: 'section' | 'div' | 'article' | 'aside' | 'header' | 'footer'
}) {
  return <Tag className="py-12 lg:py-16">{children}</Tag>
}
