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

        // Optimization: Using translate3d instead of left/top for GPU acceleration.
        // This avoids layout recalculations on every frame.
        const handleMouseMove = (e: MouseEvent) => {
            mx = e.clientX;
            my = e.clientY;
            if (curRef.current) {
                curRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
            }
        };

        // Optimization: Event Delegation.
        // Instead of querying all elements and adding individual listeners (plus MutationObserver),
        // we listen once at the document level. This is much lighter for INP.
        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest?.('a, button, .clickable')) {
                curRef.current?.classList.add('hovering');
                cur2Ref.current?.classList.add('hovering');
            } else {
                curRef.current?.classList.remove('hovering');
                cur2Ref.current?.classList.remove('hovering');
            }
        };

        const loop = () => {
            // Smooth interpolation - increased speed factor from 0.25 to 0.4 for snappier follow
            tx += (mx - tx) * 0.4;
            ty += (my - ty) * 0.4;
            
            if (cur2Ref.current) {
                cur2Ref.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
            }
            animId = requestAnimationFrame(loop);
        };

        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseover', handleMouseEnter, { passive: true });
        
        animId = requestAnimationFrame(loop);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseEnter);
            cancelAnimationFrame(animId);
        };
    }, []);

    return { curRef, cur2Ref };
}

