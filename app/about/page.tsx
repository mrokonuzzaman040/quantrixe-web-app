'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="about-container space-y-16">
        <section className="about-section text-center">
          <h1 className="text-4xl font-bold mb-6">About Quantrixe</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Quantrixe is a next-generation technology solutions provider dedicated to pushing the boundaries of what&apos;s possible in the digital world. We specialize in blockchain, Web 3.0, mobile application development, and machine learning, helping businesses across various sectors leverage the latest in technology to enhance their operations, engage their audiences, and grow their enterprises.
          </p>
        </section>

        <section className="about-section">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image src="/placeholder.svg?height=300&width=400" width={400} height={300} alt="Vision" className="rounded-lg" />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg">
                At Quantrixe, our vision is to be a catalyst for digital transformation worldwide. We aim to lead the way in innovative technology solutions, enabling businesses to redefine their industries and enhance everyday life through the intelligent application of cutting-edge technologies.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <Image src="/placeholder.svg?height=300&width=400" width={400} height={300} alt="Mission" className="rounded-lg" />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg">
                Our mission is to empower innovation by creating seamless, secure, and intelligent technology solutions that connect the digital and real world. We equip businesses and developers with the tools they need to thrive, enabling them to unlock new possibilities across blockchain, Web 3.0, mobile development, and machine learning.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

