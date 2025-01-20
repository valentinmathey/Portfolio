import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa los archivos de traducción
import enTranslation from "./locales/en/translation.json";
import esTranslation from "./locales/es/translation.json";
import ptTranslation from "./locales/pt/translation.json";

// Configuración de i18next
i18n.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslation }, // Inglés
        es: { translation: esTranslation }, // Español
        pt: { translation: ptTranslation }, // Portugués
        
    },
    lng: "es", // Idioma predeterminado
    fallbackLng: "en", // Idioma de respaldo si no encuentra traducción
    interpolation: {
        escapeValue: false, // React ya se encarga de escapar las variables
    },
});

export default i18n;
