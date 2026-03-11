import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

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
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&family=Black+Ops+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
