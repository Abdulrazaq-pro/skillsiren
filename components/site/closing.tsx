import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Logo } from './logo'

export function ClosingCta() {
  return (
    <section id="get-started" aria-labelledby="cta-title" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-primary-foreground sm:px-12 sm:py-20">
          <div className="relative flex max-w-3xl flex-col gap-6">
            <h2
              id="cta-title"
              className="font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-6xl"
            >
              Your skills can take you somewhere.
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-pretty opacity-85">
              A talent and skill-exchange network where you can find paid work,
              hire talent, collaborate, or exchange professional skills — with
              AI matching the right skills to the right opportunities.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#opportunities"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'h-11 bg-primary-foreground px-5 text-base text-primary hover:bg-primary-foreground/90 [a]:hover:bg-primary-foreground/90',
                )}
              >
                Find work
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </a>
              <a
                href="#skill-swap"
                className="inline-flex h-11 items-center rounded-lg border border-primary-foreground/30 px-5 text-base font-medium transition-colors hover:bg-primary-foreground/10"
              >
                Exchange skills
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Find work. Find talent. Exchange skills.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <li><a className="hover:text-foreground" href="#opportunities">Opportunities</a></li>
            <li><a className="hover:text-foreground" href="#skill-swap">Skill Swap</a></li>
            <li><a className="hover:text-foreground" href="#ai">AI Matching</a></li>
            <li><a className="hover:text-foreground" href="#architecture">Architecture</a></li>
          </ul>
        </nav>
        <p className="text-sm text-muted-foreground">
          {`© ${new Date().getFullYear()} SkillSiren`}
        </p>
      </div>
    </footer>
  )
}
