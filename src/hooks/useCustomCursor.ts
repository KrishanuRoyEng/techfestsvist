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

        const handleMouseEnter = () => {
            if (curRef.current) curRef.current.classList.add('hovering');
            if (cur2Ref.current) cur2Ref.current.classList.add('hovering');
        };
        const handleMouseLeave = () => {
            if (curRef.current) curRef.current.classList.remove('hovering');
            if (cur2Ref.current) cur2Ref.current.classList.remove('hovering');
        };

        const addListeners = () => {
            const clickables = document.querySelectorAll('a, button, .clickable');
            clickables.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
        };

        const removeListeners = () => {
            const clickables = document.querySelectorAll('a, button, .clickable');
            clickables.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };

        const loop = () => {
            tx += (mx - tx) * 0.2;
            ty += (my - ty) * 0.2;
            if (cur2Ref.current) {
                cur2Ref.current.style.left = tx + 'px';
                cur2Ref.current.style.top = ty + 'px';
            }
            animId = requestAnimationFrame(loop);
        };

        document.addEventListener('mousemove', handleMouseMove);
        addListeners();
        animId = requestAnimationFrame(loop);

        // Re-calculate on DOM changes to catch new elements (e.g. navigation)
        const observer = new MutationObserver(() => {
            removeListeners();
            addListeners();
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            removeListeners();
            observer.disconnect();
            cancelAnimationFrame(animId);
        };
    }, []);

    return { curRef, cur2Ref };
}
