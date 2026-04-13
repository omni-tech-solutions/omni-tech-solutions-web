import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import bgTranslations from '@/app/locales/bg/translation.json';
import enTranslations from '@/app/locales/en/translation.json';
import trTranslations from '@/app/locales/tr/translation.json';

const resources = {
    bg: { translation: bgTranslations },
    en: { translation: enTranslations },
    tr: { translation: trTranslations },
};

// Проверка дали сме на клиента
const isBrowser = typeof window !== 'undefined';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'bg',
        fallbackLng: 'bg',
        debug: false,

        interpolation: {
            escapeValue: false,
        },

        react: {
            useSuspense: false,
        },
    });

// Persist language changes - only on client
if (isBrowser) {
    i18n.on('languageChanged', (lng) => {
        localStorage.setItem('i18nextLng', lng);
    });
}

export default i18n;