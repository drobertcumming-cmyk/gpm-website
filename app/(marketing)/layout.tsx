import { SiteHeader, SiteFooter } from '@/components/nav'

// Marketing-segment shared layout. Wraps the homepage and every Phase 2
// imported page with consistent chrome.
//
// Structure (top to bottom):
//   0. Skip-to-main link   — first focusable element on the page; visually
//                            hidden until focused. WCAG 2.1 AA bypass-blocks.
//   1. SiteHeader          — wordmark + primary nav + advisor button.
//   2. <main>              — page content via the {children} slot.
//   3. SiteFooter          — four-column footer per v3.6 §13.
//
// The pre-launch banner mechanism (PreLaunchBanner / TopBanner) was
// removed on 2026-04-30 per CMO direction. Compliance flags on
// individual pages (homepage.meta.ts, lib/route-meta.ts, MDX
// frontmatter) remain in place as tracking metadata for the open
// items in LAUNCH_BLOCKERS.md, but no UI element renders from them.
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
      <SiteHeader />
      <main id="main" tabIndex={-1}>{children}</main>
      <SiteFooter />
    </>
  )
}
