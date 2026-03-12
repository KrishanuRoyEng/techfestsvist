import React, { memo } from 'react';
import { EventCardData } from '@/types';
import styles from './Modal.module.css';

interface RulesModalProps {
    isOpen: boolean;
    onClose: () => void;
    eventData: EventCardData | null;
}

const RulesModal = memo(function RulesModal({ isOpen, onClose, eventData }: RulesModalProps) {
    if (!isOpen || !eventData) return null;

    return (
        <div className={`${styles.overlay} rules-modal-overlay`} onClick={onClose}>
            <div 
                className={`${styles.content} rules-modal-content`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.header}>
                    <h2 className={styles.title}>Event Rules</h2>
                    <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div className={styles.body}>
                    <div className={styles.rulesEventName}>{eventData.name}</div>
                    <div className={styles.rulesList}>
                        {eventData.rules && eventData.rules.length > 0 ? (
                            eventData.rules.map((rule, i) => {
                                // Simple parser to extract and format links
                                const urlMatch = rule.match(/(https?:\/\/[^\s]+)/);
                                let ruleContent: React.ReactNode = rule;
                                
                                if (urlMatch) {
                                    const url = urlMatch[1];
                                    const textBefore = rule.substring(0, urlMatch.index);
                                    const textAfter = rule.substring(urlMatch.index! + url.length);
                                    
                                    ruleContent = (
                                        <>
                                            {textBefore}
                                            <a 
                                                href={url} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className={styles.ruleLink}
                                            >
                                                View Detailed Rules
                                            </a>
                                            {textAfter}
                                        </>
                                    );
                                }

                                return (
                                    <div key={i} className={styles.ruleItem}>
                                        <span className={styles.ruleNum}>{(i + 1).toString().padStart(2, '0')}</span>
                                        <span className={styles.ruleText}>{ruleContent}</span>
                                    </div>
                                );
                            })
                        ) : (
                            <div style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-rajdhani), sans-serif' }}>
                                Rules for <strong>{eventData.name}</strong> will be updated soon. Stay tuned!
                            </div>
                        )}
                    </div>
                </div>
                
                <div className={styles.footer}>
                    <button className={styles.closeWideBtn} onClick={onClose}>ACKNOWLEDGE</button>
                </div>
            </div>
        </div>
    );
});

export default RulesModal;

