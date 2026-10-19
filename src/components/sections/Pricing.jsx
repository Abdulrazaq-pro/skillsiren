import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { Reveal } from '../ui/Reveal.jsx'
import { company } from '../../data/company.js'
import { cn } from '../../lib/cn.js'

const DETAILS = {
  starter: {
    for: 'For professionals getting started',
    items: ['Evidence-based skill profile from CV and portfolio', 'Ranked opportunity feed across all work types', 'Skill Swap matching and proposals', 'Match explanations on every result'],
  },
  pro: {
    for: 'For active freelancers and job-seekers',
    items: ['Everything in Starter', 'Skill gap analysis for every opportunity', 'Learning goals that steer swaps and suggestions', 'Work history that upgrades skills to “demonstrated”'],
    featured: true,
  },
  team: {
    for: 'For startups, small businesses and agencies hiring',
    items: ['Post projects and roles as plain-language briefs', 'Brief interpretation into required skills', 'Applicant review queue with strengths and gaps', 'Shortlist and decision history per brief'],
  },
}

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="bg-white py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading id="pricing-title" eyebrow="Pricing" title="Simple plans for people and teams." align="center"
          description="Plans become available when SkillSiren launches. Requesting early access doesn’t commit you to a plan or a payment." />
        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          {company.pricing.map((p, i) => {
            const d = DETAILS[p.id]
            return (
              <Reveal as="article" key={p.id} delay={i * 70} className={cn('flex flex-col rounded-2xl border p-6 sm:p-7', d.featured ? 'border-ink-900 bg-ink-950 text-paper shadow-lift' : 'border-ink-900/10 bg-paper')}>
                <div className="flex items-center justify-between">
                  <h3 className={cn('text-[20px] font-semibold', d.featured ? 'text-paper' : 'text-ink-950')}>{p.name}</h3>
                  {d.featured ? <span className="rounded-full bg-siren-500 px-2 py-0.5 text-[11px] font-medium text-white">Most complete for individuals</span> : null}
                </div>
                <p className={cn('mt-1 text-[14px]', d.featured ? 'text-ink-300' : 'text-ink-500')}>{d.for}</p>
                <p className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-[44px] font-semibold leading-none">${p.price}</span>
                  <span className={cn('text-[14px]', d.featured ? 'text-ink-300' : 'text-ink-500')}>/ {company.pricingPeriod}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-[14.5px]">
                  {d.items.map((it) => (
                    <li key={it} className="flex gap-2.5"><Check className={cn('mt-0.5 h-4 w-4 shrink-0', d.featured ? 'text-signal-300' : 'text-signal-600')} aria-hidden="true" /><span className={d.featured ? 'text-ink-200' : 'text-ink-700'}>{it}</span></li>
                  ))}
                </ul>
                <Link to="/#early-access" className={cn('mt-8', d.featured ? 'btn-primary' : 'btn-dark')}>Request early access</Link>
              </Reveal>
            )
          })}
        </div>
        <p className="mt-8 text-center text-[13.5px] text-ink-500">
          Prices in {company.pricingCurrency}. Need something different for a larger organisation? <Link to="/#contact" className="font-medium text-siren-600 underline">Contact the team</Link>.
        </p>
      </div>
    </section>
  )
}
