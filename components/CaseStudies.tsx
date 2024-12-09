'use client'

import { motion } from 'framer-motion'
import { FaChartLine, FaShoppingCart, FaCoins } from 'react-icons/fa'

const caseStudies = [
  {
    icon: FaChartLine,
    title: 'Revolutionizing Supply Chain Management',
    description: 'Developed a custom blockchain solution for a leading global logistics company, resulting in a 30% reduction in delays and improved visibility across their supply chain.',
  },
  {
    icon: FaShoppingCart,
    title: 'AI-Powered E-commerce Personalization',
    description: 'Implemented an AI-driven personalization system for a popular e-commerce platform, leading to a 20% increase in sales and 15% improvement in customer retention.',
  },
  {
    icon: FaCoins,
    title: 'Secure Decentralized Finance Platform',
    description: 'Built a scalable DeFi platform for a FinTech startup, attracting over 10,000 users within the first three months of launch.',
  },
]

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 animate-gradient-xy"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <study.icon className="text-4xl text-black dark:text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{study.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{study.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies

