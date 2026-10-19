import { Building2, Code2, GraduationCap, Layers3 } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { Reveal } from '../ui/Reveal.jsx'

const SEGMENTS = [
  {
    icon: Code2,
    who: 'Freelancers & independent professionals',
    example: 'Developers, designers, editors, writers, analysts',
    problem: 'Hours spent filtering listings that share a keyword but not a fit, and rewriting the same profile on every platform.',
    use: 'Upload a CV and portfolio once, set availability and goals, then work a ranked feed of projects, roles and swaps.',
    benefit: 'Less searching and stronger applications that lead with demonstrated work.',
  },
  {
    icon: Building2,
    who: 'Startups & small businesses',
    example: 'Teams of 2–50 without an in-house recruiter',
    problem: 'Unsure which specialist they need, so briefs are vague and screening a pile of CVs eats founder time.',
    use: 'Describe the need in plain language, review interpreted skills, then compare applicants side by side in a queue.',
    benefit: 'The right specialist found faster, with reasons recorded for every shortlist decision.',
  },
  {
    icon: Layers3,
    who: 'Agencies & studios',
    example: 'Design, development and content studios',
    problem: 'Overflow work and niche requests need trusted subcontractors at short notice.',
    use: 'Post project briefs for specific skills and find collaborators whose evidence matches the client’s requirements.',
    benefit: 'Take on more client work without carrying permanent headcount.',
  },
  {
    icon: GraduationCap,
    who: 'Career switchers & early-career talent',
    example: 'Bootcamp graduates, self-taught professionals',
    problem: 'Skills are real but there’s little paid history to prove them.',
    use: 'Use skill swaps and smaller projects to build evidence, guided by gap analysis on the roles they want.',
    benefit: 'A clear route from “claimed” to “demonstrated” skills.',
  },
]

export function Audience() {
  return (
    <section id="solutions" aria-labelledby="solutions-title" className="py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading id="solutions-title" eyebrow="Who it’s for" title="Built for both sides of skilled project work." />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {SEGMENTS.map(({ icon: Icon, who, example, problem, use, benefit }, i) => (
            <Reveal as="article" key={who} delay={(i % 2) * 80} className="card p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-paper"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                <div>
                  <h3 className="text-[21px] font-semibold text-ink-950">{who}</h3>
                  <p className="mt-0.5 text-[13.5px] text-ink-500">{example}</p>
                </div>
              </div>
              <dl className="mt-6 space-y-4 text-[14.5px] leading-relaxed">
                <div><dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400">Problem</dt><dd className="mt-1 text-ink-600">{problem}</dd></div>
                <div><dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400">How they use SkillSiren</dt><dd className="mt-1 text-ink-600">{use}</dd></div>
                <div className="rounded-xl bg-signal-50/70 p-3"><dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-signal-700">Benefit</dt><dd className="mt-1 font-medium text-ink-900">{benefit}</dd></div>
              </dl>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
