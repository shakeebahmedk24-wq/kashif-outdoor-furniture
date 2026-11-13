import { motion } from 'motion/react';
import { 
  MapPin, 
  Sparkles, 
  Award, 
  ArrowRight,
  Phone,
  MessageCircle
} from 'lucide-react';
import { KASHIF_LOGO_URL } from './BrandLogo';

interface AboutUsProps {
  onOpenQuote: () => void;
}

export function AboutUs({ onOpenQuote }: AboutUsProps) {
  const whatsappUrl =
    'https://wa.me/923438999282?text=' +
    encodeURIComponent('Hello Kashif Outdoor Furniture, I would like to inquire about custom outdoor rope & patio furniture.');

  return (
    <section id="about" className="relative py-16 md:py-24 bg-[#0f0c0a] border-b border-[#241c15] overflow-hidden">
      {/* Decorative subtle gold vertical divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Layout: Image on the Left, Text on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Outdoor Craftsmanship Image Proportioned to Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/35 bg-[#14100c] shadow-[0_15px_35px_rgba(0,0,0,0.5)] group">
              
              {/* Luxury gold corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#d4af37] z-10 pointer-events-none" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#d4af37] z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#d4af37] z-10 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#d4af37] z-10 pointer-events-none" />

              {/* Main Outdoor Furniture Craftsmanship Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] max-h-[390px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
                  alt="Kashif Outdoor Furniture Handcrafted Rope & Patio Furniture in Manzoor Colony, Karachi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/90 via-[#0c0a09]/20 to-transparent" />
              </div>

              {/* Top Pill Overlay */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#120e0b]/90 backdrop-blur-md border border-[#d4af37]/50 text-[#f5eccd] text-[10px] font-semibold tracking-wider uppercase shadow-md">
                  <MapPin className="w-3 h-3 text-[#d4af37]" />
                  <span>Meo Chowk, Manzoor Colony</span>
                </div>
              </div>

              {/* Bottom Compact Accolade Card */}
              <div className="absolute bottom-3 left-3 right-3 z-10 p-2.5 sm:p-3 rounded-xl bg-[#14100c]/90 backdrop-blur-md border border-[#d4af37]/35 shadow-lg">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37] shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-white text-xs font-bold block leading-snug">4.5 ★ Verified Market Workshop</span>
                      <span className="text-[#a8a29e] text-[10px] block leading-tight">Direct Workshop • No Middlemen</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[#d4af37] font-bold text-[11px] block">100% Weatherproof</span>
                    <span className="text-[#8c857f] text-[9px] block">Rope &amp; Rattan Craft</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: Brand Story, Craftsmanship Values & Liaison Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Top Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1510] border border-[#d4af37]/40 text-[#f5eccd] text-xs font-semibold tracking-widest uppercase mb-4 self-start">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Outdoor Furniture Market • Karachi</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-5">
              Crafting Karachi’s Finest{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe8a3] via-[#d4af37] to-[#aa8214]">
                Rope &amp; Patio Living Spaces
              </span>
            </h2>

            {/* Narrative Paragraph */}
            <p className="text-[#c7bfb8] text-sm sm:text-base leading-relaxed mb-6">
              Located near <strong className="text-white">Meo Chowk, Maryam Masjid, Manzoor Colony Sector C, Karachi</strong> (Plus Code: <strong className="text-[#d4af37]">V32P+3X</strong>), Kashif Outdoor Furniture specializes in durable, hand-woven outdoor furniture crafted for Pakistani gardens, terraces, balconies, farmhouses, and open-air cafés.
            </p>
            <p className="text-[#a8a29e] text-xs sm:text-sm leading-relaxed mb-8">
              From our signature <strong className="text-[#f5eccd]">4-seater sofa set with table in rope</strong> to custom PE rattan lounges, hanging swings, and poolside loungers, every frame is reinforced against rust and woven with UV-protected outdoor cord designed to withstand Karachi’s sun and coastal air.
            </p>

            {/* Kashif Outdoor Furniture Direct Showroom & Fast Action Card */}
            <div className="p-4 rounded-xl bg-[#14100c] border border-[#d4af37]/40 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                <div className="flex items-center gap-3">
                  <div className="h-11 w-20 rounded-xl bg-[#1a1410] border border-[#d4af37]/50 flex items-center justify-center p-1.5 shadow-md shrink-0">
                    <img
                      src={KASHIF_LOGO_URL}
                      alt="Kashif Outdoor Furniture"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>Kashif Outdoor Furniture</span>
                      <span className="px-1.5 py-0.5 rounded bg-[#2a2016] text-[#d4af37] text-[10px] font-semibold">Open · Closes 9 PM</span>
                    </div>
                    <div className="text-xs text-[#a8a29e]">Direct Showroom &amp; Workshop • +92 343 8999282</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="tel:+923438999282"
                    className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b88c1c] text-black text-xs font-bold flex items-center justify-center gap-1.5 hover:brightness-110 active:scale-95 transition-all shadow-md"
                  >
                    <Phone className="w-3.5 h-3.5 fill-black" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-lg bg-[#1a281b] border border-[#22c55e]/40 hover:border-[#22c55e] text-[#4ade80] text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#22c55e]" />
                    <span className="hidden xs:inline">WhatsApp</span>
                  </a>

                  <button
                    onClick={onOpenQuote}
                    className="px-3.5 py-2 rounded-lg bg-[#241c15] text-[#d4af37] hover:text-white border border-[#2e241c] hover:border-[#d4af37]/50 text-xs font-bold flex items-center gap-1 transition-all"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
