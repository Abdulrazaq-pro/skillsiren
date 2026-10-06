import { SectionHeading } from './section-heading'

const STEPS = [
  {
    title: 'Build your skill profile',
    body: "Tell SkillSiren what you can do, what you've worked on, what you're looking for and which skills you want to acquire.",
  },
  {
    title: 'Choose what you want',
    body: 'Pick one or several goals at once.',
    tags: ['Find paid work', 'Find talent', 'Exchange skills', 'Collaborate'],
  },
  {
    title: 'Get matched',
    body: 'SkillSiren evaluates relevant opportunities or complementary skill profiles — and explains why.',
  },
  {
    title: 'Connect',
    body: 'Apply to an opportunity, invite someone to a project, message a professional or propose a skill exchange.',
  },
  {
    title: 'Build your reputation',
    body: 'Completed projects and exchanges contribute to your work history and platform reputation.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="scroll-mt-16 border-b border-border/60"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          id="how-title"
          eyebrow="How it works"
          title="From what you know to what's next."
          description="Input, matching, result, action. Five steps, and every one of them builds on the last."
          className="lg:sticky lg:top-28 lg:self-start"
        />
        <ol className="flex flex-col">
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative flex gap-6 pb-10 last:pb-0">
              {i < STEPS.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-12 bottom-0 left-6 w-px bg-border"
                />
              ) : null}
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-card font-display text-sm font-semibold text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-2 pt-2.5">
                <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{step.body}</p>
                {step.tags ? (
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {step.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border bg-card px-3 py-1 text-sm"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
