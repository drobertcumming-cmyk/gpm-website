import { NextResponse } from 'next/server'
import { submitBriefingRequest, type BriefingSubmission } from '@/lib/klaviyo'

// Briefing form submission endpoint. Hero form panel and briefing section
// form both POST here with `source: 'hero' | 'briefing_section'`. This route
// validates the payload server-side, then upserts a Klaviyo profile and
// triggers the briefing-delivery flow event.
//
// Client validation in the form components is a UX layer; this is the
// authoritative gate. Reject anything that doesn't pass server validation
// regardless of what the client sent.

export const runtime = 'nodejs'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_DIGITS_REGEX = /\D/g

interface IncomingBody {
  name?: unknown
  email?: unknown
  phone?: unknown
  source?: unknown
  submitted_at?: unknown
}

function bad(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status })
}

export async function POST(request: Request) {
  let body: IncomingBody
  try {
    body = (await request.json()) as IncomingBody
  } catch {
    return bad('invalid-json')
  }

  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
  const source = body.source === 'hero' || body.source === 'briefing_section' ? body.source : null
  const submittedAt = typeof body.submitted_at === 'string' ? body.submitted_at : new Date().toISOString()

  if (!source) return bad('invalid-source')
  if (name.length < 2) return bad('invalid-name')
  if (!EMAIL_PATTERN.test(email)) return bad('invalid-email')
  const phoneDigits = phone.replace(PHONE_DIGITS_REGEX, '').length
  if (phoneDigits < 10) return bad('invalid-phone')

  const submission: BriefingSubmission = {
    name,
    email,
    phone,
    source,
    submitted_at: submittedAt,
  }

  try {
    await submitBriefingRequest(submission)
  } catch (err) {
    // Log to server console for diagnostic; surface a generic error to the client.
    // Don't leak Klaviyo internals to the form caller.
    // eslint-disable-next-line no-console
    console.error('briefing submit failed', err)
    return NextResponse.json({ ok: false, error: 'klaviyo-error' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
