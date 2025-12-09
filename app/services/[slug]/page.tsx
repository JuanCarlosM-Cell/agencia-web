"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { allServices } from "../../data/services";
import { notFound } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function ServiceDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
    // Simple params unwrapping
    const [slug, setSlug] = useState<string>("");

    useEffect(() => {
        Promise.resolve(params).then(p => setSlug(p.slug));
    }, [params]);

    if (!slug) return <div className="min-h-screen bg-[#0B1121] flex items-center justify-center text-white">Cargando...</div>;

    const service = allServices.find((s) => s.slug === slug);

    if (!service) {
        return (
            <div className="min-h-screen bg-[#0B1121] flex flex-col items-center justify-center text-white gap-4">
                <h1 className="text-4xl font-bold">Servicio no encontrado</h1>
                <Link href="/services" className="text-accent hover:underline">Volver a Servicios</Link>
            </div>
        );
    }

    return (
        <main className="bg-[#0B1121] text-white min-h-screen selection:bg-accent selection:text-white">
            <Navbar forceWhite={false} />

            {/* HERO SECTION */}
            <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] via-[#0B1121]/50 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-[#0B1121]/80 to-[#0B1121]" />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-20 text-center flex flex-col items-center">
                    <div className="w-20 h-1 bg-accent mb-8" />
                    <span className="block text-accent text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6 animate-fade-in-up">
                        Servicios Profesionales
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 shadow-lg leading-none">
                        {service.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {service.shortDescription}
                    </p>
                </div>
            </section>

            {/* STATS STRIP (Resultados Impactantes) */}
            <section className="border-y border-white/5 bg-[#0F172A]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {service.stats?.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-4">
                            <span className="text-5xl md:text-6xl font-black text-white mb-2">{stat.value}</span>
                            <span className="text-sm md:text-base text-accent font-bold uppercase tracking-widest">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* DESCRIPCIÓN & DETALLES */}
            <section className="py-32 px-6 md:px-20">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Columna Izquierda (Texto Largo) */}
                    <div className="lg:col-span-7">
                        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white leading-tight">
                            Transformamos tu visión en <span className="text-accent underline decoration-4 decoration-accent/30 underline-offset-8">realidad digital</span>.
                        </h2>
                        <div className="prose prose-xl prose-invert text-gray-400">
                            <p className="leading-relaxed mb-8">
                                {service.longDescription}
                            </p>
                            <p className="leading-relaxed">
                                En Agencia Visual Creativa, no creemos en las soluciones de talla única. Analizamos tu industria, tu competencia y tus objetivos para diseñar una estrategia personalizada que garantice el máximo impacto.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold mt-16 mb-8 text-white">¿Qué incluye este servicio?</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-sm border border-white/5 hover:border-accent/30 transition-colors">
                                    <span className="text-accent text-lg">✦</span>
                                    <span className="font-medium text-gray-200">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna Derecha (Beneficios Sticky) */}
                    <div className="lg:col-span-1 hidden lg:block" /> { /* Spacer */}
                    <div className="lg:col-span-4 sticky top-32">
                        <div className="bg-[#0F172A] p-10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 text-[10rem] font-bold text-white/5 leading-none -mt-10 -mr-10 select-none group-hover:text-white/10 transition-colors">
                                0{service.id}
                            </div>

                            <h3 className="text-2xl font-bold mb-10 relative z-10">Beneficios Estratégicos</h3>
                            <ul className="space-y-8 relative z-10">
                                {service.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-sm font-bold shadow-[0_0_15px_rgba(42,128,247,0.4)]">✓</span>
                                        <span className="text-lg text-gray-300 leading-snug">{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 relative z-10">
                                <Link href="/#footer" className="block w-full text-center bg-white text-black py-4 font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors">
                                    Cotizar Ahora
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* PROCESS TIMELINE (NUEVO - IMPRESIONANTE) */}
            <section className="py-32 bg-[#0F172A] relative overflow-hidden">
                {/* Background grid pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

                <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-accent font-bold tracking-[0.3em] uppercase">Metodología</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4">Nuestro Proceso</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {service.process?.map((step, i) => (
                            <div key={i} className="relative group">
                                {/* Linea conectora (solo desktop) */}
                                {i < 3 && (
                                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-white/10 z-0">
                                        <div className="h-full bg-accent w-0 group-hover:w-full transition-all duration-700 delay-100" />
                                    </div>
                                )}

                                <div className="relative z-10 bg-[#0B1121] p-8 border border-white/5 hover:border-accent/40 transition-all duration-300 h-full group-hover:-translate-y-2">
                                    <div className="w-16 h-16 bg-[#0F172A] rounded-full border border-white/10 flex items-center justify-center text-2xl font-bold text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors shadow-lg">
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GALERÍA DE EJEMPLOS */}
            <section className="py-32 px-6 md:px-20">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <span className="text-accent font-bold tracking-[0.3em] uppercase">Portfolio</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-4">Resultados Reales</h2>
                        </div>
                        <Link href="/#portfolio" className="text-white border-b border-accent pb-1 hover:text-accent transition-colors">
                            Ver todos los proyectos →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {service.gallery.map((item, i) => (
                            <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-800">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="text-accent font-bold text-sm uppercase mb-2">{item.category}</span>
                                    <h4 className="text-2xl font-bold text-white">{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-40 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121] to-[#0F172A]" />

                {/* Glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                        ¿Listo para el impacto?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12">
                        Agenda una consulta estratégica gratuita y descubre cómo podemos transformar tu marca hoy mismo.
                    </p>
                    <Link href="/#footer" className="inline-block bg-accent text-white px-16 py-6 rounded-full text-xl font-bold hover:shadow-[0_0_50px_rgba(42,128,247,0.5)] hover:scale-105 transition-all duration-300">
                        Iniciar Conversación
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
