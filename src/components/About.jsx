import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const About = () => {

    const { t } = useTranslation(); // Hook para traducciones
    
    return (
        <section id={t("about.id")} className="border-b border-neutral-900 py-20 lg:py-32 px-4 relative overflow-hidden">
             {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

            {/* Título */}
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, ease: "easeOut"  }}
                viewport={{ once: true }}
                className="mb-12 text-center text-4xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
            >
                {t("about.title")} {/* Traducción del título */}
            </motion.h2>

            {/* Contenido */}
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto p-8 md:p-12 bg-neutral-900/50 backdrop-blur-md rounded-2xl border border-neutral-800 shadow-2xl hover:border-purple-500/30 transition-colors duration-500"
            >
                {/* Texto en formato HTML */}
                <div
                    className="text-base sm:text-lg text-gray-300 leading-relaxed font-light text-justify"
                    dangerouslySetInnerHTML={{ __html: t("about.content") }} 
                />
            </motion.div>
        </section>
    );
};
