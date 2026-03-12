'use client';
import React, { useState, useTransition, useCallback } from 'react';
import { eventSections } from '@/data/events';
import RegistrationModal from '@/components/events/RegistrationModal';
import { EventCardData, EventSectionData } from '@/types';
import styles from './RegistrationPage.module.css';

interface RegistrationPageProps {
    isActive: boolean;
}

export default function RegistrationPage({ isActive }: RegistrationPageProps) {
    const [selectedCategory, setSelectedCategory] = useState<EventSectionData | null>(null);
    const [selectedEvent, setSelectedEvent] = useState<EventCardData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    // Optimization: Wrapping category selection in startTransition.
    // Switching categories causes large DOM changes (removing one list, adding another).
    // useTransition ensures the click remains responsive even if the DOM work takes time.
    const handleCategorySelect = useCallback((section: EventSectionData) => {
        startTransition(() => {
            setSelectedCategory(section);
            setSelectedEvent(null);
        });
    }, []);

    const handleEventOpen = useCallback((event: EventCardData) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    }, []);

    const getAccent = useCallback(() => {
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
    }, [selectedCategory]);

    if (!isActive) return null;

    return (
        <>
            <div id="page-registration" className={`page ${styles.page} active`}>
                <div className={styles.content}>
                    <h1 className="sp-title">
                        Secure <span>Access</span>
                    </h1>
                    <div className="sp-sub">Select your domain &amp; authorize entry</div>
                    
                    <div className={styles.flow}>
                        <div className={styles.regStep}>
                            <div className={styles.regStepNum}>01</div>
                            <div className={styles.stepLabel}>Initialization</div>
                            <div className={styles.gridCats}>
                                {eventSections.map((section) => (
                                    <React.Fragment key={section.id}>
                                        <div 
                                            className={`${styles.catCard} ${selectedCategory?.id === section.id ? styles.active : ''}`}
                                            onClick={() => handleCategorySelect(section)}
                                            role="button"
                                            aria-pressed={selectedCategory?.id === section.id}
                                        >
                                            <div className={styles.catName}>{section.nameHighlight}</div>
                                            <div className={styles.catTag}>{section.tag}</div>
                                        </div>
                                        
                                        {selectedCategory?.id === section.id && (
                                            <div 
                                                className={`${styles.subEventsContainer} animate-in`}
                                                style={{ 
                                                    '--section-accent': getAccent(),
                                                    borderLeftColor: getAccent()
                                                } as React.CSSProperties}
                                            >
                                                <div className={`${styles.regStepNum}`} style={{ opacity: 0.02, fontSize: '6rem', top: '-2rem' }}>02</div>
                                                <div className={`${styles.stepLabel} ${styles.subLabel}`} style={{ color: getAccent() }}>Choose Sub-Event</div>
                                                <div className={styles.gridEvents}>
                                                    {section.cards.map((card) => (
                                                        <div 
                                                            key={card.number}
                                                            className={styles.eventItem}
                                                            onClick={() => handleEventOpen(card)}
                                                            role="button"
                                                        >
                                                            <div className={styles.eventDot} style={{ background: getAccent(), boxShadow: `0 0 10px ${getAccent()}` }} />
                                                            <div className={styles.eventName}>{card.name}</div>
                                                            <div className={styles.eventBtn} style={{ color: getAccent(), borderColor: `rgba(255,255,255,0.1)` }}>AUTHORIZE</div>
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
                </div>
            </div>

            <RegistrationModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                eventData={selectedEvent}
                accentColor={getAccent()}
            />
        </>
    );
}
