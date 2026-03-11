'use client';

import { useState } from 'react';
import { socialLinks } from '@/data/socialLinks';

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
                            <div className="menu-header">MENU</div>
                            <ul className="menu-list">
                                <li>
                                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }}>
                                        <span className="menu-item-tag">01</span> HOME
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('registration'); }}>
                                        <span className="menu-item-tag">02</span> REGISTRATION
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('events'); }}>
                                        <span className="menu-item-tag">03</span> COMPETITIONS
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('workshops'); }}>
                                        <span className="menu-item-tag">04</span> WORKSHOPS
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('gallery'); }}>
                                        <span className="menu-item-tag">05</span> GALLERY
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('contact'); }}>
                                        <span className="menu-item-tag">06</span> CONTACT
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('about'); }}>
                                        <span className="menu-item-tag">07</span> ABOUT US
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="links-trigger" onClick={(e) => { e.preventDefault(); setShowLinks(true); }}>
                                        <span className="menu-item-tag">08</span> LINKS →
                                    </a>
                                </li>
                            </ul>
                        </>
                    ) : (
                        <div className="social-links-popup">
                            <button className="back-btn" onClick={() => setShowLinks(false)}>← BACK</button>
                            <div className="menu-header">SOCIAL LINKS</div>
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
