"use client"

import { useEffect, useRef } from "react"

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 scroll-animation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gradient glitch"
          data-text="Pioneering the Digital Frontier"
        >
          Pioneering the Digital Frontier
        </h2>
        <div className="futuristic-card p-6 sm:p-8 rounded-lg max-w-4xl mx-auto moving-background">
          <p className="text-base sm:text-lg md:text-xl text-center text-foreground mb-6">
            At Quantrixe, we&apos;re not just predicting the future—we&apos;re actively shaping it. Our team of visionary
            developers and tech enthusiasts are at the forefront of the digital revolution, harnessing the power of
            cutting-edge technologies to create solutions that transcend the boundaries of what&apos;s possible.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-center text-foreground mb-6">
            From quantum-resistant blockchain architectures to AI-driven ecosystems and immersive metaverse experiences,
            we&apos;re building the foundational technologies that will define the next era of human-machine interaction and
            digital innovation.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-center text-foreground">
            Join us as we navigate the complexities of Web 3.0, push the limits of decentralized systems, and unlock new
            realms of possibility in the ever-expanding digital universe.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

