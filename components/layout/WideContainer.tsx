import type { ReactNode } from 'react'

// Hero sections, image grids, expanded content blocks (1200px max).
// Reference: DESIGN_BRIEF.md Section 12.4 and 13.4.
export function WideContainer({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-wide">{children}</div>
}
