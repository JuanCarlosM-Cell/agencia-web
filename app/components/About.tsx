"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Ref específico para la imagen (para activar el color al scrollear)
  const imageRef = useRef<HTMLDivElement>(null);
  const [isImageInView, setIsImageInView] = useState(false);

  useEffect(() => {
    // Observer general de la sección (texto)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    // Observer específico de la imagen (threshold 0.5 para que se "prenda" al centro)
    const imgObserver = new IntersectionObserver(([entry]) => {
      setIsImageInView(entry.isIntersecting);
    }, { threshold: 0.5 });

    if (imageRef.current) {
      imgObserver.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) imgObserver.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="w-full bg-white text-black py-40 px-6 md:px-20 overflow-hidden min-h-screen flex items-center"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* COLUMNA IZQUIERDA: TEXTO MANIFIESTO */}
        <div className="relative z-10">

          {/* LÍNEA 1 TITULO */}
          <div className="overflow-hidden">
            <h2 className={`
              block text-5xl md:text-8xl font-light leading-[1.1] tracking-tight
              transition-all duration-[1.0s] ease-[cubic-bezier(0.25,1,0.5,1)]
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"}
            `}>
              No somos
            </h2>
          </div>

          {/* LÍNEA 2 TITULO */}
          <div className="overflow-hidden mb-12">
            <h2 className={`
              block text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight pb-4
              transition-all duration-[1.0s] delay-100 ease-[cubic-bezier(0.25,1,0.5,1)]
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"}
            `}>
              otra agencia.
            </h2>
          </div>

          <div
            className={`
               transition-all duration-[1.0s] delay-300 ease-out
               ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
             `}
          >
            <p className="text-xl md:text-3xl text-gray-800 leading-normal font-light mb-16">
              En un mundo saturado de ruido, ayudamos a que tu marca encuentre su propia voz.
              Combinamos la <span className="font-medium text-accent">creatividad visual</span> con la precisión de los datos.
            </p>

            <button className="flex items-center gap-6 text-lg font-bold uppercase tracking-widest hover:gap-8 transition-all duration-300 group">
              Nuestra Filosofía
              <span className="bg-black text-white w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                →
              </span>
            </button>
          </div>
        </div>

        {/* COLUMNA DERECHA: IMAGEN EDITORIAL */}
        <div
          ref={imageRef}
          className={`
            relative h-[700px] w-full overflow-hidden rounded-sm
            transition-all duration-[1.2s] delay-300 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
          `}
        >
          <Image
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=75&w=1200&auto=format&fit=crop"
            alt="Abstract Architecture"
            fill
            className={`object-cover transition-all duration-1000 ease-in-out ${isImageInView ? "grayscale-0" : "grayscale"} hover:grayscale-0`}
            tabIndex={0}
          />

          {/* Sutil overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
