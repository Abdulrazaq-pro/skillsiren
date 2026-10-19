import { FileUp, ListChecks, Sparkles, Handshake, Award } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { Reveal } from '../ui/Reveal.jsx'

const STEPS = [
  { icon: FileUp, title: 'Submit a profile or a brief', body: 'Professionals upload a CV or portfolio and set goals. Teams describe what they need in plain language.', detail: 'CV · portfolio · goals · availability' },
  { icon: ListChecks, title: 'Extract and structure', body: 'Text is extracted from documents, then skills, depth and source are recorded as structured data.', detail: '7 skills · 2 need evidence' },
  { icon: Sparkles, title: 'Match and explain', body: 'Profiles and briefs are compared by meaning, ranked, and each result gets a written fit-and-gap explanation.', detail: '96% · “covers every requested skill”' },
  { icon: Handshake, title: 'Connect and decide', body: 'Apply, shortlist, message or propose a skill swap directly from the match.', detail: 'Apply · Shortlist · Propose swap' },
  { icon: Award, title: 'Build a track record', body: 'Completed work and swaps update the profile, so future matches improve.', detail: 'Claimed → demonstrated' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading id="how-title" eyebrow="How it works" title="From what you’ve done to what’s next, in five steps." align="center" className="mx-auto" />
        <ol className="mt-16 grid gap-5 md:grid-cols-5">
          {STEPS.map(({ icon: Icon, title, body, detail }, i) => (
            <Reveal as="li" key={title} delay={i * 80} className="relative">
              {i < STEPS.length - 1 ? <span aria-hidden="true" className="absolute left-[52px] right-[-20px] top-6 hidden h-px bg-gradient-to-r from-siren-300 to-ink-900/10 md:block" /> : null}
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-ink-900/10 bg-white text-siren-500 shadow-card">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-5 font-mono text-[11px] text-ink-400">Step {i + 1}</p>
              <h3 className="mt-1 text-[19px] font-semibold leading-snug text-ink-950">{title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">{body}</p>
              <p className="mt-4 inline-block rounded-lg bg-ink-900 px-2.5 py-1 font-mono text-[11px] text-ink-200">{detail}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
