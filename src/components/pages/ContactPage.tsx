import React from 'react';

interface ContactPageProps {
    isActive: boolean;
}

export default function ContactPage({ isActive }: ContactPageProps) {
    return (
        <div id="page-contact" className={`page simple-page contact-layout ${isActive ? 'active' : ''}`}>
            {/* Left side: Maps embedded */}
            <div className="map-container">
                <div style={{
                    padding: '8px 12px',
                    fontFamily: "'Orbitron', monospace",
                    textTransform: 'uppercase',
                    fontSize: '0.6rem',
                    letterSpacing: '3px',
                    color: 'var(--cyan)',
                    borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <span style={{ width: '8px', height: '8px', background: 'var(--pink)', borderRadius: '50%', boxShadow: '0 0 8px var(--pink)' }}></span>
                    Location Terminal
                </div>
                <iframe 
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                        <div style={{ fontSize: '2rem' }}>📍</div>
                        <div>
                            <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '0.65rem', color: 'var(--cyan)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Headquarters</div>
                            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4 }}>
                                Swami Vivekananda Institute of Science<br/>and Technology<br/>
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Dakshin Gobindapur, Kolkata, West Bengal 700145</span>
                            </div>
                            <a href="https://maps.app.goo.gl/UN8sDt1qacDssai59" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '0.5rem', color: 'rgba(255,45,155,0.8)', textDecoration: 'none', borderBottom: '1px solid currentColor', fontSize: '0.8rem', fontFamily: "'Rajdhani', sans-serif", letterSpacing: '1px' }}>Open in Google Maps ↗</a>
                        </div>
                    </div>

                    {/* Email Block */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                        <div style={{ fontSize: '2rem' }}>✉️</div>
                        <div>
                            <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '0.65rem', color: 'var(--cyan)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Official Mailbox</div>
                            <a href="mailto:svist.innovention2026@gmail.com" style={{ display: 'block', fontFamily: "'Rajdhani', sans-serif", fontSize: '1.3rem', color: 'white', textDecoration: 'none', transition: 'color 0.2s' }}>
                                svist.innovention2026@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Phone Block */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                        <div style={{ fontSize: '2rem' }}>📞</div>
                        <div>
                            <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '0.65rem', color: 'var(--cyan)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Direct Line</div>
                            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '1.4rem', color: 'white', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                <a href="tel:+919163491215" style={{ color: 'white', textDecoration: 'none' }}>+91 9163491215</a>
                                <a href="tel:+919674532386" style={{ color: 'white', textDecoration: 'none' }}>+91 9674532386</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
