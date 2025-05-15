import Link from "next/link";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-xl border-t border-lime-500/10 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left">
          <div>
            <h3 className="text-2xl font-bold text-lime-400 mb-3">Quantrixe</h3>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto lg:mx-0">
              Driving innovation at the intersection of Blockchain and AI—
              enabling secure, intelligent, and scalable systems for the future.
            </p>
            <div className="mt-4 flex justify-center lg:justify-start space-x-4 text-2xl text-gray-400">
              <a
                href="https://linkedin.com/company/quantrixe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-400 transition hover:scale-110 duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/company/quantrixe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-400 transition hover:scale-110 duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://linkedin.com/company/quantrixe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-400 transition hover:scale-110 duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-lime-400">Legal</h4>
            <p className="text-sm text-gray-300 mb-4">
              We strictly adhere to NDAs and industry best practices to
              safeguard client data and ensure complete confidentiality.
            </p>
            <ul className="space-y-2 text-sm text-lime-400">
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/nda" className="hover:underline">
                  NDA & Confidentiality
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-lime-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-lime-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-lime-400 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-lime-400 transition"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-lime-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-lime-400">
              Contact
            </h4>
            <p className="flex justify-center lg:justify-start items-start gap-2 text-sm text-gray-300 mb-3">
              <FaMapMarkerAlt className="text-lime-400 mt-1" />
              Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates
            </p>
            <p className="flex justify-center lg:justify-start items-center gap-2 text-sm text-gray-300">
              <FaEnvelope className="text-lime-400" />
              <a
                href="mailto:info@quantrixe.net"
                className="hover:text-lime-400 transition"
              >
                info@quantrixe.net
              </a>
            </p>
          </div>
        </div>

        <div className="my-8 border-t border-gray-700/50" />

        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Quantrixe</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
