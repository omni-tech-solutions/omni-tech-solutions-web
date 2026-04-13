'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Award, ChevronDown, Shield, Star, Zap } from 'lucide-react';
import { COLORS } from '@/app/styles/theme';

interface HeroSectionProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ colors }) => {
    const { t } = useTranslation();
    const isDark = colors.text === 'text-zinc-100';

    return (
        <section
            id="home"
            className="relative min-h-[calc(100svh-64px)] sm:min-h-screen flex items-center overflow-hidden"
        >
            {/* Background Orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="hero-orb hero-orb-1 absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full"
                    style={{
                        background: `radial-gradient(circle, ${COLORS.primary}, transparent 70%)`,
                        opacity: isDark ? 0.07 : 0.05,
                        top: '-10%',
                        right: '5%',
                    }}
                />
                <div
                    className="hero-orb hero-orb-2 absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full"
                    style={{
                        background: `radial-gradient(circle, ${COLORS.primaryHover}, transparent 70%)`,
                        opacity: isDark ? 0.06 : 0.04,
                        bottom: '0%',
                        left: '-8%',
                    }}
                />
                <div
                    className="hero-orb hero-orb-3 absolute hidden sm:block w-[350px] h-[350px] rounded-full"
                    style={{
                        background: `radial-gradient(circle, ${COLORS.primary}, transparent 70%)`,
                        opacity: isDark ? 0.04 : 0.03,
                        top: '50%',
                        left: '40%',
                    }}
                />
            </div>

            {/* Dot Grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                }}
            />

            {/* Decorative corner accents */}
            <div
                className="hidden lg:block absolute top-24 right-12 w-20 h-20 pointer-events-none"
                style={{
                    borderTop: `2px solid ${COLORS.primary}20`,
                    borderRight: `2px solid ${COLORS.primary}20`,
                    borderRadius: '0 8px 0 0',
                }}
            />
            <div
                className="hidden lg:block absolute bottom-24 left-12 w-20 h-20 pointer-events-none"
                style={{
                    borderBottom: `2px solid ${COLORS.primary}15`,
                    borderLeft: `2px solid ${COLORS.primary}15`,
                    borderRadius: '0 0 0 8px',
                }}
            />

            {/* Content — asymmetric left-heavy layout */}
            <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">

                    {/* Left — Main content */}
                    <div className="lg:col-span-7 space-y-4 sm:space-y-6 lg:space-y-7">

                        {/* Badge */}
                        <div
                            className="hero-fade-in inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
                            style={{
                                backgroundColor: `${COLORS.primary}15`,
                                border: `1px solid ${COLORS.primary}40`,
                                animationDelay: '0ms',
                            }}
                        >
                            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                                <span
                                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                    style={{ backgroundColor: COLORS.primary }}
                                />
                                <span
                                    className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5"
                                    style={{ backgroundColor: COLORS.primary }}
                                />
                            </span>
                            <span style={{ color: COLORS.primary }}>{t('hero.badge')}</span>
                        </div>

                        {/* Headline */}
                        <h1
                            className="hero-fade-in text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
                            style={{ animationDelay: '100ms' }}
                        >
                            <span className={colors.text}>{t('hero.title')}</span>
                        </h1>

                        {/* Accent bar */}
                        <div
                            className="hero-fade-in w-12 sm:w-16 h-1 rounded-full"
                            style={{
                                background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                animationDelay: '150ms',
                            }}
                        />

                        {/* Description */}
                        <p
                            className={`hero-fade-in ${colors.textSec} text-sm sm:text-base md:text-lg leading-relaxed max-w-xl`}
                            style={{ animationDelay: '200ms' }}
                        >
                            {t('hero.description')}
                        </p>

                        {/* CTA Buttons */}
                        <div
                            className="hero-fade-in flex flex-col sm:flex-row gap-3"
                            style={{ animationDelay: '300ms' }}
                        >
                            <a
                                href="#contact"
                                className="group relative inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 font-semibold text-sm sm:text-base text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#ff6b1a] focus:ring-offset-2"
                                style={{
                                    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                }}
                            >
                                <span className="relative z-10">{t('hero.cta')}</span>
                                <ArrowRight className="relative z-10 w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                            </a>

                            <a
                                href="#services"
                                className={`inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 ${colors.card} border-2 ${colors.borderLight} font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-[1.03] ${colors.cardHover} backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#ff6b1a] focus:ring-offset-2`}
                            >
                                {t('hero.learnMore')}
                            </a>
                        </div>

                        {/* Trust badges row */}
                        <div
                            className="hero-fade-in flex flex-wrap items-center gap-2 sm:gap-3 pt-1 sm:pt-2"
                            style={{ animationDelay: '400ms' }}
                        >
                            {[
                                { icon: Shield, label: t('hero.trustBadges.secure') },
                                { icon: Zap, label: t('hero.trustBadges.fastDelivery') },
                            ].map(({ icon: Icon, label }) => (
                                <div
                                    key={label}
                                    className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-medium ${colors.textSec}`}
                                    style={{
                                        backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                                    }}
                                >
                                    <Icon className="w-3 sm:w-3.5 h-3 sm:h-3.5" style={{ color: COLORS.primary }} strokeWidth={2} />
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Stats cards */}
                    <div className="lg:col-span-5">
                        <div
                            className="hero-fade-in grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4"
                            style={{ animationDelay: '450ms' }}
                        >
                            {/* Rating card */}
                            <div
                                className={`p-3 sm:p-5 rounded-xl sm:rounded-2xl backdrop-blur-sm border ${colors.borderLight}`}
                                style={{
                                    backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.7)',
                                }}
                            >
                                <div className="flex items-center gap-0.5 sm:gap-1 mb-1.5 sm:mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-3 sm:w-4 h-3 sm:h-4"
                                            fill={COLORS.primary}
                                            style={{ color: COLORS.primary }}
                                            strokeWidth={0}
                                        />
                                    ))}
                                </div>
                                <span className={`${colors.textSec} text-xs sm:text-sm font-medium`}>
                                    {t('hero.rating')}
                                </span>
                            </div>

                            {/* Projects counter card */}
                            <div
                                className={`p-3 sm:p-5 rounded-xl sm:rounded-2xl backdrop-blur-sm border ${colors.borderLight}`}
                                style={{
                                    backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.7)',
                                }}
                            >
                                <span
                                    className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent block mb-0.5 sm:mb-1"
                                    style={{
                                        backgroundImage: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                    }}
                                >
                                    10+
                                </span>
                                <span className={`${colors.textSec} text-xs sm:text-sm font-medium`}>
                                    {t('hero.clients')}
                                </span>
                            </div>

                            {/* Quality card */}
                            <div
                                className={`p-3 sm:p-5 rounded-xl sm:rounded-2xl backdrop-blur-sm border ${colors.borderLight}`}
                                style={{
                                    backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.7)',
                                }}
                            >
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                                    <div
                                        className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl"
                                        style={{ backgroundColor: `${COLORS.primary}15` }}
                                    >
                                        <Award className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: COLORS.primary }} strokeWidth={2} />
                                    </div>
                                    <div>
                                        <span className={`${colors.text} text-xs sm:text-sm font-semibold block`}>
                                            {t('hero.projects')}
                                        </span>
                                        <span className={`${colors.textSec} text-[10px] sm:text-xs hidden sm:block`}>
                                            {t('hero.trustBadges.expertTeam')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <a
                href="#services"
                className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 z-10 scroll-bounce"
                aria-label={t('hero.scrollDown')}
            >
                <span className={`${colors.textSec} text-xs font-medium`}>{t('hero.scrollDown')}</span>
                <ChevronDown className={`w-5 h-5 ${colors.textSec}`} strokeWidth={2} />
            </a>

            <style jsx>{`
                /* Staggered fade-in */
                .hero-fade-in {
                    opacity: 0;
                    transform: translateY(16px);
                    animation: heroFadeIn 0.6s ease-out forwards;
                }

                @keyframes heroFadeIn {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Orb drift */
                .hero-orb-1 { animation: orbDrift1 25s ease-in-out infinite; }
                .hero-orb-2 { animation: orbDrift2 30s ease-in-out infinite; }
                .hero-orb-3 { animation: orbDrift3 22s ease-in-out infinite; }

                @keyframes orbDrift1 {
                    0%, 100% { transform: translate(0, 0); }
                    33% { transform: translate(-25px, 15px); }
                    66% { transform: translate(15px, -10px); }
                }

                @keyframes orbDrift2 {
                    0%, 100% { transform: translate(0, 0); }
                    33% { transform: translate(20px, -15px); }
                    66% { transform: translate(-10px, 20px); }
                }

                @keyframes orbDrift3 {
                    0%, 100% { transform: translate(0, 0); }
                    33% { transform: translate(-15px, -20px); }
                    66% { transform: translate(20px, 10px); }
                }

                /* Scroll bounce */
                .scroll-bounce {
                    animation: scrollBounce 2s ease-in-out infinite;
                }

                @keyframes scrollBounce {
                    0%, 100% { transform: translate(-50%, 0); }
                    50% { transform: translate(-50%, 6px); }
                }

                /* Reduced motion */
                @media (prefers-reduced-motion: reduce) {
                    .hero-fade-in {
                        opacity: 1;
                        transform: none;
                        animation: none;
                    }
                    .hero-orb-1,
                    .hero-orb-2,
                    .hero-orb-3,
                    .scroll-bounce {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
};
