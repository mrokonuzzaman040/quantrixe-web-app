'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        },
      })
    }, aboutRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="about-content max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About TechNova</h2>
          <p className="text-xl mb-8">
            TechNova is a leading provider of innovative technology solutions. We specialize in
            software development, blockchain applications, and machine learning systems. Our team
            of experts is dedicated to delivering cutting-edge solutions that drive business growth
            and digital transformation.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

