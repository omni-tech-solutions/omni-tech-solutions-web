import React from 'react';

/**
 * Simple Windows logo (four panes) drawn in `currentColor`, so it can stand in
 * for a lucide icon on the service cards. `strokeWidth` is accepted and ignored
 * to keep the same props shape as the lucide icons next to it.
 */
export const WindowsIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ strokeWidth: _strokeWidth, ...props }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
        <path d="M3 3h8.5v8.5H3zM12.5 3H21v8.5h-8.5zM3 12.5h8.5V21H3zM12.5 12.5H21V21h-8.5z" />
    </svg>
);
