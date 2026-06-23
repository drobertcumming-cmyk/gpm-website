import Image from 'next/image'
import { withBase } from '@/lib/basepath'

// Production-brief homepage §10 — briefing cover.
//
// 2026-06-23: the live-text 3D composed cover (oxblood face + layered
// wordmark/title/subtitle/photo/verse) was RETIRED and replaced by the
// single approved Direction 1 flat render. All cover text is baked into
// the image, so no live text remains here (it would otherwise duplicate).
// The container footprint is preserved (clamp width, 320/414 box) and the
// image uses object-fit: contain — no distortion, no layout shift.
//
// Reference: production brief §10; homepage_copy_v3_6.md §10 cover artwork.

export function CoverArtwork() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          position: 'relative',
          width: 'clamp(240px, 30vw, 320px)',
          aspectRatio: '320 / 414',
        }}
      >
        <Image
          src={withBase('/images/briefing/secret-gold-briefing-cover.png')}
          alt="The Secret Gold Briefing — Grace Precious Metals guide cover."
          fill
          sizes="(max-width: 768px) 240px, 320px"
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}
