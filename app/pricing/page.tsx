import { SiteHeader, SiteFooter } from '@/components/nav'
import Content from '@/content/pricing/page.mdx'

// /pricing page shell (v3.5.1).
// Imports SiteHeader, SiteFooter, MDX content per
// GPM_Pricing_ClaudeCode_Brief_v2.docx.
//
// The MDX content composes the section components in v3.5.1 order. Skip
// link + <main> wrapper provide the accessibility landmarks that the
// (marketing) layout would have provided; this page sits outside the
// route group per brief.

// Title intentionally bare — root layout adds the " — Grace Precious
// Metals" suffix via its title template; including the suffix here
// would render it twice in the document <title>.
export const metadata = {
  title: 'Our Pricing',
  description:
    'Our spread on gold is 11.1%, all-in. No admin fee. No setup fee. Buyback at spot, never below. Published before you call.',
}

export default function PricingPage() {
  return (
    <>
      <a href="#main" className="gpm-skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Content />
      </main>
      <SiteFooter />
    </>
  )
}
