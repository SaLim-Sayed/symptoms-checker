import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Symptoms Checker - AI Health Assistant',
  description: 'Get AI-powered health predictions based on your symptoms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

