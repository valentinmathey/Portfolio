import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-neutral-900 text-gray-300 py-4 text-center w-full">
            <div className="flex flex-col items-center gap-1">
                {/* Ubicación dinámicamente traducida */}
                <p
                    className="text-lg font-medium text-purple-500 flex items-center gap-2"
                    aria-label={t("footer.location")}
                >
                    <FaMapMarkerAlt className="text-purple-500 text-xl" />
                    {t("footer.location")}
                </p>
                {/* Derechos dinámicamente traducidos */}
                <p className="text-sm text-gray-400">
                    {t("footer.rights", { year: new Date().getFullYear() })}
                </p>
            </div>
        </footer>
    );
};
