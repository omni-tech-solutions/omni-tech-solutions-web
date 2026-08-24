'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Check, CheckCircle2 } from 'lucide-react';
import { COLORS, BORDER_RADIUS } from '@/app/styles/theme';
import type { FormData } from '@/app/types';

interface ContactSectionProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

// Shared input styling — focus ring handled with classes instead of inline handlers
const fieldClasses = 'w-full px-4 py-3 rounded-xl border border-[#ff6b1a]/30 transition-all duration-300 outline-none focus:border-[#ff6b1a] focus:ring-4 focus:ring-[#ff6b1a]/10';

export const ContactSection: React.FC<ContactSectionProps> = ({ colors }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const isDark = colors.text === 'text-zinc-100';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);
        setIsSent(true);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
        if (isSent) setIsSent(false);
    };

    const contactInfo = [
        {
            icon: Mail,
            title: t('contact.contactInfo.email.title'),
            value: t('contact.contactInfo.email.value'),
            link: 'mailto:support@omni-solutions.co'
        },
        {
            icon: Phone,
            title: t('contact.contactInfo.phone.title'),
            value: t('contact.contactInfo.phone.value'),
            link: 'tel:+359899350531'
        },
        {
            icon: MapPin,
            title: t('contact.contactInfo.location.title'),
            value: t('contact.contactInfo.location.value'),
            link: 'https://www.google.com/maps/search/?api=1&query=Samuil%2C+Razgrad%2C+Bulgaria'
        },
        {
            icon: Clock,
            title: t('contact.contactInfo.hours.title'),
            value: t('contact.contactInfo.hours.value'),
            link: null
        }
    ];

    const whyChooseUs = [
        t('contact.whyChooseUs.fastResponse'),
        t('contact.whyChooseUs.professionalConsultation'),
        t('contact.whyChooseUs.qualityGuarantee')
    ];

    return (
        <section id="contact" className={`relative py-20 px-0 sm:px-6 lg:px-8 overflow-hidden ${colors.section}`}>
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute -top-24 left-0 w-[600px] h-[600px] rounded-full opacity-[0.05]"
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
                        <MessageSquare className="w-3.5 h-3.5" strokeWidth={2} />
                        {t('nav.contact')}
                    </div>

                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${colors.text}`}>
                        {t('contact.title')}
                    </h2>

                    <div
                        className="w-14 h-1 rounded-full mt-5 mb-5"
                        style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
                    />

                    <p className={`${colors.textSec} text-base sm:text-lg max-w-2xl`}>
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
                    {/* Contact Information - Left Side */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Contact Info Cards */}
                        <div
                            className={`omni-reveal ${colors.card} backdrop-blur-sm p-6 sm:p-7 ${BORDER_RADIUS.lg} border ${colors.border}`}
                        >
                            <h3 className={`text-xl font-bold mb-5 ${colors.text}`}>
                                {t('contact.getInTouch')}
                            </h3>

                            <div className="space-y-3">
                                {contactInfo.map((info, index) => {
                                    const IconComponent = info.icon;
                                    const content = (
                                        <div
                                            className={`flex items-start gap-4 p-3 rounded-xl border border-transparent transition-all duration-300 ${info.link ? 'group hover:border-[#ff6b1a]/40' : ''}`}
                                            style={{ backgroundColor: `${COLORS.primary}08` }}
                                        >
                                            <div
                                                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                                style={{
                                                    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                                    boxShadow: `0 6px 16px ${COLORS.primary}33`,
                                                }}
                                            >
                                                <IconComponent className="w-5 h-5 text-white" strokeWidth={2} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${colors.textTer}`}>
                                                    {info.title}
                                                </p>
                                                <p className={`text-sm font-medium ${colors.text} break-words`}>
                                                    {info.value}
                                                </p>
                                            </div>
                                        </div>
                                    );

                                    const isExternal = info.link?.startsWith('http');

                                    return info.link ? (
                                        <a
                                            key={index}
                                            href={info.link}
                                            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b1a] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-xl"
                                            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        >
                                            {content}
                                        </a>
                                    ) : (
                                        <div key={index}>
                                            {content}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Why choose us */}
                        <div
                            className={`omni-reveal relative overflow-hidden ${colors.card} backdrop-blur-sm p-6 sm:p-7 ${BORDER_RADIUS.lg} border ${colors.border}`}
                            style={{ animationDelay: '80ms' }}
                        >
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ background: `linear-gradient(135deg, ${COLORS.primary}0D, transparent 55%)` }}
                            />

                            <div className="relative">
                                <h3 className={`text-xl font-bold mb-5 ${colors.text}`}>
                                    {t('contact.whyChooseUs.title')}
                                </h3>
                                <ul className="space-y-3.5">
                                    {whyChooseUs.map((reason, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span
                                                className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                                                style={{ backgroundColor: `${COLORS.primary}1A` }}
                                            >
                                                <Check className="w-3.5 h-3.5" style={{ color: COLORS.primary }} strokeWidth={3} />
                                            </span>
                                            <p className={`text-sm ${colors.textSec} leading-relaxed`}>{reason}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div className="lg:col-span-3">
                        <form
                            onSubmit={handleSubmit}
                            className={`omni-reveal ${colors.card} backdrop-blur-sm p-6 sm:p-8 ${BORDER_RADIUS.lg} border ${colors.border}`}
                            style={{ animationDelay: '160ms' }}
                        >
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                                <h3 className={`text-2xl font-bold ${colors.text}`}>
                                    {t('contact.sendMessage')}
                                </h3>
                                <span
                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${colors.textSec}`}
                                    style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)' }}
                                >
                                    <Clock className="w-3.5 h-3.5" style={{ color: COLORS.primary }} strokeWidth={2} />
                                    {t('contact.responseNote')}
                                </span>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-5 mb-5">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="contact-name" className={`block ${colors.textSec} mb-2 text-sm font-semibold`}>
                                        {t('contact.name')} <span style={{ color: COLORS.primary }}>*</span>
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={`${fieldClasses} ${colors.input} ${colors.text}`}
                                        placeholder={t('contact.placeholders.name')}
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="contact-email" className={`block ${colors.textSec} mb-2 text-sm font-semibold`}>
                                        {t('contact.email')} <span style={{ color: COLORS.primary }}>*</span>
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={`${fieldClasses} ${colors.input} ${colors.text}`}
                                        placeholder={t('contact.placeholders.email')}
                                    />
                                </div>
                            </div>

                            {/* Phone Field */}
                            <div className="mb-5">
                                <label htmlFor="contact-phone" className={`block ${colors.textSec} mb-2 text-sm font-semibold`}>
                                    {t('contact.phone')}
                                </label>
                                <input
                                    id="contact-phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`${fieldClasses} ${colors.input} ${colors.text}`}
                                    placeholder={t('contact.placeholders.phone')}
                                />
                            </div>

                            {/* Message Field */}
                            <div className="mb-5">
                                <label htmlFor="contact-message" className={`block ${colors.textSec} mb-2 text-sm font-semibold`}>
                                    {t('contact.message')} <span style={{ color: COLORS.primary }}>*</span>
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className={`${fieldClasses} ${colors.input} ${colors.text} resize-none`}
                                    placeholder={t('contact.placeholders.message')}
                                />
                            </div>

                            {/* Success message */}
                            {isSent && (
                                <div
                                    className="omni-reveal flex items-start gap-3 p-4 mb-5 rounded-xl border"
                                    role="status"
                                    style={{
                                        borderColor: `${COLORS.primary}40`,
                                        backgroundColor: `${COLORS.primary}0D`,
                                    }}
                                >
                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} strokeWidth={2} />
                                    <div>
                                        <p className={`text-sm font-semibold ${colors.text}`}>
                                            {t('contact.successTitle')}
                                        </p>
                                        <p className={`text-sm ${colors.textSec}`}>
                                            {t('contact.success')}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`group w-full py-4 px-6 ${BORDER_RADIUS.md} font-semibold text-lg text-white transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b1a] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent`}
                                style={{
                                    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                    boxShadow: `0 10px 24px -8px ${COLORS.primary}80`,
                                }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        <span>{t('contact.sending')}</span>
                                    </>
                                ) : (
                                    <>
                                        <span>{t('contact.submit')}</span>
                                        <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </>
                                )}
                            </button>

                            <p className={`mt-4 text-xs ${colors.textTer} text-center`}>
                                <span style={{ color: COLORS.primary }}>*</span> {t('contact.required')}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
