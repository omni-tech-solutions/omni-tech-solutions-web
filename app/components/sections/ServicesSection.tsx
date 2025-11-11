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

    // Feature texts for each service (rotating pattern)
    const getFeatures = (index: number): [string, string] => {
        const featurePatterns = [
            [t('services.features.fastDelivery'), t('services.features.support247')],
            [t('services.features.professionalTeam'), t('services.features.modernTools')],
            [t('services.features.qualityGuaranteed'), t('services.features.bestPractices')]
        ];
        return featurePatterns[index % 3] as [string, string];
    };

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
                        const [feature1, feature2] = getFeatures(index);

                        return (
                            <div
                                key={index}
                                onClick={() => handleServiceClick(index)}
                                className={`${colors.card} backdrop-blur-sm p-6 ${BORDER_RADIUS.lg} border ${colors.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer hover:border-amber-500 group relative overflow-hidden`}
                                style={{
                                    borderColor: colors.border,
                                }}
                            >
                                {/* Gradient glow effect on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(circle at top left, ${COLORS.primary}05, transparent 70%)`
                                    }}
                                />

                                {/* Decorative corner element */}
                                <div
                                    className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                                    style={{
                                        background: `radial-gradient(circle at top right, ${COLORS.primary}, transparent 70%)`
                                    }}
                                />

                                {/* Service number badge */}
                                <div
                                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                                    style={{
                                        backgroundColor: COLORS.primary,
                                        color: 'white'
                                    }}
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {/* Icon Container */}
                                <div className="relative mb-4">
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative"
                                        style={{
                                            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`
                                        }}
                                    >
                                        {IconComponent && (
                                            <IconComponent
                                                className="w-7 h-7 text-white"
                                                strokeWidth={2}
                                            />
                                        )}
                                    </div>

                                    {/* Glow effect behind icon */}
                                    <div
                                        className="absolute inset-0 w-14 h-14 rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"
                                        style={{ backgroundColor: COLORS.primary }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative">
                                    <h3
                                        className="text-xl font-bold mb-2 transition-colors duration-300 line-clamp-1"
                                        style={{ color: colors.text }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p className={`${colors.textSec} leading-relaxed text-sm mb-4 line-clamp-2`}>
                                        {service.desc}
                                    </p>

                                    {/* Divider line */}
                                    <div
                                        className="w-12 h-0.5 mb-3 group-hover:w-full transition-all duration-300"
                                        style={{ backgroundColor: `${COLORS.primary}30` }}
                                    />

                                    {/* Features list */}
                                    <div className="space-y-1.5 mb-4">
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="w-1.5 h-1.5 rounded-full"
                                                style={{ backgroundColor: COLORS.primary }}
                                            />
                                            <span className={`text-xs ${colors.textSec}`}>
                                                {feature1}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="w-1.5 h-1.5 rounded-full"
                                                style={{ backgroundColor: COLORS.primary }}
                                            />
                                            <span className={`text-xs ${colors.textSec}`}>
                                                {feature2}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Hover arrow indicator with better styling */}
                                    <div
                                        className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        style={{ color: colors.text }}
                                    >
                                        <span className="text-sm font-semibold">{t('services.learnMore')}</span>
                                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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