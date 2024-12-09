import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Industries from '@/components/Industries'
import CaseStudies from '@/components/CaseStudies'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Industries />
      <CaseStudies />
      <Contact />
    </main>
  )
}

