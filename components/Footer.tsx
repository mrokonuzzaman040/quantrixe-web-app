import { Twitter, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-50 backdrop-blur-md py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Quantrixe. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://x.com/inn0nexus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Twitter />
            </a>
            <a href="https://www.linkedin.com/company/inno-nexus/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin />
            </a>
            <a href="https://github.com/innonex-us" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

