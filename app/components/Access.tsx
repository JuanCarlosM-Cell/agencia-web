"use client";

import useScrollAnimation from "../hooks/useScrollAnimation";

const tools = [
  {
    id: 1,
    title: "Mis Leads",
    icon: "📊",
    description: "Gestión de oportunidades en tiempo real.",
    action: "Ver Dashboard"
  },
  {
    id: 2,
    title: "Dominios",
    icon: "🌐",
    description: "Buscador y administrador de dominios.",
    action: "Buscar Ahora"
  },
  {
    id: 3,
    title: "Soporte VIP",
    icon: "💎",
    description: "Línea directa con tu Project Manager.",
    action: "Contactar"
  }
];

export default function Access() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="access"
      className="w-full bg-neutral-900 text-white py-32 px-6 md:px-20 overflow-hidden"
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
          {tools.map((tool, index) => (
            <div
              key={tool.id}
              className={`
                group relative bg-neutral-800/50 border border-white/10 p-10 
                hover:border-accent hover:bg-neutral-800 transition-all duration-500 cursor-pointer
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">
                {tool.icon}
              </div>

              <h4 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                {tool.title}
              </h4>

              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                {tool.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                {tool.action}
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
