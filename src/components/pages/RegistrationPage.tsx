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
            <div className="sp-sub">Secure your entry code</div>
            
            <div className="registration-container">
                <p className="sp-content" style={{ margin: 0, paddingBottom: '1rem', borderBottom: '1px solid rgba(255,45,155,0.2)' }}>
                    Scan the QR completely or click it to enter the portal
                </p>

                {/* QR Code Placeholder Wrapper */}
                <div className="qr-box">
                    <div className="qr-placeholder-text">
                        [ QR CODE <br/> PLACEHOLDER ]
                    </div>
                </div>

                <a href="#" className="btn btn-pink" style={{ marginTop: '1rem' }}>Open Registration Portal</a>
            </div>
        </div>
    );
}
