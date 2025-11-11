'use client';

import React, { useState, useEffect } from 'react';

type Language = 'bg' | 'en' | 'tr';
type Theme = 'dark' | 'light';

const translations = {
    bg: {
        nav: { home: 'Начало', services: 'Услуги', about: 'За нас', contact: 'Контакти' },
        hero: {
            title: 'Персонализирани Технологични Услуги',
            subtitle: 'За бизнеса и дома',
            description: 'Иновативни решения, които улесняват вашето ежедневие',
            cta: 'Свържете се'
        },
        services: {
            title: 'Нашите Услуги',
            subtitle: 'Професионални решения за вашия бизнес',
            items: [
                { icon: '🌐', title: 'Уеб Дизайн', desc: 'Модерни и адаптивни уебсайтове' },
                { icon: '💻', title: 'Уеб Приложения', desc: 'Персонализирани бизнес решения' },
                { icon: '🔧', title: 'Локални Мрежи', desc: 'Оптимизация и поддръжка' },
                { icon: '📹', title: 'Видеонаблюдение', desc: 'Съвременни системи за сигурност' },
                { icon: '📱', title: 'Ремонт Смартфони', desc: 'Бърз и качествен сервиз' },
                { icon: '⚙️', title: 'Операционни Системи', desc: 'Инсталация и оптимизация' }
            ]
        },
        about: {
            title: 'За Нас',
            mission: {
                title: 'Мисия',
                text: 'Предоставяме иновативни и достъпни технологични решения за всички.'
            },
            vision: {
                title: 'Визия',
                text: 'Да станем водещ технологичен партньор в региона.'
            },
            stats: [
                { value: '100+', label: 'Проекти' },
                { value: '24/7', label: 'Поддръжка' },
                { value: '50+', label: 'Клиенти' }
            ]
        },
        contact: {
            title: 'Свържете се с нас',
            subtitle: 'Готови сме да отговорим на вашите въпроси',
            name: 'Име',
            email: 'Email',
            phone: 'Телефон',
            message: 'Съобщение',
            submit: 'Изпрати',
            success: 'Благодарим! Ще се свържем с вас скоро.'
        },
        footer: {
            text: '© 2025 OMNI Tech Solutions. Всички права запазени.',
            tagline: 'Иновации • Качество • Удовлетворение'
        }
    },
    en: {
        nav: { home: 'Home', services: 'Services', about: 'About', contact: 'Contact' },
        hero: {
            title: 'Personalized Technology Services',
            subtitle: 'For Business and Home',
            description: 'Innovative solutions that simplify your daily life',
            cta: 'Get in Touch'
        },
        services: {
            title: 'Our Services',
            subtitle: 'Professional solutions for your business',
            items: [
                { icon: '🌐', title: 'Web Design', desc: 'Modern and responsive websites' },
                { icon: '💻', title: 'Web Applications', desc: 'Custom business solutions' },
                { icon: '🔧', title: 'Local Networks', desc: 'Optimization & maintenance' },
                { icon: '📹', title: 'CCTV Systems', desc: 'Modern security systems' },
                { icon: '📱', title: 'Phone Repair', desc: 'Fast & quality service' },
                { icon: '⚙️', title: 'Operating Systems', desc: 'Installation & optimization' }
            ]
        },
        about: {
            title: 'About Us',
            mission: {
                title: 'Mission',
                text: 'We provide innovative and accessible technology solutions for everyone.'
            },
            vision: {
                title: 'Vision',
                text: 'To become the leading technology partner in the region.'
            },
            stats: [
                { value: '100+', label: 'Projects' },
                { value: '24/7', label: 'Support' },
                { value: '50+', label: 'Clients' }
            ]
        },
        contact: {
            title: 'Get in Touch',
            subtitle: 'We are ready to answer your questions',
            name: 'Name',
            email: 'Email',
            phone: 'Phone',
            message: 'Message',
            submit: 'Send',
            success: 'Thanks! We will contact you soon.'
        },
        footer: {
            text: '© 2025 Omni Tech Solutions. All rights reserved.',
            tagline: 'Innovation • Quality • Satisfaction'
        }
    },
    tr: {
        nav: { home: 'Ana Sayfa', services: 'Hizmetler', about: 'Hakkımızda', contact: 'İletişim' },
        hero: {
            title: 'Kişiselleştirilmiş Teknoloji Hizmetleri',
            subtitle: 'İş ve Ev İçin',
            description: 'Günlük hayatınızı kolaylaştıran yenilikçi çözümler',
            cta: 'İletişime Geç'
        },
        services: {
            title: 'Hizmetlerimiz',
            subtitle: 'İşiniz için profesyonel çözümler',
            items: [
                { icon: '🌐', title: 'Web Tasarım', desc: 'Modern ve duyarlı web siteleri' },
                { icon: '💻', title: 'Web Uygulamaları', desc: 'Özel iş çözümleri' },
                { icon: '🔧', title: 'Yerel Ağlar', desc: 'Optimizasyon & bakım' },
                { icon: '📹', title: 'Güvenlik Kameraları', desc: 'Modern güvenlik sistemleri' },
                { icon: '📱', title: 'Telefon Onarımı', desc: 'Hızlı & kaliteli servis' },
                { icon: '⚙️', title: 'İşletim Sistemleri', desc: 'Kurulum & optimizasyon' }
            ]
        },
        about: {
            title: 'Hakkımızda',
            mission: {
                title: 'Misyon',
                text: 'Herkes için yenilikçi ve erişilebilir teknoloji çözümleri sunuyoruz.'
            },
            vision: {
                title: 'Vizyon',
                text: 'Bölgede lider teknoloji ortağı olmak.'
            },
            stats: [
                { value: '100+', label: 'Projeler' },
                { value: '24/7', label: 'Destek' },
                { value: '50+', label: 'Müşteriler' }
            ]
        },
        contact: {
            title: 'İletişime Geçin',
            subtitle: 'Sorularınızı yanıtlamaya hazırız',
            name: 'Ad',
            email: 'E-posta',
            phone: 'Telefon',
            message: 'Mesaj',
            submit: 'Gönder',
            success: 'Teşekkürler! Yakında sizinle iletişime geçeceğiz.'
        },
        footer: {
            text: '© 2025 Omni Tech Solutions. Tüm hakları saklıdır.',
            tagline: 'İnovasyon • Kalite • Memnuniyet'
        }
    }
};

const OmniTechSolutions = () => {
    const [language, setLanguage] = useState<Language>('bg');
    const [theme, setTheme] = useState<Theme>('dark');
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const t = translations[language];

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        const savedLang = localStorage.getItem('language') as Language;
        if (savedTheme) setTheme(savedTheme);
        if (savedLang) setLanguage(savedLang);

        const handleScroll = () => {
            const sections = ['home', 'services', 'about', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const changeLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
        setIsMenuOpen(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(t.contact.success);
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        const offset = 80;
        const elementPosition = element?.getBoundingClientRect().top || 0;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        setIsMenuOpen(false);
    };

    const colors = theme === 'dark' ? {
        bg: 'bg-zinc-950',
        bgGradient: 'bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950',
        nav: 'bg-zinc-900/80',
        card: 'bg-zinc-900/50',
        cardHover: 'hover:bg-zinc-900',
        section: 'bg-zinc-900/30',
        text: 'text-zinc-100',
        textSec: 'text-zinc-400',
        textTer: 'text-zinc-500',
        border: 'border-zinc-800',
        borderLight: 'border-zinc-800/50',
        input: 'bg-zinc-900',
        inputBorder: 'border-zinc-800',
        shadow: 'shadow-zinc-950/50'
    } : {
        bg: 'bg-white',
        bgGradient: 'bg-gradient-to-br from-gray-50 via-white to-gray-50',
        nav: 'bg-white/80',
        card: 'bg-white',
        cardHover: 'hover:bg-gray-50',
        section: 'bg-gray-50/50',
        text: 'text-gray-900',
        textSec: 'text-gray-600',
        textTer: 'text-gray-500',
        border: 'border-gray-200',
        borderLight: 'border-gray-200/50',
        input: 'bg-white',
        inputBorder: 'border-gray-300',
        shadow: 'shadow-gray-200/50'
    };

    return (
        <div className={`min-h-screen ${colors.bgGradient} transition-colors duration-300`}>
            {/* Navigation */}
            <nav className={`fixed w-full ${colors.nav} backdrop-blur-xl z-50 border-b ${colors.borderLight} transition-all duration-300`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
                            <img
                                src="https://omnitechsolutions.website/_next/static/media/logo.4de4350c.png"
                                alt="Logo"
                                className="h-12 w-auto transition-transform hover:scale-105"
                            />
                            <span className="font-bold text-[#ffaa18] text-lg hidden sm:inline">
                Omni Tech Solutions
              </span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            {Object.entries(t.nav).map(([key, label]) => (
                                <button
                                    key={key}
                                    onClick={() => scrollTo(key)}
                                    className={`${colors.textSec} hover:text-[#ffaa18] transition-all relative group ${
                                        activeSection === key ? 'text-[#ffaa18]' : ''
                                    }`}
                                >
                                    {label}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffaa18] transition-all group-hover:w-full ${
                                        activeSection === key ? 'w-full' : ''
                                    }`} />
                                </button>
                            ))}

                            {/* Language Switcher */}
                            <div className={`flex gap-1 border-l ${colors.borderLight} pl-6`}>
                                {(['bg', 'en', 'tr'] as Language[]).map(lang => (
                                    <button
                                        key={lang}
                                        onClick={() => changeLanguage(lang)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                            language === lang
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
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                {Object.entries(t.nav).map(([key, label]) => (
                                    <button
                                        key={key}
                                        onClick={() => scrollTo(key)}
                                        className={`block w-full text-left py-3 px-4 rounded-lg ${colors.textSec} hover:text-[#ffaa18] hover:bg-[#ffaa18]/10 transition-all ${
                                            activeSection === key ? 'text-[#ffaa18] bg-[#ffaa18]/10' : ''
                                        }`}
                                    >
                                        {label}
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
                                                language === lang ? 'bg-[#ffaa18] text-zinc-900' : colors.textSec
                                            }`}
                                        >
                                            {lang.toUpperCase()}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={toggleTheme}
                                    className={`p-2 rounded-lg ${colors.textSec} hover:text-[#ffaa18] transition-all`}
                                >
                                    <span className="text-2xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 min-h-[85vh] flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <div className="inline-block animate-fadeIn">
                                <div className="flex items-center gap-2 text-[#ffaa18] text-sm font-medium">
                                    <div className="w-8 h-0.5 bg-[#ffaa18]"></div>
                                    <span>Omni Tech Solutions</span>
                                </div>
                            </div>

                            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${colors.text} leading-tight animate-fadeIn animation-delay-200`}>
                                <span className="text-[#ffaa18] block mb-2">Персонализирани</span>
                                <span className="block">Технологични Услуги</span>
                            </h1>

                            <p className={`text-lg ${colors.textSec} font-medium animate-fadeIn animation-delay-300`}>
                                За бизнеса и дома
                            </p>

                            <p className={`text-base ${colors.textTer} leading-relaxed max-w-lg animate-fadeIn animation-delay-400`}>
                                Иновативни решения, които улесняват вашето ежедневие
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4 animate-fadeIn animation-delay-500">
                                <button
                                    onClick={() => scrollTo('contact')}
                                    className="bg-[#ffaa18] text-zinc-900 px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-[#ff9900] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    Свържете се →
                                </button>
                                <button
                                    onClick={() => scrollTo('services')}
                                    className={`${colors.text} border-2 border-zinc-700 px-8 py-3.5 rounded-lg text-base font-semibold hover:border-[#ffaa18] hover:text-[#ffaa18] transition-all`}
                                >
                                    Нашите Услуги
                                </button>
                            </div>
                        </div>

                        {/* Right Visual Element */}
                        <div className="hidden lg:flex justify-center items-center animate-fadeIn animation-delay-600">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#ffaa18] opacity-20 blur-3xl rounded-full"></div>
                                <img
                                    src="https://omnitechsolutions.website/_next/static/media/logo.4de4350c.png"
                                    alt="Omni Tech Solutions"
                                    className="relative h-64 w-64 object-contain drop-shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services Section */}
            <section id="services" className={`py-20 px-4 sm:px-6 lg:px-8 ${colors.section}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4`}>
                            <span className="text-[#ffaa18]">{t.services.title}</span>
                        </h2>
                        <p className={`${colors.textSec} text-lg max-w-2xl mx-auto`}>
                            {t.services.subtitle}
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {t.services.items.map((service, i) => (
                            <div
                                key={i}
                                className={`${colors.card} backdrop-blur-sm p-8 rounded-2xl border ${colors.border} ${colors.cardHover} hover:border-[#ffaa18]/50 transition-all duration-300 `}
                            >
                                <div className="text-5xl mb-4 transform transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className={`text-xl font-bold ${colors.text} mb-3 group-hover:text-[#ffaa18] transition-colors`}>
                                    {service.title}
                                </h3>
                                <p className={`${colors.textSec} leading-relaxed`}>
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4`}>
                            <span className="text-[#ffaa18]">{t.about.title}</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className={`${colors.card} backdrop-blur-sm p-8 rounded-2xl border ${colors.border} hover:border-[#ffaa18]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ffaa18]/10`}>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">🎯</span>
                                <h3 className="text-2xl font-bold text-[#ffaa18]">
                                    {t.about.mission.title}
                                </h3>
                            </div>
                            <p className={`${colors.textSec} leading-relaxed text-lg`}>
                                {t.about.mission.text}
                            </p>
                        </div>

                        <div className={`${colors.card} backdrop-blur-sm p-8 rounded-2xl border ${colors.border} hover:border-[#ffaa18]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ffaa18]/10`}>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">🚀</span>
                                <h3 className="text-2xl font-bold text-[#ffaa18]">
                                    {t.about.vision.title}
                                </h3>
                            </div>
                            <p className={`${colors.textSec} leading-relaxed text-lg`}>
                                {t.about.vision.text}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        {t.about.stats.map((stat, i) => (
                            <div
                                key={i}
                                className={`${colors.card} backdrop-blur-sm p-6 rounded-2xl border border-[#ffaa18]/30 text-center hover:border-[#ffaa18] transition-all duration-300 hover:shadow-xl hover:shadow-[#ffaa18]/20 hover:-translate-y-1`}
                            >
                                <div className="text-4xl font-bold text-[#ffaa18] mb-2">
                                    {stat.value}
                                </div>
                                <div className={`${colors.textSec} text-sm font-medium`}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${colors.section}`}>
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl sm:text-4xl font-bold mb-4`}>
                            <span className="text-[#ffaa18]">{t.contact.title}</span>
                        </h2>
                        <p className={`${colors.textSec} text-lg`}>
                            {t.contact.subtitle}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className={`${colors.card} backdrop-blur-sm p-8 rounded-2xl border ${colors.border} shadow-xl ${colors.shadow}`}>
                        {['name', 'email', 'phone'].map(field => (
                            <div key={field} className="mb-6">
                                <label className={`block ${colors.textSec} mb-2 text-sm font-bold uppercase tracking-wide`}>
                                    {t.contact[field as keyof typeof t.contact]}
                                    {field !== 'phone' && <span className="text-[#ffaa18] ml-1">*</span>}
                                </label>
                                <input
                                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                    name={field}
                                    value={formData[field as keyof typeof formData]}
                                    onChange={e => setFormData({...formData, [field]: e.target.value})}
                                    required={field !== 'phone'}
                                    className={`w-full px-4 py-3 ${colors.input} ${colors.text} rounded-xl border ${colors.inputBorder} focus:outline-none focus:ring-2 focus:ring-[#ffaa18] focus:border-transparent transition-all`}
                                />
                            </div>
                        ))}

                        <div className="mb-6">
                            <label className={`block ${colors.textSec} mb-2 text-sm font-bold uppercase tracking-wide`}>
                                {t.contact.message} <span className="text-[#ffaa18]">*</span>
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={e => setFormData({...formData, message: e.target.value})}
                                required
                                rows={5}
                                className={`w-full px-4 py-3 ${colors.input} ${colors.text} rounded-xl border ${colors.inputBorder} focus:outline-none focus:ring-2 focus:ring-[#ffaa18] focus:border-transparent resize-none transition-all`}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#ffaa18] text-zinc-900 py-4 rounded-xl font-bold text-lg hover:bg-[#ff9900] transition-all transform hover:scale-[1.02] shadow-lg shadow-[#ffaa18]/30 hover:shadow-xl hover:shadow-[#ffaa18]/40"
                        >
                            {t.contact.submit} →
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className={`${colors.section} py-10 px-4 sm:px-6 lg:px-8 border-t ${colors.borderLight}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-3">
                            <img
                                src="https://omnitechsolutions.website/_next/static/media/logo.4de4350c.png"
                                alt="Logo"
                                className="h-10 w-auto"
                            />
                            <span className="text-[#ffaa18] font-bold text-lg">
                Omni Tech Solutions
              </span>
                        </div>

                        <p className={`${colors.textSec} text-center text-sm`}>
                            {t.footer.text}
                        </p>

                        <p className={`${colors.textTer} text-center text-xs`}>
                            {t.footer.tagline}
                        </p>
                    </div>
                </div>
            </footer>

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
        </div>
    );
};

export default OmniTechSolutions;