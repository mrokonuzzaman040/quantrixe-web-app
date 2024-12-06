'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ArrowRight, Code, Database, Smartphone, Brain, BarChart } from 'lucide-react'
import dynamic from 'next/dynamic'

const ThreeAnimation = dynamic(() => import('@/components/ThreeAnimation'), { ssr: false })

gsap.registerPlugin(ScrollTrigger)

const services = [
  { icon: Code, title: 'Blockchain Solutions', color: 'text-blue-400', description: 'Build secure and scalable decentralized applications' },
  { icon: Database, title: 'Web3 Development', color: 'text-green-400', description: 'Create next-gen decentralized web experiences' },
  { icon: Smartphone, title: 'DApp Development', color: 'text-yellow-400', description: 'Develop mobile-first decentralized applications' },
  { icon: Brain, title: 'AI for Web3', color: 'text-purple-400', description: 'Integrate AI with blockchain technologies' },
  { icon: BarChart, title: 'Web3 Consulting', color: 'text-red-400', description: 'Strategic guidance for Web3 transformation' },
]

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      })
    })
  }, [])

  return (
    <div className="min-h-screen">
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <ThreeAnimation type="default" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Welcome to Web3 Innovation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Empowering the Decentralized Future with Quantrixe
            </p>
            <Link
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors inline-flex items-center group relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="ml-2 relative z-10" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-50">
                <ThreeAnimation type="cube" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section
        ref={el => sectionRefs.current[10] = el}
        className="py-20 bg-gray-900 "
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Web3 Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <ThreeAnimation type={index % 2 === 0 ? 'cube' : 'web3'} />
                </div>
                <service.icon className={`w-12 h-12 mb-4 ${service.color}`} />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={el => sectionRefs.current[1] = el}
        className="py-20 bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Quantrixe for Web3?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Web3 Expertise', description: 'Our team brings deep knowledge in blockchain, decentralized systems, and Web3 technologies.' },
              { title: 'Innovation First', description: 'We\'re constantly exploring new Web3 paradigms to keep you ahead of the curve.' },
              { title: 'Decentralized Approach', description: 'We build with decentralization in mind, ensuring true Web3 experiences.' },
              { title: 'Proven Web3 Track Record', description: 'Our portfolio showcases successful Web3 projects across various industries.' }
            ].map((item, index) => (
              <div key={index} className="relative overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <ThreeAnimation type={index % 2 === 0 ? 'cube' : 'web3'} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={el => sectionRefs.current[2] = el}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Dive into Web3?</h2>
          <p className="text-xl mb-12 text-gray-300">
            Let&apos;s work together to bring your decentralized ideas to life and drive your business into the Web3 future.
          </p>
          <Link
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors inline-flex items-center group relative overflow-hidden"
          >
            <span className="relative z-10">Contact Us</span>
            <ArrowRight className="ml-2 relative z-10" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-50">
              <ThreeAnimation type="web3" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

