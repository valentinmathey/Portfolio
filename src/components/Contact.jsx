import React, { useRef } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

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
                EMAILJS_SERVICE_ID, // Service ID
                EMAILJS_TEMPLATE_ID, // Template ID
                form.current,
                EMAILJS_PUBLIC_KEY   // Public Key
            )
            .then(
                () => {
                    alert("Mensaje enviado con éxito.");
                    form.current.reset();
                },
                (error) => {
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
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2">Nombre</label>
                        <input
                            type="text"
                            name="to_name" // Nombre del input que usa EmailJS
                            placeholder="Tu nombre"
                            required
                            className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2">Correo Electrónico</label>
                        <input
                            type="email"
                            name="reply_to" // Nombre del input para EmailJS
                            placeholder="tucorreo@example.com"
                            required
                            className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2">Mensaje</label>
                        <textarea
                            name="message" // Nombre del input para EmailJS
                            placeholder="Escribe tu mensaje aquí"
                            rows="4"
                            required
                            className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition duration-300"
                    >
                        Enviar Mensaje
                    </button>
                </motion.form>
            </div>
        </section>
    );
};
