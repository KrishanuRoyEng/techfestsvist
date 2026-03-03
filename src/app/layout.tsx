import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEXUS — Tech Fest',
  description:
    "Asia's Largest Science & Technology Festival — NEXUS 2025 at XYZ Institute of Technology. March 14–16, 2025.",
  keywords: [
    'NEXUS',
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
      <body>{children}</body>
    </html>
  );
}
