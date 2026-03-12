import React, { useState } from 'react';
import { eventSections } from '@/data/events';
import RegistrationModal from '@/components/events/RegistrationModal';
import { EventCardData, EventSectionData } from '@/types';

interface RegistrationPageProps {
    isActive: boolean;
}

export default function RegistrationPage({ isActive }: RegistrationPageProps) {
    const [selectedCategory, setSelectedCategory] = useState<EventSectionData | null>(null);
    const [selectedEvent, setSelectedEvent] = useState<EventCardData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCategorySelect = (section: EventSectionData) => {
        setSelectedCategory(section);
        setSelectedEvent(null);
    };

    const handleEventOpen = (event: EventCardData) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    const getAccent = () => {
        if (!selectedCategory) return 'var(--pink)';
        const map: Record<string, string> = {
            techtrix: 'var(--ev-cyan)',
            robotics: 'var(--ev-purple)',
            createx: 'var(--ev-pink)',
            craftomania: 'var(--ev-gold)',
            'mr-ms-engineer': 'var(--ev-green)',
            'brain-buster': 'var(--ev-orange)',
            'code-storm': 'var(--ev-blue)',
            commercial: 'var(--ev-green)',
            gaming: 'var(--ev-pink)'
        };
        return map[selectedCategory.id] || 'var(--pink)';
    };

    return (
        <div id="page-registration" className={`page registration-page ${isActive ? 'active' : ''}`}>
            <div className="registration-content">
                <h1 className="sp-title">
                    Secure <span>Access</span>
                </h1>
                <div className="sp-sub">Select your domain &amp; authorize entry</div>
                
                <div className="reg-flow">
                    {/* Category Selection */}
                <div className="reg-grid-cats">
                    {eventSections.map((section) => (
                        <React.Fragment key={section.id}>
                            <div 
                                className={`reg-cat-card ${selectedCategory?.id === section.id ? 'active' : ''}`}
                                onClick={() => handleCategorySelect(section)}
                            >
                                <div className="reg-cat-name">{section.nameHighlight}</div>
                                <div className="reg-cat-tag">{section.tag}</div>
                            </div>
                            
                            {selectedCategory?.id === section.id && (
                                <div 
                                    className="reg-sub-events-container animate-in"
                                    style={{ 
                                        '--section-accent': getAccent(),
                                        borderLeftColor: getAccent()
                                    } as React.CSSProperties}
                                >
                                    <div className="reg-step-label sub-label" style={{ color: getAccent() }}>Choose Sub-Event</div>
                                    <div className="reg-grid-events">
                                        {section.cards.map((card) => (
                                            <div 
                                                key={card.number}
                                                className="reg-event-item"
                                                onClick={() => handleEventOpen(card)}
                                            >
                                                <div className="reg-event-dot" style={{ background: getAccent(), boxShadow: `0 0 10px ${getAccent()}` }} />
                                                <div className="reg-event-name">{card.name}</div>
                                                <div className="reg-event-btn" style={{ color: getAccent(), borderColor: `rgba(255,255,255,0.1)` }}>AUTHORIZE</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                </div>
            </div>

            <RegistrationModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                eventData={selectedEvent}
                accentColor={getAccent()}
            />
        </div>
    );
}
