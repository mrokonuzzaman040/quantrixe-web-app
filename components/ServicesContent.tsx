import { FaCode, FaMobile, FaBrain, FaChartLine } from "react-icons/fa"

const ServicesContent = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center text-lime-500">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            title="Blockchain Solutions"
            description="We specialize in smart contracts, decentralized applications (dApps), and custom blockchain solutions."
            icon={<FaCode />}
          />
          <ServiceCard
            title="Web & Web 3.0 Development"
            description="From modern web development to cutting-edge Web 3.0 solutions, we build the future of the internet."
            icon={<FaCode />}
          />
          <ServiceCard
            title="Mobile Application Development"
            description="We create engaging, cross-platform mobile apps that deliver value to your users."
            icon={<FaMobile />}
          />
          <ServiceCard
            title="Machine Learning & AI Solutions"
            description="Harness the power of AI to automate processes, gain insights, and personalize user experiences."
            icon={<FaBrain />}
          />
          <ServiceCard
            title="Consulting & Strategy"
            description="We help businesses navigate digital transformation with expert consulting and strategic planning."
            icon={<FaChartLine />}
          />
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <div className="glass-effect p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 lime-border-hover">
    <div className="text-4xl text-lime-500 mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold mb-4 text-lime-500">{title}</h3>
    <p className="text-white">{description}</p>
  </div>
)

export default ServicesContent

