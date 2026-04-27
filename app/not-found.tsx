import Link from 'next/link'
import { PageContainer, ProseContainer } from '@/components/layout'

// 404 page. Copy per DESIGN_BRIEF.md Section 16.7.
export default function NotFound() {
  return (
    <main>
      <PageContainer>
        <ProseContainer>
          <div className="py-24">
            <p className="text-eyebrow text-gold-deep mb-4">404</p>
            <h1 className="text-display-lg text-ink-display mb-6">
              This page does not exist.
            </h1>
            <p className="text-body-lg text-ink-body mb-8">
              It may have moved, or it may never have existed. Either way, you
              can go back to the homepage or talk to an advisor.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-block bg-walnut text-canvas px-6 py-3 rounded-sm text-body no-underline hover:no-underline"
              >
                Home
              </Link>
              <Link
                href="/advisor"
                className="inline-block border-[1px] border-walnut text-walnut px-6 py-3 rounded-sm text-body no-underline hover:no-underline"
              >
                Talk to an advisor
              </Link>
            </div>
          </div>
        </ProseContainer>
      </PageContainer>
    </main>
  )
}
