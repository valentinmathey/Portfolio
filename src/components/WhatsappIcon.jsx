import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const WhatsappIcon = () => {

    const { t } = useTranslation();

    const whatsappNumber = "5492612159084";
    const whatsappMessage = encodeURIComponent(t("whatsappIcon.whatsappMessage"));

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 text-white p-4 rounded-full transition duration-300 w-14 h-14 flex items-center justify-center"
            aria-label="Chat en WhatsApp"
            initial={{
                scale: 1,
                boxShadow: "0 0 15px rgba(72, 187, 120, 0.8)",
            }}
            animate={{
                scale: [0.9, 1.2, 0.9], // Ciclo de agrandarse y achicarse
                boxShadow: [
                    "0 0 10px rgba(72, 187, 120, 0.8)",
                    "0 0 20px rgba(72, 187, 120, 1)",
                    "0 0 10px rgba(72, 187, 120, 0.8)",
                ], // Cambio dinámico del shadow
            }}
            transition={{
                duration: 2, // Duración del ciclo completo
                repeat: Infinity, // Repetir indefinidamente
                ease: "easeInOut", // Suavidad de la animación
            }}
        >
            <FaWhatsapp size={36} />
        </motion.a>
    );
};

export default WhatsappIcon;
