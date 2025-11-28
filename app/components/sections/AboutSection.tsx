'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { COLORS, BORDER_RADIUS } from '@/app/styles/theme';

interface AboutSectionProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ colors }) => {
    const { t } = useTranslation();

    return (
        <section id="about" className="relative py-20 px-0 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="absolute top-20 right-20 w-72 h-72 rounded-full" style={{ background: `radial-gradient(circle, ${COLORS.primary}, transparent)` }} />
                <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full" style={{ background: `radial-gradient(circle, ${COLORS.primary}, transparent)` }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span style={{ color: colors.text }}>{t('about.title')}</span>
                    </h2>
                </div>

                {/* Mission, Vision, History Cards with Illustrations */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-10">

                    {/* Mission Card */}
                    <div className="group relative flex">
                        <div
                            className={`${colors.card} backdrop-blur-sm p-8 ${BORDER_RADIUS.lg} border ${colors.border} transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-amber-500 focus-within:shadow-lg focus-within:border-amber-500 flex flex-col w-full`}
                        >
                            {/* Illustration */}
                            <div className="mb-6 flex justify-center">
                                <svg viewBox="0 0 80 80" className="w-20 h-20">
                                    {/* Single circle */}
                                    <circle cx="40" cy="40" r="30" stroke={COLORS.primary} strokeWidth="3" fill="none" opacity="0.6" className="mission-ring"/>

                                    {/* Center dot */}
                                    <circle cx="40" cy="40" r="10" fill={COLORS.primary} opacity="0.9"/>
                                </svg>
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold mb-3 text-center" style={{ color: colors.text }}>
                                {t('about.mission.title')}
                            </h3>
                            <p className={`${colors.textSec} leading-relaxed text-sm text-center flex-1`}>
                                {t('about.mission.text')}
                            </p>

                            {/* Accent bar */}
                            <div className="mt-6 mx-auto h-1 w-16 rounded-full transition-all duration-300 group-hover:w-24" style={{ backgroundColor: COLORS.primary, opacity: 0.6 }} />
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="group relative flex">
                        <div
                            className={`${colors.card} backdrop-blur-sm p-8 ${BORDER_RADIUS.lg} border ${colors.border} transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-amber-500 focus-within:shadow-lg focus-within:border-amber-500 flex flex-col w-full`}
                        >
                            {/* Illustration */}
                            <div className="mb-6 flex justify-center">
                                <svg viewBox="0 0 80 80" className="w-20 h-20">
                                    {/* Simple upward arrow/rocket */}
                                    <path d="M 40 15 L 50 55 L 40 50 L 30 55 Z" fill={COLORS.primary} opacity="0.9" className="rocket-body"/>

                                    {/* Trail lines */}
                                    <line x1="40" y1="55" x2="40" y2="65" stroke={COLORS.primary} strokeWidth="2" opacity="0.5" className="rocket-trail"/>
                                </svg>
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold mb-3 text-center" style={{ color: colors.text }}>
                                {t('about.vision.title')}
                            </h3>
                            <p className={`${colors.textSec} leading-relaxed text-sm text-center flex-1`}>
                                {t('about.vision.text')}
                            </p>

                            {/* Accent bar */}
                            <div className="mt-6 mx-auto h-1 w-16 rounded-full transition-all duration-300 group-hover:w-24" style={{ backgroundColor: COLORS.primary, opacity: 0.6 }} />
                        </div>
                    </div>

                    {/* History Card */}
                    <div className="group relative flex">
                        <div
                            className={`${colors.card} backdrop-blur-sm p-8 ${BORDER_RADIUS.lg} border ${colors.border} transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-amber-500 focus-within:shadow-lg focus-within:border-amber-500 flex flex-col w-full`}
                        >
                            {/* Illustration */}
                            <div className="mb-6 flex justify-center">
                                <svg viewBox="0 0 80 80" className="w-20 h-20">
                                    {/* Vertical line */}
                                    <line x1="40" y1="20" x2="40" y2="60" stroke={COLORS.primary} strokeWidth="3" opacity="0.6"/>

                                    {/* Growing dots */}
                                    <circle cx="40" cy="25" r="5" fill={COLORS.primary} opacity="0.7" className="timeline-dot-1"/>
                                    <circle cx="40" cy="40" r="6" fill={COLORS.primary} opacity="0.8" className="timeline-dot-2"/>
                                    <circle cx="40" cy="55" r="7" fill={COLORS.primary} opacity="0.9" className="timeline-dot-3"/>
                                </svg>
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold mb-3 text-center" style={{ color: colors.text }}>
                                {t('about.history.title')}
                            </h3>
                            <p className={`${colors.textSec} leading-relaxed text-sm text-center flex-1`}>
                                {t('about.history.text')}
                            </p>

                            {/* Accent bar */}
                            <div className="mt-6 mx-auto h-1 w-16 rounded-full transition-all duration-300 group-hover:w-24" style={{ backgroundColor: COLORS.primary, opacity: 0.6 }} />
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                @keyframes pulse-simple {
                    0%, 100% {
                        opacity: 0.6;
                    }
                    50% {
                        opacity: 0.9;
                    }
                }

                @keyframes float-gentle {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-4px);
                    }
                }

                /* Mission */
                .mission-ring {
                    animation: pulse-simple 2s ease-in-out infinite;
                }

                /* Vision rocket */
                .rocket-body {
                    animation: float-gentle 2.5s ease-in-out infinite;
                }

                .rocket-trail {
                    animation: pulse-simple 1.5s ease-in-out infinite;
                }

                /* History timeline */
                .timeline-dot-1,
                .timeline-dot-2,
                .timeline-dot-3 {
                    animation: pulse-simple 2s ease-in-out infinite;
                }

                .timeline-dot-2 {
                    animation-delay: 0.3s;
                }

                .timeline-dot-3 {
                    animation-delay: 0.6s;
                }
            `}</style>
        </section>
    );
};