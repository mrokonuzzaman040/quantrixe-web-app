"use client"

import { useEffect, useRef } from "react"

const CaseStudies = () => {
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

    const childElements = sectionRef.current?.querySelectorAll(".case-study-card")
    childElements?.forEach((el) => observer.observe(el))

    return () => {
      childElements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section ref={sectionRef} id="case-studies" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gradient glitch"
          data-text="Pioneering Success Stories"
        >
          Pioneering Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CaseStudyCard
            title="Quantum-Resistant Blockchain for Global Finance"
            description="Developed a groundbreaking blockchain solution for a major international bank, ensuring data security in the post-quantum era and facilitating instant, secure cross-border transactions."
            delay={0}
          />
          <CaseStudyCard
            title="AI-Powered Predictive Healthcare Platform"
            description="Created an advanced AI system for a leading healthcare provider, enabling early disease detection and personalized treatment plans, resulting in a 40% improvement in patient outcomes."
            delay={1}
          />
          <CaseStudyCard
            title="Metaverse Education Ecosystem"
            description="Designed and implemented a fully immersive virtual learning environment for a renowned university, increasing student engagement by 75% and expanding global reach."
            delay={2}
          />
          <CaseStudyCard
            title="Smart City IoT Network"
            description="Engineered a comprehensive IoT solution for a major metropolis, optimizing energy usage, traffic flow, and public services, leading to a 30% reduction in urban operating costs."
            delay={3}
          />
        </div>
      </div>
    </section>
  )
}

const CaseStudyCard = ({ title, description, delay }: { title: string; description: string; delay: number }) => (
  <div
    className="case-study-card futuristic-card p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 scroll-animation hover-glow"
    style={{ animationDelay: `${delay * 0.2}s` }}
  >
    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gradient">{title}</h3>
    <p className="text-foreground">{description}</p>
  </div>
)

export default CaseStudies

