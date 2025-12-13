"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { allServices } from "../../data/services";
import { use, useEffect, useState } from "react";

export default function ServiceDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
    const [slug, setSlug] = useState<string>("");
    const [scrollY, setScrollY] = useState(0);
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        Promise.resolve(params).then(p => setSlug(p.slug));
        
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
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

    const openProjectModal = (project: any) => {
        setSelectedProject(project);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeProjectModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    // Efecto de parallax suave para el hero
    const heroOpacity = Math.max(0, 1 - scrollY / 300);
    const heroTranslateY = scrollY * 0.5;

    return (
        <>
            <main className="bg-white text-black min-h-screen selection:bg-[#0B1C33] selection:text-white antialiased">
                <Navbar forceWhite={true} />

                {/* HERO CON ANIMACIÓN DE FORMAS GEOMÉTRICAS */}
                <section className="relative pt-40 pb-20 px-6 md:px-20 overflow-hidden border-b border-gray-200 min-h-[80vh] flex items-center">
                    {/* Background animado con gradiente y formas */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C33]/95 via-[#0B1C33]/90 to-[#1E3A8A]/80">
                        {/* Formas geométricas animadas */}
                        <div className="absolute inset-0 overflow-hidden">
                            {/* Triángulos animados */}
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

                    {/* Contenido principal con efecto parallax */}
                    <div 
                        className="max-w-[1400px] mx-auto relative z-10 text-center w-full"
                        style={{
                            opacity: heroOpacity,
                            transform: `translateY(${heroTranslateY}px)`
                        }}
                    >
                        {/* Breadcrumb elegante */}
                        <Link 
                            href="/services" 
                            className="inline-flex items-center gap-3 text-white/80 hover:text-white mb-12 transition-all duration-300 font-bold uppercase tracking-widest text-sm group"
                        >
                            <span className="w-8 h-[2px] bg-white/60 group-hover:w-12 group-hover:bg-white transition-all duration-300"></span>
                            <span className="group-hover:translate-x-1 transition-transform duration-300">Volver a Servicios</span>
                        </Link>

                        {/* Título con efecto de revelación */}
                        <div className="overflow-hidden">
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                                <span className="bg-gradient-to-r from-white via-white/95 to-white/85 bg-clip-text text-transparent animate-gradient">
                                    {service.title}
                                </span>
                            </h1>
                        </div>

                        {/* Línea decorativa con animación */}
                        <div className="relative w-full max-w-xs mx-auto mb-12">
                            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                            <div className="absolute top-0 left-0 w-1/3 h-full bg-white animate-shimmer rounded-full"></div>
                        </div>

                        {/* Descripción */}
                        <div className="overflow-hidden">
                            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium tracking-tight animate-slide-up">
                                {service.shortDescription}
                            </p>
                        </div>

                        {/* Indicador de scroll animado */}
                        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-white/60 text-xs uppercase tracking-widest animate-pulse">Scroll</span>
                                <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center">
                                    <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STATS STRIP MEJORADO */}
                <section className="bg-white border-b border-gray-200 py-20 relative overflow-hidden">
                    {/* Fondo decorativo sutil */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white"></div>
                    
                    <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {service.stats?.map((stat, i) => (
                                <div 
                                    key={i} 
                                    className="relative group overflow-hidden bg-white p-10 rounded-2xl border border-gray-200 hover:border-[#0B1C33] transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
                                >
                                    {/* Efecto de fondo animado */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C33]/0 via-[#0B1C33]/0 to-[#0B1C33]/0 group-hover:from-[#0B1C33]/5 group-hover:to-[#1E3A8A]/5 transition-all duration-700"></div>
                                    
                                    {/* Efecto de borde animado */}
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0B1C33]/20 rounded-2xl transition-all duration-700"></div>
                                    
                                    <div className="relative z-10">
                                        <span className="text-5xl md:text-6xl font-black text-[#0B1C33] mb-4 block tracking-tighter">
                                            {stat.value}
                                        </span>
                                        <div className="h-[2px] w-20 bg-gradient-to-r from-[#0B1C33] to-transparent mb-6 group-hover:w-full transition-all duration-700 delay-100"></div>
                                        <span className="text-sm font-bold uppercase tracking-widest text-gray-900">
                                            {stat.label}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DESCRIPCIÓN & DETALLES */}
                <section className="py-24 md:py-32 px-6 md:px-20 bg-white">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        {/* Columna Izquierda */}
                        <div className="lg:col-span-8">
                            <div className="mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-[#0B1C33] leading-tight mb-8">
                                    Creamos soluciones que{" "}
                                    <span className="relative inline-block">
                                        <span className="relative z-10 bg-gradient-to-r from-[#0B1C33] to-[#1E3A8A] bg-clip-text text-transparent">
                                            transforman negocios
                                        </span>
                                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#0B1C33] to-[#1E3A8A] rounded-full"></span>
                                    </span>
                                </h2>
                                <div className="w-32 h-1 bg-gradient-to-r from-[#0B1C33] to-[#1E3A8A] rounded-full"></div>
                            </div>

                            {/* Descripción */}
                            <div className="space-y-10 text-lg text-gray-800 leading-relaxed">
                                <p className="font-medium text-gray-900">
                                    {service.longDescription}
                                </p>
                                <p className="font-medium text-gray-900">
                                    En Agencia Visual Creativa, desarrollamos estrategias personalizadas que analizan profundamente tu industria, competencia y objetivos para garantizar resultados excepcionales.
                                </p>
                            </div>

                            {/* FEATURES */}
                            <div className="mt-24">
                                <h3 className="text-3xl font-bold mb-12 text-[#0B1C33] relative inline-block">
                                    Características Principales
                                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#0B1C33] to-[#1E3A8A] rounded-full"></span>
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {service.features.map((feature: string, index: number) => (
                                        <div 
                                            key={index} 
                                            className="group relative overflow-hidden bg-white border border-gray-300 p-10 rounded-2xl hover:border-[#0B1C33] transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                                        >
                                            <div className="flex items-start gap-6">
                                                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#0B1C33] to-[#1E3A8A] rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:rotate-12 transition-transform duration-500">
                                                    ✓
                                                </div>
                                                
                                                <div>
                                                    <h4 className="text-xl font-black text-[#0B1C33] mb-4 tracking-tight">
                                                        {feature}
                                                    </h4>
                                                    
                                                    <p className="text-gray-700 leading-relaxed font-medium">
                                                        Implementamos metodologías probadas para optimizar cada aspecto de tu estrategia.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Columna Derecha Sticky */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-32 bg-white border border-gray-300 p-10 rounded-2xl shadow-2xl group hover:shadow-3xl transition-all duration-500">
                                {/* Número decorativo */}
                                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#0B1C33] to-[#1E3A8A] rounded-full flex items-center justify-center text-white text-3xl font-black shadow-xl">
                                    0{service.id}
                                </div>

                                <h3 className="text-3xl font-black text-[#0B1C33] mb-10 tracking-tight">
                                    Beneficios<br />
                                    <span className="text-gray-700">Clave</span>
                                </h3>
                                
                                <ul className="space-y-6">
                                    {service.benefits.map((benefit: string, i: number) => (
                                        <li key={i} className="flex items-start gap-4 group/item">
                                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#0B1C33] to-[#1E3A8A] rounded-full flex items-center justify-center text-white font-bold transform group-hover/item:scale-110 transition-transform duration-300">
                                                ✓
                                            </div>
                                            <span className="text-lg font-bold text-gray-900 leading-snug pt-1">
                                                {benefit}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Botón CTA */}
                                <div className="mt-12 pt-8 border-t border-gray-300">
                                    <Link 
                                        href="/#footer" 
                                        className="block w-full text-center bg-gradient-to-r from-[#0B1C33] to-[#1E3A8A] text-white py-4 font-bold uppercase tracking-widest hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-xl relative overflow-hidden group/btn"
                                    >
                                        <span className="relative z-10">Solicitar Cotización</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#0B1C33] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROCESO */}
                <section className="px-6 md:px-20 py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
                    <div className="max-w-[1400px] mx-auto relative z-10">
                        <div className="text-center mb-20">
                            <span className="inline-block px-6 py-3 bg-gradient-to-r from-[#0B1C33] to-[#1E3A8A] text-white rounded-full text-sm font-bold uppercase tracking-widest mb-6 shadow-lg">
                                Metodología Comprobada
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-[#0B1C33] mb-8">
                                Proceso de Trabajo
                            </h2>
                            <p className="text-xl text-gray-800 font-medium max-w-2xl mx-auto">
                                Cada paso diseñado para maximizar resultados y minimizar tiempos.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {service.process?.map((step: any, i: number) => (
                                <div key={i} className="relative group">
                                    {i < 3 && (
                                        <div className="hidden md:block absolute top-16 left-1/2 w-full h-[2px] bg-gradient-to-r from-[#0B1C33]/20 via-[#1E3A8A]/20 to-transparent z-0"></div>
                                    )}

                                    <div className="relative z-10 bg-white p-8 border border-gray-300 rounded-2xl hover:border-[#0B1C33] hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center group-hover:-translate-y-2">
                                        <div className="relative mb-8">
                                            <div className="w-20 h-20 bg-gradient-to-br from-[#0B1C33] to-[#1E3A8A] rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-xl">
                                                {step.step}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-black text-[#0B1C33] mb-6 uppercase tracking-tight">
                                            {step.title}
                                        </h3>
                                        
                                        <p className="text-gray-800 font-medium leading-relaxed text-sm">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* GALERÍA CON MODAL */}
                <section className="py-24 px-6 md:px-20 bg-white">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                            <div>
                                <span className="text-[#0B1C33] font-bold tracking-[0.3em] uppercase text-sm">
                                    Casos de Estudio
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#0B1C33]">
                                    Proyectos Destacados
                                </h2>
                            </div>
                            
                            <Link 
                                href="/#portfolio" 
                                className="group flex items-center gap-3 text-[#0B1C33] font-bold hover:text-[#1E3A8A] transition-colors"
                            >
                                Explorar Portfolio
                                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {service.gallery.map((item, i) => (
                                <div 
                                    key={i} 
                                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                                    onClick={() => openProjectModal(item)}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C33]/90 via-[#0B1C33]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                        <span className="text-white/80 font-bold text-xs uppercase mb-2 tracking-widest">
                                            {item.category}
                                        </span>
                                        <h4 className="text-2xl font-black text-white">
                                            {item.title}
                                        </h4>
                                        
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                                                <span className="text-white text-2xl">+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA FINAL */}
                <section className="py-24 text-center bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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

            {/* MODAL PARA PROYECTOS */}
            {modalOpen && selectedProject && (
                <div 
                    className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={closeProjectModal}
                >
                    <div 
                        className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botón cerrar */}
                        <button
                            onClick={closeProjectModal}
                            className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        >
                            <span className="text-2xl">×</span>
                        </button>

                        {/* Contenido del modal */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                            {/* Imagen */}
                            <div className="relative h-64 lg:h-auto">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Detalles */}
                            <div className="p-8 lg:p-12 overflow-y-auto">
                                <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#0B1C33] to-[#1E3A8A] text-white rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                                    {selectedProject.category}
                                </span>
                                
                                <h3 className="text-3xl lg:text-4xl font-black text-[#0B1C33] mb-6">
                                    {selectedProject.title}
                                </h3>
                                
                                {selectedProject.description && (
                                    <div className="prose prose-lg text-gray-800 mb-8">
                                        <p className="font-medium leading-relaxed">
                                            {selectedProject.description}
                                        </p>
                                    </div>
                                )}

                                {/* Detalles adicionales */}
                                <div className="space-y-6">
                                    {selectedProject.client && (
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">Cliente</h4>
                                            <p className="text-lg font-medium text-gray-900">{selectedProject.client}</p>
                                        </div>
                                    )}
                                    
                                    {selectedProject.technologies && (
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">Tecnologías</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.technologies.map((tech: string, i: number) => (
                                                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    
                                    {selectedProject.results && (
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">Resultados</h4>
                                            <ul className="space-y-2">
                                                {selectedProject.results.map((result: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-[#0B1C33] mt-1">✓</span>
                                                        <span className="text-gray-900 font-medium">{result}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Botones de acción */}
                                <div className="mt-12 pt-8 border-t border-gray-300 flex gap-4">
                                    <button
                                        onClick={closeProjectModal}
                                        className="flex-1 border-2 border-[#0B1C33] text-[#0B1C33] py-4 font-bold uppercase tracking-widest hover:bg-[#0B1C33] hover:text-white transition-all duration-300 rounded-xl"
                                    >
                                        Cerrar
                                    </button>
                                    <Link
                                        href="/#footer"
                                        className="flex-1 bg-gradient-to-r from-[#0B1C33] to-[#1E3A8A] text-white py-4 font-bold uppercase tracking-widest hover:shadow-xl transition-all duration-300 rounded-xl text-center"
                                    >
                                        Solicitar Proyecto Similar
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}