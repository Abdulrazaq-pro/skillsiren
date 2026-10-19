import { FileSearch, MessageSquareText, Repeat2, Target } from 'lucide-react'
import { Reveal } from '../ui/Reveal.jsx'

const ITEMS = [
  { icon: FileSearch, title: 'Evidence-based profiles', body: 'Every skill links back to the CV line or project it came from.' },
  { icon: Target, title: 'Three ways to match', body: 'Freelance and contract work, full-time roles and skill swaps from one profile.' },
  { icon: MessageSquareText, title: 'Explained fit and gaps', body: 'A plain-language reason for every score, including what is missing.' },
  { icon: Repeat2, title: 'Two-sided by design', body: 'Hiring teams describe needs in their own words; SkillSiren maps them to skills.' },
]

export function Highlights() {
  return (
    <section aria-label="Product highlights" className="border-y border-ink-900/10 bg-white">
      <div className="container-x grid divide-y divide-ink-900/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {ITEMS.map(({ icon: Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 70} className="flex gap-4 py-7 sm:px-2 lg:px-6 lg:first:pl-0">
            <Icon className="mt-0.5 h-5 w-5 shrink-0 text-siren-500" aria-hidden="true" />
            <div>
              <h3 className="font-display text-[17px] font-semibold text-ink-900">{title}</h3>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-500">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
