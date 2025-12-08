"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cálculos de animación basados en scroll
  // El texto se mueve un poco más lento (parallax) y se desvanece
  const opacity = Math.max(0, 1 - scrollY / 500);
  const translateY = scrollY * 0.5; // Parallax effect

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-6 md:px-20 bg-white overflow-hidden text-center">

      {/* TÍTULO GIGANTE CENTRALIZADO */}
      <div
        className="max-w-[1400px] w-full mx-auto z-10 will-change-transform flex flex-col items-center"
        style={{
          opacity: opacity,
          transform: `translateY(-${translateY}px)`
        }}
      >
        <h1 className="leading-[0.85] tracking-tighter uppercase font-black">
          <div className="overflow-hidden">
            <span
              className={`
                block text-[15vw] md:text-[11rem] text-black transform transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]
                ${loaded ? "translate-y-0" : "translate-y-full"}
              `}
            >
              Hacemos
            </span>
          </div>
          <div className="overflow-hidden">
            <span
              className={`
                block text-[15vw] md:text-[11rem] text-accent transform transition-transform duration-[1.5s] delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${loaded ? "translate-y-0" : "translate-y-full"}
              `}
            >
              Ruido.
            </span>
          </div>
        </h1>
      </div>

    </div>
  );
}
