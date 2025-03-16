"use client";

import { useEffect, useRef } from "react";
import {
  FaNetworkWired,
  FaRobot,
  FaProjectDiagram,
  FaShieldAlt,
  FaUserTie,
  FaTasks,
  FaCogs,
  FaHeadset,
} from "react-icons/fa";

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const childElements =
      sectionRef.current?.querySelectorAll(".case-study-card");
    childElements?.forEach((el) => observer.observe(el));

    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={sectionRef} id="case-studies" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center text-cyan-300 uppercase"
          data-text="Pioneering Success Stories"
        >
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <WhyChooseCard
            title="Expert-Led Custom Development"
            description="Work with a team of blockchain and AI specialists with proven experience delivering scalable, production-grade systems tailored to your needs."
            icon={<FaUserTie />}
          />
          <WhyChooseCard
            title="Enterprise-Grade Security"
            description="Encryption and multi-signature protection for blockchain transactions and AI agents."
            icon={<FaShieldAlt />}
          />
          <WhyChooseCard
            title="Unmatched Scalability"
            description="Thousands of transactions per second, seamless AI integration, and real-time data flow handling."
            icon={<FaNetworkWired />}
          />
          <WhyChooseCard
            title="Seamless Integration"
            description="Plug into any stack via our modular APIs and connect with Web2, Web3, IoT, or legacy systems."
            icon={<FaProjectDiagram />}
          />
          <WhyChooseCard
            title="Intelligent Automation"
            description="AI-powered agents that learn, optimize, and execute on-chain processes autonomously."
            icon={<FaRobot />}
          />

          <WhyChooseCard
            title="Transparent & Agile Process"
            description="From planning to deployment, we follow an agile, collaborative approach with full visibility, rapid iteration, and client-first delivery cycles."
            icon={<FaTasks />}
          />
          <WhyChooseCard
            title="Future-Proof Architecture"
            description="Our solutions are built with modular, upgradeable frameworks—ensuring long-term adaptability across tech trends and regulatory shifts."
            icon={<FaCogs />}
          />
          <WhyChooseCard
            title="24/7 Technical Support"
            description="Our global team is available around the clock to ensure your systems stay online, secure, and optimized — anytime, anywhere."
            icon={<FaHeadset />}
          />
        </div>
      </div>
    </section>
  );
};

const WhyChooseCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="case-study-card futuristic-card p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 scroll-animation hover-glow text-left">
    <div className="text-2xl text-primary mb-4">{icon}</div>
    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
      {title}
    </h3>
    <p className="text-sm text-gray-300">{description}</p>
  </div>
);

export default CaseStudies;
