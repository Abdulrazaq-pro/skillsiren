import { cn } from '../../lib/cn.js'

const STYLES = {
  New: 'bg-ink-100 text-ink-700',
  Saved: 'bg-amber-100 text-amber-600',
  Applied: 'bg-siren-50 text-siren-700',
  Interviewing: 'bg-signal-50 text-signal-700',
  Declined: 'bg-ink-100 text-ink-400 line-through decoration-ink-300',
  Pending: 'bg-ink-100 text-ink-700',
  Shortlisted: 'bg-signal-50 text-signal-700',
  Proposed: 'bg-siren-50 text-siren-700',
  Accepted: 'bg-signal-50 text-signal-700',
}
const DOTS = {
  New: 'bg-ink-400',
  Saved: 'bg-amber-400',
  Applied: 'bg-siren-500',
  Interviewing: 'bg-signal-500',
  Declined: 'bg-ink-300',
  Pending: 'bg-ink-400',
  Shortlisted: 'bg-signal-500',
  Proposed: 'bg-siren-500',
  Accepted: 'bg-signal-500',
}

export function StatusPill({ status, className }) {
  return (
    <span className={cn('inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-medium', STYLES[status], className)}>
      <span aria-hidden="true" className={cn('h-1.5 w-1.5 rounded-full', DOTS[status])} />
      {status}
    </span>
  )
}
