import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "../constants";
import { BiX, BiMenu } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const menuRef = useRef(null); // Referencia para el menú desplegable

    // Bloquear el scroll cuando el menú está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);


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

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const menuVariants = {
        open: { x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
        closed: { x: "100%", transition: { duration: 0.5, ease: "easeInOut" } },
    };

    const iconVariants = {
        open: { rotate: 0, transition: { duration: 0.2, ease: "easeInOut" } },
        closed: { rotate: 180, transition: { duration: 0.5, ease: "easeInOut" } },
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
                    className="text-gray-300 hover:text-white hover:brightness-110 transition-colors duration-300"
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
                    className="text-gray-300 hover:text-white hover:brightness-110 transition-colors duration-300"
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
                className="top-4 right-4 text-4xl cursor-pointer z-[80] lg:hidden flex items-center"
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
                className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-90 text-white flex flex-col items-start gap-6 p-6 pt-12 z-[70]"
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
                            className="text-2xl text-gray-300 hover:text-white transition-colors duration-300 w-full text-center mt-4"
                            aria-label={`Navegar a ${t(`navbar.${item}`)}`}
                        >
                            {t(`navbar.${item}`)}
                        </button>
                    );
                })}

                {/* Botones de idioma en Mobile */}
                <div className="flex gap-10 mt-4 w-full justify-center items-center">
                    <button
                        onClick={() => changeLanguage("es")}
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                        aria-label="Cambiar a español"
                    >
                        <img
                            src={IMAGES.FLAGS.ARGENTINA}
                            alt="Argentina Flag"
                            className="w-10 h-10"
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
                            className="w-10 h-10"
                        />
                    </button>
                </div>
            </motion.div>
        </nav>
    );
};
