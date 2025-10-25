import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Enterprise AI Catalyst',
  description: 'Enterprise-grade AI agent for business transformation',
  keywords: 'AI, enterprise, business transformation, change management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  )
}