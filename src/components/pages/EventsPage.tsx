'use client';

import { forwardRef, useState } from 'react';
import { eventSections } from '@/data/events';
import EventSection from '@/components/events/EventSection';
import RegistrationModal from '@/components/events/RegistrationModal';
import RulesModal from '@/components/events/RulesModal';
import { EventCardData } from '@/types';
import styles from './EventsPage.module.css';

interface EventsPageProps {
    isActive: boolean;
}

const EventsPage = forwardRef<HTMLDivElement, EventsPageProps>(
    ({ isActive }, ref) => {
        const [selectedEvent, setSelectedEvent] = useState<EventCardData | null>(null);
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [accent, setAccent] = useState('var(--pink)');

        const [isRulesOpen, setIsRulesOpen] = useState(false);
        const [rulesEvent, setRulesEvent] = useState<EventCardData | null>(null);

        const handleRegister = (card: EventCardData, color: string) => {
            setSelectedEvent(card);
            setAccent(color);
            setIsModalOpen(true);
        };

        const handleRulesClick = (card: EventCardData) => {
            setRulesEvent(card);
            setIsRulesOpen(true);
        };

        if (!isActive) return null;

        return (
            <>
                <div
                    className={`page active ${styles.page} animate-in`}
                    id="page-events"
                    ref={ref}
                >
                    <div className={styles.title}>
                        Event <span>Categories</span>
                    </div>
                    <div className={styles.sub}>
                        Innovention 2026 · Competitions &amp; Programs
                    </div>
                    <div className={styles.divider} />

                    {eventSections.map((section) => (
                        <EventSection 
                            key={section.id} 
                            section={section} 
                            onRegister={handleRegister}
                            onRulesClick={handleRulesClick}
                        />
                    ))}
                </div>

                {/* Modals are kept outside the scrollable container to ensure correct positioning */}
                <RegistrationModal 
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    eventData={selectedEvent}
                    accentColor={accent}
                />
                <RulesModal
                    isOpen={isRulesOpen}
                    onClose={() => setIsRulesOpen(false)}
                    eventData={rulesEvent}
                />
            </>
        );
    }
);

EventsPage.displayName = 'EventsPage';

export default EventsPage;
