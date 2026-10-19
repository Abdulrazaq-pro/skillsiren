import { ArrowLeftRight, Check, CircleDot, FileText, Sparkles, X } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { Reveal } from '../ui/Reveal.jsx'
import { Avatar } from '../ui/Avatar.jsx'
import { StatusPill } from '../ui/StatusPill.jsx'
import { cn } from '../../lib/cn.js'

function DocVisual() {
  return (
    <div className="rounded-xl border border-ink-900/10 bg-white p-4 font-mono text-[11.5px] leading-6 text-ink-500">
      <p className="mb-1 flex items-center gap-1.5 text-ink-400"><FileText className="h-3.5 w-3.5" aria-hidden="true" /> cv.pdf · page 1</p>
      <p>Built a <mark className="rounded bg-siren-100 px-1 text-siren-700">React</mark> + <mark className="rounded bg-siren-100 px-1 text-siren-700">TypeScript</mark> admin</p>
      <p>dashboard consuming <mark className="rounded bg-signal-100 px-1 text-signal-700">REST APIs</mark> for</p>
      <p>live order status for a logistics client.</p>
    </div>
  )
}
function FeedVisual() {
  return (
    <ul className="space-y-2">
      {[['React dashboard · Ledgerline', 96, 'Freelance'], ['Course site ↔ launch videos', 91, 'Skill Swap'], ['Frontend Developer · Northwind', 82, 'Full-time']].map(([t, m, k]) => (
        <li key={t} className="flex items-center justify-between gap-3 rounded-xl border border-ink-900/10 bg-white px-3 py-2.5 text-[13px]">
          <span className="min-w-0"><span className="block truncate font-medium text-ink-800">{t}</span><span className="text-[11.5px] text-ink-400">{k}</span></span>
          <span className="font-display text-lg font-semibold text-ink-900">{m}%</span>
        </li>
      ))}
    </ul>
  )
}
function GapVisual() {
  return (
    <ul className="divide-y divide-ink-900/5 rounded-xl border border-ink-900/10 bg-white text-[13px]">
      {[['React', 1], ['TypeScript', 1], ['REST APIs', 1], ['AWS', 0]].map(([s, ok]) => (
        <li key={s} className="flex items-center justify-between px-3 py-2">
          <span className="text-ink-700">{s}</span>
          {ok ? <span className="flex items-center gap-1 text-signal-700"><Check className="h-3.5 w-3.5" aria-hidden="true" />Demonstrated</span> : <span className="flex items-center gap-1 text-siren-600"><X className="h-3.5 w-3.5" aria-hidden="true" />Not on profile</span>}
        </li>
      ))}
    </ul>
  )
}
function SwapVisual() {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-ink-900/10 bg-white p-3 text-[12.5px]">
      <div className="flex-1 rounded-lg bg-paper-100 p-2.5"><p className="font-medium text-ink-800">You offer</p><p className="text-ink-500">Web development</p></div>
      <ArrowLeftRight className="h-4 w-4 shrink-0 text-siren-500" aria-hidden="true" />
      <div className="flex-1 rounded-lg bg-signal-50 p-2.5"><p className="font-medium text-ink-800">Sarah offers</p><p className="text-ink-500">Brand identity</p></div>
    </div>
  )
}
function BriefVisual() {
  return (
    <div className="rounded-xl border border-ink-900/10 bg-white p-3 text-[13px]">
      <p className="text-ink-600">“Our checkout feels slow and we can’t tell why.”</p>
      <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
        <Sparkles className="h-3.5 w-3.5 text-siren-500" aria-hidden="true" />
        {['Web performance', 'React', 'Analytics'].map((s) => <span key={s} className="chip">{s}</span>)}
      </div>
    </div>
  )
}
function QueueVisual() {
  return (
    <ul className="space-y-1.5">
      {[['DM', 'Daniel Mensah', 'Pending', 88], ['GL', 'Grace Liu', 'Shortlisted', 85], ['TF', 'Tomás Ferreira', 'Pending', 79]].map(([i, n, s, m]) => (
        <li key={n} className="flex items-center gap-2.5 rounded-xl border border-ink-900/10 bg-white px-3 py-2 text-[13px]">
          <Avatar initials={i} size="sm" />
          <span className="flex-1 truncate font-medium text-ink-800">{n}</span>
          <StatusPill status={s} />
          <span className="w-9 text-right font-medium text-ink-700">{m}%</span>
        </li>
      ))}
    </ul>
  )
}
function TimelineVisual() {
  return (
    <ol className="relative space-y-3 border-l border-ink-900/10 pl-4 text-[13px]">
      {[['Swap completed', 'Brand identity ↔ portfolio site'], ['Project delivered', 'Volunteer scheduling app'], ['Skill verified', 'Storybook, from a delivered project']].map(([t, d]) => (
        <li key={t} className="relative">
          <CircleDot className="absolute -left-[23px] top-0.5 h-3.5 w-3.5 bg-paper text-signal-500" aria-hidden="true" />
          <p className="font-medium text-ink-800">{t}</p>
          <p className="text-ink-500">{d}</p>
        </li>
      ))}
    </ol>
  )
}

const FEATURES = [
  { name: 'Profile Intelligence', body: 'Upload a CV or portfolio. SkillSiren extracts each skill, rates the depth of evidence and links it to the line or project it came from.', benefit: 'Professionals get a credible profile in minutes instead of rewriting keywords for every platform.', visual: DocVisual, span: 'lg:col-span-7' },
  { name: 'Explained Opportunity Matching', body: 'Freelance, contract and full-time work ranked by demonstrated skills, availability and goals, not by job title.', benefit: 'Fewer irrelevant listings and a clear reason behind every ranking.', visual: FeedVisual, span: 'lg:col-span-5' },
  { name: 'Skill Gap Analysis', body: 'For any opportunity, a requirement-by-requirement view of what the profile demonstrates and what is missing.', benefit: 'Know whether to apply, what to highlight, and what to learn next.', visual: GapVisual, span: 'lg:col-span-4' },
  { name: 'Skill Swap', body: 'Finds people whose offers match your needs and whose needs match your offers, then lets you propose an exchange with scope and timing.', benefit: 'Get a brand, a site or launch videos without a cash budget.', visual: SwapVisual, span: 'lg:col-span-4' },
  { name: 'Plain-language Briefs', body: 'Hiring teams describe the problem in their own words. SkillSiren interprets it into the specific skills the work requires.', benefit: 'Small teams without a recruiter still reach the right specialists.', visual: BriefVisual, span: 'lg:col-span-4' },
  { name: 'Review Queue', body: 'Applicants for a brief appear side by side with fit score, strengths, gaps and rate. Shortlist or decline in one action.', benefit: 'Screening a brief takes minutes, with reasons recorded for every decision.', visual: QueueVisual, span: 'lg:col-span-6' },
  { name: 'Work History & Reputation', body: 'Completed projects and swaps are added to a member’s history and can upgrade skills from “claimed” to “demonstrated”.', benefit: 'Every delivered job makes the next match more accurate.', visual: TimelineVisual, span: 'lg:col-span-6' },
]

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="bg-paper-100/60 py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          id="features-title"
          eyebrow="Core features"
          title="One skill profile. Every route to the right work."
          description="Each capability feeds the next: evidence builds the profile, the profile powers matching, and every completed match strengthens the profile."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {FEATURES.map(({ name, body, benefit, visual: Visual, span }, i) => (
            <Reveal key={name} delay={(i % 3) * 60} as="article" className={cn('card flex flex-col p-6', span)}>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-ink-400">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-[21px] font-semibold text-ink-950">{name}</h3>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{body}</p>
              <p className="mt-3 text-[14px] font-medium text-ink-800"><span className="text-signal-600">→</span> {benefit}</p>
              <div className="mt-6 flex-1 rounded-2xl bg-paper-100/80 p-4"><Visual /></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
