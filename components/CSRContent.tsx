const CSRContent = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gradient glitch"
          data-text="Corporate Social Responsibility"
        >
          Corporate Social Responsibility
        </h1>
        <div className="futuristic-card p-6 sm:p-8 rounded-lg max-w-4xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl text-foreground mb-6">
            At Quantrixe, we believe in leveraging our technological expertise to create positive change in the world.
            Our CSR initiatives focus on three key areas:
          </p>
          <ul className="list-disc pl-6 mb-6 text-base sm:text-lg md:text-xl text-foreground">
            <li>
              Digital Education: Bridging the digital divide by providing tech education to underprivileged communities.
            </li>
            <li>
              Sustainable Tech: Developing and promoting environmentally friendly technologies to combat climate change.
            </li>
            <li>Ethical AI: Ensuring the responsible development and use of artificial intelligence in society.</li>
          </ul>
          <p className="text-base sm:text-lg md:text-xl text-foreground">
            Through these initiatives, we strive to create a more inclusive, sustainable, and ethically responsible
            technological future for all.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CSRContent

