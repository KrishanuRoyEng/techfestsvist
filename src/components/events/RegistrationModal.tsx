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
                    <button className="modal-close" onClick={onClose}>&times;</button>
                </div>
                
                <div className="modal-body">
                    <p className="modal-event-desc">
                        {eventData.description}
                    </p>
                    
                    <div className="modal-qr-section">
                        <div className="modal-qr-placeholder">
                            {eventData.qrCode ? (
                                <img src={eventData.qrCode} alt="QR Code" style={{ width: '100%', height: '100%' }} />
                            ) : (
                                <span>QR CODE<br/>PENDING</span>
                            )}
                        </div>
                        <div style={{ marginTop: '1rem', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-orbitron)' }}>
                            Scan to register directly
                        </div>
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
