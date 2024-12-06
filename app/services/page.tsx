'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code, Database, Smartphone, Brain, BarChart } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: <Code className="w-12 h-12 mb-4 text-blue-400" />,
    title: 'Blockchain Solutions',
    description: 'Develop secure and scalable blockchain applications, smart contracts, and decentralized systems.'
  },
  {
    icon: <Database className="w-12 h-12 mb-4 text-green-400" />,
    title: 'Web & Web 3.0 Development',
    description: 'Create modern, responsive web applications and decentralized Web 3.0 solutions.'
  },
  {
    icon: <Smartphone className="w-12 h-12 mb-4 text-yellow-400" />,
    title: 'Mobile Application Development',
    description: 'Build engaging and feature-rich mobile apps for iOS and Android platforms.'
  },
  {
    icon: <Brain className="w-12 h-12 mb-4 text-purple-400" />,
    title: 'Machine Learning & AI Solutions',
    description: 'Implement intelligent systems and data-driven solutions using cutting-edge AI and ML technologies.'
  },
  {
    icon: <BarChart className="w-12 h-12 mb-4 text-red-400" />,
    title: 'Consulting & Strategy',
    description: 'Provide expert guidance on digital transformation, technology strategy, and system integration.'
  }
]

export default function Services() {
  // useEffect(() => {
  //   gsap.from('.service-card', {
  //     opacity: 0,
  //     y: 50,
  //     stagger: 0.2,
  //     duration: 1,
  //     ease: 'power3.out',
  //     scrollTrigger: {
  //       trigger: '.services-container',
  //       start: 'top 80%',
  //     },
  //   })
  // }, [])

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
      <div className="services-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="service-card bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-lg">
            {service.icon}
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

