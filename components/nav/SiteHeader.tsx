'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { CTAButton } from '@/components/cta'
import { Logomark } from './Logomark'

// Persistent header. Cream canvas, walnut text, wordmark left, four primary
// nav links right, two-button right-side CTA pattern: "Get the Briefing"
// (secondary outline walnut) + "Talk to an advisor" (primary walnut).
// Mobile breakpoint: hamburger toggle reveals a full-screen takeover with
// stacked nav and both CTAs at the bottom.
//
// Reference: DESIGN_BRIEF.md Section 14.1. The four primary pillars are
// /pricing, /rollover, /who-we-are, /advisor. /advisor appears as both a
// primary nav link (exploration) and a primary button (conversion); the
// redundancy is intentional. Resources lives in the footer.

const PRIMARY_NAV: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Rollover', href: '/rollover' },
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Advisor', href: '/advisor' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isCurrent = (href: string) =>
    pathname === href ||
    (href !== '/' && pathname.startsWith(href + '/'))

  return (
    <header className="bg-canvas border-b-[1px] border-border-light">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Logomark size={22} />

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-8"
          >
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? 'page' : undefined}
                className="text-body text-walnut no-underline hover:underline hover:text-walnut"
                style={{
                  textDecorationThickness: '0.5px',
                  textUnderlineOffset: 3,
                }}
              >
                {item.label}
              </Link>
            ))}
            <CTAButton href="/briefing" variant="secondary">
              Get the Briefing
            </CTAButton>
            <CTAButton href="/advisor" variant="primary">
              Talk to an advisor
            </CTAButton>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-12 w-12 text-walnut"
            style={{ minWidth: 44, minHeight: 44 }}
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
              {mobileOpen ? (
                <path d="M6 6 L18 18 M18 6 L6 18" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" strokeLinecap="round" />
                  <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
                  <line x1="4" y1="17" x2="20" y2="17" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile takeover */}
      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="lg:hidden bg-ink-display"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 50,
            overflowY: 'auto',
          }}
        >
          <div className="mx-auto max-w-page px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <Logomark variant="reverse" size={22} />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="inline-flex items-center justify-center h-12 w-12 text-canvas"
                style={{ minWidth: 44, minHeight: 44 }}
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
                  <path d="M6 6 L18 18 M18 6 L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav
              aria-label="Primary mobile"
              className="flex flex-col gap-6 mt-12"
            >
              {PRIMARY_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-h3 text-canvas no-underline hover:no-underline"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-4">
                <CTAButton
                  href="/briefing"
                  variant="secondary"
                  tone="inverse"
                  onClick={() => setMobileOpen(false)}
                >
                  Get the Briefing
                </CTAButton>
                <CTAButton
                  href="/advisor"
                  variant="primary"
                  tone="inverse"
                  onClick={() => setMobileOpen(false)}
                >
                  Talk to an advisor
                </CTAButton>
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  )
}
