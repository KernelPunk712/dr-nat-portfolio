'use client'

import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'
import { Icons } from '@/components/icons'

const publications = [
  {
    journal: 'Global Public Health',
    title:
      'Evaluating lay perceptions of maternal morality to improve risk communication: a case study in Rivers State, Nigeria',
    url: 'https://www.tandfonline.com/doi/abs/10.1080/17441692.2016.1211165',
    year: '2016',
    type: 'Peer-Reviewed Journal',
  },
]

export function Publications() {
  return (
    <section id="publications" className="py-20 sm:py-28 bg-background">
      <div className="container">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Research
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Publications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Peer-reviewed research contributions to global health policy and
            public health systems.
          </p>
        </FadeIn>

        <StaggerContainer className="max-w-4xl mx-auto">
          {publications.map((pub) => (
            <StaggerItem key={pub.url}>
              <motion.a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                className="group block p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Icon */}
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icons.book className="w-7 h-7 text-primary" />
                  </div>

                  <div className="flex-1">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide">
                        {pub.type}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {pub.journal} &bull; {pub.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-relaxed">
                      {pub.title}
                    </h3>

                    {/* Read Link */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      <span>Read Publication</span>
                      <Icons.arrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
