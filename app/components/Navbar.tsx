"use client";

import { useState, useEffect } from "react";

interface NavbarProps {
  forceWhite?: boolean;
}

export default function Navbar({ forceWhite = false }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/#home" },
    { name: "Quienes Somos", href: "/#about" },
    { name: "Servicios", href: "/services" },
    { name: "Trabajo", href: "/#portfolio" },
    { name: "News", href: "/#news" },
    { name: "Contacto", href: "/#footer" }
  ];

  // Si no ha hecho scroll, fondo transparente
const navbarBg = scrolled 
  ? "bg-gradient-to-r from-[#0B1C33] to-[#020617] shadow-xl backdrop-blur-sm" 
  : "bg-transparent";


  const paddingClass = scrolled ? "py-4" : "py-5";

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out
          ${paddingClass}
          ${navbarBg}
          text-white
        `}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex items-center justify-between">

          {/* LOGO */}
          <div className="relative z-50">
            <a 
              href="/#home" 
              className="block w-20 md:w-28 transition-all duration-500 hover:scale-95 group"
            >
              <img 
                src="/logo-new.png" 
                alt="Agencia Logo" 
                className="w-full h-auto object-contain drop-shadow-lg 
                  group-hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]
                  transition-all duration-500" 
              />
              {/* Efecto sutil de brillo en hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 
                rounded-full group-hover:from-blue-500/10 group-hover:to-cyan-500/10
                transition-all duration-500 blur-sm" />
            </a>
          </div>

          {/* MENU DESKTOP - Hover mejorado con línea blanca */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.name} className="relative group">
                <a 
                  href={item.href}
                  className="
                    relative block text-sm font-medium uppercase tracking-wider 
                    text-blue-100 hover:text-white transition-all duration-300
                    px-3 py-1.5 overflow-hidden
                  "
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* LÍNEA BLANCA ANIMADA - MEJORADA */}
                  <span className="
                    absolute bottom-0 left-0 w-0 h-[2px] bg-white
                    group-hover:w-full
                    transition-all duration-500 ease-out
                    shadow-[0_0_10px_rgba(255,255,255,0.7)]
                  " />
                  
                  {/* Efecto de onda que se expande */}
                  <span className="
                    absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white/80
                    group-hover:w-full
                    transition-all duration-700 ease-out
                    group-hover:delay-100
                  " />
                  
                  {/* Efecto de partículas de luz */}
                  <span className="
                    absolute -bottom-1 left-0 w-2 h-2 bg-white rounded-full
                    opacity-0 group-hover:opacity-100
                    transition-all duration-300 delay-75
                    group-hover:translate-x-[calc(100%-8px)]
                    shadow-[0_0_8px_rgba(255,255,255,0.9)]
                  " />
                </a>
              </li>
            ))}
          </ul>

          {/* BOTÓN HAMBURGUESA - Más moderno */}
          <button
            className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center group"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <div className="relative w-7 h-5">
              <span className={`
                absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full
                transition-all duration-500 ease-out
                ${open ? "rotate-45 top-2 w-full bg-white" : ""}
                group-hover:bg-gradient-to-r from-white to-cyan-200
                group-hover:shadow-[0_0_10px_rgba(165,243,252,0.8)]
              `} />
              <span className={`
                absolute top-2 left-0 w-5/6 h-0.5 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full
                transition-all duration-500 ease-out
                ${open ? "opacity-0 scale-0" : ""}
                group-hover:w-full
                group-hover:bg-gradient-to-r from-white to-cyan-200
                group-hover:shadow-[0_0_10px_rgba(165,243,252,0.8)]
              `} />
              <span className={`
                absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full
                transition-all duration-500 ease-out
                ${open ? "-rotate-45 bottom-2 w-full bg-white" : ""}
                group-hover:bg-gradient-to-r from-white to-cyan-200
                group-hover:shadow-[0_0_10px_rgba(165,243,252,0.8)]
              `} />
            </div>
          </button>
        </div>
      </nav>

      {/* MENÚ MOBILE - Moderno y elegante */}
      <div
        className={`
          fixed inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/95 to-blue-900/95 z-40 
          flex flex-col justify-center items-center gap-8
          transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]
          backdrop-blur-xl
          ${open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
      >
        {/* Botón cerrar elegante */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-8 right-8 md:top-12 md:right-12 group"
          aria-label="Cerrar menú"
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            <span className="
              absolute w-6 h-0.5 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full 
              rotate-45 group-hover:rotate-135 group-hover:bg-gradient-to-r from-white to-cyan-200
              transition-all duration-500
            " />
            <span className="
              absolute w-6 h-0.5 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full 
              -rotate-45 group-hover:-rotate-135 group-hover:bg-gradient-to-r from-white to-cyan-200
              transition-all duration-500
            " />
            <span className="
              absolute inset-0 rounded-full border border-blue-400/30
              group-hover:border-cyan-300/50 group-hover:scale-110
              transition-all duration-500
            " />
          </div>
        </button>

        {navLinks.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            className={`
              relative text-4xl md:text-5xl font-bold uppercase tracking-tighter cursor-pointer 
              text-blue-100 hover:text-white transition-all duration-700
              group hover:scale-105 hover:translate-x-4
              transform transition-all duration-700 ease-out
              ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
            `}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${index * 100}ms` : '0ms' }}
          >
            <span className="relative z-10">
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">
                {item.name}
              </span>
            </span>
            
            {/* LÍNEA BLANCA ANIMADA PARA MÓVIL */}
            <span className="
              absolute -bottom-2 left-0 w-0 h-[2px] bg-white rounded-full
              group-hover:w-full
              transition-all duration-500 ease-out
              shadow-[0_0_8px_rgba(255,255,255,0.8)]
            " />
            
            {/* Punto de luz que se mueve */}
            <span className="
              absolute -bottom-3 left-0 w-3 h-3 bg-white rounded-full
              opacity-0 group-hover:opacity-100
              transition-all duration-400 delay-200
              group-hover:translate-x-[calc(100%-12px)]
              shadow-[0_0_12px_rgba(255,255,255,1)]
            " />
          </a>
        ))}

        {/* Efecto decorativo de líneas cruzadas */}
        <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent opacity-50 rotate-45" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent opacity-50 -rotate-45" />
        
        {/* Texto decorativo sutil */}
        <div className="absolute bottom-10 text-blue-300/40 text-sm font-light tracking-widest">
          NAVEGACIÓN
        </div>
      </div>
    </>
  );
}