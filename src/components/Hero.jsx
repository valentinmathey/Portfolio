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

    const { t, i18n } = useTranslation(); // Hook para traducciones
    
    // Determine which CV to download based on language
    const isSpanish = i18n.language?.startsWith('es');
    const cvFile = isSpanish ? FILES.CV_ES : FILES.CV_EN;

    return (
        <section id={t("home.id")} className="relative border-b border-neutral-900 pb-12 pt-36 lg:pt-48">
             {/* Background Orbs - Constrained to this section but without hard clipping of content */}
            <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                <motion.div 
                    animate={{ 
                        x: [0, 100, 0], 
                        y: [0, -50, 0],
                        opacity: [0.3, 0.6, 0.3] 
                    }}
                    transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className="absolute top-10 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]"
                />
                <motion.div 
                    animate={{ 
                        x: [0, -100, 0], 
                        y: [0, 50, 0],
                        opacity: [0.3, 0.6, 0.3] 
                    }}
                    transition={{ 
                        duration: 10, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute bottom-10 right-10 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px]"
                />
            </div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                    {/* Imagen con botón CV */}
                    <div className="flex flex-col items-center gap-4">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ 
                            scale: 1, 
                            opacity: 1, 
                            y: [0, -10, 0],
                            boxShadow: [
                                "0px 0px 30px rgba(236, 72, 153, 0.3)",
                                "0px 0px 60px rgba(168, 85, 247, 0.5)",
                                "0px 0px 30px rgba(236, 72, 153, 0.3)"
                            ]
                        }}
                        transition={{ 
                            scale: { duration: 1, ease: "easeOut" },
                            opacity: { duration: 1, ease: "easeOut" },
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                            boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="relative rounded-full"
                    >
                        <img
                            className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full border-4 border-neutral-800 object-cover"
                            src={IMAGES.PROFILE}
                            alt="Valentin Mathey"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <a
                            href={cvFile}
                            download
                            className="px-6 py-2 text-sm font-medium text-gray-200 border border-gray-400 rounded-full hover:bg-gray-600 hover:brightness-125 hover:scale-105 transition-transform duration-300"
                        >
                            {t("home.downloadCV")}
                        </a>
                    </motion.div>
                </div>

                {/* Información */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <motion.h2
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight"
                    >
                        Valentin Mathey
                    </motion.h2>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-400 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium bg-[length:200%_auto] animate-gradient-x"
                    >
                        FullStack Developer
                    </motion.span>
                    <motion.p
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-xl"
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
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-neutral-700 bg-neutral-900/50 rounded-full text-gray-300 hover:text-white hover:border-white transition-all duration-300"
                        >
                            <FaGithub className="text-lg" /> GitHub
                        </motion.a>
                        <motion.a
                            href={LINKS.LINKEDIN}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-blue-900/50 bg-blue-900/10 rounded-full text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                        >
                            <FaLinkedin className="text-lg" /> LinkedIn
                        </motion.a>
                        <motion.a
                            href={`mailto:${CONTACT.email}`}
                            className="flex items-center gap-2 px-4 py-2 border border-pink-900/50 bg-pink-900/10 rounded-full text-pink-400 hover:bg-pink-600 hover:text-white transition-all duration-300"
                        >
                            <FaEnvelope className="text-lg" /> {CONTACT.email}
                        </motion.a>
                    </motion.div>
                </div>
                </div>
            </div>
        </section>
    );
};

