'use client'

import Link from 'next/link'

// Catches errors in the root layout itself; renders its own html/body shell.
// Plain inline styles only — token CSS may not have loaded if the layout failed.
// Copy per DESIGN_BRIEF.md Section 16.8.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body
        style={{
          background: '#F2EDE0',
          color: '#1F1B16',
          fontFamily: 'Georgia, serif',
          padding: '96px 24px',
          margin: 0,
        }}
      >
        <main style={{ maxWidth: 640, margin: '0 auto' }}>
          <p
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              fontSize: 11,
              color: '#B8962E',
              marginBottom: 16,
            }}
          >
            500
          </p>
          <h1 style={{ fontSize: 56, lineHeight: 1.1, color: '#2D2620' }}>
            Something went wrong on our end.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, marginBottom: 32 }}>
            We have logged the error and are looking at it. You can refresh or
            go back to the homepage.
          </p>
          <button
            onClick={() => reset()}
            style={{
              background: '#3B342A',
              color: '#F2EDE0',
              padding: '12px 24px',
              border: 'none',
              borderRadius: 3,
              fontSize: 16,
              cursor: 'pointer',
              marginRight: 16,
            }}
          >
            Refresh
          </button>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              border: '1px solid #3B342A',
              color: '#3B342A',
              padding: '12px 24px',
              borderRadius: 3,
              fontSize: 16,
              textDecoration: 'none',
            }}
          >
            Home
          </Link>
        </main>
      </body>
    </html>
  )
}
