import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'BV ELEC 77 | Électricien à Monthyon - Seine-et-Marne',
  description: 'BV ELEC 77 - Électricité générale en Seine-et-Marne et Île-de-France. Installation, dépannage et mise aux normes électriques. Devis gratuit au 06 25 74 47 30.',
  keywords: 'électricien, électricité, Seine-et-Marne, 77, Île-de-France, Monthyon, installation électrique, dépannage, mise aux normes',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
