import { Check, FileSearch, Network, Target, UserRoundPen, Users, X } from 'lucide-react'
import { SectionHeading } from './section-heading'

const FEATURES = [
  {
    icon: Target,
    title: 'Opportunity Matching',
    body: 'Ranks work by skills, experience, requirements and preferences — not job titles.',
  },
  {
    icon: Network,
    title: 'Skill Matching',
    body: 'Finds complementary people for exchanges, including less obvious fits.',
  },
  {
    icon: UserRoundPen,
    title: 'Profile Intelligence',
    body: 'Turns past projects and experience into a structured, credible skill profile.',
  },
  {
    icon: Users,
    title: 'Project Matching',
    body: 'Helps clients describe what they need in plain language and surfaces the right talent.',
  },
  {
    icon: FileSearch,
    title: 'Skill Gap Analysis',
    body: 'Explains exactly where you fit an opportunity — and what is missing.',
  },
]

const GAP = [
  { skill: 'React', has: true },
  { skill: 'TypeScript', has: true },
  { skill: 'REST APIs', has: true },
  { skill: 'AWS', has: false },
]

export function AiMatching() {
  return (
    <section
      id="ai"
      aria-labelledby="ai-title"
      className="scroll-mt-16 border-b border-border/60"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <SectionHeading
            id="ai-title"
            eyebrow="AI matching"
            title="Matches you can actually understand."
            description="SkillSiren reads skills, project requirements, availability and learning goals. Someone asking for “help making my startup look professional” can be matched with branding, UI/UX, copywriting or web design talent."
          />
          <ul className="grid gap-6 sm:grid-cols-2">
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-3">
                <Icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className="flex flex-col self-center rounded-2xl border border-border bg-card p-6 sm:p-8">
          <figcaption className="text-sm font-medium text-muted-foreground">
            Skill Gap Analysis
          </figcaption>
          <p className="mt-2 font-display text-2xl font-semibold leading-snug">
            Frontend Developer · Northwind Health
          </p>
          <ul className="mt-6 flex flex-col divide-y divide-border rounded-xl border border-border">
            {GAP.map(({ skill, has }) => (
              <li key={skill} className="flex items-center justify-between px-4 py-3">
                <span>{skill}</span>
                {has ? (
                  <span className="flex items-center gap-1.5 text-sm text-signal">
                    <Check className="size-4" aria-hidden="true" />
                    Demonstrated
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-sm text-primary">
                    <X className="size-4" aria-hidden="true" />
                    Not on profile
                  </span>
                )}
              </li>
            ))}
          </ul>
          <blockquote className="mt-6 border-l-2 border-signal pl-4 leading-relaxed text-muted-foreground">
            {"You're a strong match for this project. It requests React, TypeScript, REST APIs and AWS. Your profile demonstrates the first three but currently contains no AWS experience."}
          </blockquote>
          <p className="mt-6 text-sm text-muted-foreground">
            More useful than an arbitrary “87% match.”
          </p>
        </figure>
      </div>
    </section>
  )
}
