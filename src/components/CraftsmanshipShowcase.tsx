import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, MapPin, ZoomIn, X, Phone, MessageCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PortfolioItem } from '../types';

export function CraftsmanshipShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Rope Sofa Sets', 'Rattan & Wicker', 'Swings & Loungers', 'Terrace & Café Fit-Outs'];

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-[#0a0807] border-b border-[#261f18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18130f] border border-[#d4af37]/40 text-[#f5eccd] text-xs font-semibold tracking-widest uppercase mb-3">
              <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Karachi Outdoor Installations</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Craft &amp; Recent Projects
            </h2>
            <p className="text-sm text-[#a8a29e] mt-2 max-w-xl">
              Explore our signature 4-seater rope sofa set with table, custom rattan terraces, hanging swings, and lawn dining sets crafted in Manzoor Colony, Karachi.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#d4af37] text-black font-bold shadow-md'
                    : 'bg-[#16110d] text-[#a8a29e] border border-[#2b221a] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (idx % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveModalItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#14100c] border border-[#2d231a] cursor-pointer shadow-lg hover:border-[#d4af37] transition-all"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-[#d4af37]/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#d4af37]">
                      {item.category}
                    </span>
                    <span className="text-[10px] text-[#a8a29e] flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-[#d4af37]" />
                      {item.location}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md overflow-y-auto overflow-x-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative max-w-2xl w-full bg-[#14100c] rounded-2xl border border-[#d4af37]/40 overflow-hidden shadow-2xl my-auto max-h-[92dvh] flex flex-col"
            >
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/70 text-white hover:text-[#d4af37] border border-white/20 active:scale-95 transition-all"
                aria-label="Close Preview"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Responsive Scrollable Container */}
              <div className="overflow-y-auto overflow-x-hidden flex-1">
                <div className="h-48 xs:h-56 sm:h-72 md:h-80 w-full relative shrink-0 bg-black">
                  <img
                    src={activeModalItem.image}
                    alt={activeModalItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14100c] via-transparent to-black/30 pointer-events-none" />
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-2">
                    <span>{activeModalItem.category}</span>
                    <span>•</span>
                    <span>{activeModalItem.location}</span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 leading-tight">
                    {activeModalItem.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#d6d3d1] leading-relaxed mb-5">
                    {activeModalItem.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                    <a
                      href="tel:+923438999282"
                      className="flex-1 py-3 px-4 rounded-lg bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 transition-all shadow-md"
                    >
                      <Phone className="w-3.5 h-3.5 fill-black" />
                      <span>Call About This Set</span>
                    </a>

                    <a
                      href={`https://wa.me/923438999282?text=${encodeURIComponent(
                        `Hello Kashif Outdoor Furniture, I saw "${activeModalItem.title}" in your gallery and would like a price quote.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-lg bg-[#192b1b] border border-[#22c55e]/40 text-[#4ade80] text-xs font-bold text-center flex items-center justify-center gap-2 hover:bg-[#203822] active:scale-98 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#22c55e]" />
                      <span>WhatsApp Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
