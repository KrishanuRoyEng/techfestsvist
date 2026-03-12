export interface GalleryImage {
    id: string;
    url: string;
    caption: string;
    category?: string;
    type?: 'image' | 'video';
}

export const galleryImages: GalleryImage[] = [
    // --- General Pics (Techfest 2025) ---
    {
        id: 'gen-1',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-05-15%20at%201.07.03%20PM.jpeg',
        caption: 'Techfest 2025 Highlights',
        category: 'General',
        type: 'image'
    },
    {
        id: 'gen-2',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-05-15%20at%201.07.02%20PM.jpeg',
        caption: 'Techfest 2025 Atmosphere',
        category: 'General',
        type: 'image'
    },
    {
        id: 'gen-3',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-05-15%20at%201.07.04%20PM%20%281%29.jpeg',
        caption: 'Lamp Lighting',
        category: 'General',
        type: 'image'
    },
    {
        id: 'gen-4',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-05-15%20at%206.27.43%20PM.jpeg',
        caption: 'Techfest 2025 Evening',
        category: 'General',
        type: 'image'
    },

    {
        id: 'gen-6',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-15%20at%206.33.11%20PM.jpeg',
        caption: 'Techfest 2025 Crowd',
        category: 'General',
        type: 'image'
    },
    {
        id: 'gen-7',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-15%20at%206.45.31%20PM.jpeg',
        caption: 'Volunteers',
        category: 'General',
        type: 'image'
    },
    {
        id: 'gen-8',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-15%20at%207.00.08%20PM%20%281%29.jpeg',
        caption: 'Techfest 2025 Crowd',
        category: 'General',
        type: 'image'
    },

    // --- Winners Pics ---

    {
        id: 'win-1',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-15%20at%207.17.48%20PM%20%281%29.jpeg',
        caption: 'Winners of various events',
        category: 'Winners',
        type: 'image'
    },
    {
        id: 'win-2',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-15%20at%207.17.50%20PM%20%284%29.jpeg',
        caption: 'Winners of various events',
        category: 'Winners',
        type: 'image'
    },
    {
        id: 'win-3',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-15%20at%207.17.52%20PM%20%282%29%20%281%29.jpeg',
        caption: 'Winners of various events',
        category: 'Winners',
        type: 'image'
    },
    {
        id: 'win-4',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-15%20at%207.17.53%20PM%20%282%29.jpeg',
        caption: 'Winners of various events',
        category: 'Winners',
        type: 'image'
    },
    {
        id: 'win-5',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-15%20at%207.17.54%20PM%20%283%29.jpeg',
        caption: 'Winners of various events',
        category: 'Winners',
        type: 'image'
    },
    {
        id: 'win-6',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-15%20at%207.17.57%20PM.jpeg',
        caption: 'Winners of various events',
        category: 'Winners',
        type: 'image'
    },
    {
        id: 'win-7',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-05-15%20at%207.13.36%20PM%20%281%29.jpeg',
        caption: 'Winners of various events',
        category: 'Winners',
        type: 'image'
    },


    // --- Event Pics ---
    {
        id: 'createx-1',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-05-14%20at%206.20.26%20PM%20%282%29.jpeg',
        caption: 'Createx Photography Exhibition',
        category: 'Createx: Photography',
        type: 'image'
    },
    {
        id: 'tshirt-1',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-05-14%20at%206.23.48%20PM.jpeg',
        caption: 'T-Shirt Painting Designs',
        category: 'T-Shirt painting',
        type: 'image'
    },
    {
        id: 'tshirt-2',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Video%202025-05-14%20at%202.13.20%20PM%20%281%29%20%281%29.mp4',
        caption: 'T-Shirt Painting in Action',
        category: 'T-Shirt painting',
        type: 'video'
    },
    {
        id: 'eng-1',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-05-15%20at%201.56.03%20PM%20%281%29%20%281%29.jpeg',
        caption: 'Mr/Ms Engineer Participants',
        category: 'Mr/Ms Engineer',
        type: 'image'
    },
    {
        id: 'eng-2',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-05-15%20at%201.56.04%20PM.jpeg',
        caption: 'Mr/Ms Engineer Stage',
        category: 'Mr/Ms Engineer',
        type: 'image'
    },
    {
        id: 'eng-3',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-15%20at%201.45.09%20PM.jpeg',
        caption: 'Mr/Ms Engineer Stage',
        category: 'Mr/Ms Engineer',
        type: 'image'
    },
    {
        id: 'eng-4',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-15%20at%201.57.05%20PM.jpeg',
        caption: 'Mr/Ms Engineer Stage',
        category: 'Mr/Ms Engineer',
        type: 'image'
    },

    {
        id: 'robo-1',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-05-12%20at%2011.30.26%20PM%20%281%29.jpeg',
        caption: 'Robotics Competition',
        category: 'Robotics',
        type: 'image'
    },
    {
        id: 'craft-1',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-05-12%20at%203.48.25%20PM.jpeg',
        caption: 'Craftomania Display',
        category: 'Craftomania',
        type: 'image'
    },
    {
        id: 'tex-1',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-06-03%20at%203.51.30%20PM.jpeg',
        caption: 'Texhibition Showcase 1',
        category: 'Texhibition',
        type: 'image'
    },
    {
        id: 'tex-2',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-06-03%20at%203.51.32%20PM.jpeg',
        caption: 'Texhibition Showcase 2',
        category: 'Texhibition',
        type: 'image'
    },
    {
        id: 'tex-3',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-06-03%20at%203.51.34%20PM.jpeg',
        caption: 'Texhibition Showcase 3',
        category: 'Texhibition',
        type: 'image'
    },
    {
        id: 'tex-4',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-06-03%20at%203.51.38%20PM%20%281%29.jpeg',
        caption: 'Texhibition Showcase 4',
        category: 'Texhibition',
        type: 'image'
    },
    {
        id: 'tex-5',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-06-03%20at%203.51.49%20PM.jpeg',
        caption: 'Texhibition Showcase 6',
        category: 'Texhibition',
        type: 'image'
    },
    {
        id: 'game-1',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-05-14%20at%205.24.07%20PM.jpeg',
        caption: 'Gaming Tournament',
        category: 'Gaming',
        type: 'image'
    },
    {
        id: 'ncode-1',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-05-14%20at%209.08.57%20PM.jpeg',
        caption: 'N-Code Hackathon',
        category: 'N-Code',
        type: 'image'
    },
    {
        id: 'techcom-1',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-05-14%20at%204.56.50%20PM%20%283%29.jpeg',
        caption: 'Technocommercial Pitch',
        category: 'Technocommercial',
        type: 'image'
    },
    {
        id: 'comics-1',
        url: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gallery/WhatsApp%20Image%202025-05-15%20at%203.57.31%20PM%20%281%29.jpeg',
        caption: 'Comics Booth Area',
        category: 'Comics booth',
        type: 'image'
    }
];
