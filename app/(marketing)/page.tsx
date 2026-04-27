import {
  PageContainer,
  SectionContainer,
  ProseContainer,
  ContentContainer,
  WideContainer,
} from '@/components/layout'

// FOUNDATION SHOWCASE — Phase 1 verification surface.
//
// This is NOT the homepage. It exercises the design tokens so the foundation
// can be reviewed before any brand components are built on top of it.
//
// Once the foundation is approved this file is deleted. The real homepage
// composes the components specified in DESIGN_BRIEF.md Section 18.

const swatches = [
  { name: 'canvas', value: '#F2EDE0', class: 'bg-canvas', textClass: 'text-ink-body' },
  { name: 'canvas-deep', value: '#F8F5EB', class: 'bg-canvas-deep', textClass: 'text-ink-body' },
  { name: 'surface', value: '#E8E2CC', class: 'bg-surface', textClass: 'text-ink-body' },
  { name: 'ink-body', value: '#1F1B16', class: 'bg-ink-body', textClass: 'text-canvas' },
  { name: 'ink-display', value: '#2D2620', class: 'bg-ink-display', textClass: 'text-canvas' },
  { name: 'gold (primary)', value: '#C9A96C', class: 'bg-gold', textClass: 'text-ink-body' },
  { name: 'gold-deep', value: '#B8962E', class: 'bg-gold-deep', textClass: 'text-canvas' },
  { name: 'walnut', value: '#3B342A', class: 'bg-walnut', textClass: 'text-canvas' },
  { name: 'border-light', value: '#D5CDB6', class: 'bg-border-light', textClass: 'text-ink-body' },
  { name: 'state-error', value: '#A03A28', class: 'bg-state-error', textClass: 'text-canvas' },
  { name: 'state-success', value: '#5C7A3E', class: 'bg-state-success', textClass: 'text-canvas' },
  { name: 'state-warning', value: '#A07028', class: 'bg-state-warning', textClass: 'text-canvas' },
  { name: 'state-info', value: '#4A4239', class: 'bg-state-info', textClass: 'text-canvas' },
]

export default function FoundationShowcase() {
  return (
    <main>
      <PageContainer>
        <SectionContainer>
          <ProseContainer>
            <p className="text-eyebrow text-gold-deep">Phase 1 — Foundation</p>
            <h1 className="text-display-lg text-ink-display mt-4">
              Design system verification.
            </h1>
            <p className="text-body-lg text-ink-body mt-6">
              This page exercises the token system before any brand
              components are built on top of it. Once approved, this file is
              deleted and the homepage composes per Section 18 of the brief.
            </p>
          </ProseContainer>
        </SectionContainer>

        <hr className="border-0 border-t border-border-light" />

        <SectionContainer>
          <ContentContainer>
            <p className="text-eyebrow text-gold-deep">Type tokens</p>
            <h2 className="text-h2 text-ink-display mt-4 mb-8">
              Eight tokens, no ad-hoc sizes.
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-eyebrow text-ink-body opacity-60 mb-2">
                  text-display-xl &middot; 72px serif &middot; verse only
                </p>
                <p className="text-display-xl text-ink-display">
                  A just weight is <em>His</em> delight.
                </p>
              </div>

              <div>
                <p className="text-eyebrow text-ink-body opacity-60 mb-2">
                  text-display-lg &middot; 56px serif &middot; H1 standard
                </p>
                <p className="text-display-lg text-ink-display">
                  No hidden costs. Low fees.
                </p>
              </div>

              <div>
                <p className="text-eyebrow text-ink-body opacity-60 mb-2">
                  text-h2 &middot; 32px serif &middot; section header
                </p>
                <p className="text-h2 text-ink-display">
                  The five structural commitments.
                </p>
              </div>

              <div>
                <p className="text-eyebrow text-ink-body opacity-60 mb-2">
                  text-h3 &middot; 22px serif &middot; subsection / card title
                </p>
                <p className="text-h3 text-ink-display">
                  Buyback at spot, never below.
                </p>
              </div>

              <div>
                <p className="text-eyebrow text-ink-body opacity-60 mb-2">
                  text-body-lg &middot; 18px sans &middot; lead paragraph
                </p>
                <p className="text-body-lg text-ink-body">
                  A typical Gold IRA costs about a third more. Grace&apos;s
                  spread is{' '}
                  <span className="inline-pricing tabular-nums">11.1%</span>,
                  all-in &mdash; no admin fee, no setup fee, buyback at spot.
                </p>
              </div>

              <div>
                <p className="text-eyebrow text-ink-body opacity-60 mb-2">
                  text-body &middot; 16px sans &middot; default body
                </p>
                <p className="text-body text-ink-body max-w-prose">
                  Most of the industry will not show you a number until you are
                  on a call with a commissioned salesperson. We think that is
                  the wrong order. If you want to know what you will pay before
                  you decide to pay it, you are in the right place.
                </p>
              </div>

              <div>
                <p className="text-eyebrow text-ink-body opacity-60 mb-2">
                  text-body-sm &middot; 14px sans &middot; caption / helper
                </p>
                <p className="text-body-sm text-ink-body">
                  We send the Briefing to this address. We do not pass it to
                  anyone else.
                </p>
              </div>

              <div>
                <p className="text-eyebrow text-ink-body opacity-60 mb-2">
                  text-eyebrow &middot; 11px sans &middot; uppercase 0.22em
                </p>
                <p className="text-eyebrow text-gold-deep">Proverbs 11:1</p>
              </div>

              <div>
                <p className="text-eyebrow text-ink-body opacity-60 mb-2">
                  text-quote &middot; 19px italic serif &middot; pull-quote
                </p>
                <p className="text-quote text-ink-body max-w-prose">
                  I spent a decade inside a large Gold IRA firm. I watched what
                  the pricing looked like on the inside and what it looked like
                  to the customer. The two numbers did not match.
                </p>
                <p className="text-body-sm text-ink-body mt-3">
                  &mdash; William Armour, Co-Founder and CEO
                </p>
              </div>
            </div>
          </ContentContainer>
        </SectionContainer>

        <hr className="border-0 border-t border-border-light" />

        <SectionContainer>
          <ContentContainer>
            <p className="text-eyebrow text-gold-deep">Color tokens</p>
            <h2 className="text-h2 text-ink-display mt-4 mb-8">
              Seven primary roles, four semantic states. No navy.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {swatches.map((s) => (
                <div
                  key={s.name}
                  className={`${s.class} ${s.textClass} p-6 rounded-md border border-border-light`}
                >
                  <p className="text-eyebrow">{s.name}</p>
                  <p className="text-body-sm tabular-nums mt-2">{s.value}</p>
                </div>
              ))}
            </div>
          </ContentContainer>
        </SectionContainer>

        <hr className="border-0 border-t border-border-light" />

        <SectionContainer>
          <ContentContainer>
            <p className="text-eyebrow text-gold-deep">Container widths</p>
            <h2 className="text-h2 text-ink-display mt-4 mb-8">
              Four widths, picked per content type.
            </h2>

            <div className="space-y-4">
              <div className="bg-surface p-4 max-w-prose">
                <p className="text-body-sm">
                  <strong>max-w-prose</strong> &middot; 640px &middot; body
                  prose, editorial line length.
                </p>
              </div>
              <div className="bg-surface p-4 max-w-content">
                <p className="text-body-sm">
                  <strong>max-w-content</strong> &middot; 880px &middot;
                  content blocks with sidebars.
                </p>
              </div>
              <div className="bg-surface p-4 max-w-wide">
                <p className="text-body-sm">
                  <strong>max-w-wide</strong> &middot; 1200px &middot; hero
                  sections, image grids.
                </p>
              </div>
              <div className="bg-surface p-4 max-w-page">
                <p className="text-body-sm">
                  <strong>max-w-page</strong> &middot; 1440px &middot; outer
                  page maximum.
                </p>
              </div>
            </div>
          </ContentContainer>
        </SectionContainer>

        <hr className="border-0 border-t border-border-light" />

        <SectionContainer>
          <ProseContainer>
            <p className="text-eyebrow text-gold-deep">Interaction</p>
            <h2 className="text-h2 text-ink-display mt-4 mb-6">
              Hover and focus.
            </h2>
            <p className="text-body text-ink-body mb-4">
              Default link styling pulls from the global stylesheet — muted
              gold-deep on cream, underline on hover, walnut focus ring with
              2px offset. Try keyboard-tabbing to{' '}
              <a href="#focus-target" id="focus-target">
                this link
              </a>{' '}
              to see the focus state.
            </p>
            <p className="text-body-sm text-ink-body opacity-70">
              Reduced motion is honored absolutely (rule in globals.css). All
              transitions resolve to 0ms when the system preference is set.
            </p>
          </ProseContainer>
        </SectionContainer>

        <hr className="border-0 border-t border-border-light" />

        <SectionContainer>
          <WideContainer>
            <p className="text-eyebrow text-gold-deep mb-4">Phase 1 status</p>
            <h2 className="text-h2 text-ink-display mb-4">Foundation ready.</h2>
            <p className="text-body text-ink-body max-w-prose">
              Pause point. Once you approve this surface, this file is deleted
              and components begin per DESIGN_BRIEF.md Section 14, one at a
              time, with a review gate after each.
            </p>
          </WideContainer>
        </SectionContainer>
      </PageContainer>
    </main>
  )
}
