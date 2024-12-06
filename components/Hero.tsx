'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Code, Database, Brain } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      })
      gsap.from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      })
      gsap.from('.hero-icon', {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        stagger: 0.2,
        ease: 'back.out(1.7)',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="h-screen flex items-center justify-center text-center">
      <div className="container mx-auto px-6">
        <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
          Innovate with TechNova
        </h1>
        <p className="hero-description text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          Cutting-edge solutions in Software Development, Blockchain, and Machine Learning
        </p>
        <div className="flex justify-center space-x-8">
          <Code className="hero-icon w-16 h-16 text-blue-400" />
          <Database className="hero-icon w-16 h-16 text-green-400" />
          <Brain className="hero-icon w-16 h-16 text-purple-400" />
        </div>
      </div>
    </section>
  )
}

