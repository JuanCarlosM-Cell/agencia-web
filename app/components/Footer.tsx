"use client";

import useScrollAnimation from "../hooks/useScrollAnimation";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer id="footer" className="w-full bg-gradient-to-b from-[#0B1121] to-[#0A0F1E] text-white mt-32 relative overflow-hidden">

      {/* Efectos de fondo decorativos */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
      
      {/* Partículas decorativas */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-1 h-1 bg-accent/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-accent/10 rounded-full"></div>
      </div>


      {/* FOOTER CONTENT */}
      <section
        ref={ref}
        className={`
          px-6 md:px-20 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12 border-t border-white/10 bg-gradient-to-b from-[#0F172A]/80 to-[#0B1121]/90
          transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >

        {/* Logo y descripción */}
        <div className="flex flex-col">
          <div className="relative w-56 h-20 mb-6">
            <Image
              src="/logo-new.png"
              alt="Branding Emoción Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            Creamos experiencias digitales memorables que conectan marcas con sus audiencias a través del diseño emocional.
          </p>
          
          {/* Redes Sociales con iconos */}
          <div className="mt-8">
            <h5 className="text-white font-medium mb-4 text-lg">Síguenos</h5>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white text-lg" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white text-lg" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-gray-500/30 transition-all duration-300"
                aria-label="TikTok"
              >
                <FaTiktok className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-xl font-bold mb-6 pb-3 border-b border-accent/30 inline-block">Navegación</h4>
          <ul className="flex flex-col gap-4">
            {['Inicio', 'Quiénes Somos', 'Servicios', 'Portafolio', 'Noticias'].map((item, index) => (
              <li key={index}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-').replace('í', 'i').replace('é', 'e')}`}
                  className="text-gray-400 hover:text-accent transition-all duration-300 flex items-center gap-2 group text-lg"
                >
                  <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h4 className="text-xl font-bold mb-6 pb-3 border-b border-accent/30 inline-block">Servicios</h4>
          <ul className="flex flex-col gap-4 text-gray-400">
            {['Branding Digital', 'Diseño Web', 'Marketing', 'Estrategia', 'Consultoría'].map((service, index) => (
              <li key={index} className="hover:text-accent transition-colors duration-300 cursor-pointer text-lg">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-xl font-bold mb-6 pb-3 border-b border-accent/30 inline-block">Contacto</h4>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                <HiOutlineMail className="text-accent text-xl" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium hover:text-accent transition-colors cursor-pointer text-lg">
                  contacto@tuagencia.com
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                <FiPhone className="text-accent text-xl" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Teléfono</p>
                <p className="text-white font-medium hover:text-accent transition-colors cursor-pointer text-lg">
                  +51 999 999 999
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 py-8 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4 bg-gradient-to-r from-[#0B1121] to-[#0A0F1E]">
        <div className="text-gray-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} <span className="text-accent font-medium">TuAgencia</span>. Todos los derechos reservados.
        </div>
        <div className="flex gap-6 text-gray-500 text-sm">
          <a href="#" className="hover:text-accent transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-accent transition-colors">Términos y Condiciones</a>
          <a href="#" className="hover:text-accent transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}