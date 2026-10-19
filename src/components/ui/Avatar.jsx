import { cn } from '../../lib/cn.js'

const TONES = {
  siren: 'bg-siren-100 text-siren-700',
  signal: 'bg-signal-100 text-signal-700',
  ink: 'bg-ink-100 text-ink-700',
  amber: 'bg-amber-100 text-amber-600',
}
const ORDER = ['siren', 'signal', 'ink', 'amber']

export function Avatar({ initials, tone, size = 'md', className }) {
  const t = tone || ORDER[(initials.charCodeAt(0) + initials.charCodeAt(1 % initials.length)) % ORDER.length]
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full font-display font-semibold',
        size === 'sm' ? 'h-7 w-7 text-[11px]' : size === 'lg' ? 'h-14 w-14 text-lg' : 'h-9 w-9 text-xs',
        TONES[t],
        className,
      )}
    >
      {initials}
    </span>
  )
}
