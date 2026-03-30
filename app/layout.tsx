import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'SVExportGlobal — India\'s Premier Export Company',
  description: 'India\'s most trusted export company delivering agricultural, pharmaceutical, and industrial goods worldwide. Quality without compromise since 2010.',
  keywords: 'India export, agricultural export, pharma export, spices export, SVExportGlobal, Nagpur exporter',
}

import ScrollRevealProvider from '@/components/ScrollRevealProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollRevealProvider />
        {children}
      </body>
    </html>
  )
}
