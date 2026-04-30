import { VerseHero } from '@/components/hero'
import {
  EntryCardGrid,
  PullQuote,
  WilliamTestimonyBand,
  TrustBlock,
  CommitmentBlock,
  VerseAnchor,
  ThreePathsGrid,
  DisclaimerStack,
  type EntryCardItem,
} from '@/components/content'
import { PageContainer } from '@/components/layout'

// Homepage composition. Block order matches DESIGN_BRIEF.md Section 18 and
// homepage_copy_fragments_v3_5.md, with three v3.5 corrections applied:
//   (a) Card 1 first sentence: "William Armour spent a decade in the Gold
//       IRA industry as a senior sales director."
//   (b) PullQuote first sentence: "I spent a decade inside the Gold IRA
//       industry."
//   (c) Card 3 replaced with Briefing card (Option B), per CMO call.
//
// Vertical rhythm uses explicit margin-top per block rather than uniform
// SectionContainer padding. Hero-to-cards 80px; subsequent gaps 96px;
// disclaimer gap proportional smaller.
//
// Pre-launch banner fires on this route via lib/route-meta.ts pulling flags
// from ./homepage.meta.ts. Site chrome (banner / header / footer) lives in
// app/(marketing)/layout.tsx.

const ENTRY_CARDS: ReadonlyArray<EntryCardItem> = [
  {
    title: 'A pastor left the gold industry. This is the company he built.',
    body: 'William Armour spent a decade in the Gold IRA industry as a senior sales director. He is also a pastor. What he was selling could not be reconciled with what he preached.',
    linkLabel: "Read William's story",
    linkHref: '/who-we-are/williams-story',
    imageLabel: '[EDITORIAL IMAGE — pastoral / conviction]',
    imageAspect: '3 / 2',
    imageSrc: '/images/homepage/card-1-man-reading-study.jpg',
    imageAlt: 'Older man in a study, hands on an open book — pastoral / conviction register',
  },
  {
    title: 'We published the standard. Hold us to it.',
    body: 'Five structural commitments on pricing, product, compensation, and buyback — published before you speak to anyone. Not asking you to trust us. Inviting you to measure us.',
    linkLabel: 'See the five commitments',
    linkHref: '/pricing',
    imageLabel: '[EDITORIAL IMAGE — verification / careful work]',
    imageAspect: '3 / 2',
    imageSrc: '/images/homepage/card-2-hands-writing.jpg',
    imageAlt: 'Hands writing on a document with a fountain pen — verification / careful work register',
  },
  {
    title: 'Get the whole picture before you call.',
    body: "The Just Weight Briefing — William's story, the five commitments, how we price, what we sell, and the framework for evaluating any Gold IRA company.",
    linkLabel: 'Get the Briefing',
    linkHref: '/briefing',
    imageLabel: '[EDITORIAL IMAGE — reading / preparation]',
    imageAspect: '3 / 2',
    imageSrc: '/images/homepage/card-3-lamp-paper-desk.jpg',
    imageAlt: 'A reading lamp and paper on a wooden desk — reading / preparation register',
  },
]

const COMMITMENTS = [
  {
    number: '01',
    title: 'Published spread, 11.1% all-in',
    body: 'The markup over spot is 11.1%. That is the whole markup. Nothing is added on a phone call. Nothing is negotiated off it.',
    linkLabel: 'See the pricing page',
    linkHref: '/pricing',
  },
  {
    number: '02',
    title: 'Buyback at spot, never below',
    body: 'When you sell back to us, we pay the spot price on the day. We do not mark the buyback down to build a second margin on exit.',
    linkLabel: 'How buyback works',
    linkHref: '/resources/buyback',
  },
  {
    number: '03',
    title: 'Standard IRS-eligible bullion only',
    body: 'American Eagles, Canadian Maple Leafs, LBMA-approved bars. No numismatic, exclusive, rare, premium, or proof coins in any form.',
    linkLabel: 'Why we refuse numismatics',
    linkHref: '/resources/numismatic-coins',
  },
  {
    number: '04',
    title: 'Salaried advisors. No commission.',
    body: 'The person you speak to earns the same whether you buy or not. No commissions, no referral fees, no volume bonuses.',
    linkLabel: 'Meet the advisor team',
    linkHref: '/advisor',
  },
  {
    number: '05',
    title: 'No phone-gate on pricing',
    body: 'The number is on the website. The worked examples on your rollover amount are on the pricing page.',
    linkLabel: 'See what it actually costs',
    linkHref: '/pricing',
  },
]

const PATHS: ReadonlyArray<EntryCardItem> = [
  {
    tag: 'Path 1',
    title: 'New to Gold IRAs',
    body: 'Start with how a rollover works. What you can roll over, how the timing works, what the tax treatment looks like.',
    linkLabel: 'How a rollover works',
    linkHref: '/rollover',
    imageLabel: '[EDITORIAL IMAGE — Path 1]',
    imageAspect: '3 / 2',
    imageSrc: '/images/homepage/path-1-elderly-woman-window.jpg',
    imageAlt: 'An older woman sitting in sunlight near a window',
  },
  {
    tag: 'Path 2',
    title: 'Already hold a Gold IRA',
    body: "Start by requesting your current provider's buyback quote. That number tells you what you actually paid on entry.",
    linkLabel: 'The transfer guide',
    linkHref: '/rollover/transfer',
    imageLabel: '[EDITORIAL IMAGE — Path 2]',
    imageAspect: '3 / 2',
    imageSrc: '/images/homepage/path-2-older-man-writing.jpg',
    imageAlt: 'An older man at a table writing — reviewing his records',
  },
  {
    tag: 'Path 3',
    title: 'Financial advisor or CPA',
    body: 'Our published pricing, salaried-advisor model, and bullion-only catalogue exist to meet the standards your clients rely on you to apply.',
    linkLabel: 'Advisor and CPA referrals',
    linkHref: '/advisor',
    imageLabel: '[EDITORIAL IMAGE — Path 3]',
    imageAspect: '3 / 2',
    imageSrc: '/images/homepage/path-3-desk-book-pen.jpg',
    imageAlt: 'A wooden desk with an open book and fountain pen',
  },
]

const DISCLAIMERS = [
  {
    lead: 'Grace Precious Metals is a precious metals dealer.',
    rest: 'Gold IRAs require an IRS-approved custodian and an IRS-approved depository. Grace Precious Metals is not a financial, tax, or legal advisor. Gold and precious metals investments carry risk, including the potential loss of principal. Past performance does not guarantee future results. Consult qualified professionals before making investment decisions. Pricing reflects CFO-reviewed published policy as of the date shown.',
  },
  {
    rest: '"A typical Gold IRA costs about a third more" compares Grace\u2019s round-trip cost (entry spread plus ongoing custodian and depository fees; buyback at spot, zero exit spread) against the midpoint of the category-typical round-trip cost range of 17%\u201333%, substantiated from published research on Gold IRA pricing and regulatory enforcement records. Substantiation files available on counsel request. No specific competitor is identified on this page.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Block 1 — VerseHero (full-width, self-contained padding) */}
      <VerseHero emphasizePronoun />

      {/* Block 2 — Three EntryCards (~80px from hero) */}
      <section className="mt-12 lg:mt-20">
        <PageContainer>
          <EntryCardGrid items={ENTRY_CARDS} />
        </PageContainer>
      </section>

      {/* Block 3 — William pull-quote (~96px from cards) */}
      <section className="mt-16 lg:mt-24">
        <PageContainer>
          <div className="max-w-content mx-auto">
            <PullQuote
              attribution="William Armour, Co-Founder and CEO"
              linkLabel="Read William's full story"
              linkHref="/who-we-are/williams-story"
              emphasized
              headshotSrc="/images/homepage/pullquote-headshot-provisional.jpg"
              headshotAlt="Older man, contemplative expression — provisional headshot pending William's commissioned portrait"
              headshotLabel="[WILLIAM HEADSHOT — provisional]"
            >
              I spent a decade inside the Gold IRA industry. I watched what
              the pricing looked like on the inside and what it looked like
              to the customer. The two numbers did not match. I am a pastor.
              I could not keep doing it. Grace is what I built when I left.
            </PullQuote>
          </div>
        </PageContainer>
      </section>

      {/* Block 4 — William testimony band (full-width, self-contained, ~96px from pull-quote) */}
      <div className="mt-16 lg:mt-24">
        <WilliamTestimonyBand />
      </div>

      {/* Block 5 — Trust block (~96px from testimony band) */}
      <section className="mt-16 lg:mt-24">
        <PageContainer>
          <TrustBlock />
        </PageContainer>
      </section>

      {/* Block 6 — Five structural commitments */}
      <section className="mt-16 lg:mt-24">
        <PageContainer>
          <CommitmentBlock
            heading="The five structural commitments"
            subhead="Five operational commitments. Each one visible, each one verifiable."
            commitments={COMMITMENTS}
          />
        </PageContainer>
      </section>

      {/* Block 7 — Proverbs 11:1 anchor block */}
      <section className="mt-16 lg:mt-24">
        <PageContainer>
          <VerseAnchor emphasizePronoun />
        </PageContainer>
      </section>

      {/* Block 8 — Three-paths block */}
      <section className="mt-16 lg:mt-24">
        <PageContainer>
          <ThreePathsGrid
            heading="Find what fits where you are"
            paths={PATHS}
          />
        </PageContainer>
      </section>

      {/* Block 9 — Standing disclaimer (proportional, smaller gap before footer) */}
      <section className="mt-16 lg:mt-24">
        <PageContainer>
          <DisclaimerStack disclaimers={DISCLAIMERS} />
        </PageContainer>
      </section>
    </>
  )
}
