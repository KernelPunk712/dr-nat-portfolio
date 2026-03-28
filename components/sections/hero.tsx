'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Icons } from '@/components/icons'

export function Hero() {
  const { scrollY } = useScroll()
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0])
  const scrollIndicatorY = useTransform(scrollY, [0, 100], [0, 20])

  // Hero entrance animation variants
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const heroItemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1],
        delay: 0.3,
      },
    },
  }
  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector('#about')
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30 dark:from-slate-black dark:via-rich-navy/50 dark:to-slate-black" />

      {/* Animated Gradient Orbs - contained within viewport */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] -translate-y-1/4 translate-x-1/4 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-0 left-0 w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] translate-y-1/4 -translate-x-1/4 rounded-full bg-gradient-to-tr from-accent/15 to-primary/10 blur-3xl"
        />
      </div>

      <div className="container relative py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div variants={heroItemVariants}>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs sm:text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
                Public Health Leader
              </span>
            </motion.div>

            <motion.div variants={heroItemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-tight text-balance">
                Dr. Natasha{' '}
                <span className="text-primary">Oyibo</span>
              </h1>
            </motion.div>

            <motion.div variants={heroItemVariants}>
              <p className="mt-4 text-base sm:text-lg lg:text-xl text-accent font-medium tracking-wide">
                Public Health Specialist | Risk Management Expert | Development Practitioner | AI enabled Maternal and Child Health Solutions Expert
              </p>
            </motion.div>

            <motion.div variants={heroItemVariants}>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
                Advancing maternal and child health by strengthening systems, reducing risk, and driving policy, governance, and execution across Africa and Europe.
              </p>
            </motion.div>

            <motion.div variants={heroItemVariants}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://calendly.com/tashaoyibo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-semibold transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
                >
                  <Icons.calendar className="w-5 h-5" />
                  Schedule a Meeting
                  <Icons.arrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#about"
                  onClick={handleScrollToAbout}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-foreground/20 text-foreground rounded-full text-base font-semibold transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5"
                >
                  Read Full Profile
                  <Icons.chevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px]">
              {/* Rotating decorative orbs - dashed borders only, no blur */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear', opacity: { duration: 1, delay: 0.5 }, scale: { duration: 1, delay: 0.5 } }}
                className="absolute -inset-4 rounded-full border border-dashed border-primary/30"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear', opacity: { duration: 1, delay: 0.7 }, scale: { duration: 1, delay: 0.7 } }}
                className="absolute -inset-8 rounded-full border border-dashed border-accent/20"
              />

              {/* Clean image container - transparent background for clean PNG edges */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/images/hero-portrait.jpg"
                  alt="Dr. Natasha Oyibo - Public Health Specialist"
                  fill
                  quality={75}
                  priority
                  className="object-cover object-top scale-110"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 384px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - fades on scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity: scrollIndicatorOpacity, y: scrollIndicatorY }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
