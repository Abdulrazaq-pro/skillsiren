import { ChevronRight, Cloud } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { Reveal } from '../ui/Reveal.jsx'
import { awsIntro, awsPipeline, awsServices } from '../../data/aws.js'

export function AwsSection() {
  return (
    <section id="technology" aria-labelledby="aws-title" className="bg-paper-100/60 py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading id="aws-title" eyebrow="Technology · Proposed architecture" title="How We Use Amazon Web Services" description={awsIntro} />

        <Reveal className="mt-14">
          <ol className="grid gap-3 lg:grid-cols-5" aria-label="SkillSiren data pipeline on AWS">
            {awsPipeline.map((s, i) => (
              <li key={s.id} className="relative flex flex-col rounded-2xl border border-ink-900/10 bg-white p-5 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-siren-600">0{i + 1}</span>
                  {i < awsPipeline.length - 1 ? <ChevronRight className="absolute -right-[15px] top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-paper-100 text-ink-400 lg:block" aria-hidden="true" /> : null}
                </div>
                <h3 className="mt-2 text-[17px] font-semibold leading-snug text-ink-950">{s.stage}</h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink-600">{s.summary}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.services.map((svc) => (
                    <li key={svc} className="flex items-center gap-2 rounded-lg bg-ink-900 px-2.5 py-1.5 text-[12px] font-medium text-paper">
                      <Cloud className="h-3.5 w-3.5 text-siren-400" aria-hidden="true" />{svc}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-10 card p-6 sm:p-8">
          <h3 className="text-[20px] font-semibold text-ink-950">Services and their role in the platform</h3>
          <ul className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {awsServices.map((s) => (
              <li key={s.name} className="border-t border-ink-900/10 pt-4 text-[14.5px] leading-relaxed text-ink-600">
                <strong className="font-semibold text-ink-900">{s.name}:</strong> {s.purpose}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
