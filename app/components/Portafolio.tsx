"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Neon Future",
    category: "Campaña 360",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=75&w=1200&auto=format&fit=crop",
    size: "large" // Ocupa 2 columnas
  },
  {
    id: 2,
    title: "Eco Bottle",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542219550-37153d387c27?q=75&w=1200&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 3,
    title: "Tech Summit",
    category: "Evento Digital",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=75&w=1200&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 4,
    title: "Urban Style",
    category: "Producción Video",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=75&w=1200&auto=format&fit=crop",
    size: "large"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full bg-[#0B1121] text-white py-32 px-6 md:px-20">
      <div className="max-w-[1400px] mx-auto">

        {/* CABECERA DE LA SECCIÓN */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">
              Nuestro Trabajo
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold leading-none">
              Creando <br />
              <span className="text-gray-400">Impacto.</span>
            </h3>
          </div>

          <p className="max-w-md text-lg text-gray-600 leading-relaxed text-right md:text-left">
            Una selección de proyectos donde la estrategia y el diseño colisionan para crear resultados extraordinarios.
          </p>
        </div>

        {/* GRID ASIMÉTRICO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`
                group relative overflow-hidden rounded-none cursor-pointer
                ${project.size === "large" ? "md:col-span-2 aspect-[4/3] md:aspect-[21/9]" : "md:col-span-1 aspect-[4/3]"}
              `}
            >
              {/* IMAGEN CON ZOOM AL HOVER */}
              <div className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-105">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* OVERLAY Y TEXTO */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="block text-white/80 text-sm font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.category}
                </span>
                <h4 className="text-white text-3xl md:text-5xl font-bold">
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÓN "VER MÁS" */}
        <div className="mt-20 flex justify-center">
          <a href="/portfolio" className="group flex items-center gap-3 text-xl font-bold uppercase tracking-widest hover:gap-5 transition-all duration-300">
            Ver portafolio completo
            <span className="bg-black text-white group-hover:bg-accent w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
