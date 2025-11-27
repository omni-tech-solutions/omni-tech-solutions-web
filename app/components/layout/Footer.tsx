'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import logo from '@/public/assets/logo.png';
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
  Send
} from 'lucide-react';

interface FooterProps {
  colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

export const Footer: React.FC<FooterProps> = ({ colors }) => {
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

  return (
    <footer className={`${colors.section} relative`}>
      {/* Subtle top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">

          {/* Company Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={logo.src}
                alt="Omni Tech Solutions Logo"
                className="h-9 w-auto grayscale opacity-60 hover:opacity-80 transition-opacity duration-500"
              />
              <span style={{color: colors.text}} className="font-bold text-lg tracking-tight">
                OMNI Tech Solutions
              </span>
            </div>

            <p className={`${colors.textSec} text-sm leading-relaxed opacity-75 max-w-xs`}>
              {t('footer.about')}
            </p>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`${colors.textSec} ${colors.hover} group relative`}
                >
                  <div className={`p-2.5 rounded-xl border ${colors.borderLight} ${colors.cardHover} transition-all duration-300 group-hover:border-opacity-80 group-hover:-translate-y-1 group-hover:shadow-lg`}>
                    <social.icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h3 className={`${colors.text} font-semibold text-sm uppercase tracking-wider mb-6`}>
              {t('footer.quickLinks')}
            </h3>
            <nav>
              <ul className="space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className={`${colors.textSec} ${colors.hover} text-sm transition-all duration-300 opacity-75 hover:opacity-100 hover:translate-x-1 inline-flex items-center group`}
                    >
                      <span className={`w-0 h-px ${colors.accent} transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2`}></span>
                      {t(`nav.${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className={`${colors.text} font-semibold text-sm uppercase tracking-wider mb-6`}>
              {t('footer.contactUs')}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@omnitech.bg"
                  className={`${colors.textSec} ${colors.hover} text-sm flex items-start gap-3 transition-all duration-300 group hover:translate-x-1`}
                >
                  <div className={`mt-0.5 p-1.5 rounded-lg ${colors.cardHover} transition-colors`}>
                    <Mail className="w-4 h-4 opacity-70" strokeWidth={1.5} />
                  </div>
                  <span className="opacity-75 group-hover:opacity-100 transition-opacity">info@omnitech.bg</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+359XXXXXXXXX"
                  className={`${colors.textSec} ${colors.hover} text-sm flex items-start gap-3 transition-all duration-300 group hover:translate-x-1`}
                >
                  <div className={`mt-0.5 p-1.5 rounded-lg ${colors.cardHover} transition-colors`}>
                    <Phone className="w-4 h-4 opacity-70" strokeWidth={1.5} />
                  </div>
                  <span className="opacity-75 group-hover:opacity-100 transition-opacity">+359 XXX XXX XXX</span>
                </a>
              </li>
              <li className={`${colors.textSec} text-sm flex items-start gap-3 opacity-75`}>
                <div className={`mt-0.5 p-1.5 rounded-lg ${colors.cardHover}`}>
                  <MapPin className="w-4 h-4 opacity-70" strokeWidth={1.5} />
                </div>
                <span>Samuil, Razgrad, Bulgaria</span>
              </li>
              <li className={`${colors.textSec} text-sm flex items-start gap-3 opacity-75`}>
                <div className={`mt-0.5 p-1.5 rounded-lg ${colors.cardHover}`}>
                  <Clock className="w-4 h-4 opacity-70" strokeWidth={1.5} />
                </div>
                <span>{t('footer.workingHours')}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h3 className={`${colors.text} font-semibold text-sm uppercase tracking-wider mb-6`}>
              {t('footer.newsletter.title')}
            </h3>

            <p className={`${colors.textSec} text-sm leading-relaxed opacity-75`}>
              {t('footer.newsletter.description')}
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.newsletter.placeholder')}
                  required
                  className={`w-full px-4 py-3 pr-12 rounded-xl border ${colors.borderLight} ${colors.section} ${colors.text} text-sm placeholder:text-sm placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-0 ${colors.inputFocus} transition-all duration-300`}
                />
                <button
                  type="submit"
                  className={`absolute right-2 top-1/2 -translate-y-1/2 ${colors.button} p-2 rounded-lg ${colors.buttonHover} transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm`}
                >
                  <Send className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </div>

              {subscribeStatus === 'success' && (
                <p className={`${colors.textSec} text-xs opacity-70 flex items-center gap-2`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${colors.accent} animate-pulse`}></span>
                  {t('footer.newsletter.success')}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-10 border-t ${colors.borderLight} flex flex-col sm:flex-row justify-between items-center gap-6`}>
          <p className={`${colors.textSec} text-sm opacity-60 text-center sm:text-left`}>
            {t('footer.text')}
          </p>

          <div className="flex items-center gap-8">
            <p className={`${colors.textTer} text-xs opacity-60 tracking-wider`}>
              {t('footer.tagline')}
            </p>
            <button
              onClick={scrollToTop}
              className={`${colors.textSec} ${colors.hover} p-2.5 rounded-xl border ${colors.borderLight} ${colors.cardHover} transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-sm group`}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:scale-110" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
