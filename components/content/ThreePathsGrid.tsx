import { EntryCardGrid, type EntryCardItem } from './EntryCardGrid'

// ThreePathsGrid — Block 8 of the homepage. Section heading above an
// EntryCardGrid of three segment-specific paths, each tagged "Path N".
//
// Reference: DESIGN_BRIEF.md Section 18.2 (Three-paths block) +
// fragments Block 8.

interface ThreePathsGridProps {
  heading: string
  paths: ReadonlyArray<EntryCardItem>
}

export function ThreePathsGrid({ heading, paths }: ThreePathsGridProps) {
  return (
    <section aria-label={heading}>
      <h2 className="text-h2 text-ink-display max-w-prose">{heading}</h2>
      <div className="mt-8">
        <EntryCardGrid items={paths} />
      </div>
    </section>
  )
}
