"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FuturisticCube from "./FuturisticCube";
import DOTS, { VantaEffect } from "vanta/dist/vanta.dots.min";

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null); // Use VantaEffect type
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = vantaRef.current;
    if (!vantaEffect && currentRef) {
      setVantaEffect(
        DOTS({
          el: currentRef,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x84cc16,
          color2: 0x22d3ee,
          backgroundColor: 0x0a192f,
          size: 3.0,
          spacing: 35.0,
          showLines: true,
        })
      );
    }

    return () => {
      if (vantaEffect && currentRef) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-4">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 glitch neon-text"
          data-text="Welcome to the Future of Tech"
        >
          Welcome to the Future of Tech
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto">
          Quantrixe: Where AI, Blockchain, and Quantum Computing Converge to Reshape Reality
        </p>
        <button className="bg-primary text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 animate-pulse hover-glow">
          Explore the Nexus
        </button>
      </div>
      <div className="absolute bottom-10 left-10 hidden sm:block">
        <FuturisticCube />
      </div>
      <div className="absolute top-1/4 right-10 hidden sm:block">
        <FuturisticCube />
      </div>
    </div>
  );
};

export default Hero;
