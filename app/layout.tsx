import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mithila Makkhana - Premium Fox Nuts from Bihar',
  description: 'Discover the finest quality Mithila Makkhana (fox nuts) - healthy, crunchy, and nutritious snacks from the heartland of Bihar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
