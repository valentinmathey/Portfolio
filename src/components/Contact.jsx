import Swal from "sweetalert2";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

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
                        iconColor: "#a855f7", // Purple
                        confirmButtonText: "Perfecto",
                        customClass: {
                            popup: "bg-neutral-900 text-gray-200 border border-purple-500/30 rounded-2xl shadow-2xl", 
                            title: "text-white font-bold text-2xl", 
                            htmlContainer: "text-gray-400",
                            confirmButton: "px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/20", 
                        },
                        backdrop: "rgba(0,0,0,0.8)",
                        buttonsStyling: false,
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
                        iconColor: "#ef4444",
                        confirmButtonText: "Reintentar",
                        customClass: {
                            popup: "bg-neutral-900 text-gray-200 border border-red-500/30 rounded-2xl shadow-xl",
                            title: "text-red-500 font-bold", 
                            htmlContainer: "text-gray-400", 
                            confirmButton: "px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors",
                        },
                        backdrop: "rgba(0,0,0,0.8)",
                        buttonsStyling: false, 
                    });
                    console.error("Error al enviar el mensaje:", error.text);
                }
            );
    };

    return (
        <section id={sectionId} className="border-b border-neutral-900 py-24 relative overflow-hidden">
             {/* Decorative Background Elements */}
            <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mb-16 text-center text-4xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
            >
                {t("contact.title")}
            </motion.h2>

            <div className="flex flex-col items-center justify-center px-4 max-w-3xl mx-auto">
                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full bg-neutral-900/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-neutral-800/50 shadow-2xl hover:border-purple-500/20 transition-all duration-500"
                >
                    <input
                        type="hidden"
                        name="to_name"
                        value="Valentin Mathey"
                    />
                    
                    {/* Name Input */}
                    <div className="mb-6 relative group">
                        <label className="block text-sm font-medium text-purple-300 mb-2 pl-1 flex items-center gap-2">
                             <FaUser className="text-xs" /> {t("contact.form.name.label")}
                        </label>
                        <input
                            type="text"
                            name="from_name"
                            placeholder={t("contact.form.name.placeholder")}
                            required
                            className="w-full p-4 pl-5 rounded-xl bg-neutral-950/50 border border-neutral-800 text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 group-hover:border-neutral-700"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-6 relative group">
                        <label className="block text-sm font-medium text-purple-300 mb-2 pl-1 flex items-center gap-2">
                            <FaEnvelope className="text-xs" /> {t("contact.form.email.label")}
                        </label>
                        <input
                            type="email"
                            name="reply_to"
                            placeholder={t("contact.form.email.placeholder")}
                            required
                            className="w-full p-4 pl-5 rounded-xl bg-neutral-950/50 border border-neutral-800 text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 group-hover:border-neutral-700"
                        />
                    </div>

                    {/* Message Input */}
                    <div className="mb-8 relative group">
                        <label className="block text-sm font-medium text-purple-300 mb-2 pl-1 flex items-center gap-2">
                            <FaCommentDots className="text-xs" /> {t("contact.form.message.label")}
                        </label>
                        <textarea
                            name="message"
                            placeholder={t("contact.form.message.placeholder")}
                            rows="5"
                            required
                            className="w-full p-4 pl-5 rounded-xl bg-neutral-950/50 border border-neutral-800 text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 resize-none group-hover:border-neutral-700"
                        />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-xl shadow-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                         {t("contact.form.button")} <FaPaperPlane className="text-sm" />
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
};
