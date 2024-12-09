'use client'

import { motion } from 'framer-motion'
import { FaEnvelope } from 'react-icons/fa' // FaPhone, FaMapMarkerAlt
const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 animate-gradient-xy"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Get in Touch</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Have questions about our services or want to start a project? Reach out to us!
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <FaEnvelope className="mr-4 text-2xl" />
                <span>info@quantrixe.net</span>
              </div>
              {/* <div className="flex items-center text-gray-700 dark:text-gray-300">
                <FaPhone className="mr-4 text-2xl" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <FaMapMarkerAlt className="mr-4 text-2xl" />
                <span>1128 Vine Street, Waukegan, Illinois, USA - 60085</span>
              </div> */}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-black dark:bg-white text-white dark:text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

