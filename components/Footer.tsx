import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quantrixe</h3>
            <p>Empowering Innovation Across the Digital Spectrum</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li>
                <Link href="/about" className="hover:text-lime-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-lime-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-lime-500">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-lime-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p>1128 Vine Street, Waukegan, Illinois, USA - 60085</p>
            {/* <p>Phone: +1 (123) 456-7890</p> */}
            <p className="mb-2">
              Email:{" "}
              <a
                href="mailto:info@quantrixe.net"
                className="hover:text-lime-500"
              >
                info@quantrixe.net
              </a>
            </p>
          </div>
          {/* <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/inn0nexus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-lime-500"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/inno-nexus/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-lime-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/innonex-us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-lime-500"
              >
                <FaGithub />
              </a>
            </div>
          </div> */}
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Quantrixe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

