
import { allServices } from "../../data/services";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generar rutas estáticas
export async function generateStaticParams() {
    return allServices.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServiceDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = allServices.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="bg-[#0B1121] text-white min-h-screen">
            <Navbar forceWhite={true} />

            {/* HERO SECTION */}
            <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
                    <span className="text-accent font-bold tracking-widest uppercase mb-4 block">
                        Servicios
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black mb-6 leading-none">
                        {service.title}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {service.description}
                    </p>
                </div>
            </section>

            {/* CONTENIDO DETALLADO */}
            <section className="px-6 md:px-20 py-24 bg-[#0B1121]">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

                    {/* Columna Izquierda: Descripción Larga */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-white">
                            ¿En qué consiste?
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-12">
                            {service.fullDescription}
                        </p>

                        <h3 className="text-2xl font-bold mb-6 text-white">Beneficios Clave</h3>
                        <ul className="space-y-4">
                            {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="text-accent mt-1">✦</span>
                                    <span className="text-gray-300 text-lg">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna Derecha: Características */}
                    <div className="bg-[#0F172A]/50 p-10 rounded-sm border border-white/10">
                        <h3 className="text-2xl font-bold mb-8">Incluye</h3>
                        <ul className="grid grid-cols-1 gap-4">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-4 p-4 bg-black/40 rounded border border-white/5">
                                    <div className="w-2 h-2 bg-accent rounded-full" />
                                    <span className="font-medium text-gray-200">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12 pt-8 border-t border-white/10 text-center">
                            <p className="mb-6 text-gray-400">¿Necesitas esto para tu marca?</p>
                            <Link
                                href="/#footer"
                                className="inline-block w-full bg-white text-black font-bold py-4 rounded hover:bg-accent hover:text-white transition-colors"
                            >
                                Solicitar Cotización
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            {/* NAVEGACIÓN ENTRE SERVICIOS */}
            <section className="py-20 border-t border-white/10 bg-[#0F172A]">
                <div className="max-w-[1400px] mx-auto px-6">
                    <h3 className="text-center text-gray-500 mb-10 uppercase tracking-widest text-sm">Explora otros servicios</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {allServices.map(s => (
                            <Link
                                key={s.id}
                                href={`/services/${s.slug}`}
                                className={`
                            px-6 py-2 rounded-full border border-white/20 hover:border-accent hover:text-accent transition-colors
                            ${s.slug === service.slug ? "bg-white/10 pointer-events-none text-gray-500" : "text-white"}
                        `}
                            >
                                {s.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
