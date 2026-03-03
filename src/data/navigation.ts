import { SideNavItem, TopNavLink } from '@/types';

export const topNavLinks: TopNavLink[] = [
    { label: 'Accommodation', page: 'accommodation' },
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
        id: 'sn-sponsors',
        label: 'Sponsors',
        page: 'sponsors',
        icon: 'M12 1l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16l-6.2 4.3 2.4-7.4L2 8.4h7.6z',
    },
    {
        id: 'sn-store',
        label: 'Store',
        page: 'store',
        icon: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.1 17 7.5 17H19v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H15c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0019.5 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z',
    },
];
