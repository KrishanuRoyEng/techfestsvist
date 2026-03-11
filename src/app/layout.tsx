import type { Metadata } from 'next';
import { Orbitron, Rajdhani, Black_Ops_One } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-orbitron',
  display: 'swap',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
});

const blackOpsOne = Black_Ops_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-black-ops',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Innovention — Tech Fest',
  description:
    "Asia's Largest Science & Technology Festival — Innovention 2026 at Swami Vivekananda Institute of Science and Technology. April 1–2, 2026.",
  keywords: [
    'SVIST',
    'Swami Vivekananda Institute of Science and Technology',
    'Tech Fest',
    'Science Festival',
    'Technology Festival',
    'College Fest',
    'Hackathon',
    'Robowars',
    'Drone Racing',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable} ${blackOpsOne.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
