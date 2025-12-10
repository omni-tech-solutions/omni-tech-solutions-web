'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';
import { Home, Briefcase, Info, Mail, Globe, ChevronDown, Sun, Moon } from 'lucide-react';
import type { Theme, Language } from '@/app/types';
import logoDark from '../../../public/assets/logo_dark.png';
import logoWhite from '../../../public/assets/logo_white.png';
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
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const langMenuRef = useRef<HTMLDivElement>(null);

    const navItems = [
        { id: 'home', label: t('nav.home'), icon: Home },
        { id: 'services', label: t('nav.services'), icon: Briefcase },
        { id: 'about', label: t('nav.about'), icon: Info },
        { id: 'contact', label: t('nav.contact'), icon: Mail },
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

    return (
        <nav className={`fixed w-full ${colors.nav} backdrop-blur-xl z-50 border-b ${colors.borderLight} transition-all duration-300`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
                        <img
                            src={theme === 'dark' ? logoWhite.src : logoDark.src}
                            alt="OMNI Tech Solutions - Professional Technology Services Logo"
                            className="h-8 sm:h-12 lg:h-12 w-auto transition-transform hover:scale-105"
                        />
                        <span className={`${colors.text} font-bold text-lg sm:inline`}>
              OMNI Tech Solutions
            </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-5">
                        {navItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className={`flex items-center gap-2 py-2.5 ${colors.textSec} transition-all duration-300 relative group focus:outline-none ${
                                        activeSection === item.id ? '' : ''
                                    }`}
                                    style={{
                                        color: activeSection === item.id ? COLORS.primary : undefined
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = COLORS.primary}
                                    onMouseLeave={(e) => {
                                        if (activeSection !== item.id) {
                                            e.currentTarget.style.color = '';
                                        }
                                    }}
                                >
                                    <IconComponent className="w-4 h-4" strokeWidth={2} />
                                    {item.label}
                                    <span
                                        className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                                            activeSection === item.id ? 'w-full' : ''
                                        }`}
                                        style={{ backgroundColor: COLORS.primary }}
                                    />
                                </button>
                            );
                        })}

                        {/* Language Dropdown */}
                        <div className={`relative flex items-center border-l ${colors.borderLight} pl-4`} ref={langMenuRef}>
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg transition-all duration-300 ${colors.textSec} focus:outline-none`}
                                style={{
                                    backgroundColor: isLangMenuOpen ? `${COLORS.primary}1a` : undefined
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = COLORS.primary;
                                    e.currentTarget.style.backgroundColor = `${COLORS.primary}1a`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '';
                                    if (!isLangMenuOpen) {
                                        e.currentTarget.style.backgroundColor = '';
                                    }
                                }}
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
                                                    ? 'text-zinc-900'
                                                    : colors.textSec
                                            }`}
                                            style={{
                                                backgroundColor: i18n.language === lang ? COLORS.primary : undefined
                                            }}
                                            onMouseEnter={(e) => {
                                                if (i18n.language !== lang) {
                                                    e.currentTarget.style.backgroundColor = `${COLORS.primary}1a`;
                                                    e.currentTarget.style.color = COLORS.primary;
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (i18n.language !== lang) {
                                                    e.currentTarget.style.backgroundColor = '';
                                                    e.currentTarget.style.color = '';
                                                }
                                            }}
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
                            className={`p-2.5 rounded-lg ${colors.textSec} transition-all duration-300 group focus:outline-none`}
                            aria-label="Toggle theme"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = COLORS.primary;
                                e.currentTarget.style.backgroundColor = `${COLORS.primary}1a`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = '';
                                e.currentTarget.style.backgroundColor = '';
                            }}
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
                        className="md:hidden p-2 rounded-lg transition-all"
                        style={{ color: COLORS.primary }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = `${COLORS.primary}1a`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '';
                        }}
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
                            {navItems.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollTo(item.id)}
                                        className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-lg ${colors.textSec} transition-all duration-300 focus:outline-none`}
                                        style={{
                                            color: activeSection === item.id ? COLORS.primary : undefined,
                                            backgroundColor: activeSection === item.id ? `${COLORS.primary}1a` : undefined
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = COLORS.primary;
                                            e.currentTarget.style.backgroundColor = `${COLORS.primary}1a`;
                                        }}
                                        onMouseLeave={(e) => {
                                            if (activeSection !== item.id) {
                                                e.currentTarget.style.color = '';
                                                e.currentTarget.style.backgroundColor = '';
                                            }
                                        }}
                                    >
                                        <IconComponent className="w-5 h-5" strokeWidth={2} />
                                        {item.label}
                                    </button>
                                );
                            })}
                        </div>

                        <div className={`flex items-center justify-between mt-4 pt-4 border-t ${colors.borderLight}`}>
                            <div className="flex gap-2">
                                {(['bg', 'en', 'tr'] as Language[]).map(lang => (
                                    <button
                                        key={lang}
                                        onClick={() => changeLanguage(lang)}
                                        className={`px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 focus:outline-none ${
                                            i18n.language === lang ? 'text-zinc-900' : colors.textSec
                                        }`}
                                        style={{
                                            backgroundColor: i18n.language === lang ? COLORS.primary : undefined
                                        }}
                                        onMouseEnter={(e) => {
                                            if (i18n.language !== lang) {
                                                e.currentTarget.style.backgroundColor = `${COLORS.primary}1a`;
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (i18n.language !== lang) {
                                                e.currentTarget.style.backgroundColor = '';
                                            }
                                        }}
                                    >
                                        {lang.toUpperCase()}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={toggleTheme}
                                className={`p-2.5 rounded-lg ${colors.textSec} transition-all duration-300 group focus:outline-none`}
                                aria-label="Toggle theme"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = COLORS.primary;
                                    e.currentTarget.style.backgroundColor = `${COLORS.primary}1a`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '';
                                    e.currentTarget.style.backgroundColor = '';
                                }}
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