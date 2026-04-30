'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { CTAButton } from '@/components/cta'
import { Logomark } from './Logomark'

// Mobile slide-in side panel for the SiteHeader. Renders only when `open` is
// true. Production brief §1 mobile spec: 80vw width from the right edge,
// linen-light bg, focus-trapped, escape-to-close, dim background tap-to-close.
//
// Focus management: on open, focus moves to the first nav link. Tab cycles
// within the panel. On close, focus returns to the hamburger trigger — that's
// handled in SiteHeader (it owns the trigger ref).

interface NavItem {
  label: string
  href: string
}

interface MobileMenuPanelProps {
  open: boolean
  onClose: () => void
  nav: ReadonlyArray<NavItem>
}

export function MobileMenuPanel({ open, onClose, nav }: MobileMenuPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  // Focus first nav link on open
  useEffect(() => {
    if (!open) return
    const first = panelRef.current?.querySelector<HTMLAnchorElement>('nav a')
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
          padding: 24,
          overflowY: 'auto',
        }}
      >
        <div className="flex items-center justify-between" style={{ marginBottom: 32 }}>
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
              color: 'var(--gpm-walnut)',
            }}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6 L18 18 M18 6 L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav aria-label="Primary mobile" className="flex flex-col" style={{ gap: 20 }}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="no-underline transition-colors duration-color hover:no-underline"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 16,
                fontWeight: 500,
                color: 'var(--gpm-walnut)',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div
          aria-hidden="true"
          style={{
            height: 0.5,
            background: 'rgba(45, 38, 32, 0.20)',
            marginTop: 24,
            marginBottom: 24,
          }}
        />

        <CTAButton href="/briefing" tier={3} onClick={onClose} className="w-full block">
          Get the Briefing
        </CTAButton>
      </div>
    </>
  )
}
