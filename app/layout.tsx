import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FloatingButton } from '@/components/floating-button'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'


const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'WSK Business Services | Accounting & Tax Solutions',
  description:
    'Premium accounting, tax planning, and business consulting services. Expert financial solutions for your business.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${jakarta.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <FloatingButton />
        <ScrollToTop />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
