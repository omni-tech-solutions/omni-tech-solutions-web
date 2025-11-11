'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';
import type { Theme, Language } from '@/app/types';
import logo from '../../../public/assets/logo.png';
import { COLORS } from '@/app/styles/theme';

interface HeaderProps {
    theme: Theme;
    toggleTheme: () => void;
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
    activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, colors, activeSection }) => {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: t('nav.home') },
        { id: 'services', label: t('nav.services') },
        { id: 'about', label: t('nav.about') },
        { id: 'contact', label: t('nav.contact') },
    ];

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setIsMenuOpen(false);
    };

    const scrollTo = (id: string) => {
        setIsMenuOpen(false);

        // Check if we're on the home page
        const isHomePage = pathname === '/';

        if (isHomePage) {
            // We're on home page, scroll to section
            const element = document.getElementById(id);
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            // We're on another page, navigate to home page with hash
            if (id === 'home') {
                router.push('/');
            } else {
                router.push(`/#${id}`);
            }
        }
    };

    return (
        <nav className={`fixed w-full ${colors.nav} backdrop-blur-xl z-50 border-b ${colors.borderLight} transition-all duration-300`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
                        <img
                            src={logo.src}
                            alt="Logo"
                            className="h-8 sm:h-12 lg:h-12 w-auto transition-transform hover:scale-105"
                        />
                        <span style={{color: colors.text}} className="font-bold text-lg sm:inline">
              OMNI Tech Solutions
            </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-5">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className={`${colors.textSec} hover:text-[#ffaa18] transition-all relative group ${
                                    activeSection === item.id ? 'text-[#ffaa18]' : ''
                                }`}
                            >
                                {item.label}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffaa18] transition-all group-hover:w-full ${
                                    activeSection === item.id ? 'w-full' : ''
                                }`} />
                            </button>
                        ))}

                        {/* Language Switcher */}
                        <div className={`flex gap-1 border-l ${colors.borderLight} pl-4`}>
                            {(['bg', 'en', 'tr'] as Language[]).map(lang => (
                                <button
                                    key={lang}
                                    onClick={() => changeLanguage(lang)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                        i18n.language === lang
                                            ? 'bg-[#ffaa18] text-zinc-900 shadow-lg shadow-[#ffaa18]/30'
                                            : `${colors.textTer} hover:text-[#ffaa18] hover:bg-[#ffaa18]/10`
                                    }`}
                                >
                                    {lang.toUpperCase()}
                                </button>
                            ))}
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2.5 rounded-lg ${colors.textSec} hover:text-[#ffaa18] hover:bg-[#ffaa18]/10 transition-all`}
                        >
                            <span className="text-xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-[#ffaa18] hover:bg-[#ffaa18]/10 rounded-lg transition-all"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className={`md:hidden pb-4 border-t ${colors.borderLight} animate-fadeIn`}>
                        <div className="space-y-1 pt-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className={`block w-full text-left py-3 px-4 rounded-lg ${colors.textSec} hover:text-[#ffaa18] hover:bg-[#ffaa18]/10 transition-all ${
                                        activeSection === item.id ? 'text-[#ffaa18] bg-[#ffaa18]/10' : ''
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        <div className={`flex items-center justify-between mt-4 pt-4 border-t ${colors.borderLight}`}>
                            <div className="flex gap-2">
                                {(['bg', 'en', 'tr'] as Language[]).map(lang => (
                                    <button
                                        key={lang}
                                        onClick={() => changeLanguage(lang)}
                                        className={`px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                                            i18n.language === lang ? 'bg-[#ffaa18] text-zinc-900' : colors.textSec
                                        }`}
                                    >
                                        {lang.toUpperCase()}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-lg ${colors.textSec} hover:text-[#ffaa18] hover:bg-[#ffaa18]/10 transition-all`}
                            >
                                <span className="text-lg">{theme === 'dark' ? '☀️' : '🌙'}</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};