import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "../constants";
import { BiX, BiMenu } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { t, i18n } = useTranslation();
    const menuRef = useRef(null);

    const isManualScrolling = useRef(false);

    // Detectar scroll para efecto glassmorphism

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setScrolled(currentScroll > 50);

            // Failsafe: Si estamos muy arriba, forzamos "home"
            if (currentScroll < 100 && !isManualScrolling.current) {
                setActiveSection("home");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll Spy para detectar sección activa
    useEffect(() => {
        const sections = ["home", "about", "technologies", "experience", "projects", "contact"];
        
        const observer = new IntersectionObserver(
            (entries) => {
                // Si estamos haciendo scroll manual (click), ignoramos el observer
                if (isManualScrolling.current) return;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        // Buscamos qué sección corresponde a este ID active
                        // Iteramos sobre las secciones para ver cuál genera este ID
                        const matchedSection = sections.find(section => 
                            t(`navbar.${section}`).toLowerCase().replace(/\s+/g, "-") === id
                        );
                        if (matchedSection) {
                            setActiveSection(matchedSection);
                        }
                    }
                });
            },
            { 
               rootMargin: "-35% 0px -35% 0px", // Widen the scanline to detection easier
               threshold: 0 
            }
        );

        sections.forEach((item) => {
            const id = t(`navbar.${item}`).toLowerCase().replace(/\s+/g, "-");
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [t]);


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

    const scrollToSection = (id, originalKey) => {
        isManualScrolling.current = true;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveSection(originalKey);
        }
        setIsOpen(false);
        // Reactivar el observer después de la animación de scroll
        setTimeout(() => {
            isManualScrolling.current = false;
        }, 1000);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const menuWrapperVariants = {
        open: { 
            x: 0, 
            transition: { 
                type: "spring", stiffness: 70, damping: 20,
                staggerChildren: 0.07,
            } 
        },
        closed: { 
            x: "100%", 
            transition: { 
                type: "tween", duration: 0.4,
                staggerChildren: 0.05,
                staggerDirection: -1 ,
                when: "afterChildren"
            } 
        },
    };

    const menuItemVariants = {
        open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } },
        closed: { opacity: 0, x: 50, transition: { duration: 0.1 } }
    };

    const iconVariants = {
        open: { rotate: 90, transition: { duration: 0.3 } },
        closed: { rotate: 0, transition: { duration: 0.3 } },
    };

    const navItems = ["home", "about", "technologies", "experience", "projects", "contact"];

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 px-4 sm:px-8 lg:px-16 flex items-center justify-between ${
                scrolled 
                ? "bg-neutral-950/70 backdrop-blur-md py-4 shadow-xl" 
                : "bg-transparent py-6"
            }`}
        >
            {/* Logo */}
            <motion.div className="flex flex-shrink-0 items-center z-[1001] relative">
                <img
                    className="w-16 sm:w-20"
                    src={IMAGES.LOGO}
                    alt="Logo de Valentin Mathey"
                    aria-label="Logo de Valentin Mathey"
                />
            </motion.div>

            {/* Menú Desktop */}
            <div className="hidden lg:flex items-center space-x-2">
                {navItems.map((item) => {
                    const id = t(`navbar.${item}`).toLowerCase().replace(/\s+/g, "-");
                    const isActive = activeSection === item;

                    return (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id, item)}
                            className={`relative px-4 py-2 text-lg rounded-full transition-colors duration-300 ${
                                isActive 
                                ? "text-white" 
                                : "text-gray-400 hover:text-white before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-purple-500 before:transition-all before:duration-300 hover:before:w-full"
                            }`}
                            aria-label={`Navegar a ${t(`navbar.${item}`)}`}
                        >
                            {/* Píldora de fondo animada para el item ACTIVO */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeSectionPill"
                                    className="absolute inset-0 bg-neutral-800/80 rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            {/* Texto por encima de todo */}
                            <span className="relative z-10">{t(`navbar.${item}`)}</span>
                        </button>
                    );
                })}
            </div>

            {/* Botones de cambio de idioma Desktop */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
                <button onClick={() => changeLanguage("es")} className="text-gray-300 hover:text-white hover:brightness-110 transition-colors duration-300">
                    <img src={IMAGES.FLAGS.ARGENTINA} alt="Argentina Flag" className="w-8 h-8 object-contain" />
                </button>
                <button onClick={() => changeLanguage("en")} className="text-gray-300 hover:text-white hover:brightness-110 transition-colors duration-300">
                    <img src={IMAGES.FLAGS.USA} alt="USA Flag" className="w-8 h-8 object-contain" />
                </button>
                <button onClick={() => changeLanguage("pt")} className="text-gray-300 hover:text-white hover:brightness-110 transition-colors duration-300">
                    <img src={IMAGES.FLAGS.BRASIL} alt="Brazil Flag" className="w-8 h-8 object-contain" />
                </button>
            </div>

            {/* Menú Mobile Icon */}
            <motion.div
                className="text-4xl cursor-pointer z-[1001] lg:hidden flex items-center text-white relative"
                onClick={() => setIsOpen(!isOpen)}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={iconVariants}
            >
                {isOpen ? <BiX /> : <BiMenu />}
            </motion.div>

            {/* Menú Desplegable Mobile Overlay */}
            <motion.div
                ref={menuRef}
                className="fixed inset-0 h-screen w-screen bg-neutral-950/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-12 z-[1000]"
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuWrapperVariants}
            >
                 {/* Decorative background glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

                <div className="flex flex-col items-center gap-8">
                    {navItems.map((item) => {
                        const id = t(`navbar.${item}`).toLowerCase().replace(/\s+/g, "-");
                        const isActive = activeSection === item;

                        return (
                            <motion.button
                                key={id}
                                variants={menuItemVariants}
                                onClick={() => scrollToSection(id, item)}
                                className={`text-4xl font-light tracking-wide transition-all duration-300 ${
                                    isActive 
                                    ? "font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent transform scale-105" 
                                    : "text-gray-400 hover:text-white"
                                }`}
                                aria-label={`Navegar a ${t(`navbar.${item}`)}`}
                            >
                                {t(`navbar.${item}`)}
                            </motion.button>
                        );
                    })}
                </div>

                {/* Mobile Language Selector */}
                <motion.div variants={menuItemVariants} className="flex gap-8 mt-4 pt-8 border-t border-purple-900/30 w-1/2 justify-center">
                    <button onClick={() => changeLanguage("es")} className="hover:scale-110 transition-transform duration-200">
                         <img src={IMAGES.FLAGS.ARGENTINA} alt="Argentina" className="w-10 h-10 object-contain drop-shadow-lg" />
                    </button>
                    <button onClick={() => changeLanguage("en")} className="hover:scale-110 transition-transform duration-200">
                        <img src={IMAGES.FLAGS.USA} alt="USA" className="w-10 h-10 object-contain drop-shadow-lg" />
                    </button>
                    <button onClick={() => changeLanguage("pt")} className="hover:scale-110 transition-transform duration-200">
                        <img src={IMAGES.FLAGS.BRASIL} alt="Brasil" className="w-10 h-10 object-contain drop-shadow-lg" />
                    </button>
                </motion.div>
            </motion.div>
        </nav>
    );
};
