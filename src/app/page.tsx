'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

import CustomCursor from '@/components/cursor/CustomCursor';
import CityCanvas from '@/components/canvas/CityCanvas';
import TopNav from '@/components/layout/TopNav';
import SideNavLeft from '@/components/layout/SideNavLeft';
import SideNavRight from '@/components/layout/SideNavRight';
import EventsFlyout from '@/components/layout/EventsFlyout';
import MobileMenu from '@/components/layout/MobileMenu';
import HomePage from '@/components/pages/HomePage';
import EventsPage from '@/components/pages/EventsPage';
import SimplePage from '@/components/pages/SimplePage';
import RegistrationPage from '@/components/pages/RegistrationPage';
import GalleryPage from '@/components/pages/GalleryPage';
import ContactPage from '@/components/pages/ContactPage';
import PaymentPage from '@/components/pages/PaymentPage';
import { simplePages } from '@/data/simplePages';

export default function Page() {
  const [activePage, setActivePage] = useState('home');
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const eventsPageRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const closeFlyout = useCallback(() => {
    setFlyoutOpen(false);
  }, []);

  const closeFlyoutDebounced = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setFlyoutOpen(false);
    }, 300); // 300ms grace period
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
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

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (activePage === 'home') {
      document.title = 'Innovention — Tech Fest';
    } else {
      const pageTitle = activePage.charAt(0).toUpperCase() + activePage.slice(1);
      document.title = `Innovention — ${pageTitle}`;
    }
  }, [activePage]);

  const openFlyout = useCallback(() => {
    cancelClose();
    setFlyoutOpen(true);
  }, [cancelClose]);

  const toggleFlyout = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      cancelClose();
      setFlyoutOpen((prev) => !prev);
    },
    [cancelClose]
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
      <CityCanvas />

      {/* Navigation Layer */}
      <TopNav onNavigate={navigate} />

      <SideNavLeft
        activePage={activePage}
        onNavigate={navigate}
        onOpenFlyout={openFlyout}
        onToggleFlyout={toggleFlyout}
        onMouseEnter={cancelClose}
        onMouseLeave={closeFlyoutDebounced}
        flyoutOpen={flyoutOpen}
      />
      <EventsFlyout
        isOpen={flyoutOpen}
        onNavigateToEvent={navigateToEvent}
        onClose={closeFlyout}
        onMouseEnter={cancelClose}
        onMouseLeave={closeFlyoutDebounced}
      />

      <SideNavRight />

      {/* Pages Layer */}
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
      <PaymentPage isActive={activePage === 'payment'} />
      <MobileMenu onNavigate={navigate} />
      <div className="discrete-tag">Made with ❤️ by Krishanu</div>
      <CustomCursor />
    </div>
  );
}
