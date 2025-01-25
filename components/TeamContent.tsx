const TeamContent = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gradient glitch" data-text="Our Team">
          Our Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember name="Dr. Ava Quantum" role="Chief AI Scientist" />
          <TeamMember name="Zack Blockchain" role="Head of Blockchain Development" />
          <TeamMember name="Lena Cybershield" role="Director of Cybersecurity" />
          <TeamMember name="Max Neuralnet" role="Lead Machine Learning Engineer" />
          <TeamMember name="Sophia Virtualworld" role="AR/VR Experience Designer" />
          <TeamMember name="Ethan Edgecompute" role="IoT Solutions Architect" />
        </div>
      </div>
    </section>
  )
}

const TeamMember = ({ name, role }: { name: string; role: string }) => (
  <div className="futuristic-card p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 hover-glow">
    <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gradient">{name}</h3>
    <p className="text-foreground">{role}</p>
  </div>
)

export default TeamContent

