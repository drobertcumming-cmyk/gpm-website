import { SiteHeader, SiteFooter } from '@/components/nav'
import { TopBanner } from '@/components/compliance/TopBanner'

// Marketing-segment shared layout. Wraps the homepage and every Phase 2
// imported page with consistent chrome.
//
// Structure (top to bottom):
//   0. Skip-to-main link   — first focusable element on the page; visually
//                            hidden until focused. WCAG 2.1 AA bypass-blocks.
//   1. TopBanner    — Client Component; renders PreLaunchBanner above all else
//                     when the route's complianceFlags include a trigger flag.
//   2. SiteHeader   — wordmark + primary nav + advisor button.
//   3. <main>       — page content via the {children} slot.
//   4. SiteFooter   — four-column footer per v3.6 §13.
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <a href="#main" className="gpm-skip-link">
        Skip to main content
      </a>
      <TopBanner />
      <SiteHeader />
      <main id="main" tabIndex={-1}>{children}</main>
      <SiteFooter />
    </>
  )
}
