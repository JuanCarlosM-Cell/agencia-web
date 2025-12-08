"use client";

import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "El futuro del Diseño Digital",
    date: "12 Oct 2024",
    category: "Tendencias",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=75&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Estrategias de Growth en 2025",
    date: "05 Nov 2024",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=75&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Storytelling para Marcas",
    date: "28 Nov 2024",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=75&w=1200&auto=format&fit=crop"
  }
];

export default function News() {
  return (
    <section id="news" className="w-full bg-gray-50 text-black py-32 px-6 md:px-20">
      <div className="max-w-[1400px] mx-auto">

        {/* CABECERA */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">
              Blog & Noticias
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold leading-none">
              Últimas <br />
              <span className="text-gray-400">Novedades.</span>
            </h3>
          </div>

          <a href="/news" className="hidden md:flex items-center gap-3 text-lg font-bold uppercase tracking-widest hover:gap-5 transition-all duration-300 group">
            Leer todas las noticias
            <span className="bg-black text-white group-hover:bg-accent w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
              →
            </span>
          </a>
        </div>

        {/* GRID DE NOTICIAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((article) => (
            <div
              key={article.id}
              className="group cursor-pointer flex flex-col gap-6"
            >
              {/* IMAGEN CARD */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider">
                  {article.category}
                </div>
              </div>

              {/* CONTENIDO TEXTO */}
              <div>
                <span className="text-gray-500 text-sm font-medium block mb-2">
                  {article.date}
                </span>
                <h4 className="text-2xl font-bold leading-tight group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </h4>
                <div className="h-[1px] w-full bg-gray-200 mt-6 group-hover:bg-black transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* BOTÓN MÓVIL */}
        <div className="mt-16 md:hidden flex justify-center">
          <a href="/news" className="flex items-center gap-3 text-lg font-bold uppercase tracking-widest hover:gap-5 transition-all duration-300 group">
            Leer todas las noticias
            <span className="bg-black text-white group-hover:bg-accent w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
