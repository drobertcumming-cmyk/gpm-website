'use client'

import Link from 'next/link'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { CTAButton } from '@/components/cta'
import { Logomark } from './Logomark'
import { MobileMenuPanel } from './MobileMenuPanel'

// Production-brief SiteHeader — sitewide navigation system.
//
// Locked nav grammar (2026-05-18, dropdown-demo.html spec):
//   Left:   Logo
//   Mid:    Pricing▾ · Gold IRA▾ · Who we are▾ · Resources
//   Right:  Get the Briefing (tier 3 outline) · Talk to an Advisor (tier 1 gold-solid)
//
// Three rich dropdown panels (Pricing, Gold IRA, Who we are) and one plain
// link (Resources). Each rich panel renders an eyebrow + hairline + a stack
// of items with title / description / arrow, with an optional footer link.
//
// Interaction model:
//   - Hover open with 150ms debounce / 80ms close debounce (Fitts's-Law-
//     friendly: prevents accidental flash-open on diagonal mouse passes
//     and keeps the panel open through brief edge-of-target wobbles).
//   - Whole-item anchor — every <a class="dropdown-item"> wraps the
//     title, description, and arrow so the entire row is one click target.
//   - Click-toggle on the trigger label is supported for touch.
//   - Keyboard: Tab to focus, Enter/Space opens, Escape closes and returns
//     focus to the trigger, ArrowUp/Down navigate within an open panel.
//   - aria-haspopup="menu", dynamic aria-expanded, role="menu"/"menuitem".
//
// Active state: a dropdown parent is "active" when the current pathname
// matches the parent OR any of its child hrefs.

export interface NavChild {
  label: string
  href: string
  description: string
}
export interface NavFooter {
  label: string
  href: string
}
export interface NavItem {
  label: string
  href: string
  eyebrow?: string
  children?: ReadonlyArray<NavChild>
  footer?: NavFooter
}

const PRIMARY_NAV: ReadonlyArray<NavItem> = [
  {
    label: 'Pricing',
    href: '/pricing',
    eyebrow: 'PRICING',
    children: [
      {
        label: 'Buyback at spot',
        href: '/pricing/buyback',
        description:
          'When you sell, we pay you the spot price of gold. No markup, never below spot. The full policy and how the round-trip cost works.',
      },
      {
        label: 'Numismatic coins',
        href: '/pricing/numismatic-coins',
        description:
          'Why we do not sell numismatic, proof, or rare coins, and what to be careful of when other dealers offer them.',
      },
    ],
    footer: { label: 'See full pricing page', href: '/pricing' },
  },
  {
    // Gold IRA pillar dropdown — per CMO direction (2026-05-19),
    // reverted to canonical TSX routes (/rollover, /why-invest, /faq)
    // from the previous /preview/*.html routing (f1626f3). Next.js
    // basePath auto-prepends "/gpm-website" at deploy.
    label: 'Gold IRA',
    href: '/rollover',
    eyebrow: 'GOLD IRA',
    children: [
      {
        label: 'How it works',
        href: '/rollover',
        description:
          'What a Gold IRA is, how you fund it, what you can hold, and how long it takes to set up.',
      },
      {
        label: 'Why invest',
        href: '/why-invest',
        description:
          'The reasons people hold gold in a retirement portfolio, and what gold does and does not do.',
      },
      {
        label: 'FAQs',
        href: '/faq',
        description: 'Twelve questions we get most often, answered in plain language.',
      },
    ],
  },
  {
    label: 'Who we are',
    href: '/who-we-are',
    eyebrow: 'WHO WE ARE',
    children: [
      {
        label: 'The founders',
        href: '/who-we-are',
        description:
          'The three people who built Grace Precious Metals — William Armour, Andrew Armour, Duncan Cumming.',
      },
      {
        label: "William's story",
        href: '/who-we-are/williams-story',
        description:
          "William Armour's testimony — why he started Grace, in his own voice.",
      },
      {
        label: 'How we operate',
        href: '/who-we-are/how-we-operate',
        description:
          'Licensing, custody, advisor pay, pricing governance, complaints, and what we do with your data.',
      },
      {
        label: 'Our Brand Ambassador',
        href: '/who-we-are/brand-ambassador',
        description:
          'Marjorie Taylor Greene on why she stands with Grace, and the shared ground that made the partnership.',
      },
    ],
  },
  { label: 'Resources', href: '/resources' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const wasOpenRef = useRef(false)

  useEffect(() => {
    if (wasOpenRef.current && !mobileOpen) hamburgerRef.current?.focus()
    wasOpenRef.current = mobileOpen
  }, [mobileOpen])

  // Close the active dropdown on route change. Without this, navigating
  // via a child link leaves the panel open under the new page.
  useEffect(() => {
    setOpenDropdownId(null)
  }, [pathname])

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
      <header
        className="w-full sticky top-0 z-30 bg-canvas"
        style={{ borderBottom: '0.5px solid rgba(184, 150, 46, 0.18)' }}
      >
        <div className="mx-auto max-w-[1440px] px-8 flex justify-between items-center h-16">
          <Logomark size={26} />

          <div className="hidden lg:flex items-center" style={{ gap: 32 }}>
            <nav
              aria-label="Primary"
              className="flex items-center"
              style={{ gap: 32 }}
            >
              {PRIMARY_NAV.map((item) =>
                item.children ? (
                  <NavDropdownPanel
                    key={item.href}
                    item={item}
                    isCurrent={isCurrent(item)}
                    isChildCurrent={isChildCurrent}
                    isOpen={openDropdownId === item.href}
                    onRequestOpen={() => setOpenDropdownId(item.href)}
                    onRequestClose={() =>
                      setOpenDropdownId((current) => (current === item.href ? null : current))
                    }
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

// ===== NavDropdownPanel =====
// Rich dropdown panel — CONTROLLED by SiteHeader's openDropdownId state.
// Only one panel can be open at any moment by construction (a single
// source of truth at the parent level), which eliminates the
// hover-between-triggers overlap bug.
//
// Open on hover (150ms debounced), click-toggle, or keyboard focus.
// Close 80ms after mouseleave, immediately on outside click or Escape.
// Arrow keys navigate within the panel.

interface NavDropdownPanelProps {
  item: NavItem
  isCurrent: boolean
  isChildCurrent: (c: NavChild) => boolean
  isOpen: boolean
  onRequestOpen: () => void
  onRequestClose: () => void
}

const OPEN_DELAY_MS = 150
const CLOSE_DELAY_MS = 80

function NavDropdownPanel({
  item,
  isCurrent,
  isChildCurrent,
  isOpen,
  onRequestOpen,
  onRequestClose,
}: NavDropdownPanelProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLAnchorElement>(null)
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const menuId = useId()

  const clearTimers = useCallback(() => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current)
      openTimerRef.current = null
    }
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  // Cancel any pending close, then schedule open after the 150ms debounce.
  const scheduleOpen = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    if (isOpen || openTimerRef.current) return
    openTimerRef.current = setTimeout(() => {
      onRequestOpen()
      openTimerRef.current = null
    }, OPEN_DELAY_MS)
  }, [isOpen, onRequestOpen])

  // Cancel any pending open, then schedule close after the 80ms grace.
  const scheduleClose = useCallback(() => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current)
      openTimerRef.current = null
    }
    if (!isOpen) return
    closeTimerRef.current = setTimeout(() => {
      onRequestClose()
      closeTimerRef.current = null
    }, CLOSE_DELAY_MS)
  }, [isOpen, onRequestClose])

  const closeImmediate = useCallback(() => {
    clearTimers()
    onRequestClose()
  }, [clearTimers, onRequestClose])

  // Outside click + Escape
  useEffect(() => {
    if (!isOpen) return
    function handlePointer(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        closeImmediate()
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeImmediate()
        triggerRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('pointerdown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, closeImmediate])

  // Cleanup timers on unmount
  useEffect(() => () => clearTimers(), [clearTimers])

  // Keyboard navigation inside the panel
  const handlePanelKeyDown = (e: React.KeyboardEvent) => {
    const panel = rootRef.current
    if (!panel) return
    const items = Array.from(
      panel.querySelectorAll<HTMLAnchorElement>('a.dropdown-item, a.dropdown-footer-link'),
    )
    const current = document.activeElement as HTMLElement
    const idx = items.indexOf(current as HTMLAnchorElement)
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (idx < items.length - 1) items[idx + 1].focus()
      else items[0]?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (idx > 0) items[idx - 1].focus()
      else triggerRef.current?.focus()
    }
  }

  // Enter/Space on the trigger opens the panel and focuses the first item
  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (!isOpen) {
        clearTimers()
        onRequestOpen()
        // focus first item next tick
        setTimeout(() => {
          rootRef.current?.querySelector<HTMLAnchorElement>('a.dropdown-item')?.focus()
        }, 0)
      } else {
        closeImmediate()
      }
    }
  }

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={scheduleOpen}
      onMouseLeave={scheduleClose}
      onFocus={() => {
        clearTimers()
        if (!isOpen) onRequestOpen()
      }}
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget as Node)) {
          closeImmediate()
        }
      }}
    >
      <Link
        ref={triggerRef}
        href={item.href}
        aria-current={isCurrent ? 'page' : undefined}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        className="gpm-link-nav inline-flex items-center"
        onKeyDown={handleTriggerKeyDown}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 15,
          fontWeight: 500,
          letterSpacing: 0,
          gap: 6,
          paddingBottom: 2,
          borderBottom: isCurrent ? '0.5px solid var(--gpm-gold-secondary)' : '0.5px solid transparent',
        }}
      >
        {item.label}
        <span
          aria-hidden="true"
          style={{
            display: 'inline-block',
            width: 0,
            height: 0,
            borderLeft: '3.5px solid transparent',
            borderRight: '3.5px solid transparent',
            borderTop: '3.5px solid currentColor',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 180ms ease',
          }}
        />
      </Link>
      <div
        id={menuId}
        role="menu"
        aria-label={`${item.label} submenu`}
        onKeyDown={handlePanelKeyDown}
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          marginTop: 22,
          minWidth: 520,
          maxWidth: 600,
          background: 'var(--gpm-canvas)',
          border: '0.5px solid rgba(61, 40, 23, 0.18)',
          boxShadow: '0 12px 32px rgba(61, 40, 23, 0.10)',
          padding: '32px 36px',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          pointerEvents: isOpen ? 'auto' : 'none',
          transition:
            'opacity 120ms ease, visibility 0s linear ' + (isOpen ? '0s' : '120ms'),
          zIndex: 200,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 10,
            fontWeight: 500,
            color: 'var(--gpm-gold-secondary)',
            letterSpacing: '0.26em',
            lineHeight: 1,
            marginBottom: 14,
          }}
        >
          {item.eyebrow ?? item.label.toUpperCase()}
        </div>
        <div style={{ height: '0.5px', background: 'rgba(61, 40, 23, 0.12)' }} aria-hidden="true" />
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {item.children!.map((c, i, arr) => (
            <li key={c.href}>
              <Link
                href={c.href}
                role="menuitem"
                aria-current={isChildCurrent(c) ? 'page' : undefined}
                className="dropdown-item"
                onClick={closeImmediate}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  padding: '14px 36px',
                  margin: '0 -36px',
                  borderBottom:
                    i === arr.length - 1
                      ? '0'
                      : '0.5px solid rgba(61, 40, 23, 0.12)',
                  textDecoration: 'none',
                  background: 'transparent',
                  transition: 'background 150ms ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.background =
                    'rgba(232, 226, 204, 0.45)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
                }}
              >
                <span style={{ flex: 1, maxWidth: 380 }}>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-serif), Georgia, serif',
                      fontSize: 17,
                      fontWeight: 500,
                      color: 'var(--gpm-walnut-deep)',
                      letterSpacing: '-0.002em',
                      lineHeight: 1.3,
                      marginBottom: 4,
                    }}
                  >
                    {c.label}
                  </span>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-sans), system-ui, sans-serif',
                      fontSize: 13,
                      fontWeight: 400,
                      color: 'var(--gpm-walnut)',
                      lineHeight: 1.5,
                    }}
                  >
                    {c.description}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--font-sans), system-ui, sans-serif',
                    fontSize: 17,
                    color: 'var(--gpm-gold-secondary)',
                    lineHeight: 1.3,
                    marginLeft: 24,
                    flexShrink: 0,
                  }}
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {item.footer ? (
          <div
            style={{
              borderTop: '0.5px solid rgba(61, 40, 23, 0.12)',
              marginTop: 18,
              paddingTop: 14,
            }}
          >
            <Link
              href={item.footer.href}
              className="dropdown-footer-link"
              onClick={closeImmediate}
              style={{
                fontFamily: 'var(--font-sans), system-ui, sans-serif',
                fontSize: 13,
                fontWeight: 500,
                color: 'var(--gpm-gold-secondary)',
                textDecoration: 'underline',
                textUnderlineOffset: 2,
              }}
            >
              {item.footer.label} →
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  )
}
