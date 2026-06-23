'use client'

import Link from 'next/link'
import { useState, type FormEvent } from 'react'

// ResourcesPage — client component for /resources.
//
// Layout:
//   - Desktop ≥901px: hero (with 240px left spacer to align hero
//     content with the right content column below) + two-column
//     layout below (left rail sticky at top: 100px, right content
//     column with section groups).
//   - Mobile <901px: hero collapses, left rail hides, horizontal
//     sticky topic strip appears below the SiteHeader for filtering.
//
// Filtering:
//   - Topics: All articles · Rollover mechanics · Pricing & costs ·
//     What you can hold · IRS rules & compliance · Markets, risk &
//     allocation.
//   - Clicking a topic filters sections by data-section attribute.
//     React state drives both the rail and the mobile strip.
//
// Newsletter:
//   - Client-side simulation matching the /advisor and /briefing
//     pattern. Real Klaviyo wiring follows once production hosting
//     is locked.
//
// Note: the page deliberately does NOT render its own <header> or
// <footer> — those come from app/(marketing)/layout.tsx. The
// boilerplate's standalone header/footer were discarded.

interface Article {
  title: string
  summary: string
  href: string
  readTime: string
}

interface Topic {
  id: string
  filter: string
  label: string
  sectionNumber: string
  sectionTitle: string
  blurb: string
  articles: Article[]
}

const TOPICS: Topic[] = [
  {
    id: 'rollover-mechanics',
    filter: 'rollover-mechanics',
    label: 'Rollover mechanics',
    sectionNumber: 'Section one',
    sectionTitle: 'Rollover mechanics',
    blurb:
      'How retirement funds move from a 401(k) or existing IRA into physical bullion, and what the IRS requires at each step.',
    articles: [
      {
        title: 'How to Roll a 401(k) Into Gold Without Tax Penalties',
        summary:
          'The IRS administers retirement-plan transfers under a defined set of rules. This piece walks through the two rollover structures, which accounts qualify, the operational steps, and the places where the process tends to slow down.',
        href: '/resources/401k-to-gold-ira-rollover',
        readTime: '10 min read',
      },
    ],
  },
  {
    id: 'pricing-costs',
    filter: 'pricing-costs',
    label: 'Pricing & costs',
    sectionNumber: 'Section two',
    sectionTitle: 'Pricing & costs',
    blurb:
      'The structural costs of a Gold IRA, the fees that should not exist, and how the spread between spot and retail actually works.',
    articles: [
      {
        title: 'What Does a Gold IRA Cost? An Honest Cost Arithmetic',
        summary:
          'The legitimate costs of holding physical gold in a retirement account, separated from the dealer-imposed surcharges that some firms add on top. Where the numbers usually land, and what to ask before funding any account.',
        href: '/resources/gold-ira-cost-analysis',
        readTime: '8 min read',
      },
      {
        title: 'Gold IRA Fees Explained: Removing the Industry Smoke and Mirrors',
        summary:
          'A three-tier breakdown of who charges what in a Gold IRA. The difference between flat-rate and percentage-scaled fees, the mathematics behind "free silver" promotions, and the compounding effect of fee structure across a twenty-year horizon.',
        href: '/resources/fees-explained',
        readTime: '9 min read',
      },
      {
        title: 'Demystifying the Gold IRA Spread: Markups and Real Costs',
        summary:
          'The single most consequential number in any Gold IRA transaction, and the one most rarely disclosed. What the spread is, why it is typically concealed, the mathematical impact on liquidation, and the specific markup pattern applied to numismatic coins.',
        href: '/resources/understanding-dealer-spread',
        readTime: '8 min read',
      },
    ],
  },
  {
    id: 'what-you-can-hold',
    filter: 'what-you-can-hold',
    label: 'What you can hold',
    sectionNumber: 'Section three',
    sectionTitle: 'What you can hold',
    blurb:
      'The product side of a Gold IRA: which coins and bars are IRS-eligible, where numismatics fail the test, and how Grace verifies every asset against the statutory criteria.',
    articles: [
      {
        title: 'IRA-Eligible Gold Coins: The Strict Regulatory Reality',
        summary:
          'The IRS has a short list of physical gold assets that qualify for inclusion in a retirement account. The 0.995 fineness rule, the American Gold Eagle statutory exception, the recognized coins and bars, and the categories of product commonly marketed to retirement investors but legally excluded.',
        href: '/resources/ira-eligible-gold-coins',
        readTime: '10 min read',
      },
    ],
  },
  {
    id: 'irs-rules',
    filter: 'irs-rules',
    label: 'IRS rules & compliance',
    sectionNumber: 'Section four',
    sectionTitle: 'IRS rules & compliance',
    blurb:
      'The regulatory framework around Self-Directed IRAs, the rules that can trigger deemed distributions, and the operational disciplines that keep an account compliant across decades.',
    articles: [
      {
        title: 'Home Storage Gold IRAs: What the IRS Actually Says',
        summary:
          'A piece on one of the most aggressively marketed and least legally defensible structures in the industry. What the IRS rules say, the court rulings that have applied them, and the consequences of a deemed distribution on retirement savings.',
        href: '/resources/home-storage-ira-rules',
        readTime: '9 min read',
      },
    ],
  },
  {
    id: 'markets-risk',
    filter: 'markets-risk',
    label: 'Markets, risk & allocation',
    sectionNumber: 'Section five',
    sectionTitle: 'Markets, risk & allocation',
    blurb:
      'How physical gold sits inside a diversified retirement portfolio. Inflation, drawdown behavior, allocation ranges, and the difference between sound decisions and manufactured urgency.',
    articles: [
      {
        title:
          'Market Volatility and Retirement Protection: A Balanced Approach to Capital Preservation',
        summary:
          'The structural risks affecting paper-denominated retirement assets, the historical behavior of gold during major equity drawdowns, and the question of allocation. Not a crash thesis. A serious answer to a serious question about portfolio construction.',
        href: '/resources/market-volatility-retirement-protection',
        readTime: '11 min read',
      },
    ],
  },
]

const TOTAL_ARTICLES = TOPICS.reduce((acc, t) => acc + t.articles.length, 0)

const PAGE_CSS = `
.gpm-resources-page {
  --cream-canvas: #F5F0E1;
  --canvas-deep: #F0E9D6;
  --canvas-card: #EFE7D0;
  --walnut-deep: #3D2817;
  --walnut-mid: #5C4632;
  --gold-secondary: #9C7322;
  --gold-deep: #B8962E;
  --line-soft: rgba(61, 40, 23, 0.12);
  background: var(--cream-canvas);
  color: var(--walnut-deep);
  font-family: var(--font-sans), Inter, sans-serif;
  font-size: 15px;
  line-height: 1.6;
}

/* ===== MOBILE STICKY TOPIC STRIP ===== */
.gpm-resources-page .mobile-strip {
  display: none;
  position: sticky;
  top: 64px; /* SiteHeader is h-16 = 64px */
  z-index: 900;
  background: var(--canvas-deep);
  border-top: 1px solid var(--line-soft);
  border-bottom: 1px solid var(--line-soft);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.gpm-resources-page .mobile-strip::-webkit-scrollbar { display: none; }
.gpm-resources-page .mobile-strip-inner {
  display: flex;
  align-items: center;
  gap: 0;
  padding: 0 16px;
  white-space: nowrap;
}
.gpm-resources-page .mobile-strip-inner button {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 400;
  color: var(--walnut-mid);
  background: transparent;
  border: 0;
  padding: 14px 16px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: color 0.2s ease;
  flex-shrink: 0;
  cursor: pointer;
  white-space: nowrap;
}
.gpm-resources-page .mobile-strip-inner button.active {
  color: var(--gold-secondary);
  font-weight: 500;
}
.gpm-resources-page .mobile-strip-inner button .count {
  font-style: italic;
  font-size: 12px;
  margin-left: 4px;
  opacity: 0.7;
}

/* ===== HERO ===== */
.gpm-resources-page .hero-section {
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 32px 64px;
  display: flex;
  align-items: flex-start;
  gap: 64px;
}
.gpm-resources-page .hero-spacer { flex: 0 0 240px; }
.gpm-resources-page .hero-content-col { flex: 1; min-width: 0; }
.gpm-resources-page .hero-eyebrow {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 500;
  color: var(--gold-secondary);
  letter-spacing: 0.24em;
  margin-bottom: 16px;
  display: block;
  text-transform: uppercase;
}
.gpm-resources-page .hero-h1 {
  font-family: var(--font-serif), Georgia, serif;
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.2;
  margin-bottom: 20px;
  max-width: 720px;
}
.gpm-resources-page .hero-lede {
  font-family: var(--font-sans);
  font-size: 17px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.7;
  max-width: 680px;
}

/* ===== MAIN LAYOUT ===== */
.gpm-resources-page .main-layout {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: flex-start;
  gap: 64px;
}

/* ===== LEFT RAIL ===== */
.gpm-resources-page .left-rail {
  flex: 0 0 240px;
  position: sticky;
  top: 100px; /* SiteHeader h-16 (64px) + breathing room */
  padding-bottom: 64px;
  min-width: 0;
}
.gpm-resources-page .rail-eyebrow {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 500;
  color: var(--gold-secondary);
  letter-spacing: 0.24em;
  margin-bottom: 20px;
  display: block;
  text-transform: uppercase;
}
.gpm-resources-page .rail-list { list-style: none; padding: 0; margin: 0; }
.gpm-resources-page .rail-list li { margin-bottom: 12px; }
.gpm-resources-page .rail-list li button {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  color: var(--walnut-mid);
  background: transparent;
  border: 0;
  text-align: left;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  transition: color 0.2s ease;
  padding: 4px 0;
  cursor: pointer;
}
.gpm-resources-page .rail-list li button:hover { color: var(--walnut-deep); }
.gpm-resources-page .rail-list li button.active {
  color: var(--gold-secondary);
  font-weight: 500;
}
.gpm-resources-page .rail-list li button .count {
  font-family: var(--font-sans);
  font-style: italic;
  font-size: 13px;
  color: inherit;
  opacity: 0.7;
}
.gpm-resources-page .rail-closing {
  font-family: var(--font-serif), Georgia, serif;
  font-style: italic;
  font-size: 13px;
  color: var(--walnut-mid);
  line-height: 1.5;
  margin-top: 28px;
  padding-right: 8px;
}

/* ===== CONTENT COLUMN ===== */
.gpm-resources-page .content-column {
  flex: 1;
  min-width: 0;
  padding-bottom: 80px;
}

/* ===== SECTION GROUPS ===== */
.gpm-resources-page .section-group { margin-bottom: 64px; }
.gpm-resources-page .section-group:last-child { margin-bottom: 0; }
.gpm-resources-page .group-eyebrow {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 500;
  color: var(--gold-secondary);
  letter-spacing: 0.24em;
  margin-bottom: 12px;
  display: block;
  text-transform: uppercase;
}
.gpm-resources-page .group-title {
  font-family: var(--font-serif), Georgia, serif;
  font-size: clamp(24px, 2.6vw, 28px);
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.25;
  margin-bottom: 12px;
  letter-spacing: -0.003em;
}
.gpm-resources-page .group-blurb {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.65;
  max-width: 680px;
  margin-bottom: 32px;
}

/* ===== ARTICLE TILES ===== */
.gpm-resources-page .article-tile {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  align-items: start;
  padding: 24px 16px;
  border-top: 1px solid var(--line-soft);
  text-decoration: none;
  transition: background 0.2s ease;
  margin: 0 -16px;
  cursor: pointer;
  color: inherit;
}
.gpm-resources-page .article-tile:last-child {
  border-bottom: 1px solid var(--line-soft);
}
.gpm-resources-page .article-tile:hover { background: var(--canvas-deep); }
.gpm-resources-page .article-tile:focus-visible {
  background: var(--canvas-deep);
  outline: 2px solid var(--gold-secondary);
  outline-offset: -2px;
}
.gpm-resources-page .tile-left { min-width: 0; }
.gpm-resources-page .tile-title {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 22px;
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.3;
  margin-bottom: 8px;
  letter-spacing: -0.003em;
}
.gpm-resources-page .tile-summary {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.6;
  max-width: 620px;
}
.gpm-resources-page .tile-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  padding-top: 4px;
  white-space: nowrap;
}
.gpm-resources-page .tile-readtime {
  font-family: var(--font-sans);
  font-style: italic;
  font-size: 13px;
  font-weight: 400;
  color: var(--walnut-mid);
}
.gpm-resources-page .tile-arrow {
  font-size: 18px;
  color: var(--gold-secondary);
  line-height: 1;
}

/* ===== VERSE BAND ===== */
.gpm-resources-page .verse-band {
  background: var(--canvas-deep);
  padding: 80px 32px;
  text-align: center;
}
.gpm-resources-page .verse-line {
  font-family: var(--font-serif), Georgia, serif;
  font-style: italic;
  font-size: clamp(20px, 2.4vw, 24px);
  font-weight: 400;
  color: var(--walnut-deep);
  line-height: 1.45;
  max-width: 700px;
  margin: 0 auto 16px;
}
.gpm-resources-page .verse-citation {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 500;
  color: var(--gold-secondary);
  letter-spacing: 0.24em;
  text-transform: uppercase;
}

/* ===== NEWSLETTER BAND ===== */
.gpm-resources-page .newsletter-band {
  background: var(--canvas-deep);
  padding: 80px 32px;
  text-align: center;
  border-top: 1px solid var(--line-soft);
}
.gpm-resources-page .newsletter-inner { max-width: 560px; margin: 0 auto; }
.gpm-resources-page .newsletter-eyebrow {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 500;
  color: var(--gold-secondary);
  letter-spacing: 0.24em;
  margin-bottom: 16px;
  display: block;
  text-transform: uppercase;
}
.gpm-resources-page .newsletter-h {
  font-family: var(--font-serif), Georgia, serif;
  font-size: clamp(26px, 3vw, 32px);
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.25;
  margin-bottom: 16px;
}
.gpm-resources-page .newsletter-subhead {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.65;
  margin-bottom: 32px;
}
.gpm-resources-page .newsletter-form {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 16px;
}
.gpm-resources-page .newsletter-form input[type="email"] {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 400;
  color: var(--walnut-deep);
  background: var(--canvas-card);
  border: 1px solid var(--line-soft);
  border-radius: 3px;
  padding: 14px 18px;
  width: 100%;
  max-width: 320px;
  outline: none;
  transition: border-color 0.2s ease;
}
.gpm-resources-page .newsletter-form input[type="email"]::placeholder {
  color: var(--walnut-mid);
  opacity: 0.6;
}
.gpm-resources-page .newsletter-form input[type="email"]:focus {
  border-color: var(--walnut-mid);
}
.gpm-resources-page .newsletter-form button {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--cream-canvas);
  background: var(--walnut-deep);
  border: 0;
  border-radius: 3px;
  padding: 14px 24px;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.2s ease;
}
.gpm-resources-page .newsletter-form button:hover { background: #2A1B0E; }
.gpm-resources-page .newsletter-form button:disabled {
  background: rgba(61, 40, 23, 0.45);
  cursor: not-allowed;
}
.gpm-resources-page .newsletter-privacy {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.5;
}
.gpm-resources-page .newsletter-status {
  margin-top: 12px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--gold-secondary);
}

/* ===== DISCLAIMER BAND ===== */
.gpm-resources-page .disclaimer-band {
  background: var(--cream-canvas);
  padding: 48px 32px;
}
.gpm-resources-page .disclaimer-inner {
  max-width: 1200px;
  margin: 0 auto;
}
.gpm-resources-page .disclaimer-text {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 13px;
  font-weight: 400;
  color: rgba(61, 40, 23, 0.75);
  line-height: 1.6;
  margin-bottom: 16px;
}
.gpm-resources-page .disclaimer-divider {
  width: 100%;
  height: 1px;
  background: rgba(184, 150, 46, 0.25);
  margin-top: 24px;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .gpm-resources-page .left-rail { display: none; }
  .gpm-resources-page .mobile-strip { display: block; }
  .gpm-resources-page .main-layout { padding: 0 24px; gap: 0; }
  .gpm-resources-page .hero-section {
    padding: 56px 24px 48px;
    display: block;
  }
  .gpm-resources-page .hero-spacer { display: none; }
  .gpm-resources-page .hero-lede { font-size: 16px; }
  .gpm-resources-page .content-column { padding-bottom: 56px; }
  .gpm-resources-page .article-tile {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 20px 16px;
  }
  .gpm-resources-page .tile-right {
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
  .gpm-resources-page .tile-title { font-size: 20px; }
  .gpm-resources-page .tile-summary { font-size: 16px; }
  .gpm-resources-page .verse-band { padding: 56px 24px; }
  .gpm-resources-page .newsletter-band { padding: 56px 24px; }
  .gpm-resources-page .newsletter-form {
    flex-direction: column;
    align-items: center;
  }
  .gpm-resources-page .newsletter-form input[type="email"] { max-width: 100%; }
  .gpm-resources-page .newsletter-form button {
    width: 100%;
    max-width: 320px;
    min-height: 44px;
  }
  .gpm-resources-page .disclaimer-band { padding: 40px 24px; }
}
@media (max-width: 480px) {
  .gpm-resources-page .hero-h1 { font-size: 28px; }
  .gpm-resources-page .group-title { font-size: 24px; }
}
`

const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ResourcesPage() {
  const [filter, setFilter] = useState<string>('all')
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')
  const [newsletterMessage, setNewsletterMessage] = useState('')

  const onNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNewsletterMessage('')
    if (!email.trim() || !EMAIL_RX.test(email.trim())) {
      setNewsletterMessage('Please enter a valid email address.')
      setNewsletterStatus('error')
      return
    }
    setNewsletterStatus('sending')
    setTimeout(() => {
      setNewsletterStatus('success')
      setNewsletterMessage('Thanks — we will send a note when something new is up.')
      setEmail('')
    }, 1200)
  }

  const isSendingNewsletter = newsletterStatus === 'sending'

  return (
    <div className="gpm-resources-page">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      {/* MOBILE STICKY TOPIC STRIP — only visible <901px */}
      <nav className="mobile-strip" aria-label="Topic filter (mobile)">
        <div className="mobile-strip-inner">
          <button
            type="button"
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
            aria-pressed={filter === 'all'}
          >
            All articles<span className="count">&nbsp;·&nbsp;{TOTAL_ARTICLES}</span>
          </button>
          {TOPICS.map((t) => (
            <button
              key={t.filter}
              type="button"
              className={filter === t.filter ? 'active' : ''}
              onClick={() => setFilter(t.filter)}
              aria-pressed={filter === t.filter}
            >
              {t.label}
              <span className="count">&nbsp;·&nbsp;{t.articles.length}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section" aria-labelledby="resources-h1">
        <div className="hero-spacer" aria-hidden="true" />
        <div className="hero-content-col">
          <span className="hero-eyebrow">Resources</span>
          <h1 id="resources-h1" className="hero-h1">
            Plain answers to the questions people actually ask.
          </h1>
          <p className="hero-lede">
            Long-form pieces on how a Gold IRA works, what it costs, what you can hold, and how to think about it inside a retirement portfolio. Written to be read once and trusted, not skimmed and forgotten.
          </p>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <div className="main-layout">
        {/* LEFT RAIL (desktop) */}
        <aside className="left-rail" aria-label="Topic filter (desktop)">
          <span className="rail-eyebrow">Topics</span>
          <ul className="rail-list">
            <li>
              <button
                type="button"
                className={filter === 'all' ? 'active' : ''}
                onClick={() => setFilter('all')}
                aria-pressed={filter === 'all'}
              >
                All articles <span className="count">{TOTAL_ARTICLES}</span>
              </button>
            </li>
            {TOPICS.map((t) => (
              <li key={t.filter}>
                <button
                  type="button"
                  className={filter === t.filter ? 'active' : ''}
                  onClick={() => setFilter(t.filter)}
                  aria-pressed={filter === t.filter}
                >
                  {t.label} <span className="count">{t.articles.length}</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="rail-closing">
            We publish when there is something worth publishing.
          </p>
        </aside>

        {/* CONTENT COLUMN */}
        <div className="content-column">
          {TOPICS.map((topic) => {
            if (filter !== 'all' && filter !== topic.filter) return null
            return (
              <section
                key={topic.id}
                className="section-group"
                id={topic.id}
                aria-labelledby={`${topic.id}-title`}
              >
                <span className="group-eyebrow">{topic.sectionNumber}</span>
                <h2 id={`${topic.id}-title`} className="group-title">
                  {topic.sectionTitle}
                </h2>
                <p className="group-blurb">{topic.blurb}</p>
                {topic.articles.map((article) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="article-tile"
                  >
                    <div className="tile-left">
                      <h3 className="tile-title">{article.title}</h3>
                      <p className="tile-summary">{article.summary}</p>
                    </div>
                    <div className="tile-right">
                      <span className="tile-readtime">{article.readTime}</span>
                      <span className="tile-arrow" aria-hidden="true">→</span>
                    </div>
                  </Link>
                ))}
              </section>
            )
          })}
        </div>
      </div>

      {/* VERSE BAND */}
      <section className="verse-band" aria-label="Proverbs 11:1">
        <p className="verse-line">
          &ldquo;A false balance is an abomination to the Lord, but a just weight is His delight.&rdquo;
        </p>
        <span className="verse-citation">Proverbs 11:1</span>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-band" aria-labelledby="newsletter-h">
        <div className="newsletter-inner">
          <span className="newsletter-eyebrow">For when we publish next</span>
          <h2 id="newsletter-h" className="newsletter-h">
            A short note when something new is here.
          </h2>
          <p className="newsletter-subhead">
            We publish when there is something worth publishing. Not on a schedule, not for traffic. If you want to know when a new piece is up, we can send a short note.
          </p>
          <form
            className="newsletter-form"
            onSubmit={onNewsletterSubmit}
            noValidate
            aria-label="Newsletter signup"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              disabled={isSendingNewsletter}
            />
            <button type="submit" disabled={isSendingNewsletter}>
              {isSendingNewsletter ? 'Sending…' : 'Send me a note'}
            </button>
          </form>
          <p className="newsletter-privacy">
            No marketing email. No selling. Unsubscribe in one click.
          </p>
          {newsletterMessage ? (
            <p
              className="newsletter-status"
              role={newsletterStatus === 'error' ? 'alert' : 'status'}
              style={{
                color:
                  newsletterStatus === 'error'
                    ? 'var(--walnut-deep)'
                    : 'var(--gold-secondary)',
              }}
            >
              {newsletterMessage}
            </p>
          ) : null}
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="disclaimer-band" aria-label="Legal disclaimer">
        <div className="disclaimer-inner">
          <p className="disclaimer-text">
            <strong>Grace Precious Metals is a precious metals dealer.</strong> Gold IRAs require an IRS-approved custodian and an IRS-approved depository. Grace Precious Metals is not a financial, tax, or legal advisor. Gold and precious metals investments carry risk, including the potential loss of principal. Past performance does not guarantee future results. Consult qualified professionals before making investment decisions. Pricing reflects CFO-reviewed published policy as of the date shown.
          </p>
          <div className="disclaimer-divider" />
        </div>
      </section>
    </div>
  )
}
