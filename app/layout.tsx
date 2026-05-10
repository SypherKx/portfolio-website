import './globals.css'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Karan Pratap Singh — Index',
  description:
    'Selected work, writing and notes from Karan Pratap Singh — data analyst, machine-learning practitioner, and student of quantitative finance.',
  keywords: [
    'Karan Pratap Singh', 'Data Analyst', 'Data Scientist', 'Machine Learning',
    'Fintech', 'Quantitative Finance', 'Portfolio'
  ],
  authors: [{ name: 'Karan Pratap Singh' }],
  openGraph: {
    title: 'Karan Pratap Singh — Index',
    description: 'An editorial portfolio of work in data, AI and quantitative finance.',
    type: 'website'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F4F1EA'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
