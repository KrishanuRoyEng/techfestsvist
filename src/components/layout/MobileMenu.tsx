'use client';

import { useState } from 'react';
import { socialLinks } from '@/data/socialLinks';
import { sideNavItems, topNavLinks } from '@/data/navigation';

interface MobileMenuProps {
    onNavigate: (page: string) => void;
}

export default function MobileMenu({ onNavigate }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [showLinks, setShowLinks] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isOpen) setShowLinks(false);
    };

    const handleNavigate = (page: string) => {
        onNavigate(page);
        setIsOpen(false);
        setShowLinks(false);
    };

    // Combine side nav items and some top nav items for mobile
    const menuItems = [
        ...sideNavItems.map(item => ({
            label: item.label,
            page: item.page,
            icon: item.icon,
            id: item.id
        })),
        {
            label: 'Workshops',
            page: 'workshops',
            icon: 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z',
            id: 'mob-workshops'
        }
    ];

    return (
        <div className="mobile-menu-container">
            <button 
                className={`hamburger-btn ${isOpen ? 'open' : ''}`} 
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </button>

            <div className={`mobile-menu-overlay ${isOpen ? 'show' : ''}`} onClick={() => setIsOpen(false)}>
                <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
                    {!showLinks ? (
                        <>
                            <div className="menu-header">// SYSTEM NAVIGATION</div>
                            <ul className="menu-list">
                                {menuItems.map((item, idx) => (
                                    <li key={item.id} style={{ transitionDelay: `${idx * 0.05}s` }}>
                                        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate(item.page); }}>
                                            <svg className="menu-icon" viewBox="0 0 24 24">
                                                <path d={item.icon} />
                                            </svg>
                                            <span className="menu-label">{item.label}</span>
                                            <span className="menu-index">0{idx + 1}</span>
                                        </a>
                                    </li>
                                ))}
                                <li style={{ transitionDelay: `${menuItems.length * 0.05}s` }}>
                                    <a href="#" className="links-trigger" onClick={(e) => { e.preventDefault(); setShowLinks(true); }}>
                                        <svg className="menu-icon" viewBox="0 0 24 24">
                                            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                        </svg>
                                        <span className="menu-label">SOCIAL LINKS</span>
                                        <span className="menu-index">→</span>
                                    </a>
                                </li>
                            </ul>
                        </>
                    ) : (
                        <div className="social-links-popup">
                            <button className="back-btn" onClick={() => setShowLinks(false)}>
                                <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, marginRight: 8, fill: 'currentColor' }}>
                                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                                </svg>
                                BACK
                            </button>
                            <div className="menu-header">// CONNECTED_NETWORKS</div>
                            <div className="social-grid">
                                {socialLinks.map((link) => (
                                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="social-link-item">
                                        <svg viewBox="0 0 24 24"><path d={link.icon} /></svg>
                                        <span>{link.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
