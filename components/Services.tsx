"use client";

import { useEffect, useRef } from "react";
import {
  FaRobot,
  FaCubes,
  FaVrCardboard,
  FaShieldAlt,
  FaCode,
  FaLayerGroup,
  FaProjectDiagram,
  FaFileContract,
  FaBrain,
  FaWrench,
  FaExchangeAlt,
  FaMicrochip,
} from "react-icons/fa";

const Services = () => {
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

    const childElements = sectionRef.current?.querySelectorAll(".service-card");
    childElements?.forEach((el) => observer.observe(el));

    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-semibold mb-8 text-center tracking-wide text-cyan-300 uppercase"
          data-text="Our Cutting-Edge Services"
        >
          SERVICE SUITE
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center text-foreground max-w-3xl mx-auto mb-8">
          From Layer 1 infrastructure to intelligent agents, we provide
          end-to-end solutions for enterprises seeking to leverage the power of
          blockchain and AI.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Blockchain Infrastructure"
            description="Custom Layer 1 blockchain solutions with industry-leading throughput and security for enterprise needs."
            icon={<FaCubes />}
            label="Layer 1"
            features={[
              "Substrate-Powered Custom Chains",
              "EVM Compatible",
              "Modular & Upgradeable Architecture",
              "Cross-Chain Interoperability",
              "Enterprise-Grade Security Protocols",
              "DAO & On-Chain Governance Integration",
              "Optimized Consensus",
              "High Throughput & Low Finality Latency",
              "Decentralized Identity (DID) Ready",
              "Production-Ready DevOps & Monitoring Stack",
            ]}
          />

          <ServiceCard
            title="AI Agent Integration"
            description="Intelligent autonomous agents built on cutting-edge AI tech that seamlessly integrate with blockchain systems."
            icon={<FaBrain />}
            label="Intelligence"
            features={[
              "Autonomous Decision Making Across Complex Systems",
              "ML/LLM Training Pipeline Integration",
              "Natural Language Task Execution (Prompt to Action)",
              "On-Device Intelligence for IoT & Edge Environments",
              "Real-Time Sensor & Stream Data Processing",
              "Self-Adaptive Behavior Based on Environmental Feedback",
              "Multi-Agent Collaboration & Distributed Intelligence",
              "Enterprise Workflow Automation with Agent Orchestration",
              "Interoperability with APIs, Protocols, and Smart Contracts",
              "Auditability, Observability & Ethical AI Compliance",
            ]}
          />

          <ServiceCard
            title="Smart Contract Development"
            description="Custom smart contract development with rigorous security auditing and optimized gas efficiency."
            icon={<FaFileContract />}
            label="SC Development"
            features={[
              "Security Audited by Industry Experts",
              "Gas-Optimized Contract Logic",
              "Multi-Chain Deployment (EVM / WASM)",
              "Modular Contract Architecture",
              "Formal Verification & Test Coverage",
              "Upgradeable Proxy & Diamond Pattern Support",
              "OpenZeppelin & Custom Standards Integration",
              "On-Chain Governance Compatibility",
              "Decentralized Identity (DID) Support",
              "Compliance-Ready & Legally Verifiable Logic",
            ]}
          />

          <ServiceCard
            title="Custom Solution"
            description="Tailored blockchain and AI solutions crafted to meet unique business goals with full flexibility and precision."
            icon={<FaWrench />}
            label="Custom"
            features={[
              "End-to-End Technical Consultation",
              "Custom Blockchain Architecture",
              "AI/ML Integration on Demand",
              "Enterprise System Compatibility",
              "Full Lifecycle Support & Maintenance",
            ]}
          />
          <ServiceCard
            title="Bridging Solution"
            description="Seamless cross-chain communication between chains and tokens transfer."
            icon={<FaExchangeAlt />}
            label="Bridge"
            features={[
              "Cross-Chain Asset Bridging",
              "ZK / Optimistic Rollup Support",
              "Fast Finality & Low Gas Fees",
              "Secure Layer 1 Anchoring",
              "Interoperability-First Architecture",
            ]}
          />
          <ServiceCard
            title="IoT-Enabled Supply Chain"
            description="Harness blockchain and IoT to create transparent, automated, and intelligent supply chain networks with real-time asset visibility and secure data exchange."
            icon={<FaMicrochip />}
            label="IoT"
            features={[
              "Sensor-Driven Real-Time Tracking",
              "Immutable Chain of Custody Records",
              "Smart Contract Automation",
              "Decentralized Data Sharing",
              "Predictive Maintenance & Alerts",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  title,
  description,
  icon,
  label,
  features = [],
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  label?: string;
  features?: string[];
}) => (
  <div className="service-card futuristic-card p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 scroll-animation hover-glow relative">
    {/* Tag (top-right) */}
    {label && (
      <span className="absolute top-4 right-4 text-xs px-2 py-1 bg-gray-700 text-white rounded-full">
        {label}
      </span>
    )}

    {/* Icon */}
    <div className="text-3xl text-white mb-4">{icon}</div>

    {/* Title */}
    <h3 className="text-xl font-bold mb-2 text-cyan-300 uppercase text-center">
      {title}
    </h3>

    {/* Description */}
    <p className="text-sm text-gray-300 mb-4">{description}</p>

    {/* Feature checklist */}
    <ul className="text-sm text-gray-400 space-y-1 mb-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <span className="text-green-400">✔</span>
          {feature}
        </li>
      ))}
    </ul>

    {/* Learn more */}
    <a
      href="#"
      className="text-sm font-medium text-white hover:text-cyan-400 inline-flex items-center gap-1"
    >
      Learn more →
    </a>
  </div>
);

export default Services;
