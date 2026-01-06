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
            className="bg-green-600/90 hover:bg-green-500 text-white p-3 md:p-4 rounded-full transition duration-300 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center backdrop-blur-sm border border-green-400/30 shadow-2xl z-50 text-2xl md:text-4xl"
            aria-label="Chat en WhatsApp"
            whileHover={{ scale: 1.1 }}
            initial={{
                scale: 1,
                boxShadow: "0 0 0px rgba(72, 187, 120, 0)",
            }}
            animate={{
                scale: [1, 1.1, 1], 
                boxShadow: [
                    "0 0 0px rgba(72, 187, 120, 0.4)",
                    "0 0 20px rgba(72, 187, 120, 0.6)",
                    "0 0 0px rgba(72, 187, 120, 0.4)",
                ], 
            }}
            transition={{
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut", 
            }}
        >
            <FaWhatsapp />
        </motion.a>
    );
};

export default WhatsappIcon;
