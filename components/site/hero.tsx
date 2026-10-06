import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HeroMatchCard } from './hero-match-card'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 size-[36rem] rounded-full bg-primary/15 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-28">
        <div className="flex flex-col gap-7">
          <p className="w-fit rounded-full border border-border bg-card px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
            Work. Hire. Collaborate. Exchange.
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Turn your skills into{' '}
            <span className="text-primary">opportunities.</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Find freelance work, discover opportunities, meet people with
            complementary skills, or exchange what you know for what you need.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#opportunities"
              className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5 text-base')}
            >
              Find opportunities
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </a>
            <a
              href="#skill-swap"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'h-11 px-5 text-base',
              )}
            >
              Explore Skill Swaps
            </a>
          </div>
          <dl className="mt-2 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-6">
            {[
              ['Get paid', 'Freelance & contract'],
              ['Get hired', 'Full-time roles'],
              ['Exchange', 'Skill for skill'],
            ].map(([term, desc]) => (
              <div key={term}>
                <dt className="font-display text-base font-semibold">{term}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>
        <HeroMatchCard />
      </div>
    </section>
  )
}
