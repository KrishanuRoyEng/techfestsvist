'use client';

import { useEffect, useRef } from 'react';

export function useCustomCursor() {
    const curRef = useRef<HTMLDivElement>(null);
    const cur2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let mx = 0;
        let my = 0;
        let tx = 0;
        let ty = 0;
        let animId: number;

        const handleMouseMove = (e: MouseEvent) => {
            mx = e.clientX;
            my = e.clientY;
            if (curRef.current) {
                curRef.current.style.left = mx + 'px';
                curRef.current.style.top = my + 'px';
            }
        };

        const loop = () => {
            tx += (mx - tx) * 0.1;
            ty += (my - ty) * 0.1;
            if (cur2Ref.current) {
                cur2Ref.current.style.left = tx + 'px';
                cur2Ref.current.style.top = ty + 'px';
            }
            animId = requestAnimationFrame(loop);
        };

        document.addEventListener('mousemove', handleMouseMove);
        animId = requestAnimationFrame(loop);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animId);
        };
    }, []);

    return { curRef, cur2Ref };
}
