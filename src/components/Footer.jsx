import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-neutral-950 border-t border-neutral-900/50 py-12 relative overflow-hidden">
             {/* Glow effect at bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[100px] bg-purple-600/10 blur-[80px] -z-10 pointer-events-none" />

            <div className="flex flex-col items-center gap-6">
                
                {/* Ubicación */}
                <p
                    className="text-lg md:text-xl font-medium text-gray-300 flex items-center gap-2 bg-neutral-900/50 px-6 py-2 rounded-full border border-neutral-800 backdrop-blur-sm"
                    aria-label={t("footer.location")}
                >
                    <FaMapMarkerAlt className="text-purple-500" />
                    {t("footer.location")}
                </p>

                {/* Derechos */}
                <div className="flex flex-col items-center text-sm text-neutral-500 font-light tracking-wider gap-2">
                    <p>
                        {t("footer.rights", { year: new Date().getFullYear() })}
                    </p>
                    <p className="flex items-center gap-1 text-neutral-600 hover:text-purple-400 transition-colors duration-300">
                        Made with <FaHeart className="text-red-500 animate-pulse" /> by Valentin Mathey
                    </p>
                </div>
            </div>
        </footer>
    );
};
