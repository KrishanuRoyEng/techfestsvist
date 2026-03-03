'use client';

import { forwardRef } from 'react';
import { eventSections } from '@/data/events';
import EventSection from '@/components/events/EventSection';

interface EventsPageProps {
    isActive: boolean;
}

const EventsPage = forwardRef<HTMLDivElement, EventsPageProps>(
    ({ isActive }, ref) => {
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
          // NEXUS 2025 · All Competitions &amp; Programs
                </div>
                <div className="ep-divider" />

                {eventSections.map((section) => (
                    <EventSection key={section.id} section={section} />
                ))}
            </div>
        );
    }
);

EventsPage.displayName = 'EventsPage';

export default EventsPage;
