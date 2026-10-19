import { ArrowRight, Check, Minus } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { Reveal } from '../ui/Reveal.jsx'

const ROWS = [
  ['Profile', 'Job titles and self-reported keywords', 'Skills extracted from real projects, each with its source'],
  ['Brief', '“Senior React dev, 5+ yrs, rockstar”', '“Help making our startup look professional” mapped to design, brand and copy'],
  ['Match', 'An unexplained 87% score', 'Which skills fit, which are missing and why it was ranked'],
  ['Options', 'Paid jobs only', 'Paid projects, roles and skill-for-skill exchanges'],
  ['Hiring review', 'Inbox of CVs to read one by one', 'A queue comparing strengths and gaps side by side'],
]

export function Problem() {
  return (
    <section aria-labelledby="problem-title" className="py-24 sm:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            id="problem-title"
            eyebrow="The problem"
            title="Keyword matching wastes the time of both sides."
            description="A freelance developer scrolls through dozens of listings that share a keyword but not a fit. A five-person startup posts a vague brief, receives forty CVs, and has no quick way to see who has actually done the work."
          />
          <Reveal className="mt-8 space-y-4 text-[16px] leading-relaxed text-ink-600">
            <p>
              The cost shows up as hours spent screening, projects started with the wrong person, and skilled people who are never found because their title doesn’t match the search. It doesn’t scale: more listings and more applicants make manual screening slower, not better.
            </p>
            <p className="font-medium text-ink-900">
              SkillSiren starts from evidence, reads intent instead of keywords, and shows its reasoning, so both sides can decide quickly and with confidence.
            </p>
          </Reveal>
        </div>
        <Reveal className="card overflow-hidden">
          <div className="grid grid-cols-[88px_1fr_1fr] border-b border-ink-900/10 bg-paper-100/70 text-[12px] font-medium sm:grid-cols-[120px_1fr_1fr]">
            <span className="px-4 py-3 text-ink-400">&nbsp;</span>
            <span className="px-4 py-3 text-ink-500">Typical today</span>
            <span className="px-4 py-3 text-siren-600">With SkillSiren</span>
          </div>
          <ul>
            {ROWS.map(([k, a, b]) => (
              <li key={k} className="grid grid-cols-[88px_1fr_1fr] border-b border-ink-900/5 text-[13.5px] last:border-0 sm:grid-cols-[120px_1fr_1fr]">
                <span className="px-4 py-4 font-mono text-[11px] uppercase tracking-wider text-ink-400">{k}</span>
                <span className="flex gap-2 px-4 py-4 text-ink-500"><Minus className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-300" aria-hidden="true" />{a}</span>
                <span className="flex gap-2 bg-signal-50/40 px-4 py-4 text-ink-800"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal-600" aria-hidden="true" />{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 border-t border-ink-900/10 px-4 py-3 text-[12.5px] text-ink-500">
            <ArrowRight className="h-3.5 w-3.5 text-siren-500" aria-hidden="true" /> See it working in the interactive demo below.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
