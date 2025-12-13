"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { allServices } from "../data/services";

export default function ServicesPage() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="bg-white text-black min-h-screen selection:bg-[#0B1C33] selection:text-white antialiased">
            <Navbar forceWhite={true} />

            {/* HERO CON GRADIENTE Y ANIMACIONES */}
            <section className="relative pt-40 pb-32 px-6 md:px-20 overflow-hidden min-h-[80vh] flex items-center">
                {/* Background con gradiente animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C33]/95 via-[#0B1C33]/90 to-[#1E3A8A]/80">
                    {/* Formas geométricas animadas */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-[10%] w-32 h-32 border-2 border-white/10 animate-spin-slow"></div>
                        <div className="absolute bottom-1/4 right-[15%] w-40 h-40 border-2 border-white/15 rounded-full animate-pulse"></div>
                        <div className="absolute top-[20%] right-[20%] w-24 h-24 border-4 border-white/20 rotate-45 animate-bounce-slow"></div>
                        <div className="absolute bottom-[30%] left-[25%] w-48 h-48 border border-white/10 rounded-full animate-spin-slow"></div>
                        
                        {/* Líneas animadas */}
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        <div className="absolute top-0 left-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent animate-shimmer delay-1000"></div>
                    </div>
                    
                    {/* Partículas sutiles */}
                    <div className="absolute inset-0">
                        {[...Array(15)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                                    animationDelay: `${Math.random() * 2}s`
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Texto grande de fondo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none">
                    <span className="text-[12vw] md:text-[15vw] font-black text-white/10 tracking-tighter leading-none whitespace-nowrap">
                        EXPERTISE
                    </span>
                </div>

                <div className="max-w-[1400px] mx-auto relative z-10 text-center w-full">
                    <div className="inline-flex items-center gap-3 text-white/80 mb-8 font-bold uppercase tracking-widest text-sm">
                        <span className="w-8 h-[2px] bg-white/60"></span>
                        Soluciones Especializadas
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                        <span className="bg-gradient-to-r from-white via-white/95 to-white/85 bg-clip-text text-transparent">
                            Servicios
                        </span>
                    </h1>

                    {/* Línea decorativa */}
                    <div className="relative w-full max-w-xs mx-auto mb-12">
                        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                        <div className="absolute top-0 left-0 w-1/3 h-full bg-white animate-shimmer rounded-full"></div>
                    </div>

                    <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight">
                        Soluciones integrales diseñadas para elevar tu marca en cada etapa de su crecimiento digital.
                    </p>
                </div>
            </section>

            {/* LISTA DETALLADA CON FONDO DEGRADADO */}
            <section className="px-6 md:px-20 py-24 bg-gradient-to-b from-white via-gray-50/50 to-white">
                <div className="max-w-[1400px] mx-auto flex flex-col gap-32">
                    {allServices.map((service, index) => (
                        <ServiceItem key={service.id} service={service} index={index} />
                    ))}
                </div>
            </section>

            {/* CTA FINAL MEJORADO */}
            <section className="py-24 text-center bg-gradient-to-b from-white to-gray-50 relative overflow-hidden border-t border-gray-200">
                <div className="absolute inset-0">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0B1C33]/10 to-[#1E3A8A]/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#1E3A8A]/10 to-[#0B1C33]/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0B1C33]">
                        ¿Listo para transformar tu proyecto?
                    </h2>
                    
                    <p className="text-xl text-gray-800 mb-12 max-w-2xl mx-auto font-medium">
                        Hablemos sobre cómo podemos llevar tu visión al siguiente nivel
                    </p>
                    
                    <Link 
                        href="/#footer" 
                        className="inline-flex items-center gap-4 bg-gradient-to-r from-[#0B1C33] to-[#1E3A8A] text-white px-12 py-5 rounded-xl text-lg font-bold hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
                    >
                        <span>Iniciar Proyecto</span>
                        <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </Link>
                </div>
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
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div 
            ref={ref} 
            className={`flex flex-col gap-12 md:gap-20 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
        >
            {/* IMAGEN DEL SERVICIO */}
            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-2xl border border-gray-300 hover:border-[#0B1C33] transition-all duration-500">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${isInView ? "grayscale-0 scale-100 opacity-100" : "grayscale scale-95 opacity-90"} group-hover:scale-110 group-hover:grayscale-0`}
                />
                
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C33]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* CONTENIDO DEL SERVICIO */}
            <div className={`w-full md:w-1/2 flex flex-col justify-center border border-gray-300 rounded-2xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white relative overflow-hidden ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                {/* Fondo decorativo con gradiente */}
                <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-gradient-to-br from-[#0B1C33]/5 to-[#1E3A8A]/5 rounded-full blur-xl"></div>
                
                {/* Número decorativo */}
                <span className="absolute -right-4 -bottom-10 text-[180px] font-black text-gray-100/50 select-none z-0 pointer-events-none leading-none">
                    0{service.id}
                </span>

                <div className="relative z-10">
                    {/* Encabezado con número */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#0B1C33] to-[#1E3A8A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                            0{service.id}
                        </div>
                        <div className="h-[2px] w-16 bg-gradient-to-r from-[#0B1C33] to-transparent"></div>
                    </div>

                    {/* Título */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0B1C33] tracking-tight">
                        {service.title}
                    </h2>
                    
                    {/* Descripción */}
                    <p className="text-lg text-gray-700 leading-relaxed mb-10 font-medium">
                        {service.shortDescription}
                    </p>

                    {/* Características en grid mejorado */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                        {service.features.slice(0, 4).map((feature: string, i: number) => (
                            <div key={i} className="flex items-start gap-3 group/item">
                                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#0B1C33] to-[#1E3A8A] rounded-full flex items-center justify-center text-white text-sm font-bold transform group-hover/item:scale-110 transition-transform duration-300">
                                    ✓
                                </div>
                                <span className="text-gray-900 font-semibold text-sm leading-tight">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Botón con gradiente */}
                    <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-4 bg-gradient-to-r from-[#0B1C33] to-[#1E3A8A] text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group/btn relative overflow-hidden"
                    >
                        <span className="relative z-10">Explorar Servicio</span>
                        <span className="relative z-10 transform group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#0B1C33] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                </div>
            </div>
        </div>
    );
}