import type { Metadata } from 'next'
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
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  )
}