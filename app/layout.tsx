import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chokoburguer – A primeira hambúrgueria doce do Brasil!',
  description:
    'Peça online pelo Chokoburguer, a primeira hambúrgueria doce do Brasil. Marmitas, sorvetes, doces e muito mais.',
  keywords: ['chokoburguer', 'hamburguer doce', 'delivery', 'marmita', 'sorvete'],
  openGraph: {
    title: 'Chokoburguer',
    description: 'A primeira hambúrgueria doce do Brasil!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-brand-dark text-brand-cream font-body antialiased">
        {children}
      </body>
    </html>
  )
}
