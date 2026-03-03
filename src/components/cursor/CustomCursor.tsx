'use client';

import { useCustomCursor } from '@/hooks/useCustomCursor';

export default function CustomCursor() {
    const { curRef, cur2Ref } = useCustomCursor();

    return (
        <>
            <div id="cur" ref={curRef} />
            <div id="cur2" ref={cur2Ref} />
        </>
    );
}
