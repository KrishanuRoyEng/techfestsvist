import React from 'react';

interface RegistrationPageProps {
    isActive: boolean;
}

export default function RegistrationPage({ isActive }: RegistrationPageProps) {
    return (
        <div id="page-registration" className={`page simple-page ${isActive ? 'active' : ''}`}>
            <h1 className="sp-title">
                Get <span>Registered</span>
            </h1>
            <div className="sp-sub">// Secure your entry code</div>
            
            <div className="registration-container" style={{
                background: 'rgba(4, 2, 15, 0.7)',
                border: '1px solid rgba(255, 45, 155, 0.3)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                marginTop: '1rem',
                boxShadow: '0 0 30px rgba(255, 45, 155, 0.1)',
                backdropFilter: 'blur(10px)'
            }}>
                <p className="sp-content" style={{ margin: 0, paddingBottom: '1rem', borderBottom: '1px solid rgba(255,45,155,0.2)' }}>
                    Scan the QR completely or click it to enter the portal
                </p>

                {/* QR Code Placeholder Wrapper */}
                <div className="qr-box" style={{
                    width: '180px',
                    height: '180px',
                    background: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'qr\' width=\'10\' height=\'10\' patternUnits=\'userSpaceOnUse\'%3E%3Crect width=\'5\' height=\'5\' fill=\'rgba(0,240,255,0.5)\'/%3E%3Crect x=\'5\' y=\'5\' width=\'5\' height=\'5\' fill=\'rgba(0,240,255,0.5)\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23qr)\'/%3E%3C/svg%3E")',
                    border: '2px solid var(--cyan)',
                    padding: '10px',
                    position: 'relative',
                    cursor: 'pointer',
                    boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)'
                }}>
                    <div style={{
                        position: 'absolute',
                        inset: '10px',
                        background: 'rgba(4, 2, 15, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--cyan)',
                        fontFamily: "'Orbitron', monospace",
                        fontSize: '0.65rem',
                        letterSpacing: '2px',
                        textAlign: 'center'
                    }}>
                        [ QR CODE <br/> PLACEHOLDER ]
                    </div>
                </div>

                <a href="#" className="btn btn-pink" style={{ marginTop: '0.5rem' }}>Open Registration Portal</a>
            </div>
        </div>
    );
}
