import { useState, useEffect } from 'react';
import type { Theme } from '@/app/types';
import { getThemeColors } from '@/app/styles/theme';

export const useTheme = () => {
    // Initialize theme from localStorage immediately (before first render)
    const [theme, setTheme] = useState<Theme>(() => {
        // Only access localStorage in browser
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') as Theme | null;
            return savedTheme || 'light'; // Default to 'light' if no saved theme
        }
        return 'light'; // SSR fallback
    });

    // Apply theme changes to document
    useEffect(() => {
        // Apply theme class to html element
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);

        // Apply background color
        document.body.style.backgroundColor = theme === 'dark' ? '#18181b' : '#ffffff';
        document.body.style.color = theme === 'dark' ? '#ffffff' : '#18181b';

        // Save to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    const colors = getThemeColors(theme);

    return { theme, toggleTheme, colors };
};