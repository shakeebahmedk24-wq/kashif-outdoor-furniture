import { motion } from 'motion/react';
import { Star, StarHalf, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviewsData';

export function ReviewsSection() {
  // For the infinite marquee, duplicate the items so the track repeats seamlessly
  const marqueeReviews = [...REVIEWS_DATA, ...REVIEWS_DATA];

  return (
    <section id="reviews" className="relative py-16 md:py-24 bg-[#0d0a08] border-b border-[#292018] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1611] border border-[#d4af37]/40 text-[#f5eccd] text-xs font-semibold tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Verified Google Maps Feedback</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Trusted by Homeowners &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe59e] via-[#d4af37] to-[#aa8214]">
              Outdoor Spaces in Karachi
            </span>
          </h2>

          <p className="text-[#a8a29e] text-sm sm:text-base leading-relaxed mb-6">
            Read verified reviews from customers who visited Kashif Outdoor Furniture at Meo Chowk, Manzoor Colony for durable rope sets and patio craftsmanship.
          </p>

          {/* Rating Summary Pill matching Google Maps 4.5 rating */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-[#17120e] border border-[#2e241c] shadow-lg">
            <div className="flex items-center gap-1 text-[#eab308]">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
              ))}
              <StarHalf className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
            </div>
            <span className="text-sm font-bold text-white">4.5 / 5.0</span>
            <span className="text-xs text-[#78716c]">• Google Maps Market Rating</span>
          </div>
        </motion.div>
      </div>

      {/* MOBILE SCROLLING MARQUEE */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="block md:hidden w-full overflow-hidden relative py-4"
      >
        {/* Subtle gradient fades on edges */}
        <div className="absolute left-0 inset-y-0 w-8 bg-gradient-to-r from-[#0d0a08] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-8 bg-gradient-to-l from-[#0d0a08] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-marquee flex gap-4 px-4">
          {marqueeReviews.map((review, index) => (
            <div
              key={`${review.id}-mobile-${index}`}
              className="w-[290px] shrink-0 p-5 rounded-2xl bg-[#14100c] border border-[#2d241c] shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Stars and verified badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#4ade80] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                {/* Service Tag */}
                <div className="text-[11px] text-[#d4af37] font-medium mb-2.5">
                  {review.service}
                </div>

                {/* Comment */}
                <p className="text-xs text-[#d6d3d1] italic leading-relaxed mb-4 line-clamp-4">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Location */}
              <div className="pt-3 border-t border-[#231b15] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">{review.author}</div>
                  <div className="text-[10px] text-[#8c857f] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5 text-[#d4af37]" />
                    <span>{review.location}</span>
                  </div>
                </div>
                <span className="text-[10px] text-[#78716c]">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-3 text-[11px] text-[#78716c]">
          Swipe or tap any card to pause
        </div>
      </motion.div>

      {/* DESKTOP & TABLET: Elegant Grid with Micro-Interactions */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-2xl bg-[#14100c] border border-[#2b221a] hover:border-[#d4af37]/60 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#22c55e] flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Client
                  </span>
                </div>

                <div className="inline-block text-xs font-semibold text-[#d4af37] bg-[#211a13] px-2.5 py-1 rounded mb-3 border border-[#3b2d20]">
                  {review.service}
                </div>

                <p className="text-sm text-[#d6d3d1] italic leading-relaxed mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#231b15] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#d4af37] transition-colors">
                    {review.author}
                  </h4>
                  <div className="text-xs text-[#a8a29e] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#d4af37]" />
                    <span>{review.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#78716c] block">{review.date}</span>
                  <span className="text-[10px] text-[#d4af37]/80 block">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
