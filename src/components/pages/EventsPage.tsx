'use client';

import { forwardRef, useState } from 'react';
import { eventSections } from '@/data/events';
import EventSection from '@/components/events/EventSection';
import RegistrationModal from '@/components/events/RegistrationModal';
import { EventCardData } from '@/types';

interface EventsPageProps {
    isActive: boolean;
}

const EventsPage = forwardRef<HTMLDivElement, EventsPageProps>(
    ({ isActive }, ref) => {
        const [selectedEvent, setSelectedEvent] = useState<EventCardData | null>(null);
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [accent, setAccent] = useState('var(--pink)');

        const handleRegister = (card: EventCardData, color: string) => {
            setSelectedEvent(card);
            setAccent(color);
            setIsModalOpen(true);
        };

        return (
            <div
                className={`page${isActive ? ' active' : ''}`}
                id="page-events"
                ref={ref}
            >
                <div className="ep-title">
                    Event <span>Categories</span>
                </div>
                <div className="ep-sub">
                    Innovention 2026 · Competitions &amp; Programs
                </div>
                <div className="ep-divider" />

                {eventSections.map((section) => (
                    <EventSection 
                        key={section.id} 
                        section={section} 
                        onRegister={handleRegister}
                    />
                ))}

                <RegistrationModal 
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    eventData={selectedEvent}
                    accentColor={accent}
                />
            </div>
        );
    }
);

EventsPage.displayName = 'EventsPage';

export default EventsPage;
