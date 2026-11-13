import { motion } from 'motion/react';
import { Phone, MapPin, Clock, ExternalLink, ArrowUp, Compass } from 'lucide-react';
import { BrandLogo, PakistanStripe } from './BrandLogo';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Meo+Chowk+Maryam+Masjid+Manzoor+Colony+Sector+C+Karachi+Pakistan';

  return (
    <footer className="bg-[#080605] border-t border-[#241b14] text-[#a8a29e] relative overflow-hidden">
      
      {/* Pakistan Accent Stripe */}
      <PakistanStripe className="h-1.5" />

      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="md" />
            
            <p className="text-xs sm:text-sm text-[#8c857f] leading-relaxed pr-4">
              Handcrafted Outdoor Rope Sofa Sets, Rattan Lounges, Garden Swings &amp; Patio Dining. Serving homeowners, farmhouses, and outdoor cafés across Karachi from our Manzoor Colony market showroom.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block mb-1.5">
                Featured Owner Showcase
              </span>
              <span className="text-sm font-medium text-white block">
                4 Seater Sofa Set with Table in Rope
              </span>
            </div>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-[#78716c] block mb-1.5">
                Google Rating
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#17120e] border border-[#2b221a] text-xs text-white font-semibold">
                <span className="text-[#d4af37]">4.5 ★</span>
                <span className="text-[#a8a29e] font-normal">Market • Manzoor Colony</span>
              </div>
            </div>
          </div>

          {/* Col 2: The 8 Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest text-[#d4af37]">
              Outdoor Collections
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                'Rope Sofa Sets & Lounge Sets',
                'Rattan & Wicker Patio Sets',
                'Garden Swings & Egg Chairs',
                'Outdoor Dining & Bistro Sets',
                'Poolside Loungers & Daybeds',
                'Gazebos, Umbrellas & Shade',
                'Rope Re-Weaving & Cushion Repair',
                'Terrace, Lawn & Café Fit-Outs',
              ].map((srv) => (
                <li key={srv}>
                  <a
                    href="#services"
                    className="text-[#9ca3af] hover:text-[#d4af37] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#d4af37]/60" />
                    <span>{srv}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest text-[#d4af37]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Collections', href: '#services' },
                { name: 'Featured Projects', href: '#portfolio' },
                { name: 'Why Choose Us', href: '#why-us' },
                { name: 'Google Reviews', href: '#reviews' },
                { name: 'Contact & Map', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#9ca3af] hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest text-[#d4af37]">
              Direct Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#9ca3af]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Meo Chowk, Maryam Masjid, Manzoor Colony Sector C, Manzoor Colony, Karachi, Pakistan</span>
              </div>

              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>Plus Code: V32P+3X Manzoor Colony</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <a href="tel:+923438999282" className="text-white hover:text-[#d4af37]">
                  +92 343 8999282
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>Open · Closes 9:00 PM</span>
              </div>

              <div className="pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#17120e] border border-[#d4af37]/30 text-[#f5eccd] hover:bg-[#d4af37] hover:text-black font-semibold transition-all text-[11px]"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 mt-12 border-t border-[#1d1611] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716c]">
          <div>
            &copy; {new Date().getFullYear()} Kashif Outdoor Furniture. All rights reserved. Karachi, Pakistan.
          </div>

          <div className="flex items-center gap-6">
            <span>Meo Chowk, Manzoor Colony Sector C</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#d4af37] hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
