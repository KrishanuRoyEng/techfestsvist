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
        ],
        cards: [
            {
                category: 'Exhibition',
                name: 'Texhibition',
                description: 'A grand technical exhibition where students showcase their innovative projects and models.',
                badges: [{ label: 'All Branches' }, { label: 'Register', isPrize: true }],
                number: '01',
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/TechTrix.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc9RYRWONl48ttA2Y7uPyvu_d88RCB_tvX8nZxbBZefbQPXIg/viewform',
                rules: [
                    'Teams of exactly 2 members.',
                    'Event consists of multiple rounds including a tech-quiz and practical circuit debugging.',
                    'Use of mobile phones or smartwatches during the quiz rounds is strictly prohibited.'
                ],
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
        ],
        cards: [
            {
                category: 'Autonomous',
                name: 'Line Following Car',
                description: 'Autonomous robots racing on a complex track following a line with precision.',
                badges: [{ label: 'Autonomous' }, { label: 'Register', isPrize: true }],
                number: '01',
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Innovention%20Robotics.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe7V7J1U4XcGZm41rIQuYFZv9_jOINS23Uk8vsCVLFz97tWuA/viewform',
                rules: [
                    'Bots must not exceed the maximum weight limit of 2kg and dimensions of 30x30x30 cm.',
                    'Maximum allowed voltage is 12V.',
                    'Any bot causing damage to the arena will be immediately disqualified.'
                ],
            },
            {
                category: 'Racing',
                name: 'Off Road Car Race',
                description: 'Remote-controlled beasts navigating a treacherous off-road terrain built for speed and durability.',
                badges: [{ label: 'Manually Controlled' }, { label: 'Register', isPrize: true }],
                number: '02',
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Innovention%20Robotics.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe7V7J1U4XcGZm41rIQuYFZv9_jOINS23Uk8vsCVLFz97tWuA/viewform',
                rules: [
                    'Bots must not exceed the maximum weight limit of 2kg and dimensions of 30x30x30 cm.',
                    'Maximum allowed voltage is 12V.',
                    'Any bot causing damage to the arena will be immediately disqualified.'
                ],
            },
            {
                category: 'Combat',
                name: 'Robo Car Combat',
                description: 'Two robots enter, one robot leaves. A battle of strength, strategy, and engineering.',
                badges: [{ label: 'Combat' }, { label: 'Register', isPrize: true }],
                number: '03',
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Innovention%20Robotics.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe7V7J1U4XcGZm41rIQuYFZv9_jOINS23Uk8vsCVLFz97tWuA/viewform',
                rules: [
                    'Bots must not exceed the maximum weight limit of 2kg and dimensions of 30x30x30 cm.',
                    'Maximum allowed voltage is 12V.',
                    'Any bot causing damage to the arena will be immediately disqualified.'
                ],
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
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Createx.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSciJggJ6c9gE1dz__V4FcAh-EtDzsOL8WpGe1oPQ-75JWAW9A/viewform',
                rules: [
                    'Any subject/language. Runtime strictly 3 to 20 minutes.',
                    'Must be original, highest quality, no watermarks, no adult content.',
                    'Submit via Google Drive by 28th March 2026.'
                ],
            },
            {
                category: 'Photography',
                name: 'Pixelography',
                description: 'Capture the world through your perspective. A digital photography challenge.',
                badges: [{ label: 'Digital' }, { label: 'Register', isPrize: true }],
                number: '02',
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Createx.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSciJggJ6c9gE1dz__V4FcAh-EtDzsOL8WpGe1oPQ-75JWAW9A/viewform',
                rules: [
                    'Topic: "Color of spring." Max 1 photo per contestant.',
                    'Must have a watermark (name, camera/mobile model, ISO).',
                    'Printed on glossy A4 paper. Basic editing allowed; stolen photos disqualified.',
                    'Submit by 28th March 2026.'
                ],
            },
            {
                category: 'Art',
                name: 'T-Shirt Painting',
                description: 'Wear your art. Showcase your creativity on a fabric canvas with colors and strokes.',
                badges: [{ label: 'Manual' }, { label: 'Register', isPrize: true }],
                number: '03',
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Createx.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSciJggJ6c9gE1dz__V4FcAh-EtDzsOL8WpGe1oPQ-75JWAW9A/viewform',
                rules: [
                    'Original, unpublished work. Front is primary, back allowed.',
                    'Judged on creativity, eye appeal, color, and layout.',
                    'Participants must bring their own colors/equipment (except T-shirt).'
                ],
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
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Craftomania.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe2ihkg9VvKvlRN3PxYpOI3f5S480eBbktln0OIgba1Ry4-_w/viewform',
                rules: [
                    'Participants must bring their own materials.',
                    'Glue, scissors & tape are strictly prohibited. No pre-made items allowed.',
                    'Max time limit: 10 min. Eco-friendly materials encouraged.',
                    'No mobile or internet usage during the event.'
                ],
            },
            {
                category: 'Fashion',
                name: 'Cose Play',
                description: 'Dress up as your favorite characters and bring them to life with performance and aura.',
                badges: [{ label: 'Performance' }, { label: 'Register', isPrize: true }],
                number: '02',
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Craftomania.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe2ihkg9VvKvlRN3PxYpOI3f5S480eBbktln0OIgba1Ry4-_w/viewform',
                rules: [
                    'Cosplay characters from approved categories (anime, movies, gaming, comics, TV).',
                    'Costumes must be appropriate for a public event.',
                    'Costumes promoting hate, violence, religion-based insults, or political controversy are banned.'
                ],
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
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/MrMs%20Engineer.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf_Uvdk0D5FueXkgroQhBWzXvIqaM0g_JGet266RFitg09IlQ/viewform',
                rules: [
                    'Participants must wear formal attire.',
                    'Rounds will include an Introduction, a Talent Showcase, and a Technical/HR Q&A.',
                    'Judging criteria include confidence, technical aptitude, and overall personality.',
                    'Decision of the organizing committee is final.'
                ],
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
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/BrainBuster.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeECW361rlENe_9Y6s8pIVAJyva7a9S4tLORLTktI58ppSZnw/viewform',
                rules: [
                    'Participants must bring their own smartphone with a good internet connection.',
                    "Install the 'Chess.com' app and create an account prior to the event.",
                    'Time control: 5 minutes per player per game.',
                    'Decision of the organizing committee is final.'
                ],
            },
            {
                category: 'Logic',
                name: 'Sudoku',
                description: 'A numbers puzzle that tests your deductive reasoning and logical consistency.',
                badges: [{ label: 'Mental' }, { label: 'Register', isPrize: true }],
                number: '02',
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/BrainBuster.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeECW361rlENe_9Y6s8pIVAJyva7a9S4tLORLTktI58ppSZnw/viewform',
                rules: [
                    'Must be filled up using pencil only.',
                    'Participants must bring their own pencils, eraser, sharpener, etc.',
                    'Maximum time limit: 10 minutes.',
                    'Decision of the organizing committee is final.'
                ],
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
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/CodeStorm2026.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeZKWmigEDnygFI7bPmw6NjM-kRrWpqA32-Ixqs4uOv-cHG1g/viewform',
                rules: [
                    'Participants must bring their own laptops and chargers.',
                    'Team size: 1 to 3 members.',
                    'Use of AI coding assistants (like ChatGPT or GitHub Copilot) is strictly prohibited.',
                    'Final judging will be based on execution time, memory optimization, and code readability.'
                ],
            },
            {
                category: 'Web',
                name: 'Web Dev',
                description: 'Build stunning and functional web applications in limited time.',
                badges: [{ label: 'Full Stack' }, { label: 'Register', isPrize: true }],
                number: '02',
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/CodeStorm2026.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeZKWmigEDnygFI7bPmw6NjM-kRrWpqA32-Ixqs4uOv-cHG1g/viewform',
                rules: [
                    'Participants must bring their own laptops and chargers.',
                    'Team size: 1 to 3 members.',
                    'Use of AI coding assistants (like ChatGPT or GitHub Copilot) is strictly prohibited.',
                    'Final judging will be based on execution time, memory optimization, and code readability.'
                ],
            },
            {
                category: 'Database',
                name: 'Query',
                description: 'Optimize queries and manage databases effectively under pressure.',
                badges: [{ label: 'SQL' }, { label: 'Register', isPrize: true }],
                number: '03',
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/CodeStorm2026.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeZKWmigEDnygFI7bPmw6NjM-kRrWpqA32-Ixqs4uOv-cHG1g/viewform',
                rules: [
                    'Participants must bring their own laptops and chargers.',
                    'Team size: 1 to 3 members.',
                    'Use of AI coding assistants (like ChatGPT or GitHub Copilot) is strictly prohibited.',
                    'Final judging will be based on execution time, memory optimization, and code readability.'
                ],
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
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/TechnoCommercialPPt.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLScACAknwvC9Cl-UvPY-m43HeMmjLA-16Bt-A-98BIlvBlaNug/viewform',
                rules: [
                    '6 minutes for explanation + 3 minutes for Q&A.',
                    'Team size: 2 to 4 students. Team name is mandatory.',
                    'Do not change the given format, add/remove slides, or animate the content.',
                    'Slide 6 (References): Change font color to Black only.',
                    'Problem statements/categories must be chosen from Annexure-1 (Smart Automation, Med Tech, Clean Tech, etc.).',
                    'Operation modes: Software, Hardware, or Hybrid.'
                ],
            },
            {
                category: 'Innovation',
                name: 'Idea and Innovation',
                description: 'Pitch a groundbreaking idea that can solve real-world problems.',
                badges: [{ label: 'Ideation' }, { label: 'Register', isPrize: true }],
                number: '02',
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/TechnoCommercialPPt.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLScACAknwvC9Cl-UvPY-m43HeMmjLA-16Bt-A-98BIlvBlaNug/viewform',
                rules: [
                    '6 minutes for explanation + 3 minutes for Q&A.',
                    'Team size: 2 to 4 students. Team name is mandatory.',
                    'Do not change the given format, add/remove slides, or animate the content.',
                    'Slide 6 (References): Change font color to Black only.',
                    'Problem statements/categories must be chosen from Annexure-1 (Smart Automation, Med Tech, Clean Tech, etc.).',
                    'Operation modes: Software, Hardware, or Hybrid.'
                ],
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
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gaming%20Registration.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeL_ofilm8HDq9JTk0I7a3zoPivF3-eSuFXiyO-74RTsVPRtQ/viewform',
                rules: [
                    'Squads of 4 players.',
                    'Use of third-party mods, hacks, or scripts will result in immediate disqualification.',
                    'Detailed rules: https://drive.google.com/file/d/1Gg7nD6E1ZkT3FP0Fg2E7QA-gjOjyDjPH/view'
                ],
            },
            {
                category: 'Battle Royale',
                name: 'BGMI',
                description: 'The ultimate battle royale for Indian gamers. Strategy meets gunplay.',
                badges: [{ label: 'Squad' }, { label: 'Mobile' }, { label: 'Register', isPrize: true }],
                number: '02',
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gaming%20Registration.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeL_ofilm8HDq9JTk0I7a3zoPivF3-eSuFXiyO-74RTsVPRtQ/viewform',
                rules: [
                    'Squads of 4 players.',
                    'Emulators and iPads are strictly prohibited. Matches played on Erangel and Miramar.',
                    'Detailed rules: https://drive.google.com/file/d/1jDpgReg624KtMN8vYX631LsUEpaXjt7W/view'
                ],
            },
            {
                category: 'Virtual Sports',
                name: 'eFootball',
                description: 'Build your dream team and compete in fast-paced football matches.',
                badges: [{ label: '1v1' }, { label: 'Mobile' }, { label: 'Register', isPrize: true }],
                number: '03',
                qrCode: 'https://8pvztqt2c4vajhyz.public.blob.vercel-storage.com/Gaming%20Registration.jpeg',
                regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeL_ofilm8HDq9JTk0I7a3zoPivF3-eSuFXiyO-74RTsVPRtQ/viewform',
                rules: [
                    'Standard match time settings.',
                    'No lag exploitation or network tampering allowed.',
                    'Detailed rules: https://drive.google.com/file/d/1yieDdXVr6M72M7ymLI471nweL-Kh0z0U/view'
                ],
            },
        ],
    },
];