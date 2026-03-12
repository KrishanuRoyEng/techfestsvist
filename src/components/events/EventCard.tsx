'use client';
import React, { memo } from 'react';
import { EventCardData } from '@/types';
import styles from './EventCard.module.css';

interface EventCardProps {
    card: EventCardData;
    onRegister?: (card: EventCardData) => void;
    onRulesClick?: (card: EventCardData) => void;
}

// Optimization: memo prevents the card from re-rendering unless its specific data changes.
// This is critical when parent state (like section expand/collapse) changes frequently.
const EventCard = memo(function EventCard({ card, onRegister, onRulesClick }: EventCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.category}>{card.category}</div>
            <div className={styles.name}>{card.name}</div>
            <div className={styles.desc}>{card.description}</div>
            <div className={styles.meta}>
                <button
                    className={`${styles.badge} ${styles.rulesTrigger}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        onRulesClick?.(card);
                    }}
                >
                    Rules
                </button>
                
                {card.badges
                    .filter((badge) => badge.isPrize)
                    .map((badge, i) => (
                        <button
                            key={`prize-${i}`}
                            className={`${styles.badge} ${styles.prize}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                onRegister?.(card);
                            }}
                        >
                            {badge.label}
                        </button>
                    ))}
            </div>
            <div className={styles.numBg}>{card.number}</div>
        </div>
    );
});

export default EventCard;
