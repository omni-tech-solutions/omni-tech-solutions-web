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
                                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 font-semibold text-sm sm:text-base text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#ff6b1a] focus:ring-offset-2"
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
                                className={`inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 ${colors.card} border-2 ${colors.borderLight} font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-105 ${colors.cardHover} backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#ff6b1a] focus:ring-offset-2`}
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
                        <div className="relative aspect-square w-full max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto flex items-center justify-center p-4 sm:p-8 lg:p-12">

                            {/* Modern Tech Illustration */}
                            <svg
                                viewBox="0 0 600 600"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full"
                            >
                                <defs>
                                    {/* Primary Orange Gradient */}
                                    <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor={COLORS.primary} />
                                        <stop offset="100%" stopColor={COLORS.primaryHover} />
                                    </linearGradient>

                                    {/* Glow Effect */}
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                                        <feMerge>
                                            <feMergeNode in="coloredBlur"/>
                                            <feMergeNode in="SourceGraphic"/>
                                        </feMerge>
                                    </filter>

                                    {/* Shadow */}
                                    <filter id="shadow">
                                        <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.2"/>
                                    </filter>

                                    {/* Card Gradient */}
                                    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1"/>
                                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02"/>
                                    </linearGradient>
                                </defs>

                                {/* Background Glow Orbs */}
                                <g className="glow-orb-1" opacity="0.3">
                                    <circle cx="150" cy="150" r="80" fill="url(#primaryGrad)" filter="blur(40px)"/>
                                </g>
                                <g className="glow-orb-2" opacity="0.2">
                                    <circle cx="450" cy="400" r="100" fill="url(#primaryGrad)" filter="blur(50px)"/>
                                </g>

                                {/* Central Isometric Device - Laptop */}
                                <g className="laptop-main" filter="url(#shadow)">
                                    {/* Laptop Base */}
                                    <path d="M 180 340 L 420 340 L 440 380 L 160 380 Z"
                                          fill="url(#cardGrad)"
                                          stroke={COLORS.primary}
                                          strokeWidth="2"/>

                                    {/* Laptop Screen */}
                                    <rect x="200" y="180" width="200" height="160" rx="8"
                                          fill="url(#cardGrad)"
                                          stroke={COLORS.primary}
                                          strokeWidth="2.5"/>

                                    {/* Screen Content - Code Editor */}
                                    <rect x="210" y="190" width="180" height="140" rx="4"
                                          fill="rgba(0,0,0,0.2)"/>

                                    {/* Code Lines with Orange Highlight */}
                                    <line x1="220" y1="210" x2="320" y2="210" stroke={COLORS.primary} strokeWidth="3" opacity="0.8"/>
                                    <line x1="230" y1="230" x2="360" y2="230" stroke="#94a3b8" strokeWidth="2" opacity="0.5"/>
                                    <line x1="230" y1="245" x2="300" y2="245" stroke="#94a3b8" strokeWidth="2" opacity="0.5"/>
                                    <line x1="220" y1="260" x2="370" y2="260" stroke={COLORS.primary} strokeWidth="3" opacity="0.6"/>
                                    <line x1="230" y1="275" x2="340" y2="275" stroke="#94a3b8" strokeWidth="2" opacity="0.5"/>
                                    <line x1="230" y1="290" x2="280" y2="290" stroke="#94a3b8" strokeWidth="2" opacity="0.5"/>
                                    <line x1="220" y1="305" x2="350" y2="305" stroke={COLORS.primary} strokeWidth="3" opacity="0.7"/>

                                    {/* Menu Bar */}
                                    <rect x="210" y="190" width="180" height="12" rx="4" fill={COLORS.primary} opacity="0.15"/>
                                    <circle cx="218" cy="196" r="2" fill={COLORS.primary}/>
                                    <circle cx="228" cy="196" r="2" fill={COLORS.primary}/>
                                    <circle cx="238" cy="196" r="2" fill={COLORS.primary}/>
                                </g>

                                {/* Floating Dashboard Card - Top Right */}
                                <g className="dashboard-card" filter="url(#shadow)">
                                    <rect x="430" y="120" width="140" height="100" rx="12"
                                          fill="url(#cardGrad)"
                                          stroke="#64748b"
                                          strokeWidth="1.5"/>

                                    {/* Mini Chart */}
                                    <polyline points="445,180 460,170 475,175 490,160 505,165 520,155 535,150"
                                              stroke={COLORS.primary}
                                              strokeWidth="2.5"
                                              fill="none"
                                              className="chart-line"/>

                                    {/* Data Bars */}
                                    <rect x="445" y="140" width="35" height="6" rx="3" fill={COLORS.primary} opacity="0.8"/>
                                    <rect x="445" y="152" width="55" height="6" rx="3" fill="#64748b" opacity="0.4"/>
                                    <rect x="445" y="164" width="45" height="6" rx="3" fill="#64748b" opacity="0.3"/>

                                    {/* Header Dot */}
                                    <circle cx="555" cy="133" r="4" fill={COLORS.primary} className="pulse-dot"/>
                                </g>

                                {/* Mobile Device - Left */}
                                <g className="mobile-device" filter="url(#shadow)">
                                    <rect x="60" y="220" width="100" height="180" rx="12"
                                          fill="url(#cardGrad)"
                                          stroke="#64748b"
                                          strokeWidth="1.5"/>

                                    {/* Screen */}
                                    <rect x="68" y="235" width="84" height="150" rx="6"
                                          fill="rgba(0,0,0,0.2)"/>

                                    {/* App Interface */}
                                    <rect x="75" y="245" width="30" height="30" rx="6" fill={COLORS.primary} opacity="0.6"/>
                                    <rect x="110" y="245" width="30" height="30" rx="6" fill="#64748b" opacity="0.3"/>
                                    <rect x="75" y="280" width="30" height="30" rx="6" fill="#64748b" opacity="0.3"/>
                                    <rect x="110" y="280" width="30" height="30" rx="6" fill={COLORS.primary} opacity="0.4"/>

                                    {/* Text Lines */}
                                    <line x1="75" y1="325" x2="140" y2="325" stroke="#64748b" strokeWidth="2" opacity="0.5"/>
                                    <line x1="75" y1="335" x2="125" y2="335" stroke="#64748b" strokeWidth="2" opacity="0.4"/>
                                    <line x1="75" y1="345" x2="135" y2="345" stroke={COLORS.primary} strokeWidth="2" opacity="0.6"/>

                                    {/* Notch */}
                                    <rect x="95" y="226" width="20" height="4" rx="2" fill="#1e293b" opacity="0.8"/>
                                </g>

                                {/* Data Nodes - Bottom Right */}
                                <g className="data-nodes">
                                    {/* Node 1 */}
                                    <circle cx="480" cy="420" r="25" fill="url(#cardGrad)"
                                            stroke={COLORS.primary} strokeWidth="2"
                                            className="data-node-1" filter="url(#shadow)"/>
                                    <circle cx="480" cy="420" r="8" fill={COLORS.primary}/>

                                    {/* Node 2 */}
                                    <circle cx="420" cy="460" r="20" fill="url(#cardGrad)"
                                            stroke="#64748b" strokeWidth="1.5"
                                            className="data-node-2" filter="url(#shadow)"/>
                                    <circle cx="420" cy="460" r="6" fill="#64748b" opacity="0.6"/>

                                    {/* Node 3 */}
                                    <circle cx="520" cy="470" r="18" fill="url(#cardGrad)"
                                            stroke="#64748b" strokeWidth="1.5"
                                            className="data-node-3" filter="url(#shadow)"/>
                                    <circle cx="520" cy="470" r="5" fill="#64748b" opacity="0.6"/>

                                    {/* Connecting Lines */}
                                    <line x1="480" y1="420" x2="420" y2="460" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" strokeDasharray="4,4" className="connection-line"/>
                                    <line x1="480" y1="420" x2="520" y2="470" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" strokeDasharray="4,4" className="connection-line"/>
                                </g>

                                {/* Cloud Icon - Top Left */}
                                <g className="cloud-icon" filter="url(#shadow)">
                                    <path d="M 90 120 Q 80 100, 100 100 Q 110 85, 125 95 Q 140 90, 145 105 Q 160 105, 155 125 Q 160 140, 145 140 L 100 140 Q 85 140, 90 120 Z"
                                          fill="url(#cardGrad)"
                                          stroke="#64748b"
                                          strokeWidth="1.5"/>

                                    {/* Upload/Download Arrows */}
                                    <path d="M 120 115 L 120 130" stroke={COLORS.primary} strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M 116 119 L 120 115 L 124 119" stroke={COLORS.primary} strokeWidth="2" strokeLinecap="round" fill="none"/>
                                    <path d="M 116 126 L 120 130 L 124 126" stroke={COLORS.primary} strokeWidth="2" strokeLinecap="round" fill="none"/>
                                </g>

                                {/* Floating Code Symbols */}
                                <g className="code-symbols" opacity="0.4">
                                    <text x="240" y="80" fill={COLORS.primary} fontSize="32" fontFamily="monospace" fontWeight="bold">{"<>"}</text>
                                    <text x="500" y="320" fill="#64748b" fontSize="24" fontFamily="monospace">{"{}"}</text>
                                    <text x="30" y="460" fill={COLORS.primary} fontSize="28" fontFamily="monospace">{"[]"}</text>
                                    <text x="550" y="540" fill="#64748b" fontSize="20" fontFamily="monospace">{"( )"}</text>
                                </g>

                                {/* Particle Dots */}
                                <g className="particles">
                                    <circle cx="380" cy="100" r="3" fill={COLORS.primary} opacity="0.6" className="particle-1"/>
                                    <circle cx="180" cy="450" r="2.5" fill="#64748b" opacity="0.5" className="particle-2"/>
                                    <circle cx="540" cy="380" r="3.5" fill={COLORS.primary} opacity="0.7" className="particle-3"/>
                                    <circle cx="100" y="180" r="2" fill="#64748b" opacity="0.4" className="particle-4"/>
                                    <circle cx="560" cy="180" r="2.5" fill={COLORS.primary} opacity="0.5" className="particle-5"/>
                                </g>

                                {/* Central Connection Hub */}
                                <g className="connection-hub">
                                    <circle cx="300" cy="300" r="6" fill={COLORS.primary} filter="url(#glow)" className="pulse-center"/>
                                    <circle cx="300" cy="300" r="12" fill="none" stroke={COLORS.primary} strokeWidth="1" opacity="0.3" className="pulse-ring"/>
                                    <circle cx="300" cy="300" r="20" fill="none" stroke={COLORS.primary} strokeWidth="0.5" opacity="0.2" className="pulse-ring-2"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float-up {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-2px);
                    }
                }

                @keyframes float-gentle {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-1.5px);
                    }
                }

                @keyframes pulse-glow {
                    0%, 100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.5;
                        transform: scale(1.02);
                    }
                }

                @keyframes pulse-dot {
                    0%, 100% {
                        opacity: 0.6;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.08);
                    }
                }

                @keyframes pulse-ring {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.3;
                    }
                    50% {
                        transform: scale(1.05);
                        opacity: 0.5;
                    }
                }

                @keyframes pulse-ring-2 {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.2;
                    }
                    50% {
                        transform: scale(1.08);
                        opacity: 0.35;
                    }
                }

                @keyframes particle-float {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    33% {
                        transform: translate(1px, -1.5px);
                    }
                    66% {
                        transform: translate(-1px, -1px);
                    }
                }

                @keyframes dash-animation {
                    to {
                        stroke-dashoffset: -8;
                    }
                }

                /* Glow Orbs */
                .glow-orb-1 {
                    animation: pulse-glow 8s ease-in-out infinite;
                }

                .glow-orb-2 {
                    animation: pulse-glow 10s ease-in-out infinite 1s;
                }

                /* Main Laptop */
                .laptop-main {
                    animation: float-up 6s ease-in-out infinite;
                }

                /* Dashboard Card */
                .dashboard-card {
                    animation: float-gentle 7s ease-in-out infinite 0.5s;
                }

                /* Mobile Device */
                .mobile-device {
                    animation: float-gentle 8s ease-in-out infinite 1.5s;
                }

                /* Data Nodes */
                .data-node-1 {
                    animation: pulse-dot 3s ease-in-out infinite;
                }

                .data-node-2 {
                    animation: pulse-dot 3.5s ease-in-out infinite 0.5s;
                }

                .data-node-3 {
                    animation: pulse-dot 4s ease-in-out infinite 1s;
                }

                /* Connection Lines */
                .connection-line {
                    stroke-dasharray: 4 4;
                    animation: dash-animation 1s linear infinite;
                }

                /* Cloud Icon */
                .cloud-icon {
                    animation: float-gentle 9s ease-in-out infinite 2s;
                }

                /* Particles */
                .particle-1 {
                    animation: particle-float 6s ease-in-out infinite;
                }

                .particle-2 {
                    animation: particle-float 7s ease-in-out infinite 1s;
                }

                .particle-3 {
                    animation: particle-float 8s ease-in-out infinite 2s;
                }

                .particle-4 {
                    animation: particle-float 6.5s ease-in-out infinite 0.5s;
                }

                .particle-5 {
                    animation: particle-float 7.5s ease-in-out infinite 1.5s;
                }

                /* Central Hub */
                .pulse-center {
                    animation: pulse-dot 2s ease-in-out infinite;
                }

                .pulse-ring {
                    animation: pulse-ring 2s ease-in-out infinite;
                }

                .pulse-ring-2 {
                    animation: pulse-ring-2 2s ease-in-out infinite 0.3s;
                }

                /* Chart Line Animation */
                .chart-line {
                    stroke-dasharray: 100;
                    stroke-dashoffset: 100;
                    animation: draw-line 3s ease-in-out infinite;
                }

                @keyframes draw-line {
                    0%, 100% {
                        stroke-dashoffset: 100;
                    }
                    50% {
                        stroke-dashoffset: 0;
                    }
                }
            `}</style>
        </section>
    );
};