'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="fixed w-full z-50 bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-black dark:text-white font-bold text-xl">Quantrixe</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/" active={pathname === '/'}>Home</NavLink>
              <NavLink href="/about" active={pathname === '/about'}>About</NavLink>
              <NavLink href="/services" active={pathname === '/services'}>Services</NavLink>
              <NavLink href="/industries" active={pathname === '/industries'}>Industries</NavLink>
              <NavLink href="/case-studies" active={pathname === '/case-studies'}>Case Studies</NavLink>
              <NavLink href="/contact" active={pathname === '/contact'}>Contact</NavLink>
              <ThemeToggle />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ml-4"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/" active={pathname === '/'}>Home</MobileNavLink>
            <MobileNavLink href="/about" active={pathname === '/about'}>About</MobileNavLink>
            <MobileNavLink href="/services" active={pathname === '/services'}>Services</MobileNavLink>
            <MobileNavLink href="/industries" active={pathname === '/industries'}>Industries</MobileNavLink>
            <MobileNavLink href="/case-studies" active={pathname === '/case-studies'}>Case Studies</MobileNavLink>
            <MobileNavLink href="/contact" active={pathname === '/contact'}>Contact</MobileNavLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

const NavLink = ({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    <Link
      href={href}
      className={`${
        active ? 'bg-gray-200 dark:bg-gray-700' : ''
      } text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
    >
      {children}
    </Link>
  </motion.div>
)

const MobileNavLink = ({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    <Link
      href={href}
      className={`${
        active ? 'bg-gray-200 dark:bg-gray-700' : ''
      } text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300`}
    >
      {children}
    </Link>
  </motion.div>
)

export default Navbar

