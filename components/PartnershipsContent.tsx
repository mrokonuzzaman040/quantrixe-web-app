const PartnershipsContent = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gradient glitch"
          data-text="Our Partnerships"
        >
          Our Partnerships
        </h1>
        <div className="futuristic-card p-6 sm:p-8 rounded-lg max-w-4xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl text-foreground mb-6">
            Quantrixe collaborates with industry leaders, academic institutions, and innovative startups to push the
            boundaries of technology. Our key partnerships include:
          </p>
          <ul className="list-disc pl-6 mb-6 text-base sm:text-lg md:text-xl text-foreground">
            <li>TechGiants Inc.: Collaborating on cutting-edge AI and quantum computing projects.</li>
            <li>Green Future Labs: Developing sustainable tech solutions for a greener tomorrow.</li>
            <li>Cyber Shield Alliance: Enhancing cybersecurity measures for the digital age.</li>
            <li>Global University Network: Fostering innovation through academic research partnerships.</li>
          </ul>
          <p className="text-base sm:text-lg md:text-xl text-foreground">
            These partnerships enable us to combine diverse expertise and resources, accelerating technological
            advancements and delivering unparalleled solutions to our clients.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PartnershipsContent

