'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { ArrowRight, Camera, ChevronDown, Clock, HardDrive, Rocket, Wifi } from 'lucide-react';
import { COLORS } from '@/app/styles/theme';
import { SERVICES, type ServiceCopy } from '@/app/config/services';

interface HeroSectionProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

/**
 * Homepage hero. The right side tells the two-pillar story visually: a code
 * window (software) with a live "system status" card over it (infrastructure).
 * The mock-up is static markup — no invented clients, ratings or counters.
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ colors }) => {
    const { t } = useTranslation();
    const isDark = colors.text === 'text-zinc-100';

    const stats = [
        { value: t('hero.localBadge'), label: t('hero.localBadgeLabel') },
        { value: t('hero.responseValue'), label: t('hero.responseLabel') },
        { value: t('hero.ownerTitle'), label: t('hero.ownerLabel') },
    ];

    const serviceCopy = t('services.items', { returnObjects: true }) as ServiceCopy[];
    const titleOf = (id: string) =>
        (Array.isArray(serviceCopy) ? serviceCopy.find((item) => item.id === id)?.title : undefined) ?? id;

    const statusRows = [
        { icon: Wifi, label: t('hero.visual.wifi') },
        { icon: Camera, label: t('hero.visual.cameras') },
        { icon: HardDrive, label: t('hero.visual.backup') },
    ];

    // Syntax-coloured code lines for the editor mock-up (language-neutral)
    const K = '#ff8a4c'; // keyword
    const S = '#a5d6a7'; // string
    const P = '#9ca3af'; // punctuation / comments
    const codeLines: React.ReactNode[] = [
        <><span style={{ color: K }}>const</span> project = <span style={{ color: K }}>await</span> omni.build({'{'}</>,
        <>&nbsp;&nbsp;client: <span style={{ color: S }}>&apos;you&apos;</span>,</>,
        <>&nbsp;&nbsp;platforms: [<span style={{ color: S }}>&apos;web&apos;</span>, <span style={{ color: S }}>&apos;desktop&apos;</span>, <span style={{ color: S }}>&apos;mobile&apos;</span>],</>,
        <>&nbsp;&nbsp;infrastructure: <span style={{ color: K }}>true</span>,</>,
        <>&nbsp;&nbsp;support: <span style={{ color: S }}>&apos;long-term&apos;</span>,</>,
        <>{'}'});</>,
        <><span style={{ color: P }}>{'// '}</span><span style={{ color: P }}>ready to ship</span></>,
        <>deploy(project);<span className="hero-caret" /></>,
    ];

    return (
        <section
            id="home"
            className="relative min-h-[calc(100svh-64px)] sm:min-h-screen flex items-center overflow-hidden"
        >
            {/* Background: glow orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="hero-orb hero-orb-1 absolute w-[420px] sm:w-[680px] h-[420px] sm:h-[680px] rounded-full"
                    style={{
                        background: `radial-gradient(circle, ${COLORS.primary}, transparent 70%)`,
                        opacity: isDark ? 0.12 : 0.08,
                        top: '-18%',
                        right: '-6%',
                    }}
                />
                <div
                    className="hero-orb hero-orb-2 absolute w-[360px] sm:w-[520px] h-[360px] sm:h-[520px] rounded-full"
                    style={{
                        background: `radial-gradient(circle, ${COLORS.primaryHover}, transparent 70%)`,
                        opacity: isDark ? 0.08 : 0.05,
                        bottom: '-12%',
                        left: '-10%',
                    }}
                />
            </div>

            {/* Background: line grid fading out towards the edges */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px)`,
                    backgroundSize: '56px 56px',
                    maskImage: 'radial-gradient(ellipse 70% 60% at 60% 45%, black 30%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 60% 45%, black 30%, transparent 75%)',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

                    {/* Left — message */}
                    <div className="lg:col-span-6 space-y-6 sm:space-y-7">
                        {/* Badge */}
                        <div
                            className="hero-fade-in inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
                            style={{
                                backgroundColor: `${COLORS.primary}15`,
                                border: `1px solid ${COLORS.primary}40`,
                                animationDelay: '0ms',
                            }}
                        >
                            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: COLORS.primary }} />
                                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5" style={{ backgroundColor: COLORS.primary }} />
                            </span>
                            <span style={{ color: COLORS.primary }}>{t('hero.badge')}</span>
                        </div>

                        {/* Headline — first half in the brand gradient */}
                        <h1
                            className="hero-fade-in text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight"
                            style={{ animationDelay: '100ms' }}
                        >
                            <span
                                className="hero-gradient-text bg-clip-text text-transparent"
                                style={{ backgroundImage: `linear-gradient(90deg, ${COLORS.primary}, #ffb37a, ${COLORS.primaryHover}, ${COLORS.primary})` }}
                            >
                                {t('hero.titleLead')}
                            </span>{' '}
                            <span className={colors.text}>{t('hero.titleRest')}</span>
                        </h1>

                        <p
                            className={`hero-fade-in ${colors.textSec} text-base md:text-lg leading-relaxed max-w-xl`}
                            style={{ animationDelay: '200ms' }}
                        >
                            {t('hero.description')}
                        </p>

                        {/* CTA Buttons */}
                        <div className="hero-fade-in flex flex-col sm:flex-row gap-3" style={{ animationDelay: '300ms' }}>
                            <a
                                href="#contact"
                                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 font-semibold text-sm sm:text-base text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#ff6b1a] focus:ring-offset-2"
                                style={{
                                    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                    boxShadow: `0 14px 30px -10px ${COLORS.primary}B3`,
                                }}
                            >
                                {/* Shine sweep on hover */}
                                <span className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] translate-x-0 group-hover:translate-x-[300%] transition-transform duration-700" />
                                <span className="relative z-10">{t('hero.cta')}</span>
                                <ArrowRight className="relative z-10 w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                            </a>

                            <a
                                href="#services"
                                className={`inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 ${colors.card} border ${colors.border} ${colors.text} font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 hover:border-[#ff6b1a] hover:text-[#ff6b1a] backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#ff6b1a] focus:ring-offset-2`}
                            >
                                {t('hero.learnMore')}
                            </a>
                        </div>

                        {/* Key facts — divided row, no invented numbers */}
                        <div
                            className={`hero-fade-in grid grid-cols-3 max-w-xl pt-6 border-t ${colors.borderLight}`}
                            style={{ animationDelay: '400ms' }}
                        >
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className={`${index > 0 ? 'pl-3 sm:pl-5 border-l' : 'pr-3 sm:pr-5'} ${index === 1 ? 'pr-3 sm:pr-5' : ''} ${colors.borderLight}`}
                                >
                                    <div
                                        className="text-base sm:text-xl font-bold bg-clip-text text-transparent leading-tight"
                                        style={{ backgroundImage: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className={`text-[11px] sm:text-xs ${colors.textSec} mt-1 leading-snug`}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Service shortcuts — icon tiles, name pops up underneath on hover */}
                        <div className="hero-fade-in pb-8" style={{ animationDelay: '500ms' }}>
                            <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${colors.textTer}`}>
                                {t('services.title')}
                            </p>
                            <div className="flex flex-wrap gap-2.5 sm:gap-3">
                                {SERVICES.map((service) => {
                                    const Icon = service.icon;
                                    return (
                                        <Link
                                            key={service.id}
                                            href={`/services/${service.id}`}
                                            aria-label={titleOf(service.id)}
                                            className={`group/icon relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl border ${colors.border} backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#ff6b1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b1a]`}
                                            style={{
                                                backgroundColor: isDark ? 'rgba(39,39,42,0.9)' : 'rgba(255,255,255,0.95)',
                                                boxShadow: `0 10px 28px -10px ${COLORS.primary}80`,
                                            }}
                                        >
                                            <Icon className="w-5 h-5" style={{ color: COLORS.primary }} strokeWidth={1.8} />
                                            <span
                                                className="pointer-events-none absolute z-20 top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white opacity-0 translate-y-1 group-hover/icon:opacity-100 group-hover/icon:translate-y-0 group-focus-visible/icon:opacity-100 group-focus-visible/icon:translate-y-0 transition-all duration-200"
                                                style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
                                            >
                                                {titleOf(service.id)}
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right — software + infrastructure mock-up */}
                    <div className="lg:col-span-6">
                        <div
                            className="hero-fade-in relative mx-auto w-full max-w-[560px] h-[380px] sm:h-[440px]"
                            style={{ animationDelay: '350ms' }}
                        >
                            {/* Glow behind the windows */}
                            <div
                                className="absolute inset-8 rounded-[2rem] blur-3xl pointer-events-none"
                                style={{ background: `linear-gradient(135deg, ${COLORS.primary}55, transparent 70%)` }}
                            />

                            {/* Code window */}
                            <div className="hero-float-slow absolute top-0 right-0 w-[94%] sm:w-[88%] rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]"
                                style={{ backgroundColor: '#111114' }}
                            >
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10" style={{ backgroundColor: '#18181c' }}>
                                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                    <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                                    <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                                    <span className="ml-3 text-xs font-mono text-zinc-400">omni-project.ts</span>
                                </div>
                                <div className="px-4 sm:px-5 py-4 sm:py-5 font-mono text-[11px] sm:text-[13px] leading-6 sm:leading-7 text-zinc-200 overflow-hidden">
                                    {codeLines.map((line, index) => (
                                        <div key={index} className="flex whitespace-nowrap">
                                            <span className="w-6 sm:w-7 flex-shrink-0 text-zinc-600 select-none">{index + 1}</span>
                                            <span>{line}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* System status card (infrastructure) */}
                            <div
                                className={`hero-float absolute bottom-0 left-0 w-[70%] sm:w-[58%] rounded-2xl border ${colors.border} p-4 sm:p-5 backdrop-blur-xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]`}
                                style={{ backgroundColor: isDark ? 'rgba(39,39,42,0.92)' : 'rgba(255,255,255,0.95)' }}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className={`text-xs sm:text-sm font-bold ${colors.text}`}>{t('hero.visual.statusTitle')}</span>
                                    <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-emerald-500">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                        </span>
                                        {t('hero.visual.online')}
                                    </span>
                                </div>
                                <ul className="space-y-2">
                                    {statusRows.map(({ icon: Icon, label }) => (
                                        <li key={label} className="flex items-center gap-2.5">
                                            <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${COLORS.primary}1A` }}>
                                                <Icon className="w-3.5 h-3.5" style={{ color: COLORS.primary }} strokeWidth={2} />
                                            </span>
                                            <span className={`flex-1 text-xs sm:text-[13px] ${colors.textSec}`}>{label}</span>
                                            <span className="text-[10px] sm:text-[11px] font-bold text-emerald-500">OK</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Floating chip — deployment */}
                            <div
                                className="hero-float-delay absolute top-[46%] -right-1 sm:-right-4 inline-flex items-center gap-2 px-3 py-2 rounded-xl text-white text-[11px] sm:text-xs font-semibold shadow-xl"
                                style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
                            >
                                <Rocket className="w-3.5 h-3.5" strokeWidth={2.2} />
                                {t('hero.visual.deployed')}
                            </div>

                            {/* Floating chip — response time */}
                            <div
                                className={`hero-float absolute -top-4 left-2 sm:left-0 inline-flex items-center gap-2 px-3 py-2 rounded-xl border ${colors.border} text-[11px] sm:text-xs font-semibold ${colors.text} shadow-lg`}
                                style={{ backgroundColor: isDark ? 'rgba(39,39,42,0.95)' : 'rgba(255,255,255,0.97)' }}
                            >
                                <Clock className="w-3.5 h-3.5" style={{ color: COLORS.primary }} strokeWidth={2.2} />
                                {t('hero.responseValue')} · {t('hero.responseLabel')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <a
                href="#services"
                className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 z-10 scroll-bounce"
                aria-label={t('hero.scrollDown')}
            >
                <span className={`${colors.textSec} text-xs font-medium`}>{t('hero.scrollDown')}</span>
                <ChevronDown className={`w-5 h-5 ${colors.textSec}`} strokeWidth={2} />
            </a>

            <style jsx>{`
                /* Staggered fade-in */
                .hero-fade-in {
                    opacity: 0;
                    transform: translateY(16px);
                    animation: heroFadeIn 0.7s ease-out forwards;
                }
                @keyframes heroFadeIn {
                    to { opacity: 1; transform: translateY(0); }
                }

                /* Headline gradient slowly flows */
                .hero-gradient-text {
                    background-size: 250% 100%;
                    animation: gradientFlow 8s ease-in-out infinite;
                }
                @keyframes gradientFlow {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                /* Floating mock-up pieces */
                .hero-float { animation: heroFloat 6s ease-in-out infinite; }
                .hero-float-slow { animation: heroFloat 9s ease-in-out infinite; }
                .hero-float-delay { animation: heroFloat 7s ease-in-out 1.5s infinite; }
                @keyframes heroFloat {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                /* Blinking caret in the code window (rendered by this component, so scoped) */
                .hero-caret {
                    display: inline-block;
                    width: 7px;
                    height: 1.1em;
                    margin-left: 3px;
                    vertical-align: text-bottom;
                    background: #ff6b1a;
                    animation: caretBlink 1s steps(1) infinite;
                }
                @keyframes caretBlink {
                    50% { opacity: 0; }
                }

                /* Orb drift */
                .hero-orb-1 { animation: orbDrift1 25s ease-in-out infinite; }
                .hero-orb-2 { animation: orbDrift2 30s ease-in-out infinite; }
                @keyframes orbDrift1 {
                    0%, 100% { transform: translate(0, 0); }
                    33% { transform: translate(-25px, 15px); }
                    66% { transform: translate(15px, -10px); }
                }
                @keyframes orbDrift2 {
                    0%, 100% { transform: translate(0, 0); }
                    33% { transform: translate(20px, -15px); }
                    66% { transform: translate(-10px, 20px); }
                }

                /* Scroll bounce */
                .scroll-bounce { animation: scrollBounce 2s ease-in-out infinite; }
                @keyframes scrollBounce {
                    0%, 100% { transform: translate(-50%, 0); }
                    50% { transform: translate(-50%, 6px); }
                }

                @media (prefers-reduced-motion: reduce) {
                    .hero-fade-in { opacity: 1; transform: none; animation: none; }
                    .hero-gradient-text,
                    .hero-float,
                    .hero-float-slow,
                    .hero-float-delay,
                    .hero-orb-1,
                    .hero-orb-2,
                    .scroll-bounce,
                    .hero-caret {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
};
