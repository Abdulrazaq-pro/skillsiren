import { Workspace } from '../dashboard/Workspace.jsx'
import { ErrorBoundary } from '../ui/ErrorBoundary.jsx'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { Reveal } from '../ui/Reveal.jsx'

export function Showcase() {
  return (
    <section id="demo" aria-labelledby="demo-title" className="relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <div aria-hidden="true" className="grid-ink absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div aria-hidden="true" className="absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-siren-500/20 blur-3xl" />
      <div className="container-x relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="demo-title"
            tone="dark"
            eyebrow="Interactive product preview"
            title="Try the SkillSiren workspace."
            description="Search and filter opportunities, open a match explanation, propose a skill swap, work a hiring review queue and trace extracted skills back to a CV. It runs on fictional sample data in your browser, and nothing you do here is sent anywhere."
          />
          <ul className="flex flex-wrap gap-2 text-[12px] text-ink-300 lg:max-w-xs lg:justify-end">
            {['Overview', 'Opportunities', 'Skill Swap', 'Review queue', 'Profile'].map((t) => (
              <li key={t} className="rounded-full border border-white/10 px-2.5 py-1">{t}</li>
            ))}
          </ul>
        </div>
        <Reveal className="mt-12">
          <ErrorBoundary>
            <Workspace />
          </ErrorBoundary>
        </Reveal>
        <p className="mt-4 text-center text-[12.5px] text-ink-400">
          A product preview of SkillSiren, which is in development. All people, organisations and figures are fictional.
        </p>
      </div>
    </section>
  )
}
