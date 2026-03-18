import React from 'react';
import Image from 'next/image';
import styles from './PaymentPage.module.css';

interface PaymentPageProps {
    isActive: boolean;
}

export default function PaymentPage({ isActive }: PaymentPageProps) {
    if (!isActive) return null;

    return (
        <div id="page-payment" className={`page ${styles.page} active`}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className="sp-title">External <span>Payment</span></h1>
                    <p className="sp-sub">Secure your registration via authorized channels</p>
                </header>

                <div className={styles.content}>
                    <div className={styles.qrSection}>
                        <div className={styles.qrCard}>
                            <h2 className={styles.sectionTitle}>Payment Portal</h2>
                            <p className={styles.portalDesc}>Scan or download the QR code below to proceed with the payment of <span className={styles.highlightPrice}>₹99</span>.</p>

                            <div className={styles.qrWrapper}>
                                <div className={styles.qrCorner + ' ' + styles.tl} />
                                <div className={styles.qrCorner + ' ' + styles.tr} />
                                <div className={styles.qrCorner + ' ' + styles.bl} />
                                <div className={styles.qrCorner + ' ' + styles.br} />

                                <div className={styles.qrImageContainer}>
                                    <Image
                                        src="/SVIST_QR.webp"
                                        alt="Payment QR Code"
                                        width={400}
                                        height={400}
                                        className={styles.qrImage}
                                        priority
                                    />
                                    <div className={styles.qrScannerLine} />
                                </div>
                            </div>

                            <a
                                href="/SVIST_QR.webp"
                                download="SVIST_Payment_QR.webp"
                                className={styles.downloadBtn}
                            >
                                <span className={styles.btnIcon}>📥</span>
                                Download QR Code
                            </a>
                        </div>
                    </div>

                    <div className={styles.guidelines}>
                        <h2 className={styles.sectionTitle}>Mandatory Requirements</h2>
                        <ul className={styles.guideLinesList}>
                            <li className={styles.guideLineItem}>
                                <div className={styles.guideIcon}>🪪</div>
                                <div className={styles.guideText}>
                                    <strong>College ID</strong>
                                    <p>Carry your original college Identity Card.</p>
                                </div>
                            </li>
                            <li className={styles.guideLineItem}>
                                <div className={styles.guideIcon}>🎫</div>
                                <div className={styles.guideText}>
                                    <strong>Govt ID</strong>
                                    <p>Carry Aadhar or PAN for verification.</p>
                                </div>
                            </li>
                            <li className={styles.guideLineItem}>
                                <div className={styles.guideIcon}>🧾</div>
                                <div className={styles.guideText}>
                                    <strong>Receipt</strong>
                                    <p>Carry a copy of the payment receipt.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
