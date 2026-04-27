import type { ReactNode } from 'react'

// Content blocks with sidebars or supporting visuals (880px max).
// Reference: DESIGN_BRIEF.md Section 12.4 and 13.4.
export function ContentContainer({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-content">{children}</div>
}
