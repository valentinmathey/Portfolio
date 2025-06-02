import { motion } from "framer-motion";
import { IMAGES, LINKS, CONTACT, FILES, HERO_CONTENT } from "../constants";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const container = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

export const Hero = () => {

    const { t } = useTranslation(); // Hook para traducciones

    return (
        <section id={t("home.id")} className="border-b border-neutral-900 pb-12">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-8 md:px-16">
                {/* Imagen con botón CV */}
                <div className="flex flex-col items-center gap-4">
                    <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full border-4 border-gray-700 shadow-lg object-cover"
                        src={IMAGES.PROFILE}
                        alt="Valentin Mathey"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <a
                            href={FILES.CV}
                            download
                            className="px-6 py-2 text-sm font-medium text-gray-200 border border-gray-400 rounded-full hover:bg-gray-600 hover:brightness-125 hover:scale-105 transition-transform duration-300"
                        >
                            Download CV
                        </a>
                    </motion.div>
                </div>

                {/* Información */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <motion.h2
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold"
                    >
                        Valentin Mathey
                    </motion.h2>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium"
                    >
                        FullStack Developer
                    </motion.span>
                    <motion.p
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400"
                    >
                        {HERO_CONTENT}
                    </motion.p>

                    {/* Botones */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-6 flex flex-wrap gap-4 items-center justify-center lg:justify-start"
                    >
                        <motion.a
                            href={LINKS.GITHUB}
                            className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-full text-gray-300 hover:bg-gray-600 hover:brightness-125 transition-transform duration-300"
                        >
                            <FaGithub className="text-lg" /> GitHub
                        </motion.a>
                        <motion.a
                            href={LINKS.LINKEDIN}
                            className="flex items-center gap-2 px-4 py-2 border border-blue-400 rounded-full text-gray-300 hover:bg-blue-600 transition-transform duration-300"
                        >
                            <FaLinkedin className="text-lg" /> LinkedIn
                        </motion.a>
                        <motion.a
                            href={`mailto:${CONTACT.email}`}
                            className="flex items-center gap-2 px-4 py-2 border border-pink-400 rounded-full text-gray-300 hover:bg-pink-600 transition-transform duration-300"
                        >
                            <FaEnvelope className="text-lg" /> {CONTACT.email}
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
