'use client'

import { FadeIn } from '@/components/motion'
import { motion } from 'framer-motion'

const institutions = [
  { name: 'Federal Inland Revenue Service', abbrev: 'FIRS' },
  { name: 'World Health Organization', abbrev: 'WHO' },
  { name: 'NHS', abbrev: 'NHS' },
  { name: 'Arieli Foundation', abbrev: 'Arieli' },
]

export function TrustedBy() {
  return (
    <section className="py-16 sm:py-20 bg-muted/30 dark:bg-secondary/20 border-y border-border/50">
      <div className="container">
        <FadeIn>
          <p className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground mb-10">
            Trusted By
          </p>
        </FadeIn>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {institutions.map((institution, index) => (
            <FadeIn key={institution.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group relative px-6 py-3"
              >
                <div className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-muted-foreground/60 group-hover:text-primary transition-colors duration-500">
                  {institution.name}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
