import React from 'react';
import { EventCardData } from '@/types';

interface EventCardProps {
    card: EventCardData;
    onRegister?: (card: EventCardData) => void;
    onRulesClick?: (card: EventCardData) => void;
}

export default function EventCard({ card, onRegister, onRulesClick }: EventCardProps) {
    return (
        <div className="ev-card">
            <div className="ec-cat">{card.category}</div>
            <div className="ec-name">{card.name}</div>
            <div className="ec-desc">{card.description}</div>
            <div className="ec-meta">
                <span
                    className="ec-badge rules-trigger"
                    onClick={(e) => {
                        e.stopPropagation();
                        onRulesClick?.(card);
                    }}
                >
                    Rules
                </span>
                
                {card.badges
                    .filter((badge) => badge.isPrize)
                    .map((badge, i) => (
                        <span
                            key={`prize-${i}`}
                            className="ec-badge prize"
                            onClick={(e) => {
                                e.stopPropagation();
                                onRegister?.(card);
                            }}
                        >
                            {badge.label}
                        </span>
                    ))}
            </div>
            <div className="ec-num-bg">{card.number}</div>
        </div>
    );
}
