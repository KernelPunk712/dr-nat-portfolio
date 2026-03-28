'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#arieli', label: 'Arieli Foundation' },
  { href: '#advisory', label: 'Advisory' },
  { href: '#publications', label: 'Publications' },
  { href: '#media', label: 'Media' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    setIsMobileMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm'
            : 'bg-transparent'
        )}
      >
        <nav className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2 group"
            >
              <span className="text-xl sm:text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Dr. Natasha Oyibo
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 hover:scale-105"
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {theme === 'dark' ? (
                      <Icons.sun className="w-5 h-5 text-accent" />
                    ) : (
                      <Icons.moon className="w-5 h-5 text-foreground" />
                    )}
                  </motion.div>
                </button>
              )}

              {/* CTA Button - Desktop */}
              <a
                href="https://calendly.com/tashaoyibo"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <Icons.calendar className="w-4 h-4" />
                Schedule
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <Icons.close className="w-5 h-5 text-foreground" />
                ) : (
                  <Icons.menu className="w-5 h-5 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden"
          >
            <div className="bg-background/95 backdrop-blur-xl border-b border-border shadow-xl">
              <nav className="container py-6">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-300 py-2"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <motion.a
                    href="https://calendly.com/tashaoyibo"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="flex items-center justify-center gap-2 mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-full text-base font-medium hover:bg-primary/90 transition-all duration-300"
                  >
                    <Icons.calendar className="w-5 h-5" />
                    Schedule a Meeting
                  </motion.a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
