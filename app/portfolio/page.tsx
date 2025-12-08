"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const allProjects = [
    {
        id: 1,
        title: "Neon Future",
        category: "Campaña 360",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=75&w=1200&auto=format&fit=crop",
        year: "2024",
        client: "FutureCorp"
    },
    {
        id: 2,
        title: "Eco Bottle",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1542219550-37153d387c27?q=75&w=1200&auto=format&fit=crop",
        year: "2023",
        client: "GreenLife"
    },
    {
        id: 3,
        title: "Tech Summit",
        category: "Evento Digital",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=75&w=1200&auto=format&fit=crop",
        year: "2024",
        client: "TechWeek"
    },
    {
        id: 4,
        title: "Urban Style",
        category: "Producción Video",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=75&w=1200&auto=format&fit=crop",
        year: "2023",
        client: "UrbanBrand"
    },
    {
        id: 5,
        title: "Minimalist Coffee",
        category: "Packaging",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=75&w=1200&auto=format&fit=crop",
        year: "2023",
        client: "The Coffee Club"
    },
    {
        id: 6,
        title: "Abstract Art Fair",
        category: "Identidad Visual",
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=75&w=1200&auto=format&fit=crop",
        year: "2024",
        client: "ArtFoundation"
    }
];

export default function PortfolioPage() {
    return (
        <main className="bg-white text-black min-h-screen">
            <Navbar />

            {/* HERO PORTAFOLIO */}
            <section className="pt-40 pb-20 px-6 md:px-20 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">
                        Nuestro <span className="text-accent">Trabajo</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
                        Una colección curada de proyectos donde la estrategia y la creatividad se encuentran.
                    </p>
                </div>
            </section>

            {/* GRID COMPLETO */}
            <section className="px-6 md:px-20 py-20 bg-white">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-20">
                    {allProjects.map((project) => (
                        <div key={project.id} className="group cursor-pointer">

                            {/* IMAGEN CARD */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 mb-6">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* DATOS PROYECTO */}
                            <div className="flex justify-between items-start border-b border-black/10 pb-6 group-hover:border-black transition-colors duration-500">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h2>
                                    <span className="text-gray-500 text-lg">{project.category}</span>
                                </div>
                                <div className="text-right hidden md:block">
                                    <span className="block text-sm font-bold uppercase tracking-wider mb-1">{project.client}</span>
                                    <span className="block text-gray-400">{project.year}</span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-32 bg-black text-white px-6 md:px-20 text-center">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10">¿Listo para empezar el tuyo?</h2>
                <a href="/#footer" className="bg-white text-black px-12 py-5 rounded-full text-lg font-bold hover:bg-accent hover:text-white transition-all transform hover:scale-105 inline-block">
                    Hablemos
                </a>
            </section>

            <Footer />
        </main>
    );
}
