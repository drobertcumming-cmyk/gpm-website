import { EntryCard } from './EntryCard'

// EntryCardGrid — three EntryCard items, horizontal at desktop, stacked at
// mobile. Surface color cards, no carousel, no rotation, no featured styling.
// Three equal-weight doors per the brief.
//
// Reference: DESIGN_BRIEF.md Section 14.3 (EntryCard) and Section 18.2.

export interface EntryCardItem {
  title: string
  body: string
  linkLabel: string
  linkHref: string
  tag?: string
}

interface EntryCardGridProps {
  items: ReadonlyArray<EntryCardItem>
}

export function EntryCardGrid({ items }: EntryCardGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <EntryCard key={item.linkHref + item.title} {...item} />
      ))}
    </div>
  )
}
