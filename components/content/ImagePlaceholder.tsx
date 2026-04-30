import Image from 'next/image'

// ImagePlaceholder — renders either a real Next.js <Image> (when src is
// supplied) or a surface-color block holding a centered label (placeholder
// fallback). Keeping both cases in one component lets pages flip from
// placeholder to real image without restructuring layout.
//
// Reference: DESIGN_BRIEF.md Section 13.3 (Next/Image required for CLS)
// and Section 38 (open imagery decisions).

interface ImagePlaceholderProps {
  /** Label rendered centered inside the placeholder when no src. */
  label: string
  /** CSS aspect-ratio value, e.g. "3 / 4". */
  aspect: string
  /** Optional real image source (under /public). When provided, renders an Image. */
  src?: string
  /** Alt text for the real image. Required when src is provided. */
  alt?: string
  /** Width hint for Next/Image. Defaults to 1200 for desktop usage. */
  width?: number
  /** Height hint for Next/Image. Computed from aspect if not provided. */
  height?: number
  className?: string
  /** Tailwind/CSS object-position override (e.g. "object-center"). */
  objectPosition?: string
}

function aspectToHeight(aspect: string, width: number): number {
  const m = aspect.match(/^\s*(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)\s*$/)
  if (!m) return width
  const aw = parseFloat(m[1])
  const ah = parseFloat(m[2])
  return Math.round((width * ah) / aw)
}

export function ImagePlaceholder({
  label,
  aspect,
  src,
  alt,
  width = 1200,
  height,
  className = '',
  objectPosition = 'center',
}: ImagePlaceholderProps) {
  if (src) {
    const h = height ?? aspectToHeight(aspect, width)
    return (
      <div
        className={`overflow-hidden w-full ${className}`}
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={src}
          alt={alt ?? ''}
          width={width}
          height={h}
          className="w-full h-full object-cover"
          style={{ objectPosition }}
        />
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`bg-surface w-full flex items-center justify-center ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <p className="text-body-sm text-ink-body opacity-70 text-center px-4 italic">
        {label}
      </p>
    </div>
  )
}
