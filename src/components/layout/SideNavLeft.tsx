'use client';

import { sideNavItems } from '@/data/navigation';

interface SideNavLeftProps {
    activePage: string;
    onNavigate: (page: string) => void;
    onOpenFlyout: () => void;
    onToggleFlyout: (e: React.MouseEvent) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    flyoutOpen: boolean;
}

export default function SideNavLeft({
    activePage,
    onNavigate,
    onOpenFlyout,
    onToggleFlyout,
    onMouseEnter,
    onMouseLeave,
    flyoutOpen,
}: SideNavLeftProps) {
    return (
        <nav 
            className="side-nav-left"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {sideNavItems.map((item) => {
                const isActive =
                    item.id === 'sn-events'
                        ? flyoutOpen || activePage === 'events'
                        : activePage === item.page;

                return (
                    <a
                        key={item.id}
                        className={`side-icon${isActive ? ' active' : ''}`}
                        id={item.id}
                        href="#"
                        onMouseEnter={() => {
                            const isDesktop = window.matchMedia('(pointer: fine)').matches;
                            if (isDesktop && item.isFlyout) {
                                onOpenFlyout();
                            }
                        }}
                        onClick={(e) => {
                            e.preventDefault();
                            if (item.isFlyout) {
                                onToggleFlyout(e);
                            } else {
                                onNavigate(item.page);
                            }
                        }}
                    >
                        <svg viewBox="0 0 24 24">
                            <path d={item.icon} />
                        </svg>
                        {item.label}
                    </a>
                );
            })}
        </nav>
    );
}
