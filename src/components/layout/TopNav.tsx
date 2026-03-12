'use client';

import Image from 'next/image';
import { topNavLinks } from '@/data/navigation';

interface TopNavProps {
    onNavigate: (page: string) => void;
}

export default function TopNav({ onNavigate }: TopNavProps) {
    return (
        <nav className="top-nav">
            <a
                href="#"
                className="top-nav-logo left"
                onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                }}
            >
                <div className="logo-pulse-wrap">
                    <Image
                        src="/College.svg"
                        alt="College Logo"
                        width={210}
                        height={56}
                        className="pulse-logo"
                        priority
                    />
                </div>
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

            <div className="top-nav-logo right">
                <div className="logo-pulse-wrap">
                    <Image
                        src="/Logo.svg"
                        alt="Innovention Logo"
                        className="pulse-logo"
                        width={210}
                        height={56}
                        priority
                    />
                </div>
            </div>
        </nav>
    );
}
