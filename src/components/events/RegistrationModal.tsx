'use client';

import React from 'react';
import { EventCardData } from '@/types';

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
    eventData: EventCardData | null;
    accentColor?: string;
}

export default function RegistrationModal({ isOpen, onClose, eventData, accentColor }: RegistrationModalProps) {
    if (!isOpen || !eventData) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div 
                className="modal-content" 
                onClick={(e) => e.stopPropagation()}
                style={{ '--accent': accentColor } as React.CSSProperties}
            >
                <div className="modal-header">
                    <h2 className="modal-title">{eventData.name}</h2>
                    <button className="modal-close-btn" onClick={onClose}>
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div className="modal-body">
                    <p className="modal-event-desc">
                        {eventData.description}
                    </p>
                    
                    <div className="modal-qr-section">
                        <div className="modal-qr-placeholder">
                            {eventData.qrCode ? (
                                <img src={eventData.qrCode} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            ) : (
                                <span>QR CODE<br/>PENDING</span>
                            )}
                        </div>
                        <div className="qr-hint">Scan to register directly</div>
                    </div>
                </div>

                <div className="modal-footer">
                    <a 
                        href={eventData.regLink || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-modal-reg"
                    >
                        Click to Register
                    </a>
                </div>
            </div>
        </div>
    );
}
