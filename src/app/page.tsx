'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

import CustomCursor from '@/components/cursor/CustomCursor';
import CityCanvas from '@/components/canvas/CityCanvas';
import TopNav from '@/components/layout/TopNav';
import SideNavLeft from '@/components/layout/SideNavLeft';
import SideNavRight from '@/components/layout/SideNavRight';
import EventsFlyout from '@/components/layout/EventsFlyout';
import HomePage from '@/components/pages/HomePage';
import EventsPage from '@/components/pages/EventsPage';
import SimplePage from '@/components/pages/SimplePage';
import RegistrationPage from '@/components/pages/RegistrationPage';
import GalleryPage from '@/components/pages/GalleryPage';
import ContactPage from '@/components/pages/ContactPage';
import { simplePages } from '@/data/simplePages';

export default function Page() {
  const [activePage, setActivePage] = useState('home');
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const eventsPageRef = useRef<HTMLDivElement>(null);

  const closeFlyout = useCallback(() => {
    setFlyoutOpen(false);
  }, []);

  const navigate = useCallback(
    (page: string) => {
      setActivePage(page);
      closeFlyout();
      if (typeof window !== 'undefined') {
        window.history.pushState(null, '', `#${page}`);
      }
    },
    [closeFlyout]
  );

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActivePage(hash);
      } else {
        setActivePage('home');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleFlyout = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setFlyoutOpen((prev) => !prev);
    },
    []
  );

  const navigateToEvent = useCallback(
    (eventId: string) => {
      navigate('events');
      setTimeout(() => {
        const el = document.getElementById(`ev-${eventId}`);
        if (el && eventsPageRef.current) {
          eventsPageRef.current.scrollTo({
            top: el.offsetTop - 100,
            behavior: 'smooth',
          });
        }
      }, 60);
    },
    [navigate]
  );

  return (
    <div onClick={closeFlyout}>
      <CustomCursor />
      <CityCanvas />

      {/* Navigation */}
      <TopNav onNavigate={navigate} />
      <SideNavLeft
        activePage={activePage}
        onNavigate={navigate}
        onToggleFlyout={toggleFlyout}
        flyoutOpen={flyoutOpen}
      />
      <SideNavRight />
      <EventsFlyout
        isOpen={flyoutOpen}
        onNavigateToEvent={navigateToEvent}
      />

      {/* Pages */}
      <HomePage isActive={activePage === 'home'} onNavigate={navigate} />
      <EventsPage
        isActive={activePage === 'events'}
        ref={eventsPageRef}
      />
      {simplePages.map((pageData) => (
        <SimplePage
          key={pageData.id}
          data={pageData}
          isActive={activePage === pageData.id}
          onNavigate={navigate}
        />
      ))}
      <RegistrationPage isActive={activePage === 'registration'} />
      <GalleryPage isActive={activePage === 'gallery'} />
      <ContactPage isActive={activePage === 'contact'} />
    </div>
  );
}
