'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Shield, Zap, Award } from 'lucide-react';
import { COLORS } from '@/app/styles/theme';

interface HeroSectionProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ colors }) => {
    const { t } = useTranslation();

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse-slow"
                    style={{ background: COLORS.primary }}
                />
                <div
                    className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse-slow"
                    style={{ background: COLORS.primaryHover, animationDelay: '2s' }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left Content - 6 columns */}
                    <div className="lg:col-span-6 space-y-6 sm:space-y-7">

                        {/* Heading */}
                        <div className="space-y-3 sm:space-y-4">
                            <h1 className={`${colors.text} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight`}>
                                {t('hero.title')}
                            </h1>
                            <p className={`${colors.textSec} text-base sm:text-lg md:text-xl leading-relaxed`}>
                                {t('hero.subtitle')}
                            </p>
                        </div>

                        {/* Description */}
                        <p className={`${colors.textSec} text-sm sm:text-base leading-relaxed max-w-xl`}>
                            {t('hero.description')}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <a
                                href="#contact"
                                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 font-semibold text-sm sm:text-base text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                style={{
                                    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                }}
                            >
                                <span className="relative z-10">{t('hero.cta')}</span>
                                <ArrowRight className="relative z-10 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                            </a>

                            <a
                                href="#services"
                                className={`inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 ${colors.card} border-2 ${colors.borderLight} font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-105 ${colors.cardHover} backdrop-blur-sm`}
                            >
                                {t('hero.learnMore')}
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-lg" style={{ backgroundColor: `${COLORS.primary}10` }}>
                                    <Shield className="w-4 h-4" style={{ color: COLORS.primary }} strokeWidth={2} />
                                </div>
                                <span className={`${colors.text} text-xs sm:text-sm font-medium`}>{t('hero.trustBadges.secure')}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-lg" style={{ backgroundColor: `${COLORS.primary}10` }}>
                                    <Zap className="w-4 h-4" style={{ color: COLORS.primary }} strokeWidth={2} />
                                </div>
                                <span className={`${colors.text} text-xs sm:text-sm font-medium`}>{t('hero.trustBadges.fastDelivery')}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-lg" style={{ backgroundColor: `${COLORS.primary}10` }}>
                                    <Award className="w-4 h-4" style={{ color: COLORS.primary }} strokeWidth={2} />
                                </div>
                                <span className={`${colors.text} text-xs sm:text-sm font-medium`}>{t('hero.trustBadges.expertTeam')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - 6 columns */}
                    <div className="lg:col-span-6 relative order-first lg:order-last">
                        <div className="relative aspect-square max-w-md lg:max-w-2xl mx-auto">

                            {/* Glowing Background */}
                            <div
                                className="absolute inset-0 rounded-full opacity-30 blur-3xl animate-pulse-slow"
                                style={{ background: `radial-gradient(circle, ${COLORS.primary}40, transparent)` }}
                            />

                            {/* Main Illustration */}
                            <svg
                                viewBox="0 0 500 500"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full relative z-10"
                            >
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8"/>
                                        <stop offset="100%" stopColor={COLORS.primaryHover} stopOpacity="0.6"/>
                                    </linearGradient>
                                    <filter id="blur">
                                        <feGaussianBlur stdDeviation="4"/>
                                    </filter>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                        <feMerge>
                                            <feMergeNode in="coloredBlur"/>
                                            <feMergeNode in="SourceGraphic"/>
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Central Circle Design */}
                                <g className="tech-circle">
                                    <circle cx="250" cy="250" r="140" fill="none" stroke={COLORS.primary} strokeWidth="1" opacity="0.1"/>
                                    <circle cx="250" cy="250" r="120" fill="none" stroke={COLORS.primary} strokeWidth="1" opacity="0.15"/>
                                    <circle cx="250" cy="250" r="100" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.2"/>
                                </g>

                                {/* Code Symbol - Center */}
                                <g className="code-symbol" filter="url(#glow)">
                                    <path d="M 220 230 L 200 250 L 220 270" stroke="url(#grad1)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                    <path d="M 280 230 L 300 250 L 280 270" stroke="url(#grad1)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                    <line x1="265" y1="230" x2="235" y2="270" stroke="url(#grad1)" strokeWidth="6" strokeLinecap="round"/>
                                </g>

                                {/* Floating Tech Icons */}

                                {/* Cloud - Top */}
                                <g className="float-1">
                                    <circle cx="250" cy="100" r="35" fill={colors.card} stroke={COLORS.primary} strokeWidth="2" opacity="0.8" filter="url(#glow)"/>
                                    <path d="M 235 105 Q 235 100 238 98 Q 240 95 244 95 Q 246 92 250 94 Q 254 94 256 98 Q 259 98 261 101 Q 261 106 256 106 L 238 106 Q 235 106 235 105 Z" fill={COLORS.primary} opacity="0.6"/>
                                </g>

                                {/* Gear - Right */}
                                <g className="float-2">
                                    <circle cx="380" cy="250" r="35" fill={colors.card} stroke={COLORS.primary} strokeWidth="2" opacity="0.8" filter="url(#glow)"/>
                                    <circle cx="380" cy="250" r="12" fill="none" stroke={COLORS.primary} strokeWidth="3" opacity="0.6"/>
                                    <circle cx="380" cy="235" r="4" fill={COLORS.primary} opacity="0.6"/>
                                    <circle cx="395" cy="250" r="4" fill={COLORS.primary} opacity="0.6"/>
                                    <circle cx="380" cy="265" r="4" fill={COLORS.primary} opacity="0.6"/>
                                    <circle cx="365" cy="250" r="4" fill={COLORS.primary} opacity="0.6"/>
                                </g>

                                {/* Database - Bottom */}
                                <g className="float-3">
                                    <circle cx="250" cy="400" r="35" fill={colors.card} stroke={COLORS.primary} strokeWidth="2" opacity="0.8" filter="url(#glow)"/>
                                    <ellipse cx="250" cy="395" rx="15" ry="5" fill={COLORS.primary} opacity="0.4"/>
                                    <rect x="235" y="395" width="30" height="15" fill={COLORS.primary} opacity="0.3"/>
                                    <ellipse cx="250" cy="410" rx="15" ry="5" fill={COLORS.primary} opacity="0.5"/>
                                </g>

                                {/* Lock - Left */}
                                <g className="float-4">
                                    <circle cx="120" cy="250" r="35" fill={colors.card} stroke={COLORS.primary} strokeWidth="2" opacity="0.8" filter="url(#glow)"/>
                                    <rect x="110" y="250" width="20" height="15" rx="2" fill={COLORS.primary} opacity="0.5"/>
                                    <path d="M 113 250 L 113 245 Q 113 240 120 240 Q 127 240 127 245 L 127 250" stroke={COLORS.primary} strokeWidth="2.5" fill="none" opacity="0.6"/>
                                </g>

                                {/* Connecting Lines */}
                                <g className="connections" opacity="0.15">
                                    <line x1="250" y1="135" x2="250" y2="170" stroke={COLORS.primary} strokeWidth="2" strokeDasharray="5 5"/>
                                    <line x1="345" y1="250" x2="310" y2="250" stroke={COLORS.primary} strokeWidth="2" strokeDasharray="5 5"/>
                                    <line x1="250" y1="365" x2="250" y2="330" stroke={COLORS.primary} strokeWidth="2" strokeDasharray="5 5"/>
                                    <line x1="155" y1="250" x2="190" y2="250" stroke={COLORS.primary} strokeWidth="2" strokeDasharray="5 5"/>
                                </g>

                                {/* Orbiting Dots */}
                                <circle cx="250" cy="80" r="4" fill={COLORS.primary} opacity="0.6" className="orbit-dot-1"/>
                                <circle cx="420" cy="250" r="4" fill={COLORS.primary} opacity="0.6" className="orbit-dot-2"/>
                                <circle cx="250" cy="420" r="4" fill={COLORS.primary} opacity="0.6" className="orbit-dot-3"/>
                                <circle cx="80" cy="250" r="4" fill={COLORS.primary} opacity="0.6" className="orbit-dot-4"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% {
                        opacity: 0.15;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.25;
                        transform: scale(1.05);
                    }
                }

                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }

                @keyframes orbit {
                    0% {
                        opacity: 0.3;
                    }
                    50% {
                        opacity: 0.8;
                    }
                    100% {
                        opacity: 0.3;
                    }
                }

                .animate-pulse-slow {
                    animation: pulse-slow 6s ease-in-out infinite;
                }

                /* Central circle rotation */
                .tech-circle {
                    transform-origin: center;
                    animation: spin 60s linear infinite;
                }

                /* Code symbol pulse */
                .code-symbol {
                    animation: pulse-slow 3s ease-in-out infinite;
                }

                /* Floating tech icons */
                .float-1 {
                    animation: float 6s ease-in-out infinite;
                }

                .float-2 {
                    animation: float 7s ease-in-out infinite 1s;
                }

                .float-3 {
                    animation: float 8s ease-in-out infinite 2s;
                }

                .float-4 {
                    animation: float 6.5s ease-in-out infinite 1.5s;
                }

                /* Orbiting dots */
                .orbit-dot-1,
                .orbit-dot-2,
                .orbit-dot-3,
                .orbit-dot-4 {
                    animation: orbit 3s ease-in-out infinite;
                }

                .orbit-dot-2 {
                    animation-delay: 0.75s;
                }

                .orbit-dot-3 {
                    animation-delay: 1.5s;
                }

                .orbit-dot-4 {
                    animation-delay: 2.25s;
                }

                /* Connection lines subtle pulse */
                .connections {
                    animation: orbit 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};