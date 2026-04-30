/**
 * Grace Precious Metals — Tailwind Configuration
 *
 * Imports tokens.ts (source of truth) and generates Tailwind utilities
 * that match the design system. The default Tailwind theme is replaced,
 * not extended, because Grace's system is intentionally restricted —
 * exposing every default utility would invite drift.
 *
 * Reference: DESIGN_BRIEF.md Section 12 (Design tokens).
 */

import type { Config } from 'tailwindcss'
import type { CSSRuleObject } from 'tailwindcss/types/config'
import plugin from 'tailwindcss/plugin'
import { tokens } from './tokens'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './content/**/*.{md,mdx}',
    './lib/**/*.{ts,tsx}',
  ],

  // Replace default theme entirely — Grace's system is restricted by design
  theme: {
    // ------------------------------------------------------------
    // Colors — flattened to match Tailwind's hierarchical convention
    // ------------------------------------------------------------
    colors: {
      transparent: 'transparent',
      current:     'currentColor',
      inherit:     'inherit',

      // White — Tier 1 / Tier 2 button label colour; hero copy on dark gradient (production brief)
      white:       '#FFFFFF',

      // Surfaces
      canvas:        tokens.color.canvas,
      'canvas-deep': tokens.color.canvasDeep,
      surface:       tokens.color.surface,

      // Linen — production-brief homepage cream surfaces (Option A, 2026-04-29)
      linen: {
        base: tokens.color.linenBase,
        warm: tokens.color.linenWarm,
      },

      // Cream — form input backgrounds
      'cream-warm': tokens.color.creamWarm,

      // Ink (text)
      ink: {
        body:    tokens.color.inkBody,
        display: tokens.color.inkDisplay,
      },

      // Gold (accent) — extended on 2026-04-29 with hover + secondary
      gold: {
        DEFAULT:   tokens.color.goldPrimary,
        deep:      tokens.color.goldDeep,
        hover:     tokens.color.goldHover,
        secondary: tokens.color.goldSecondary,
      },

      // Walnut — extended on 2026-04-29 with deep variant for footer + section headlines
      walnut: {
        DEFAULT: tokens.color.walnut,
        deep:    tokens.color.walnutDeep,
      },

      // Oxblood — briefing cover face (single-purpose)
      oxblood: tokens.color.oxblood,

      // Borders
      border: {
        light: tokens.color.borderLight,
      },

      // Semantic states
      state: {
        error:   tokens.color.stateError,
        success: tokens.color.stateSuccess,
        warning: tokens.color.stateWarning,
        info:    tokens.color.stateInfo,
      },

      // Data viz (reserved for post-launch)
      data: {
        positive: tokens.color.dataPositive,
        negative: tokens.color.dataNegative,
        neutral:  tokens.color.dataNeutral,
        emphasis: tokens.color.dataEmphasis,
      },
    },

    // ------------------------------------------------------------
    // Spacing — restricted to Grace scale
    // ------------------------------------------------------------
    spacing: {
      0:  '0',
      px: '1px',
      ...tokens.space,
    },

    // ------------------------------------------------------------
    // Breakpoints
    // ------------------------------------------------------------
    screens: {
      sm: tokens.breakpoint.sm,
      md: tokens.breakpoint.md,
      lg: tokens.breakpoint.lg,
    },

    // ------------------------------------------------------------
    // Container max-widths
    // ------------------------------------------------------------
    maxWidth: {
      none:    'none',
      full:    '100%',
      prose:   tokens.container.prose,
      content: tokens.container.content,
      wide:    tokens.container.wide,
      page:    tokens.container.page,
    },

    // ------------------------------------------------------------
    // Border radius
    // ------------------------------------------------------------
    borderRadius: tokens.radius,

    // ------------------------------------------------------------
    // Font families
    // ------------------------------------------------------------
    fontFamily: {
      serif: ['var(--font-serif)', 'Georgia', 'serif'],
      sans:  ['var(--font-sans)', '-apple-system', 'system-ui', 'sans-serif'],
      mono:  ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },

    // ------------------------------------------------------------
    // Font sizes — only what's in the type token system
    // Component code should prefer .text-display-xl, .text-h2, etc.
    // (custom plugin below) which compose family + weight + line-height + tracking
    //
    // Production-brief homepage additions (2026-04-29):
    //   eyebrow-md, disclaimer, testimonial, body-fluid, card-description,
    //   first-heading, hero-heading, pull-quote, whats-inside-item
    // ------------------------------------------------------------
    fontSize: {
      // Eyebrows
      'eyebrow':            ['11px', { lineHeight: '1', letterSpacing: '0.22em' }],
      'eyebrow-md':         ['12px', { lineHeight: '1', letterSpacing: '0.10em' }],

      // Body
      'disclaimer':         ['13px', { lineHeight: '1.6' }],
      'body-sm':            ['14px', { lineHeight: '1.6' }],
      'testimonial':        ['15px', { lineHeight: '1.55' }],
      'whats-inside-item':  ['15px', { lineHeight: '1.55' }],
      'body':               ['16px', { lineHeight: '1.65' }],
      'card-description':   ['16px', { lineHeight: '1.55' }],
      'body-fluid':         ['clamp(16px, 1.4vw, 17px)', { lineHeight: '1.65' }],
      'body-lg':            ['18px', { lineHeight: '1.6' }],
      'section-lead':       ['18px', { lineHeight: '1.55' }],

      // Headings
      'h3':                 ['22px', { lineHeight: '1.3' }],
      'pull-quote':         ['clamp(20px, 2vw, 24px)', { lineHeight: '1.45' }],
      'h2':                 ['32px', { lineHeight: '1.15', letterSpacing: '-0.005em' }],
      'first-heading':      ['clamp(28px, 4.5vw, 36px)', { lineHeight: '1.20', letterSpacing: '-0.005em' }],
      'hero-heading':       ['clamp(28px, 5vw, 48px)',   { lineHeight: '1.18', letterSpacing: '-0.005em' }],
      'display-lg':         ['56px', { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
      'display-xl':         ['72px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
    },

    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
    },

    // ------------------------------------------------------------
    // Border widths
    // ------------------------------------------------------------
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      hairline: '0.5px',
      1: '1px',
      3: '3px',
    },

    extend: {
      // Transition durations match motion tokens
      transitionDuration: {
        color:     '150ms',
        opacity:   '200ms',
        transform: '200ms',
      },

      transitionTimingFunction: {
        DEFAULT: 'ease-out',
      },

      // Letter spacing additions for type tokens
      letterSpacing: {
        eyebrow: '0.22em',
      },
    },
  },

  // ------------------------------------------------------------
  // Plugins
  // ------------------------------------------------------------
  plugins: [
    // Type token utilities — generates .text-display-xl, .text-h2, etc.
    // as composed component classes (not just font-size utilities).
    plugin(function ({ addComponents }) {
      const typeTokens = Object.entries(tokens.text).reduce(
        (acc, [name, spec]) => {
          // Convert camelCase to kebab-case for class names
          const className =
            '.text-' +
            name.replace(/([A-Z])/g, '-$1').toLowerCase()
          acc[className] = spec as unknown as CSSRuleObject
          return acc
        },
        {} as CSSRuleObject
      )

      addComponents(typeTokens)
    }),

    // Tabular numerals utility for pricing displays
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.tabular-nums': {
          'font-feature-settings': '"tnum" 1',
          'font-variant-numeric':  'tabular-nums',
        },
      })
    }),
  ],
}

export default config
