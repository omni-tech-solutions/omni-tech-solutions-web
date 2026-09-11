'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/app/styles/theme';
import type { ServiceConfig } from '@/app/config/services';

interface ServicePriceProps {
    service: ServiceConfig;
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
    /** `card` is the compact form used on the service grid, `detail` the large one. */
    variant?: 'card' | 'detail';
    /** `inverse` is white text, for use on a solid brand-coloured background. */
    tone?: 'default' | 'inverse';
}

/**
 * Starting price for a service, from `app/config/services.ts`. `null` shows
 * "by agreement". Formatted as "от 450 €" to match the price list rows.
 */
export const ServicePrice: React.FC<ServicePriceProps> = ({ service, colors, variant = 'card', tone = 'default' }) => {
    const { t } = useTranslation();
    const isDetail = variant === 'detail';
    const inverse = tone === 'inverse';
    const mutedClass = inverse ? 'text-white/80' : colors.textSec;

    if (service.priceFrom === null) {
        return (
            <span className={`${isDetail ? 'text-base' : 'text-sm'} font-semibold ${inverse ? 'text-white' : colors.textSec}`}>
                {t('services.priceOnRequest')}
            </span>
        );
    }

    return (
        <span className="inline-flex items-baseline gap-1.5">
            <span className={`${isDetail ? 'text-sm' : 'text-xs'} font-medium ${mutedClass}`}>
                {t('services.priceFrom')}
            </span>
            <span
                className={`${isDetail ? 'text-3xl sm:text-4xl' : 'text-xl'} font-bold ${inverse ? 'text-white' : 'bg-clip-text text-transparent'}`}
                style={inverse ? undefined : { backgroundImage: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
            >
                {service.priceFrom} €
            </span>
            {service.period === 'month' && (
                <span className={`${isDetail ? 'text-sm' : 'text-xs'} font-medium ${mutedClass}`}>
                    {t('services.pricePerMonth')}
                </span>
            )}
        </span>
    );
};
