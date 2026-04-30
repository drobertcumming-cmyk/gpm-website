'use client'

import { useState } from 'react'

// Production-brief homepage §10 — briefing-section form.
// Visually different surface than the hero form (sits on cream canvas, not on
// the dark walnut hero panel) but submits the same payload with `source:
// 'briefing_section'`. CTA is Tier 2 gold-filled — visually identical to the
// hero form CTA per Verification Gate criterion 4.
//
// Reference: production brief §10 form; production brief Form Functionality;
// homepage_copy_v3_6.md "Form Submission Behaviour".

interface FormState { name: string; email: string; phone: string }
const INITIAL: FormState = { name: '', email: '', phone: '' }

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
    const digits = trimmed.replace(/\D/g, '').length
    if (digits < 10) return 'Please enter a valid phone number.'
  }
  return null
}

const LABEL_STYLE: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: 12,
  fontWeight: 500,
  color: 'rgba(45, 38, 32, 0.78)',
  marginBottom: 4,
}

const INPUT_STYLE: React.CSSProperties = {
  width: '100%',
  background: 'var(--gpm-cream-warm)',
  border: '0.5px solid rgba(45, 38, 32, 0.22)',
  borderRadius: 2,
  padding: '10px 12px',
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  color: 'var(--gpm-ink-display)',
}

const ERROR_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 12,
  fontWeight: 500,
  color: '#A03030',
  marginTop: 4,
}

export function BriefingForm() {
  const [state, setState] = useState<FormState>(INITIAL)
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({ name: false, email: false, phone: false })
  const [errors, setErrors] = useState<Record<keyof FormState, string | null>>({ name: null, email: null, phone: null })
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const onBlur = (field: keyof FormState) => () => {
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors((er) => ({ ...er, [field]: validate(field, state[field]) }))
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
          source: 'briefing_section',
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
      <div role="status" aria-live="polite" style={{ maxWidth: 360 }}>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 18,
            color: 'var(--gpm-walnut-deep)',
            lineHeight: 1.4,
            marginBottom: 8,
          }}
        >
          Check your email. The briefing is on its way.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            color: 'rgba(45, 38, 32, 0.65)',
            lineHeight: 1.5,
          }}
        >
          If you don&rsquo;t see it within five minutes, check your spam folder.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate style={{ maxWidth: 360 }} aria-label="Send the Secret Gold Briefing">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <label htmlFor="briefing-name" style={LABEL_STYLE}>Name</label>
          <input
            id="briefing-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={state.name}
            onChange={onChange('name')}
            onBlur={onBlur('name')}
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'briefing-name-error' : undefined}
            style={INPUT_STYLE}
          />
          {errors.name ? (
            <p id="briefing-name-error" role="alert" style={ERROR_STYLE}>{errors.name}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="briefing-email" style={LABEL_STYLE}>Email</label>
          <input
            id="briefing-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={state.email}
            onChange={onChange('email')}
            onBlur={onBlur('email')}
            placeholder="Your email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'briefing-email-error' : undefined}
            style={INPUT_STYLE}
          />
          {errors.email ? (
            <p id="briefing-email-error" role="alert" style={ERROR_STYLE}>{errors.email}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="briefing-phone" style={LABEL_STYLE}>Phone</label>
          <input
            id="briefing-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={state.phone}
            onChange={onChange('phone')}
            onBlur={onBlur('phone')}
            placeholder="Your phone number"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'briefing-phone-error' : undefined}
            style={INPUT_STYLE}
          />
          {errors.phone ? (
            <p id="briefing-phone-error" role="alert" style={ERROR_STYLE}>{errors.phone}</p>
          ) : null}
        </div>
      </div>

      {submitError ? (
        <p role="alert" style={{ ...ERROR_STYLE, marginTop: 12 }}>{submitError}</p>
      ) : null}

      {/*
        Tier 2 form-submit CTA. Bumped 2026-04-30 (live-review pass) from
        13px / 12px 0 padding to 14px / 14px 0 to match the hero form CTA
        (verification criterion 4 — Tier 2 CTAs visually identical).
      */}
      <button
        type="submit"
        disabled={!allValid || submitting}
        style={{
          width: '100%',
          marginTop: 16,
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
          color: 'rgba(45, 38, 32, 0.65)',
          lineHeight: 1.5,
          textAlign: 'center',
          marginTop: 12,
        }}
      >
        We will email the briefing as a PDF. We do not sell or share your details.
      </p>
    </form>
  )
}
