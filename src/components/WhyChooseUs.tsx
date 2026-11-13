import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BadgePercent, 
  Ruler, 
  Truck, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  PhoneCall,
  Flame,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenQuote: () => void;
}

export function WhyChooseUs({ onOpenQuote }: WhyChooseUsProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const pillars = [
    {
      icon: Sparkles,
      title: 'UV & Weatherproof Braided Rope',
      desc: 'Our rope sofa sets—including our popular 4-seater rope set with table—are woven using outdoor-grade UV-stabilized cord built for Karachi sunlight and sea humidity.'
    },
    {
      icon: BadgePercent,
      title: 'Direct Market Workshop Pricing',
      desc: 'Order straight from our Manzoor Colony workshop with zero middleman markups, giving you heavy-gauge frames and premium cushions at honest factory rates.'
    },
    {
      icon: Ruler,
      title: 'Custom Sizes, Weaves & Colors',
      desc: 'Tailor seating dimensions, rope color combinations, table tops, and water-repellent cushion fabrics to fit your exact lawn, balcony, or rooftop layout.'
    },
    {
      icon: Truck,
      title: 'Safe Karachi & Farmhouse Delivery',
      desc: 'Careful door-to-door delivery and placement across DHA, Clifton, PECHS, Gulshan, Bahria Town, and Super Highway farmhouses.'
    },
    {
      icon: ShieldCheck,
      title: 'Rust-Proof Frame Construction',
      desc: 'Every sofa, swing, and dining frame is welded and powder-coated to prevent corrosion, paired with high-density quick-dry outdoor foam.'
    },
    {
      icon: Clock,
      title: 'Open Daily Until 9:00 PM',
      desc: 'Convenient showroom hours at Meo Chowk, Manzoor Colony Sector C so you can inspect rope weaves, test cushion comfort, and place custom orders anytime.'
    }
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? pillars.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === pillars.length - 1 ? 0 : prev + 1));
  };

  const CurrentIcon = pillars[activeSlide].icon;

  return (
    <section id="why-us" className="py-14 md:py-24 bg-[#0d0a08] border-b border-[#292018] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1611] border border-[#d4af37]/40 text-[#f5eccd] text-xs font-semibold tracking-widest uppercase mb-4">
            <Flame className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>The Kashif Outdoor Advantage</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Why Homeowners &amp; Cafés Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe59e] via-[#d4af37] to-[#aa8214]">
              Kashif Outdoor Furniture
            </span>
          </h2>

          <p className="text-[#a8a29e] text-xs sm:text-base leading-relaxed">
            From our workshop in Manzoor Colony Sector C to rooftops and lawns across Karachi, we combine durable outdoor engineering with refined woven aesthetics.
          </p>
        </motion.div>

        {/* MOBILE RESPONSIVE SLIDER */}
        <div className="block md:hidden">
          <div className="relative rounded-2xl bg-[#14100c] border border-[#d4af37]/50 p-6 shadow-[0_4px_30px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8c6b12] via-[#d4af37] to-[#8c6b12]" />

            {/* Slider Top Metadata */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] font-mono font-bold text-[#d4af37] bg-[#221912] px-2.5 py-1 rounded border border-[#d4af37]/30">
                PILLAR 0{activeSlide + 1} / 0{pillars.length}
              </span>

              {/* Slider Arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-lg bg-[#1e1712] border border-[#3d2f22] text-[#d4af37] flex items-center justify-center active:scale-90 transition-transform"
                  aria-label="Previous advantage"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-lg bg-[#1e1712] border border-[#3d2f22] text-[#d4af37] flex items-center justify-center active:scale-90 transition-transform"
                  aria-label="Next advantage"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Animated Slide Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-[170px] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#271d15] to-[#17110c] border border-[#d4af37]/50 flex items-center justify-center mb-4 text-[#d4af37] shadow-inner">
                    <CurrentIcon className="w-6 h-6 text-[#d4af37]" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {pillars[activeSlide].title}
                  </h3>

                  <p className="text-xs text-[#a8a29e] leading-relaxed">
                    {pillars[activeSlide].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="flex items-center justify-center gap-1.5 pt-4 mt-4 border-t border-[#231b14]">
              {pillars.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    activeSlide === idx 
                      ? 'w-6 bg-[#d4af37]' 
                      : 'w-2 bg-[#33271d] hover:bg-[#d4af37]/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP & TABLET: 6 Grid Pillars */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-2xl bg-[#14100c] border border-[#282018] hover:border-[#d4af37]/60 hover:bg-[#19130e] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#201812] border border-[#d4af37]/40 flex items-center justify-center mb-5 group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                  <IconComp className="w-6 h-6 text-[#d4af37] group-hover:text-black transition-colors" />
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#a8a29e] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Consultation Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 md:mt-12 text-center"
        >
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#1c1510] border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg active:scale-95"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Request Custom Outdoor Quote Today</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
