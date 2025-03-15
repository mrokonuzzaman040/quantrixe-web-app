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
    <div
      // ref={vantaRef}
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 black-text">
          Revolutionizing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
            Blockchain
          </span>{" "}
          with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
            AI{" "}
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto">
          Quantrixe empowers the next generation of decentralized solutions
          through cutting-edge AI agents
        </p>
        <a href="#contact">
          <button
            className="px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-lg
      text-black bg-gradient-to-r from-lime-400 via-green-400 to-emerald-500
      shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            PING US
          </button>
        </a>
      </div>
      <div className="absolute bottom-10 left-20 hidden sm:block">
        <FuturisticCube />
      </div>
      <div className="absolute top-1.5/4 right-10 hidden sm:block">
        <FuturisticCube />
      </div>
    </div>
  );
};

export default Hero;
