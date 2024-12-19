import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Experience = () => {
    
    const { t } = useTranslation(); // Hook para traducciones

    return (
        <section id={t("experience.id")} className="border-b border-neutral-900 pb-16">
            {/* Título */}
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="my-10 text-center text-4xl font-bold"
            >
                {t("experience.title")}
            </motion.h2>

            {/* Experiencias */}
            <div className="flex flex-col items-center gap-6 px-4">
                {t("experience.items", { returnObjects: true }).map((exp, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 0px 10px rgb(236 72 153 / 0.4)"
                        }}
                        className="w-full max-w-4xl rounded-lg bg-neutral-900 p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Año */}
                        <p className="text-sm text-pink-500 mb-2 font-semibold">
                            {exp.year}
                        </p>

                        {/* Rol */}
                        <h3 className="text-xl font-semibold text-purple-500 mb-2">
                            {exp.role}
                        </h3>

                        {/* Descripción */}
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            {exp.description}
                        </p>

                        {/* Tecnologías */}
                        <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="rounded-md bg-pink-800/20 px-3 py-1 text-sm text-pink-400"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
