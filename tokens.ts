/**
 * Grace Precious Metals — Design Tokens
 *
 * Source of truth for the design system. tailwind.config.ts and app/globals.css
 * both consume from this file. Editing values here updates the entire system
 * on the next build.
 *
 * Reference: DESIGN_BRIEF.md Section 12 (Design tokens).
 *
 * Restrictions on editing:
 * - Do not add new color tokens without sign-off. The seven-role system is
 *   intentionally restricted; new colors dilute the discipline.
 * - Do not add type tokens beyond the eight specified. The type system is
 *   complete; new tokens fragment hierarchy.
 * - Spacing scale is restricted to the listed values. Do not add intermediate
 *   values (e.g. space-5, space-7).
 * - Do not introduce blue tones, dark-mode tokens, or aspirational gradient
 *   palettes anywhere in this file.
 */

export const tokens = {
  // ============================================================
  // COLOR — 7 primary roles + 2 supporting + 4 semantic states
  // Reference: Brief Section 7 and 12.1
  // ============================================================

  color: {
    // Primary roles
    canvas:       '#F2EDE0',  // Page background
    canvasDeep:   '#F8F5EB',  // Hover states, table row stripes
    surface:      '#E8E2CC',  // Cards, panels, William testimonial band
    inkBody:      '#1F1B16',  // Body copy, primary text
    inkDisplay:   '#2D2620',  // Headings, display type
    goldPrimary:  '#C9A96C',  // Muted gold — accents, rules, wordmark
    goldDeep:     '#B8962E',  // Reserved — verse, key numerals, wordmark rule
    walnut:       '#3B342A',  // CTAs, refusal blocks, structural emphasis

    // Supporting
    borderLight:  '#D5CDB6',  // Card edges, form field borders, hairlines

    // Semantic states (warm-grounded variants — no pure red/green)
    stateError:   '#A03A28',  // Warm rust — form validation errors
    stateSuccess: '#5C7A3E',  // Warm olive — submission success
    stateWarning: '#A07028',  // Deep amber — caution states
    stateInfo:    '#4A4239',  // Warm dark — informational asides

    // Reserved data-viz tokens (post-launch calculator and live spot display)
    // Resolve to existing palette colors — see brief Section 7.4 and 11.3
    dataPositive: '#C9A96C',  // = goldPrimary (price moving up)
    dataNegative: '#3B342A',  // = walnut (price moving down)
    dataNeutral:  '#1F1B16',  // = inkBody (no change)
    dataEmphasis: '#B8962E',  // = goldDeep (key figure)
  },

  // ============================================================
  // TYPOGRAPHY — 8 type tokens
  // Reference: Brief Section 8 and 12.2
  //
  // Variable fonts loaded via next/font in app/layout.tsx:
  //   Source Serif 4 (display + editorial)
  //   Source Sans 3 (body + UI)
  //
  // The CSS variables --font-serif and --font-sans are set on body by
  // Next.js font loader; tokens reference them via var().
  // ============================================================

  font: {
    serif: 'var(--font-serif)',
    sans:  'var(--font-sans)',
  },

  text: {
    // Display — hero verse only
    displayXl: {
      fontFamily:    'var(--font-serif)',
      fontSize:      '72px',
      fontWeight:    400,
      lineHeight:    1.05,
      letterSpacing: '-0.02em',
    },
    // Display — H1 standard pages
    displayLg: {
      fontFamily:    'var(--font-serif)',
      fontSize:      '56px',
      fontWeight:    500,
      lineHeight:    1.1,
      letterSpacing: '-0.015em',
    },
    // Section headers
    h2: {
      fontFamily:    'var(--font-serif)',
      fontSize:      '32px',
      fontWeight:    500,
      lineHeight:    1.15,
      letterSpacing: '-0.005em',
    },
    // Subsections, card titles
    h3: {
      fontFamily:    'var(--font-serif)',
      fontSize:      '22px',
      fontWeight:    500,
      lineHeight:    1.3,
      letterSpacing: '0',
    },
    // Lead paragraphs
    bodyLg: {
      fontFamily:    'var(--font-sans)',
      fontSize:      '18px',
      fontWeight:    400,
      lineHeight:    1.6,
      letterSpacing: '0',
    },
    // Body copy default — DO NOT reduce below 16px on any breakpoint
    body: {
      fontFamily:    'var(--font-sans)',
      fontSize:      '16px',
      fontWeight:    400,
      lineHeight:    1.65,
      letterSpacing: '0',
    },
    // Captions, small body, helper text
    bodySm: {
      fontFamily:    'var(--font-sans)',
      fontSize:      '14px',
      fontWeight:    400,
      lineHeight:    1.6,
      letterSpacing: '0',
    },
    // Section eyebrows — the only all-caps register on the site
    eyebrow: {
      fontFamily:     'var(--font-sans)',
      fontSize:       '11px',
      fontWeight:     500,
      lineHeight:     1,
      letterSpacing:  '0.22em',
      textTransform:  'uppercase' as const,
    },
    // Pull-quotes (William testimony band, in-line testimonial quotes)
    quote: {
      fontFamily:    'var(--font-serif)',
      fontSize:      '19px',
      fontWeight:    400,
      fontStyle:     'italic' as const,
      lineHeight:    1.5,
      letterSpacing: '0',
    },
  },

  // Mobile breakpoint scaling for display sizes only.
  // Body sizes hold across breakpoints to preserve legibility for older readers.
  textMobile: {
    displayXl: { fontSize: '44px' },
    displayLg: { fontSize: '36px' },
    h2:        { fontSize: '24px' },
    h3:        { fontSize: '20px' },
  },

  // ============================================================
  // SPACING — 8px base, restricted scale
  // Reference: Brief Section 12.3
  //
  // Restricted by design. Do not add intermediate values.
  // ============================================================

  space: {
    1:  '4px',    // 0.25rem — tightest gap, inline icon spacing
    2:  '8px',    // 0.5rem  — internal pill padding, tight stacks
    3:  '12px',   // 0.75rem — button gap, label-to-input gap
    4:  '16px',   // 1rem    — standard card padding, default paragraph spacing
    6:  '24px',   // 1.5rem  — card external gap, hero element rhythm
    8:  '32px',   // 2rem    — section-to-section within a screen
    12: '48px',   // 3rem    — major section break (mobile)
    16: '64px',   // 4rem    — hero internal padding, page-to-section (desktop)
    24: '96px',   // 6rem    — top-of-page hero, large section breaks
  },

  // ============================================================
  // SIZING & LAYOUT
  // Reference: Brief Section 12.4
  // ============================================================

  breakpoint: {
    sm: '640px',   // Mobile threshold
    md: '768px',   // Tablet
    lg: '1024px',  // Desktop
  },

  container: {
    prose:   '640px',   // Body prose, editorial line length
    content: '880px',   // Content blocks with sidebars or supporting visuals
    wide:    '1200px',  // Hero sections, grid layouts
    page:    '1440px',  // Outer page maximum
  },

  // ============================================================
  // RADIUS — restrained, three values
  // Reference: Brief Section 12.5
  // ============================================================

  radius: {
    none: '0px',   // Refusal blocks, structural blocks, verse band, hero edges
    sm:   '3px',   // Buttons, badges, small UI components
    md:   '4px',   // Cards, surface panels, image frames
  },

  // ============================================================
  // BORDERS
  // Reference: Brief Section 12.6
  // ============================================================

  border: {
    rule:        '0.5px solid #C9A96C',  // Structural rules, eyebrow rules, dividers
    ruleDeep:    '0.5px solid #B8962E',  // Wordmark rule, verse band rule (reserved)
    component:   '0.5px solid #D5CDB6',  // Card edges, form field edges
    walnut:      '1px solid #3B342A',    // Refusal-block left rule, secondary CTA outline
    walnutThick: '3px solid #3B342A',    // Refusal block left accent
  },

  // ============================================================
  // MOTION — three transitions, reduced-motion absolute
  // Reference: Brief Section 12.7 and 15
  //
  // The site honors prefers-reduced-motion absolutely (rule in globals.css).
  // ============================================================

  motion: {
    color:     '150ms ease-out',  // Color/background/border on hover/focus
    opacity:   '200ms ease-out',  // Content disclosure (FAQ accordions, etc.)
    transform: '200ms ease-out',  // Subtle button-press transform only
  },

  // ============================================================
  // PERFORMANCE BUDGET
  // Reference: Brief Section 13.3
  //
  // These targets are constraints on every page, not aspirations.
  // Lighthouse score must be >=95 on every page before merge.
  // ============================================================

  performance: {
    largestContentfulPaint: 2000,   // ms, on 4G
    firstInputDelay:        100,    // ms
    cumulativeLayoutShift:  0.05,   // stricter than the 0.1 standard
    totalPageWeight:        1024,   // KB initial, fonts excluded
    fontWeight:             100,    // KB combined, both Source variable fonts
    lighthouseMin:          95,     // every category, every page
  },
} as const

export type Tokens = typeof tokens
