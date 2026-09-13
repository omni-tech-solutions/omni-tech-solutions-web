'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { COLORS, BORDER_RADIUS, CONTAINER } from '@/app/styles/theme';
import { SERVICES, SERVICE_GROUPS, type ServiceCopy } from '@/app/config/services';
import { ServicePrice } from '@/app/components/ui/ServicePrice';

interface ServicesSectionProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

/**
 * Services grouped under the three pillars (software / infrastructure / support),
 * so a visitor can see the whole offer at a glance. Cards stay short on purpose —
 * the details live on each service page.
 */
export const ServicesSection: React.FC<ServicesSectionProps> = ({ colors }) => {
    const { t } = useTranslation();

    // Copy comes from the locale files, grouping and icons from the service config
    const copy = t('services.items', { returnObjects: true }) as ServiceCopy[];
    const findCopy = (id: string) =>
        Array.isArray(copy) ? copy.find((item) => item.id === id) : undefined;

    return (
        <section id="services" className={`py-20 sm:py-24 ${colors.section}`}>
            <div className={CONTAINER}>
                <div className="text-center mb-14">
                    <p className={`text-sm font-semibold uppercase tracking-wider mb-3 ${colors.textTer}`}>
                        {t('services.title')}
                    </p>
                    <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${colors.text}`}>
                        {t('services.subtitle')}
                    </h2>
                </div>

                <div className="space-y-14">
                    {SERVICE_GROUPS.map((group) => {
                        const services = SERVICES.filter((s) => s.group === group);

                        return (
                            <div key={group}>
                                <div className="mb-5">
                                    <h3 className={`text-xl font-bold ${colors.text}`}>
                                        {t(`services.groups.${group}.title`)}
                                    </h3>
                                    <p className={`mt-1 text-sm ${colors.textTer}`}>
                                        {t(`services.groups.${group}.desc`)}
                                    </p>
                                </div>

                                {/* Two cards share the row; three split it — no empty slots */}
                                <div className={`grid grid-cols-1 sm:grid-cols-2 ${services.length === 3 ? 'lg:grid-cols-3' : ''} gap-4 sm:gap-5`}>
                                    {services.map((config) => {
                                        const service = findCopy(config.id);
                                        if (!service) return null;
                                        const Icon = config.icon;

                                        return (
                                            <Link
                                                key={config.id}
                                                href={`/services/${config.id}`}
                                                className={`group flex flex-col ${colors.card} border ${colors.border} p-5 sm:p-6 ${BORDER_RADIUS.lg} max-sm:shadow-[0_6px_20px_-8px_rgba(0,0,0,0.18)] transition-colors duration-200 hover:border-[#f9a427] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f9a427]`}
                                            >
                                                {/* Phones: icon beside the title for a compact, scannable list; larger screens: stacked */}
                                                <div className="flex items-center gap-4 sm:block">
                                                    <span
                                                        className="w-12 h-12 flex-shrink-0 sm:mb-5 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
                                                        style={{ backgroundColor: `${COLORS.primary}24` }}
                                                    >
                                                        <Icon className="w-6 h-6" style={{ color: COLORS.primary }} strokeWidth={2} />
                                                    </span>
                                                    <h4 className={`text-lg font-semibold leading-snug sm:mb-2 ${colors.text}`}>
                                                        {service.title}
                                                    </h4>
                                                </div>
                                                <p className={`mt-3 sm:mt-0 text-sm leading-relaxed flex-1 ${colors.textSec}`}>
                                                    {service.desc}
                                                </p>
                                                <div className={`mt-5 pt-4 border-t ${colors.borderLight} flex items-center justify-between gap-3`}>
                                                    <ServicePrice service={config} colors={colors} tone="accent" />
                                                    <ArrowRight
                                                        className={`w-5 h-5 ${colors.textTer} transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#f9a427]`}
                                                        aria-hidden
                                                    />
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
