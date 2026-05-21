import { ResourcesPage } from './ResourcesPage'

// /resources — Resources Library hub
//
// TSX port of resources.html boilerplate (production design template).
// Replaces the prior MDX stub. Page sits inside the (marketing) route
// group so SiteHeader, <main> wrapper, and SiteFooter are inherited
// from app/(marketing)/layout.tsx.
//
// The page is a client component because it carries interactivity:
//   1. Topic filtering — clicking a rail link or mobile strip filter
//      shows/hides sections by data-section attribute.
//   2. Newsletter form — client-side validation simulation, same
//      pattern as /advisor and /briefing (real Klaviyo wiring
//      follows once production hosting is locked).
//
// metadata stays in this server wrapper so Next.js can read it at
// build time; the client component handles everything else.

export const metadata = {
  title: 'Resources',
  description:
    'Long-form pieces on how a Gold IRA works, what it costs, what you can hold, and how to think about it inside a retirement portfolio. Written to be read once and trusted, not skimmed and forgotten.',
}

export default function Page() {
  return <ResourcesPage />
}
