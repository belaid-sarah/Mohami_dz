// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import arTranslations from "../Translation/ar.json";
import frTranslations from "../Translation/fr.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
        options: {
          interpolation: {
            escapeValue: false,
          },
          lng: 'ar',
          direction: 'rtl', // Set direction to RTL for Arabic
        },
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  });

export default i18n;