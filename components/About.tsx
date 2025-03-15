"use client";

import { useEffect, useRef } from "react";

const About = () => {
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
    <section ref={sectionRef} id="about" className="py-20 scroll-animation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center tracking-wide text-cyan-300 uppercase">
          About Quantrixe
        </h2>

        <div className="p-6 sm:p-8 rounded-xl max-w-4xl mx-auto bg-black bg-opacity-5 backdrop-blur-md border border-gray-600">
          <p className="text-base sm:text-lg md:text-xl text-center text-foreground mb-6 ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
              Quantrixe
            </span>{" "}
            empowers businesses to build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
              next-gen blockchain infrastructure
            </span>{" "}
            enhanced with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
              AI
            </span>
            , enabling intelligent systems that make decentralized networks
            scalable, secure, and seamlessly interoperable.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-center text-foreground mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
              {" "}
              research-driven
            </span>{" "}
            approach is redefining Web3 architecture, solving real-world
            challenges in trustless communication, enterprise integration, and
            autonomous digital coordination.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-center text-foreground">
            Join us as we explore the edges of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
              decentralization
            </span>{" "}
            and unlock bold new possibilities in the expanding{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
              digital universe.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
