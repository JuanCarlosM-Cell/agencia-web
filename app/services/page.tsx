"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { allServices } from "../data/services";

export default function ServicesPage() {
    return (
        <main className="bg-white text-black min-h-screen selection:bg-accent selection:text-white antialiased">
            <Navbar forceWhite={true} />

            {/* HERO SERVICIOS - REDESIGN */}
            <section className="relative pt-40 pb-32 px-6 md:px-20 overflow-hidden bg-white border-b border-gray-200">
                {/* DOT PATTERN BACKGROUND */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-70"></div>

                {/* WATERMARK BACKGROUND TEXT */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none overflow-hidden">
                    <span className="text-[12vw] md:text-[15vw] font-black text-gray-50 tracking-tighter leading-none whitespace-nowrap opacity-60">
                        SERVICES
                    </span>
                </div>

                <div className="max-w-[1400px] mx-auto relative z-10 text-center">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
                        Expertise & Soluciones
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 text-black leading-[0.9]">
                        Nuestros <br />
                        <span className="text-accent">Servicios</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                        Soluciones integrales diseñadas para elevar tu marca en cada etapa de su crecimiento digital.
                    </p>
                </div>
            </section>

            {/* LISTA DETALLADA */}
            <section className="px-6 md:px-20 py-20 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
                <div className="max-w-[1400px] mx-auto flex flex-col gap-32">
                    {allServices.map((service, index) => (
                        <ServiceItem key={service.id} service={service} index={index} />
                    ))}
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-20 text-center border-t border-gray-200 bg-gray-50">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">¿Tienes un proyecto en mente?</h2>
                <a href="/#footer" className="bg-black text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-accent hover:text-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-block">
                    Cotizar Proyecto
                </a>
            </section>

            <Footer />
        </main>
    );
}

// Componente individual para manejar la lógica de intersección por ítem

function ServiceItem({ service, index }: { service: any; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.4 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div ref={ref} className={`flex flex-col gap-12 text-center md:text-left ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>

            {/* IMAGEN DEL SERVICIO */}
            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-lg border border-gray-100">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-cover transition-transform duration-700 group-hover:scale-110 ${isInView ? "grayscale-0" : "grayscale"} hover:grayscale-0`}
                />
            </div>

            {/* CONTENIDO DEL SERVICIO */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start border border-black rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 bg-white relative overflow-hidden">
                {/* WATERMARK NUMBER */}
                <span className="absolute -right-4 -bottom-10 text-[180px] font-black text-gray-50 opacity-50 select-none z-0 pointer-events-none leading-none">
                    0{service.id}
                </span>

                <div className="relative z-10 w-full">
                    <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                        <span className="text-accent text-lg font-bold">0{service.id}</span>
                        <div className="h-[1px] w-12 bg-accent"></div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight">{service.title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        {service.shortDescription}
                    </p>

                    {/* Grid de Características */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full text-left">
                        {service.features.slice(0, 4).map((feature: string, i: number) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                                <span className="text-accent bg-accent/10 p-1 rounded-full">✓</span> {feature}
                            </li>
                        ))}
                    </ul>

                    <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-3 text-black border-2 border-black px-10 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300 group shadow-md"
                    >
                        Explorar Servicio
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>

        </div>
    );
}
