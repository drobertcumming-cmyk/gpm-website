// Pre-launch banner. Renders on any page whose frontmatter `complianceFlags`
// contains at least one of the trigger flags below. Visible, non-dismissible,
// stays until the flag is removed from the page's MDX frontmatter.
//
// Step 4 directive: visually unmissable; stays until explicitly removed page
// by page. Uses the warning state token (deep amber on cream) — within the
// brand palette but stark enough to read as "do not ship".

const TRIGGER_FLAGS: ReadonlyArray<string> = [
  'external-counsel-review-required',
  'pending-counsel-reclearance-prior-role-phrasing',
  'william-non-compete-genesis-exposure',
  'most-scrutiny-page-sentence-by-sentence-substantiation-required',
  'state-licensing-list-pending-counsel-delivery',
  'treasury-regulation-date-pending-confirmation',
  'placeholder-content-populate-before-launch',
]

export function shouldShowPreLaunchBanner(
  flags: readonly string[] | undefined
): boolean {
  if (!flags || flags.length === 0) return false
  return flags.some((f) => TRIGGER_FLAGS.includes(f))
}

export function PreLaunchBanner({ flags }: { flags?: readonly string[] }) {
  if (!shouldShowPreLaunchBanner(flags)) return null

  const triggered = (flags ?? []).filter((f) => TRIGGER_FLAGS.includes(f))

  return (
    <div
      role="alert"
      aria-label="Pre-launch warning"
      className="w-full bg-state-warning text-canvas border-b-[3px] border-walnut"
    >
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-eyebrow mb-1">PRE-LAUNCH</p>
        <p className="text-body-lg font-medium leading-tight">
          Counsel review pending. Not for public access.
        </p>
        <p className="text-body-sm mt-2 opacity-90">
          Triggered by:{' '}
          <span className="font-mono text-body-sm">
            {triggered.join(', ')}
          </span>
        </p>
      </div>
    </div>
  )
}
