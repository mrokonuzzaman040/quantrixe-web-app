"use client"

import { useEffect, useRef } from "react"
import { toast } from "react-toastify"
import { useState } from "react"

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      },
      { threshold: 0.1 }
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


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        toast.success("Message sent successfully!")
        if (e.currentTarget) {
          e.currentTarget.reset()
        }
      } else {
        const data = await response.json()
        throw new Error(data.message) 
      }
    } catch (error) {
      console.error("Error sending message:", error)
      toast.error("An unexpected error occurred while sending your message.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="py-20 scroll-animation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gradient glitch"
          data-text="Connect with the Future"
        >
          Connect with the Future
        </h2>
        <form
          className="max-w-lg mx-auto futuristic-card p-6 sm:p-8 rounded-lg"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full mb-4 p-3 bg-transparent border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground transition-all duration-300 hover:glow"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 bg-transparent border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground transition-all duration-300 hover:glow"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full mb-6 p-3 bg-transparent border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground transition-all duration-300 hover:glow"
            rows={4}
            required
          ></textarea>
          {loading ? (
            <p className="text-center text-primary-foreground">Sending...</p>
          ) : <button
          type="submit"
          className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover-glow"
        >
          Send Message
        </button>}
          
        </form>
      </div>
    </section>
  )
}

export default Contact
