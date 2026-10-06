import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Logo } from './logo'

const NAV = [
  { label: 'Opportunities', href: '#opportunities' },
  { label: 'Skill Swap', href: '#skill-swap' },
  { label: 'AI Matching', href: '#ai' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Architecture', href: '#architecture' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#top" aria-label="SkillSiren home">
          <Logo />
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#get-started"
          className={cn(buttonVariants({ size: 'lg' }), 'px-4')}
        >
          Get early access
        </a>
      </div>
    </header>
  )
}
