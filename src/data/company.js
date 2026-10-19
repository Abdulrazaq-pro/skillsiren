// Single business record for SkillSiren.
// The website, SEO metadata, LinkedIn kit and AWS Activate answers all read
// from this file so the company is described the same way everywhere.

export const SITE_URL = (import.meta.env?.VITE_SITE_URL || 'https://www.skillsiren.site').replace(/\/$/, '')

export const company = {
  name: 'SkillSiren',
  domain: 'skillsiren.site',
  url: SITE_URL,
  email: 'aina@skillsiren.site',
  linkedin: 'https://www.linkedin.com/company/skillsiren.site/',
  founded: 2026,
  companyType: 'Privately held',
  // Stage 1 — Ideating / building initial product. The public site and the
  // interactive demo exist; the production platform is in development.
  stage: 'Ideating/building initial product',
  stageLabel: 'Building · Early access',
  category: 'AI skills-matching platform (SaaS)',
  linkedinIndustry: 'Software Development',
  tagline: 'AI skills matching for freelancers and small teams: paid projects, roles and skill swaps, with every fit explained.',
  shortDescription:
    'SkillSiren is an AI skills-matching platform that turns a professional’s real project history into a structured skill profile, then matches it to paid projects, roles and complementary skill exchanges, explaining each fit and gap in plain language.',
  positioning:
    'For freelancers, independent professionals and the small teams that hire them, SkillSiren is the skills-matching platform that reads what people have actually done, not just job titles, and explains every match, so the right work and the right people find each other faster.',
  problem:
    'Freelancers and small teams lose hours to keyword-driven job boards and scattered referrals. Profiles list titles instead of demonstrated skills, briefs are vague, and match scores come without reasons, so good fits are missed and poor fits waste everyone’s time.',
  founder: {
    name: 'Ayokanmi Adesina Aina',
    firstName: 'Ayokanmi',
    title: 'Founder',
    initials: 'AA',
  },
  pricing: [
    { id: 'starter', name: 'Starter', price: 10 },
    { id: 'pro', name: 'Pro', price: 20 },
    { id: 'team', name: 'Team', price: 40 },
  ],
  pricingCurrency: 'USD',
  pricingPeriod: 'month',
}

export const NAV = [
  { label: 'Product', href: '/#product' },
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Technology', href: '/#technology' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Team', href: '/#team' },
  { label: 'Contact', href: '/#contact' },
]
