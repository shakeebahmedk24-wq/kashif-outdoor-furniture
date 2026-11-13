import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Menu, X, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenQuote: () => void;
}

export function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when off-canvas drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services (8)', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Dedicated Top Bar for Mobile Devices */}
      <div className="block lg:hidden bg-[#090706] border-b border-[#241c15] text-[11px] text-[#a8a29e] py-1.5 px-3.5 sm:px-6">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[#d4af37] truncate">
            <MapPin className="w-3 h-3 shrink-0 text-[#d4af37]" />
            <span className="truncate font-medium">Meo Chowk, Manzoor Colony, Karachi</span>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="text-[#f5eccd] text-[10px] sm:text-xs font-medium flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#d4af37]" />
              <span>Closes 9 PM</span>
            </span>
            <a
              href="tel:+923438999282"
              className="text-[#d4af37] font-bold text-[10px] sm:text-xs hover:underline flex items-center gap-1 bg-[#1c150f] px-2 py-0.5 rounded border border-[#d4af37]/30"
            >
              <Phone className="w-2.5 h-2.5" />
              <span>Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* Top micro bar for Karachi clients (Desktop & Tablet) */}
      <div className="hidden lg:block bg-[#090807] border-b border-[#29221b] text-xs text-[#a8a29e] py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#d4af37]">
              <MapPin className="w-3.5 h-3.5" />
              Meo Chowk, Maryam Masjid, Manzoor Colony Sector C, Karachi
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#78716c]" />
              Open · Closes 9:00 PM
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1 text-[#e7e5e4]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
              Handcrafted Rope &amp; Outdoor Furniture Across Karachi
            </span>
            <span className="text-[#a8a29e]">
              Plus Code: V32P+3X
            </span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0f0d0b]/95 backdrop-blur-md border-b border-[#d4af37]/25 shadow-xl py-3'
            : 'bg-[#120f0d]/80 backdrop-blur-sm border-b border-[#2a221b] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2" aria-label="Kashif Outdoor Furniture Home">
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-[#d6d3d1] hover:text-[#d4af37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+923438999282"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#d4af37] to-[#b38e1b] text-black font-semibold text-xs tracking-wider uppercase hover:brightness-110 shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+92 343 8999282</span>
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-md text-[#e7e5e4] hover:text-[#d4af37] border border-[#2f2720] hover:border-[#d4af37]/40 focus:outline-none"
              aria-label="Open Mobile Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Off-Canvas Drawer Menu for Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-out drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm bg-[#120e0b] border-l border-[#d4af37]/30 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto lg:hidden"
            >
              <div>
                {/* Header with close button */}
                <div className="flex items-center justify-between pb-5 border-b border-[#29221b]">
                  <BrandLogo size="sm" showSubtitle={false} />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full text-[#a8a29e] hover:text-white hover:bg-[#251e18] transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation links */}
                <nav className="flex flex-col gap-1 py-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="flex items-center justify-between py-3 px-3 text-base font-medium text-[#e7e5e4] hover:text-[#d4af37] hover:bg-[#1a1410] rounded-lg transition-colors group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 text-[#78716c] group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Drawer footer contact actions */}
              <div className="pt-6 border-t border-[#29221b] flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b38e1b] text-black font-bold text-sm tracking-wider uppercase text-center shadow-lg hover:brightness-110 transition-all"
                >
                  Request Fast Estimate
                </button>

                <a
                  href="tel:+923438999282"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#1f1914] border border-[#d4af37]/30 text-[#e7e5e4] hover:text-[#d4af37] text-sm font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>Call: +92 343 8999282</span>
                </a>

                <a
                  href="https://wa.me/923438999282?text=Hello%20Kashif%20Outdoor%20Furniture,%20I%20would%20like%20to%20inquire%20about%20your%204%20seater%20rope%20sofa%20set%20and%20outdoor%20furniture."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#172517] border border-[#22c55e]/40 text-[#4ade80] text-sm font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#22c55e]" />
                  <span>Chat on WhatsApp</span>
                </a>

                <div className="text-[11px] text-[#78716c] text-center pt-2">
                  Meo Chowk, Maryam Masjid, Manzoor Colony Sector C, Karachi
                  <br />
                  Open · Closes 9:00 PM • Plus Code: V32P+3X
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
