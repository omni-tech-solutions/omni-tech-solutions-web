/**
 * Глобални цветове и стилове за темата
 * Използва оригиналните naming conventions от старото приложение
 */

export const COLORS = {
    // The logo's yellow. Put near-black text on it — white on yellow is unreadable.
    primary: '#f9a427',
    primaryHover: '#e8930f',
    // Readable amber for yellow-ish text on light backgrounds (4.7:1 on white)
    primaryDark: '#a86400',

    dark: {
        bg: 'bg-zinc-950',
        bgGradient: 'bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950',
        nav: 'bg-zinc-900/80',
        card: 'bg-zinc-800/70',
        cardHover: 'hover:bg-zinc-800',
        section: 'bg-zinc-900/30',
        text: 'text-zinc-100',
        textSec: 'text-zinc-300',
        textTer: 'text-zinc-400',
        /** Brand-coloured text (prices, active nav, icons) — plain yellow reads well on dark */
        accentText: 'text-[#f9a427]',
        border: 'border-zinc-700',
        borderLight: 'border-zinc-700/70',
        input: 'bg-zinc-900',
        inputBorder: 'border-zinc-800',
        shadow: 'shadow-zinc-950/50',
    },

    light: {
        bg: 'bg-white',
        bgGradient: 'bg-gradient-to-br from-gray-50 via-white to-gray-50',
        nav: 'bg-white/80',
        card: 'bg-white',
        cardHover: 'hover:bg-gray-50',
        section: 'bg-gray-100/70',
        text: 'text-gray-900',
        textSec: 'text-gray-700',
        textTer: 'text-gray-600',
        /** Brand-coloured text on light backgrounds — darker amber, since yellow on white is 2:1 */
        accentText: 'text-[#a86400]',
        border: 'border-gray-300',
        borderLight: 'border-gray-200',
        input: 'bg-white',
        inputBorder: 'border-gray-300',
        shadow: 'shadow-gray-200/50',
    }
} as const;

export const TRANSITIONS = {
    default: 'transition-all duration-300',
    fast: 'transition-all duration-150',
    slow: 'transition-all duration-500',
} as const;

export const SHADOWS = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    primary: 'shadow-[#ff6b1a]/30',
    primaryHover: 'shadow-[#ff6b1a]/40',
} as const;

/**
 * The one page container. Header, every section and the footer use it so all
 * left/right edges line up — don't add another max-width wrapper at page level.
 */
export const CONTAINER = 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8';

export const BORDER_RADIUS = {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    full: 'rounded-full',
} as const;

export const getThemeColors = (theme: 'dark' | 'light') => {
    return COLORS[theme];
};