'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Rocket, BookOpen } from 'lucide-react';
import { COLORS, BORDER_RADIUS } from '@/app/styles/theme';

interface AboutSectionProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ colors }) => {
    const { t } = useTranslation();

    const stats = t('about.stats', { returnObjects: true }) as Array<{
        value: string;
        label: string;
    }>;

    const cards = [
        {
            icon: Target,
            title: t('about.mission.title'),
            text: t('about.mission.text'),
            gradient: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`
        },
        {
            icon: Rocket,
            title: t('about.vision.title'),
            text: t('about.vision.text'),
            gradient: `linear-gradient(135deg, ${COLORS.primaryHover}, ${COLORS.primary})`
        },
        {
            icon: BookOpen,
            title: t('about.history.title'),
            text: t('about.history.text'),
            gradient: `linear-gradient(135deg, ${COLORS.primary}dd, ${COLORS.primaryHover}dd)`
        }
    ];

    return (
        <section id="about" className="py-20 px-0 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span style={{ color: colors.text }}>{t('about.title')}</span>
                    </h2>
                </div>

                {/* Mission, Vision, History Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {cards.map((card, index) => {
                        const IconComponent = card.icon;

                        return (
                            <div
                                key={index}
                                className={`${colors.card} backdrop-blur-sm p-6 ${BORDER_RADIUS.lg} border flex flex-col`}
                                style={{
                                    borderColor: `${COLORS.primary}20`,
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                                }}
                            >
                                {/* Icon Container */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                                        style={{
                                            background: card.gradient
                                        }}
                                    >
                                        <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                                    </div>
                                    <h3 className="text-xl font-bold" style={{ color: colors.text }}>
                                        {card.title}
                                    </h3>
                                </div>

                                {/* Text Content */}
                                <div className="flex-1">
                                    <p className={`${colors.textSec} leading-relaxed text-sm`}>
                                        {card.text}
                                    </p>
                                </div>

                                {/* Bottom accent line */}
                                <div
                                    className="mt-4 h-1 w-full rounded-full"
                                    style={{
                                        background: card.gradient,
                                        opacity: 0.2
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`${colors.card} backdrop-blur-sm p-5 sm:p-6 ${BORDER_RADIUS.lg} border text-center`}
                            style={{
                                borderColor: `${COLORS.primary}30`,
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                            }}
                        >
                            <div
                                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
                                style={{ color: COLORS.primary }}
                            >
                                {stat.value}
                            </div>
                            <div className={`${colors.textSec} text-xs sm:text-sm font-medium uppercase tracking-wide`}>
                                {stat.label}
                            </div>

                            {/* Subtle bottom accent */}
                            <div
                                className="mt-4 mx-auto h-1 w-12 rounded-full"
                                style={{ backgroundColor: `${COLORS.primary}40` }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};