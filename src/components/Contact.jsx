import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

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
            <h2 className="my-10 text-center text-4xl font-bold text-white">
                Ponte en contacto
            </h2>

            {/* Contenedor Principal */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 lg:px-16">
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="w-full lg:w-1/2 bg-neutral-900/80 p-6 rounded-lg shadow-lg"
                >
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2">Nombre</label>
                        <input
                            type="text"
                            name="to_name"
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
                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition duration-300"
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </section>
    );
};
