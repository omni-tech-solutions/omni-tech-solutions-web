'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter, useParams } from 'next/navigation';
import {
    Globe,
    Code2,
    Network,
    Camera,
    Smartphone,
    MonitorSmartphone,
    ArrowLeft,
    Check,
    Zap,
    Shield,
    Clock,
    Users,
    Mail,
    Phone,
    Award,
    TrendingUp,
    CheckCircle2,
    ChevronRight
} from 'lucide-react';
import { COLORS, BORDER_RADIUS } from '@/app/styles/theme';

interface ServiceDetailPageProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

// Service mapping
const serviceConfig: Record<string, {
    icon: any;
    iconName: string;
}> = {
    'web-design': { icon: Globe, iconName: 'Globe' },
    'web-applications': { icon: Code2, iconName: 'Code2' },
    'local-networks': { icon: Network, iconName: 'Network' },
    'video-surveillance': { icon: Camera, iconName: 'Camera' },
    'smartphone-repair': { icon: Smartphone, iconName: 'Smartphone' },
    'operating-systems': { icon: MonitorSmartphone, iconName: 'MonitorSmartphone' }
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ colors }) => {
    const { t } = useTranslation();
    const router = useRouter();
    const params = useParams();
    const serviceId = params?.serviceId as string;

    // Get service data
    const services = t('services.items', { returnObjects: true }) as Array<{
        icon: string;
        title: string;
        desc: string;
    }>;

    const serviceIndex = Object.keys(serviceConfig).indexOf(serviceId);
    const service = services[serviceIndex];
    const IconComponent = serviceConfig[serviceId]?.icon || Globe;

    // Get pricing for this service
    const pricing = t(`services.pricing.${serviceId}`, { returnObjects: true }) as Array<{
        name: string;
        price: string;
        description?: string;
    }> | undefined;

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className={`text-3xl font-bold mb-4 ${colors.text}`}>
                        {t('services.notFound') || 'Service not found'}
                    </h1>
                    <button
                        onClick={() => router.push('/')}
                        className={`px-6 py-3 ${BORDER_RADIUS.md} text-white font-semibold transition-all duration-200 hover:opacity-90`}
                        style={{ backgroundColor: COLORS.primary }}
                    >
                        {t('services.backToHome') || 'Back to Home'}
                    </button>
                </div>
            </div>
        );
    }

    // Feature benefits data
    const benefits = [
        { icon: Zap, text: t('services.features.fastDelivery') },
        { icon: Shield, text: t('services.features.qualityGuaranteed') },
        { icon: Clock, text: t('services.features.support247') },
        { icon: Users, text: t('services.features.professionalTeam') },
        { icon: TrendingUp, text: t('services.features.modernTools') },
        { icon: CheckCircle2, text: t('services.features.bestPractices') }
    ];

    // Trust indicators
    const trustIndicators = [
        { icon: Award, value: '5+', label: 'Years Experience' },
        { icon: Users, value: '100+', label: 'Happy Clients' },
        { icon: CheckCircle2, value: '500+', label: 'Projects Done' },
        { icon: TrendingUp, value: '98%', label: 'Success Rate' }
    ];

    return (
        <div className={`min-h-screen ${colors.section} pt-24 pb-20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button
                    onClick={() => router.push('/')}
                    className={`flex items-center gap-2 mb-8 ${colors.textSec} transition-all duration-200 group`}
                    style={{
                        '--hover-color': COLORS.primary
                    } as React.CSSProperties}
                    onMouseEnter={(e) => e.currentTarget.style.color = COLORS.primary}
                    onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                    <span className="font-semibold">{t('services.backToServices') || 'Back to Services'}</span>
                </button>

                {/* Hero Section */}
                <div className={`${colors.card} rounded-2xl border ${colors.border} overflow-hidden mb-12`} style={{ borderWidth: '1px' }}>
                    <div className="grid md:grid-cols-5 gap-0">
                        {/* Left: Text Content - 3 columns */}
                        <div className="md:col-span-3 flex flex-col justify-center p-8 sm:p-10 md:p-14">
                            <h1
                                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight"
                                style={{ color: colors.text }}
                            >
                                {service.title}
                            </h1>

                            <p className={`${colors.textSec} text-base sm:text-lg leading-relaxed mb-8`}>
                                {service.desc}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => {
                                        const contactSection = document.getElementById('contact');
                                        if (contactSection) {
                                            window.scrollTo({
                                                top: contactSection.offsetTop - 80,
                                                behavior: 'smooth'
                                            });
                                        } else {
                                            router.push('/#contact');
                                        }
                                    }}
                                    className={`px-8 py-4 ${BORDER_RADIUS.lg} font-semibold transition-all duration-200 flex items-center justify-center gap-2 hover:opacity-90 hover:shadow-lg hover:scale-[1.02]`}
                                    style={{
                                        backgroundColor: COLORS.primary,
                                        color: 'white'
                                    }}
                                >
                                    <Mail className="w-5 h-5" />
                                    {t('services.getQuote') || 'Get a Quote'}
                                </button>

                                <button
                                    onClick={() => {
                                        const pricingSection = document.querySelector('[data-pricing-section]');
                                        if (pricingSection) {
                                            pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }
                                    }}
                                    className={`px-8 py-4 ${BORDER_RADIUS.lg} font-semibold transition-all duration-200 flex items-center justify-center gap-2 border group`}
                                    style={{
                                        borderWidth: '2px',
                                        borderColor: `${COLORS.primary}33`,
                                        color: colors.text
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = COLORS.primary;
                                        e.currentTarget.style.color = COLORS.primary;
                                        e.currentTarget.style.backgroundColor = `${COLORS.primary}0D`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = `${COLORS.primary}33`;
                                        e.currentTarget.style.color = '';
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                >
                                    {t('services.viewPortfolio') || 'View Pricing'}
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                                </button>
                            </div>
                        </div>

                        {/* Right: Illustration - 2 columns */}
                        <div className="md:col-span-2 relative flex items-center justify-center order-first md:order-last p-8 md:p-12" style={{ background: `linear-gradient(135deg, ${COLORS.primary}05 0%, ${COLORS.primary}12 100%)` }}>
                            <div className="relative w-full h-full flex items-center justify-center min-h-[280px]">
                                {/* Decorative grid pattern */}
                                <div className="absolute inset-0 opacity-20">
                                    <div
                                        className="w-full h-full"
                                        style={{
                                            backgroundImage: `radial-gradient(${COLORS.primary}40 1px, transparent 1px)`,
                                            backgroundSize: '24px 24px'
                                        }}
                                    />
                                </div>

                                {/* Main Icon */}
                                <div className="relative z-10 flex items-center justify-center">
                                    <IconComponent
                                        className="w-32 h-32 sm:w-40 sm:h-40"
                                        style={{ color: COLORS.primary, filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08))' }}
                                        strokeWidth={1.2}
                                    />
                                </div>

                                {/* Floating accent elements */}
                                <div
                                    className="absolute top-8 right-8 w-16 h-16 rounded-lg opacity-60 rotate-12"
                                    style={{
                                        background: `linear-gradient(135deg, ${COLORS.primary}20, ${COLORS.primary}10)`,
                                        backdropFilter: 'blur(10px)'
                                    }}
                                />
                                <div
                                    className="absolute bottom-10 left-10 w-12 h-12 rounded-full opacity-50"
                                    style={{
                                        background: `linear-gradient(135deg, ${COLORS.primary}25, ${COLORS.primary}15)`,
                                        backdropFilter: 'blur(10px)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {trustIndicators.map((item, index) => (
                        <div
                            key={index}
                            className={`${colors.card} ${BORDER_RADIUS.lg} border ${colors.border} p-4 sm:p-6 text-center transition-all duration-200 hover:shadow-md`}
                            style={{ borderWidth: '1px' }}
                        >
                            <div className="flex justify-center mb-2">
                                <div
                                    className={`w-10 h-10 sm:w-12 sm:h-12 ${BORDER_RADIUS.md} flex items-center justify-center`}
                                    style={{ backgroundColor: `${COLORS.primary}14` }}
                                >
                                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: COLORS.primary }} strokeWidth={1.5} />
                                </div>
                            </div>
                            <div className="text-xl sm:text-2xl font-bold mb-1" style={{ color: COLORS.primary }}>
                                {item.value}
                            </div>
                            <div className={`text-xs sm:text-sm ${colors.textSec}`}>
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pricing Section */}
                {pricing && pricing.length > 0 && (
                    <div className="mb-12" data-pricing-section>
                        <div className="text-center mb-8">
                            <h2
                                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
                                style={{ color: colors.text }}
                            >
                                {t('services.pricingTitle') || 'Services & Pricing'}
                            </h2>
                            <p className={`${colors.textSec} text-base sm:text-lg max-w-2xl mx-auto`}>
                                {t('services.pricingSubtitle') || 'Transparent pricing for quality services'}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                            {pricing.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${colors.card} ${BORDER_RADIUS.lg} border ${colors.border} transition-all duration-200 hover:shadow-md`}
                                    style={{ borderWidth: '1px' }}
                                >
                                    <div className="p-5 sm:p-6">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                                            <div className="flex-1 min-w-0">
                                                <h3 className={`text-base sm:text-lg font-bold mb-2 ${colors.text}`}>
                                                    {item.name}
                                                </h3>
                                                {item.description && (
                                                    <p className={`text-sm ${colors.textSec} leading-relaxed`}>
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="flex items-center justify-between sm:justify-end sm:flex-col sm:items-end gap-3 sm:gap-2 flex-shrink-0">
                                                <span
                                                    className="text-xl sm:text-2xl font-bold whitespace-nowrap"
                                                    style={{ color: COLORS.primary }}
                                                >
                                                    {item.price}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="w-full h-px mt-4" style={{ backgroundColor: colors.border }}/>

                                        <div className="flex items-center gap-2 mt-3">
                                            <CheckCircle2 className="w-4 h-4" style={{ color: COLORS.primary }} strokeWidth={2} />
                                            <span className={`text-xs ${colors.textSec}`}>
                                                Professional service with warranty
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pricing note */}
                        <div className={`mt-8 p-4 sm:p-6 ${BORDER_RADIUS.lg} border ${colors.border}`} style={{ borderWidth: '1px' }}>
                            <p className={`text-xs sm:text-sm ${colors.textSec}`}>
                                {t('services.pricingNote') || '* Prices may vary depending on complexity. Contact us for a detailed quote.'}
                            </p>
                        </div>
                    </div>
                )}

                {/* Benefits Grid */}
                <div className="mb-12">
                    <div className="text-center mb-8">
                        <h2
                            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
                            style={{ color: colors.text }}
                        >
                            {t('services.whyChooseUs') || 'Why Choose Us?'}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className={`${colors.card} p-5 sm:p-6 ${BORDER_RADIUS.lg} border ${colors.border} transition-all duration-200 hover:shadow-md`}
                                style={{ borderWidth: '1px' }}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`w-10 h-10 sm:w-12 sm:h-12 ${BORDER_RADIUS.md} flex items-center justify-center flex-shrink-0`}
                                        style={{ backgroundColor: `${COLORS.primary}14` }}
                                    >
                                        <benefit.icon
                                            className="w-5 h-5 sm:w-6 sm:h-6"
                                            style={{ color: COLORS.primary }}
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <div>
                                        <p className={`${colors.text} font-semibold leading-relaxed text-sm sm:text-base`}>
                                            {benefit.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Process Section */}
                <div className={`${colors.card} ${BORDER_RADIUS.lg} border ${colors.border} p-6 sm:p-8 md:p-12 mb-12`} style={{ borderWidth: '1px' }}>
                    <div className="text-center mb-8">
                        <h2
                            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
                            style={{ color: colors.text }}
                        >
                            {t('services.ourProcess') || 'Our Process'}
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="flex gap-4 sm:gap-6">
                                <div
                                    className={`w-10 h-10 sm:w-12 sm:h-12 ${BORDER_RADIUS.md} flex items-center justify-center flex-shrink-0 font-bold text-white text-lg`}
                                    style={{ backgroundColor: COLORS.primary }}
                                >
                                    {step}
                                </div>
                                <div className="flex-1">
                                    <h3 className={`text-lg sm:text-xl font-bold mb-2 ${colors.text}`}>
                                        {t(`services.process.step${step}.title`) || `Step ${step}`}
                                    </h3>
                                    <p className={`${colors.textSec} leading-relaxed text-sm sm:text-base`}>
                                        {t(`services.process.step${step}.desc`) || 'Process description here.'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact CTA */}
                <div
                    className={`${colors.card} ${BORDER_RADIUS.lg} border ${colors.border} p-6 sm:p-8 md:p-12 text-center`}
                    style={{ borderWidth: '1px' }}
                >
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
                        style={{ color: colors.text }}
                    >
                        {t('services.readyToStart') || 'Ready to Get Started?'}
                    </h2>
                    <p className={`${colors.textSec} text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto`}>
                        {t('services.contactCTA') || 'Contact us today for a free consultation and quote.'}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+359123456789"
                            className={`flex items-center justify-center gap-2 px-6 py-3 ${BORDER_RADIUS.md} font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-lg`}
                            style={{
                                backgroundColor: COLORS.primary,
                                color: 'white'
                            }}
                        >
                            <Phone className="w-5 h-5" />
                            {t('contact.callUs') || 'Call Us'}
                        </a>

                        <a
                            href="mailto:info@omnitech.bg"
                            className={`flex items-center justify-center gap-2 px-6 py-3 ${BORDER_RADIUS.md} font-semibold transition-all duration-200 border group`}
                            style={{
                                borderWidth: '1px',
                                borderColor: colors.border,
                                color: colors.text
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = COLORS.primary;
                                e.currentTarget.style.color = COLORS.primary;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '';
                                e.currentTarget.style.color = '';
                            }}
                        >
                            <Mail className="w-5 h-5" />
                            {t('contact.emailUs') || 'Email Us'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};