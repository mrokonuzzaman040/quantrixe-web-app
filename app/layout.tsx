import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Quantrixe - Empowering Innovation Across the Digital Spectrum",
  description:
    "Quantrixe is a next-generation technology solutions provider dedicated to pushing the boundaries of what's possible in the digital world.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

