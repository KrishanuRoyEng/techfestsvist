'use client';

import { useCountdown } from '@/hooks/useCountdown';

const TARGET_DATE = '2026-04-01T09:00:00';

export default function Countdown() {
    const { days, hours, mins, secs } = useCountdown(TARGET_DATE);

    return (
        <div className="countdown">
            <span className="cd-prefix">Fest begins in</span>
            <div className="cd-block">
                <span className="cd-num" id="cd-d">{days}</span>
                <span className="cd-label">Days</span>
            </div>
            <span className="cd-sep">:</span>
            <div className="cd-block">
                <span className="cd-num" id="cd-h">{hours}</span>
                <span className="cd-label">Hours</span>
            </div>
            <span className="cd-sep">:</span>
            <div className="cd-block">
                <span className="cd-num" id="cd-m">{mins}</span>
                <span className="cd-label">Mins</span>
            </div>
            <span className="cd-sep">:</span>
            <div className="cd-block">
                <span className="cd-num" id="cd-s">{secs}</span>
                <span className="cd-label">Secs</span>
            </div>
        </div>
    );
}
