import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AetherLabs | Intelligence Meets Nature',
  description: 'AI-powered sustainable solutions for tomorrow\u2019s challenges.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
