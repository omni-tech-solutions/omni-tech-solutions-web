'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import {
    Globe,
    Code2,
    Network,
    Camera,
    MonitorSmartphone,
    Smartphone,
    ArrowLeft,
    Zap,
    Shield,
    Clock,
    Users,
    Mail,
    Phone,
    Award,
    TrendingUp,
    CheckCircle2,
    ChevronRight,
    Check,
    Info,
    Sparkles
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
    'operating-systems': { icon: MonitorSmartphone, iconName: 'MonitorSmartphone' },
    'smartphone-repair': { icon: Smartphone, iconName: 'Smartphone' }
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ colors }) => {
    const { t } = useTranslation();
    const router = useRouter();
    const params = useParams();
    const serviceId = params?.serviceId as string;
    const isDark = colors.text === 'text-zinc-100';

    // Get service data
    const services = t('services.items', { returnObjects: true }) as Array<{
        icon: string;
        title: string;
        desc: string;
    }>;

    const serviceIndex = Object.keys(serviceConfig).indexOf(serviceId);
    const service = services[serviceIndex];
    const IconComponent = serviceConfig[serviceId]?.icon || Globe;

    // Concrete solutions we deliver within this service (no pricing — quotes are individual)
    const offerings = t(`services.offerings.${serviceId}`, { returnObjects: true }) as Array<{
        name: string;
        description?: string;
    }> | undefined;

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            window.scrollTo({
                top: contactSection.offsetTop - 80,
                behavior: 'smooth'
            });
        } else {
            router.push('/#contact');
        }
    };

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
        { icon: Award, value: '5+', label: t('trustIndicators.experience') || 'Years Experience' },
        { icon: CheckCircle2, value: '10+', label: t('trustIndicators.projects') || 'Completed Projects' },
        { icon: Clock, value: '24/7', label: t('trustIndicators.availability') || 'Available' },
        { icon: TrendingUp, value: '100%', label: t('trustIndicators.quality') || 'High Quality' }
    ];

    // Quick highlights shown under the hero copy
    const highlights = [
        t('services.features.qualityGuaranteed'),
        t('services.features.professionalTeam'),
        t('services.features.support247')
    ];

    return (
        <div className={`relative min-h-screen ${colors.section} pt-24 pb-20 overflow-hidden`}>
            {/* Ambient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]"
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
                {/* Back Button */}
                <Link
                    href="/#services"
                    className={`group inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border ${colors.borderLight} ${colors.card} ${colors.textSec} text-sm font-semibold transition-all duration-200 hover:border-[#ff6b1a] hover:text-[#ff6b1a]`}
                >
                    <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                    {t('services.backToServices') || 'Back to Services'}
                </Link>

                {/* Hero Section */}
                <div className={`${colors.card} ${BORDER_RADIUS.lg} border ${colors.border} overflow-hidden mb-12 shadow-sm`}>
                    <div className="grid md:grid-cols-5 gap-0">
                        {/* Left: Text Content - 3 columns */}
                        <div className="md:col-span-3 flex flex-col justify-center p-8 sm:p-10 md:p-14">
                            <div
                                className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
                                style={{
                                    backgroundColor: `${COLORS.primary}15`,
                                    border: `1px solid ${COLORS.primary}33`,
                                    color: COLORS.primary,
                                }}
                            >
                                <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
                                {t('services.title')}
                            </div>

                            <h1
                                className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight tracking-tight ${colors.text}`}
                            >
                                {service.title}
                            </h1>

                            <div
                                className="w-14 h-1 rounded-full mb-5"
                                style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
                            />

                            <p className={`${colors.textSec} text-base sm:text-lg leading-relaxed mb-6`}>
                                {service.desc}
                            </p>

                            {/* Highlights */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {highlights.map((highlight) => (
                                    <span
                                        key={highlight}
                                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${colors.textSec}`}
                                        style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)' }}
                                    >
                                        <Check className="w-3.5 h-3.5" style={{ color: COLORS.primary }} strokeWidth={2.5} />
                                        {highlight}
                                    </span>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={scrollToContact}
                                    className={`group px-7 py-3.5 ${BORDER_RADIUS.md} font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.03] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#ff6b1a] focus:ring-offset-2 focus:ring-offset-transparent`}
                                    style={{
                                        background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                        boxShadow: `0 10px 24px -8px ${COLORS.primary}80`,
                                    }}
                                >
                                    <Mail className="w-5 h-5" />
                                    {t('services.getQuote') || 'Get a Quote'}
                                </button>

                                <a
                                    href="#offerings"
                                    className={`group px-7 py-3.5 ${BORDER_RADIUS.md} font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2 ${colors.borderLight} ${colors.text} hover:border-[#ff6b1a] hover:text-[#ff6b1a]`}
                                >
                                    {t('services.exploreOfferings') || 'Explore Solutions'}
                                    <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>

                        {/* Right: Illustration - 2 columns */}
                        <div
                            className="md:col-span-2 relative flex items-center justify-center order-first md:order-last p-8 md:p-12"
                            style={{ background: `linear-gradient(135deg, ${COLORS.primary}08 0%, ${COLORS.primary}16 100%)` }}
                        >
                            <div className="relative w-full h-full flex items-center justify-center min-h-[280px]">
                                {/* Decorative grid pattern */}
                                <div
                                    className="absolute inset-0 opacity-20"
                                    style={{
                                        backgroundImage: `radial-gradient(${COLORS.primary}40 1px, transparent 1px)`,
                                        backgroundSize: '24px 24px'
                                    }}
                                />

                                {/* Concentric rings */}
                                <div
                                    className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full"
                                    style={{ border: `1px solid ${COLORS.primary}25` }}
                                />
                                <div
                                    className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full"
                                    style={{ border: `1px solid ${COLORS.primary}35` }}
                                />

                                {/* Main Icon */}
                                <div
                                    className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-3xl flex items-center justify-center"
                                    style={{
                                        background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                        boxShadow: `0 20px 45px -12px ${COLORS.primary}80`,
                                    }}
                                >
                                    <IconComponent
                                        className="w-14 h-14 sm:w-16 sm:h-16 text-white"
                                        strokeWidth={1.4}
                                    />
                                </div>

                                {/* Floating accent elements */}
                                <div
                                    className="absolute top-8 right-8 w-16 h-16 rounded-2xl opacity-60 rotate-12"
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {trustIndicators.map((item, index) => (
                        <div
                            key={index}
                            className={`${colors.card} ${BORDER_RADIUS.md} border ${colors.border} p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b1a] hover:shadow-lg`}
                        >
                            <div className="flex justify-center mb-3">
                                <div
                                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                                    style={{ backgroundColor: `${COLORS.primary}14` }}
                                >
                                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: COLORS.primary }} strokeWidth={1.8} />
                                </div>
                            </div>
                            <div
                                className="text-xl sm:text-2xl font-bold mb-1 bg-clip-text text-transparent"
                                style={{ backgroundImage: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
                            >
                                {item.value}
                            </div>
                            <div className={`text-xs sm:text-sm ${colors.textSec}`}>
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* What We Deliver */}
                {offerings && offerings.length > 0 && (
                    <div id="offerings" className="mb-16 scroll-mt-28">
                        <div className="text-center mb-10">
                            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight ${colors.text}`}>
                                {t('services.offeringsTitle') || 'What We Deliver'}
                            </h2>
                            <p className={`${colors.textSec} text-base sm:text-lg max-w-2xl mx-auto`}>
                                {t('services.offeringsSubtitle') || 'A complete range of solutions for your project'}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                            {offerings.map((item, index) => (
                                <div
                                    key={index}
                                    className={`group relative flex flex-col overflow-hidden ${colors.card} ${BORDER_RADIUS.md} border ${colors.border} p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b1a] hover:shadow-[0_16px_36px_-14px_rgba(255,107,26,0.35)]`}
                                >
                                    {/* Left accent bar */}
                                    <span
                                        className="absolute left-0 top-0 w-[3px] h-0 group-hover:h-full transition-all duration-500 ease-out"
                                        style={{ background: `linear-gradient(180deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
                                    />

                                    <div className="flex items-start gap-3 mb-3">
                                        <div
                                            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                            style={{ backgroundColor: `${COLORS.primary}14` }}
                                        >
                                            <Check className="w-5 h-5" style={{ color: COLORS.primary }} strokeWidth={2.5} />
                                        </div>
                                        <h3 className={`text-base sm:text-lg font-bold leading-snug ${colors.text}`}>
                                            {item.name}
                                        </h3>
                                    </div>

                                    {item.description && (
                                        <p className={`text-sm ${colors.textSec} leading-relaxed flex-1`}>
                                            {item.description}
                                        </p>
                                    )}

                                    <div className={`flex items-center gap-2 mt-4 pt-3 border-t ${colors.borderLight}`}>
                                        <Shield className="w-3.5 h-3.5" style={{ color: COLORS.primary }} strokeWidth={2} />
                                        <span className={`text-xs ${colors.textSec}`}>
                                            {t('services.warranty') || 'Professional service with warranty'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quote note */}
                        <div
                            className={`mt-6 flex flex-col sm:flex-row sm:items-center gap-4 p-5 sm:p-6 ${BORDER_RADIUS.md} border`}
                            style={{
                                borderColor: `${COLORS.primary}33`,
                                backgroundColor: `${COLORS.primary}0A`,
                            }}
                        >
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: `${COLORS.primary}1A` }}
                            >
                                <Info className="w-5 h-5" style={{ color: COLORS.primary }} strokeWidth={2} />
                            </div>
                            <p className={`text-xs sm:text-sm ${colors.textSec} flex-1`}>
                                {t('services.offeringsNote') || '* Every project is scoped individually. Contact us for a free consultation and a custom quote.'}
                            </p>
                            <button
                                onClick={scrollToContact}
                                className="group inline-flex items-center justify-center gap-1.5 text-sm font-semibold whitespace-nowrap transition-colors duration-200"
                                style={{ color: COLORS.primary }}
                            >
                                {t('services.talkToUs') || 'Talk to a specialist'}
                                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Benefits Grid */}
                <div className="mb-16">
                    <div className="text-center mb-10">
                        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight ${colors.text}`}>
                            {t('services.whyChooseUs') || 'Why Choose Us?'}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className={`group ${colors.card} p-5 sm:p-6 ${BORDER_RADIUS.md} border ${colors.border} transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b1a] hover:shadow-lg`}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                        style={{
                                            background: `linear-gradient(135deg, ${COLORS.primary}1F, ${COLORS.primary}0D)`,
                                        }}
                                    >
                                        <benefit.icon
                                            className="w-5 h-5 sm:w-6 sm:h-6"
                                            style={{ color: COLORS.primary }}
                                            strokeWidth={1.8}
                                        />
                                    </div>
                                    <p className={`${colors.text} font-semibold leading-relaxed text-sm sm:text-base pt-1.5`}>
                                        {benefit.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Process Section */}
                <div className={`${colors.card} ${BORDER_RADIUS.lg} border ${colors.border} p-6 sm:p-8 md:p-12 mb-16`}>
                    <div className="text-center mb-10">
                        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight ${colors.text}`}>
                            {t('services.ourProcess') || 'Our Process'}
                        </h2>
                    </div>

                    <div className="relative max-w-3xl mx-auto">
                        {/* Timeline rail */}
                        <div
                            className="absolute left-5 sm:left-6 top-4 bottom-4 w-px hidden sm:block"
                            style={{ background: `linear-gradient(180deg, ${COLORS.primary}66, ${COLORS.primary}0D)` }}
                        />

                        <div className="space-y-8">
                            {[1, 2, 3, 4].map((step) => (
                                <div key={step} className="relative flex gap-4 sm:gap-6">
                                    <div
                                        className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-white text-lg"
                                        style={{
                                            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                            boxShadow: `0 8px 20px -8px ${COLORS.primary}99`,
                                        }}
                                    >
                                        {step}
                                    </div>
                                    <div className="flex-1 pb-1">
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
                </div>

                {/* Contact CTA */}
                <div
                    className={`relative overflow-hidden ${colors.card} ${BORDER_RADIUS.lg} border ${colors.border} p-8 sm:p-10 md:p-14 text-center`}
                >
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: `linear-gradient(135deg, ${COLORS.primary}0D, transparent 55%)` }}
                    />

                    <div className="relative z-10">
                        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight ${colors.text}`}>
                            {t('services.readyToStart') || 'Ready to Get Started?'}
                        </h2>
                        <p className={`${colors.textSec} text-base sm:text-lg mb-7 sm:mb-8 max-w-2xl mx-auto`}>
                            {t('services.contactCTA') || 'Contact us today for a free consultation and quote.'}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <a
                                href="tel:+359899350531"
                                className={`flex items-center justify-center gap-2 px-7 py-3.5 ${BORDER_RADIUS.md} font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl`}
                                style={{
                                    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                    boxShadow: `0 10px 24px -8px ${COLORS.primary}80`,
                                }}
                            >
                                <Phone className="w-5 h-5" />
                                {t('contact.callUs') || 'Call Us'}
                            </a>

                            <a
                                href="mailto:support@omni-solutions.co"
                                className={`flex items-center justify-center gap-2 px-7 py-3.5 ${BORDER_RADIUS.md} font-semibold border-2 ${colors.borderLight} ${colors.text} transition-all duration-300 hover:border-[#ff6b1a] hover:text-[#ff6b1a]`}
                            >
                                <Mail className="w-5 h-5" />
                                {t('contact.emailUs') || 'Email Us'}
                            </a>
                        </div>

                        <p className={`mt-6 text-xs sm:text-sm ${colors.textSec}`}>
                            {t('services.freeConsultation') || 'Free consultation · No obligation'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
