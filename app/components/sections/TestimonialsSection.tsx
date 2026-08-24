'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { COLORS } from '@/app/styles/theme';

interface TestimonialsSectionProps {
  colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ colors }) => {
  const { t } = useTranslation();
  const isDark = colors.text === 'text-zinc-100';

  // Testimonials data - should be moved to translations
  const testimonials = [
    {
      name: t('testimonials.items.0.name', 'Ivan Petrov'),
      role: t('testimonials.items.0.role', 'CEO, TechStart Bulgaria'),
      rating: 5,
      text: t('testimonials.items.0.text', 'OMNI Tech Solutions transformed our online presence. Their web design is modern, fast, and exactly what we needed. Highly recommended!'),
      date: '2024-11-15'
    },
    {
      name: t('testimonials.items.1.name', 'Maria Dimitrova'),
      role: t('testimonials.items.1.role', 'Restaurant Owner'),
      rating: 5,
      text: t('testimonials.items.1.text', 'They set up our local network and POS system flawlessly. Professional service, fair prices, and excellent support. Thank you!'),
      date: '2024-10-22'
    },
    {
      name: t('testimonials.items.2.name', 'Georgi Stoyanov'),
      role: t('testimonials.items.2.role', 'Retail Store Manager'),
      rating: 5,
      text: t('testimonials.items.2.text', 'The video surveillance system they installed works perfectly. We feel much more secure now. Great team, great service!'),
      date: '2024-09-10'
    },
    {
      name: t('testimonials.items.3.name', 'Elena Marinova'),
      role: t('testimonials.items.3.role', 'E-commerce Business Owner'),
      rating: 5,
      text: t('testimonials.items.3.text', 'Our custom web application exceeded expectations. The team understood our needs perfectly and delivered on time. Outstanding work!'),
      date: '2024-08-05'
    },
    {
      name: t('testimonials.items.4.name', 'Dimitar Kolev'),
      role: t('testimonials.items.4.role', 'Small Business Owner'),
      rating: 5,
      text: t('testimonials.items.4.text', 'Fast, reliable, and professional. They fixed our IT issues quickly and set up our office network. Will definitely use their services again!'),
      date: '2024-07-18'
    },
    {
      name: t('testimonials.items.5.name', 'Svetlana Ivanova'),
      role: t('testimonials.items.5.role', 'Marketing Director'),
      rating: 5,
      text: t('testimonials.items.5.text', 'The SEO optimization they did for our website brought amazing results. Traffic increased by 300% in just 3 months. Incredible!'),
      date: '2024-06-12'
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5"
            fill={i < rating ? COLORS.primary : 'none'}
            stroke={i < rating ? COLORS.primary : colors.textSec}
            strokeWidth={1.5}
          />
        ))}
      </div>
    );
  };

  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  return (
    <section id="testimonials" className={`relative py-20 overflow-hidden ${colors.section}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 right-0 w-[600px] h-[600px] rounded-full opacity-[0.05]"
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
            <Quote className="w-3.5 h-3.5" strokeWidth={2} />
            {t('testimonials.badge', 'Testimonials')}
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${colors.text}`}>
            {t('testimonials.title', 'What Our Clients Say')}
          </h2>

          <div
            className="w-14 h-1 rounded-full mt-5 mb-5"
            style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
          />

          <p className={`${colors.textSec} text-base sm:text-lg max-w-2xl mb-7`}>
            {t('testimonials.subtitle', 'Real feedback from satisfied customers')}
          </p>

          {/* Aggregate Rating Display */}
          <div
            className={`inline-flex flex-wrap items-center justify-center gap-3 px-5 sm:px-6 py-3 rounded-full border ${colors.card}`}
            style={{ borderColor: `${COLORS.primary}40` }}
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill={COLORS.primary}
                  stroke={COLORS.primary}
                />
              ))}
            </div>
            <span
              className="font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
            >
              {averageRating.toFixed(1)} / 5.0
            </span>
            <span className={`text-sm ${colors.textSec}`}>
              ({testimonials.length} {t('testimonials.reviews', 'reviews')})
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`omni-reveal group relative flex flex-col overflow-hidden ${colors.card} rounded-2xl border ${colors.border} p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff6b1a] hover:shadow-[0_18px_40px_-12px_rgba(255,107,26,0.35)]`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Top accent line — grows on hover */}
              <span
                className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
              />

              {/* Quote watermark */}
              <Quote
                className="absolute top-5 right-5 w-14 h-14 opacity-[0.07] group-hover:opacity-[0.14] transition-opacity duration-300"
                style={{ color: COLORS.primary }}
                aria-hidden="true"
              />

              {/* Rating */}
              <div className="relative mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review Text */}
              <p className={`${colors.textSec} mb-6 leading-relaxed relative flex-1`}>
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author Info */}
              <div className={`relative flex items-center gap-4 pt-4 border-t ${colors.borderLight}`}>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white text-lg flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                    boxShadow: `0 8px 20px -8px ${COLORS.primary}CC`,
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h4 className={`font-semibold ${colors.text} truncate`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${colors.textSec} truncate`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className={`${colors.textSec} mb-6 text-base sm:text-lg`}>
            {t('testimonials.cta', 'Join our satisfied clients today!')}
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 font-semibold text-white rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-base sm:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b1a] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            style={{
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
              boxShadow: `0 10px 24px -8px ${COLORS.primary}80`,
            }}
          >
            {t('testimonials.startButton', 'Start Your Project')}
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
};
