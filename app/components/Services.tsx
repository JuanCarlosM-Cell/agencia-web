"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Branding & Estrategia",
    description: "Construimos identidades que no solo se ven, se sienten. Definimos el ADN de tu marca.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=75&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Diseño Web & UX/UI",
    description: "Experiencias digitales fluidas, rápidas y diseñadas para convertir visitantes en fans.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=75&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Marketing Digital",
    description: "Campañas de alto impacto que ponen tu mensaje frente a las personas correctas.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=75&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Producción Audiovisual",
    description: "Contenido visual cinematográfico para contar la historia de tu empresa.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=75&w=1200&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Video con Drone",
    description: "Tomas aéreas en alta resolución que elevan la percepción de tu marca y generan impacto inmediato.",
    image: "/images/drone.jpg"
  }
];


export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="relative w-full bg-black text-white py-32 px-6 md:px-20 overflow-hidden min-h-screen flex flex-col justify-center">

      {/* IMAGEN DE FONDO CAMBIANTE */}
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`
            absolute inset-0 z-0 transition-opacity duration-700 ease-in-out
            ${activeService === index ? "opacity-40" : "opacity-0"}
          `}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/60" /> {/* Overlay para legibilidad */}
        </div>
      ))}

      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* COLUMNA IZQUIERDA: TÍTULO Y DESCRIPCIÓN FIJA */}
        <div>
          <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">
            Lo que hacemos
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold leading-none mb-8">
            Soluciones <br />
            <span className="text-gray-500">Integrales.</span>
          </h3>

          <div className="h-[1px] w-20 bg-white/30 my-8" />

          <a href="/services" className="hidden lg:inline-flex items-center gap-2 border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
            Ver todos los servicios
            <span>↗</span>
          </a>
        </div>

        {/* COLUMNA DERECHA: LISTA INTERACTIVA */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`
                group border-b border-white/20 py-10 cursor-pointer transition-all duration-300
                ${activeService === index ? "pl-8 border-accent bg-accent/10 shadow-[0_0_30px_rgba(42,128,247,0.15)]" : "hover:pl-4 hover:border-accent/40 hover:bg-transparent"}
              `}
              onMouseEnter={() => setActiveService(index)}
            >
              <h4
                className={`
                  text-3xl md:text-4xl font-bold transition-colors duration-300
                  ${activeService === index ? "text-white" : "text-gray-500 group-hover:text-gray-300"}
                `}
              >
                {service.title}
              </h4>

              <div
                className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${activeService === index ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}
                `}
              >
                <p className="text-lg text-gray-300 max-w-md leading-relaxed">
                  {service.description}
                </p>
                <a href="/services" className="inline-block mt-4 text-accent text-sm font-bold uppercase tracking-wider hover:underline">
                  Explorar servicio →
                </a>
              </div>
            </div>
          ))}

          <div className="lg:hidden mt-12">
            <a href="/services" className="w-full flex justify-center items-center gap-2 border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
              Ver todos los servicios
              <span>↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
