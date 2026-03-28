'use client'

import { motion } from 'framer-motion'
import { FadeIn, SlideIn } from '@/components/motion'
import { Icons } from '@/components/icons'

const workAreas = [
  {
    title: 'Public Sector and Institutional Reform',
    description: 'Strengthening governance systems through:',
    points: [
      'Enterprise risk management framework design',
      'Governance and compliance integration',
      'Support for national reform programs aligned with global standards',
    ],
    icon: 'shield',
    direction: 'left' as const,
  },
  {
    title: 'Health Systems Strengthening',
    description: 'Improving maternal and child health outcomes via:',
    points: [
      'Gender responsive program design and execution',
      'Policy advisory and implementation',
      'Multi-stakeholder coordination',
    ],
    icon: 'heart',
    direction: 'right' as const,
  },
  {
    title: 'International Development Work',
    description: 'Delivering cross-regional solutions through:',
    points: [
      'WHO research and policy contributions',
      'UK-Nigeria institutional collaboration',
      'Leadership of multidisciplinary programs',
    ],
    icon: 'globe',
    direction: 'left' as const,
  },
]

export function WorkImpact() {
  return (
    <section id="work" className="py-20 sm:py-28 bg-muted/20 dark:bg-secondary/10">
      <div className="container">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Work & Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance">
            Transforming Systems, Delivering Impact
          </h2>
        </FadeIn>

        <div className="space-y-16 max-w-5xl mx-auto">
          {workAreas.map((area, index) => {
            const IconComponent = Icons[area.icon as keyof typeof Icons]
            const isEven = index % 2 === 0
            
            return (
              <SlideIn
                key={area.title}
                direction={area.direction}
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
                >
                  {/* Icon Block */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                      <IconComponent className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{area.description}</p>
                    <ul className="space-y-3">
                      {area.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-3 text-foreground justify-center lg:justify-start"
                        >
                          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </SlideIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
