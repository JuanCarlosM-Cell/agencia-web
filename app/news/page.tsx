"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const allArticles = [
    {
        id: 1,
        title: "El futuro del Diseño Digital en 2025",
        date: "12 Oct 2024",
        category: "Tendencias",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=75&w=1200&auto=format&fit=crop",
        excerpt: "Exploramos las nuevas fronteras de la interacción hombre-máquina y cómo la IA está redefiniendo los flujos de trabajo creativos."
    },
    {
        id: 2,
        title: "Estrategias de Growth Hacking",
        date: "05 Nov 2024",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=75&w=1200&auto=format&fit=crop",
        excerpt: "Cómo escalar tu startup utilizando tácticas de marketing no convencionales y análisis de datos en tiempo real."
    },
    {
        id: 3,
        title: "Storytelling Visual para Marcas",
        date: "28 Nov 2024",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=75&w=1200&auto=format&fit=crop",
        excerpt: "La importancia de construir una narrativa coherente que conecte emocionalmente con tu audiencia a través de imágenes."
    },
    {
        id: 4,
        title: "La Psicología del Color en UI",
        date: "15 Dic 2024",
        category: "Diseño UI",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=75&w=1200&auto=format&fit=crop",
        excerpt: "Cómo los colores influyen en la toma de decisiones del usuario y mejoran la usabilidad de tu aplicación web."
    },
    {
        id: 5,
        title: "Minimalismo vs Maximalismo",
        date: "02 Ene 2025",
        category: "Opinión",
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=75&w=1200&auto=format&fit=crop",
        excerpt: "Un debate sobre las dos corrientes estéticas dominantes en el diseño web actual y cuál elegir para tu proyecto."
    }
];

export default function NewsPage() {
    return (
        <main className="bg-gray-50 text-black min-h-screen">
            <Navbar />

            {/* HERO NEWS */}
            <section className="pt-40 pb-20 px-6 md:px-20 bg-white border-b border-gray-100">
                <div className="max-w-[1400px] mx-auto">
                    <p className="text-accent font-bold tracking-[0.2em] uppercase mb-4">Blog & Insights</p>
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">
                        Nuestras <span className="text-gray-400">Palabras</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
                        Pensamientos, estrategias y noticias sobre diseño, tecnología y cultura digital.
                    </p>
                </div>
            </section>

            {/* GRID ARTÍCULOS */}
            <section className="px-6 md:px-20 py-20 bg-gray-50">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {allArticles.map((article) => (
                        <div key={article.id} className="group cursor-pointer flex flex-col gap-6 bg-white p-6 md:p-0 md:bg-transparent rounded-xl md:rounded-none shadow-sm md:shadow-none hover:shadow-lg md:hover:shadow-none transition-shadow duration-300">

                            {/* IMAGEN card */}
                            <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:rounded-none bg-gray-200">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-sm">
                                    {article.category}
                                </div>
                            </div>

                            {/* CONTENIDO */}
                            <div>
                                <span className="text-gray-500 text-sm font-medium block mb-2">{article.date}</span>
                                <h3 className="text-2xl font-bold leading-tight group-hover:text-accent transition-colors duration-300 mb-4">{article.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">{article.excerpt}</p>
                                <span className="text-black font-bold uppercase tracking-widest text-sm group-hover:underline">Leer artículo →</span>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* NESWLETTER */}
            <section className="py-20 px-6 bg-black text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Suscríbete a nuestra Newsletter</h2>
                    <p className="text-gray-400 mb-10">Recibe las últimas tendencias y estrategias directamente en tu bandeja de entrada.</p>

                    <form className="flex flex-col md:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Tu correo electrónico"
                            className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                        />
                        <button className="bg-accent text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-black transition-colors">
                            Suscribirse
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
