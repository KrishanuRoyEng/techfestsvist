'use client';

import { topNavLinks } from '@/data/navigation';

interface TopNavProps {
    onNavigate: (page: string) => void;
}

export default function TopNav({ onNavigate }: TopNavProps) {
    return (
        <nav className="top-nav">
            <a
                href="#"
                className="top-nav-logo"
                onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                }}
            >
                <img src="/Innovention.svg" alt="Innovention" />
            </a>
            <ul className="top-nav-links">
                {topNavLinks.map((link) => (
                    <li key={link.page}>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                onNavigate(link.page);
                            }}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div style={{ width: 60 }} />
        </nav>
    );
}
