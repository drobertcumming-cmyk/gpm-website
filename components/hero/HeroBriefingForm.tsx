'use client'

import { useState } from 'react'

// Hero form panel — translucent walnut card sitting on the cream hero canvas.
// Production brief §2 right zone; v3.6 §2 hero form panel + Form Submission
// Behaviour. Submits to /api/briefing with `source: 'hero'`.
//
// Validation per v3.6: required name (min 2 chars), valid email format,
// US-style phone format. Validation runs on blur and on submit; submit
// disabled until valid; loading spinner replaces button text on submit.

interface FormState {
  name: string
  email: string
  phone: string
}

const INITIAL_STATE: FormState = { name: '', email: '', phone: '' }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_DIGITS = /^[+()\-.\s\d]{10,}$/

function validate(field: keyof FormState, value: string): string | null {
  const trimmed = value.trim()
  if (field === 'name') {
    if (!trimmed) return 'Please enter your name.'
    if (trimmed.length < 2) return 'Please enter your name.'
  }
  if (field === 'email') {
    if (!trimmed) return 'Please enter your email.'
    if (!EMAIL_PATTERN.test(trimmed)) return 'Please enter a valid email address.'
  }
  if (field === 'phone') {
    if (!trimmed) return 'Please enter your phone number.'
    if (!PHONE_DIGITS.test(trimmed)) return 'Please enter a valid phone number.'
    const digitCount = trimmed.replace(/\D/g, '').length
    if (digitCount < 10) return 'Please enter a valid phone number.'
  }
  return null
}

// Type sizes bumped 2026-04-30 per CMO live-render review (second pass):
//   eyebrow 12→13px / subtitle 15→16px / labels 12→13px (alpha 0.78→0.85,
//   mb 4→6) / inputs 13→14px (padding 10/12 → 11/14) / submit 13→14px
//   (padding 12/0 → 14/0) / disclosure 10→12px (alpha 0.65→0.70,
//   line-height 1.5→1.55). Panel stays at 360px max-width.
const LABEL_STYLE: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: 13,
  fontWeight: 500,
  color: 'rgba(242, 237, 224, 0.85)',
  marginBottom: 6,
}

const INPUT_STYLE: React.CSSProperties = {
  width: '100%',
  background: 'var(--gpm-cream-warm)',
  border: '0.5px solid rgba(45, 38, 32, 0.22)',
  borderRadius: 2,
  padding: '11px 14px',
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  color: 'var(--gpm-ink-display)',
}

const ERROR_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 11,
  fontWeight: 500,
  color: '#FF8B7A',
  marginTop: 4,
}

export function HeroBriefingForm() {
  const [state, setState] = useState<FormState>(INITIAL_STATE)
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({ name: false, email: false, phone: false })
  const [errors, setErrors] = useState<Record<keyof FormState, string | null>>({ name: null, email: null, phone: null })
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const onBlur = (field: keyof FormState) => () => {
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors((e) => ({ ...e, [field]: validate(field, state[field]) }))
  }

  const onChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setState((s) => ({ ...s, [field]: value }))
    if (touched[field]) {
      setErrors((er) => ({ ...er, [field]: validate(field, value) }))
    }
  }

  const allValid =
    !validate('name', state.name) && !validate('email', state.email) && !validate('phone', state.phone)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Force-validate all fields
    const next = {
      name: validate('name', state.name),
      email: validate('email', state.email),
      phone: validate('phone', state.phone),
    }
    setErrors(next)
    setTouched({ name: true, email: true, phone: true })
    if (next.name || next.email || next.phone) return

    setSubmitting(true)
    setSubmitError(null)
    try {
      const res = await fetch('/api/briefing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: state.name.trim(),
          email: state.email.trim(),
          phone: state.phone.trim(),
          source: 'hero',
          submitted_at: new Date().toISOString(),
        }),
      })
      if (!res.ok) throw new Error('submit-failed')
      setSubmitted(true)
    } catch {
      setSubmitError('Something went wrong. Please try again or call us.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          background: 'rgba(45, 38, 32, 0.94)',
          border: '0.5px solid rgba(45, 38, 32, 0.20)',
          borderRadius: 4,
          padding: 22,
          boxShadow: '0 2px 16px rgba(60, 40, 15, 0.20)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 18,
            color: 'var(--gpm-canvas)',
            lineHeight: 1.4,
            marginBottom: 8,
          }}
        >
          Check your email. The briefing is on its way.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            color: 'rgba(242, 237, 224, 0.70)',
            lineHeight: 1.5,
          }}
        >
          If you don’t see it within five minutes, check your spam folder.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-labelledby="hero-form-eyebrow"
      style={{
        background: 'rgba(45, 38, 32, 0.94)',
        border: '0.5px solid rgba(45, 38, 32, 0.20)',
        borderRadius: 4,
        padding: 22,
        boxShadow: '0 2px 16px rgba(60, 40, 15, 0.20)',
      }}
    >
      <p
        id="hero-form-eyebrow"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: '0.10em',
          color: 'var(--gpm-gold-primary)',
          lineHeight: 1.4,
        }}
      >
        GET THE SECRET GOLD BRIEFING
      </p>
      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontWeight: 500,
          fontSize: 16,
          color: 'var(--gpm-canvas)',
          lineHeight: 1.4,
          marginTop: 8,
          marginBottom: 18,
        }}
      >
        What the Other IRA Companies Hide From You.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div>
          <label htmlFor="hero-name" style={LABEL_STYLE}>Name</label>
          <input
            id="hero-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={state.name}
            onChange={onChange('name')}
            onBlur={onBlur('name')}
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'hero-name-error' : undefined}
            style={INPUT_STYLE}
          />
          {errors.name ? (
            <p id="hero-name-error" role="alert" style={ERROR_STYLE}>{errors.name}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="hero-email" style={LABEL_STYLE}>Email</label>
          <input
            id="hero-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={state.email}
            onChange={onChange('email')}
            onBlur={onBlur('email')}
            placeholder="Your email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'hero-email-error' : undefined}
            style={INPUT_STYLE}
          />
          {errors.email ? (
            <p id="hero-email-error" role="alert" style={ERROR_STYLE}>{errors.email}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="hero-phone" style={LABEL_STYLE}>Phone</label>
          <input
            id="hero-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={state.phone}
            onChange={onChange('phone')}
            onBlur={onBlur('phone')}
            placeholder="Your phone number"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'hero-phone-error' : undefined}
            style={INPUT_STYLE}
          />
          {errors.phone ? (
            <p id="hero-phone-error" role="alert" style={ERROR_STYLE}>{errors.phone}</p>
          ) : null}
        </div>
      </div>

      {submitError ? (
        <p role="alert" style={{ ...ERROR_STYLE, marginTop: 12 }}>{submitError}</p>
      ) : null}

      <button
        type="submit"
        disabled={!allValid || submitting}
        style={{
          width: '100%',
          marginTop: 14,
          background: 'var(--gpm-gold-deep)',
          color: '#FFFFFF',
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          fontWeight: 500,
          border: 0,
          borderRadius: 4,
          padding: '14px 0',
          cursor: !allValid || submitting ? 'not-allowed' : 'pointer',
          opacity: !allValid || submitting ? 0.7 : 1,
          transition: 'background 150ms ease-out, opacity 150ms ease-out',
        }}
        aria-busy={submitting}
      >
        {submitting ? 'Sending…' : 'Send me the briefing'}
      </button>

      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 12,
          color: 'rgba(242, 237, 224, 0.70)',
          lineHeight: 1.55,
          textAlign: 'center',
          marginTop: 10,
        }}
      >
        We will email the briefing as a PDF. We do not sell or share your details.
      </p>
    </form>
  )
}
