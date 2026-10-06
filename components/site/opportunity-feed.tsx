'use client'

import { useState } from 'react'
import { Lightbulb } from 'lucide-react'
import { OPPORTUNITIES, type OpportunityType } from '@/lib/skillsiren-data'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

const FILTERS: Array<'All' | OpportunityType> = [
  'All',
  'Freelance',
  'Contract',
  'Full-time',
  'Skill Swap',
]

const TYPE_STYLES: Record<OpportunityType, string> = {
  Freelance: 'bg-primary/15 text-primary',
  Contract: 'bg-foreground/10 text-foreground',
  'Full-time': 'bg-foreground/10 text-foreground',
  'Skill Swap': 'bg-signal/15 text-signal',
}

export function OpportunityFeed() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')
  const items =
    filter === 'All'
      ? OPPORTUNITIES
      : OPPORTUNITIES.filter((o) => o.type === filter)

  return (
    <section
      id="opportunities"
      aria-labelledby="feed-title"
      className="scroll-mt-16 border-b border-border/60"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="feed-title"
            eyebrow="Opportunities"
            title="One feed. Every kind of opportunity."
            description="Freelance projects, contracts, jobs and skill exchanges — clearly labelled and ranked for you."
          />
          <div
            role="group"
            aria-label="Filter opportunities by type"
            className="flex w-fit shrink-0 flex-wrap gap-1 rounded-xl border border-border bg-card p-1"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  'rounded-lg px-3 py-1.5 text-sm transition-colors',
                  filter === f
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((o) => (
            <li
              key={o.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    'rounded-full px-2.5 py-1 text-xs font-medium',
                    TYPE_STYLES[o.type],
                  )}
                >
                  {o.type}
                </span>
                <span className="font-display text-lg font-semibold">
                  {o.match}%<span className="sr-only"> match</span>
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold leading-snug text-balance">
                  {o.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {o.org} · {o.detail}
                </p>
              </div>
              <ul className="flex flex-wrap gap-1.5" aria-label="Skills">
                {o.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-auto flex gap-2 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                <Lightbulb
                  className="mt-0.5 size-4 shrink-0 text-signal"
                  aria-hidden="true"
                />
                {o.insight}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
