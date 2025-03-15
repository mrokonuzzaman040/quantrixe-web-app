"use client";

import { useEffect, useRef } from "react";
import {
  FaChartLine,
  FaHeartbeat,
  FaGraduationCap,
  FaShoppingCart,
  FaSpaceShuttle,
  FaLeaf,
} from "react-icons/fa";

const Industries = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="py-20 scroll-animation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center text-cyan-300 uppercase"
          data-text="Industries We're Revolutionizing"
        >
          Industries We&apos;re Revolutionizing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <IndustryCard
            name="FinTech"
            icon={<FaChartLine />}
            description="Transforming finance with autonomous agents, smart contracts, and secure digital assets infrastructure."
            delay={0}
          />
          <IndustryCard
            name="HealthTech"
            icon={<FaHeartbeat />}
            description="Revolutionizing healthcare with intelligent diagnostics, real-time data processing, and AI-powered coordination."
            delay={1}
          />
          <IndustryCard
            name="EduTech"
            icon={<FaGraduationCap />}
            description="Enabling decentralized, adaptive, and credential-verifiable learning experiences with AI + blockchain."
            delay={2}
          />
          <IndustryCard
            name="E-Commerce"
            icon={<FaShoppingCart />}
            description="Powering personalized, trustless transactions with predictive agents and verifiable supply chains."
            delay={3}
          />
          <IndustryCard
            name="Space Tech"
            icon={<FaSpaceShuttle />}
            description="Driving next-gen mission autonomy, telemetry optimization, and decentralized swarm coordination for aerospace."
            delay={4}
          />
          <IndustryCard
            name="GreenTech"
            icon={<FaLeaf />}
            description="Accelerating sustainability with intelligent energy agents, traceable emissions data, and smart grid optimization."
            delay={5}
          />
        </div>
      </div>
    </section>
  );
};

const IndustryCard = ({
  name,
  icon,
  delay,
  description,
}: {
  name: string;
  icon: React.ReactNode;
  delay: number;
  description: string;
}) => (
  <div
    className="futuristic-card p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:transform hover:scale-105 hover:rotate-1 hover-glow"
    style={{ animationDelay: `${delay * 0.1}s` }}
  >
    <div className="text-4xl text-primary mb-4">{icon}</div>
    <h3 className="text-lg sm:text-xl font-semibold text-gradient mb-2">
      {name}
    </h3>
    <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
  </div>
);

export default Industries;
