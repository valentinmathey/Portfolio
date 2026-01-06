import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
    // Estado para controlar si el botón debe ser visible
    const [isVisible, setIsVisible] = useState(false);
    // Estado para manejar el efecto visual al hacer clic en el botón
    const [isClicked, setIsClicked] = useState(false);

    // Controla la visibilidad del botón según la posición del scroll
    const handleScroll = () => {
        // Muestra el botón si el usuario hace scroll más allá de 300px
        setIsVisible(window.scrollY > 300);
    };

    // Lleva al usuario al inicio de la página con un efecto suave
    const scrollToTop = () => {
        setIsClicked(true); // Activa el estado de clic para el efecto visual
        window.scrollTo({ top: 0, behavior: "smooth" }); // Desplazamiento al inicio

        // Restaura el estado después de 500ms para volver al color original
        setTimeout(() => setIsClicked(false), 500);
    };

    // Agrega el listener de scroll al montar el componente y lo elimina al desmontar
    useEffect(() => {
        window.addEventListener("scroll", handleScroll); // Escucha el scroll
        return () => window.removeEventListener("scroll", handleScroll); // Limpia el evento
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className={`p-2 md:p-3 rounded-full shadow-2xl backdrop-blur-md transition-colors flex items-center justify-center w-10 h-10 md:w-14 md:h-14 border border-purple-400/30 ${
                        isClicked ? "bg-purple-500 text-white" : "bg-purple-600/90 text-white hover:bg-purple-500"
                    }`}
                >
                    {/* Icono de flecha hacia arriba */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-5 h-5 md:w-6 md:h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
