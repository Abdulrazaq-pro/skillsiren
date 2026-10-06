import { cn } from '@/lib/utils'

export function Avatar({
  initials,
  tone = 'primary',
  className,
}: {
  initials: string
  tone?: 'primary' | 'signal' | 'muted'
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'flex size-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold',
        tone === 'primary' && 'bg-primary/15 text-primary',
        tone === 'signal' && 'bg-signal/15 text-signal',
        tone === 'muted' && 'bg-muted text-foreground',
        className,
      )}
    >
      {initials}
    </span>
  )
}
