import { useState, useEffect } from 'react';
import type { Theme } from '@/app/types';
import { getThemeColors } from '@/app/styles/theme';

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>('light');
    const [mounted, setMounted] = useState(false);

    // Sync theme from localStorage after mount to avoid hydration mismatch
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        if (savedTheme) {
            setTheme(savedTheme);
        }
        setMounted(true);
    }, []);

    // Apply theme changes to document
    useEffect(() => {
        if (!mounted) return;

        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);

        document.body.style.backgroundColor = theme === 'dark' ? '#18181b' : '#ffffff';
        document.body.style.color = theme === 'dark' ? '#ffffff' : '#18181b';

        localStorage.setItem('theme', theme);
    }, [theme, mounted]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    const colors = getThemeColors(theme);

    return { theme, toggleTheme, colors };
};