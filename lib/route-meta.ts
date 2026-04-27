// Route → complianceFlags map. Static data so the marketing layout's banner
// component can resolve flags by pathname without importing every MDX file.
//
// For MDX-backed routes the flags are mirrored from each page's frontmatter
// (Phase 2 import). Update this file when a page's complianceFlags change.
//
// For the homepage (/), flags come from app/(marketing)/homepage.meta.ts via
// direct import — that file is the single source of truth for the homepage's
// compliance state.

import { homepageFlags } from '@/app/(marketing)/homepage.meta'

export const ROUTE_FLAGS: Record<string, readonly string[]> = {
  // Homepage — flags imported from homepage.meta.ts
  '/': homepageFlags,

  // Phase 2 imported pages
  '/pricing': ['external-counsel-review-required'],
  '/who-we-are/williams-story': [
    'external-counsel-review-required',
    'pending-counsel-reclearance-prior-role-phrasing',
    'william-non-compete-genesis-exposure',
  ],
  '/who-we-are': [
    'external-counsel-review-required',
    'pending-counsel-reclearance-prior-role-phrasing',
    'william-non-compete-genesis-exposure',
  ],
  '/who-we-are/compliance': [
    'external-counsel-review-required',
    'state-licensing-list-pending-counsel-delivery',
  ],
  '/rollover': ['external-counsel-review-required'],
  '/rollover/inherited-ira': [
    'external-counsel-review-required',
    'treasury-regulation-date-pending-confirmation',
  ],
  '/rollover/transfer': ['external-counsel-review-required'],
  '/advisor': [
    'external-counsel-review-required',
    'placeholder-content-populate-before-launch',
  ],
  '/resources': ['external-counsel-review-required'],
  '/resources/buyback': ['external-counsel-review-required'],
  '/resources/buyback/what-is-a-buyback-spread': ['external-counsel-review-required'],
  '/resources/buyback/how-to-get-a-buyback-quote': ['external-counsel-review-required'],
  '/resources/round-trip-cost': ['external-counsel-review-required'],
  '/resources/round-trip-cost/entry-vs-exit': ['external-counsel-review-required'],
  '/resources/round-trip-cost/no-setup-fee': ['external-counsel-review-required'],
  '/resources/numismatic-coins': [
    'external-counsel-review-required',
    'most-scrutiny-page-sentence-by-sentence-substantiation-required',
  ],
  '/resources/numismatic-coins/proof-and-premium': [
    'external-counsel-review-required',
    'most-scrutiny-page-sentence-by-sentence-substantiation-required',
  ],
  '/resources/numismatic-coins/bullion-vs-numismatic': [
    'external-counsel-review-required',
    'most-scrutiny-page-sentence-by-sentence-substantiation-required',
  ],
  '/faq': ['external-counsel-review-required'],
  '/contact': ['placeholder-content-populate-before-launch'],
  '/briefing': [
    'external-counsel-review-required',
    'pending-counsel-reclearance-prior-role-phrasing',
    'william-non-compete-genesis-exposure',
  ],
  '/legal/privacy': [
    'external-counsel-review-required',
    'placeholder-content-populate-before-launch',
  ],
  '/legal/terms': [
    'external-counsel-review-required',
    'placeholder-content-populate-before-launch',
  ],
  '/legal/disclosures': [
    'external-counsel-review-required',
    'placeholder-content-populate-before-launch',
  ],
  '/legal/licenses': [
    'external-counsel-review-required',
    'placeholder-content-populate-before-launch',
    'state-licensing-list-pending-counsel-delivery',
  ],
} as const

export function getRouteFlags(pathname: string): readonly string[] {
  // Strip trailing slash (except for root) for consistent lookup
  const normalized = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/'
  return ROUTE_FLAGS[normalized] ?? []
}
