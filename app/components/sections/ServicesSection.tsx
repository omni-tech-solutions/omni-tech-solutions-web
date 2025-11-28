'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { Globe, Code2, Network, Camera, Smartphone, MonitorSmartphone, LucideIcon, ArrowUpRight } from 'lucide-react';
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
    Smartphone,
    MonitorSmartphone
};

// Service IDs for routing
const serviceIds = [
    'web-design',
    'web-applications',
    'local-networks',
    'video-surveillance',
    'smartphone-repair',
    'operating-systems'
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ colors }) => {
    const { t } = useTranslation();
    const router = useRouter();
    const services = t('services.items', { returnObjects: true }) as Array<{
        icon: string;
        title: string;
        desc: string;
    }>;

    const handleServiceClick = (index: number) => {
        router.push(`/services/${serviceIds[index]}`);
    };

    return (
        <section id="services" className={`py-20 px-0 sm:px-6 lg:px-8 ${colors.section}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span style={{ color: colors.text }}>{t('services.title')}</span>
                    </h2>
                    <p className={`${colors.textSec} text-lg sm:text-xl max-w-2xl mx-auto`}>
                        {t('services.subtitle')}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon];

                        return (
                            <div
                                key={index}
                                onClick={() => handleServiceClick(index)}
                                tabIndex={0}
                                role="button"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleServiceClick(index);
                                    }
                                }}
                                className={`${colors.card} backdrop-blur-sm p-6 ${BORDER_RADIUS.lg} border ${colors.border} transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer hover:border-amber-500 focus:outline-none focus:border-amber-500 focus:shadow-lg group flex flex-col`}
                            >
                                {/* Icon Container */}
                                <div className="mb-4">
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                                        style={{
                                            backgroundColor: COLORS.primary,
                                        }}
                                    >
                                        {IconComponent && (
                                            <IconComponent
                                                className="w-6 h-6 text-white"
                                                strokeWidth={2}
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1">
                                    <h3
                                        className="text-xl font-bold mb-2"
                                        style={{ color: colors.text }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p className={`${colors.textSec} leading-relaxed text-sm mb-4 flex-1`}>
                                        {service.desc}
                                    </p>

                                    {/* Simple arrow indicator - always at bottom */}
                                    <div
                                        className="flex items-center gap-2 mt-auto pt-2"
                                        style={{ color: COLORS.primary }}
                                    >
                                        <span className="text-sm font-semibold">{t('services.learnMore')}</span>
                                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};