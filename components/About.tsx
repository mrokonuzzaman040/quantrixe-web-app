'use client'

import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'

const About = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      rotateY: [0, 360],
      transition: { duration: 5, repeat: Infinity, ease: "linear" }
    })
  }, [controls])

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 animate-gradient-xy"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <motion.div animate={controls} className="perspective-1000">
              <Image
                src="/about.jpg"
                alt="About Quantrixe"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 md:pl-12"
          >
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6">About Quantrixe</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              Quantrixe is a next-generation technology solutions provider dedicated to pushing the boundaries of what&apos;s possible in the digital world. Founded by a team of visionary developers and tech enthusiasts, we have emerged as a leader in offering comprehensive digital solutions that encompass blockchain, Web 3.0, mobile application development, and machine learning.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Our journey began with a simple yet powerful idea: to harness the potential of cutting-edge technologies to create solutions that drive real-world change. Today, we stand at the forefront of digital innovation, helping businesses across various sectors leverage the latest in technology to enhance their operations, engage their audiences, and grow their enterprises.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

