// ── Navigation Types ──
export interface SideNavItem {
    id: string;
    label: string;
    page: string;
    icon: string; // SVG path data
    isFlyout?: boolean;
}

export interface TopNavLink {
    label: string;
    page: string;
}

export interface SocialLink {
    href: string;
    label: string;
    icon: string; // SVG path data
}

// ── Events Types ──
export interface EventCardData {
    category: string;
    name: string;
    description: string;
    badges: Badge[];
    number: string;
    regLink?: string;
    qrCode?: string;
}

export interface Badge {
    label: string;
    isPrize?: boolean;
}

export interface EventInfoItem {
    label: string;
    value: string;
}

export interface EventSectionData {
    id: string;
    number: string;
    name: string;
    nameHighlight: string;
    tag: string;
    description: string;
    info: EventInfoItem[];
    cards: EventCardData[];
}

// ── Flyout Types ──
export interface FlyoutItem {
    id: string;
    label: string;
    isHighlighted?: boolean;
}

// ── Simple Page Types ──
export interface SimplePageData {
    id: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    content: string;
}

// ── Canvas Types ──
export interface Star {
    x: number;
    y: number;
    r: number;
    a: number;
    f: number;
}

export interface FlyingParticle {
    x: number;
    y: number;
    vx: number;
    len: number;
    col: string;
    a: number;
}

export interface WindowData {
    r: number;
    c: number;
    on: boolean;
    fl: boolean;
    ph: number;
}

export interface Building {
    x: number;
    w: number;
    h: number;
    y: number;
    wc: string;
    wins: WindowData[];
    sh: number;
    ant: boolean;
    ne: boolean;
    ec: string;
}

export interface BackgroundBuilding {
    x: number;
    w: number;
    h: number;
    col: string;
    ho: boolean;
    wc: string;
    sh: number;
}
