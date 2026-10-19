import { useReveal } from '../../hooks/useReveal.js'
import { cn } from '../../lib/cn.js'

export function Reveal({ as: Tag = 'div', className, delay = 0, children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={cn('reveal', className)} style={delay ? { transitionDelay: `${delay}ms` } : undefined} {...rest}>
      {children}
    </Tag>
  )
}
