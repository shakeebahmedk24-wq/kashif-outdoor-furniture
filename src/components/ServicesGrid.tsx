import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  MessageCircle, 
  Check, 
  ArrowUpRight, 
  Clock, 
  Layers,
  Phone
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesGridProps {
  onSelectService: (service: ServiceItem) => void;
}

export function ServicesGrid({ onSelectService }: ServicesGridProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'seating' | 'leisure' | 'custom'>('all');

  const filterService = (service: ServiceItem) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'seating') {
      return ['rope-sofa-sets', 'rattan-wicker-sets', 'outdoor-dining'].includes(service.id);
    }
    if (activeTab === 'leisure') {
      return ['garden-swings', 'poolside-loungers', 'pergolas-umbrellas'].includes(service.id);
    }
    if (activeTab === 'custom') {
      return ['rope-rattan-repair', 'terrace-cafe-fitouts', 'rope-sofa-sets'].includes(service.id);
    }
    return true;
  };

  const filteredServices = SERVICES_DATA.filter(filterService);

  return (
    <section id="services" className="relative py-16 md:py-24 bg-[#0c0a09] border-b border-[#292018]">
      {/* Subtle gold line accents */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1510] border border-[#d4af37]/40 text-[#f5eccd] text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Outdoor Craftsmanship Portfolio</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Our 8 Signature{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe59e] via-[#d4af37] to-[#aa8214]">
              Outdoor Furniture Lines
            </span>
          </h2>

          <p className="text-[#a8a29e] text-sm sm:text-base leading-relaxed">
            From our signature 4-seater sofa set with table in braided rope to rattan patio lounges, garden swings, poolside loungers, and complete outdoor terrace fit-outs across Karachi.
          </p>

          {/* Filter Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-8"
          >
            {[
              { id: 'all', label: 'All 8 Categories' },
              { id: 'seating', label: 'Rope & Rattan Sets' },
              { id: 'leisure', label: 'Swings, Pools & Shade' },
              { id: 'custom', label: 'Repair & Fit-Outs' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'bg-[#18130f] text-[#a8a29e] border border-[#2b221a] hover:text-white hover:border-[#d4af37]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* The 8 Services Cards Grid (2 items per row on mobile screens) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative rounded-xl sm:rounded-2xl bg-[#14100d] border border-[#282018] hover:border-[#d4af37] hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Image Banner with Zoom on Hover */}
              <div className="relative h-32 sm:h-52 w-full overflow-hidden bg-[#1f1914]">
                <img
                  src={service.image}
                  alt={`Kashif Outdoor Furniture ${service.title} in Karachi`}
                  className="w-full h-full object-cover object-center group-hover:scale-110 group-hover:brightness-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14100d] via-[#14100d]/40 to-transparent" />

                {/* Popular choice badge */}
                {service.popularChoice && (
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#d4af37] text-black text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded shadow-md">
                    Popular
                  </div>
                )}

                {/* Number index badge */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/70 backdrop-blur-sm border border-[#d4af37]/40 text-[#f5eccd] text-[10px] sm:text-[11px] font-mono px-1.5 sm:px-2 py-0.5 rounded">
                  0{SERVICES_DATA.findIndex(s => s.id === service.id) + 1}
                </div>

                {/* Turnaround Pill */}
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] text-[#fef08a] bg-black/70 backdrop-blur-md px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#d4af37]/30">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#d4af37]" />
                  <span className="truncate">{service.typicalDuration}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs sm:text-base md:text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors mb-1 sm:mb-2.5 line-clamp-2">
                    {service.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-[#a8a29e] leading-relaxed mb-2 sm:mb-4 line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Key Specifications Bullet List */}
                  <div className="hidden sm:block space-y-1.5 mb-5 border-t border-[#221a14] pt-3.5">
                    {service.features.slice(0, 3).map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-[11px] text-[#d6d3d1]">
                        <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 sm:pt-3 border-t border-[#221a14] flex items-center gap-1.5 sm:gap-2">
                  {/* WhatsApp Direct */}
                  <a
                    href={`https://wa.me/923438999282?text=${encodeURIComponent(
                      `Hello Kashif Outdoor Furniture, I am interested in your ${service.title}. Please share catalog photos & pricing.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 sm:py-2 px-1.5 sm:px-2 rounded-lg bg-[#192218] border border-[#22c55e]/30 text-[#4ade80] hover:bg-[#20301e] hover:border-[#22c55e] text-[10px] sm:text-xs font-semibold flex items-center justify-center gap-1 sm:gap-1.5 transition-colors"
                    title={`Inquire about ${service.title} on WhatsApp`}
                  >
                    <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#22c55e] shrink-0" />
                    <span className="truncate">WhatsApp</span>
                  </a>

                  {/* Open Quote Calculator */}
                  <button
                    onClick={() => onSelectService(service)}
                    className="p-1.5 sm:p-2 rounded-lg bg-[#201913] border border-[#d4af37]/40 text-[#f5eccd] hover:bg-[#d4af37] hover:text-black transition-all shrink-0"
                    title="Get Free Estimation"
                    aria-label={`Get quote for ${service.title}`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              {/* Bottom gold metallic edge */}
              <div className="h-[2px] w-full bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#d4af37] group-hover:to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner with Tap-to-Call */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#17110c] via-[#221811] to-[#17110c] border border-[#d4af37]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Looking for our 4-seater rope sofa set or a custom patio package?
              </h4>
              <p className="text-xs sm:text-sm text-[#a8a29e]">
                Visit our market workshop at Meo Chowk, Manzoor Colony or call us directly for custom colors, cushion fabrics, and Karachi delivery.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+923438999282"
              className="px-5 py-2.5 rounded-lg bg-[#d4af37] text-black text-xs sm:text-sm font-bold tracking-wider uppercase hover:brightness-110 flex items-center gap-2 shadow-lg active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>Call: +92 343 8999282</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
