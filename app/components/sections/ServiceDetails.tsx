'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, Mail, MapPin } from 'lucide-react';
import { COLORS, BORDER_RADIUS, CONTAINER } from '@/app/styles/theme';
import { getServiceConfig, type ServiceCopy } from '@/app/config/services';
import { ServicePrice } from '@/app/components/ui/ServicePrice';

const CONTACT_EMAIL = 'support@omni-solutions.co';

/** Shape of `services.details.<id>` in the locale files. */
interface ServiceDetailsCopy {
    processTitle?: string;
    process?: Array<{ title: string; desc: string }>;
    cta?: { title: string; text: string; note: string };
}

/** One line of `services.priceList.items.<id>` — price is already formatted per locale. */
interface PriceRow {
    name: string;
    detail: string;
    price: string;
}

/** One entry of `services.offerings.<id>`. */
interface Offering {
    name: string;
    description?: string;
}

interface ServiceDetailPageProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

/**
 * Service page, kept as plain as the homepage: what it is and what it costs,
 * what's included, the price list, how the work goes, and one call to action.
 * Orange is reserved for the primary button.
 */
export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ colors }) => {
    const { t } = useTranslation();
    const router = useRouter();
    const params = useParams();
    const serviceId = params?.serviceId as string;
    const isDark = colors.text === 'text-zinc-100';

    // Copy comes from the locale files, icon and pricing from the service config
    const services = t('services.items', { returnObjects: true }) as ServiceCopy[];
    const config = getServiceConfig(serviceId);
    const service = Array.isArray(services)
        ? services.find((item) => item.id === serviceId)
        : undefined;
    const IconComponent = config?.icon;

    // The contact form lives on the homepage
    const goToContact = () => router.push('/#contact');

    const primaryButton = `group inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-white ${BORDER_RADIUS.md} transition-colors duration-200 hover:bg-[#e85d0f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b1a] focus-visible:ring-offset-2`;
    // Both places the buttons appear are dark bands on phones, hence the max-sm colours
    const secondaryButton = `inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold ${BORDER_RADIUS.md} border ${colors.border} ${colors.text} max-sm:border-zinc-700 max-sm:text-white max-sm:bg-white/5 transition-colors duration-200 hover:border-zinc-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b1a] focus-visible:ring-offset-2`;

    if (!service || !config || !IconComponent) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className={`text-3xl font-bold mb-6 ${colors.text}`}>
                        {t('services.notFound')}
                    </h1>
                    <button
                        onClick={() => router.push('/')}
                        className={primaryButton}
                        style={{ backgroundColor: COLORS.primary }}
                    >
                        {t('services.backToHome')}
                    </button>
                </div>
            </div>
        );
    }

    // Service-specific copy (process, CTA); the shared keys are the fallback
    const details = t(`services.details.${serviceId}`, { returnObjects: true }) as ServiceDetailsCopy | string;
    const detail = typeof details === 'object' && details !== null ? details : undefined;

    const offeringsRaw = t(`services.offerings.${serviceId}`, { returnObjects: true }) as Offering[] | string;
    const offerings = Array.isArray(offeringsRaw) ? offeringsRaw : [];

    // Price list rows for this service + the general terms (from the official price list)
    const priceRowsRaw = t(`services.priceList.items.${serviceId}`, { returnObjects: true }) as PriceRow[] | string;
    const priceRows = Array.isArray(priceRowsRaw) ? priceRowsRaw : [];
    const priceTermsRaw = t('services.priceList.terms', { returnObjects: true }) as string[] | string;
    const priceTerms = Array.isArray(priceTermsRaw) ? priceTermsRaw : [];

    const processSteps = detail?.process ?? [1, 2, 3, 4].map((step) => ({
        title: t(`services.process.step${step}.title`),
        desc: t(`services.process.step${step}.desc`)
    }));

    const sectionClass = `py-12 sm:py-16 border-t ${colors.borderLight}`;

    const heading = (title: string, subtitle?: string) => (
        <div className="mb-8 sm:mb-10">
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${colors.text}`}>{title}</h2>
            {subtitle && <p className={`mt-2 ${colors.textSec}`}>{subtitle}</p>}
        </div>
    );

    const actions = (
        <>
            <button onClick={goToContact} className={primaryButton} style={{ backgroundColor: COLORS.primary }}>
                {t(`services.cta.${config.group}.action`, { defaultValue: t('services.getQuote') })}
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
            </button>
            <a href={`mailto:${CONTACT_EMAIL}`} className={secondaryButton}>
                <Mail className="w-5 h-5" strokeWidth={2} />
                {t('contact.emailUs')}
            </a>
        </>
    );

    return (
        <div className="pt-20">
            {/* Hero — on phones a full-width solid dark band, like the homepage hero */}
            <section className="max-sm:bg-zinc-950">
                <div className={`${CONTAINER} py-10 sm:py-14`}>
                    <Link
                        href="/#services"
                        className={`inline-flex items-center gap-2 text-sm font-medium ${colors.textSec} max-sm:text-zinc-300 hover:underline`}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {t('services.backToServices')}
                    </Link>

                    <div className="mt-10 max-w-3xl">
                        <div className="flex items-center gap-3 mb-5">
                            <span className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDark ? 'bg-zinc-700/60' : 'bg-gray-100'} max-sm:bg-[#ff6b1a]/15`}>
                                <IconComponent className={`w-6 h-6 ${colors.text} max-sm:text-[#ff8a58]`} strokeWidth={2} />
                            </span>
                            <span className={`text-sm font-semibold uppercase tracking-wider ${colors.textTer} max-sm:text-[#ff8a58]`}>
                                {t(`services.groups.${config.group}.title`)}
                            </span>
                        </div>

                        <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight ${colors.text} max-sm:text-white`}>
                            {service.title}
                        </h1>
                        <p className={`mt-5 text-lg leading-relaxed ${colors.textSec} max-sm:text-zinc-300`}>
                            {service.desc}
                        </p>
                        {config.onSite && (
                            <p className={`mt-4 flex items-center gap-2 text-sm ${colors.textTer} max-sm:text-zinc-400`}>
                                <MapPin className="w-4 h-4" strokeWidth={2} />
                                {t('services.onSiteBadge')}
                            </p>
                        )}

                        <div className={`mt-8 pt-6 border-t ${colors.borderLight} max-sm:border-zinc-800`}>
                            <ServicePrice service={config} colors={colors} variant="detail" onDarkMobile />
                            <p className={`mt-2 text-sm leading-relaxed ${colors.textTer} max-sm:text-zinc-400 max-w-xl`}>
                                {t('services.priceNote')}
                            </p>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">{actions}</div>
                    </div>
                </div>
            </section>

            <div className={CONTAINER}>

            {/* What's included */}
            {offerings.length > 0 && (
                <section id="offerings" className={`${sectionClass} scroll-mt-24`}>
                    {heading(t('services.offeringsTitle'), t('services.offeringsSubtitle'))}
                    <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
                        {offerings.map((item) => (
                            <li key={item.name} className="flex gap-3">
                                <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${colors.textTer}`} strokeWidth={2.5} />
                                <div>
                                    <p className={`font-semibold ${colors.text}`}>{item.name}</p>
                                    {item.description && (
                                        <p className={`mt-1 text-sm leading-relaxed ${colors.textSec}`}>{item.description}</p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className={`mt-8 text-sm ${colors.textTer}`}>{t('services.offeringsNote')}</p>
                </section>
            )}

            {/* Price list */}
            {priceRows.length > 0 && (
                <section id="pricing" className={`${sectionClass} scroll-mt-24`}>
                    {heading(t('services.priceList.title'), t('services.priceList.subtitle'))}
                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                        <div className={`lg:col-span-3 ${colors.card} ${BORDER_RADIUS.lg} border ${colors.border} overflow-hidden self-start`}>
                            {priceRows.map((row, index) => (
                                <div
                                    key={row.name}
                                    className={`flex items-center justify-between gap-4 px-5 sm:px-6 py-4 ${index > 0 ? `border-t ${colors.borderLight}` : ''}`}
                                >
                                    <div className="min-w-0">
                                        <p className={`font-medium ${colors.text}`}>{row.name}</p>
                                        <p className={`text-sm mt-0.5 ${colors.textTer}`}>{row.detail}</p>
                                    </div>
                                    <span className={`font-semibold whitespace-nowrap ${colors.text}`}>{row.price}</span>
                                </div>
                            ))}
                        </div>

                        {priceTerms.length > 0 && (
                            <div className="lg:col-span-2">
                                <h3 className={`font-semibold mb-4 ${colors.text}`}>{t('services.priceList.termsTitle')}</h3>
                                <ul className="space-y-3">
                                    {priceTerms.map((term) => (
                                        <li key={term} className={`flex gap-3 text-sm leading-relaxed ${colors.textSec}`}>
                                            <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-current" />
                                            {term}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* How the work goes */}
            <section className={sectionClass}>
                {heading(detail?.processTitle || t('services.ourProcess'))}
                <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => (
                        <li key={step.title}>
                            <span className={`inline-flex w-8 h-8 rounded-full items-center justify-center text-sm font-semibold border ${colors.border} ${colors.text}`}>
                                {index + 1}
                            </span>
                            <h3 className={`mt-4 font-semibold ${colors.text}`}>{step.title}</h3>
                            <p className={`mt-2 text-sm leading-relaxed ${colors.textSec}`}>{step.desc}</p>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Closing call to action */}
            {/* On phones: a full-width dark band that flows into the dark footer */}
            <section className={`${sectionClass} text-center max-sm:-mx-4 max-sm:px-4 max-sm:bg-zinc-950 max-sm:border-t-0`}>
                <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${colors.text} max-sm:text-white`}>
                    {detail?.cta?.title || t('services.readyToStart')}
                </h2>
                <p className={`mt-4 text-lg ${colors.textSec} max-sm:text-zinc-300 max-w-2xl mx-auto`}>
                    {detail?.cta?.text || t('services.contactCTA')}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">{actions}</div>
            </section>
            </div>
        </div>
    );
};
