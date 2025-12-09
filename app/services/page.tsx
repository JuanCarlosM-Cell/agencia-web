"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const allServices = [
    {
        id: 1,
        title: "Branding & Identidad",
        description: "Creamos marcas con alma. Desde el logotipo hasta el sistema visual completo, definimos cómo se ve, habla y siente tu marca en cada punto de contacto.",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=75&w=1200&auto=format&fit=crop",
        features: ["Logotipo & Isotipo", "Paleta de Colores", "Tipografía Corporativa", "Manual de Marca"]
    },
    {
        id: 2,
        title: "Diseño Web UI/UX",
        description: "Diseñamos interfaces que enamoran y funcionan. Priorizamos la experiencia de usuario para garantizar navegación intuitiva y altos índices de conversión.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=75&w=1200&auto=format&fit=crop",
        features: ["Diseño Web Responsivo", "Prototipado Interactivo", "Auditoría UX", "Sistemas de Diseño"]
    },
    {
        id: 3,
        title: "Estrategia Digital",
        description: "No solo publicamos, conectamos. Desarrollamos estrategias de contenido y campañas de pago para poner tu marca frente a las personas correctas.",
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=75&w=1200&auto=format&fit=crop",
        features: ["Gestión de Redes Sociales", "Publicidad Digital (Ads)", "SEO/SEM", "Email Marketing"]
    },
    {
        id: 4,
        title: "Producción Audiovisual",
        description: "Contamos tu historia en movimiento. Videos corporativos, comerciales y contenido para redes que detienen el scroll.",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=75&w=1200&auto=format&fit=crop",
        features: ["Video Corporativo", "Fotografía de Producto", "Animación 2D/3D", "Edición y Postproducción"]
    },
    {
        id: 5,
        title: "Desarrollo de Software",
        description: "Soluciones tecnológicas a medida. Desde aplicaciones móviles hasta plataformas web complejas para optimizar tu negocio.",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=75&w=1200&auto=format&fit=crop",
        features: ["Apps iOS/Android", "Desarrollo Full Stack", "E-commerce", "Integración de APIs"]
    }
];

export default function ServicesPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar forceWhite={true} />

            {/* HERO SERVICIOS */}
            <section className="pt-40 pb-20 px-6 md:px-20 bg-neutral-900 border-b border-white/10">
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
            <section className="px-6 md:px-20 py-20 bg-black">
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
            { threshold: 0.6 } // Se activa cuando el 60% del ítem está visible
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
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                    <span className="text-accent text-lg font-bold">0{service.id}</span>
                    <div className="h-[1px] w-12 bg-accent"></div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                    {service.description}
                </p>

                {/* Grid de Características */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                            <span className="text-accent">✓</span> {feature}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}
