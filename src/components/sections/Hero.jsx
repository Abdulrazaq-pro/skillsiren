import { Link } from 'react-router-dom'
import { ArrowRight, Check, FileText, Sparkles, X } from 'lucide-react'
import { Avatar } from '../ui/Avatar.jsx'
import { company } from '../../data/company.js'

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[36px] bg-gradient-to-br from-siren-100/70 via-paper-100 to-signal-100/60 blur-2xl" />
      <div className="card overflow-hidden">
        <div className="flex items-center justify-between border-b border-ink-900/10 bg-paper-100/60 px-4 py-2.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-200" /><span className="h-2.5 w-2.5 rounded-full bg-ink-200" /><span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          </div>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400">Sample data</span>
        </div>
        <div className="space-y-4 p-5">
          <div className="rounded-xl border border-ink-900/10 bg-paper/60 p-4">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400">Brief · Tidewater Labs</p>
            <p className="mt-2 font-display text-[17px] font-medium leading-snug text-ink-900">“We need help making our startup look professional before our pilot announcement.”</p>
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              <span className="inline-flex items-center gap-1 text-[12px] font-medium text-siren-600"><Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Interpreted as</span>
              {['Web design & build', 'Brand identity', 'Copywriting'].map((s) => (
                <span key={s} className="chip bg-white">{s}</span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-signal-300/70 bg-white p-4 shadow-card">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <Avatar initials="DM" tone="signal" />
                <div>
                  <p className="font-medium text-ink-900">Daniel Mensah</p>
                  <p className="text-[13px] text-ink-500">Frontend Developer · 20 hrs/week</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-display text-2xl font-semibold leading-none text-ink-950">88%</p>
                <p className="mt-1 text-[11px] text-ink-400">fit</p>
              </div>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-[13px]">
              {[['Next.js', true], ['Tailwind CSS', true], ['2 launch pages', true], ['Copywriting', false]].map(([s, ok]) => (
                <li key={s} className={`flex items-center gap-1.5 rounded-lg px-2 py-1.5 ${ok ? 'bg-signal-50 text-signal-700' : 'bg-siren-50 text-siren-700'}`}>
                  {ok ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <X className="h-3.5 w-3.5" aria-hidden="true" />}
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-3 border-l-2 border-signal-400 pl-3 text-[13px] leading-relaxed text-ink-600">
              Strong build fit from two shipped launch pages. Copywriting isn’t demonstrated, so pair with a writer or ask for samples.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-dashed border-ink-900/15 px-4 py-3 text-[13px] text-ink-500">
            <FileText className="h-4 w-4 shrink-0 text-ink-400" aria-hidden="true" />
            Evidence linked from <span className="font-medium text-ink-700">daniel-mensah-cv.pdf</span> and 4 portfolio projects
          </div>
        </div>
      </div>
      <div className="absolute -right-3 -top-4 hidden animate-floatY rounded-xl border border-ink-900/10 bg-ink-900 px-3 py-2 text-[12px] text-paper shadow-lift sm:block">
        <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-signal-400 align-middle" />
        3 complementary skill swaps found
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="product" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-paper absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="container-x grid items-center gap-14 pb-20 pt-10 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/70 py-1 pl-1.5 pr-3 text-[13px] text-ink-600">
            <span className="relative flex h-5 w-5 items-center justify-center">
              <span aria-hidden="true" className="absolute inset-0 animate-pulseRing rounded-full bg-siren-400/50" />
              <span className="relative h-2 w-2 rounded-full bg-siren-500" />
            </span>
            Building the initial product · Early access open
          </p>
          <h1 id="hero-title" className="mt-6 text-[44px] font-semibold leading-[1.02] text-ink-950 sm:text-[60px] lg:text-[68px]">
            Skills that get <span className="relative whitespace-nowrap text-siren-500">heard<svg aria-hidden="true" viewBox="0 0 120 12" className="absolute -bottom-2 left-0 w-full" preserveAspectRatio="none"><path d="M2 8c20-6 40-6 58-2s38 4 58-3" fill="none" stroke="#2FCB9E" strokeWidth="3" strokeLinecap="round" /></svg></span>, matches that explain themselves.
          </h1>
          <p className="mt-7 max-w-xl text-[18px] leading-relaxed text-ink-600">
            SkillSiren turns what freelancers and professionals have actually delivered into a structured skill profile, then matches it to paid projects, roles and skill swaps, with a plain-language reason for every fit and every gap.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/#early-access" className="btn-primary px-5 py-3 text-base">
              Request Early Access <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/#demo" className="btn-ghost px-5 py-3 text-base">Explore the Demo</Link>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ink-900/10 pt-6">
            {[['Get paid', 'Freelance & contract'], ['Get hired', 'Full-time roles'], ['Exchange', 'Skill for skill']].map(([t, d]) => (
              <div key={t}>
                <dt className="font-display text-[17px] font-semibold text-ink-900">{t}</dt>
                <dd className="mt-1 text-[13.5px] text-ink-500">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}
