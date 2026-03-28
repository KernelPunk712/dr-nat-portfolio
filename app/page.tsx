import { Navigation } from '@/components/sections/navigation'
import { Hero } from '@/components/sections/hero'
import { TrustedBy } from '@/components/sections/trusted-by'
import { ImpactSnapshot } from '@/components/sections/impact-snapshot'
import { FeaturedWork } from '@/components/sections/featured-work'
import { About } from '@/components/sections/about'
import { WorkImpact } from '@/components/sections/work-impact'
import { ArieliFoundation } from '@/components/sections/arieli-foundation'
import { Advisory } from '@/components/sections/advisory'
import { MediaPress } from '@/components/sections/media-press'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function HomePage() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <Navigation />
      <main className="overflow-x-hidden">
        <Hero />
        <TrustedBy />
        <ImpactSnapshot />
        <FeaturedWork />
        <About />
        <WorkImpact />
        <ArieliFoundation />
        <Advisory />
        <MediaPress />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
