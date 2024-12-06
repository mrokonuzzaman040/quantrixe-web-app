'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const contactRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-item', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 80%',
        },
      })
    }, contactRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="contact-item flex flex-col items-center">
            <Mail className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-400">info@technova.com</p>
          </div>
          <div className="contact-item flex flex-col items-center">
            <Phone className="w-12 h-12 mb-4 text-green-400" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
          <div className="contact-item flex flex-col items-center">
            <MapPin className="w-12 h-12 mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-400">123 Tech Street, Innovation City</p>
          </div>
        </div>
      </div>
    </section>
  )
}

