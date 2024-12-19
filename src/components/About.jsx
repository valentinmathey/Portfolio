import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const About = () => {

    const { t } = useTranslation(); // Hook para traducciones
    
    return (
        <section id={t("about.id")} className="border-b border-neutral-900 py-8 lg:py-16 px-4">
            {/* Título */}
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, ease: "easeOut"  }}
                viewport={{ once: true }}
                className="mb-8 text-center text-4xl font-bold text-gray-200"
            >
                {t("about.title")} {/* Traducción del título */}
            </motion.h2>

            {/* Contenido */}
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center text-gray-300"
            >
                {/* Texto en formato HTML */}
                <p
                    className="text-sm sm:text-base md:text-lg leading-relaxed px-2"
                    dangerouslySetInnerHTML={{ __html: t("about.content") }} // Traducción dinámica del contenido
                ></p>
            </motion.div>
        </section>
    );
};
