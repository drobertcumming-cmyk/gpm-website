// Klaviyo client for the homepage briefing forms.
// Both forms (hero panel + briefing section) submit to /api/briefing which
// calls these helpers. Server-side use only (KLAVIYO_PRIVATE_KEY must never
// be exposed to the client).
//
// On submission:
//   1. Create or update a Klaviyo profile with name / email / phone
//   2. Trigger a Klaviyo custom event ("GPM Secret Gold Briefing Requested")
//      that the briefing-delivery flow listens for
//
// LAUNCH BLOCKER LB-13: the Klaviyo dashboard config (list, flow, email
// template, PDF attachment) is an ops task. This code submits the right
// shape; the Klaviyo side must be configured before launch.

export const KLAVIYO_PRIVATE_KEY = process.env.KLAVIYO_PRIVATE_KEY ?? ''
export const KLAVIYO_PUBLIC_KEY = process.env.NEXT_PUBLIC_KLAVIYO_PUBLIC_KEY ?? ''
export const KLAVIYO_BRIEFING_LIST_ID = process.env.KLAVIYO_BRIEFING_LIST_ID ?? ''

const KLAVIYO_API_BASE = 'https://a.klaviyo.com/api'
const KLAVIYO_API_REVISION = '2024-10-15'

export interface BriefingSubmission {
  name: string
  email: string
  phone: string
  source: 'hero' | 'briefing_section'
  submitted_at: string
}

export interface ContactSubmission {
  name: string
  email: string
  message: string
  topic: 'rollover' | 'pricing' | 'transfer' | 'advisor' | 'other'
}

function authHeaders(): HeadersInit {
  if (!KLAVIYO_PRIVATE_KEY) {
    throw new Error('KLAVIYO_PRIVATE_KEY is not configured')
  }
  return {
    Authorization: `Klaviyo-API-Key ${KLAVIYO_PRIVATE_KEY}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
    revision: KLAVIYO_API_REVISION,
  }
}

// Create or update a Klaviyo profile. Klaviyo's POST /profiles either creates
// or returns 409 if the profile exists; on 409 we extract the existing id and
// PATCH the profile attributes.
async function upsertProfile(submission: BriefingSubmission): Promise<string> {
  const firstName = submission.name.split(' ')[0]
  const lastName = submission.name.split(' ').slice(1).join(' ') || undefined

  const profileBody = {
    data: {
      type: 'profile',
      attributes: {
        email: submission.email,
        phone_number: submission.phone,
        first_name: firstName,
        last_name: lastName,
        properties: {
          gpm_briefing_source: submission.source,
          gpm_submitted_at: submission.submitted_at,
        },
      },
    },
  }

  const createRes = await fetch(`${KLAVIYO_API_BASE}/profiles/`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(profileBody),
  })

  if (createRes.status === 201) {
    const json = (await createRes.json()) as { data: { id: string } }
    return json.data.id
  }

  if (createRes.status === 409) {
    const conflict = (await createRes.json()) as {
      errors?: Array<{ meta?: { duplicate_profile_id?: string } }>
    }
    const id = conflict.errors?.[0]?.meta?.duplicate_profile_id
    if (!id) throw new Error('klaviyo-conflict-no-id')
    const patchRes = await fetch(`${KLAVIYO_API_BASE}/profiles/${id}/`, {
      method: 'PATCH',
      headers: authHeaders(),
      body: JSON.stringify({
        data: { type: 'profile', id, attributes: profileBody.data.attributes },
      }),
    })
    if (!patchRes.ok) throw new Error(`klaviyo-patch-failed-${patchRes.status}`)
    return id
  }

  const text = await createRes.text()
  throw new Error(`klaviyo-create-failed-${createRes.status}: ${text}`)
}

async function trackBriefingEvent(profileId: string, submission: BriefingSubmission): Promise<void> {
  const body = {
    data: {
      type: 'event',
      attributes: {
        properties: {
          source: submission.source,
          submitted_at: submission.submitted_at,
        },
        metric: {
          data: {
            type: 'metric',
            attributes: { name: 'GPM Secret Gold Briefing Requested' },
          },
        },
        profile: {
          data: { type: 'profile', id: profileId },
        },
      },
    },
  }
  const res = await fetch(`${KLAVIYO_API_BASE}/events/`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`klaviyo-event-failed-${res.status}: ${text}`)
  }
}

export async function submitBriefingRequest(submission: BriefingSubmission): Promise<void> {
  const profileId = await upsertProfile(submission)
  await trackBriefingEvent(profileId, submission)
}
