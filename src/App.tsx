import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ServicesGrid } from './components/ServicesGrid';
import { CraftsmanshipShowcase } from './components/CraftsmanshipShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { EstimatePage } from './components/EstimatePage';
import { ChatBot } from './components/ChatBot';
import { ServiceItem } from './types';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isEstimatePageOpen, setIsEstimatePageOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<ServiceItem | null>(null);

  // Sync with browser hash #estimate so hardware back / swipe back works naturally
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#estimate') {
        setIsEstimatePageOpen(true);
        setIsQuoteModalOpen(false);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setIsEstimatePageOpen(false);
      }
    };

    if (window.location.hash === '#estimate') {
      setIsEstimatePageOpen(true);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenQuote = (service?: ServiceItem) => {
    setSelectedServiceForQuote(service || null);
    
    // On mobile devices (viewport < 768px), navigate to the dedicated separate full page
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      window.location.hash = 'estimate';
      setIsEstimatePageOpen(true);
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      setIsQuoteModalOpen(true);
    }
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
    setSelectedServiceForQuote(null);
  };

  const handleBackFromEstimate = () => {
    setIsEstimatePageOpen(false);
    if (window.location.hash === '#estimate') {
      history.pushState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // If separate estimate page is active on mobile
  if (isEstimatePageOpen) {
    return (
      <EstimatePage
        onBack={handleBackFromEstimate}
        initialService={selectedServiceForQuote}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0c0a09] text-[#e7e5e4] selection:bg-[#d4af37]/30 selection:text-[#fef08a] overflow-x-hidden w-full">
      {/* Sticky Navigation Header with Dedicated Mobile Top Bar & Off-Canvas Drawer */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Sections */}
      <main className="overflow-x-hidden w-full">
        {/* 1. Hero Section with Bold Headline, "Call Now", and "Get Directions" CTAs */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 2. About Us: Highlighting outdoor craftsmanship in Manzoor Colony, Karachi */}
        <AboutUs onOpenQuote={() => handleOpenQuote()} />

        {/* 3. Services Grid: 8 Outdoor Furniture Categories */}
        <ServicesGrid onSelectService={(service) => handleOpenQuote(service)} />

        {/* 4. Craftsmanship Showcase & Featured Projects Gallery */}
        <CraftsmanshipShowcase />

        {/* 5. Why Choose Kashif Outdoor Furniture */}
        <WhyChooseUs onOpenQuote={() => handleOpenQuote()} />

        {/* 6. Customer Reviews: Mobile Scrolling Marquee & Desktop Grid */}
        <ReviewsSection />

        {/* 7. Contact Section: Karachi Address, Tap-to-Call, Hours & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer with Business Information & Accent Stripe */}
      <Footer />

      {/* Fast Project Estimation & Consultation Modal (Desktop / Large screen experience) */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        initialService={selectedServiceForQuote}
      />

      {/* Official Virtual Assistant Chatbot for Kashif Outdoor Furniture */}
      <ChatBot onOpenEstimate={() => handleOpenQuote()} />
    </div>
  );
}

