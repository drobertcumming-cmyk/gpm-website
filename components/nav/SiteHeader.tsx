'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { CTAButton } from '@/components/cta'
import { Logomark } from './Logomark'
import { MobileMenuPanel } from './MobileMenuPanel'

// Production-brief homepage SiteHeader (post-2026-04-29 Option A).
// Sticky header, full-bleed canvas, 1280px inner, hairline gold rule between
// nav cluster and CTA cluster on desktop. Mobile: logo + Tier 1 gold-filled
// "Talk to an advisor" + hamburger; hamburger opens an 80vw side-panel from
// the right with focus trap.
//
// Reference: production brief §1; homepage_copy_v3_6.md §1.

const PRIMARY_NAV: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Rollover', href: '/rollover' },
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Resources', href: '/resources' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const wasOpenRef = useRef(false)

  // Return focus to the hamburger when the panel closes.
  useEffect(() => {
    if (wasOpenRef.current && !mobileOpen) {
      hamburgerRef.current?.focus()
    }
    wasOpenRef.current = mobileOpen
  }, [mobileOpen])

  const isCurrent = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href + '/'))

  return (
    <>
      {/* Header is full-viewport-width band (w-full). The cream bg-canvas
          extends edge-to-edge regardless of viewport. Content centering
          is handled by the single inner container with max-width 1440 +
          px-8. Header is rendered as a direct child of the page root,
          NOT nested inside any hero or content wrapper. */}
      {/* Header full-bleed band; inner container shared with PricingHero
          (max-w-[1440px] mx-auto px-8) so logo and hero content share
          the same left edge at any viewport. */}
      <header
        className="w-full sticky top-0 z-30 bg-canvas"
        style={{ borderBottom: '0.5px solid rgba(184, 150, 46, 0.18)' }}
      >
        <div className="mx-auto max-w-[1440px] px-8 flex justify-between items-center h-16">
          {/* LEFT — Logo pinned to far left */}
          <Logomark size={26} />

          {/* RIGHT — Nav links grouped immediately left of the CTA pair.
              Nav rhythm: 2rem (32px) between items per spec. CTA pair
              uses 12px gap and sits at the far right edge. The 32px
              gap between nav and CTA group separates the two clusters. */}
          <div className="hidden lg:flex items-center" style={{ gap: 32 }}>
            <nav
              aria-label="Primary"
              className="flex items-center"
              style={{ gap: 32 }}
            >
              {PRIMARY_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                  className="gpm-link-nav"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 15,
                    fontWeight: 500,
                    letterSpacing: 0,
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center" style={{ gap: 12 }}>
              <CTAButton href="/briefing" tier={3}>
                Get the Briefing
              </CTAButton>
              <CTAButton href="/advisor" tier={1}>
                Talk to an Advisor
              </CTAButton>
            </div>
          </div>

          {/* Mobile right cluster */}
          <div className="flex lg:hidden items-center" style={{ gap: 8 }}>
            <CTAButton
              href="/advisor"
              tier={1}
              style={{ fontSize: 12, padding: '8px 16px', borderRadius: 4 }}
            >
              Talk to an advisor
            </CTAButton>
            <button
              ref={hamburgerRef}
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center"
              style={{
                minWidth: 44,
                minHeight: 44,
                width: 44,
                height: 44,
                color: 'var(--gpm-ink-display)',
                background: 'transparent',
                border: 0,
                cursor: 'pointer',
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="3" y1="9" x2="21" y2="9" strokeLinecap="round" />
                <line x1="3" y1="13" x2="21" y2="13" strokeLinecap="round" />
                <line x1="3" y1="17" x2="21" y2="17" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenuPanel
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        nav={PRIMARY_NAV}
      />
    </>
  )
}
