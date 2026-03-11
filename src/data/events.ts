import { EventSectionData } from '@/types';

export const eventSections: EventSectionData[] = [
    {
        id: 'techtrix',
        number: '01',
        name: '',
        nameHighlight: 'TechTrix',
        tag: 'Technical',
        description:
            'Focus on technical excellence and engineering innovation. Showcase your models and technical skills to a panel of experts.',
        info: [
            { label: 'Date', value: 'April 1–2, 2026' },
            { label: 'Venue', value: 'SVIST Campus' },
            { label: 'Event', value: 'TechTrix' },
            { label: 'Contact', value: '+91 9163491215' },
        ],
        cards: [
            {
                category: 'Exhibition',
                name: 'Texhibition',
                description: 'A grand technical exhibition where students showcase their innovative projects and models.',
                badges: [{ label: 'All Branches' }, { label: 'Register', isPrize: true }],
                number: '01',
            },
        ],
    },
    {
        id: 'robotics',
        number: '02',
        name: '',
        nameHighlight: 'Robotics',
        tag: 'Combat & Automation',
        description:
            'The arena where machines clash and autonomy reigns. From high-speed racing to brutal combat, robotics pushes the limits of engineering.',
        info: [
            { label: 'Date', value: 'April 1–2, 2026' },
            { label: 'Venue', value: 'Robotics Arena, SVIST' },
            { label: 'Format', value: 'Technical' },
            { label: 'Teams', value: '2–4 Members' },
        ],
        cards: [
            {
                category: 'Autonomous',
                name: 'Line Following Car',
                description: 'Autonomous robots racing on a complex track following a line with precision.',
                badges: [{ label: 'Autonomous' }, { label: 'Register', isPrize: true }],
                number: '01',
            },
            {
                category: 'Racing',
                name: 'Off Road Car Race',
                description: 'Remote-controlled beasts navigating a treacherous off-road terrain built for speed and durability.',
                badges: [{ label: 'Manually Controlled' }, { label: 'Register', isPrize: true }],
                number: '02',
            },
            {
                category: 'Combat',
                name: 'Robo Car Combat',
                description: 'Two robots enter, one robot leaves. A battle of strength, strategy, and engineering.',
                badges: [{ label: 'Combat' }, { label: 'Register', isPrize: true }],
                number: '03',
            },
        ],
    },
    {
        id: 'createx',
        number: '03',
        name: '',
        nameHighlight: 'CreaTeX',
        tag: 'Creativity & Arts',
        description:
            'Express your artistic vision through various mediums. CreaTeX celebrates the intersection of art and digital media.',
        info: [
            { label: 'Date', value: 'April 1–2, 2026' },
            { label: 'Venue', value: 'Creative Zone, SVIST' },
            { label: 'Format', value: 'Arts & Media' },
        ],
        cards: [
            {
                category: 'Film',
                name: 'Short Film',
                description: 'Tell a story through the lens. Cinematic excellence and storytelling combined.',
                badges: [{ label: 'Video' }, { label: 'Register', isPrize: true }],
                number: '01',
            },
            {
                category: 'Photography',
                name: 'Pixelography',
                description: 'Capture the world through your perspective. A digital photography challenge.',
                badges: [{ label: 'Digital' }, { label: 'Register', isPrize: true }],
                number: '02',
            },
            {
                category: 'Art',
                name: 'T-Shirt Painting',
                description: 'Wear your art. Showcase your creativity on a fabric canvas with colors and strokes.',
                badges: [{ label: 'Manual' }, { label: 'Register', isPrize: true }],
                number: '03',
            },
        ],
    },
    {
        id: 'craftomania',
        number: '04',
        name: '',
        nameHighlight: 'Craftomania',
        tag: 'Hands-On & Fashion',
        description:
            'A blend of traditional craft and modern fashion. Craftomania is where skilled hands create magic.',
        info: [
            { label: 'Date', value: 'April 1–2, 2026' },
            { label: 'Venue', value: 'Main Hall, SVIST' },
            { label: 'Format', value: 'Creative' },
        ],
        cards: [
            {
                category: 'Craft',
                name: 'Craft Designing',
                description: 'Build intricate models and designs from raw materials with precision and care.',
                badges: [{ label: 'Handmade' }, { label: 'Register', isPrize: true }],
                number: '01',
            },
            {
                category: 'Fashion',
                name: 'Cose Play',
                description: 'Dress up as your favorite characters and bring them to life with performance and aura.',
                badges: [{ label: 'Performance' }, { label: 'Register', isPrize: true }],
                number: '02',
            },
        ],
    },
    {
        id: 'mr-ms-engineer',
        number: '05',
        name: 'Mr. / Ms.',
        nameHighlight: 'Engineer',
        tag: 'Personality',
        description:
            'The flagship personality contest searching for the most charismatic and talented engineer on campus.',
        info: [
            { label: 'Date', value: 'April 2, 2026' },
            { label: 'Venue', value: 'Stage, SVIST' },
            { label: 'Format', value: 'Personality' },
        ],
        cards: [
            {
                category: 'Title',
                name: 'Mr. / Ms. Engineer',
                description: 'The search for the most talented and charismatic engineer. This flagship event tests personality, intellect, and talent.',
                badges: [{ label: 'All' }, { label: 'Register', isPrize: true }],
                number: '01',
            },
        ],
    },
    {
        id: 'brain-buster',
        number: '06',
        name: 'Brain',
        nameHighlight: 'Buster',
        tag: 'Mental Games',
        description:
            'Put your intellect to the test with games that require deep focus, strategy, and logic.',
        info: [
            { label: 'Date', value: 'April 1, 2026' },
            { label: 'Venue', value: 'Seminar Hall, SVIST' },
            { label: 'Format', value: 'Mind Games' },
        ],
        cards: [
            {
                category: 'Strategy',
                name: 'Blitz Chess',
                description: 'Fast-paced chess where every second counts. Outsmart your opponent in minutes.',
                badges: [{ label: 'Rapid' }, { label: 'Register', isPrize: true }],
                number: '01',
            },
            {
                category: 'Logic',
                name: 'Sudoku',
                description: 'A numbers puzzle that tests your deductive reasoning and logical consistency.',
                badges: [{ label: 'Mental' }, { label: 'Register', isPrize: true }],
                number: '02',
            },
        ],
    },
    {
        id: 'code-storm',
        number: '07',
        name: 'Code',
        nameHighlight: 'Storm',
        tag: 'Coding & Logic',
        description:
            'The ultimate coding challenge. From web development to query optimization, prove your coding prowess.',
        info: [
            { label: 'Date', value: 'April 1–2, 2026' },
            { label: 'Venue', value: 'Labs, SVIST' },
            { label: 'Format', value: 'Programming' },
        ],
        cards: [
            {
                category: 'Progrraming',
                name: 'N Code',
                description: 'Competitive programming at its best. Solve algorithms and data structures.',
                badges: [{ label: 'Algorithms' }, { label: 'Register', isPrize: true }],
                number: '01',
            },
            {
                category: 'Web',
                name: 'Web Dev',
                description: 'Build stunning and functional web applications in limited time.',
                badges: [{ label: 'Full Stack' }, { label: 'Register', isPrize: true }],
                number: '02',
            },
            {
                category: 'Database',
                name: 'Query',
                description: 'Optimize queries and manage databases effectively under pressure.',
                badges: [{ label: 'SQL' }, { label: 'Register', isPrize: true }],
                number: '03',
            },
        ],
    },
    {
        id: 'commercial',
        number: '08',
        name: 'Techno',
        nameHighlight: 'Commercial',
        tag: 'Business & Idea',
        description:
            'Bridge the gap between technology and business. Pitch your startup or showcase your innovative ideas.',
        info: [
            { label: 'Date', value: 'April 2, 2026' },
            { label: 'Venue', value: 'Conference Room, SVIST' },
            { label: 'Format', value: 'Business' },
        ],
        cards: [
            {
                category: 'Startup',
                name: 'Business Plan and Start-up',
                description: 'Present your business model to investors and industry experts.',
                badges: [{ label: 'Entrepreneurship' }, { label: 'Register', isPrize: true }],
                number: '01',
            },
            {
                category: 'Innovation',
                name: 'Idea and Innovation',
                description: 'Pitch a groundbreaking idea that can solve real-world problems.',
                badges: [{ label: 'Ideation' }, { label: 'Register', isPrize: true }],
                number: '02',
            },
        ],
    },
    {
        id: 'gaming',
        number: '09',
        name: 'High Intensity',
        nameHighlight: 'Gaming',
        tag: 'Esports',
        description:
            'Compete in the biggest esports titles. High stakes, high intensity, and glory awaits the champions.',
        info: [
            { label: 'Date', value: 'April 1–2, 2026' },
            { label: 'Venue', value: 'Gaming Arena, SVIST' },
            { label: 'Format', value: 'Esports' },
        ],
        cards: [
            {
                category: 'Battle Royale',
                name: 'Free Fire',
                description: 'Survival of the fittest on your mobile devices. Drop, loot, and win.',
                badges: [{ label: 'Squad' }, { label: 'Mobile' }, { label: 'Register', isPrize: true }],
                number: '01',
            },
            {
                category: 'Battle Royale',
                name: 'BGMI',
                description: 'The ultimate battle royale for Indian gamers. Strategy meets gunplay.',
                badges: [{ label: 'Squad' }, { label: 'Mobile' }, { label: 'Register', isPrize: true }],
                number: '02',
            },
            {
                category: 'Tactical Shooter',
                name: 'VALORANT',
                description: '5v5 character-based tactical shooter. Precision aim and clever ability usage.',
                badges: [{ label: 'PC' }, { label: '5v5' }, { label: 'Register', isPrize: true }],
                number: '03',
            },
        ],
    },
];