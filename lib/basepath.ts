// Public-asset path helper. The site runs at the document root in dev /
// Vercel / Netlify (basePath empty) but at `/gpm-website` on the GitHub
// Pages preview. With `images.unoptimized: true` (required by static
// export), `next/image` does NOT automatically prepend basePath to src
// values — known Next.js limitation. We work around it by wrapping
// every Image src with `withBase()` so the rendered HTML carries the
// correct prefix.
//
// `NEXT_PUBLIC_BASE_PATH` is set in `next.config.js` and inlined at
// build time. In dev / Vercel / Netlify it resolves to an empty string
// (no prefix) and `withBase` is a no-op. On GitHub Pages it resolves
// to `/gpm-website` and the prefix is applied.

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function withBase(path: string): string {
  if (!path) return path
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  if (!path.startsWith('/')) return BASE_PATH + '/' + path
  return BASE_PATH + path
}
