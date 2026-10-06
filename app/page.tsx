import { AiMatching } from '@/components/site/ai-matching'
import { Architecture } from '@/components/site/architecture'
import { ClosingCta, SiteFooter } from '@/components/site/closing'
import { Hero } from '@/components/site/hero'
import { HowItWorks } from '@/components/site/how-it-works'
import { OpportunityFeed } from '@/components/site/opportunity-feed'
import { SiteHeader } from '@/components/site/site-header'
import { SkillSwap } from '@/components/site/skill-swap'
import { ThreePaths } from '@/components/site/three-paths'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ThreePaths />
        <SkillSwap />
        <OpportunityFeed />
        <AiMatching />
        <HowItWorks />
        <Architecture />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  )
}
