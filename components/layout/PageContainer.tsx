import type { ReactNode } from 'react'

// Outer page maximum (1440px). Centers content; full viewport width below.
// Reference: DESIGN_BRIEF.md Section 12.4 and 13.4.
export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-page px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}
