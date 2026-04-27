import { SiteHeader, SiteFooter } from '@/components/nav'
import { TopBanner } from '@/components/compliance/TopBanner'

// Marketing-segment shared layout. Wraps the homepage and every Phase 2
// imported page with consistent chrome.
//
// Structure (top to bottom):
//   1. TopBanner    — Client Component; renders PreLaunchBanner above all else
//                     when the route's complianceFlags include a trigger flag.
//   2. SiteHeader   — wordmark + primary nav + advisor button.
//   3. <main>       — page content via the {children} slot.
//   4. SiteFooter   — four-column footer per Block 10 of the fragments.
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <TopBanner />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}
