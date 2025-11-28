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
                                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 font-semibold text-sm sm:text-base text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#ffaa18] focus:ring-offset-2"
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
                                className={`inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 ${colors.card} border-2 ${colors.borderLight} font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-105 ${colors.cardHover} backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#ffaa18] focus:ring-offset-2`}
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
                        <div className="relative aspect-square max-w-md lg:max-w-2xl mx-auto flex items-center justify-center">

                            {/* Code Windows Illustration */}
                            <svg
                                viewBox="0 0 500 500"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full"
                            >
                                <defs>
                                    {/* Code Editor - Primary Yellow gradient */}
                                    <linearGradient id="codeEditorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.15"/>
                                        <stop offset="100%" stopColor={COLORS.primaryHover} stopOpacity="0.05"/>
                                    </linearGradient>

                                    {/* Terminal - White gradient */}
                                    <linearGradient id="terminalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15"/>
                                        <stop offset="100%" stopColor="#f3f4f6" stopOpacity="0.05"/>
                                    </linearGradient>

                                    {/* Browser - Gray gradient */}
                                    <linearGradient id="browserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#9ca3af" stopOpacity="0.15"/>
                                        <stop offset="100%" stopColor="#6b7280" stopOpacity="0.05"/>
                                    </linearGradient>

                                    {/* Code Snippet - Dark Grey gradient */}
                                    <linearGradient id="snippetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#4b5563" stopOpacity="0.15"/>
                                        <stop offset="100%" stopColor="#374151" stopOpacity="0.05"/>
                                    </linearGradient>

                                    <filter id="shadow">
                                        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15"/>
                                    </filter>
                                </defs>

                                {/* Main Code Editor Window - Primary Yellow */}
                                <g className="code-window-1" filter="url(#shadow)">
                                    <rect x="100" y="120" width="280" height="200" rx="8" fill="url(#codeEditorGrad)" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.9"/>

                                    {/* Window header */}
                                    <rect x="100" y="120" width="280" height="30" rx="8" fill={COLORS.primary} opacity="0.2"/>

                                    {/* Window dots */}
                                    <circle cx="115" cy="135" r="4" fill={COLORS.primary} opacity="0.6"/>
                                    <circle cx="130" cy="135" r="4" fill={COLORS.primary} opacity="0.6"/>
                                    <circle cx="145" cy="135" r="4" fill={COLORS.primary} opacity="0.6"/>

                                    {/* Code lines */}
                                    <line x1="120" y1="170" x2="220" y2="170" stroke={COLORS.primary} strokeWidth="2" opacity="0.5"/>
                                    <line x1="130" y1="190" x2="250" y2="190" stroke={COLORS.primary} strokeWidth="2" opacity="0.4"/>
                                    <line x1="130" y1="210" x2="200" y2="210" stroke={COLORS.primary} strokeWidth="2" opacity="0.4"/>
                                    <line x1="120" y1="230" x2="270" y2="230" stroke={COLORS.primary} strokeWidth="2" opacity="0.5"/>
                                    <line x1="130" y1="250" x2="180" y2="250" stroke={COLORS.primary} strokeWidth="2" opacity="0.4"/>
                                    <line x1="120" y1="270" x2="240" y2="270" stroke={COLORS.primary} strokeWidth="2" opacity="0.5"/>
                                    <line x1="130" y1="290" x2="210" y2="290" stroke={COLORS.primary} strokeWidth="2" opacity="0.4"/>
                                </g>

                                {/* Floating Terminal Window - White */}
                                <g className="terminal-window" filter="url(#shadow)">
                                    <rect x="280" y="60" width="180" height="120" rx="6" fill="url(#terminalGrad)" stroke="#e5e7eb" strokeWidth="1.5" opacity="0.8"/>

                                    {/* Terminal header */}
                                    <rect x="280" y="60" width="180" height="24" rx="6" fill="#f3f4f6" opacity="0.2"/>
                                    <circle cx="292" cy="72" r="3" fill="#d1d5db" opacity="0.6"/>
                                    <circle cx="304" cy="72" r="3" fill="#d1d5db" opacity="0.6"/>
                                    <circle cx="316" cy="72" r="3" fill="#d1d5db" opacity="0.6"/>

                                    {/* Terminal prompt */}
                                    <text x="290" y="105" fill="#9ca3af" opacity="0.7" fontSize="12" fontFamily="monospace">$</text>
                                    <line x1="300" y1="100" x2="350" y2="100" stroke="#d1d5db" strokeWidth="2" opacity="0.6"/>
                                    <line x1="290" y1="120" x2="440" y2="120" stroke="#d1d5db" strokeWidth="2" opacity="0.5"/>
                                    <line x1="290" y1="140" x2="380" y2="140" stroke="#d1d5db" strokeWidth="2" opacity="0.5"/>

                                    {/* Cursor */}
                                    <rect x="385" y="135" width="8" height="12" fill="#9ca3af" opacity="0.7" className="cursor-blink"/>
                                </g>

                                {/* Browser Window - Gray */}
                                <g className="browser-window" filter="url(#shadow)">
                                    <rect x="40" y="280" width="200" height="140" rx="6" fill="url(#browserGrad)" stroke="#9ca3af" strokeWidth="1.5" opacity="0.8"/>

                                    {/* Browser header */}
                                    <rect x="40" y="280" width="200" height="28" rx="6" fill="#9ca3af" opacity="0.15"/>
                                    <circle cx="54" cy="294" r="3.5" fill="#9ca3af" opacity="0.5"/>
                                    <circle cx="67" cy="294" r="3.5" fill="#9ca3af" opacity="0.5"/>
                                    <circle cx="80" cy="294" r="3.5" fill="#9ca3af" opacity="0.5"/>

                                    {/* Address bar */}
                                    <rect x="95" y="287" width="135" height="14" rx="7" fill="#9ca3af" opacity="0.1"/>
                                    <line x1="102" y1="294" x2="140" y2="294" stroke="#9ca3af" strokeWidth="1.5" opacity="0.4"/>

                                    {/* Browser content - simple layout */}
                                    <rect x="55" y="320" width="170" height="8" rx="2" fill="#9ca3af" opacity="0.3"/>
                                    <rect x="55" y="340" width="130" height="6" rx="2" fill="#9ca3af" opacity="0.2"/>
                                    <rect x="55" y="355" width="150" height="6" rx="2" fill="#9ca3af" opacity="0.2"/>
                                    <rect x="55" y="370" width="110" height="6" rx="2" fill="#9ca3af" opacity="0.2"/>

                                    {/* Image placeholder */}
                                    <rect x="160" y="335" width="50" height="50" rx="4" fill="#9ca3af" opacity="0.15"/>
                                </g>

                                {/* Small Code Snippet - Dark Grey */}
                                <g className="code-snippet" filter="url(#shadow)">
                                    <rect x="310" y="320" width="150" height="100" rx="6" fill="url(#snippetGrad)" stroke="#4b5563" strokeWidth="1.5" opacity="0.75"/>

                                    {/* Snippet header */}
                                    <rect x="310" y="320" width="150" height="22" rx="6" fill="#4b5563" opacity="0.15"/>
                                    <circle cx="322" cy="331" r="2.5" fill="#4b5563" opacity="0.5"/>
                                    <circle cx="333" cy="331" r="2.5" fill="#4b5563" opacity="0.5"/>

                                    {/* Code */}
                                    <line x1="320" y1="355" x2="400" y2="355" stroke="#4b5563" strokeWidth="1.5" opacity="0.5"/>
                                    <line x1="330" y1="370" x2="380" y2="370" stroke="#4b5563" strokeWidth="1.5" opacity="0.4"/>
                                    <line x1="330" y1="385" x2="420" y2="385" stroke="#4b5563" strokeWidth="1.5" opacity="0.4"/>
                                    <line x1="320" y1="400" x2="360" y2="400" stroke="#4b5563" strokeWidth="1.5" opacity="0.5"/>
                                </g>

                                {/* Decorative code symbols - Yellow, White, Gray, Dark Grey */}
                                <g opacity="0.4">
                                    <text x="250" y="50" fill={COLORS.primary} fontSize="24" fontFamily="monospace" fontWeight="bold">{"<>"}</text>
                                    <text x="460" y="260" fill="#e5e7eb" fontSize="20" fontFamily="monospace">{"{}"}</text>
                                    <text x="20" y="240" fill="#4b5563" fontSize="20" fontFamily="monospace">{"[]"}</text>
                                    <text x="80" y="480" fill="#9ca3af" fontSize="18" fontFamily="monospace">{"()"}</text>
                                </g>

                                {/* Connecting dots */}
                                <circle cx="250" cy="250" r="5" fill={COLORS.primary} opacity="0.6" className="pulse-dot"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float-up-down {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-12px);
                    }
                }

                @keyframes float-gentle {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-8px);
                    }
                }

                @keyframes cursor-blink {
                    0%, 49% {
                        opacity: 1;
                    }
                    50%, 100% {
                        opacity: 0;
                    }
                }

                @keyframes pulse-dot {
                    0%, 100% {
                        opacity: 0.4;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.8;
                        transform: scale(1.3);
                    }
                }

                /* Code editor window - main */
                .code-window-1 {
                    animation: float-up-down 6s ease-in-out infinite;
                }

                /* Terminal window */
                .terminal-window {
                    animation: float-gentle 7s ease-in-out infinite 1s;
                }

                /* Browser window */
                .browser-window {
                    animation: float-up-down 8s ease-in-out infinite 2s;
                }

                /* Code snippet */
                .code-snippet {
                    animation: float-gentle 6.5s ease-in-out infinite 1.5s;
                }

                /* Cursor blinking */
                .cursor-blink {
                    animation: cursor-blink 1s step-end infinite;
                }

                /* Pulse dot */
                .pulse-dot {
                    animation: pulse-dot 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};