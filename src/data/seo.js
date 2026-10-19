import { company, SITE_URL } from './company.js'

export const ROUTES = {
  '/': {
    title: 'SkillSiren — AI skills matching for freelancers and small teams',
    description:
      'SkillSiren turns real project history into skill profiles and matches professionals to paid projects, roles and skill swaps, explaining every fit and gap. Request early access.',
    index: true,
  },
  '/privacy': {
    title: 'Privacy Policy — SkillSiren',
    description: 'How SkillSiren collects, uses and protects information submitted through skillsiren.site and the early-access program.',
    index: true,
  },
  '/terms': {
    title: 'Terms of Service — SkillSiren',
    description: 'The terms that govern access to the SkillSiren website, interactive demo and early-access program.',
    index: true,
  },
  '/app': {
    title: 'Application Kit — SkillSiren',
    description: 'Internal brand, LinkedIn and AWS Activate application kit for SkillSiren.',
    index: false,
  },
  '/404': {
    title: 'Page not found — SkillSiren',
    description: 'The page you were looking for does not exist on skillsiren.site.',
    index: false,
  },
}

export function metaFor(path) {
  const p = path.length > 1 ? path.replace(/\/$/, '') : path
  return ROUTES[p] || ROUTES['/404']
}

export const OG_IMAGE = `${SITE_URL}/brand/og-image.png`

export function structuredData() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: company.name,
      url: SITE_URL,
      logo: `${SITE_URL}/brand/skillsiren-logo-512.png`,
      email: company.email,
      foundingDate: String(company.founded),
      founder: { '@type': 'Person', name: company.founder.name, jobTitle: company.founder.title },
      sameAs: [company.linkedin],
      description: company.shortDescription,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: company.name,
      url: SITE_URL,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: company.name,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web browser',
      description: company.shortDescription,
      offers: company.pricing.map((p) => ({
        '@type': 'Offer',
        name: p.name,
        price: String(p.price),
        priceCurrency: company.pricingCurrency,
      })),
    },
  ]
}
