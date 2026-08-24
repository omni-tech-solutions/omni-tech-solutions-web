'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import logoDark from '@/public/assets/logo_dark.png';
import logoWhite from '@/public/assets/logo_white.png';
import { COLORS } from '@/app/styles/theme';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Send,
  CheckCircle2
} from 'lucide-react';

interface FooterProps {
  colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
  theme: 'dark' | 'light';
}

const quickLinks = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/#services' },
  { key: 'about', href: '/#about' },
  { key: 'contact', href: '/#contact' }
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' }
];

export const Footer: React.FC<FooterProps> = ({ colors, theme }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    setSubscribeStatus('success');
    setEmail('');
    setTimeout(() => setSubscribeStatus('idle'), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Small caps heading shared by every footer column
  const columnHeading = (label: string) => (
    <div className="mb-6">
      <h3 className={`${colors.text} font-semibold text-sm uppercase tracking-wider mb-2`}>
        {label}
      </h3>
      <div
        className="w-8 h-0.5 rounded-full"
        style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
      />
    </div>
  );

  const contactDetails = [
    { icon: Mail, text: 'support@omni-solutions.co', href: 'mailto:support@omni-solutions.co' },
    { icon: Phone, text: '+359899350531', href: 'tel:+359899350531' },
    { icon: MapPin, text: 'Samuil, Razgrad, Bulgaria', href: null },
    { icon: Clock, text: t('footer.workingHours'), href: null }
  ];

  return (
    <footer className={`${colors.section} relative overflow-hidden`}>
      {/* Top gradient hairline */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${COLORS.primary}59, transparent)` }}
      />

      {/* Ambient glow */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none opacity-[0.06]"
        style={{ background: `radial-gradient(circle, ${COLORS.primary}, transparent 65%)` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">

          {/* Company Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={theme === 'dark' ? logoWhite.src : logoDark.src}
                alt="Omni Tech Solutions Logo"
                className="h-9 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <span className={`${colors.text} font-bold text-lg tracking-tight`}>
                OMNI Tech Solutions
              </span>
            </div>

            <p className={`${colors.textSec} text-sm leading-relaxed max-w-xs`}>
              {t('footer.about')}
            </p>

            <div className="flex gap-3 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`${colors.textSec} p-2.5 rounded-xl border ${colors.borderLight} transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b1a] hover:text-[#ff6b1a] hover:shadow-[0_10px_24px_-12px_rgba(255,107,26,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b1a] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent`}
                >
                  <social.icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            {columnHeading(t('footer.quickLinks'))}
            <nav>
              <ul className="space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className={`${colors.textSec} text-sm transition-all duration-300 hover:text-[#ff6b1a] hover:translate-x-1 inline-flex items-center group focus-visible:outline-none focus-visible:text-[#ff6b1a]`}
                    >
                      <span
                        className="w-0 h-px transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"
                        style={{ backgroundColor: COLORS.primary }}
                      />
                      {t(`nav.${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            {columnHeading(t('footer.contactUs'))}
            <ul className="space-y-4">
              {contactDetails.map(({ icon: Icon, text, href }) => {
                const row = (
                  <>
                    <span
                      className="mt-0.5 p-1.5 rounded-lg flex-shrink-0 transition-colors duration-300"
                      style={{ backgroundColor: `${COLORS.primary}14` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: COLORS.primary }} strokeWidth={1.8} />
                    </span>
                    <span className="break-words">{text}</span>
                  </>
                );

                return (
                  <li key={text}>
                    {href ? (
                      <a
                        href={href}
                        className={`${colors.textSec} text-sm flex items-start gap-3 transition-all duration-300 hover:text-[#ff6b1a] hover:translate-x-1 focus-visible:outline-none focus-visible:text-[#ff6b1a]`}
                      >
                        {row}
                      </a>
                    ) : (
                      <div className={`${colors.textSec} text-sm flex items-start gap-3`}>
                        {row}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            {columnHeading(t('footer.newsletter.title'))}

            <p className={`${colors.textSec} text-sm leading-relaxed mb-5`}>
              {t('footer.newsletter.description')}
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.newsletter.placeholder')}
                  required
                  aria-label={t('footer.newsletter.title')}
                  className={`w-full px-4 py-3 pr-12 rounded-xl border ${colors.borderLight} ${colors.input} ${colors.text} text-sm placeholder:text-sm placeholder:opacity-60 outline-none transition-all duration-300 focus:border-[#ff6b1a] focus:ring-4 focus:ring-[#ff6b1a]/10`}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg text-white transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b1a] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                    boxShadow: `0 6px 16px -6px ${COLORS.primary}CC`,
                  }}
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </div>

              {subscribeStatus === 'success' && (
                <p className={`${colors.textSec} text-xs flex items-center gap-2`} role="status">
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: COLORS.primary }} strokeWidth={2} />
                  {t('footer.newsletter.success')}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-10 border-t ${colors.borderLight} flex flex-col sm:flex-row justify-between items-center gap-6`}>
          <p className={`${colors.textSec} text-sm text-center sm:text-left`}>
            {t('footer.text')}
          </p>

          <div className="flex items-center gap-6 sm:gap-8">
            <p className={`${colors.textTer} text-xs tracking-wider`}>
              {t('footer.tagline')}
            </p>
            <button
              onClick={scrollToTop}
              className={`${colors.textSec} p-2.5 rounded-xl border ${colors.borderLight} transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b1a] hover:text-[#ff6b1a] hover:shadow-[0_10px_24px_-12px_rgba(255,107,26,0.8)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b1a] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent`}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
