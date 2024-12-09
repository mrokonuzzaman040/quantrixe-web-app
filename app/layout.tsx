'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Quantrixe | Empowering Innovation Across the Digital Spectrum</title>
        <meta
          name="description"
          content="Quantrixe is a next-generation technology solutions provider specializing in blockchain, Web 3.0, mobile application development, and machine learning. Let's innovate together!"
        />
        <meta
          name="keywords"
          content="Quantrixe, blockchain solutions, Web 3.0 development, mobile app development, machine learning, AI solutions, decentralized applications, technology consulting"
        />
        <meta name="author" content="Quantrixe" />
        <meta property="og:title" content="Quantrixe" />
        <meta
          property="og:description"
          content="Empowering innovation by creating seamless, secure, and intelligent technology solutions."
        />
        <meta property="og:url" content="https://www.quantrixe.net/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

