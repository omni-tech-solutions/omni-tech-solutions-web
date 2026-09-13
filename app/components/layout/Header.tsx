'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';
import { Globe, ChevronDown, Sun, Moon } from 'lucide-react';
import type { Theme, Language } from '@/app/types';
import { CONTAINER } from '@/app/styles/theme';

interface HeaderProps {
    theme: Theme;
    toggleTheme: () => void;
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
    activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, colors, activeSection: scrolledSection }) => {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const pathname = usePathname();
    // On a service page the scroll position means nothing — "Services" is the current item
    const activeSection = pathname?.startsWith('/services') ? 'services' : scrolledSection;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const langMenuRef = useRef<HTMLDivElement>(null);

    const navItems = [
        { id: 'home', label: t('nav.home') },
        { id: 'services', label: t('nav.services') },
        { id: 'about', label: t('nav.about') },
        { id: 'contact', label: t('nav.contact') },
    ];

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setIsMenuOpen(false);
        setIsLangMenuOpen(false);
    };

    // Close language menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
                setIsLangMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

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

    // Phones/tablets: always a dark bar with white text for contrast; desktop follows the theme
    return (
        <nav className={`fixed w-full ${colors.nav} backdrop-blur-xl z-50 border-b ${colors.borderLight} max-md:bg-zinc-950/90 max-md:border-zinc-800 transition-all duration-300`}>
            <div className={CONTAINER}>
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
                        {/* Same coral mark in both themes; 96 px file for a 48 px slot (scripts/brand/generate-icons.py) */}
                        <img
                            src="/assets/brand/logo-96.png"
                            width={48}
                            height={48}
                            alt="OMNI Tech Solutions"
                            className="h-8 w-8 sm:h-12 sm:w-12 transition-transform hover:scale-105"
                        />
                        <span className={`${colors.text} max-md:text-white font-bold text-lg`}>
              OMNI Tech Solutions
            </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-5">
                        {navItems.map((item) => {
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className={`flex items-center gap-2 py-2.5 ${activeSection === item.id ? 'text-[#ff6b1a]' : `${colors.textSec} hover:text-[#ff6b1a]`} transition-all duration-300 relative group focus:outline-none`}
                                >
                                    {item.label}
                                    <span
                                        className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff6b1a] transition-all duration-300 group-hover:w-full ${
                                            activeSection === item.id ? 'w-full' : ''
                                        }`}
                                    />
                                </button>
                            );
                        })}

                        {/* Language Dropdown */}
                        <div className={`relative flex items-center border-l ${colors.borderLight} pl-4`} ref={langMenuRef}>
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg transition-all duration-300 ${colors.textSec} hover:bg-gray-500/10 ${isLangMenuOpen ? 'bg-gray-500/10' : ''} focus:outline-none`}
                            >
                                <Globe className="w-4 h-4" strokeWidth={2} />
                                <span className="text-xs font-bold">{i18n.language.toUpperCase()}</span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isLangMenuOpen && (
                                <div className={`absolute top-full right-0 mt-2 ${colors.card} ${colors.border} border rounded-lg shadow-lg overflow-hidden min-w-[120px] backdrop-blur-xl z-50`}>
                                    {(['bg', 'en', 'tr'] as Language[]).map(lang => (
                                        <button
                                            key={lang}
                                            onClick={() => changeLanguage(lang)}
                                            className={`w-full px-4 py-2.5 text-left text-sm font-semibold transition-all duration-300 flex items-center justify-between focus:outline-none ${
                                                i18n.language === lang
                                                    ? `${colors.text} bg-gray-500/10`
                                                    : `${colors.textSec} hover:bg-gray-500/10`
                                            }`}
                                        >
                                            <span>{lang.toUpperCase()}</span>
                                            {i18n.language === lang && (
                                                <span className="text-lg">✓</span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2.5 rounded-lg ${colors.textSec} hover:bg-gray-500/10 transition-all duration-300 group focus:outline-none`}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" strokeWidth={2} />
                            ) : (
                                <Moon className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" strokeWidth={2} />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg transition-all text-[#ff6b1a] hover:bg-[#ff6b1a]/10"
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
                    <div className="md:hidden pb-4 border-t border-zinc-800 animate-fadeIn">
                        <div className="space-y-1 pt-4">
                            {navItems.map((item) => {
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollTo(item.id)}
                                        className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-lg ${activeSection === item.id ? 'text-[#ff6b1a] bg-[#ff6b1a]/10' : 'text-zinc-200 hover:text-[#ff6b1a] hover:bg-[#ff6b1a]/10'} transition-all duration-300 focus:outline-none`}
                                    >
                                        {item.label}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-800">
                            <div className="flex gap-2">
                                {(['bg', 'en', 'tr'] as Language[]).map(lang => (
                                    <button
                                        key={lang}
                                        onClick={() => changeLanguage(lang)}
                                        className={`px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 focus:outline-none ${
                                            i18n.language === lang ? 'text-white bg-white/10' : 'text-zinc-400 hover:bg-white/10'
                                        }`}
                                    >
                                        {lang.toUpperCase()}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={toggleTheme}
                                className="p-2.5 rounded-lg text-zinc-300 hover:bg-white/10 transition-all duration-300 group focus:outline-none"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? (
                                    <Sun className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" strokeWidth={2} />
                                ) : (
                                    <Moon className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" strokeWidth={2} />
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};