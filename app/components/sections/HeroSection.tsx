'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { COLORS, CONTAINER } from '@/app/styles/theme';

interface HeroSectionProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

/**
 * Homepage hero, kept deliberately plain: what we do, one sentence, two actions.
 * Everything else (services, prices, facts) lives in the sections below.
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ colors }) => {
    const { t } = useTranslation();

    return (
        <section id="home" className="relative flex items-center min-h-[80svh] pt-20">
            <div className={`omni-reveal ${CONTAINER} w-full py-20 sm:py-28 text-center`}>
                <p className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: COLORS.primary }}>
                    {t('hero.badge')}
                </p>

                <h1 className={`max-w-3xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${colors.text}`}>
                    <span style={{ color: COLORS.primary }}>{t('hero.titleLead')}</span>{' '}
                    {t('hero.titleRest')}
                </h1>

                <p className={`mt-6 text-lg sm:text-xl leading-relaxed ${colors.textSec} max-w-2xl mx-auto`}>
                    {t('hero.description')}
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href="#contact"
                        className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-white rounded-xl transition-colors duration-200 hover:bg-[#e85d0f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b1a] focus-visible:ring-offset-2"
                        style={{ backgroundColor: COLORS.primary }}
                    >
                        {t('hero.cta')}
                        <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
                    </a>
                    <a
                        href="#services"
                        className={`inline-flex items-center justify-center px-7 py-3.5 font-semibold rounded-xl border ${colors.border} ${colors.text} transition-colors duration-200 hover:border-[#ff6b1a] hover:text-[#ff6b1a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b1a] focus-visible:ring-offset-2`}
                    >
                        {t('hero.learnMore')}
                    </a>
                </div>
            </div>
        </section>
    );
};
