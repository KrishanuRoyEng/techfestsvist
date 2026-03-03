import { SimplePageData } from '@/types';

export const simplePages: SimplePageData[] = [
    {
        id: 'about',
        title: 'About',
        titleHighlight: 'NEXUS',
        subtitle: '// Est. 2015 · XYZ Institute of Technology',
        content:
            "NEXUS is the annual technical festival of XYZ Institute of Technology. Since 2015, we've brought together over 5,000 students from 100+ colleges across Asia to compete, collaborate, and innovate. Our mission: to spark the next generation of engineers and entrepreneurs.",
    },
    {
        id: 'contact',
        title: 'Register &',
        titleHighlight: 'Contact',
        subtitle: '// NEXUS 2025',
        content:
            '📍 XYZ Institute of Technology, 123 Tech Avenue, City — 700001\n\n📧 techfest@xyzit.edu.in\n📞 +91 98765 43210\n\nRegistration opens January 15, 2025.\nAll events require a valid college ID.',
    },
    {
        id: 'sponsors',
        title: 'Our',
        titleHighlight: 'Sponsors',
        subtitle: '// Partners & Supporters',
        content:
            '<strong style="color:var(--cyan)">Title Sponsor</strong><br/>MarshMcLennan<br/><br/><strong style="color:white">Platinum</strong><br/>TechCorp · InnovateLabs · ByteForge<br/><br/><strong style="color:white">Gold</strong><br/>NeuralEdge · CloudPeak · DataSynth<br/><br/>Interested? Contact sponsors@xyzit.edu.in',
    },
    {
        id: 'store',
        title: 'NEXUS',
        titleHighlight: 'Store',
        subtitle: '// Official Merchandise',
        content:
            'Official NEXUS 2025 merch — t-shirts, hoodies, bags, and limited edition collectibles. Pre-order now and pick up on event day.\n\nAll proceeds support the fest operations and prize pool.',
    },
    {
        id: 'accommodation',
        title: '',
        titleHighlight: 'Accommodation',
        subtitle: '// On-Campus Stay',
        content:
            "On-campus accommodation at XYZ Institute's hostels.\n\nCapacity: 500 beds · First-come first-served\nCost: ₹300/night · Includes meals\n\nBook via the registration portal before February 28.",
    },
    {
        id: 'workshops',
        title: 'Work',
        titleHighlight: 'shops',
        subtitle: '// Hands-On Learning Sessions',
        content:
            '10+ workshops across 3 days:\n\nML with PyTorch · PCB Design · Unity Game Dev · 3D Printing & CAD · Cybersecurity CTF · Full-Stack Web Dev · VLSI Design · Drone Assembly\n\nEach: 3 hrs · ₹200 · Certificate included',
    },
];
