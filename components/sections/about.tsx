'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from '@/components/motion'
import { Icons } from '@/components/icons'

const expertiseAreas = [
  'Maternal and Child Health',
  'Risk Management and Governance',
  'Gender Equality and Social Inclusion',
  'Public Sector Reform',
  'Monitoring, Evaluation, and Learning (MEL)',
]

const careerHighlights = [
  {
    title: 'Public Sector and Risk Management',
    role: 'Project Manager and Senior Risk Manager',
    organization: 'Federal Inland Revenue Service',
    points: [
      'Designing enterprise risk management frameworks aligned with global standards',
      'Integrating governance, compliance, and accountability systems',
      'Supporting national reform initiatives, including IMF TADAT programs',
    ],
  },
  {
    title: 'International and Health Systems Work',
    role: 'Research and Policy Development',
    organization: 'World Health Organization (Geneva), NHS, and National Systems',
    points: [
      'Contributed to research and policy development at WHO in Geneva',
      'Led multidisciplinary health and development programs across NHS',
      'Delivered cross-regional impact in UK and Nigeria',
    ],
  },
]

const education = [
  {
    degree: 'PhD in Risk Management and Public Health',
    institution: 'Middlesex University',
  },
  {
    degree: 'MRes in Structural Molecular Biology',
    institution: 'Imperial College London',
  },
  {
    degree: 'First Class BSc in Biochemistry',
    institution: 'Kingston University',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-background overflow-hidden">
      <div className="container">
        {/* About Preview */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <SlideIn direction="left">
            <div className="relative">
              {/* Glow effect - positioned behind with z-index */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent rounded-3xl blur-2xl -z-10" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-border/50 bg-background">
                <Image
                  src="/images/about-portrait.jpg"
                  alt="Dr. Natasha Oyibo"
                  fill
                  quality={100}
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative Element - hidden on small screens to prevent overflow */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-20 hidden sm:block" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-2xl -z-20 hidden sm:block" />
            </div>
          </SlideIn>

          <SlideIn direction="right">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs sm:text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
                About
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
                Dr. Natasha Oyibo
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
                Dr. Natasha Oyibo is a Nigerian British public health specialist and risk management expert with over a decade of cross-regional experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                Her work sits at the intersection of health systems, governance, and institutional reform, delivering scalable, measurable impact.
              </p>
              <p className="text-base text-foreground leading-relaxed text-pretty">
                Dr. Natasha Oyibo specializes in strengthening health systems, improving maternal and child health outcomes, and embedding risk-informed decision making into public sector and development programs. Her work combines scientific research, policy expertise, and institutional execution across Africa and Europe.
              </p>
            </div>
          </SlideIn>
        </div>

        {/* Areas of Expertise */}
        <FadeIn className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
              Areas of Expertise
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {expertiseAreas.map((area, index) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </FadeIn>

        {/* Career Overview */}
        <div className="mb-24">
          <FadeIn className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
              Career Overview
            </h3>
          </FadeIn>

          <StaggerContainer className="space-y-8 max-w-4xl mx-auto">
            {careerHighlights.map((career) => (
              <StaggerItem key={career.title}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
                  <h4 className="text-xl font-serif font-bold text-foreground mb-2">
                    {career.title}
                  </h4>
                  <p className="text-accent font-medium mb-1">{career.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{career.organization}</p>
                  <ul className="space-y-2">
                    {career.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-muted-foreground">
                        <Icons.check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Education */}
        <FadeIn>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
              Education
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 text-center"
              >
                <Icons.book className="w-8 h-8 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2 text-balance">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Additional certifications in Risk Management and Oil and Gas Management
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
