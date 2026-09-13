import { useState, useEffect } from 'react';

const SECTIONS = ['home', 'services', 'about', 'contact'];

/**
 * Which homepage section the visitor is looking at, for the navbar highlight.
 *
 * The current section is the last one whose top has passed a line about a third
 * of the way down the screen. When the page is scrolled to the very bottom, the
 * last section wins — the contact section is short and sits at the end of the
 * page, so the page can never scroll far enough for it to reach that line.
 */
export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const update = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (scrolledToBottom && document.getElementById(SECTIONS[SECTIONS.length - 1])) {
        setActiveSection(SECTIONS[SECTIONS.length - 1]);
        return;
      }

      const line = window.innerHeight * 0.35;
      let current = SECTIONS[0];
      for (const id of SECTIONS) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= line) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return activeSection;
};
