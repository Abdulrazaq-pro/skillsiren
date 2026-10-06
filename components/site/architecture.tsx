import { SectionHeading } from './section-heading'

const FLOW = [
  {
    service: 'React / Vite application',
    purpose: 'The SkillSiren web app: profiles, feed, Skill Swap and messaging.',
  },
  {
    service: 'Amazon CloudFront',
    purpose: 'Frontend content delivery.',
  },
  {
    service: 'Amazon API Gateway + AWS Lambda',
    purpose: 'APIs, matching requests, applications, messaging events and background workflows.',
  },
]

const SERVICES = [
  {
    service: 'Amazon RDS / Aurora',
    purpose: 'Users, projects, applications, skill exchanges and relationships.',
  },
  {
    service: 'Amazon S3',
    purpose: 'Portfolios, profile assets, CVs and project attachments.',
  },
  {
    service: 'Amazon Bedrock',
    purpose: 'Profile analysis, project understanding, skill extraction and match explanations.',
  },
  {
    service: 'Bedrock Knowledge Bases',
    purpose: 'Semantic matching and retrieval across skills and opportunities.',
  },
  {
    service: 'Amazon Cognito',
    purpose: 'Authentication and account access.',
  },
  {
    service: 'Amazon CloudWatch',
    purpose: 'Monitoring and application logs.',
  },
]

export function Architecture() {
  return (
    <section
      id="architecture"
      aria-labelledby="arch-title"
      className="scroll-mt-16 border-b border-border/60"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading
          id="arch-title"
          eyebrow="Being built on AWS"
          title="Every service has a product reason to exist."
          description="This is the planned architecture. As profiles, searches, matches, messages and portfolio assets grow, each part scales with real product workload."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <ol className="flex flex-col gap-3" aria-label="Request path">
            {FLOW.map((step, i) => (
              <li key={step.service} className="flex flex-col items-stretch">
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-medium text-muted-foreground">
                    Layer {i + 1}
                  </p>
                  <p className="mt-1 font-medium">{step.service}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.purpose}
                  </p>
                </div>
                {i < FLOW.length - 1 ? (
                  <span aria-hidden="true" className="mx-auto h-3 w-px bg-primary/60" />
                ) : null}
              </li>
            ))}
          </ol>

          <ul className="grid gap-3 sm:grid-cols-2" aria-label="Data, AI and platform services">
            {SERVICES.map((s) => (
              <li
                key={s.service}
                className="rounded-xl border border-border bg-background p-5"
              >
                <p className="font-medium">{s.service}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {s.purpose}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
