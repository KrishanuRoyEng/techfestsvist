'use client';

import { socialLinks } from '@/data/socialLinks';

export default function SideNavRight() {
    return (
        <nav className="side-nav-right">
            {socialLinks.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    className="social-icon"
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg viewBox="0 0 24 24">
                        <path d={link.icon} />
                    </svg>
                </a>
            ))}
        </nav>
    );
}
