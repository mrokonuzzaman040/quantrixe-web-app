'use client'

import { motion } from 'framer-motion'
import { FaChartLine, FaHeartbeat, FaShoppingCart, FaTruck, FaGraduationCap, FaFilm } from 'react-icons/fa'

const industries = [
  { icon: FaChartLine, title: 'Finance & FinTech', description: 'Revolutionizing financial services with blockchain and AI' },
  { icon: FaHeartbeat, title: 'Healthcare', description: 'Enhancing patient care with secure and efficient systems' },
  { icon: FaShoppingCart, title: 'Retail & E-commerce', description: 'Creating seamless shopping experiences with AI and blockchain' },
  { icon: FaTruck, title: 'Supply Chain & Logistics', description: 'Optimizing operations with transparent and efficient solutions' },
  { icon: FaGraduationCap, title: 'Education & E-learning', description: 'Transforming education with innovative digital platforms' },
  { icon: FaFilm, title: 'Media & Entertainment', description: 'Empowering creators with Web3 and blockchain technology' },
]

const Industries = () => {
  return (
    <section id="industries" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-gray-200 to-gray-100 dark:from-gray-900 dark:to-gray-800 animate-gradient-xy"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <industry.icon className="text-4xl text-black dark:text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{industry.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries

