import { EventCardData } from '@/types';

interface EventCardProps {
    card: EventCardData;
    onRegister?: (card: EventCardData) => void;
}

export default function EventCard({ card, onRegister }: EventCardProps) {
    return (
        <div className="ev-card">
            <div className="ec-cat">{card.category}</div>
            <div className="ec-name">{card.name}</div>
            <div className="ec-desc">{card.description}</div>
            <div className="ec-meta">
                {card.badges.map((badge, i) => (
                    <span
                        key={i}
                        className={`ec-badge${badge.isPrize ? ' prize' : ''}`}
                        onClick={badge.isPrize ? () => onRegister?.(card) : undefined}
                    >
                        {badge.label}
                    </span>
                ))}
            </div>
            <div className="ec-num-bg">{card.number}</div>
        </div>
    );
}
