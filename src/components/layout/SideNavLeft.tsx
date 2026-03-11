'use client';

import { sideNavItems } from '@/data/navigation';

interface SideNavLeftProps {
    activePage: string;
    onNavigate: (page: string) => void;
    onToggleFlyout: (e: React.MouseEvent) => void;
    flyoutOpen: boolean;
}

export default function SideNavLeft({
    activePage,
    onNavigate,
    onToggleFlyout,
    flyoutOpen,
}: SideNavLeftProps) {
    return (
        <nav className="side-nav-left">
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
                        onMouseEnter={(e) => {
                            if (item.isFlyout && !flyoutOpen) {
                                onToggleFlyout(e as unknown as React.MouseEvent);
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
