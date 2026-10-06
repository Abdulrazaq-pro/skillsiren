export const SKILLS = [
  'Web development',
  'Branding',
  'UI/UX',
  'Video editing',
  'Copywriting',
  'Data analysis',
  'Motion design',
  'SEO',
] as const

export type Skill = (typeof SKILLS)[number]

export type SwapProfile = {
  name: string
  role: string
  initials: string
  offers: Skill[]
  wants: Skill[]
  baseScore: number
}

export const SWAP_PROFILES: SwapProfile[] = [
  {
    name: 'Sarah Okafor',
    role: 'Brand Designer',
    initials: 'SO',
    offers: ['Branding', 'UI/UX'],
    wants: ['Web development'],
    baseScore: 94,
  },
  {
    name: 'Marco Ruiz',
    role: 'Video Editor',
    initials: 'MR',
    offers: ['Video editing', 'Motion design'],
    wants: ['Web development', 'Copywriting'],
    baseScore: 91,
  },
  {
    name: 'Priya Nair',
    role: 'Content Strategist',
    initials: 'PN',
    offers: ['Copywriting', 'SEO'],
    wants: ['UI/UX', 'Video editing'],
    baseScore: 89,
  },
  {
    name: 'Leon Becker',
    role: 'Data Analyst',
    initials: 'LB',
    offers: ['Data analysis'],
    wants: ['Branding', 'Copywriting'],
    baseScore: 87,
  },
  {
    name: 'Aiko Tanaka',
    role: 'Motion Designer',
    initials: 'AT',
    offers: ['Motion design', 'Branding'],
    wants: ['Data analysis', 'SEO'],
    baseScore: 90,
  },
  {
    name: 'Daniel Mensah',
    role: 'Frontend Developer',
    initials: 'DM',
    offers: ['Web development'],
    wants: ['Branding', 'Video editing'],
    baseScore: 92,
  },
  {
    name: 'Grace Liu',
    role: 'Product Designer',
    initials: 'GL',
    offers: ['UI/UX'],
    wants: ['SEO', 'Data analysis'],
    baseScore: 88,
  },
]

export type OpportunityType = 'Freelance' | 'Contract' | 'Full-time' | 'Skill Swap'

export type Opportunity = {
  title: string
  org: string
  type: OpportunityType
  detail: string
  skills: string[]
  match: number
  insight: string
}

export const OPPORTUNITIES: Opportunity[] = [
  {
    title: 'React dashboard for a fintech MVP',
    org: 'Ledgerline',
    type: 'Freelance',
    detail: '4–6 weeks · Remote · €6,500 fixed',
    skills: ['React', 'TypeScript', 'REST APIs'],
    match: 96,
    insight: 'Your last three projects cover every requested skill.',
  },
  {
    title: 'Frontend Developer',
    org: 'Northwind Health',
    type: 'Full-time',
    detail: 'Hybrid · Berlin · €70–85k',
    skills: ['React', 'TypeScript', 'REST APIs', 'AWS'],
    match: 82,
    insight: 'Strong fit. No AWS experience on your profile yet.',
  },
  {
    title: 'Portfolio site in exchange for brand identity',
    org: 'Sarah Okafor',
    type: 'Skill Swap',
    detail: 'Offers: Branding · Wants: Web development',
    skills: ['Next.js', 'Branding'],
    match: 94,
    insight: 'Complementary: you each offer what the other needs.',
  },
  {
    title: 'Design system migration',
    org: 'Parcel & Co.',
    type: 'Contract',
    detail: '3 months · Remote · €550/day',
    skills: ['React', 'Storybook', 'Figma'],
    match: 78,
    insight: 'Storybook is requested; add a project that used it.',
  },
  {
    title: 'Landing page for a climate startup',
    org: 'Tidewater Labs',
    type: 'Freelance',
    detail: '2 weeks · Remote · €2,400 fixed',
    skills: ['Next.js', 'Tailwind CSS', 'Copywriting'],
    match: 88,
    insight: 'Matched from "help making our startup look professional".',
  },
  {
    title: 'Video edits for Python tutorials',
    org: 'Marco Ruiz',
    type: 'Skill Swap',
    detail: 'Offers: Video editing · Wants: Web development',
    skills: ['Video editing', 'Web development'],
    match: 91,
    insight: 'Marco needs a course site; you need launch videos.',
  },
]
