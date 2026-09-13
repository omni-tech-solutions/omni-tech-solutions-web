'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { COLORS, CONTAINER } from '@/app/styles/theme';

interface AboutSectionProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

interface AboutStat {
    value: string;
    label: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ colors }) => {
    const { t } = useTranslation();
    const stats = t('about.stats', { returnObjects: true }) as AboutStat[];

    return (
        <section id="about" className="py-20 sm:py-24">
            <div className={`${CONTAINER} text-center`}>
                <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: COLORS.primary }}>
                    {t('nav.about')}
                </p>
                <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${colors.text}`}>
                    {t('about.title')}
                </h2>
                <p className={`mt-5 text-lg leading-relaxed ${colors.textSec} max-w-2xl mx-auto`}>
                    {t('about.history.text')}
                </p>

                {Array.isArray(stats) && (
                    <div className={`mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 pt-10 border-t ${colors.borderLight}`}>
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <div className={`text-xl font-bold ${colors.text}`}>{stat.value}</div>
                                <div className={`mt-1 text-sm ${colors.textTer}`}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
