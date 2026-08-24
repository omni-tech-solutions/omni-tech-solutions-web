'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { COLORS } from '@/app/styles/theme';

interface FAQSectionProps {
  colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ colors }) => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isDark = colors.text === 'text-zinc-100';

  // FAQ data - should be moved to translations
  const faqs = [
    {
      question: t('faq.items.0.question', 'How long does it take to develop a website?'),
      answer: t('faq.items.0.answer', 'Typically, a standard website takes 2-4 weeks, depending on complexity. Custom web applications may require 6-12 weeks. We provide detailed timelines during consultation.')
    },
    {
      question: t('faq.items.1.question', 'Do you provide ongoing support after project completion?'),
      answer: t('faq.items.1.answer', 'Yes! We offer 24/7 support and maintenance packages. All our projects include a warranty period, and we provide training for content management.')
    },
    {
      question: t('faq.items.2.question', 'What technologies do you use for web development?'),
      answer: t('faq.items.2.answer', 'We use modern technologies including React, Next.js, Node.js, and various databases. We choose the best technology stack based on your specific needs.')
    },
    {
      question: t('faq.items.3.question', 'Can you help with SEO and digital marketing?'),
      answer: t('faq.items.3.answer', 'Absolutely! We implement comprehensive SEO strategies, including technical SEO, on-page optimization, and content strategy. We also offer digital marketing consulting.')
    },
    {
      question: t('faq.items.4.question', 'Do you work with clients outside Bulgaria?'),
      answer: t('faq.items.4.answer', 'Yes, we work with clients internationally. We support English and Turkish in addition to Bulgarian, and we use modern collaboration tools for seamless remote work.')
    },
    {
      question: t('faq.items.5.question', 'What payment methods do you accept?'),
      answer: t('faq.items.5.answer', 'We accept bank transfers, credit cards, and PayPal. For larger projects, we offer flexible payment plans with milestone-based payments.')
    },
    {
      question: t('faq.items.6.question', 'Can you redesign my existing website?'),
      answer: t('faq.items.6.answer', 'Yes! We specialize in website redesigns and modernization. We can improve your site\'s design, performance, SEO, and user experience while preserving your existing content.')
    },
    {
      question: t('faq.items.7.question', 'Do you provide hosting services?'),
      answer: t('faq.items.7.answer', 'Yes, we can set up and manage hosting for your website. We work with reliable hosting providers and can recommend the best solution for your needs.')
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`relative py-20 overflow-hidden ${colors.section}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.05]"
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
            style={{
              backgroundColor: `${COLORS.primary}15`,
              border: `1px solid ${COLORS.primary}33`,
              color: COLORS.primary,
            }}
          >
            <HelpCircle className="w-3.5 h-3.5" strokeWidth={2} />
            {t('faq.badge', 'FAQ')}
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${colors.text}`}>
            {t('faq.title', 'Frequently Asked Questions')}
          </h2>

          <div
            className="w-14 h-1 rounded-full mt-5 mb-5"
            style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
          />

          <p className={`${colors.textSec} text-base sm:text-lg max-w-2xl`}>
            {t('faq.subtitle', 'Find answers to common questions about our services')}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`omni-reveal ${colors.card} rounded-2xl border ${colors.border} overflow-hidden transition-all duration-300 ${
                  isOpen ? 'shadow-[0_16px_36px_-18px_rgba(255,107,26,0.5)]' : ''
                }`}
                style={{
                  animationDelay: `${Math.min(index * 60, 360)}ms`,
                  borderColor: isOpen ? COLORS.primary : undefined,
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-5 sm:px-6 py-5 flex items-center justify-between gap-4 text-left transition-colors duration-300 ${colors.cardHover} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#ff6b1a]`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className={`text-base sm:text-lg font-semibold ${colors.text}`}>
                    {faq.question}
                  </h3>
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: isOpen ? COLORS.primary : `${COLORS.primary}14`,
                    }}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      style={{ color: isOpen ? '#fff' : COLORS.primary }}
                      strokeWidth={2.5}
                    />
                  </span>
                </button>

                {/* Answer — grid-rows keeps the transition accurate at any length */}
                <div
                  id={`faq-answer-${index}`}
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="overflow-hidden">
                    <div className={`px-5 sm:px-6 pb-5 ${colors.textSec}`}>
                      <div
                        className="w-full h-px mb-4"
                        style={{ background: `linear-gradient(90deg, ${COLORS.primary}33, transparent)` }}
                      />
                      <p className="leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className={`${colors.textSec} mb-4`}>
            {t('faq.cta', "Still have questions? We're here to help!")}
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-white rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b1a] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            style={{
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
              boxShadow: `0 10px 24px -8px ${COLORS.primary}80`,
            }}
          >
            {t('faq.contactButton', 'Contact Us')}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
};
