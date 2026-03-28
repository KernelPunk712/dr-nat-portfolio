'use client'

import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'
import { Icons } from '@/components/icons'

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/drnatashaoyibo?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    url: 'https://www.instagram.com/natashaoyibo?igsh=MWxwdmNpZzI3ZjljaQ%3D%3D&utm_source=qr',
  },
  {
    name: 'Facebook',
    icon: 'facebook',
    url: 'https://www.facebook.com/share/1Rc8s5Mkfy/?mibextid=wwXIfr',
  },
  {
    name: 'X (Twitter)',
    icon: 'twitter',
    url: 'https://x.com/natashaoyibo?s=21',
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-background">
      <div className="container">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
            All professional inquiries are coordinated through the scheduling link below.
          </p>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          {/* Primary CTA */}
          <FadeIn delay={0.2} className="mb-12">
            <motion.a
              href="https://calendly.com/tashaoyibo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-3 w-full px-8 py-5 bg-primary text-primary-foreground rounded-2xl text-lg font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
            >
              <Icons.calendar className="w-6 h-6" />
              Schedule a Meeting
              <Icons.arrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </FadeIn>

          {/* Email */}
          <FadeIn delay={0.3} className="mb-12">
            <a
              href="mailto:natashaoyibo@arielifoundation.org"
              className="group flex items-center justify-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Icons.mail className="w-5 h-5" />
              <span>natashaoyibo@arielifoundation.org</span>
            </a>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={0.4}>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-6">Connect on Social Media</p>
              <StaggerContainer className="flex justify-center gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = Icons[social.icon as keyof typeof Icons]
                  return (
                    <StaggerItem key={social.name}>
                      <motion.a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -4, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-foreground"
                        aria-label={`Visit ${social.name} profile`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    </StaggerItem>
                  )
                })}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
