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
    { name: "Agencia", href: "/#about" },
    { name: "Servicios", href: "/#services" },
    { name: "Trabajo", href: "/#portfolio" },
    { name: "News", href: "/#news" },
    { name: "Contacto", href: "/#footer" }
  ];

  // Si forceWhite es true, el fondo será blanco siempre.
  // Pero la animación de tamaño (padding) debe depender solo del scroll.
  const showWhiteBg = scrolled || forceWhite;
  const paddingClass = scrolled ? "py-4" : "py-8";

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
          ${paddingClass}
          ${showWhiteBg ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}
          text-black
        `}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* LOGO */}
          <div className="relative z-50">
            <a href="/#home" className={`text-2xl font-black tracking-tighter uppercase transition-colors duration-300`}>
              Tu<span className="text-accent">Agencia</span>.
            </a>
          </div>

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex items-center gap-12">
            {navLinks.map((item) => (
              <li key={item.name} className="group relative cursor-pointer overflow-hidden">
                <a href={item.href} className="block text-sm font-bold uppercase tracking-widest transition-transform duration-300 group-hover:-translate-y-full">
                  {item.name}
                </a>
                <a href={item.href} className="absolute top-full left-0 block text-sm font-bold uppercase tracking-widest text-accent transition-transform duration-300 group-hover:-translate-y-full">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* BOTÓN HAMBURGUESA (MÓVIL) */}
          <button
            className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-end gap-1.5 group"
            onClick={() => setOpen(!open)}
          >
            <span className={`h-[3px] bg-black transition-all duration-300 ${open ? "w-full rotate-45 translate-y-2.5" : "w-full"}`} />
            <span className={`h-[3px] bg-black transition-all duration-300 ${open ? "opacity-0" : "w-2/3"}`} />
            <span className={`h-[3px] bg-black transition-all duration-300 ${open ? "w-full -rotate-45 -translate-y-2" : "w-full"}`} />
          </button>
        </div>
      </nav>

      {/* MENÚ MOBILE FULLSCREEN */}
      <div
        className={`
          fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-8
          transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] text-black
          ${open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
      >
        {navLinks.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            className={`
              text-5xl font-black uppercase tracking-tighter cursor-pointer hover:text-accent transition-colors
              transform transition-all duration-500 delay-[${index * 50}ms]
              ${open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
            `}
            onClick={() => setOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
}
