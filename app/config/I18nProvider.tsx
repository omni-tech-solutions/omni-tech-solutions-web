'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/app/config/i18n';

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Зареждане на запазения език от localStorage
        const savedLang = localStorage.getItem('i18nextLng');
        if (savedLang && i18n.language !== savedLang) {
            i18n.changeLanguage(savedLang).then(() => {
                setIsReady(true);
            });
        } else {
            setIsReady(true);
        }
    }, []);

    if (!isReady) {
        // Показваме празен екран докато зарежда езика
        return null;
    }

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}