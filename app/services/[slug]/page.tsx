"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { allServices } from "../../data/services";
import { notFound } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function ServiceDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
    const [slug, setSlug] = useState<string>("");

    useEffect(() => {
        Promise.resolve(params).then(p => setSlug(p.slug));
    }, [params]);

    if (!slug) return <div className="min-h-screen bg-white flex items-center justify-center text-black">Cargando...</div>;

    const service = allServices.find((s) => s.slug === slug);

    if (!service) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center text-black gap-4">
                <h1 className="text-4xl font-bold">Servicio no encontrado</h1>
                <Link href="/services" className="text-black hover:underline">Volver a Servicios</Link>
            </div>
        );
    }

    return (
        <main className="bg-white text-black min-h-screen selection:bg-accent selection:text-white antialiased">
            <Navbar forceWhite={true} />

            {/* HERO */}
            <section className="relative pt-40 pb-20 px-6 md:px-20 overflow-hidden bg-white border-b border-gray-200">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-70"></div>

                {/* FLOATING LETTERS DECORATION */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                    <span className="absolute top-10 left-[10%] text-9xl font-black text-gray-100 opacity-50 animate-float">A</span>
                    <span className="absolute top-40 right-[15%] text-8xl font-black text-gray-100 opacity-60 animate-float-delayed">B</span>
                    <span className="absolute bottom-20 left-[20%] text-[10rem] font-black text-gray-50 opacity-40 animate-float-slow rotate-12">M</span>
                    <span className="absolute top-1/2 right-[5%] text-7xl font-black text-gray-100 opacity-50 animate-float blur-[1px]">k</span>
                    <span className="absolute -bottom-10 right-[30%] text-9xl font-black text-gray-50 opacity-60 animate-float-delayed -rotate-12">Z</span>
                    <span className="absolute top-20 left-[40%] text-6xl font-black text-gray-100 opacity-30 animate-float-slow">x</span>
                </div>

                <div className="max-w-[1400px] mx-auto relative z-10 text-center">
                    <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-colors font-bold uppercase tracking-widest text-sm">
                        ← Volver a Servicios
                    </Link>

                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 text-black leading-[0.9]">
                        {service.title}
                    </h1>

                    <div className="w-full h-[1px] bg-gray-200 max-w-xs mx-auto mb-8"></div>

                    <p className="text-xl md:text-3xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium">
                        {service.shortDescription}
                    </p>
                </div>
            </section>

            {/* STATS STRIP */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-[1400px] mx-auto px-6 md:px-20 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {service.stats?.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-8 border border-black rounded-2xl hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 bg-white">
                                <span className="text-6xl md:text-7xl font-black text-black mb-2 tracking-tighter">{stat.value}</span>
                                <span className="text-sm md:text-base text-gray-900 font-bold uppercase tracking-widest border-t-2 border-black pt-4 w-full">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DESCRIPCIÓN & DETALLES */}
            <section className="py-32 px-6 md:px-20">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Columna Izquierda (Texto Largo) */}
                    <div className="lg:col-span-7">
                        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-black leading-tight">
                            Transformamos tu visión en <span className="text-accent underline decoration-4 decoration-accent/30 underline-offset-8">realidad digital</span>.
                        </h2>
                        <div className="prose prose-xl text-black font-medium">
                            <p className="leading-relaxed mb-8">
                                {service.longDescription}
                            </p>
                            <p className="leading-relaxed">
                                En Agencia Visual Creativa, no creemos en las soluciones de talla única. Analizamos tu industria, tu competencia y tus objetivos para diseñar una estrategia personalizada que garantice el máximo impacto.
                            </p>
                        </div>

                        {/* FEATURES (Moved inside column) */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold mb-8 text-black">Características Principales</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.features.map((feature: string, index: number) => (
                                    <div key={index} className="bg-white border border-black p-8 rounded-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 group">
                                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent font-bold group-hover:bg-accent group-hover:text-white transition-colors">✓</div>
                                        <h3 className="text-xl font-black mb-3 text-black tracking-tight">{feature}</h3>
                                        <p className="text-gray-800 leading-relaxed font-semibold">Optimizamos cada aspecto para garantizar resultados superiores.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha (Beneficios Sticky) */}
                    <div className="lg:col-span-1 hidden lg:block" />
                    <div className="lg:col-span-4 sticky top-32">
                        <div className="bg-white p-10 relative overflow-hidden group border border-black rounded-2xl shadow-xl">
                            <div className="absolute top-0 right-0 p-8 text-[10rem] font-bold text-gray-50 leading-none -mt-10 -mr-10 select-none pointer-events-none">
                                0{service.id}
                            </div>

                            <h3 className="text-3xl font-black mb-10 relative z-10 text-black tracking-tight">Beneficios<br />Estratégicos</h3>
                            <ul className="space-y-6 relative z-10">
                                {service.benefits.map((benefit: string, i: number) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-sm font-bold">✓</span>
                                        <span className="text-lg text-black font-bold leading-snug">{benefit}</span>
                                    </div>
                                ))}
                            </ul>

                            <div className="mt-12 relative z-10">
                                <Link href="/#footer" className="block w-full text-center bg-black text-white py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-black border-2 border-black transition-colors rounded-full">
                                    Cotizar Ahora
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESO */}
            <section className="px-6 md:px-20 py-20 bg-white border-t border-gray-200 relative overflow-hidden">
                {/* DOT GRID TEXTURE */}
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-70"></div>

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-accent font-black tracking-widest uppercase text-sm mb-4 block">Metodología</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">Nuestro Proceso</h2>
                        <p className="text-xl text-gray-800 font-semibold max-w-2xl mx-auto">Un flujo de trabajo diseñado para la excelencia y la velocidad.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {service.process?.map((step: any, i: number) => (
                            <div key={i} className="relative group">
                                {/* Connector Line (Desktop) */}
                                {i < 3 && (
                                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-[2px] bg-gray-200 z-0 scale-x-110"></div>
                                )}

                                <div className="relative z-10 bg-white p-8 border border-black rounded-2xl hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6 border-4 border-white shadow-lg relative">
                                        {step.step}
                                        {/* Little accent dot */}
                                        <div className="absolute top-0 right-0 w-6 h-6 bg-accent rounded-full border-2 border-white"></div>
                                    </div>

                                    <h3 className="text-xl font-black mb-4 text-black uppercase tracking-tight">{step.title}</h3>
                                    <p className="text-gray-900 text-sm font-bold leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GALERÍA */}
            <section className="py-32 px-6 md:px-20 bg-white border-t border-gray-200">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <span className="text-accent font-bold tracking-[0.3em] uppercase">Portfolio</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-black">Resultados Reales</h2>
                        </div>
                        <Link href="/#portfolio" className="text-black border-b-2 border-black pb-1 hover:text-accent font-bold transition-colors">
                            Ver todos los proyectos →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {service.gallery.map((item, i) => (
                            <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 shadow-lg border border-black">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="text-accent font-bold text-sm uppercase mb-2 tracking-widest">{item.category}</span>
                                    <h4 className="text-2xl font-black text-white">{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center bg-white border-t border-gray-200">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black">¿Listo para empezar?</h2>
                <Link href="/#footer" className="inline-block bg-black text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-accent hover:shadow-lg transition-all">
                    Iniciar Conversación
                </Link>
            </section>

            <Footer />
        </main>
    );
}
