"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // FIX: Si el usuario recarga y está abajo, NO mostrar la animación desde cero.
    // Si ya hizo scroll > 50px, asumimos que no es el "inicio" y mostramos todo cargado.
    if (window.scrollY > 50) {
      setLoaded(true);
      setScrollY(window.scrollY);
    } else {
      // Solo hacer el delay si estamos arriba
      const timer = setTimeout(() => setLoaded(true), 100);
      return () => clearTimeout(timer);
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Cálculos de parallax y opacidad
  // FIX: Fade suave (200) para permitir ver la animación, protegido por el fondo blur de About.
  const opacity = Math.max(0, 1 - scrollY / 200);
  const translateY = scrollY * 1.2; // Se mueve hacia arriba más rápido que el scroll normal

  return (
    <div className={`w-full h-full flex flex-col justify-center items-center px-6 md:px-20 bg-transparent overflow-hidden text-center select-none relative transition-visibility duration-0 ${scrollY > 200 ? 'invisible opacity-0 pointer-events-none' : 'visible opacity-100'}`}>

      {/* Background Gradient Sutil pero Visible */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(42,128,247,0.15),_transparent_60%)] pointer-events-none"></div>

      <div
        className="max-w-[1600px] w-full h-full mx-auto z-10 will-change-transform flex flex-col items-center justify-center relative"
        style={{
          opacity: opacity,
          visibility: opacity <= 0 ? 'hidden' : 'visible', // HARD HIDE
          transform: `translateY(-${translateY}px)`
        }}
      >
        {/* TÍTULO GIGANTE CON MASKING ANIMATION (ESTILO OGILVY) */}
        <h1 className="leading-[0.85] tracking-tighter uppercase font-black flex flex-col items-center">

          {/* LÍNEA 1 */}
          <div className="overflow-hidden">
            <span
              className={`
                block text-[14vw] md:text-[12rem] text-white transform transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]
                ${loaded ? "translate-y-0" : scrollY > 50 ? "translate-y-0" : "translate-y-[110%]"}
              `}
            >
              Elevamos
            </span>
          </div>

          {/* LÍNEA 2 */}
          <div className="overflow-hidden -mt-[1vw] md:-mt-4">
            <span
              className={`
                block text-[14vw] md:text-[12rem] text-accent transform transition-transform duration-[1.2s] delay-150 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${loaded ? "translate-y-0" : scrollY > 50 ? "translate-y-0" : "translate-y-[110%]"}
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
            className="group flex items-center gap-4 bg-white text-black px-8 py-4 md:px-10 md:py-6 rounded-none md:rounded-sm hover:bg-[var(--accent)] hover:text-white transition-all duration-300 shadow-2xl"
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
