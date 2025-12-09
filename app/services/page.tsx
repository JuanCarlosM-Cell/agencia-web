"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { allServices } from "../data/services";

export default function ServicesPage() {
    return (
        <main className="bg-[#0b1121] text-white min-h-screen selection:bg-accent selection:text-white">
            <Navbar forceWhite={true} />

            {/* HERO SERVICIOS */}
            <section className="pt-40 pb-20 px-6 md:px-20 bg-gradient-to-b from-[#0F172A] to-[#0b1121] border-b border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">
                        Nuestros <span className="text-accent">Servicios</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
                        Soluciones integrales diseñadas para elevar tu marca en cada etapa de su crecimiento digital.
                    </p>
                </div>
            </section>

            {/* LISTA DETALLADA */}
            <section className="px-6 md:px-20 py-20 bg-[#0b1121]">
                <div className="max-w-[1400px] mx-auto flex flex-col gap-32">
                    {allServices.map((service, index) => (
                        <ServiceItem key={service.id} service={service} index={index} />
                    ))}
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-20 text-center border-t border-white/10 bg-neutral-900">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">¿Tienes un proyecto en mente?</h2>
                <a href="/#footer" className="bg-accent text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-black transition-all">
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
            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden group">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-cover transition-transform duration-700 group-hover:scale-105 ${isInView ? "grayscale-0" : "grayscale"} hover:grayscale-0`}
                />
            </div>

            {/* CONTENIDO DEL SERVICIO */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
                <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                    <span className="text-accent text-lg font-bold">0{service.id}</span>
                    <div className="h-[1px] w-12 bg-accent"></div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                    {service.description}
                </p>

                {/* Grid de Características */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full text-left">
                    {service.features.slice(0, 4).map((feature: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                            <span className="text-accent">✓</span> {feature}
                        </li>
                    ))}
                </ul>

                <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-3 text-white border border-white/20 px-8 py-3 rounded-full hover:bg-accent hover:border-accent transition-all duration-300 group"
                >
                    Explorar Servicio
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            </div>

        </div>
    );
}
