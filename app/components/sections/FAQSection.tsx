'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { COLORS } from '@/app/styles/theme';

interface FAQSectionProps {
  colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ colors }) => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
    <section id="faq" className={`py-20 ${colors.section}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle style={{ color: COLORS.primary }} className="w-8 h-8" />
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${colors.text}`}>
            {t('faq.title', 'Frequently Asked Questions')}
          </h2>
          <p className={`text-lg ${colors.textSec}`}>
            {t('faq.subtitle', 'Find answers to common questions about our services')}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${colors.card} rounded-xl border ${colors.border} overflow-hidden transition-all duration-300`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300 hover:bg-opacity-50 ${colors.cardHover}`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className={`text-lg font-semibold ${colors.text} pr-8`}>
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: COLORS.primary }}
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className={`px-6 pb-5 ${colors.textSec}`}>
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className={`${colors.textSec} mb-4`}>
            {t('faq.cta', "Still have questions? We're here to help!")}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`
            }}
          >
            {t('faq.contactButton', 'Contact Us')}
          </a>
        </div>
      </div>
    </section>
  );
};
