'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import dynamic from 'next/dynamic'

const ThreeAnimation = dynamic(() => import('./ThreeAnimation'), { ssr: false })

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black bg-opacity-50 backdrop-blur-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400 relative">
          Quantrixe
          <div className="absolute inset-0 opacity-50">
            <ThreeAnimation type="cube" />
          </div>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {['Home', 'Services', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="hover:text-blue-400 transition-colors relative group"
            >
              {item}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-50 pointer-events-none">
                <ThreeAnimation type="web3" />
              </div>
            </Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-md">
          <nav className="flex flex-col items-center py-4">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="py-2 hover:text-blue-400 transition-colors relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-50 pointer-events-none">
                  <ThreeAnimation type="web3" />
                </div>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

