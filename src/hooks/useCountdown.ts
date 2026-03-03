'use client';

import { useState, useEffect, useCallback } from 'react';

interface CountdownValues {
    days: string;
    hours: string;
    mins: string;
    secs: string;
}

export function useCountdown(targetDate: string): CountdownValues {
    const calculate = useCallback((): CountdownValues => {
        const diff = Math.max(0, new Date(targetDate).getTime() - Date.now());
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        return {
            days: String(d).padStart(2, '0'),
            hours: String(h).padStart(2, '0'),
            mins: String(m).padStart(2, '0'),
            secs: String(s).padStart(2, '0'),
        };
    }, [targetDate]);

    const [values, setValues] = useState<CountdownValues>(calculate);

    useEffect(() => {
        const interval = setInterval(() => {
            setValues(calculate());
        }, 1000);
        return () => clearInterval(interval);
    }, [calculate]);

    return values;
}
