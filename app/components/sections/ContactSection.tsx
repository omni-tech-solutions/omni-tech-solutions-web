'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { COLORS, BORDER_RADIUS } from '@/app/styles/theme';
import type { FormData } from '@/app/types';

interface ContactSectionProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ colors }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        alert(t('contact.success'));
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const contactInfo = [
        {
            icon: Mail,
            title: t('contact.contactInfo.email.title'),
            value: t('contact.contactInfo.email.value'),
            link: 'mailto:info@omnitech.bg'
        },
        {
            icon: Phone,
            title: t('contact.contactInfo.phone.title'),
            value: t('contact.contactInfo.phone.value'),
            link: 'tel:+359XXXXXXXXX'
        },
        {
            icon: MapPin,
            title: t('contact.contactInfo.location.title'),
            value: t('contact.contactInfo.location.value'),
            link: 'https://maps.google.com'
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
        <section id="contact" className={`py-20 px-0 sm:px-6 lg:px-8 ${colors.section}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span style={{ color: colors.text }}>{t('contact.title')}</span>
                    </h2>
                    <p className={`${colors.textSec} text-lg sm:text-xl max-w-2xl mx-auto`}>
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Contact Information - Left Side */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Contact Info Cards */}
                        <div
                            className={`${colors.card} backdrop-blur-sm p-6 ${BORDER_RADIUS.lg} border`}
                            style={{
                                borderColor: `${COLORS.primary}20`,
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                            }}
                        >
                            <h3 className="text-xl font-bold mb-6" style={{ color: colors.text }}>
                                {t('contact.getInTouch')}
                            </h3>

                            <div className="space-y-4">
                                {contactInfo.map((info, index) => {
                                    const IconComponent = info.icon;
                                    const content = (
                                        <div className="flex items-start gap-4 p-3 rounded-lg transition-colors duration-200 hover:bg-opacity-50"
                                             style={{ backgroundColor: `${COLORS.primary}05` }}>
                                            <div
                                                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{
                                                    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`
                                                }}
                                            >
                                                <IconComponent className="w-5 h-5 text-white" strokeWidth={2} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${colors.textSec}`}>
                                                    {info.title}
                                                </p>
                                                <p className={`text-sm font-medium ${colors.text} break-words`}>
                                                    {info.value}
                                                </p>
                                            </div>
                                        </div>
                                    );

                                    return info.link ? (
                                        <a key={index} href={info.link} className="block">
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

                        {/* Additional Info Card */}
                        <div
                            className={`${colors.card} backdrop-blur-sm p-6 ${BORDER_RADIUS.lg} border`}
                            style={{
                                borderColor: `${COLORS.primary}20`,
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                            }}
                        >
                            <h3 className="text-xl font-bold mb-4" style={{ color: colors.text }}>
                                {t('contact.whyChooseUs.title')}
                            </h3>
                            <div className="space-y-3.5">
                                {whyChooseUs.map((reason, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.primary }} />
                                        <p className={`text-sm ${colors.textSec}`}>{reason}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div className="lg:col-span-3">
                        <form
                            onSubmit={handleSubmit}
                            className={`${colors.card} backdrop-blur-sm p-6 sm:p-8 ${BORDER_RADIUS.lg} border`}
                            style={{
                                borderColor: `${COLORS.primary}20`,
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                            }}
                        >
                            <h3 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
                                {t('contact.sendMessage')}
                            </h3>

                            <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                {/* Name Field */}
                                <div>
                                    <label className={`block ${colors.textSec} mb-2 text-sm font-semibold`}>
                                        {t('contact.name')} <span style={{ color: COLORS.primary }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-3 ${colors.input} ${colors.text} ${BORDER_RADIUS.md} border transition-all duration-300 focus:outline-none`}
                                        style={{
                                            borderColor: `${COLORS.primary}30`
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = COLORS.primary;
                                            e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary}10`;
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = `${COLORS.primary}30`;
                                            e.target.style.boxShadow = 'none';
                                        }}
                                        placeholder={t('contact.placeholders.name')}
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className={`block ${colors.textSec} mb-2 text-sm font-semibold`}>
                                        {t('contact.email')} <span style={{ color: COLORS.primary }}>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-3 ${colors.input} ${colors.text} ${BORDER_RADIUS.md} border transition-all duration-300 focus:outline-none`}
                                        style={{
                                            borderColor: `${COLORS.primary}30`
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = COLORS.primary;
                                            e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary}10`;
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = `${COLORS.primary}30`;
                                            e.target.style.boxShadow = 'none';
                                        }}
                                        placeholder={t('contact.placeholders.email')}
                                    />
                                </div>
                            </div>

                            {/* Phone Field */}
                            <div className="mb-6">
                                <label className={`block ${colors.textSec} mb-2 text-sm font-semibold`}>
                                    {t('contact.phone')}
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 ${colors.input} ${colors.text} ${BORDER_RADIUS.md} border transition-all duration-300 focus:outline-none`}
                                    style={{
                                        borderColor: `${COLORS.primary}30`
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = COLORS.primary;
                                        e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary}10`;
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = `${COLORS.primary}30`;
                                        e.target.style.boxShadow = 'none';
                                    }}
                                    placeholder={t('contact.placeholders.phone')}
                                />
                            </div>

                            {/* Message Field */}
                            <div className="mb-6">
                                <label className={`block ${colors.textSec} mb-2 text-sm font-semibold`}>
                                    {t('contact.message')} <span style={{ color: COLORS.primary }}>*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className={`w-full px-4 py-3 ${colors.input} ${colors.text} ${BORDER_RADIUS.md} border transition-all duration-300 resize-none focus:outline-none`}
                                    style={{
                                        borderColor: `${COLORS.primary}30`
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = COLORS.primary;
                                        e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary}10`;
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = `${COLORS.primary}30`;
                                        e.target.style.boxShadow = 'none';
                                    }}
                                    placeholder={t('contact.placeholders.message')}
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 px-6 ${BORDER_RADIUS.md} font-semibold text-lg text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#ffaa18] focus:ring-offset-2`}
                                style={{
                                    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                    boxShadow: `0 4px 12px ${COLORS.primary}30`
                                }}
                                onMouseEnter={(e) => {
                                    if (!isSubmitting) {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = `0 6px 16px ${COLORS.primary}40`;
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = `0 4px 12px ${COLORS.primary}30`;
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
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};