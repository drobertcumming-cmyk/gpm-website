import type { ReactNode } from 'react'

// Editorial line length for body prose (640px max).
// Reference: DESIGN_BRIEF.md Section 12.4 and 13.4.
export function ProseContainer({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-prose">{children}</div>
}
