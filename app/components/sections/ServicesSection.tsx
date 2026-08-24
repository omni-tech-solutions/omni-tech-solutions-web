'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Globe, Code2, Network, Camera, MonitorSmartphone, Smartphone, LucideIcon, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { COLORS, BORDER_RADIUS } from '@/app/styles/theme';

interface ServicesSectionProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

// Icon mapping for the services
const iconMap: Record<string, LucideIcon> = {
    Globe,
    Code2,
    Network,
    Camera,
    MonitorSmartphone,
    Smartphone
};

// Service IDs for routing
const serviceIds = [
    'web-design',
    'web-applications',
    'local-networks',
    'video-surveillance',
    'operating-systems',
    'smartphone-repair'
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ colors }) => {
    const { t } = useTranslation();
    const isDark = colors.text === 'text-zinc-100';

    const services = t('services.items', { returnObjects: true }) as Array<{
        icon: string;
        title: string;
        desc: string;
    }>;

    // Number of concrete solutions listed on each service page
    const getSolutionCount = (serviceId: string) => {
        const offerings = t(`services.offerings.${serviceId}`, { returnObjects: true });
        return Array.isArray(offerings) ? offerings.length : 0;
    };

    return (
        <section id="services" className={`relative py-20 px-0 sm:px-6 lg:px-8 overflow-hidden ${colors.section}`}>
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-[0.05]"
                    style={{ background: `radial-gradient(circle, ${COLORS.primary}, transparent 65%)` }}
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
                        <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
                        {t('services.title')}
                    </div>

                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${colors.text}`}>
                        {t('services.subtitle')}
                    </h2>

                    <div
                        className="w-14 h-1 rounded-full mt-5 mb-5"
                        style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
                    />
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon];
                        const serviceId = serviceIds[index];
                        const solutionCount = getSolutionCount(serviceId);

                        return (
                            <Link
                                key={serviceId}
                                href={`/services/${serviceId}`}
                                className={`omni-reveal group relative flex flex-col overflow-hidden ${colors.card} backdrop-blur-sm p-6 sm:p-7 ${BORDER_RADIUS.lg} border ${colors.border} transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff6b1a] hover:shadow-[0_18px_40px_-12px_rgba(255,107,26,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b1a] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent`}
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

                                {/* Watermark index */}
                                <span
                                    className={`absolute top-5 right-6 text-4xl font-bold leading-none select-none transition-all duration-300 ${isDark ? 'opacity-10' : 'opacity-[0.07]'} group-hover:opacity-20`}
                                    style={{ color: COLORS.primary }}
                                    aria-hidden="true"
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                {/* Icon Container */}
                                <div className="relative mb-5">
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                        style={{
                                            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                            boxShadow: `0 8px 20px ${COLORS.primary}33`,
                                        }}
                                    >
                                        {IconComponent && (
                                            <IconComponent
                                                className="w-7 h-7 text-white"
                                                strokeWidth={1.8}
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative flex flex-col flex-1">
                                    <h3 className={`text-xl font-bold mb-2.5 ${colors.text}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`${colors.textSec} leading-relaxed text-sm mb-5 flex-1`}>
                                        {service.desc}
                                    </p>

                                    {/* Footer — solutions count + learn more */}
                                    <div className={`flex items-center justify-between gap-3 mt-auto pt-4 border-t ${colors.borderLight}`}>
                                        {solutionCount > 0 ? (
                                            <span
                                                className={`inline-flex items-center gap-1.5 text-xs font-medium ${colors.textSec}`}
                                            >
                                                <Layers className="w-3.5 h-3.5" style={{ color: COLORS.primary }} strokeWidth={2} />
                                                {solutionCount} {t('services.solutionsLabel')}
                                            </span>
                                        ) : <span />}

                                        <span
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold"
                                            style={{ color: COLORS.primary }}
                                        >
                                            {t('services.learnMore')}
                                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

        </section>
    );
};
