'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { CTAButton } from '@/components/cta'
import { Logomark } from './Logomark'

// Mobile slide-in side panel for the SiteHeader. Renders only when `open` is
// true. Production brief §1 mobile spec, refined by dropdown-demo.html
// accordion behavior (2026-05-18):
//
//   - Full-screen cream panel from the right (80vw, max 360px).
//   - Logo + close at top.
//   - Nav rows: 44px-minimum touch targets. Items with children show a
//     chevron that rotates 180° on expand. One open at a time — opening
//     a second category closes the first.
//   - Expanded children render in-line below the parent row with eyebrow
//     + hairline + title/description rows mirroring the desktop panel.
//   - Footer: two CTAs stacked, gold-solid "Talk to an Advisor" first,
//     walnut-outline "Get the Briefing" second.

interface NavChild {
  label: string
  href: string
  description?: string
}
interface NavFooter {
  label: string
  href: string
}
interface NavItem {
  label: string
  href: string
  eyebrow?: string
  children?: ReadonlyArray<NavChild>
  footer?: NavFooter
}

interface MobileMenuPanelProps {
  open: boolean
  onClose: () => void
  nav: ReadonlyArray<NavItem>
}

export function MobileMenuPanel({ open, onClose, nav }: MobileMenuPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const isCurrent = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href + '/'))

  const isAnyChildCurrent = (item: NavItem) =>
    item.children?.some((c) => isCurrent(c.href)) ?? false

  // Auto-expand the accordion that contains the current route on open
  useEffect(() => {
    if (!open) return
    const current = nav.find((n) => n.children && (isAnyChildCurrent(n) || isCurrent(n.href)))
    if (current) setOpenAccordion(current.href)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  // Focus first nav row on open
  useEffect(() => {
    if (!open) return
    const first = panelRef.current?.querySelector<HTMLElement>('button.mobile-nav-row, a.mobile-nav-row')
    first?.focus()
  }, [open])

  // Escape to close + Tab focus trap
  useEffect(() => {
    if (!open) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const panel = panelRef.current
      if (!panel) return
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement
      if (e.shiftKey) {
        if (active === first || !panel.contains(active as Node)) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (active === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [open])

  if (!open) return null

  const toggleAccordion = (href: string) => {
    setOpenAccordion((current) => (current === href ? null : href))
  }

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 z-40 lg:hidden"
        style={{ background: 'rgba(45, 38, 32, 0.45)' }}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        id="mobile-nav"
        className="fixed top-0 right-0 bottom-0 z-50 lg:hidden"
        style={{
          width: '80vw',
          maxWidth: 360,
          background: 'var(--gpm-canvas)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
      >
        {/* Header bar */}
        <div
          className="flex items-center justify-between"
          style={{
            padding: '22px 24px',
            borderBottom: '0.5px solid rgba(61, 40, 23, 0.12)',
          }}
        >
          <Logomark size={22} hideTagline />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex items-center justify-center"
            style={{
              minWidth: 44,
              minHeight: 44,
              width: 44,
              height: 44,
              color: 'var(--gpm-walnut-deep)',
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
              <path d="M6 6 L18 18 M18 6 L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav list */}
        <nav
          aria-label="Primary mobile"
          style={{ flex: 1, padding: '16px 0' }}
        >
          {nav.map((item) =>
            item.children ? (
              <MobileAccordionRow
                key={item.href}
                item={item}
                isOpen={openAccordion === item.href}
                isCurrent={isCurrent(item.href) || isAnyChildCurrent(item)}
                onToggle={() => toggleAccordion(item.href)}
                onItemClick={onClose}
                isChildCurrent={isCurrent}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                aria-current={isCurrent(item.href) ? 'page' : undefined}
                className="mobile-nav-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '14px 24px',
                  minHeight: 44,
                  textDecoration: 'none',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 16,
                  fontWeight: 500,
                  color: isCurrent(item.href) ? 'var(--gpm-gold-secondary)' : 'var(--gpm-walnut-deep)',
                }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* CTAs at bottom */}
        <div
          style={{
            padding: 24,
            borderTop: '0.5px solid rgba(61, 40, 23, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <CTAButton href="/preview/advisor.html" tier={1} onClick={onClose} className="w-full block">
            Talk to an Advisor
          </CTAButton>
          <CTAButton href="/briefing" tier={3} onClick={onClose} className="w-full block">
            Get the Briefing
          </CTAButton>
        </div>
      </div>
    </>
  )
}

// ===== MobileAccordionRow =====

interface MobileAccordionRowProps {
  item: NavItem
  isOpen: boolean
  isCurrent: boolean
  onToggle: () => void
  onItemClick: () => void
  isChildCurrent: (href: string) => boolean
}

function MobileAccordionRow({
  item,
  isOpen,
  isCurrent,
  onToggle,
  onItemClick,
  isChildCurrent,
}: MobileAccordionRowProps) {
  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="mobile-nav-row"
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 24px',
          minHeight: 44,
          background: 'transparent',
          border: 0,
          cursor: 'pointer',
          fontFamily: 'var(--font-sans)',
          fontSize: 16,
          fontWeight: 500,
          color: isOpen || isCurrent ? 'var(--gpm-gold-secondary)' : 'var(--gpm-walnut-deep)',
          textAlign: 'left',
        }}
      >
        <span>{item.label}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 180ms ease',
            flexShrink: 0,
          }}
        >
          <polyline points="5 8 10 13 15 8" />
        </svg>
      </button>

      {isOpen ? (
        <div
          role="region"
          aria-label={`${item.label} submenu`}
          style={{ padding: '0 24px 12px 24px' }}
        >
          {item.eyebrow ? (
            <>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 10,
                  fontWeight: 500,
                  color: 'var(--gpm-gold-secondary)',
                  letterSpacing: '0.26em',
                  lineHeight: 1,
                  paddingTop: 8,
                  marginBottom: 10,
                }}
              >
                {item.eyebrow}
              </div>
              <div
                style={{ height: '0.5px', background: 'rgba(61, 40, 23, 0.12)' }}
                aria-hidden="true"
              />
            </>
          ) : null}
          {item.children!.map((c, i, arr) => (
            <Link
              key={c.href}
              href={c.href}
              onClick={onItemClick}
              aria-current={isChildCurrent(c.href) ? 'page' : undefined}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                padding: '14px 0',
                minHeight: 44,
                borderBottom:
                  i === arr.length - 1 ? '0' : '0.5px solid rgba(61, 40, 23, 0.12)',
                textDecoration: 'none',
              }}
            >
              <span style={{ flex: 1 }}>
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
                {c.description ? (
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-sans), system-ui, sans-serif',
                      fontSize: 14,
                      fontWeight: 400,
                      color: 'var(--gpm-walnut)',
                      lineHeight: 1.5,
                    }}
                  >
                    {c.description}
                  </span>
                ) : null}
              </span>
              <span
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-sans), system-ui, sans-serif',
                  fontSize: 17,
                  color: 'var(--gpm-gold-secondary)',
                  lineHeight: 1.3,
                  marginLeft: 16,
                  flexShrink: 0,
                }}
              >
                →
              </span>
            </Link>
          ))}
          {item.footer ? (
            <div
              style={{
                borderTop: '0.5px solid rgba(61, 40, 23, 0.12)',
                marginTop: 12,
                paddingTop: 12,
              }}
            >
              <Link
                href={item.footer.href}
                onClick={onItemClick}
                style={{
                  fontFamily: 'var(--font-sans), system-ui, sans-serif',
                  fontSize: 14,
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
      ) : null}
    </>
  )
}
