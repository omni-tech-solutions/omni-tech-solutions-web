'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import type { ServiceConfig } from '@/app/config/services';

interface ServicePriceProps {
    service: ServiceConfig;
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
    /** `card` is the compact form used on the service grid, `detail` the large one. */
    variant?: 'card' | 'detail';
    /** `inverse` is white text for a solid brand background; `accent` is logo yellow on dark cards and plain dark text on light ones (one brand yellow, readable prices). */
    tone?: 'default' | 'inverse' | 'accent';
    /** Light text on phones, for the dark mobile hero band of the service page. */
    onDarkMobile?: boolean;
}

/**
 * Starting price for a service, from `app/config/services.ts`. `null` shows
 * "by agreement". Formatted as "от 450 €" to match the price list rows.
 */
export const ServicePrice: React.FC<ServicePriceProps> = ({ service, colors, variant = 'card', tone = 'default', onDarkMobile = false }) => {
    const { t } = useTranslation();
    const isDetail = variant === 'detail';
    const inverse = tone === 'inverse';
    const darkMobileMain = onDarkMobile ? ' max-sm:text-white' : '';
    const darkMobileMuted = onDarkMobile ? ' max-sm:text-zinc-400' : '';
    const mutedClass = (inverse ? 'text-white/80' : colors.textSec) + darkMobileMuted;

    if (service.priceFrom === null) {
        return (
            <span className={`${isDetail ? 'text-base' : 'text-sm'} font-semibold ${inverse ? 'text-white' : colors.textSec}${darkMobileMain}`}>
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
                className={`${isDetail ? 'text-3xl sm:text-4xl' : 'text-xl'} font-bold ${inverse ? 'text-white' : tone === 'accent' && colors.text === 'text-zinc-100' ? colors.accentText : colors.text}${darkMobileMain}`}
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
