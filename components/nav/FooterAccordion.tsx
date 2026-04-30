'use client'

import Link from 'next/link'
import { useState } from 'react'

// Mobile-only footer accordion. Production brief §13 spec: column headers
// tappable; expand reveals links beneath; closed by default; one open at a
// time; chevron indicator on the right of each header.

export interface FooterAccordionLink {
  label: string
  href: string
}

export interface FooterAccordionSection {
  heading: string
  links: ReadonlyArray<FooterAccordionLink>
  pendingNote?: string
}

export function FooterAccordion({ sections }: { sections: ReadonlyArray<FooterAccordionSection> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="lg:hidden">
      {sections.map((section, i) => {
        const isOpen = openIndex === i
        const panelId = `footer-accordion-${i}`
        const buttonId = `footer-accordion-trigger-${i}`
        return (
          <div
            key={section.heading}
            style={{ borderTop: '0.5px solid rgba(242, 237, 224, 0.20)' }}
          >
            <button
              type="button"
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between text-left transition-colors duration-color"
              style={{
                minHeight: 44,
                padding: '14px 0',
                color: 'var(--gpm-canvas)',
                background: 'transparent',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'var(--gpm-gold-primary)',
                }}
              >
                {section.heading}
              </span>
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 200ms ease-out',
                  color: 'var(--gpm-canvas)',
                  opacity: 0.7,
                }}
              >
                <path d="M6 9 L12 15 L18 9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {isOpen ? (
              <div id={panelId} role="region" aria-labelledby={buttonId} style={{ paddingBottom: 16 }}>
                <ul className="flex flex-col" style={{ gap: 12 }}>
                  {section.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="no-underline transition-colors duration-color hover:no-underline"
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 14,
                          fontWeight: 400,
                          lineHeight: 1.8,
                          color: 'var(--gpm-canvas)',
                        }}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                  {section.pendingNote ? (
                    <li>
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontStyle: 'italic',
                          fontSize: 13,
                          color: 'rgba(242, 237, 224, 0.65)',
                        }}
                      >
                        {section.pendingNote}
                      </span>
                    </li>
                  ) : null}
                </ul>
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
