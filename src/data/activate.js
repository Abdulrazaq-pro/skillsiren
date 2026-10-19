import { company } from './company.js'

// AWS Activate (via HubSpot for Startups) — answers derived from the business record.
// Every value is spelled exactly as it appears in the form's option lists.

export const businessDetails = [
  { label: 'Company name and website', value: `${company.name} · ${company.url}` },
  { label: 'What it does', value: 'An AI skills-matching platform that turns professionals’ real project history into skill profiles and matches them to paid projects, roles and skill exchanges, explaining every fit and gap.' },
  { label: 'Customers', value: 'Businesses: freelancers and independent professionals (sole traders), plus startups, small businesses and agencies hiring project talent. Industry: skills-based hiring / professional services.' },
  { label: 'Product stage', value: 'Idea / building. Public website and interactive demo with sample data; production platform in development.' },
  { label: 'Planned launch date', value: 'March 1, 2027', assumed: true },
  { label: 'How customers use it', value: 'Web browser' },
  { label: 'Uses AI/ML?', value: 'Used to improve the product: AI powers skill extraction, matching and match explanations inside a skills platform.' },
  { label: 'Funding raised', value: 'None', assumed: true },
  { label: 'Valuation', value: 'None', assumed: true },
  { label: 'Tech stack & AWS services', value: 'React (Vite) web app; proposed AWS: Cognito, API Gateway, Lambda, S3, Aurora, Textract, SQS, Bedrock, OpenSearch Serverless, CloudFront, SES, CloudWatch.' },
  { label: 'Share of infra spend on AWS', value: 'Planned to be almost entirely AWS', assumed: true },
  { label: 'Annual marketing spend', value: 'Under $250,000 (early stage)', assumed: true },
  { label: 'Team size and country', value: 'Founder-led (Ayokanmi Adesina Aina). Country not supplied.', assumed: true },
  { label: 'Goals for the next 6–12 months', value: 'Ship the initial web product, onboard early-access members, validate matching quality and keep infrastructure costs low.' },
]

export const q9Text =
  'SkillSiren is a web platform that helps freelancers and small teams find paid projects, roles and skill swaps through AI matching that explains every fit. Built with React on AWS Lambda, Amazon Bedrock and Amazon Aurora.'

export const activateAnswers = [
  {
    n: 1,
    field: 'Top 3 ways AWS can help you',
    answer: ['Launching products faster', 'Building scalable architecture', 'Reducing burn rate'],
    reason: 'Pre-launch: the priorities are shipping the first version, on an architecture that scales, at low cost.',
  },
  {
    n: 2,
    field: 'AWS services to learn more about (max 20)',
    answer: [
      'Amazon Bedrock',
      'Amazon Textract',
      'Amazon OpenSearch Service',
      'AWS Lambda',
      'Amazon API Gateway',
      'Amazon Cognito',
      'Amazon S3',
      'Amazon Aurora',
      'Amazon SQS',
      'Amazon Simple Email Service',
      'Amazon Cloudwatch',
      'AWS Identity & Access',
      'Amazon VPC',
      'AWS Route 53',
      'AWS Certificate Manager',
      'AWS Amplify',
      'AWS CloudFormation',
      'AWS CloudTrail',
      'AWS Budgets',
      'AWS Cost Explorer',
    ],
    reason: 'Exactly the services in the proposed architecture, plus security, deployment and cost-control services a serverless web startup needs.',
  },
  {
    n: 3,
    field: 'AWS tech topics to follow',
    answer: ['AI & machine learning', 'Serverless', 'Security', 'AWS cost management'],
    reason: 'AI drives matching, the stack is serverless, and member documents plus early-stage budgets make security and cost key.',
  },
  {
    n: 4,
    field: 'What type of customers do you primarily serve?',
    answer: ['Career Services', 'Human Resources (HR)', 'Professional Networking', 'Marketplaces', 'SaaS', 'Artificial Intelligence (AI)'],
    reason: 'Skills-based work matching (Career Services, HR), delivered as a two-sided SaaS marketplace where AI is a genuine part of the product.',
  },
  {
    n: 5,
    field: 'Primary target customers',
    answer: ['Businesses'],
    reason: 'Paying users are freelancers operating as sole traders and the startups, small businesses and agencies that hire them.',
    assumed: 'If most revenue is expected from individual job-seekers rather than freelancers and hiring teams, choose Consumers instead.',
  },
  {
    n: 6,
    field: 'Current product stage',
    answer: ['Ideating/building initial product'],
    reason: 'The website and sample-data demo exist; the production platform is still being built and has no live users.',
  },
  {
    n: 7,
    field: 'How customers interact with the product',
    answer: ['Web browser'],
    reason: 'SkillSiren is a web application; no mobile, desktop or public API product is being built.',
  },
  {
    n: 8,
    field: 'Does your product use AI/ML?',
    answer: ['Yes, we\'re using AI/ML to improve our products'],
    reason: 'AI powers skill extraction and matching inside a skills platform; SkillSiren does not build models or AI infrastructure.',
  },
  {
    n: 9,
    field: 'What are you building? (30–250 characters)',
    answer: [q9Text],
    reason: 'Plain description following the required template, naming services from the proposed architecture.',
    countable: true,
  },
  {
    n: 10,
    field: 'Planned product launch date',
    answer: ['March 1, 2027'],
    reason: 'No launch date was supplied; a realistic date about four months out was chosen.',
    assumed: 'Replace with the founder’s real planned launch date.',
  },
  {
    n: 11,
    field: 'Most recent funding round',
    answer: ['No Funding'],
    reason: 'No funding was reported; leave the month and year fields blank.',
    assumed: 'Confirm no money has been raised (including friends-and-family or grants counted as rounds).',
  },
  {
    n: 12,
    field: 'Latest valuation (optional)',
    answer: ['No Valuation'],
    reason: 'No funding round means no priced valuation.',
  },
  {
    n: 13,
    field: 'Percentage of spend on AWS',
    answer: ['75 - 99%'],
    reason: 'The proposed architecture runs on AWS; small amounts may go to the domain registrar and third-party tools.',
    assumed: 'Estimate only. Choose 100% if the domain and every tool will also be paid through AWS.',
  },
  {
    n: 14,
    field: 'Annual marketing spend (optional)',
    answer: ['< $250,000'],
    reason: 'Pre-launch and self-funded, so marketing spend is well under the first bracket.',
  },
]

export const assumptions = [
  'Planned launch date (Q10): March 1, 2027 is a placeholder decision; use the real date.',
  'Funding (Q11) and valuation (Q12): recorded as none because none was supplied.',
  'Customer type (Q5): Businesses, on the basis that freelancers and hiring teams are the paying users.',
  'AWS spend share (Q13): 75 - 99% is an estimate for an all-AWS architecture.',
  'Team size: only the founder was supplied. Set LinkedIn size to 0-1 if no one else works on SkillSiren yet.',
  'Headquarters / country: not supplied. Add them to LinkedIn and the HubSpot form if asked.',
  'Founder title: shown as “Founder”. Change it everywhere if a different title is preferred (e.g. Founder & CEO).',
  'Pricing: $10 / $20 / $40 were supplied; USD and a monthly billing period are assumed.',
  'Company name styling: “SkillSiren” is used everywhere. If the registered or LinkedIn name is “Skillsiren”, change company.js and rebuild.',
]
