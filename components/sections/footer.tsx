'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/motion'
import { Icons } from '@/components/icons'

const footerLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#arieli', label: 'Arieli Foundation' },
  { href: '#media', label: 'Media' },
  { href: '#contact', label: 'Contact' },
]

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/drnatashaoyibo',
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    url: 'https://www.instagram.com/natashaoyibo',
  },
  {
    name: 'Facebook',
    icon: 'facebook',
    url: 'https://www.facebook.com/share/1Rc8s5Mkfy/',
  },
  {
    name: 'X (Twitter)',
    icon: 'twitter',
    url: 'https://x.com/natashaoyibo',
  },
]

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="py-16 bg-secondary dark:bg-slate-black text-secondary-foreground border-t border-border/20">
      <div className="container">
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, '#hero')}
                className="inline-block text-2xl font-serif font-bold text-white mb-4 hover:text-accent transition-colors duration-300"
              >
                Dr. Natasha Oyibo
              </a>
              <p className="text-gray-400 leading-relaxed text-pretty">
                Public Health Specialist | Risk Management Expert | Development Practitioner | AI enabled Maternal and Child Health Solutions Expert
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <a
                href="mailto:natashaoyibo@arielifoundation.org"
                className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm block mb-4"
              >
                natashaoyibo@arielifoundation.org
              </a>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = Icons[social.icon as keyof typeof Icons]
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-accent/20 hover:text-accent transition-all duration-300 text-gray-400"
                      aria-label={`Visit ${social.name} profile`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                {new Date().getFullYear()} Dr. Natasha Oyibo. All rights reserved.
              </p>
              <a
                href="https://calendly.com/tashaoyibo"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors duration-300"
              >
                Schedule a Meeting
                <Icons.arrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
