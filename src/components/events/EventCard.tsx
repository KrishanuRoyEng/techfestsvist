import { EventCardData } from '@/types';

interface EventCardProps {
    card: EventCardData;
}

export default function EventCard({ card }: EventCardProps) {
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
                    >
                        {badge.label}
                    </span>
                ))}
            </div>
            <div className="ec-num-bg">{card.number}</div>
        </div>
    );
}
