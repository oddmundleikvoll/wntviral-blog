import type { Metadata } from 'next'
import Link from 'next/link'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import './globals.css'

export const metadata: Metadata = {
  title: 'WNT Viral - Automation for Small Businesses',
  description: 'Save 10+ hours/week with proven automation workflows for small businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        <GoogleAnalytics />
        <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="text-xl font-bold text-white">
                WNT Viral
              </Link>
              <nav className="flex gap-6">
                <Link href="/blog" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  Blog
                </Link>
                <Link href="/guide" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  Guide
                </Link>
              </nav>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}