// Klaviyo client stub. Phase 1 placeholder — wired up when the BriefingForm
// and ContactForm components are built.
// Reference: DESIGN_BRIEF.md Section 37.4.

export const KLAVIYO_PRIVATE_KEY = process.env.KLAVIYO_PRIVATE_KEY
export const KLAVIYO_PUBLIC_KEY = process.env.NEXT_PUBLIC_KLAVIYO_PUBLIC_KEY

export interface BriefingSubmission {
  name: string
  email: string
}

export interface ContactSubmission {
  name: string
  email: string
  message: string
  topic: 'rollover' | 'pricing' | 'transfer' | 'advisor' | 'other'
}
