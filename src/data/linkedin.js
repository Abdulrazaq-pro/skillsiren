import { company } from './company.js'

export const linkedin = {
  info: [
    { label: 'Name', value: company.name },
    { label: 'Public URL (existing)', value: company.linkedin },
    { label: 'Website', value: company.url },
    { label: 'Industry', value: company.linkedinIndustry },
    { label: 'Organization type', value: 'Privately Held' },
    { label: 'Organization size', value: '2-10 employees', flag: 'Verify: choose 0-1 employees if the founder is currently the only person working on SkillSiren.' },
    { label: 'Founded', value: String(company.founded) },
    { label: 'Headquarters', value: '', flag: 'Not supplied. Add the city and country where SkillSiren operates.' },
    { label: 'Contact email', value: company.email },
  ],
  tagline: company.tagline,
  overview: `SkillSiren is an AI skills-matching platform for freelancers, independent professionals and the small teams that hire them.

Finding the right work, or the right person, still runs on keyword job boards, vague briefs and referrals. Profiles list titles instead of what someone has actually delivered, and match scores arrive without reasons. Good fits get missed and poor fits waste time on both sides.

SkillSiren starts from evidence. A professional uploads a CV or portfolio and describes what they want: paid projects, a full-time role, collaborators, or a skill exchange. SkillSiren extracts their skills, links each one to the project or document it came from, and builds a structured skill profile.

Hiring teams can describe a need in plain language, such as "help making our startup look professional", and SkillSiren interprets it into the skills required, such as web design, brand identity and copywriting.

Matching then works in both directions:
• Opportunity matching ranks freelance, contract and full-time work by demonstrated skills, availability and goals.
• Skill Swap pairs people whose offers and needs complement each other, for example a developer who needs branding and a designer who needs a website.
• Skill gap analysis explains in plain language where someone fits a role and what is missing.
• Review queues help teams compare applicants side by side, with strengths and gaps listed for each.

SkillSiren is currently building its initial product and running an early-access program. Learn more and request access at www.skillsiren.site.`,
  specialties: [
    'AI skills matching',
    'Talent matching',
    'Freelance marketplace',
    'Skill exchange',
    'Skill Swap',
    'Skill gap analysis',
    'Skills-based hiring',
    'Profile intelligence',
    'CV parsing',
    'Portfolio analysis',
    'Opportunity matching',
    'Project briefs',
    'Independent professionals',
    'Small business hiring',
    'Explainable AI',
    'Semantic search',
    'Natural language processing',
    'SaaS',
    'Future of work',
    'Career development',
  ],
  banner: {
    size: '1584 × 396 px',
    safeZone: 'Keep the left ~568 px of the lower half clear on desktop (the profile logo overlaps it) and keep all text within the central 1,200 px for mobile cropping.',
    palette: ['#111833 Ink', '#F25A2E Siren coral', '#2FCB9E Signal mint', '#FBF8F3 Paper'],
    type: 'Bricolage Grotesque (headline), DM Sans (supporting)',
  },
}
