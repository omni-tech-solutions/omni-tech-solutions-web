'use client';

import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, ArrowRight, Star, Users, CheckCircle } from 'lucide-react';
import { COLORS, BORDER_RADIUS } from '@/app/styles/theme';
import i18n from "i18next";

interface HeroSectionProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ colors }) => {
    const { t } = useTranslation();

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-0 sm:px-6 lg:px-8 py-10 overflow-hidden"
        >
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Blobs - Smaller on mobile */}
                <div
                    className="absolute top-20 -left-20 w-48 sm:w-72 h-48 sm:h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
                    style={{
                        background: `radial-gradient(circle, ${COLORS.primary}, ${COLORS.primaryHover}30, transparent)`,
                    }}
                />
                <div
                    className="absolute bottom-20 -right-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
                    style={{
                        background: `radial-gradient(circle, ${COLORS.primary}dd, ${COLORS.primaryHover}20, transparent)`,
                        animationDelay: '2s'
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-80 h-56 sm:h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"
                    style={{
                        background: `radial-gradient(circle, ${COLORS.primaryHover}, transparent)`,
                        animationDelay: '4s'
                    }}
                />

                {/* Floating Particles - Hidden on mobile */}
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="hidden sm:block absolute w-2 h-2 rounded-full animate-float"
                        style={{
                            backgroundColor: `${COLORS.primary}40`,
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 3) * 20}%`,
                            animationDelay: `${i * 0.8}s`,
                            animationDuration: `${8 + i}s`
                        }}
                    />
                ))}

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(${colors.border} 1px, transparent 1px), linear-gradient(90deg, ${colors.border} 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />

                {/* Radial Gradient Overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(ellipse at center, transparent 0%, ${colors.bg}dd 100%)`
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto text-center w-full pt-20 sm:pt-20">
                <div className="space-y-5 sm:space-y-6">
                    {/* Badge with Icon */}
                    <div className="flex justify-center px-4">
                        <div
                            className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 ${colors.card} backdrop-blur-md border ${BORDER_RADIUS.full} shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                            style={{
                                borderColor: `${COLORS.primary}30`,
                                boxShadow: `0 4px 20px ${COLORS.primary}15`
                            }}
                        >
                            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 group-hover:rotate-12 transition-transform" style={{ color: COLORS.primary }} />
                            <span className={`${colors.text} text-xs font-semibold whitespace-nowrap`}>
                                {t('hero.badge', 'Available 24/7')}
                            </span>
                            <div className="relative flex h-2 w-2">
                                <span
                                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                    style={{ backgroundColor: COLORS.primary }}
                                />
                                <span
                                    className="relative inline-flex rounded-full h-2 w-2"
                                    style={{ backgroundColor: COLORS.primary }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Main Title with Gradient */}
                    <div className="space-y-2 sm:space-y-3 px-2">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                            <span
                                className="block bg-clip-text text-transparent bg-gradient-to-r pb-2"
                                style={{
                                    backgroundImage: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`
                                }}
                            >
                                {t('hero.title')}
                            </span>
                        </h1>
                        <h2 className={`${colors.text} text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight px-2`}>
                            {t('hero.subtitle')}
                        </h2>
                    </div>

                    {/* Description */}
                    <p className={`${colors.textSec} text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed  px-6 sm:px-4`}>
                        {t('hero.description')}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2 sm:pt-4 px-4 sm:px-0">
                        <a
                            href="#contact"
                            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm sm:text-base text-white overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto"
                            style={{
                                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                borderRadius: BORDER_RADIUS.md,
                                boxShadow: `0 8px 25px ${COLORS.primary}30`
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = `0 12px 35px ${COLORS.primary}40`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = `0 8px 25px ${COLORS.primary}30`;
                            }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {t('hero.cta')}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                style={{
                                    background: 'radial-gradient(circle at center, white, transparent)'
                                }}
                            />
                        </a>

                        <a
                            href="#services"
                            className={`inline-flex items-center justify-center gap-2 px-6 py-3 ${colors.card} backdrop-blur-md border-2 font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto`}
                            style={{
                                borderColor: `${COLORS.primary}40`,
                                color: colors.text,
                                borderRadius: BORDER_RADIUS.md
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = COLORS.primary;
                                e.currentTarget.style.backgroundColor = `${COLORS.primary}10`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = `${COLORS.primary}40`;
                                e.currentTarget.style.backgroundColor = '';
                            }}
                        >
                            {t('hero.learnMore', 'Learn More')}
                        </a>
                    </div>

                    {/* Enhanced Social Proof Cards - Smaller and more compact */}
                    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 pt-0 sm:pt-8 px-4">
                        {[
                            { icon: Star, text: t('hero.rating', '5.0 Rating'), gradient: true },
                            { icon: Users, text: t('hero.clients', '100+ Clients'), gradient: false },
                            { icon: CheckCircle, text: t('hero.projects', '500+ Projects'), gradient: false }
                        ].map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div
                                    key={`${i18n.language}-${item.text}-${index}`}
                                    className={`flex items-center gap-2 px-3 py-2 ${colors.card} backdrop-blur-md border ${BORDER_RADIUS.lg} cursor-default w-full sm:w-auto justify-center`}
                                    style={{
                                        borderColor: `${COLORS.primary}20`,
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                                    }}
                                >
                                    <div
                                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                                        style={{
                                            background: item.gradient
                                                ? `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`
                                                : `${COLORS.primary}15`
                                        }}
                                    >
                                        <IconComponent
                                            key={`icon-${i18n.language}-${index}`}
                                            className="w-3.5 h-3.5"
                                            style={{ color: item.gradient ? 'white' : COLORS.primary }}
                                            strokeWidth={2.5}
                                        />
                                    </div>
                                    <span className={`${colors.text} font-semibold text-xs sm:text-sm whitespace-nowrap`}>
                    {item.text}
                </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Decorative Elements - Hidden on small screens */}
                    <div className="hidden lg:block absolute left-1/4 top-1/4 w-16 h-16 animate-spin-slow opacity-20 pointer-events-none">
                        <div className="w-full h-full rounded-lg border-2" style={{ borderColor: COLORS.primary }} />
                    </div>
                    <div className="hidden lg:block absolute right-1/4 bottom-1/3 w-12 h-12 animate-spin-reverse opacity-20 pointer-events-none">
                        <div className="w-full h-full rounded-full border-2" style={{ borderColor: COLORS.primary }} />
                    </div>
                </div>
                {/* Beautiful Scroll Indicator - Visible on all screens */}
                <div className=" mt-20 sm:mt-12 lg:mt-12">
                    <a
                        href="#services"
                        className="flex flex-col items-center gap-2 sm:gap-3 group cursor-pointer"
                    >
                        {/* Text - Smaller on mobile */}
                        <span
                            className={`text-[10px] sm:text-xs uppercase tracking-wider font-semibold ${colors.textSec} opacity-60 group-hover:opacity-100 transition-all duration-300`}
                            style={{
                                letterSpacing: '0.15em'
                            }}
                        >
                        {t('hero.scrollDown', 'Scroll Down')}
                    </span>

                        {/* Scroll Container - Smaller on mobile */}
                        <div className="relative flex flex-col items-center">
                            {/* Mouse/Scroll Icon */}
                            <div
                                className="relative w-6 h-9 sm:w-7 sm:h-11 border-2 rounded-full flex items-start justify-center pt-1.5 sm:pt-2 transition-all duration-300 group-hover:border-[${COLORS.primary}]"
                                style={{
                                    borderColor: `${COLORS.primary}50`
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = COLORS.primary;
                                    e.currentTarget.style.boxShadow = `0 0 15px ${COLORS.primary}30`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = `${COLORS.primary}50`;
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {/* Animated Scroll Wheel */}
                                <div
                                    className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full animate-scroll-wheel"
                                    style={{
                                        backgroundColor: COLORS.primary,
                                    }}
                                />
                            </div>

                            {/* Decorative Dots Below */}
                            <div className="flex flex-col items-center gap-0.5 sm:gap-1 mt-1.5 sm:mt-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                <div
                                    className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full animate-pulse-dot"
                                    style={{
                                        backgroundColor: COLORS.primary,
                                        animationDelay: '0s'
                                    }}
                                />
                                <div
                                    className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full animate-pulse-dot"
                                    style={{
                                        backgroundColor: COLORS.primary,
                                        animationDelay: '0.3s'
                                    }}
                                />
                                <div
                                    className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full animate-pulse-dot"
                                    style={{
                                        backgroundColor: COLORS.primary,
                                        animationDelay: '0.6s'
                                    }}
                                />
                            </div>
                        </div>
                    </a>
                </div>
            </div>



            {/* Enhanced Animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(15px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes blob {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    25% {
                        transform: translate(25px, -35px) scale(1.05);
                    }
                    50% {
                        transform: translate(-15px, 25px) scale(0.95);
                    }
                    75% {
                        transform: translate(35px, 15px) scale(1.02);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                        opacity: 0.3;
                    }
                    50% {
                        transform: translateY(-100px) translateX(20px);
                        opacity: 0.6;
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.7s ease-out forwards;
                    opacity: 0;
                }

                .animate-blob {
                    animation: blob 18s ease-in-out infinite;
                }

                .animate-float {
                    animation: float linear infinite;
                }

                .animate-bounce-slow {
                    animation: bounce 2.5s ease-in-out infinite;
                }

                .animate-scroll-wheel {
                    animation: scrollWheel 2s ease-in-out infinite;
                }

                .animate-pulse-dot {
                    animation: pulseDot 1.5s ease-in-out infinite;
                }

                @keyframes scrollWheel {
                    0% {
                        transform: translateY(0);
                        opacity: 0;
                    }
                    30% {
                        opacity: 1;
                    }
                    60% {
                        transform: translateY(16px);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(16px);
                        opacity: 0;
                    }
                }

                @keyframes pulseDot {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.5;
                    }
                    50% {
                        transform: scale(1.3);
                        opacity: 1;
                    }
                }

                .animate-spin-slow {
                    animation: spin 20s linear infinite;
                }

                .animate-spin-reverse {
                    animation: spin 15s linear infinite reverse;
                }

                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                .animation-delay-100 {
                    animation-delay: 0.1s;
                }

                .animation-delay-200 {
                    animation-delay: 0.2s;
                }

                .animation-delay-300 {
                    animation-delay: 0.3s;
                }

                .animation-delay-400 {
                    animation-delay: 0.4s;
                }

                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-8px);
                    }
                }
            `}</style>
        </section>
    );
};