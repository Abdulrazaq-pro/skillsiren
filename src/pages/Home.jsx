import { Hero } from '../components/sections/Hero.jsx'
import { Highlights } from '../components/sections/Highlights.jsx'
import { Problem } from '../components/sections/Problem.jsx'
import { Features } from '../components/sections/Features.jsx'
import { HowItWorks } from '../components/sections/HowItWorks.jsx'
import { Showcase } from '../components/sections/Showcase.jsx'
import { Audience } from '../components/sections/Audience.jsx'
import { AwsSection } from '../components/sections/AwsSection.jsx'
import { EarlyAccess } from '../components/sections/EarlyAccess.jsx'
import { Pricing } from '../components/sections/Pricing.jsx'
import { Team } from '../components/sections/Team.jsx'
import { Contact } from '../components/sections/Contact.jsx'

export default function Home() {
  return (
    <>
      <Hero /><Highlights /><Problem /><Features /><HowItWorks /><Showcase />
      <Audience /><AwsSection /><EarlyAccess /><Pricing /><Team /><Contact />
    </>
  )
}
