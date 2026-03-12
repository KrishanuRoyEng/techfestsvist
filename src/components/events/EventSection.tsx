'use client';
import { useState, useTransition, useCallback } from 'react';
import { EventSectionData, EventCardData } from '@/types';
import EventCard from './EventCard';
import styles from './EventSection.module.css';

interface EventSectionProps {
    section: EventSectionData;
    onRegister?: (card: EventCardData, accent: string) => void;
    onRulesClick?: (card: EventCardData) => void;
}

export default function EventSection({ section, onRegister, onRulesClick }: EventSectionProps) {
    // State for accordion: only meaningful on mobile.
    // However, to keep it simple and smooth, we can default to open on desktop via CSS 
    // and only use the toggle state logic on mobile.
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    const toggleOpen = useCallback(() => {
        // Only toggle if we are in mobile view range (usually < 768px)
        // Check window width or just let CSS handle visibility and only track state for mobile.
        if (window.innerWidth <= 768) {
            startTransition(() => {
                setIsOpen((prev) => !prev);
            });
        }
    }, []);

    const accentColor = `var(--ev-${getAccentColor(section.id)})`;
    const accentRgb = getAccentRgb(section.id);

    return (
        <div 
            className={`${styles.section} ${isOpen ? styles.isOpen : ''}`} 
            id={`ev-${section.id}`}
            style={{ 
                '--accent': accentColor,
                '--accent-rgb': accentRgb
            } as React.CSSProperties}
        >
            <div className={styles.head} onClick={toggleOpen} role="button" aria-expanded={isOpen}>
                <span className={styles.num}>{section.number}</span>
                <span className={styles.name}>
                    {section.name} <span>{section.nameHighlight}</span>
                </span>
                <span className={styles.tag}>{section.tag}</span>
                <span className={styles.chevron}>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
            </div>
            
            <div className={styles.body}>
                <div className={styles.bodyContent}>
                    <p className={styles.desc}>{section.description}</p>
                    <div className={styles.info}>
                        {section.info.map((info) => (
                            <div key={info.label} className={styles.infoItem}>
                                <strong>{info.label}</strong>
                                {info.value}
                            </div>
                        ))}
                    </div>
                    <div className={styles.cards}>
                        {section.cards.map((card) => (
                            <EventCard 
                                key={card.number} 
                                card={card} 
                                onRegister={() => onRegister?.(card, accentColor)} 
                                onRulesClick={onRulesClick}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function getAccentColor(id: string) {
    const map: Record<string, string> = {
        techtrix: 'cyan',
        robotics: 'green',
        createx: 'pink',
        craftomania: 'orange',
        'mr-ms-engineer': 'gold',
        'brain-buster': 'purple',
        'code-storm': 'blue',
        commercial: 'green',
        gaming: 'pink'
    };
    return map[id] || 'cyan';
}

function getAccentRgb(id: string) {
    const map: Record<string, string> = {
        techtrix: '0, 240, 255',
        robotics: '0, 255, 117',
        createx: '255, 45, 155',
        craftomania: '255, 138, 0',
        'mr-ms-engineer': '255, 184, 0',
        'brain-buster': '155, 48, 255',
        'code-storm': '0, 117, 255',
        commercial: '0, 255, 117',
        gaming: '255, 45, 155'
    };
    return map[id] || '0, 240, 255';
}
