import { motion } from 'motion/react';
import { Phone, Navigation, MessageCircle, Sparkles, CheckCircle2, Ruler, Shield, Clock } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

export function Hero({ onOpenQuote }: HeroProps) {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Meo+Chowk+Maryam+Masjid+Manzoor+Colony+Sector+C+Karachi+Pakistan';

  return (
    <section className="relative overflow-hidden bg-[#0c0a09] pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#292018]">
      {/* Subtle luxury ambient gold glow in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#d4af37]/10 via-[#d4af37]/5 to-transparent blur-3xl pointer-events-none" />
      
      {/* Architectural pinstripe line accents */}
      <div className="absolute inset-y-0 left-6 sm:left-12 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/25 to-transparent pointer-events-none hidden md:block" />
      <div className="absolute inset-y-0 right-6 sm:right-12 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/25 to-transparent pointer-events-none hidden md:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & High-converting CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top pill badge */}
            <motion.div 
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1711] border border-[#d4af37]/40 text-[#f5eccd] text-xs font-medium tracking-wider uppercase mb-5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>4.5 ★ Rated • Manzoor Colony, Karachi</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6"
            >
              Elevate Your Outdoor &amp;{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ffe59e] via-[#d4af37] to-[#aa8214]">
                Garden Living Spaces
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-[#c7bfb8] font-normal leading-relaxed max-w-2xl mb-8"
            >
              Kashif Outdoor Furniture crafts signature 4-seater sofa sets with table in rope, all-weather rattan patio lounges, garden swings, poolside sunbeds, and outdoor dining sets in Manzoor Colony, Karachi. Built with master precision for lawns, terraces, farmhouses, and cafés.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8"
            >
              {/* Primary CTA 1: Call Now (tap-to-call) */}
              <a
                href="tel:+923438999282"
                id="hero-call-now-cta"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-gradient-to-r from-[#e5c158] via-[#d4af37] to-[#b88c1c] text-black font-bold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <Phone className="w-4 h-4 fill-black" />
                <span>Call Now: +92 343 8999282</span>
              </a>

              {/* Primary CTA 2: Get Directions (Google Maps for Meo Chowk, Manzoor Colony) */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-directions-cta"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-[#1a1410] border border-[#d4af37]/60 text-[#f5eccd] hover:bg-[#251d16] hover:border-[#d4af37] hover:text-white font-semibold text-sm sm:text-base tracking-wide transition-all"
              >
                <Navigation className="w-4 h-4 text-[#d4af37]" />
                <span>Get Directions (Meo Chowk)</span>
              </a>
            </motion.div>

            {/* Quick WhatsApp Link & Consultation Button */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#a8a29e] mb-8 pb-6 border-b border-[#241c15] w-full"
            >
              <a
                href="https://wa.me/923438999282?text=Hello%20Kashif%20Outdoor%20Furniture,%20I%20would%20like%20to%20inquire%20about%20the%204%20seater%20sofa%20set%20with%20table%20in%20rope%20and%20your%20outdoor%20collection."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#4ade80] hover:text-[#86efac] font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#22c55e]" />
                <span>Instant WhatsApp Inquiry (+92 343 8999282)</span>
              </a>
              <span className="text-[#57534e] hidden sm:inline">•</span>
              <button
                onClick={onOpenQuote}
                className="text-[#d4af37] hover:underline underline-offset-4 cursor-pointer font-medium"
              >
                Request Custom Outdoor Quote →
              </button>
            </motion.div>

            {/* 4 Trust Metrics */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span className="text-xs text-[#d6d3d1]">4.5 ★ Google Rated</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Ruler className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span className="text-xs text-[#d6d3d1]">Custom Rope &amp; Sizes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span className="text-xs text-[#d6d3d1]">All-Weather Built</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span className="text-xs text-[#d6d3d1]">Open · Closes 9 PM</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Luxury Card / Showcase Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Outer golden framing frame */}
            <div className="relative rounded-2xl overflow-hidden bg-[#16120e] border border-[#d4af37]/40 shadow-2xl p-2 sm:p-3">
              {/* Outdoor Hero Visual */}
              <div className="relative h-[340px] sm:h-[420px] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Kashif Outdoor Furniture 4 Seater Sofa Set with Table in Rope Karachi"
                  className="w-full h-full object-cover brightness-[0.88] hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a08] via-transparent to-black/30" />

                {/* Top overlay badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#d4af37]/40 flex items-center gap-2 text-xs text-[#fef08a]">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                  <span>Open Now • Closes 9:00 PM</span>
                </div>

                {/* Bottom Floating Info Pill */}
                <div className="absolute bottom-4 inset-x-4 bg-[#120e0b]/90 backdrop-blur-md rounded-lg p-4 border border-[#d4af37]/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                      Featured From Owner
                    </span>
                    <span className="text-[11px] text-[#a8a29e]">Manzoor Colony, Karachi</span>
                  </div>
                  <p className="text-sm font-medium text-white">
                    4 Seater Sofa Set with Table in Rope — UV-Protected Braided Weave &amp; Quick-Dry Cushions
                  </p>
                </div>
              </div>

              {/* Mini stats row below image */}
              <div className="grid grid-cols-3 divide-x divide-[#2e241c] py-3 text-center bg-[#130f0c] mt-2 rounded-lg">
                <div>
                  <div className="text-base sm:text-lg font-bold text-[#d4af37]">4.5 ★</div>
                  <div className="text-[10px] sm:text-xs text-[#a8a29e] uppercase tracking-wider">Google Rating</div>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-[#d4af37]">8 Core</div>
                  <div className="text-[10px] sm:text-xs text-[#a8a29e] uppercase tracking-wider">Outdoor Crafts</div>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-[#d4af37]">100%</div>
                  <div className="text-[10px] sm:text-xs text-[#a8a29e] uppercase tracking-wider">Custom Tailored</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
