'use client';

import React, { useState, useMemo, useCallback, useEffect, memo } from 'react';
import Image from 'next/image';
import { galleryImages, GalleryImage } from '@/data/gallery';

interface GalleryPageProps {
  isActive: boolean;
}

// Priority order for categories
const CATEGORY_ORDER: Record<string, number> = {
  'General': 0,
  'Texhibition': 1,
};

function sortCategories(a: string, b: string): number {
  const oa = CATEGORY_ORDER[a] ?? 99;
  const ob = CATEGORY_ORDER[b] ?? 99;
  if (oa !== ob) return oa - ob;
  return a.localeCompare(b);
}

// ── Lightbox ───────────────────────────────────────────────────────────
function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryImage;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  // Close on Escape / arrow keys
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="gallery-lightbox-overlay" onClick={onClose}>

      {/* Close */}
      <button
        className="gallery-lb-btn gallery-lb-close"
        onClick={onClose}
        aria-label="Close"
      >✕</button>

      {/* Prev */}
      <button
        className="gallery-lb-btn gallery-lb-prev"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >‹</button>

      {/* Media card */}
      <div className="gallery-lb-card" onClick={(e) => e.stopPropagation()}>
        <div className="gallery-lb-media-wrap">
          {item.type === 'video' ? (
            <video src={item.url} controls autoPlay style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          ) : (
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image 
                src={item.url} 
                alt={item.caption} 
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          )}
        </div>
        <div className="gallery-lb-caption">
          <span className="gallery-lb-cap-title">{item.caption}</span>
          <span className="gallery-lb-cap-tag">{item.category}</span>
        </div>
      </div>

      {/* Next */}
      <button
        className="gallery-lb-btn gallery-lb-next"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >›</button>
    </div>
  );
}

// Optimization: Memoized MediaCard to prevent re-renders unless the item specifically changes.
const MediaCard = memo(function MediaCard({ item, onClick }: { item: GalleryImage; onClick: () => void }) {
  return (
    <div
      className="gallery-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={item.caption}
    >
      {item.type === 'video' ? (
        <div style={{ position: 'relative', width: '100%', paddingTop: '75%' }}>
          <video src={item.url} muted playsInline className="gallery-card-media" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
          <div className="gallery-video-badge">▶</div>
        </div>
      ) : (
        <div style={{ position: 'relative', width: '100%', height: 'auto', minHeight: '150px' }}>
             {/* We use fill + a responsive height container for masonry, 
                 but Next.js Image also supports aspect ratio. 
                 Since URL is external, filling the parent card is safest. */}
             <Image 
                src={item.url} 
                alt={item.caption} 
                className="gallery-card-media"
                width={400} // Placeholder width for better layout calc
                height={300} // Placeholder height for better layout calc
                loading="lazy"
                sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
                style={{ width: '100%', height: 'auto', display: 'block' }}
             />
        </div>
      )}
      <div className="gallery-card-overlay">
        <p className="gallery-card-caption">{item.caption}</p>
      </div>
    </div>
  );
});

// ── Main Page ──────────────────────────────────────────────────────────
export default function GalleryPage({ isActive }: GalleryPageProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter pill options — General first, Texhibition second, rest alpha
  const categories = useMemo<string[]>(() => {
    const cats = Array.from(
      new Set(galleryImages.map((img) => img.category).filter(Boolean))
    ) as string[];
    return ['All', ...cats.sort(sortCategories)];
  }, []);

  // Flat list for lightbox navigation
  const filteredFlat = useMemo(
    () => activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  // Grouped + sorted for rendering
  const groupedImages = useMemo(() => {
    if (activeCategory !== 'All') {
      return { [activeCategory]: filteredFlat };
    }
    const allCats = Array.from(
      new Set(galleryImages.map((img) => img.category || 'Other'))
    ).sort(sortCategories);

    const groups: Record<string, GalleryImage[]> = {};
    allCats.forEach((cat) => {
      groups[cat] = galleryImages.filter((img) => (img.category || 'Other') === cat);
    });
    return groups;
  }, [activeCategory, filteredFlat]);

  // Separate large (>3 images) and small (≤3 images) categories
  const { largeGroups, smallGroups } = useMemo(() => {
    const entries = Object.entries(groupedImages);
    const large: typeof entries = [];
    const small: typeof entries = [];
    entries.forEach(([cat, imgs]) => {
      if (activeCategory !== 'All' || imgs.length > 3) large.push([cat, imgs]);
      else small.push([cat, imgs]);
    });
    return { largeGroups: large, smallGroups: small };
  }, [groupedImages, activeCategory]);

  const openLightbox = useCallback((item: GalleryImage) => {
    const idx = filteredFlat.findIndex((i) => i.id === item.id);
    setLightboxIndex(idx);
  }, [filteredFlat]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevItem = useCallback(() => {
    setLightboxIndex((i) => i === null ? null : (i - 1 + filteredFlat.length) % filteredFlat.length);
  }, [filteredFlat.length]);
  const nextItem = useCallback(() => {
    setLightboxIndex((i) => i === null ? null : (i + 1) % filteredFlat.length);
  }, [filteredFlat.length]);

  if (!isActive) return null;

  const lightboxItem = lightboxIndex !== null ? filteredFlat[lightboxIndex] : null;

  return (
    <>
      {lightboxItem && (
        <Lightbox item={lightboxItem} onClose={closeLightbox} onPrev={prevItem} onNext={nextItem} />
      )}

      <div
        id="page-gallery"
        className="page active"
        style={{ flexDirection: 'column', alignItems: 'stretch', overflow: 'hidden', pointerEvents: 'all' }}
      >
        {/* Header */}
        <div className="gallery-page-header">
          <h1 className="sp-title" style={{ marginBottom: '0.3rem' }}>
            Event <span>Gallery</span>
          </h1>
          <div className="sp-sub" style={{ marginBottom: '1rem' }}>Techfest 2025 · Captured Moments</div>

          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setLightboxIndex(null); }}
                className={`gallery-filter-pill${activeCategory === cat ? ' active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable body */}
        <div className="gallery-scroll-body gallery-scrollbar">
          <div className="gallery-body-inner">

            {/* ── Large categories: full-width masonry ── */}
            {largeGroups.map(([category, images]) => (
              <div key={category} className="gallery-category-block">
                {activeCategory === 'All' && (
                  <div className="gallery-section-header">
                    <span className="gallery-section-label">{category}</span>
                    <span className="gallery-section-count">{images.length}</span>
                    <div className="gallery-section-line" />
                  </div>
                )}
                <div className="gallery-masonry">
                  {images.map((item) => (
                    <MediaCard key={item.id} item={item} onClick={() => openLightbox(item)} />
                  ))}
                </div>
              </div>
            ))}

            {/* ── Small categories: compact side-by-side grid ── */}
            {smallGroups.length > 0 && (
              <div className="gallery-small-grid">
                {smallGroups.map(([category, images]) => (
                  <div key={category} className="gallery-small-block">
                    <div className="gallery-section-header" style={{ marginBottom: '0.5rem' }}>
                      <span className="gallery-section-label">{category}</span>
                      <span className="gallery-section-count">{images.length}</span>
                      <div className="gallery-section-line" />
                    </div>
                    <div className="gallery-small-cards">
                      {images.map((item) => (
                        <MediaCard key={item.id} item={item} onClick={() => openLightbox(item)} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <p className="gallery-footer-note">
              ✦ &nbsp;2026 highlights will be added live during the festival
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
