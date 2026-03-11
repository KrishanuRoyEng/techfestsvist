import React from 'react';

interface ContactPageProps {
    isActive: boolean;
}

export default function ContactPage({ isActive }: ContactPageProps) {
    return (
        <div id="page-contact" className={`page simple-page contact-layout ${isActive ? 'active' : ''}`}>
            {/* Left side: Maps embedded */}
            <div className="map-container">
                <div className="contact-header-terminal">
                    <span className="terminal-dot"></span>
                    Location Terminal
                </div>
                <iframe 
                    title="Google Maps Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.2344467994717!2d88.41488319999999!3d22.3858872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026db23b16e15b%3A0xaab4afa96faa99b6!2sSwami%20Vivekananda%20Institute%20of%20Science%20%26%20Technology!5e1!3m2!1sen!2sin!4v1773222183274!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%) brightness(80%)', opacity: 0.85 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            {/* Right side: Information Details */}
            <div className="contact-details">
                <h1 className="sp-title" style={{ marginTop: 0 }}>
                    Get In <span>Touch</span>
                </h1>
                <div className="sp-sub" style={{ alignSelf: 'flex-start', marginBottom: '2.5rem' }}>// Ping our comms network</div>

                <div className="contact-blocks">
                    
                    {/* Address Block */}
                    <div className="contact-info-block">
                        <div className="contact-icon-wrap">📍</div>
                        <div>
                            <div className="contact-label-tag">Headquarters</div>
                            <div className="contact-value-text">
                                Swami Vivekananda Institute of Science<br/>and Technology<br/>
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Dakshin Gobindapur, Kolkata, West Bengal 700145</span>
                            </div>
                            <a href="https://maps.app.goo.gl/UN8sDt1qacDssai59" target="_blank" rel="noreferrer" className="contact-link-external">
                                Open in Google Maps ↗
                            </a>
                        </div>
                    </div>

                    {/* Email Block */}
                    <div className="contact-info-block">
                        <div className="contact-icon-wrap">✉️</div>
                        <div>
                            <div className="contact-label-tag">Official Mailbox</div>
                            <div className="contact-value-text">
                                <a href="mailto:svist.innovention2026@gmail.com" style={{ fontSize: '1.3rem' }}>
                                    svist.innovention2026@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Phone Block */}
                    <div className="contact-info-block">
                        <div className="contact-icon-wrap">📞</div>
                        <div>
                            <div className="contact-label-tag">Direct Line</div>
                            <div className="contact-value-text" style={{ fontSize: '1.4rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                <a href="tel:+919163491215">+91 9163491215</a>
                                <a href="tel:+919674532386">+91 9674532386</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
