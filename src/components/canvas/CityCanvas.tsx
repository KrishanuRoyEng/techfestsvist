'use client';

import { useEffect, useRef } from 'react';
import { buildCityData, drawFrame } from '@/utils/cityscape';
import type { Star, FlyingParticle, Building, BackgroundBuilding } from '@/types';

export default function CityCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const dataRef = useRef<{
        stars: Star[];
        flyP: FlyingParticle[];
        bgBuildings: BackgroundBuilding[];
        buildings: Building[];
    } | null>(null);

    useEffect(() => {
        const cv = canvasRef.current;
        if (!cv) return;
        const cx = cv.getContext('2d');
        if (!cx) return;

        let W = (cv.width = window.innerWidth);
        let H = (cv.height = window.innerHeight);
        let t = 0;
        let animId: number;

        const rebuild = () => {
            W = cv.width = window.innerWidth;
            H = cv.height = window.innerHeight;
            dataRef.current = buildCityData(W, H);
        };

        rebuild();

        const handleResize = () => rebuild();
        window.addEventListener('resize', handleResize);

        const draw = () => {
            t += 0.016;
            if (dataRef.current) {
                drawFrame(
                    cx,
                    W,
                    H,
                    t,
                    dataRef.current.stars,
                    dataRef.current.bgBuildings,
                    dataRef.current.buildings,
                    dataRef.current.flyP
                );
            }
            animId = requestAnimationFrame(draw);
        };

        animId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animId);
        };
    }, []);

    return <canvas id="city" ref={canvasRef} />;
}
