"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Quantrixe
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavLink href="/" active={pathname === "/"}>
              Home
            </NavLink>
            <NavLink href="/about" active={pathname === "/about"}>
              About
            </NavLink>
            <NavLink href="/services" active={pathname === "/services"}>
              Services
            </NavLink>
            <NavLink href="/industries" active={pathname === "/industries"}>
              Industries
            </NavLink>
            <NavLink href="/case-studies" active={pathname === "/case-studies"}>
              Case Studies
            </NavLink>
            <NavLink href="/contact" active={pathname === "/contact"}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) => (
  <Link
    href={href}
    className={`transition-colors duration-300 ${active ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
  >
    {children}
  </Link>
)

export default Navbar

