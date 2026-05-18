'use client'

import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { CTAButton } from '@/components/cta'
import { Logomark } from './Logomark'
import { MobileMenuPanel } from './MobileMenuPanel'

// Production-brief homepage SiteHeader.
// Locked nav grammar (2026-05-18):
//   Left:  Logo
//   Mid:   4 text links — Pricing · Gold IRA▾ · Who We Are · Resources
//   Right: 2 CTAs — Get the Briefing (tier 3) · Talk to an Advisor (tier 1)
//
// "Gold IRA" is a dropdown trigger whose label routes to /rollover and whose
// child menu carries the three pillar pages: How It Works (/rollover),
// Why Invest (/why-invest), FAQs (/faq). Parent is "active" when any of the
// three children is the current page.
//
// Reference: production brief §1; homepage_copy_v3_6.md §1.

export interface NavChild {
  label: string
  href: string
}
export interface NavItem {
  label: string
  href: string
  children?: ReadonlyArray<NavChild>
}

const PRIMARY_NAV: ReadonlyArray<NavItem> = [
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Gold IRA',
    href: '/rollover',
    children: [
      { label: 'How It Works', href: '/rollover' },
      { label: 'Why Invest', href: '/why-invest' },
      { label: 'FAQs', href: '/faq' },
    ],
  },
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

  const isCurrent = (item: NavItem) => {
    if (pathname === item.href) return true
    if (item.href !== '/' && pathname.startsWith(item.href + '/')) return true
    if (item.children) {
      return item.children.some(
        (c) => pathname === c.href || (c.href !== '/' && pathname.startsWith(c.href + '/')),
      )
    }
    return false
  }

  const isChildCurrent = (c: NavChild) =>
    pathname === c.href || (c.href !== '/' && pathname.startsWith(c.href + '/'))

  return (
    <>
      {/* Header is full-viewport-width band (w-full). Inner container shared
          with PricingHero (max-w-[1440px] mx-auto px-8) so logo and hero
          content share the same left edge at any viewport. */}
      <header
        className="w-full sticky top-0 z-30 bg-canvas"
        style={{ borderBottom: '0.5px solid rgba(184, 150, 46, 0.18)' }}
      >
        <div className="mx-auto max-w-[1440px] px-8 flex justify-between items-center h-16">
          {/* LEFT — Logo pinned to far left */}
          <Logomark size={26} />

          {/* RIGHT — Nav + CTA cluster */}
          <div className="hidden lg:flex items-center" style={{ gap: 32 }}>
            <nav
              aria-label="Primary"
              className="flex items-center"
              style={{ gap: 32 }}
            >
              {PRIMARY_NAV.map((item) =>
                item.children ? (
                  <NavDropdown
                    key={item.href}
                    item={item}
                    isCurrent={isCurrent(item)}
                    isChildCurrent={isChildCurrent}
                  />
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isCurrent(item) ? 'page' : undefined}
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
                ),
              )}
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

// ===== NavDropdown =====
// Desktop-only dropdown for nav items with children. Opens on hover,
// keyboard focus, or click. Closes on Escape, outside click, or focus leave.
// The parent label is both a link (routes to item.href on click outside the
// caret) and a trigger (caret toggles on click). Keyboard users can Tab
// through the parent → caret → children, or use arrow keys within the menu.

interface NavDropdownProps {
  item: NavItem
  isCurrent: boolean
  isChildCurrent: (c: NavChild) => boolean
}

function NavDropdown({ item, isCurrent, isChildCurrent }: NavDropdownProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  // Close on outside click
  useEffect(() => {
    if (!open) return
    function handlePointer(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('pointerdown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('pointerdown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        // Close if focus left the entire dropdown
        if (!rootRef.current?.contains(e.relatedTarget as Node)) {
          setOpen(false)
        }
      }}
    >
      <Link
        href={item.href}
        aria-current={isCurrent ? 'page' : undefined}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        className="gpm-link-nav inline-flex items-center"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 15,
          fontWeight: 500,
          letterSpacing: 0,
          gap: 6,
        }}
      >
        {item.label}
        <span
          aria-hidden="true"
          style={{
            display: 'inline-block',
            width: 7,
            height: 7,
            borderRight: '1.5px solid currentColor',
            borderBottom: '1.5px solid currentColor',
            transform: open
              ? 'rotate(225deg) translate(-1px, -1px)'
              : 'rotate(45deg) translate(-1px, -1px)',
            transition: 'transform 0.18s ease',
          }}
        />
      </Link>
      <div
        id={menuId}
        role="menu"
        aria-label={`${item.label} submenu`}
        style={{
          position: 'absolute',
          top: 'calc(100% + 6px)',
          left: -16,
          minWidth: 200,
          background: 'var(--gpm-canvas)',
          border: '0.5px solid rgba(184, 150, 46, 0.45)',
          borderRadius: 4,
          padding: '8px 0',
          boxShadow: '0 8px 24px rgba(61, 40, 23, 0.10)',
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
          transform: open ? 'translateY(0)' : 'translateY(-4px)',
          transition:
            'opacity 0.18s ease, transform 0.18s ease, visibility 0s linear ' +
            (open ? '0s' : '0.18s'),
          zIndex: 50,
        }}
      >
        {item.children!.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            role="menuitem"
            aria-current={isChildCurrent(c) ? 'page' : undefined}
            style={{
              display: 'block',
              padding: '10px 18px',
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              fontWeight: 500,
              color: 'var(--gpm-walnut)',
              textDecoration: 'none',
              background: isChildCurrent(c) ? 'rgba(184, 150, 46, 0.08)' : 'transparent',
            }}
          >
            {c.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
