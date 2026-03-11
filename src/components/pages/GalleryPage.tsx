import React from 'react';

interface GalleryPageProps {
    isActive: boolean;
}

export default function GalleryPage({ isActive }: GalleryPageProps) {
    return (
        <div id="page-gallery" className={`page simple-page ${isActive ? 'active' : ''}`}>
            <h1 className="sp-title">
                Event <span>Gallery</span>
            </h1>
            <div className="sp-sub">// Moments from Past Technical Feats</div>
            
            <div className="gallery-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '1rem',
                width: '80%',
                maxHeight: '50vh',
                overflowY: 'auto',
                marginTop: '1rem',
                padding: '1rem'
            }}>
                {/* Placeholders for dynamic content */}
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="gallery-item-placeholder" style={{
                        aspectRatio: '4/3',
                        background: 'rgba(0, 240, 255, 0.05)',
                        border: '1px solid rgba(0, 240, 255, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255, 255, 255, 0.2)',
                        fontFamily: "'Orbitron', monospace",
                        textTransform: 'uppercase',
                        fontSize: '0.6rem',
                        letterSpacing: '2px',
                        boxShadow: 'inset 0 0 20px rgba(0, 240, 255, 0.05)'
                    }}>
                        Image Slot {i + 1}
                    </div>
                ))}
            </div>
            
            <p className="sp-content" style={{ marginTop: '2rem' }}>
                Relive the most exciting tech moments. Uploads for 2026 will appear here live during the festival!
            </p>
        </div>
    );
}
