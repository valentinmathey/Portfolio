import Swal from "sweetalert2";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Importar las variables del .env
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
    const form = useRef();

    const { t, i18n } = useTranslation();

    // ID dinámico basado en el idioma
    const sectionId = t("contact.id");

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
                        title: t("contact.success.title"),
                        text: t("contact.success.text"),
                        icon: "success",
                        iconColor: "green", 
                        confirmButtonText: "OK",
                        customClass: {
                            popup: "bg-gray-900 text-gray-200 border-solid border-2 border-green-600 rounded-xl shadow-lg", 
                            title: "text-green-600 font-bold", 
                            htmlContainer: "text-gray-300",
                            confirmButton: "w-full px-4 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-500", 
                        },
                        backdrop: "rgba(0,0,0,0.5)",
                        buttonsStyling: false, // Para usar clases personalizadas
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    form.current.reset();
                },
                (error) => {
                    // Popup de error
                    Swal.fire({
                        title: t("contact.error.title"),
                        text: t("contact.error.text"),
                        icon: "error",
                        iconColor: "red",
                        confirmButtonText: "Intentar de nuevo",
                        customClass: {
                            popup: "bg-gray-900 text-gray-200 border-solid border-2 border-red-600 rounded-xl shadow-lg",
                            title: "text-red-600 font-bold", 
                            htmlContainer: "text-gray-300", 
                            confirmButton: "w-full px-4 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500",
                        },
                        backdrop: "rgba(0,0,0,0.5)",
                        buttonsStyling: false, // Para usar clases personalizadas
                    });
                    console.error("Error al enviar el mensaje:", error.text);
                }
            );
    };

    return (
        <section id={sectionId} className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="my-10 text-center text-4xl font-bold text-white"
            >
                {t("contact.title")}
            </motion.h2>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 lg:px-16">
                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 bg-neutral-900/80 p-6 rounded-lg shadow-lg"
                >
                    <input
                        type="hidden"
                        name="to_name"
                        value="Valentin Mathey"
                    />
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2">{t("contact.form.name.label")}</label>
                        <input
                            type="text"
                            name="from_name"
                            placeholder={t("contact.form.name.placeholder")}
                            required
                            className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2">{t("contact.form.email.label")}</label>
                        <input
                            type="email"
                            name="reply_to"
                            placeholder={t("contact.form.email.placeholder")}
                            required
                            className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2">{t("contact.form.message.label")}</label>
                        <textarea
                            name="message"
                            placeholder={t("contact.form.message.placeholder")}
                            rows="4"
                            required
                            className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.1 }}
                        className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 transition duration-300"
                    >
                        {t("contact.form.button")}
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
};
