"use client";

import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer id="footer" className="w-full bg-black text-white mt-32">

      {/* CTA FINAL */}
      <div className="px-6 md:px-20 py-32 text-center bg-black">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          ¿Listo para llevar tu marca al siguiente nivel?
        </h2>

        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
          Conversemos y construyamos algo extraordinario juntos.
        </p>

        <button className="mt-10 bg-accent text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-accent/80 transition">
          Trabajemos juntos
        </button>
      </div>

      {/* FOOTER CONTENT */}
      <section
        ref={ref}
        className={`
          px-6 md:px-20 py-24 grid grid-cols-1 md:grid-cols-3 gap-16
          transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >

        {/* Columna 1 */}
        <div>
          <h3 className="text-3xl font-bold">TuAgencia</h3>
          <div className="w-12 h-1 bg-accent mt-3 rounded-full"></div>

          <p className="text-gray-400 mt-6 leading-relaxed max-w-sm">
            Creamos experiencias que conectan personas con marcas a través de creatividad,
            estrategia y tecnología.
          </p>
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
            <li><a href="#footer" className="hover:text-accent transition cursor-pointer">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Contáctanos</h4>
          <ul className="flex flex-col gap-3 text-gray-400 text-lg">
            <li>📩 contacto@tuagencia.com</li>
            <li>📞 +51 999 999 999</li>

            <li className="mt-6 flex gap-5 text-2xl">
              <span className="cursor-pointer hover:text-accent transition">📘</span>
              <span className="cursor-pointer hover:text-accent transition">📸</span>
              <span className="cursor-pointer hover:text-accent transition">🎬</span>
            </li>
          </ul>
        </div>
      </section>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TuAgencia. Todos los derechos reservados.
      </div>
    </footer>
  );
}
