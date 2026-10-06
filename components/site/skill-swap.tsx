'use client'

import { useState } from 'react'
import { ArrowLeftRight, Check } from 'lucide-react'
import { SKILLS, SWAP_PROFILES, type Skill } from '@/lib/skillsiren-data'
import { cn } from '@/lib/utils'
import { Avatar } from './avatar'
import { SectionHeading } from './section-heading'

function SkillPicker({
  legend,
  value,
  onChange,
  disabled,
}: {
  legend: string
  value: Skill
  onChange: (skill: Skill) => void
  disabled?: Skill
}) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-3 text-sm font-medium text-muted-foreground">
        {legend}
      </legend>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => {
          const selected = skill === value
          const isDisabled = skill === disabled
          return (
            <button
              key={skill}
              type="button"
              aria-pressed={selected}
              disabled={isDisabled}
              onClick={() => onChange(skill)}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                selected
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background hover:border-foreground/30',
                isDisabled && 'cursor-not-allowed opacity-35',
              )}
            >
              {selected ? <Check className="size-3.5" aria-hidden="true" /> : null}
              {skill}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

export function SkillSwap() {
  const [offer, setOffer] = useState<Skill>('Web development')
  const [want, setWant] = useState<Skill>('Branding')

  const matches = SWAP_PROFILES.filter((p) => p.offers.includes(want))
    .map((p) => {
      const complementary = p.wants.includes(offer)
      return {
        ...p,
        complementary,
        score: complementary ? p.baseScore : p.baseScore - 24,
      }
    })
    .sort((a, b) => b.score - a.score)

  return (
    <section
      id="skill-swap"
      aria-labelledby="swap-title"
      className="scroll-mt-16 border-b border-border/60"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading
          id="swap-title"
          eyebrow="Skill Swap"
          title="Exchange what you know for what you need."
          description="Tell SkillSiren what you can offer and what you're looking for. It finds people whose needs complement yours — and lets you propose an exchange in one step."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-8 rounded-2xl border border-border bg-card p-6 sm:p-7">
            <SkillPicker
              legend="I can offer"
              value={offer}
              onChange={(skill) => {
                setOffer(skill)
                if (skill === want) setWant(SKILLS.find((s) => s !== skill)!)
              }}
            />
            <div className="h-px bg-border" />
            <SkillPicker
              legend="I'm looking for"
              value={want}
              onChange={setWant}
              disabled={offer}
            />
          </div>

          <div className="flex flex-col gap-3" aria-live="polite">
            <p className="text-sm text-muted-foreground">
              {matches.length > 0
                ? `${matches.length} ${matches.length === 1 ? 'person offers' : 'people offer'} ${want.toLowerCase()}`
                : `No one offers ${want.toLowerCase()} in this preview yet`}
            </p>
            <ul className="flex flex-col gap-3">
              {matches.map((m) => (
                <li
                  key={m.name}
                  className={cn(
                    'flex flex-col gap-4 rounded-2xl border bg-card p-5 sm:flex-row sm:items-center',
                    m.complementary ? 'border-signal/40' : 'border-border',
                  )}
                >
                  <div className="flex flex-1 items-start gap-3">
                    <Avatar
                      initials={m.initials}
                      tone={m.complementary ? 'signal' : 'muted'}
                    />
                    <div className="flex flex-col gap-1">
                      <p className="font-medium">
                        {m.name}{' '}
                        <span className="font-normal text-muted-foreground">
                          · {m.role}
                        </span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Offers {m.offers.join(', ')} · Wants{' '}
                        {m.wants.join(', ')}
                      </p>
                      <p
                        className={cn(
                          'text-sm',
                          m.complementary ? 'text-signal' : 'text-muted-foreground',
                        )}
                      >
                        {m.complementary
                          ? `Complementary — they're looking for ${offer.toLowerCase()}.`
                          : 'One-way fit — better as a paid project or collaboration.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-2">
                    <p className="font-display text-2xl font-semibold">
                      {m.score}%
                      <span className="sr-only"> match</span>
                    </p>
                    {m.complementary ? (
                      <button
                        type="button"
                        className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                      >
                        <ArrowLeftRight className="size-4" aria-hidden="true" />
                        Propose swap
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex h-9 items-center rounded-lg border border-border px-3 text-sm font-medium transition-colors hover:bg-muted"
                      >
                        Message
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
