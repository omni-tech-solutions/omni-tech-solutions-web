/**
 * Глобални цветове и стилове за темата
 * Използва оригиналните naming conventions от старото приложение
 */

export const COLORS = {
    primary: '#ffaa18',
    primaryHover: '#ff9900',
    primaryDark: '#e69100',

    dark: {
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
        shadow: 'shadow-zinc-950/50',
    },

    light: {
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
    primary: 'shadow-[#ffaa18]/30',
    primaryHover: 'shadow-[#ffaa18]/40',
} as const;

export const BORDER_RADIUS = {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    full: 'rounded-full',
} as const;

export const getThemeColors = (theme: 'dark' | 'light') => {
    return COLORS[theme];
};