import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <section id="sobre-mi" className="border-b border-neutral-900 py-8 lg:py-16 px-4">
            {/* Título */}
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, ease: "easeOut"  }}
                viewport={{ once: true }}
                className="mb-8 text-center text-4xl font-bold text-gray-200"
            >
                Sobre Mí
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
                    dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }}
                ></p>
            </motion.div>
        </section>
    );
};
