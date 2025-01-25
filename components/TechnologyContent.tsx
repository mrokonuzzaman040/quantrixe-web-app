const TechnologyContent = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gradient glitch"
          data-text="Our Technology Stack"
        >
          Our Technology Stack
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TechStack title="AI & Machine Learning" items={["TensorFlow", "PyTorch", "Scikit-learn", "NVIDIA CUDA"]} />
          <TechStack title="Blockchain" items={["Ethereum", "Hyperledger", "Solidity", "Web3.js"]} />
          <TechStack title="Cloud & DevOps" items={["AWS", "Google Cloud", "Docker", "Kubernetes"]} />
          <TechStack title="Frontend" items={["React", "Vue.js", "Next.js", "TypeScript"]} />
          <TechStack title="Backend" items={["Node.js", "Python", "Go", "GraphQL"]} />
          <TechStack title="Database" items={["PostgreSQL", "MongoDB", "Redis", "Neo4j"]} />
        </div>
      </div>
    </section>
  )
}

const TechStack = ({ title, items }: { title: string; items: string[] }) => (
  <div className="futuristic-card p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 hover-glow">
    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gradient">{title}</h3>
    <ul className="list-disc pl-6 text-foreground">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
)

export default TechnologyContent

