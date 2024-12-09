import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-black dark:text-white font-bold text-xl">Quantrixe</Link>
            <p className="text-sm">Empowering Innovation Across the Digital Spectrum.</p>
            <div className="flex space-x-6">
              <a href="https://x.com/inn0nexus" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/inno-nexus/" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/innonex-us" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/services#blockchain" className="text-base hover:text-gray-900 dark:hover:text-gray-100">Blockchain</Link></li>
                  <li><Link href="/services#web3" className="text-base hover:text-gray-900 dark:hover:text-gray-100">Web 3.0</Link></li>
                  <li><Link href="/services#mobile" className="text-base hover:text-gray-900 dark:hover:text-gray-100">Mobile Development</Link></li>
                  <li><Link href="/services#ai" className="text-base hover:text-gray-900 dark:hover:text-gray-100">AI & Machine Learning</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/about" className="text-base hover:text-gray-900 dark:hover:text-gray-100">About</Link></li>
                  <li><Link href="/case-studies" className="text-base hover:text-gray-900 dark:hover:text-gray-100">Case Studies</Link></li>
                  <li><Link href="/careers" className="text-base hover:text-gray-900 dark:hover:text-gray-100">Careers</Link></li>
                  <li><Link href="/contact" className="text-base hover:text-gray-900 dark:hover:text-gray-100">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2023 Quantrixe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

