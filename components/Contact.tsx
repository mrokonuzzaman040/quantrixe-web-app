"use client"

import { useEffect, useRef } from "react"

const Contact = () => {
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
    <section ref={sectionRef} id="contact" className="py-20 scroll-animation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gradient glitch"
          data-text="Connect with the Future"
        >
          Connect with the Future
        </h2>
        <form className="max-w-lg mx-auto futuristic-card p-6 sm:p-8 rounded-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-3 bg-transparent border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground transition-all duration-300 hover:glow"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 bg-transparent border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground transition-all duration-300 hover:glow"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-6 p-3 bg-transparent border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground transition-all duration-300 hover:glow"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover-glow"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

