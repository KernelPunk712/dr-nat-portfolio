import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title:
    'Dr. Natasha Oyibo | Public Health Specialist & Risk Management Expert',
  description:
    'Dr. Natasha Oyibo is a Nigerian British public health specialist and risk management expert strengthening health systems and reducing maternal risk through policy, governance, and execution across Africa and Europe.',
  keywords: [
    'Dr. Natasha Oyibo',
    'Public Health',
    'Risk Management',
    'Maternal Health',
    'WHO',
    'NHS',
    'Arieli Foundation',
    'Health Systems',
    'Nigeria',
    'Development Practitioner',
  ],
  authors: [{ name: 'Dr. Natasha Oyibo' }],
  openGraph: {
    title:
      'Dr. Natasha Oyibo | Public Health Specialist & Risk Management Expert',
    description:
      'Strengthening health systems and reducing maternal risk through policy, governance, and execution across Africa and Europe.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Dr. Natasha Oyibo | Public Health Specialist & Risk Management Expert',
    description:
      'Strengthening health systems and reducing maternal risk through policy, governance, and execution across Africa and Europe.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF9F7' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
