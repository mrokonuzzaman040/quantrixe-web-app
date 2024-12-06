import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

const ThreeAnimation = dynamic(() => import('@/components/ThreeAnimation'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quantrixe - Empowering Web3 Innovation',
  description: 'Quantrixe is a next-generation Web3 technology solutions provider specializing in blockchain, decentralized applications, and AI.',
}

import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode,
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col relative`}>
        <div className="fixed inset-0 opacity-20 pointer-events-none">
          <ThreeAnimation type="default" />
        </div>
        <Header />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

