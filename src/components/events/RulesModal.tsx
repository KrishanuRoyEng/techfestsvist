'use client';

import React from 'react';
import { EventCardData } from '@/types';

interface RulesModalProps {
    isOpen: boolean;
    onClose: () => void;
    eventData: EventCardData | null;
}

export default function RulesModal({ isOpen, onClose, eventData }: RulesModalProps) {
    if (!isOpen || !eventData) return null;

    return (
        <div className="modal-overlay rules-modal-overlay" onClick={onClose}>
            <div 
                className="modal-content rules-modal-content" 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-header">
                    <h2 className="modal-title">Event Rules</h2>
                    <button className="modal-close-btn" onClick={onClose}>
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div className="modal-body">
                    <div className="rules-event-name">{eventData.name}</div>
                    <div className="rules-list">
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
                                                className="rule-link"
                                            >
                                                View Detailed Rules
                                            </a>
                                            {textAfter}
                                        </>
                                    );
                                }

                                return (
                                    <div key={i} className="rule-item">
                                        <span className="rule-num">{(i + 1).toString().padStart(2, '0')}</span>
                                        <span className="rule-text">{ruleContent}</span>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="rule-placeholder">
                                Rules for <strong>{eventData.name}</strong> will be updated soon. Stay tuned!
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="modal-footer">
                    <button className="btn-modal-close-wide" onClick={onClose}>ACKNOWLEDGE</button>
                </div>
            </div>
        </div>
    );
}
