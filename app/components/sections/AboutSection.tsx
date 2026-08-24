'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Rocket, History, Users, LucideIcon } from 'lucide-react';
import { COLORS, BORDER_RADIUS } from '@/app/styles/theme';

interface AboutSectionProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

// Mission / Vision / Story — same shape, rendered from one array
const pillars: Array<{ key: 'mission' | 'vision' | 'history'; icon: LucideIcon }> = [
    { key: 'mission', icon: Target },
    { key: 'vision', icon: Rocket },
    { key: 'history', icon: History }
];

export const AboutSection: React.FC<AboutSectionProps> = ({ colors }) => {
    const { t } = useTranslation();
    const isDark = colors.text === 'text-zinc-100';

    const stats = t('about.stats', { returnObjects: true }) as Array<{
        value: string;
        label: string;
    }>;

    return (
        <section id="about" className="relative py-20 px-0 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-10 right-0 w-[560px] h-[560px] rounded-full opacity-[0.05]"
                    style={{ background: `radial-gradient(circle, ${COLORS.primary}, transparent 65%)` }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[480px] h-[480px] rounded-full opacity-[0.04]"
                    style={{ background: `radial-gradient(circle, ${COLORS.primaryHover}, transparent 65%)` }}
                />
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `radial-gradient(circle, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`,
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
                        style={{
                            backgroundColor: `${COLORS.primary}15`,
                            border: `1px solid ${COLORS.primary}33`,
                            color: COLORS.primary,
                        }}
                    >
                        <Users className="w-3.5 h-3.5" strokeWidth={2} />
                        {t('nav.about')}
                    </div>

                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${colors.text}`}>
                        {t('about.title')}
                    </h2>

                    <div
                        className="w-14 h-1 rounded-full mt-5 mb-5"
                        style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
                    />

                    <p className={`${colors.textSec} text-base sm:text-lg max-w-2xl`}>
                        {t('about.subtitle')}
                    </p>
                </div>

                {/* Mission, Vision, Story */}
                <div className="grid md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
                    {pillars.map(({ key, icon: Icon }, index) => (
                        <div
                            key={key}
                            className={`omni-reveal group relative flex flex-col overflow-hidden ${colors.card} backdrop-blur-sm p-7 sm:p-8 ${BORDER_RADIUS.lg} border ${colors.border} transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff6b1a] hover:shadow-[0_18px_40px_-12px_rgba(255,107,26,0.35)]`}
                            style={{ animationDelay: `${index * 80}ms` }}
                        >
                            {/* Top accent line — grows on hover */}
                            <span
                                className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                                style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
                            />

                            {/* Corner glow */}
                            <span
                                className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: `radial-gradient(circle, ${COLORS.primary}26, transparent 70%)` }}
                            />

                            <div className="relative flex flex-col items-center text-center flex-1">
                                {/* Icon tile */}
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                    style={{
                                        background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                        boxShadow: `0 8px 20px ${COLORS.primary}33`,
                                    }}
                                >
                                    <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                                </div>

                                <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${colors.text}`}>
                                    {t(`about.${key}.title`)}
                                </h3>
                                <p className={`${colors.textSec} leading-relaxed text-sm flex-1`}>
                                    {t(`about.${key}.text`)}
                                </p>

                                {/* Accent bar */}
                                <div
                                    className="mt-6 h-1 w-16 rounded-full transition-all duration-300 group-hover:w-24"
                                    style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryHover})`, opacity: 0.7 }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats strip */}
                {Array.isArray(stats) && stats.length > 0 && (
                    <div
                        className={`relative overflow-hidden ${colors.card} ${BORDER_RADIUS.lg} border ${colors.border} p-6 sm:p-8`}
                    >
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{ background: `linear-gradient(135deg, ${COLORS.primary}0D, transparent 55%)` }}
                        />

                        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`text-center ${index > 0 ? 'border-t sm:border-t-0 sm:border-l pt-6 sm:pt-0' : ''}`}
                                    style={index > 0 ? { borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' } : undefined}
                                >
                                    <div
                                        className="text-3xl sm:text-4xl font-bold mb-1.5 bg-clip-text text-transparent"
                                        style={{ backgroundImage: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className={`text-sm ${colors.textSec} max-w-[16rem] mx-auto`}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
