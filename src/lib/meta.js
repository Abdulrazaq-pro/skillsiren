import { SITE_URL } from '../data/company.js'
import { metaFor, OG_IMAGE, structuredData } from '../data/seo.js'

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

export function canonicalFor(path) {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

// Server-side: full set of head tags for prerendered HTML.
export function headTags(path) {
  const m = metaFor(path)
  const url = canonicalFor(path)
  const tags = [
    `<meta name="description" content="${esc(m.description)}" />`,
    `<meta name="robots" content="${m.index ? 'index, follow' : 'noindex, nofollow'}" />`,
    m.index ? `<link rel="canonical" href="${url}" />` : '',
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="SkillSiren" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ]
  if (path === '/') {
    tags.push(`<script type="application/ld+json">${JSON.stringify(structuredData()).replace(/</g, '\\u003c')}</script>`)
  }
  return { title: esc(m.title), tags: tags.filter(Boolean).join('\n    ') }
}

// Client-side: keep title and description in sync during in-app navigation.
export function applyMeta(path) {
  if (typeof document === 'undefined') return
  const m = metaFor(path)
  document.title = m.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', m.description)
}
