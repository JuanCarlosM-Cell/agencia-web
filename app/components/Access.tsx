"use client";

import useScrollAnimation from "../hooks/useScrollAnimation";
import Image from "next/image";

export default function Access() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="access"
      className="w-full bg-[#0F172A] text-white py-32 px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">

        <div
          className={`
            mb-20 transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">
            Área de Cliente
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold leading-tight">
            Control <br />
            <span className="text-gray-500">Total.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div
            className={`
                group relative bg-neutral-800/50 border border-white/10 p-10
                hover:border-accent hover:bg-neutral-800 transition-all duration-500 cursor-pointer
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
              `}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
                alt="Leads Dashboard"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
            </div>
            <h4 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
              Mis Leads
            </h4>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Gestión de oportunidades en tiempo real.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
              Ver Dashboard
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className={`
                group relative bg-neutral-800/50 border border-white/10 p-10
                hover:border-accent hover:bg-neutral-800 transition-all duration-500 cursor-pointer
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
              `}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60"
                alt="Global Domains"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
            </div>
            <h4 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
              Dominios
            </h4>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Buscador y administrador de dominios.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
              Buscar Ahora
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className={`
                group relative bg-neutral-800/50 border border-white/10 p-10
                hover:border-accent hover:bg-neutral-800 transition-all duration-500 cursor-pointer
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
              `}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=60"
                alt="VIP Support"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
            </div>
            <h4 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
              Soporte VIP
            </h4>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Línea directa con tu Project Manager.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
              Contactar
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
