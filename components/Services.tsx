"use client"

import { useEffect, useRef } from "react"
import { FaRobot, FaCubes, FaVrCardboard, FaShieldAlt, FaCode } from "react-icons/fa"

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    const childElements = sectionRef.current?.querySelectorAll(".service-card")
    childElements?.forEach((el) => observer.observe(el))

    return () => {
      childElements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gradient glitch"
          data-text="Our Cutting-Edge Services"
        >
          Our Cutting-Edge Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="AI & Machine Learning Solutions"
            description="Harness the power of advanced AI to automate processes, gain predictive insights, and create intelligent systems that learn and adapt."
            icon={<FaRobot />}
          />
          <ServiceCard
            title="Quantum-Safe Blockchain Development"
            description="Build secure, scalable blockchain solutions resistant to quantum computing threats, ensuring long-term data integrity and trust."
            icon={<FaCubes />}
          />
          <ServiceCard
            title="Metaverse & AR/VR Experiences"
            description="Create immersive digital worlds and augmented realities that blur the lines between physical and virtual, opening new frontiers for interaction and commerce."
            icon={<FaVrCardboard />}
          />
          <ServiceCard
            title="Cybersecurity & Quantum Encryption"
            description="Protect your digital assets with state-of-the-art cybersecurity measures and quantum-resistant encryption protocols."
            icon={<FaShieldAlt />}
          />
          <ServiceCard
            title="IoT & Edge Computing Solutions"
            description="Develop smart, interconnected systems that process data at the source, enabling real-time decision making and reduced latency."
            icon={<FaCode />}
          />
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <div className="service-card futuristic-card p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 scroll-animation hover-glow">
    <div className="text-4xl text-primary mb-4">{icon}</div>
    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gradient">{title}</h3>
    <p className="text-foreground">{description}</p>
  </div>
)

export default Services

