import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  className,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  id?: string
  className?: string
}) {
  return (
    <div className={cn('flex max-w-2xl flex-col gap-4', className)}>
      <p className="text-sm font-medium tracking-wide text-primary">{eyebrow}</p>
      <h2
        id={id}
        className="font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  )
}
