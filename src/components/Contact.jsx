import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

// Importar las variables del .env
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                form.current,
                EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    // Popup de éxito
                    Swal.fire({
                        title: "¡Mensaje enviado!",
                        text: "Tu mensaje se ha enviado con éxito.",
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                    form.current.reset();
                },
                (error) => {
                    // Popup de error
                    Swal.fire({
                        title: "Error",
                        text: "Hubo un problema al enviar el mensaje.",
                        icon: "error",
                        confirmButtonText: "Intentar de nuevo",
                    });
                    console.error("Error al enviar el mensaje:", error.text);
                }
            );
    };

    return (
        <section id="contacto" className="border-b border-neutral-900 pb-20">
            {/* Título */}
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="my-10 text-center text-4xl font-bold text-white"
            >
                Ponte en contacto
            </motion.h2>

            {/* Contenedor Principal */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 lg:px-16">
                {/* Formulario de Contacto */}
                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 bg-neutral-900/80 p-6 rounded-lg shadow-lg"
                >
                    {/* Input Oculto */}
                    <input
                        type="hidden"
                        name="to_name"
                        value="Valentin Mathey"
                    />
                    
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2">Nombre</label>
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Tu nombre"
                            required
                            className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2">Correo Electrónico</label>
                        <input
                            type="email"
                            name="reply_to"
                            placeholder="tucorreo@example.com"
                            required
                            className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2">Mensaje</label>
                        <textarea
                            name="message"
                            placeholder="Escribe tu mensaje aquí"
                            rows="4"
                            required
                            className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition duration-300"
                    >
                        Enviar Mensaje
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
};
