'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layers } from 'lucide-react';
import { COLORS } from '@/app/styles/theme';
import { TECHNOLOGIES, TECHNOLOGY_CATEGORIES, type TechnologyCategory } from '@/app/config/technologies';

interface TechnologiesSectionProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
    theme: 'dark' | 'light';
}

type Category = 'all' | TechnologyCategory;

// Add or remove entries in app/config/technologies.ts; the category filter below adjusts automatically.
const technologies = TECHNOLOGIES;

const categoryKeys: Category[] = ['all', ...TECHNOLOGY_CATEGORIES];

export const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({ colors, theme }) => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState<Category>('all');

    const filtered = activeCategory === 'all'
        ? technologies
        : technologies.filter(tech => tech.category === activeCategory);

    return (
        <section className="relative py-20 px-0 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-[0.05]"
                    style={{ background: `radial-gradient(circle, ${COLORS.primary}, transparent 65%)` }}
                />
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `radial-gradient(circle, ${theme === 'dark' ? '#fff' : '#000'} 1px, transparent 1px)`,
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-12">
                    <div
                        className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
                        style={{
                            backgroundColor: `${COLORS.primary}15`,
                            border: `1px solid ${COLORS.primary}33`,
                            color: COLORS.primary,
                        }}
                    >
                        <Layers className="w-3.5 h-3.5" strokeWidth={2} />
                        {t('technologies.badge')}
                    </div>

                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${colors.text}`}>
                        {t('technologies.title')}
                    </h2>

                    <div
                        className="w-14 h-1 rounded-full mt-5 mb-5"
                        style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
                    />

                    <p className={`${colors.textSec} text-base sm:text-lg max-w-2xl`}>
                        {t('technologies.subtitle')}
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4">
                    {categoryKeys.map((cat) => {
                        const isActive = activeCategory === cat;

                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                aria-pressed={isActive}
                                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f9a427] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                                    isActive
                                        ? 'text-white border-transparent shadow-[0_8px_20px_-8px_rgba(249,164,39,0.8)]'
                                        : `${colors.textSec} ${colors.borderLight} hover:border-[#f9a427] hover:text-[#f9a427]`
                                }`}
                                style={isActive ? {
                                    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                } : undefined}
                            >
                                {t(`technologies.categories.${cat}`)}
                            </button>
                        );
                    })}
                </div>

                {/* Result count */}
                <p className={`text-center text-xs sm:text-sm ${colors.textTer} mb-10`}>
                    {filtered.length} {t('technologies.countLabel')}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {filtered.map((tech, index) => (
                        <div
                            key={tech.name}
                            className={`omni-reveal group flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 cursor-default hover:-translate-y-1 hover:border-[#f9a427] hover:shadow-[0_12px_28px_-14px_rgba(249,164,39,0.6)] ${
                                theme === 'dark'
                                    ? 'bg-zinc-900/60 hover:bg-zinc-800/80 border-zinc-700'
                                    : `${colors.card} ${colors.border} ${colors.cardHover}`
                            }`}
                            style={{ animationDelay: `${Math.min(index * 25, 400)}ms` }}
                        >
                            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                                {tech.lucideIcon ? (
                                    <tech.lucideIcon
                                        className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                                        style={{ color: COLORS.primary }}
                                        strokeWidth={1.6}
                                    />
                                ) : (
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className={`w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110 ${
                                            theme === 'dark' && tech.invertInDark ? 'invert' : ''
                                        }`}
                                        loading="lazy"
                                    />
                                )}
                            </div>
                            <span className={`${colors.text} text-sm font-medium truncate`}>
                                {tech.nameKey ? t(tech.nameKey) : tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
