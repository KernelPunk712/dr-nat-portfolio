'use client'

import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'
import { Icons } from '@/components/icons'

const featuredServices = [
  {
    icon: 'briefcase',
    title: 'Public Sector and Risk Management',
    description: 'Designing governance systems and enterprise risk frameworks within national institutions.',
  },
  {
    icon: 'heart',
    title: 'Health Systems Strengthening',
    description: 'Executing gender responsive programs to improve maternal and child health outcomes.',
  },
]

export function FeaturedWork() {
  return (
    <section className="py-20 sm:py-28 bg-muted/20 dark:bg-secondary/10">
      <div className="container">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance">
            Featured Work
          </h2>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {featuredServices.map((service) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons]
            return (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                  className="group relative h-full p-8 sm:p-10 rounded-3xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 overflow-hidden"
                >
                  {/* Glow Border Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                    <div className="absolute inset-[1px] rounded-3xl bg-card" />
                  </div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-pretty">
                      {service.description}
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
