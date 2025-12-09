"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Delay ligero para asegurar que la rehidratación no cause flickers bruscos
    const timer = setTimeout(() => setLoaded(true), 100);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Cálculos de parallax y opacidad
  const opacity = Math.max(0, 1 - scrollY / 600);
  const translateY = scrollY * 0.4;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-6 md:px-20 bg-white overflow-hidden text-center select-none relative">

      {/* Background Gradient Sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(42,128,247,0.05),_transparent_70%)] pointer-events-none"></div>

      <div
        className="max-w-[1600px] w-full h-full mx-auto z-10 will-change-transform flex flex-col items-center justify-center relative"
        style={{
          opacity: opacity,
          transform: `translateY(-${translateY}px)`
        }}
      >
        {/* TÍTULO GIGANTE CON MASKING ANIMATION (ESTILO OGILVY) */}
        <h1 className="leading-[0.85] tracking-tighter uppercase font-black flex flex-col items-center">

          {/* LÍNEA 1 */}
          <div className="overflow-hidden">
            <span
              className={`
                block text-[15vw] md:text-[12rem] text-black transform transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]
                ${loaded ? "translate-y-0" : "translate-y-[110%]"}
              `}
            >
              Elevamos
            </span>
          </div>

          {/* LÍNEA 2 */}
          <div className="overflow-hidden -mt-[1vw] md:-mt-4">
            <span
              className={`
                block text-[15vw] md:text-[12rem] text-accent transform transition-transform duration-[1.2s] delay-150 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${loaded ? "translate-y-0" : "translate-y-[110%]"}
              `}
            >
              Tu Marca.
            </span>
          </div>
        </h1>

        {/* BOTÓN RECTANGULAR CON TEXTO INTERNO (ESTILO COPILOTO) */}
        <div
          className={`
            absolute bottom-10 right-6 md:bottom-20 md:right-16 z-20
            transform transition-all duration-[1.0s] delay-500 ease-out
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <Link
            href="#services"
            className="group flex items-center gap-4 bg-black text-white px-8 py-4 md:px-10 md:py-6 rounded-none md:rounded-sm hover:bg-accent transition-all duration-300 shadow-2xl"
          >
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em]">
              Conoce Nuestros Servicios
            </span>
            <span className="text-xl md:text-2xl transform group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

      </div>

    </div>
  );
}
