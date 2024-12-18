import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IMAGES, LINKS } from "../constants";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { BiX, BiMenu } from "react-icons/bi";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Cierra el menú al redimensionar la pantalla
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
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

    return (
        <nav className="mb-10 lg:mb-16 flex items-center justify-between mt-4 px-4 sm:px-8 lg:px-16">
            {/* Logo */}
            <motion.div className="flex flex-shrink-0 items-center">
                <img className="w-16 sm:w-20" src={IMAGES.LOGO} alt="logo" />
            </motion.div>

            {/* Menú Desktop */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {["inicio", "sobre Mi", "Tecnologias", "experiencia", "proyectos", "contacto"].map((item) => {
                    const id = item.toLowerCase().replace(/\s+/g, "-");
                    return (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className="relative text-lg xl:text-2xl text-gray-400 hover:text-white transition-all duration-300 
                            before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
                            before:bg-white before:transition-all before:duration-300 hover:before:w-full"
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
                    );
                })}
            </div>

            {/* Social Icons Desktop */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-xl xl:text-2xl">
                <a href={LINKS.LINKEDIN} className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FaLinkedin />
                </a>
                <a href={LINKS.GITHUB} className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FaGithub />
                </a>
            </div>

            {/* Menú Mobile */}
            <motion.div
                className="block lg:hidden text-3xl cursor-pointer z-50 relative"
                onClick={() => setIsOpen(!isOpen)}
                animate={isOpen ? "open" : "closed"}
                variants={iconVariants}
            >
                {isOpen ? <BiX /> : <BiMenu />}
            </motion.div>

            {/* Menú Desplegable Mobile */}
            <motion.div
                className="fixed top-0 right-0 h-full w-2/3 bg-black text-white flex flex-col items-start gap-6 p-6 pt-12 z-40"
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
            >
                {["inicio", "sobre Mi", "tecnologias", "experiencia", "proyectos", "contacto"].map((item) => {
                    const id = item.toLowerCase().replace(/\s+/g, "-");
                    return (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className="text-xl text-gray-400 hover:text-white transition-colors duration-300"
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
                    );
                })}
                {/* Redes Sociales */}
                <div className="flex gap-4 mt-4">
                    <a href={LINKS.LINKEDIN} className="text-gray-400 hover:text-white text-3xl">
                        <FaLinkedin />
                    </a>
                    <a href={LINKS.GITHUB} className="text-gray-400 hover:text-white text-3xl">
                        <FaGithub />
                    </a>
                </div>
            </motion.div>
        </nav>
    );
};
