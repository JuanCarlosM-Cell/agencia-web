"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulación de envío
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", company: "", message: "" });
        }, 1500);
    };

    return (
        <div className="bg-[#0F172A] rounded-2xl p-8 md:p-12 border border-white/10 w-full max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
                ¿Hablamos del <span className="text-accent">Futuro</span>?
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-gray-400 text-sm font-medium ml-1">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
                            placeholder="Tu nombre completo"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-gray-400 text-sm font-medium ml-1">Email Corporativo</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
                            placeholder="tu@empresa.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="company" className="text-gray-400 text-sm font-medium ml-1">Empresa / Organización</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
                        placeholder="Nombre de tu proyecto o empresa"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-gray-400 text-sm font-medium ml-1">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-[#0B1121]/50 border border-white/10 rounded-lg p-4 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none placeholder:text-gray-600"
                        placeholder="Cuéntanos brevemente sobre tu proyecto o desafío..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === "submitting" || status === "success"}
                    className={`
            w-full py-5 rounded-full font-bold text-lg tracking-wide uppercase transition-all duration-300
            ${status === "success"
                            ? "bg-green-600 text-white cursor-default"
                            : "bg-white text-black hover:bg-accent hover:text-white"
                        }
            ${status === "submitting" ? "opacity-70 cursor-wait" : ""}
          `}
                >
                    {status === "submitting" ? "Enviando..." : status === "success" ? "¡Mensaje Enviado!" : "Enviar Mensaje"}
                </button>
            </form>
        </div>
    );
}
