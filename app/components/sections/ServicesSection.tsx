'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { COLORS, BORDER_RADIUS } from '@/app/styles/theme';
import { SERVICES, type ServiceCopy, type ServiceConfig } from '@/app/config/services';
import { ServicePrice } from '@/app/components/ui/ServicePrice';

interface ServicesSectionProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

// Desktop grid has 6 columns and each area fills exactly one row:
// 2 cards → half width, 3 cards → a third. Full class names so Tailwind keeps them.
const LG_SPAN: Record<number, string> = { 1: 'lg:col-span-6', 2: 'lg:col-span-3', 3: 'lg:col-span-2' };

export const ServicesSection: React.FC<ServicesSectionProps> = ({ colors }) => {
    const { t } = useTranslation();
    const isDark = colors.text === 'text-zinc-100';

    // Copy comes from the locale files, grouping and icons from the service config
    const copy = t('services.items', { returnObjects: true }) as ServiceCopy[];
    const findCopy = (id: string) =>
        Array.isArray(copy) ? copy.find((item) => item.id === id) : undefined;

    // Config order already runs software → infrastructure → support
    const services = SERVICES
        .map((config) => ({ config, copy: findCopy(config.id) }))
        .filter((e): e is { config: ServiceConfig; copy: ServiceCopy } => Boolean(e.copy));

    const groupSize = (group: ServiceConfig['group']) =>
        services.filter((s) => s.config.group === group).length;

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

                {/*
                  * One flat grid with no empty cells. Desktop: one row per area
                  * (3+3 / 2+2+2 / 3+3 of 6 columns). Tablet: with an odd count the
                  * first card goes full width so the rest pair up.
                  * Cards stay short on purpose — the details live on each service page.
                  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
                    {services.map(({ config, copy: service }, index) => {
                        const IconComponent = config.icon;
                        const fullOnTablet = index === 0 && services.length % 2 === 1;
                        // The headline service gets a solid brand card so the grid has one focal point
                        const featured = index === 0;

                        return (
                            <Link
                                key={config.id}
                                href={`/services/${config.id}`}
                                className={`omni-reveal group relative flex flex-col overflow-hidden ${fullOnTablet ? 'sm:col-span-2' : ''} ${LG_SPAN[groupSize(config.group)] ?? 'lg:col-span-2'} ${featured ? 'border-transparent' : `${colors.card} ${colors.border}`} backdrop-blur-sm p-6 sm:p-7 ${BORDER_RADIUS.lg} border shadow-[0_2px_10px_-2px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff6b1a] hover:shadow-[0_18px_40px_-12px_rgba(255,107,26,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b1a] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent`}
                                style={{
                                    animationDelay: `${index * 60}ms`,
                                    ...(featured && {
                                        background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryHover} 55%, ${COLORS.primaryDark} 100%)`,
                                    }),
                                }}
                            >
                                {/* Oversized watermark icon — turns slightly on hover */}
                                <IconComponent
                                    aria-hidden
                                    className={`absolute -bottom-8 -right-8 w-44 h-44 rotate-12 pointer-events-none transition-all duration-500 group-hover:rotate-0 group-hover:scale-105 ${featured ? 'text-white opacity-[0.14] group-hover:opacity-20' : 'opacity-[0.05] group-hover:opacity-[0.1]'}`}
                                    style={featured ? undefined : { color: COLORS.primary }}
                                    strokeWidth={1.2}
                                />

                                {/* Soft light behind the watermark */}
                                <span
                                    className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{ background: `radial-gradient(circle, ${featured ? 'rgba(255,255,255,0.18)' : `${COLORS.primary}22`}, transparent 70%)` }}
                                />

                                <div className="relative flex items-start justify-between mb-6">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                                        style={featured
                                            ? { backgroundColor: 'rgba(255,255,255,0.18)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.25)' }
                                            : { background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`, boxShadow: `0 8px 20px ${COLORS.primary}33` }}
                                    >
                                        <IconComponent className="w-6 h-6 text-white" strokeWidth={1.8} />
                                    </div>
                                    <span
                                        className={`font-mono text-sm font-semibold tracking-widest ${featured ? 'text-white/70' : colors.textTer}`}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                <h3 className={`relative text-xl font-bold mb-2 ${featured ? 'text-white' : colors.text}`}>
                                    {service.title}
                                </h3>
                                <p className={`relative leading-relaxed text-sm mb-6 flex-1 max-w-md ${featured ? 'text-white/85' : colors.textSec}`}>
                                    {service.desc}
                                </p>

                                {/* Starting price + link — the only other things on the card */}
                                <div className={`relative flex items-center justify-between gap-3 pt-4 border-t ${featured ? 'border-white/25' : colors.borderLight}`}>
                                    <ServicePrice service={config} colors={colors} tone={featured ? 'inverse' : 'default'} />
                                    <span
                                        className={`inline-flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap ${featured ? 'text-white' : ''}`}
                                        style={featured ? undefined : { color: COLORS.primary }}
                                    >
                                        {t('services.learnMore')}
                                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
