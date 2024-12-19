import { useEffect, useState } from "react";

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
        isVisible && ( // Solo renderiza el botón si es visible
            <button
                onClick={scrollToTop} // Acción al hacer clic
                className={`fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-lg transition-all flex items-center justify-center w-12 h-12 ${isClicked // Cambia el estilo del botón según el estado
                        ? "bg-purple-400 text-white" // Estilo cuando se hace clic
                        : "bg-purple-600 text-white hover:bg-purple-500" // Estilo normal y hover
                    }`}
            >
                {/* Icono de flecha hacia arriba */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 15l7-7 7 7" // Define la forma de la flecha
                    />
                </svg>
            </button>
        )
    );
};

export default ScrollToTop;
