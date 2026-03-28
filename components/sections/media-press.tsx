'use client'

import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'
import { Icons } from '@/components/icons'

const mediaFeatures = [
  {
    publication: 'ThisDay',
    title: 'Arieli Foundation Expands Global Reach to Transform Maternal Child Health',
    url: 'https://www.thisdaylive.com/2025/04/04/arieli-foundation-expands-global-reach-to-transform-maternal-child-health/',
  },
  {
    publication: 'Vanguard',
    title: 'Arieli Foundation Expands to Three Northern States to Tackle Maternal and Child Healthcare',
    url: 'https://www.vanguardngr.com/2025/04/arieli-foundation-expands-to-three-northern-states-to-tackle-maternal-and-child-healthcare/amp/',
  },
  {
    publication: 'The Nation',
    title: 'Oyibo Leads Arieli Foundation\'s Advocacy at UN Women\'s Summit',
    url: 'https://thenationonlineng.net/oyibo-leads-arieli-foundations-advocacy-at-un-womens-summit/',
  },
  {
    publication: 'Independent',
    title: 'Natasha Oyibo Leads Arieli Foundation\'s Global Advocacy at UN\'s CSW70',
    url: 'https://independent.ng/natasha-oyibo-leads-arieli-foundations-global-advocacy-at-uns-csw70/',
  },
  {
    publication: 'Radio Nigeria',
    title: 'Arieli Foundation Moves to Improve Child Maternal Health Care',
    url: 'https://radionigeriaabuja.gov.ng/arieli-foundation-moves-to-improve-child-maternal-health-care/',
  },
  {
    publication: 'LinkedIn',
    title: 'Professional Profile and Updates',
    url: 'https://www.linkedin.com/in/drnatashaoyibo',
  },
]

export function MediaPress() {
  return (
    <section id="media" className="py-20 sm:py-28 bg-muted/20 dark:bg-secondary/10">
      <div className="container">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-medium tracking-wider uppercase bg-accent/10 text-accent rounded-full border border-accent/20">
            Press
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Media & Press
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {"Dr. Natasha Oyibo's work has been featured in verified media platforms highlighting her contributions to public health, risk management, and maternal health."}
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {mediaFeatures.map((media) => (
            <StaggerItem key={media.url}>
              <motion.a
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                className="group block h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl" style={{
                    background: 'linear-gradient(90deg, transparent, rgba(15, 118, 110, 0.3), transparent)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 2s infinite',
                  }} />
                </div>

                <div className="relative">
                  {/* Publication Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                    {media.publication}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-foreground mb-4 line-clamp-3 group-hover:text-primary transition-colors duration-300">
                    {media.title}
                  </h3>

                  {/* Read Link */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    <span>Read Article</span>
                    <Icons.arrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Add shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  )
}
