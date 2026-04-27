'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { PageContainer, ProseContainer } from '@/components/layout'

// 500 page rendered when an error is caught below the root layout.
// Copy per DESIGN_BRIEF.md Section 16.8.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main>
      <PageContainer>
        <ProseContainer>
          <div className="py-24">
            <p className="text-eyebrow text-gold-deep mb-4">500</p>
            <h1 className="text-display-lg text-ink-display mb-6">
              Something went wrong on our end.
            </h1>
            <p className="text-body-lg text-ink-body mb-8">
              We have logged the error and are looking at it. You can refresh,
              go back to the homepage, or email us directly.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => reset()}
                className="inline-block bg-walnut text-canvas px-6 py-3 rounded-sm text-body"
              >
                Refresh
              </button>
              <Link
                href="/"
                className="inline-block border-[1px] border-walnut text-walnut px-6 py-3 rounded-sm text-body no-underline hover:no-underline"
              >
                Home
              </Link>
            </div>
          </div>
        </ProseContainer>
      </PageContainer>
    </main>
  )
}
