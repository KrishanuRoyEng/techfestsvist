'use client';

import { flyoutItems } from '@/data/flyoutItems';

interface EventsFlyoutProps {
    isOpen: boolean;
    onNavigateToEvent: (eventId: string) => void;
}

export default function EventsFlyout({
    isOpen,
    onNavigateToEvent,
}: EventsFlyoutProps) {
    return (
        <div className={`events-flyout${isOpen ? ' open' : ''}`} id="flyout">
            <div className="flyout-header">// Event Categories</div>
            {flyoutItems.map((item) => (
                <a
                    key={item.id}
                    className={`flyout-item${item.isHighlighted ? ' hi' : ''}`}
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        onNavigateToEvent(item.id);
                    }}
                >
                    <span className="flyout-dot" />
                    {item.label}
                </a>
            ))}
        </div>
    );
}
