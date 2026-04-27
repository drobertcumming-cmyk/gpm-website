import { LinkArrow } from '@/components/cta'

// VerseAnchor — Block 7 of the homepage. Standing architectural block: one
// sentence of scripture, one sentence of explanation, one link. Smaller than
// the hero verse (text-display-lg vs text-display-xl) but uses the same
// structural-rule + eyebrow + verse arrangement.
//
// Italic emphasis on "His" is config-flag controllable per Section 9.1.
//
// Reference: DESIGN_BRIEF.md Section 9 + fragments Block 7.

interface VerseAnchorProps {
  emphasizePronoun?: boolean
}

export function VerseAnchor({ emphasizePronoun = true }: VerseAnchorProps) {
  return (
    <section aria-label="Proverbs 11:1 anchor">
      <div className="max-w-content mx-auto">
        <div
          aria-hidden="true"
          className="bg-gold-deep w-6 h-[0.5px]"
        />
        <p className="text-eyebrow text-gold-deep mt-4">Proverbs 11:1</p>
        <p className="text-display-lg text-ink-display mt-6 max-w-prose">
          &ldquo;A false balance is an abomination to the Lord, but a just
          weight is{' '}
          {emphasizePronoun ? (
            <em className="font-medium">His</em>
          ) : (
            <>His</>
          )}{' '}
          delight.&rdquo;
        </p>
        <p className="text-body text-ink-body mt-6 max-w-prose">
          The just weight is what you are charged. Ours is visible, because
          the number is on this page. Accurate, because what is published is
          what is charged. Constant, because it does not move between
          customers.
        </p>
        <div className="mt-6">
          <LinkArrow href="/who-we-are">Who we are</LinkArrow>
        </div>
      </div>
    </section>
  )
}
