import type { Metadata } from 'next'
import { Bricolage_Grotesque, Manrope } from 'next/font/google'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
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
    <html lang="pt-BR" className={`${bricolage.variable} ${manrope.variable}`}>
      <body className="bg-brand-bg text-brand-text font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
