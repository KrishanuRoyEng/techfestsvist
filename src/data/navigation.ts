import { SideNavItem, TopNavLink } from '@/types';

export const topNavLinks: TopNavLink[] = [
    { label: 'Workshops', page: 'workshops' },
    { label: 'Competitions', page: 'events' },
];

export const sideNavItems: SideNavItem[] = [
    {
        id: 'sn-home',
        label: 'Home',
        page: 'home',
        icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
    },
    {
        id: 'sn-events',
        label: 'Events',
        page: 'events',
        icon: 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z',
        isFlyout: true,
    },
    {
        id: 'sn-contact',
        label: 'Contact',
        page: 'contact',
        icon: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
    },
    {
        id: 'sn-about',
        label: 'About Us',
        page: 'about',
        icon: 'M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z',
    },
    {
        id: 'sn-gallery',
        label: 'Gallery',
        page: 'gallery',
        icon: 'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z',
    },
    {
        id: 'sn-registration',
        label: 'Registration',
        page: 'registration',
        icon: 'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
    },
];
