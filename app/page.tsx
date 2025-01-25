import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Industries from "@/components/Industries"
import CaseStudies from "@/components/CaseStudies"
import Contact from "@/components/Contact"
import AnimatedBackground from "@/components/AnimatedBackground"

export default function Home() {
  return (
    <main>
      <AnimatedBackground />
      <Hero />
      <About />
      <Services />
      <Industries />
      <CaseStudies />
      <Contact />
    </main>
  )
}

