import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav/Nav'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'mgaytan-site',
  description: "Mario's portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  

  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
