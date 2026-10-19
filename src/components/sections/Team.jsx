import { Mail } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { Reveal } from '../ui/Reveal.jsx'
import { Avatar } from '../ui/Avatar.jsx'
import { company } from '../../data/company.js'

export function Team() {
  const f = company.founder
  return (
    <section id="team" aria-labelledby="team-title" className="py-24 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <SectionHeading id="team-title" eyebrow="Team" title="The Team Behind SkillSiren"
          description="SkillSiren is a founder-led company building its first product. The team is focused on getting matching quality right with early-access members before launch." />
        <Reveal as="article" className="card flex flex-col gap-6 p-7 sm:flex-row sm:items-start">
          <Avatar initials={f.initials} size="lg" tone="siren" />
          <div>
            <h3 className="text-[22px] font-semibold text-ink-950">{f.name}</h3>
            <p className="mt-0.5 text-[14.5px] font-medium text-siren-600">{f.title}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              {f.firstName} founded SkillSiren in {company.founded} and leads product direction and the early-access program.
            </p>
            <a href={`mailto:${company.email}`} className="mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-ink-800 underline decoration-ink-900/20 underline-offset-4 hover:decoration-ink-900">
              <Mail className="h-4 w-4" aria-hidden="true" /> {company.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
