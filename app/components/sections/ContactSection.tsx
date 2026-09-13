'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { COLORS, BORDER_RADIUS, CONTAINER } from '@/app/styles/theme';
import type { FormData } from '@/app/types';

interface ContactSectionProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

const CONTACT_EMAIL = 'support@omni-solutions.co';

const fieldClasses = 'w-full px-4 py-3 rounded-xl border transition-colors duration-200 outline-none focus:border-[#ff6b1a] focus:ring-4 focus:ring-[#ff6b1a]/10';

export const ContactSection: React.FC<ContactSectionProps> = ({ colors }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSent, setIsSent] = useState(false);

    // No backend: the form opens the visitor's mail app with a ready-to-send
    // email to us. The fields are kept, in case no mail app opens.
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = t('contact.mailSubject', { name: formData.name.trim() });
        const body = [
            `${t('contact.name')}: ${formData.name.trim()}`,
            `${t('contact.email')}: ${formData.email.trim()}`,
            '',
            formData.message.trim(),
        ].join('\n');

        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setIsSent(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (isSent) setIsSent(false);
    };

    const inputClasses = `${fieldClasses} ${colors.input} ${colors.border} ${colors.text}`;
    const labelClasses = `block ${colors.textSec} mb-2 text-sm font-medium`;

    return (
        <section id="contact" className={`py-20 sm:py-24 ${colors.section}`}>
            <div className={CONTAINER}>
                <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
                    {/* Left — what to expect and how to reach us */}
                    <div className="lg:col-span-2">
                        <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: COLORS.primary }}>
                            {t('nav.contact')}
                        </p>
                        <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${colors.text}`}>
                            {t('contact.title')}
                        </h2>
                        <p className={`mt-4 text-lg leading-relaxed ${colors.textSec}`}>
                            {t('contact.subtitle')}
                        </p>

                        <ul className="mt-8 space-y-4">
                            <li>
                                <a
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    className={`inline-flex items-center gap-3 font-medium ${colors.text} hover:text-[#ff6b1a] transition-colors`}
                                >
                                    <Mail className="w-5 h-5" style={{ color: COLORS.primary }} strokeWidth={2} />
                                    {CONTACT_EMAIL}
                                </a>
                            </li>
                            <li className={`flex items-center gap-3 ${colors.textSec}`}>
                                <Clock className="w-5 h-5" style={{ color: COLORS.primary }} strokeWidth={2} />
                                {t('contact.contactInfo.hours.value')}
                            </li>
                        </ul>
                    </div>

                    {/* Right — short form */}
                    <form
                        onSubmit={handleSubmit}
                        className={`lg:col-span-3 ${colors.card} p-6 sm:p-8 ${BORDER_RADIUS.lg} border ${colors.border} space-y-5`}
                    >
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="contact-name" className={labelClasses}>{t('contact.name')}</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={inputClasses}
                                    placeholder={t('contact.placeholders.name')}
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className={labelClasses}>{t('contact.email')}</label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={inputClasses}
                                    placeholder={t('contact.placeholders.email')}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="contact-message" className={labelClasses}>{t('contact.message')}</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className={`${inputClasses} resize-none`}
                                placeholder={t('contact.placeholders.message')}
                            />
                        </div>

                        {isSent && (
                            <div
                                className="flex items-start gap-3 p-4 rounded-xl border"
                                role="status"
                                style={{ borderColor: `${COLORS.primary}40`, backgroundColor: `${COLORS.primary}0D` }}
                            >
                                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} strokeWidth={2} />
                                <div>
                                    <p className={`text-sm font-semibold ${colors.text}`}>{t('contact.successTitle')}</p>
                                    <p className={`text-sm ${colors.textSec}`}>{t('contact.success')}</p>
                                </div>
                            </div>
                        )}

                        <button
                            type="submit"
                            className={`group w-full py-3.5 px-6 ${BORDER_RADIUS.md} font-semibold text-white transition-colors duration-200 hover:bg-[#e85d0f] flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b1a] focus-visible:ring-offset-2`}
                            style={{ backgroundColor: COLORS.primary }}
                        >
                            {t('contact.submit')}
                            <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
