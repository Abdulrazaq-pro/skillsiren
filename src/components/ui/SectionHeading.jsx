import { cn } from '../../lib/cn.js'
import { Reveal } from './Reveal.jsx'

export function SectionHeading({ id, eyebrow, title, description, align = 'left', tone = 'light', className, children }) {
  const dark = tone === 'dark'
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <p className={cn('eyebrow', dark && 'text-siren-400')}>
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className={cn('mt-4 text-[34px] font-semibold leading-[1.08] sm:text-[44px]', dark ? 'text-paper' : 'text-ink-950')}>
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-5 text-[17px] leading-relaxed', dark ? 'text-ink-300' : 'text-ink-600')}>{description}</p>
      ) : null}
      {children}
    </Reveal>
  )
}
