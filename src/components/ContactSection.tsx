import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Navigation, 
  User, 
  Building, 
  Sparkles,
  ExternalLink,
  ChevronDown,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ContactFormData } from '../types';

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: 'Rope Sofa Sets & Lounge Sets',
    propertyType: 'Home Lawn / Garden',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Meo+Chowk+Maryam+Masjid+Manzoor+Colony+Sector+C+Karachi+Pakistan';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `*New Website Inquiry - Kashif Outdoor Furniture*\nName: ${formData.fullName || 'Client'}\nPhone: ${formData.phone || 'Not provided'}\nCategory: ${formData.service}\nSpace: ${formData.propertyType}\nMessage: ${formData.message || 'Please share pricing and catalog options for outdoor furniture.'}`;
    window.open(`https://wa.me/923438999282?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0a0807] relative">
      {/* Decorative Top Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1611] border border-[#d4af37]/40 text-[#f5eccd] text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Visit Our Karachi Market Showroom</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Visit Manzoor Colony or{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe59e] via-[#d4af37] to-[#aa8214]">
              Order via WhatsApp
            </span>
          </h2>

          <p className="text-[#a8a29e] text-sm sm:text-base leading-relaxed">
            Located at Meo Chowk, Maryam Masjid, Manzoor Colony Sector C, Karachi. Call or message us for our 4-seater rope sofa set with table, custom sizes, and delivery across Karachi.
          </p>
        </motion.div>

        {/* Main Grid: Contact Info Cards & Quick Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Details & Tap-to-Call Buttons (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-5"
          >
            
            {/* Showroom Direct Contact Card */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#14100c] border border-[#d4af37]/40 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#d4af37]" />
              
              <div className="flex items-center justify-between mb-3.5 gap-2">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#d4af37] bg-[#221810] px-2.5 py-1 rounded border border-[#d4af37]/20">
                  Direct Showroom Line
                </span>
                <span className="text-xs text-[#4ade80] flex items-center gap-1.5 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
                  Open · Closes 9 PM
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-wide uppercase">KASHIF OUTDOOR FURNITURE</h3>
              <p className="text-xs text-[#d4af37] font-medium mb-4">Outdoor Furniture Market • Manzoor Colony, Karachi</p>

              {/* Tap-to-Call & WhatsApp Actions */}
              <div className="space-y-2.5">
                {/* Mobile / Direct Line */}
                <a
                  href="tel:+923438999282"
                  className="w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#b38e1b] text-black font-bold shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-between gap-1.5"
                  title="Call Kashif Outdoor Furniture directly"
                >
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 pr-1">
                    <div className="w-8 h-8 rounded-lg bg-black/15 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 fill-black text-black" />
                    </div>
                    <div className="text-left min-w-0">
                      <span className="block text-[9px] sm:text-[10px] uppercase font-bold tracking-wider opacity-85 leading-tight">Call Showroom</span>
                      <span className="text-xs sm:text-sm font-extrabold tracking-tight whitespace-nowrap leading-tight">+92 343 8999282</span>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-black text-[#d4af37] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shrink-0 whitespace-nowrap shadow-sm">
                    Call Now
                  </span>
                </a>

                {/* Direct WhatsApp Chat */}
                <a
                  href="https://wa.me/923438999282?text=Hello%20Kashif%20Outdoor%20Furniture,%20I%20would%20like%20to%20see%20photos%20and%20pricing%20for%20the%204%20seater%20sofa%20set%20with%20table%20in%20rope."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 sm:px-4 rounded-xl bg-[#182819] border border-[#22c55e]/40 hover:border-[#22c55e] text-[#4ade80] transition-all flex items-center justify-between gap-1.5"
                  title="Start WhatsApp Inquiry"
                >
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 pr-1">
                    <div className="w-8 h-8 rounded-lg bg-[#143217] flex items-center justify-center shrink-0">
                      <MessageCircle className="w-3.5 h-3.5 text-[#22c55e]" />
                    </div>
                    <div className="text-left min-w-0">
                      <span className="block text-[9px] sm:text-[10px] text-[#86efac]/80 uppercase font-semibold leading-tight">WhatsApp Catalog</span>
                      <span className="text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap text-[#4ade80] leading-tight">+92 343 8999282</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium text-[#22c55e] bg-[#173819] border border-[#22c55e]/40 px-2 py-0.5 rounded-md shrink-0 whitespace-nowrap">
                    Chat
                  </span>
                </a>
              </div>
            </div>

            {/* Location & Hours Card */}
            <div className="p-6 rounded-2xl bg-[#14100c] border border-[#2d241c] space-y-4">
              
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#201812] border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Showroom &amp; Market Address</h4>
                  <p className="text-xs sm:text-sm text-[#d6d3d1] mt-0.5 leading-relaxed">
                    Meo Chowk, Maryam Masjid, Manzoor Colony Sector C, Manzoor Colony, Karachi, Pakistan
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:underline mt-1.5"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Google Maps Plus Code */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-[#231b15]">
                <div className="w-9 h-9 rounded-lg bg-[#201812] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Google Maps Plus Code</h4>
                  <p className="text-xs sm:text-sm text-[#d6d3d1] mt-0.5 font-mono">
                    V32P+3X Manzoor Colony, Karachi, Pakistan
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-[#231b15]">
                <div className="w-9 h-9 rounded-lg bg-[#201812] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div className="text-xs w-full">
                  <h4 className="font-bold text-white uppercase tracking-wider">Operating Hours</h4>
                  <div className="mt-1 space-y-0.5 text-[#a8a29e]">
                    <div className="flex justify-between gap-4">
                      <span>Status:</span>
                      <span className="text-[#4ade80] font-medium">Open · Closes 9:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Peak Visiting Hours (Fridays):</span>
                      <span className="text-white font-medium">12:00 PM – 9:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Map Directions Card */}
            <div className="p-4 rounded-xl bg-[#120e0b] border border-[#2e241c] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Navigation className="w-5 h-5 text-[#d4af37]" />
                <div className="text-xs">
                  <span className="font-bold text-white block">Easy Access Near Maryam Masjid</span>
                  <span className="text-[#8c857f]">Meo Chowk, Manzoor Colony Sector C</span>
                </div>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#231a13] border border-[#d4af37]/40 text-[#f5eccd] hover:text-white text-xs font-medium"
              >
                Directions
              </a>
            </div>

          </motion.div>

          {/* Right Column: Quick Enquiry Form (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-[#14100c] border border-[#2d241c] shadow-2xl relative">
              
              <div className="mb-5 sm:mb-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#201812] border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Direct Market Workshop</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Send a Quick Outdoor Furniture Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#a8a29e] mt-1 leading-relaxed">
                  Fill out your requirements below. Our workshop team will respond with rope colors, cushion options, and pricing.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 px-4 sm:px-6 text-center bg-[#17110c] rounded-xl border border-[#d4af37]/40"
                >
                  <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mx-auto mb-4 text-[#d4af37]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Enquiry Received!</h4>
                  <p className="text-xs sm:text-sm text-[#c7bfb8] max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, {formData.fullName || 'valued client'}. Kashif Outdoor Furniture has noted your interest in <span className="text-[#d4af37] font-semibold">{formData.service}</span>.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto px-5 py-3 rounded-lg bg-[#1b2b1d] border border-[#22c55e] text-[#4ade80] font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#233825] transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward to WhatsApp for Instant Response</span>
                    </button>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          service: 'Rope Sofa Sets & Lounge Sets',
                          propertyType: 'Home Lawn / Garden',
                          message: ''
                        });
                      }}
                      className="w-full sm:w-auto px-4 py-3 rounded-lg bg-[#241c15] text-xs text-[#a8a29e] hover:text-white transition-all"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#d6d3d1] uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-[#d4af37]">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#78716c] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g., Bilal Ahmed"
                          className="w-full min-h-[44px] bg-[#1a1410] border border-[#2f251d] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-[#57534e] outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-[#d6d3d1] uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp <span className="text-[#d4af37]">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#78716c] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+92 3XX XXXXXXX"
                          className="w-full min-h-[44px] bg-[#1a1410] border border-[#2f251d] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-[#57534e] outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Area / Email & Space Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#d6d3d1] uppercase tracking-wider mb-1.5">
                        Area / Email <span className="text-[#78716c] text-[10px] normal-case">(Optional)</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#78716c] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g., DHA Phase 6 or email"
                          className="w-full min-h-[44px] bg-[#1a1410] border border-[#2f251d] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-[#57534e] outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Space Type */}
                    <div>
                      <label className="block text-xs font-semibold text-[#d6d3d1] uppercase tracking-wider mb-1.5">
                        Outdoor Space Type
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-[#78716c] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          className="w-full min-h-[44px] bg-[#1a1410] border border-[#2f251d] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg pl-10 pr-9 py-2.5 text-sm text-white outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="Home Lawn / Garden">Home Lawn / Garden</option>
                          <option value="Rooftop / Terrace">Rooftop / Terrace</option>
                          <option value="Apartment Balcony">Apartment Balcony</option>
                          <option value="Farmhouse / Poolside">Farmhouse / Poolside</option>
                          <option value="Café / Restaurant Courtyard">Café / Restaurant Courtyard</option>
                          <option value="Other Outdoor Space">Other Outdoor Space</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#78716c] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-[#d6d3d1] uppercase tracking-wider mb-1.5">
                      Furniture Category <span className="text-[#d4af37]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full min-h-[44px] bg-[#1a1410] border border-[#2f251d] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg px-3.5 pr-9 py-2.5 text-sm text-white outline-none transition-all cursor-pointer appearance-none"
                      >
                        <option value="4 Seater Sofa Set with Table in Rope">4 Seater Sofa Set with Table in Rope (Featured)</option>
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                        <option value="Complete Outdoor Fit-Out">Complete Outdoor Fit-Out</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#78716c] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#d6d3d1] uppercase tracking-wider mb-1.5">
                      Preferences / Colors / Seating Capacity
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g., Interested in the 4 seater sofa set with table in rope in beige/black weave for a DHA terrace..."
                      className="w-full bg-[#1a1410] border border-[#2f251d] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg p-3 text-sm text-white placeholder-[#57534e] outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button & Fast WhatsApp Option */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:flex-1 min-h-[48px] py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#b38e1b] text-black font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 fill-black shrink-0" />
                      <span>{loading ? 'Submitting...' : 'Submit Fast Enquiry'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto min-h-[48px] py-3.5 px-5 rounded-lg bg-[#1a281b] border border-[#22c55e]/40 hover:border-[#22c55e] text-[#4ade80] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                      title="Send directly to Kashif Outdoor Furniture via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 text-[#22c55e] shrink-0" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>

                  {/* Privacy & Reassurance Badge */}
                  <div className="pt-3 border-t border-[#231b14] flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] text-[#8c857f]">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Custom Color Options</span>
                    </span>
                    <span className="hidden xs:inline text-[#3d3228]">•</span>
                    <span>Direct Workshop Rates</span>
                    <span className="hidden xs:inline text-[#3d3228]">•</span>
                    <span>Open Daily Until 9 PM</span>
                  </div>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
