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
            <div className="sp-sub">Moments from Past Technical Feats</div>
            
            <div className="gallery-grid">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="gallery-item-placeholder">
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
