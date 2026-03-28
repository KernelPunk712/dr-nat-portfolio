'use client'

import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'
import { Icons } from '@/components/icons'

const advisoryFocus = [
  'RMNCH strategy',
  'Risk management and governance',
  'Healthcare quality improvement systems',
]

export function Advisory() {
  return (
    <section id="advisory" className="py-20 sm:py-28 bg-background">
      <div className="container">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance">
            Advisory & Leadership
          </h2>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative p-8 sm:p-12 rounded-3xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/5 to-transparent rounded-tr-full" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <Icons.award className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                      Board and Advisory Roles
                    </h3>
                    <p className="text-accent font-medium">
                      Advisory Board Member, Bosom Hospital and Physiotherapy
                    </p>
                  </div>
                </div>

                {/* Advisory Focus */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Advisory Focus
                  </h4>
                  <StaggerContainer className="flex flex-wrap gap-3">
                    {advisoryFocus.map((focus) => (
                      <StaggerItem key={focus}>
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {focus}
                        </motion.span>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
