"use client";

import useScrollAnimation from "../hooks/useScrollAnimation";
import ContactForm from "./ContactForm";
import Image from "next/image";

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer id="footer" className="w-full bg-[#0B1121] text-white mt-32 relative">

      {/* GRADIENTE DE FONDO PARA SEPARAR VISUALMENTE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* CONTACT FORM CONTAINER */}
      <div className="px-6 md:px-20 py-20 bg-[#0B1121]">
        <ContactForm />
      </div>

      {/* FOOTER CONTENT */}
      <section
        ref={ref}
        className={`
          px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/10 bg-[#0F172A]/50
          transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >

        {/* Columna 1 */}
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-24 mb-6 mt-10">
            <Image
              src="/logo-new.png"
              alt="Branding Emoción Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Columna 2 */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Navegación</h4>
          <ul className="flex flex-col gap-3 text-gray-400 text-lg">
            <li><a href="#home" className="hover:text-accent transition cursor-pointer">Inicio</a></li>
            <li><a href="#about" className="hover:text-accent transition cursor-pointer">Quiénes Somos</a></li>
            <li><a href="#services" className="hover:text-accent transition cursor-pointer">Servicios</a></li>
            <li><a href="#portfolio" className="hover:text-accent transition cursor-pointer">Portafolio</a></li>
            <li><a href="#news" className="hover:text-accent transition cursor-pointer">Noticias</a></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Contacto Directo</h4>
          <ul className="flex flex-col gap-3 text-gray-400 text-lg">
            <li><span className="font-semibold text-white">Email:</span> contacto@tuagencia.com</li>
            <li><span className="font-semibold text-white">Teléfono:</span> +51 999 999 999</li>

            <li className="mt-6 flex gap-5 text-lg">
              <span className="cursor-pointer hover:text-accent transition hover:underline">Facebook</span>
              <span className="cursor-pointer hover:text-accent transition hover:underline">Instagram</span>
              <span className="cursor-pointer hover:text-accent transition hover:underline">LinkedIn</span>
            </li>
          </ul>
        </div>
      </section>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm bg-[#0B1121]">
        © {new Date().getFullYear()} TuAgencia. Todos los derechos reservados.
      </div>
    </footer>
  );
}
