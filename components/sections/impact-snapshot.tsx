'use client'

import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'
import { Icons } from '@/components/icons'

const impactMetrics = [
  {
    icon: 'heart',
    title: 'Community-based maternal health interventions in Nigeria',
    description: 'Delivering targeted healthcare to underserved communities',
    glowColor: 'from-primary/20 via-primary/10',
    borderGlow: 'hover:shadow-primary/20',
  },
  {
    icon: 'globe',
    title: 'Multi-state maternal health initiatives',
    description: 'Scaling impact across multiple Nigerian states',
    glowColor: 'from-accent/20 via-accent/10',
    borderGlow: 'hover:shadow-accent/20',
  },
  {
    icon: 'shield',
    title: 'Enterprise risk frameworks in public institutions',
    description: 'Strengthening governance and accountability systems',
    glowColor: 'from-emerald-500/20 via-emerald-500/10',
    borderGlow: 'hover:shadow-emerald-500/20',
  },
  {
    icon: 'award',
    title: 'Global health policy contributions via WHO',
    description: 'Shaping international health standards and policies',
    glowColor: 'from-sky-500/20 via-sky-500/10',
    borderGlow: 'hover:shadow-sky-500/20',
  },
] as const

export function ImpactSnapshot() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-medium tracking-wider uppercase bg-accent/10 text-accent rounded-full border border-accent/20">
            Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance">
            Delivering Measurable Outcomes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Delivering measurable outcomes in public health and governance
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {impactMetrics.map((metric) => {
            const IconComponent = Icons[metric.icon as keyof typeof Icons]
            return (
              <StaggerItem key={metric.title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                  className={`group relative h-full p-6 sm:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-white/20 hover:shadow-2xl ${metric.borderGlow} transition-all duration-500`}
                >
                  {/* Glass Glow Effect - unique per card */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${metric.glowColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Inner glass shine */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Border glow effect */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                  
                  <div className="relative">
                    <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-white/10 group-hover:backdrop-blur-md transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug text-balance">
                      {metric.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
