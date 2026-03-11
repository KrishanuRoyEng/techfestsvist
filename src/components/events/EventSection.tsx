import { EventSectionData } from '@/types';
import EventCard from './EventCard';

interface EventSectionProps {
    section: EventSectionData;
}

export default function EventSection({ section }: EventSectionProps) {
    return (
        <div className={`ev-section section-${section.id}`} id={`ev-${section.id}`}>
            <div className="ev-head">
                <span className="ev-num">{section.number}</span>
                <span className="ev-name">
                    {section.name} <span>{section.nameHighlight}</span>
                </span>
                <span className="ev-tag">{section.tag}</span>
            </div>
            <p className="ev-desc">{section.description}</p>
            <div className="ev-info">
                {section.info.map((info) => (
                    <div key={info.label} className="ev-info-item">
                        <strong>{info.label}</strong>
                        {info.value}
                    </div>
                ))}
            </div>
            <div className="ev-cards">
                {section.cards.map((card) => (
                    <EventCard key={card.number} card={card} />
                ))}
            </div>
        </div>
    );
}
