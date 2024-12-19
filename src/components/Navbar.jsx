import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "../constants";
import { BiX, BiMenu } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const menuRef = useRef(null); // Referencia para el menú desplegable

    // Cierra el menú si haces clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Cierra el menú al redimensionar la pantalla
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsOpen(false);
    };

    const menuVariants = {
        open: { x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
        closed: { x: "100%", transition: { duration: 0.5, ease: "easeInOut" } },
    };

    const iconVariants = {
        open: { rotate: 0, transition: { duration: 0.2, ease: "easeInOut" } },
        closed: { rotate: 180, transition: { duration: 0.5, ease: "easeInOut" } },
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="mb-10 lg:mb-16 flex items-center justify-between mt-4 px-4 sm:px-8 lg:px-16">
            {/* Logo con etiqueta aria */}
            <motion.div className="flex flex-shrink-0 items-center">
                <img
                    className="w-16 sm:w-20"
                    src={IMAGES.LOGO}
                    alt="Logo de Valentin Mathey"
                    aria-label="Logo de Valentin Mathey"
                />
            </motion.div>

            {/* Menú Desktop */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {["home", "about", "technologies", "experience", "projects", "contact"].map((item) => {
                    const id = t(`navbar.${item}`).toLowerCase().replace(/\s+/g, "-");

                    return (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className="relative text-lg xl:text-2xl text-gray-300 hover:text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
                            aria-label={`Navegar a ${t(`navbar.${item}`)}`}
                        >
                            {t(`navbar.${item}`)}
                        </button>
                    );
                })}
            </div>

            {/* Botones de cambio de idioma */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-xl md:text-xl xl:text-2xl">
                <button
                    onClick={() => changeLanguage("es")}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                    aria-label="Cambiar a español"
                >
                    <img
                        src={IMAGES.FLAGS.ARGENTINA}
                        alt="Argentina Flag"
                        className="md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
                    />
                </button>
                <button
                    onClick={() => changeLanguage("en")}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                    aria-label="Cambiar a inglés"
                >
                    <img
                        src={IMAGES.FLAGS.USA}
                        alt="USA Flag"
                        className="md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
                    />
                </button>
            </div>

            {/* Menú Mobile */}
            <motion.div
                className="block lg:hidden text-3xl cursor-pointer z-50 relative"
                onClick={() => setIsOpen(!isOpen)}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={iconVariants}
            >
                {isOpen ? <BiX /> : <BiMenu />}
            </motion.div>

            {/* Menú Desplegable Mobile */}
            <motion.div
                ref={menuRef} // Asigna el ref aquí
                className="fixed top-0 right-0 h-full w-2/3 bg-black text-white flex flex-col items-start gap-6 p-6 pt-12 z-40"
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
            >
                {["home", "about", "technologies", "experience", "projects", "contact"].map((item) => {
                    const id = t(`navbar.${item}`).toLowerCase().replace(/\s+/g, "-");

                    return (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className="text-xl text-gray-300 hover:text-white transition-colors duration-300"
                            aria-label={`Navegar a ${t(`navbar.${item}`)}`}
                        >
                            {t(`navbar.${item}`)}
                        </button>
                    );
                })}

                {/* Botones de idioma en Mobile */}
                <div className="flex gap-5 mt-4">
                    <button
                        onClick={() => changeLanguage("es")}
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                        aria-label="Cambiar a español"
                    >
                        <img
                            src={IMAGES.FLAGS.ARGENTINA}
                            alt="Argentina Flag"
                            className="w-7 h-7"
                        />
                    </button>
                    <button
                        onClick={() => changeLanguage("en")}
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                        aria-label="Cambiar a inglés"
                    >
                        <img
                            src={IMAGES.FLAGS.USA}
                            alt="USA Flag"
                            className="w-7 h-7"
                        />
                    </button>
                </div>
            </motion.div>
        </nav>
    );
};
