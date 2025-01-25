const WorkflowContent = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gradient glitch" data-text="Our Workflow">
          Our Workflow
        </h1>
        <div className="futuristic-card p-6 sm:p-8 rounded-lg max-w-4xl mx-auto">
          <ol className="list-decimal pl-6 space-y-4 text-base sm:text-lg md:text-xl text-foreground">
            <li>
              <span className="font-semibold text-gradient">Discovery:</span> We begin by understanding your unique
              challenges and objectives.
            </li>
            <li>
              <span className="font-semibold text-gradient">Ideation:</span> Our team brainstorms innovative solutions
              leveraging cutting-edge technologies.
            </li>
            <li>
              <span className="font-semibold text-gradient">Design:</span> We create detailed blueprints and prototypes
              of the proposed solution.
            </li>
            <li>
              <span className="font-semibold text-gradient">Development:</span> Our expert developers bring the solution
              to life using agile methodologies.
            </li>
            <li>
              <span className="font-semibold text-gradient">Testing:</span> Rigorous quality assurance ensures a
              flawless end product.
            </li>
            <li>
              <span className="font-semibold text-gradient">Deployment:</span> We seamlessly integrate the solution into
              your existing infrastructure.
            </li>
            <li>
              <span className="font-semibold text-gradient">Maintenance:</span> Ongoing support and updates keep your
              solution at peak performance.
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default WorkflowContent

