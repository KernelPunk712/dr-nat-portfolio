'use client'

import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'
import { Icons } from '@/components/icons'

const initiatives = [
  {
    title: 'Arieli Ambassador Emergency Referral Initiative (AAERI)',
    description:
      'Structured emergency response system connecting communities to timely maternal care',
  },
  {
    title: 'Community Outreach Programs',
    description:
      'Health education, screenings, and support services for women and adolescents',
  },
]

const impactStats = [
  { label: 'Women, Newborn and Children', value: 'Thousands' },
  { label: 'Nigerian states covered', value: 'Multiple' },
  { label: 'Emergency response systems', value: 'Strengthened' },
]

const approaches = [
  { icon: 'users', label: 'Community-led engagement' },
  { icon: 'target', label: 'Data-driven interventions' },
  { icon: 'heart', label: 'Gender-responsive programming' },
]

export function ArieliFoundation() {
  return (
    <section
      id="arieli"
      className="py-20 sm:py-28 bg-gradient-to-br from-secondary via-secondary/95 to-slate-black text-secondary-foreground relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative Glow - contained */}
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-medium tracking-wider uppercase bg-accent/20 text-accent rounded-full border border-accent/30">
            Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 text-balance">
            Arieli Foundation for{' '}
            <span className="text-accent">Maternal and Child Health</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-pretty">
            A non-profit focused on reducing maternal and child mortality in
            underserved communities in Nigeria. Founded by Dr. Natasha Oyibo,
            the Foundation addresses systemic gaps in access, emergency
            response, and community-level support.
          </p>
        </FadeIn>

        {/* Key Initiatives */}
        <div className="mb-20">
          <FadeIn className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Key Initiatives
            </h3>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {initiatives.map((initiative) => (
              <StaggerItem key={initiative.title}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-500"
                >
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {initiative.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {initiative.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Impact Stats */}
        <div className="mb-20">
          <FadeIn className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Impact
            </h3>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {impactStats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6"
                >
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Approach */}
        <div className="mb-16">
          <FadeIn className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Our Approach
            </h3>
          </FadeIn>

          <StaggerContainer className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {approaches.map((approach) => {
              const IconComponent = Icons[approach.icon as keyof typeof Icons]
              return (
                <StaggerItem key={approach.label}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300"
                  >
                    <IconComponent className="w-5 h-5 text-primary" />
                    <span className="text-white font-medium">
                      {approach.label}
                    </span>
                  </motion.div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>

        {/* CTA */}
        <FadeIn className="text-center">
          <a
            href="https://arielifoundation.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full text-base font-semibold transition-all duration-300 hover:bg-accent/90 hover:scale-105 hover:shadow-xl hover:shadow-accent/25"
          >
            Visit Arieli Foundation Website
            <Icons.externalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
