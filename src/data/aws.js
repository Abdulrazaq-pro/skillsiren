// Proposed AWS architecture for the SkillSiren platform.
// Status: proposed. No production AWS services are confirmed as deployed yet.
// Keep this file, the website section, README and docs/aws-architecture.md in agreement.

export const awsIntro =
  'SkillSiren’s matching depends on three things working together: reading unstructured profiles and briefs, turning them into comparable skill records, and explaining each match back to a person. The proposed AWS architecture assigns each of those jobs to a managed service, so the platform can start small on serverless components and grow with the number of profiles, briefs and matches rather than with fixed servers.'

export const awsPipeline = [
  {
    id: 'intake',
    stage: 'Profile & Brief Intake',
    summary: 'Members sign in, upload CVs and portfolios, and teams post briefs in plain language.',
    services: ['Amazon Cognito', 'Amazon API Gateway'],
  },
  {
    id: 'storage',
    stage: 'Secure Storage',
    summary: 'Documents land in private storage; profiles, briefs, swaps and applications become relational records.',
    services: ['Amazon S3', 'Amazon Aurora'],
  },
  {
    id: 'processing',
    stage: 'Processing',
    summary: 'Uploads trigger text extraction and queued matching jobs that run without blocking the user.',
    services: ['AWS Lambda', 'Amazon Textract', 'Amazon SQS'],
  },
  {
    id: 'intelligence',
    stage: 'AI Matching',
    summary: 'Skills are extracted and embedded, candidates retrieved by similarity, and each fit and gap explained.',
    services: ['Amazon Bedrock', 'Amazon OpenSearch Serverless'],
  },
  {
    id: 'experience',
    stage: 'Application Experience',
    summary: 'The web app, match notifications and operational monitoring.',
    services: ['Amazon CloudFront', 'Amazon SES', 'Amazon CloudWatch'],
  },
]

export const awsServices = [
  { name: 'Amazon Cognito', purpose: 'Manages member sign-up, sign-in and session tokens for professionals and hiring teams.' },
  { name: 'Amazon API Gateway', purpose: 'Exposes the platform’s REST endpoints for profiles, briefs, applications and skill-swap proposals.' },
  { name: 'Amazon S3', purpose: 'Stores CVs, portfolio files and profile images in private buckets, and hosts the built web application.' },
  { name: 'Amazon Aurora', purpose: 'Holds relational records: members, skills with evidence, briefs, applications, swap agreements and their status history.' },
  { name: 'AWS Lambda', purpose: 'Runs API handlers and event-driven jobs such as parsing new uploads and recalculating matches when a profile changes.' },
  { name: 'Amazon Textract', purpose: 'Extracts text and layout from uploaded CV and portfolio PDFs so skills can be identified with their source.' },
  { name: 'Amazon SQS', purpose: 'Queues matching and re-scoring jobs so bursts of new briefs or profiles are processed reliably in the background.' },
  { name: 'Amazon Bedrock', purpose: 'Extracts structured skills from profiles and briefs, generates embeddings, and writes the plain-language fit and gap explanations.' },
  { name: 'Amazon OpenSearch Serverless', purpose: 'Stores skill embeddings in a vector index to retrieve semantically similar opportunities and complementary swap partners.' },
  { name: 'Amazon CloudFront', purpose: 'Delivers the web application and public assets over HTTPS with edge caching.' },
  { name: 'Amazon SES', purpose: 'Sends match alerts, application updates and early-access emails.' },
  { name: 'Amazon CloudWatch', purpose: 'Collects logs, metrics and alarms for API latency, job failures and AI processing costs.' },
]
