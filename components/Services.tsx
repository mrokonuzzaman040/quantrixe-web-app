'use client'

import { motion } from 'framer-motion'
import { FaCode, FaMobileAlt, FaChartLine, FaCubes, FaGlobe } from 'react-icons/fa'

const services = [
  { icon: FaCubes, title: 'Blockchain Solutions', description: 'Secure, transparent, and decentralized blockchain solutions' },
  { icon: FaGlobe, title: 'Web & Web 3.0 Development', description: 'Modern web applications and decentralized web solutions' },
  { icon: FaMobileAlt, title: 'Mobile Application Development', description: 'Engaging and feature-rich mobile apps for iOS and Android' },
  { icon: FaChartLine, title: 'Machine Learning & AI', description: 'Intelligent applications powered by AI and machine learning' },
  { icon: FaCode, title: 'Consulting & Strategy', description: 'Expert guidance for your digital transformation journey' },
]

const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-gray-200 to-gray-100 dark:from-gray-900 dark:to-gray-800 animate-gradient-xy"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <service.icon className="text-4xl text-black dark:text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

