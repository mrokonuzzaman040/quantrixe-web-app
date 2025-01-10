'use client'

import { motion, useAnimation } from 'framer-motion'
import { FaRocket } from 'react-icons/fa'
import Link from 'next/link'
import { useEffect } from 'react'
import Lottie from 'react-lottie'
import animationData from '@/public/animations/HERO.json'

const Hero = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      rotateY: 360,
      transition: { duration: 2, repeat: Infinity, ease: "linear" }
    })
  }, [controls])

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Lottie Animation as Background */}
      <div className="absolute inset-0 z-0">
        <Lottie options={defaultOptions} height="100%" width="100%" />
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <motion.div
          animate={controls}
          className="inline-block mb-8"
        >
          <FaRocket className="text-6xl text-black dark:text-white" />
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-black dark:text-white">Welcome to Quantrixe</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">Empowering Innovation Across the Digital Spectrum</p>
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black dark:bg-white text-white dark:text-black font-bold py-3 px-8 rounded-full text-lg flex items-center justify-center mx-auto hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
          >
            <FaRocket className="mr-2" />
            Get Started
          </motion.button>
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero
