'use client';
import { useState } from 'react';
import { EventSectionData, EventCardData } from '@/types';
import EventCard from './EventCard';

interface EventSectionProps {
    section: EventSectionData;
    onRegister?: (card: EventCardData, accent: string) => void;
    onRulesClick?: (card: EventCardData) => void;
}

export default function EventSection({ section, onRegister, onRulesClick }: EventSectionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`ev-section section-${section.id} ${isOpen ? 'is-open' : ''}`} id={`ev-${section.id}`}>
            <div className="ev-head" onClick={() => setIsOpen(!isOpen)}>
                <span className="ev-num">{section.number}</span>
                <span className="ev-name">
                    {section.name} <span>{section.nameHighlight}</span>
                </span>
                <span className="ev-tag">{section.tag}</span>
                <span className="ev-chevron">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
            </div>
            
            <div className="ev-body">
                <p className="ev-desc">{section.description}</p>
                <div className="ev-info">
                    {section.info.map((info) => (
                        <div key={info.label} className="ev-info-item">
                            <strong>{info.label}</strong>
                            {info.value}
                        </div>
                    ))}
                </div>
                <div className="ev-cards">
                    {section.cards.map((card) => (
                        <EventCard 
                            key={card.number} 
                            card={card} 
                            onRegister={(c) => onRegister?.(c, `var(--ev-${getAccentColor(section.id)})`)} 
                            onRulesClick={onRulesClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function getAccentColor(id: string) {
    const map: Record<string, string> = {
        techtrix: 'cyan',
        robotics: 'purple',
        createx: 'pink',
        craftomania: 'gold',
        'mr-ms-engineer': 'green',
        'brain-buster': 'orange',
        'code-storm': 'blue',
        commercial: 'green',
        gaming: 'pink'
    };
    return map[id] || 'cyan';
}
