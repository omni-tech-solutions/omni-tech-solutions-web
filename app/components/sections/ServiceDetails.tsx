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
    Star,
    Mail,
    Phone,
    Award,
    TrendingUp,
    Headphones,
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
                        className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-all"
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
        { icon: Star, text: t('services.features.modernTools') },
        { icon: Check, text: t('services.features.bestPractices') }
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
                    className={`flex items-center gap-2 mb-8 ${colors.textSec} hover:text-amber-500 transition-colors group`}
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-semibold">{t('services.backToServices') || 'Back to Services'}</span>
                </button>

                {/* Hero Section */}
                <div className={`${colors.card} backdrop-blur-sm ${BORDER_RADIUS.lg} border ${colors.border} overflow-hidden mb-12`}>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-6 sm:p-8 md:p-12">
                        {/* Left: Text Content */}
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                <div
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center"
                                    style={{
                                        background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`
                                    }}
                                >
                                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={2} />
                                </div>
                                <div
                                    className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs font-bold"
                                    style={{
                                        backgroundColor: `${COLORS.primary}20`,
                                        color: COLORS.primary
                                    }}
                                >
                                    {String(serviceIndex + 1).padStart(2, '0')}
                                </div>
                            </div>

                            <h1
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
                                style={{ color: colors.text }}
                            >
                                {service.title}
                            </h1>

                            <p className={`${colors.textSec} text-base sm:text-lg leading-relaxed mb-4 sm:mb-6`}>
                                {service.desc}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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
                                    className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
                                    style={{
                                        background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                        color: 'white'
                                    }}
                                >
                                    {t('services.getQuote') || 'Get a Quote'}
                                </button>

                                <button
                                    onClick={() => {
                                        const pricingSection = document.querySelector('[data-pricing-section]');
                                        if (pricingSection) {
                                            pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }
                                    }}
                                    className={`w-full sm:w-auto px-6 py-3 rounded-lg border-2 font-semibold transition-all hover:bg-amber-500/10 flex items-center justify-center gap-2`}
                                    style={{ borderColor: COLORS.primary, color: colors.text }}
                                >
                                    {t('services.viewPortfolio') || 'View Pricing'}
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Right: Decorative Visual */}
                        <div className="relative flex items-center justify-center order-first md:order-last">
                            <div
                                className="w-full h-48 sm:h-64 md:h-full md:min-h-[300px] rounded-2xl relative overflow-hidden"
                                style={{
                                    background: `radial-gradient(circle at center, ${COLORS.primary}15, transparent 70%)`
                                }}
                            >
                                {/* Large Icon in Background */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                    <IconComponent className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64" strokeWidth={1} />
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 sm:w-20 sm:h-20 rounded-full animate-pulse"
                                     style={{ backgroundColor: `${COLORS.primary}20` }}
                                />
                                <div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 w-10 h-10 sm:w-16 sm:h-16 rounded-full animate-pulse animation-delay-400"
                                     style={{ backgroundColor: `${COLORS.primary}15` }}
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
                            className={`${colors.card} backdrop-blur-sm ${BORDER_RADIUS.lg} border ${colors.border} p-4 sm:p-6 text-center transition-all hover:shadow-lg`}
                        >
                            <div className="flex justify-center mb-2">
                                <div
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: `${COLORS.primary}15` }}
                                >
                                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: COLORS.primary }} />
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

                {/* Pricing Section - IMPROVED */}
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
                                    className={`${colors.card} backdrop-blur-sm ${BORDER_RADIUS.lg} border ${colors.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden`}
                                >
                                    {/* Hover glow effect */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                        style={{
                                            background: `radial-gradient(circle at top left, ${COLORS.primary}10, transparent 70%)`
                                        }}
                                    />

                                    <div className="relative z-10 p-5 sm:p-6">
                                        {/* Mobile-optimized layout */}
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                                            {/* Left: Title and Description */}
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

                                            {/* Right: Price - Better mobile layout */}
                                            <div className="flex items-center justify-between sm:justify-end sm:flex-col sm:items-end gap-3 sm:gap-2 flex-shrink-0">
                                                <span
                                                    className="text-xl sm:text-2xl font-bold whitespace-nowrap"
                                                    style={{ color: COLORS.primary }}
                                                >
                                                    {item.price}
                                                </span>

                                                {/* Quick action button - mobile friendly */}
                                            </div>
                                        </div>

                                        {/* Visual separator */}
                                        <div
                                            className="w-full h-px mt-4"
                                            style={{ backgroundColor: `${colors.borderLight}` }}
                                        />

                                        {/* Additional info tag */}
                                        <div className="flex items-center gap-2 mt-3">
                                            <CheckCircle2 className="w-4 h-4" style={{ color: COLORS.primary }} />
                                            <span className={`text-xs ${colors.textSec}`}>
                                                Professional service with warranty
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pricing note */}
                        <div className={`mt-8 p-4 sm:p-6 rounded-xl border ${colors.border}`} style={{ backgroundColor: `${COLORS.primary}05` }}>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 mt-1">
                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: `${COLORS.primary}20` }}
                                    >
                                        <Headphones className="w-4 h-4" style={{ color: COLORS.primary }} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className={`text-sm font-bold mb-1 ${colors.text}`}>
                                        Need a Custom Quote?
                                    </h4>
                                    <p className={`text-xs sm:text-sm ${colors.textSec}`}>
                                        {t('services.pricingNote') || '* Prices may vary depending on complexity. Contact us for a detailed quote.'}
                                    </p>
                                </div>
                            </div>
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
                                className={`${colors.card} backdrop-blur-sm p-5 sm:p-6 ${BORDER_RADIUS.lg} border ${colors.border} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                                        style={{ backgroundColor: `${COLORS.primary}15` }}
                                    >
                                        <benefit.icon
                                            className="w-5 h-5 sm:w-6 sm:h-6"
                                            style={{ color: COLORS.primary }}
                                            strokeWidth={2}
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

                {/* Process/Details Section */}
                <div className={`${colors.card} backdrop-blur-sm ${BORDER_RADIUS.lg} border ${colors.border} p-6 sm:p-8 md:p-12 mb-12`}>
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
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white text-lg"
                                    style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
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
                    className={`${colors.card} backdrop-blur-sm ${BORDER_RADIUS.lg} border ${colors.border} p-6 sm:p-8 md:p-12 text-center relative overflow-hidden`}
                >
                    {/* Background decoration */}
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            background: `radial-gradient(circle at top right, ${COLORS.primary}, transparent 60%)`
                        }}
                    />

                    <div className="relative z-10">
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
                                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
                                style={{
                                    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                    color: 'white'
                                }}
                            >
                                <Phone className="w-5 h-5" />
                                {t('contact.callUs') || 'Call Us'}
                            </a>

                            <a
                                href="mailto:info@omnitech.bg"
                                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 font-semibold transition-all hover:bg-amber-500/10`}
                                style={{ borderColor: COLORS.primary, color: colors.text }}
                            >
                                <Mail className="w-5 h-5" />
                                {t('contact.emailUs') || 'Email Us'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .animation-delay-400 {
                    animation-delay: 0.4s;
                }
            `}</style>
        </div>
    );
};