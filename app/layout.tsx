import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Système d\'Évaluation des Enseignants',
  description: 'Prototypes statiques du système d\'évaluation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

