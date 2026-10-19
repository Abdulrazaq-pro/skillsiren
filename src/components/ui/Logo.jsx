import { cn } from '../../lib/cn.js'

// SkillSiren mark: a source point broadcasting two signal arcs —
// a skill being "heard" by the right opportunity.
export function LogoMark({ className, title }) {
  return (
    <svg viewBox="0 0 32 32" className={className} role={title ? 'img' : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <rect width="32" height="32" rx="8.5" fill="#111833" />
      <circle cx="10.5" cy="16" r="3.4" fill="#F25A2E" />
      <path d="M14.4 11.1a6.3 6.3 0 0 1 0 9.8" fill="none" stroke="#F25A2E" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M17.6 7.4a10.9 10.9 0 0 1 0 17.2" fill="none" stroke="#2FCB9E" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

export function Logo({ className, tone = 'dark' }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark className="h-8 w-8 shrink-0" />
      <span className={cn('font-display text-[19px] font-semibold tracking-tight', tone === 'light' ? 'text-paper' : 'text-ink-900')}>
        Skill<span className="text-siren-500">Siren</span>
      </span>
    </span>
  )
}
