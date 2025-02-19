"use client"

import { useEffect, useRef } from "react"
import { FaChartLine, FaHeartbeat, FaGraduationCap, FaShoppingCart, FaSpaceShuttle, FaLeaf } from "react-icons/fa"

const Industries = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const currentRef = sectionRef.current;
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

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="industries" className="py-20 scroll-animation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gradient glitch"
          data-text="Industries We&apos;re Revolutionizing"
        >
          Industries We&apos;re Revolutionizing
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <IndustryCard name="FinTech" icon={<FaChartLine />} delay={0} />
          <IndustryCard name="HealthTech" icon={<FaHeartbeat />} delay={1} />
          <IndustryCard name="EduTech" icon={<FaGraduationCap />} delay={2} />
          <IndustryCard name="E-Commerce" icon={<FaShoppingCart />} delay={3} />
          <IndustryCard name="Space Tech" icon={<FaSpaceShuttle />} delay={4} />
          <IndustryCard name="GreenTech" icon={<FaLeaf />} delay={5} />
        </div>
      </div>
    </section>
  )
}

const IndustryCard = ({ name, icon, delay }: { name: string; icon: React.ReactNode; delay: number }) => (
  <div
    className="futuristic-card p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:transform hover:scale-105 hover:rotate-6 hover-glow"
    style={{ animationDelay: `${delay * 0.90}s` }}
  >
    <div className="text-4xl text-primary mb-4">{icon}</div>
    <h3 className="text-lg sm:text-xl font-semibold text-gradient">{name}</h3>
  </div>
)

export default Industries

