'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';
import { COLORS } from '@/app/styles/theme';

interface TestimonialsSectionProps {
  colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ colors }) => {
  const { t } = useTranslation();

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
    <section id="testimonials" className={`py-20 ${colors.section}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${colors.text}`}>
            {t('testimonials.title', 'What Our Clients Say')}
          </h2>
          <p className={`text-lg ${colors.textSec} mb-6`}>
            {t('testimonials.subtitle', 'Real feedback from satisfied customers')}
          </p>

          {/* Aggregate Rating Display */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border" style={{ borderColor: COLORS.primary, backgroundColor: `${COLORS.primary}10` }}>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5"
                  fill={COLORS.primary}
                  stroke={COLORS.primary}
                />
              ))}
            </div>
            <span className={`font-bold ${colors.text}`}>
              {averageRating.toFixed(1)} / 5.0
            </span>
            <span className={colors.textSec}>
              ({testimonials.length} {t('testimonials.reviews', 'reviews')})
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${colors.card} rounded-xl border ${colors.border} p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative`}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16" style={{ color: COLORS.primary }} />
              </div>

              {/* Rating */}
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review Text */}
              <p className={`${colors.textSec} mb-6 leading-relaxed relative z-10`}>
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg" style={{ backgroundColor: COLORS.primary }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className={`font-semibold ${colors.text}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${colors.textSec}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className={`${colors.textSec} mb-6 text-lg`}>
            {t('testimonials.cta', 'Join our satisfied clients today!')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg"
            style={{
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`
            }}
          >
            {t('testimonials.startButton', 'Start Your Project')}
          </a>
        </div>
      </div>
    </section>
  );
};
