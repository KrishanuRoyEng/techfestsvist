import React, { memo, useEffect } from 'react';
import Image from 'next/image';
import { EventCardData } from '@/types';
import styles from './Modal.module.css';

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
    eventData: EventCardData | null;
    accentColor?: string;
}

const RegistrationModal = memo(function RegistrationModal({ isOpen, onClose, eventData, accentColor }: RegistrationModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen || !eventData) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div 
                className={styles.content} 
                onClick={(e) => e.stopPropagation()}
                style={{ '--accent': accentColor } as React.CSSProperties}
            >
                <div className={styles.header}>
                    <h2 className={styles.title}>{eventData.name}</h2>
                    <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div className={styles.body}>
                    <p className={styles.eventDesc}>
                        {eventData.description}
                    </p>
                    
                    <div className={styles.brochureSection}>
                        <div className={styles.brochureContainer}>
                            {eventData.brochure ? (
                                <Image 
                                    src={eventData.brochure} 
                                    alt="Event Brochure" 
                                    className={styles.brochureImg} 
                                    width={400} 
                                    height={560}
                                    priority
                                    unoptimized
                                />
                            ) : (
                                <span style={{ textAlign: 'center' }}>BROCHURE<br/>PENDING</span>
                            )}
                        </div>
                        <div className={styles.brochureHint}>Brochure contains event QR</div>
                    </div>
                </div>

                <div className={styles.footer}>
                    <a 
                        href={eventData.regLink || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.submitBtn}
                    >
                        Click to Register
                    </a>
                </div>
            </div>
        </div>
    );
});

export default RegistrationModal;

