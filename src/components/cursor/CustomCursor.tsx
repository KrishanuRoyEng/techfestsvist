'use client';

import { useCustomCursor } from '@/hooks/useCustomCursor';

export default function CustomCursor() {
    const { curRef, cur2Ref } = useCustomCursor();

    return (
        <>
            <div id="cur" ref={curRef}>
                <div className="cur-point" />
            </div>
            <div id="cur2" ref={cur2Ref}>
                <div className="cur-bracket cb-tl" />
                <div className="cur-bracket cb-tr" />
                <div className="cur-bracket cb-bl" />
                <div className="cur-bracket cb-br" />
            </div>
        </>
    );
}
