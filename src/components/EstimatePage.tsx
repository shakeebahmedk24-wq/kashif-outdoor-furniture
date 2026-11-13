import { useState, FormEvent, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Building, 
  User, 
  Send,
  ChevronDown
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';
import { BrandLogo } from './BrandLogo';

interface EstimatePageProps {
  onBack: () => void;
  initialService?: ServiceItem | null;
}

export function EstimatePage({ onBack, initialService }: EstimatePageProps) {
  const [selectedService, setSelectedService] = useState<string>(
    initialService ? initialService.title : '4 Seater Sofa Set with Table in Rope'
  );
  const [propertyType, setPropertyType] = useState<string>('Home Lawn / Garden');
  const [scopeSize, setScopeSize] = useState<string>('4 Seater Set + Table');
  const [weatherproofCushions, setWeatherproofCushions] = useState<boolean>(true);
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientArea, setClientArea] = useState<string>('');
  const [projectNotes, setProjectNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleWhatsAppSend = () => {
    const text = `*Kashif Outdoor Furniture - Fast Quote Request*\n` +
      `Item / Category: ${selectedService}\n` +
      `Outdoor Space: ${propertyType}\n` +
      `Seating / Scope: ${scopeSize}\n` +
      `Waterproof Cushions: ${weatherproofCushions ? 'Yes' : 'No'}\n` +
      `Client Name: ${clientName || 'Valued Client'}\n` +
      `Phone: ${clientPhone || 'Not provided'}\n` +
      (clientArea ? `Karachi Area: ${clientArea}\n` : '') +
      (projectNotes ? `Notes: ${projectNotes}\n` : '') +
      `Location: Manzoor Colony, Karachi`;

    window.open(`https://wa.me/923438999282?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 450);
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-[#e7e5e4] flex flex-col selection:bg-[#d4af37]/30 selection:text-[#fef08a]">
      {/* Sticky Mobile Page Top Bar */}
      <header className="sticky top-0 z-40 bg-[#120f0d]/95 backdrop-blur-md border-b border-[#2a221b] px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1c1611] border border-[#d4af37]/30 text-[#f5eccd] hover:text-white text-xs font-semibold active:scale-95 transition-all"
            aria-label="Back to Kashif Outdoor Furniture Home"
          >
            <ArrowLeft className="w-4 h-4 text-[#d4af37]" />
            <span>Home</span>
          </button>

          <BrandLogo size="sm" showSubtitle={false} />

          <a
            href="tel:+923438999282"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b38e1b] text-black font-bold text-xs shadow-md active:scale-95 transition-all"
            aria-label="Direct Call"
          >
            <Phone className="w-3.5 h-3.5 fill-black" />
            <span className="hidden xs:inline">Call</span>
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-2xl w-full mx-auto px-4 py-6 sm:py-10">
        
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#14100c] border border-[#d4af37]/40 shadow-2xl text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] flex items-center justify-center mx-auto mb-5 shadow-lg">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#201812] border border-[#d4af37]/40 text-[#d4af37] text-[11px] font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Quote Request Received</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
              Thank You, {clientName || 'Valued Client'}!
            </h2>

            <p className="text-sm text-[#c7bfb8] leading-relaxed max-w-md mx-auto mb-6">
              Kashif Outdoor Furniture has received your request regarding <span className="text-[#d4af37] font-semibold">{selectedService}</span> for your <span className="text-white font-medium">{propertyType}</span>. We are preparing pricing options and rope/cushion swatches.
            </p>

            {/* Fast WhatsApp Forward Card */}
            <div className="p-4 rounded-xl bg-[#172517] border border-[#22c55e]/50 mb-6 text-left">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-5 h-5 text-[#22c55e]" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Fastest Direct Response</span>
              </div>
              <p className="text-xs text-[#a3e635]/90 mb-3">
                Forward your requirements directly to Kashif Outdoor Furniture on WhatsApp (+92 343 8999282) for instant photos and pricing.
              </p>
              <button
                onClick={handleWhatsAppSend}
                className="w-full py-3 px-4 rounded-lg bg-[#22c55e] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#16a34a] active:scale-98 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-black text-black" />
                <span>Open in WhatsApp Now</span>
              </button>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setClientName('');
                  setClientPhone('');
                  setProjectNotes('');
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-lg bg-[#201913] border border-[#2f251d] text-xs font-semibold text-[#a8a29e] hover:text-white transition-all"
              >
                Submit Another Request
              </button>

              <button
                onClick={onBack}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b38e1b] text-black font-bold text-xs uppercase tracking-wider transition-all active:scale-95"
              >
                Return to Home
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="p-5 sm:p-8 rounded-2xl bg-[#14100c] border border-[#2d241c] shadow-2xl relative overflow-hidden">
            {/* Top gold accent line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#b38e1b] via-[#d4af37] to-[#b38e1b]" />

            {/* Header Section */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#201812] border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-bold uppercase tracking-wider mb-2.5">
                <Sparkles className="w-3 h-3" />
                <span>Direct Workshop Estimate</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Request a Tailored Quotation
              </h1>
              
              <p className="text-xs sm:text-sm text-[#a8a29e] mt-1.5 leading-relaxed">
                Receive direct Manzoor Colony workshop pricing for rope sofa sets, rattan lounges, swings, and custom outdoor orders across Karachi.
              </p>
            </div>

            {/* The Responsive Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#d6d3d1] uppercase tracking-wider mb-1.5">
                  1. Select Furniture Category <span className="text-[#d4af37]">*</span>
                </label>
                <div className="relative">
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full min-h-[46px] bg-[#1a1410] border border-[#2f251d] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg pl-3.5 pr-9 py-2.5 text-sm text-white outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="4 Seater Sofa Set with Table in Rope">4 Seater Sofa Set with Table in Rope (Featured)</option>
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="Complete Lawn / Farmhouse Package">Complete Lawn / Farmhouse Package</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#78716c] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Property Type & Scope */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#d6d3d1] uppercase tracking-wider mb-1.5">
                    2. Outdoor Space Type
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-[#78716c] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full min-h-[46px] bg-[#1a1410] border border-[#2f251d] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg pl-10 pr-9 py-2.5 text-sm text-white outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="Home Lawn / Garden">Home Lawn / Garden</option>
                      <option value="Rooftop / Terrace">Rooftop / Terrace</option>
                      <option value="Apartment Balcony">Apartment Balcony</option>
                      <option value="Farmhouse / Poolside">Farmhouse / Poolside</option>
                      <option value="Café / Restaurant Courtyard">Café / Restaurant Courtyard</option>
                      <option value="Other Outdoor Space">Other Space</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#78716c] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d6d3d1] uppercase tracking-wider mb-1.5">
                    3. Estimated Seating / Scope
                  </label>
                  <div className="relative">
                    <select
                      value={scopeSize}
                      onChange={(e) => setScopeSize(e.target.value)}
                      className="w-full min-h-[46px] bg-[#1a1410] border border-[#2f251d] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg pl-3.5 pr-9 py-2.5 text-sm text-white outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="2 Seater Balcony Set">2 Seater Balcony Set / Swing</option>
                      <option value="4 Seater Set + Table">4 Seater Set + Center Table</option>
                      <option value="5–7 Seater L-Shape / Lounge">5–7 Seater L-Shape / Lounge</option>
                      <option value="Multiple Sets (Farmhouse / Café)">Multiple Sets (Farmhouse / Café)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#78716c] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Weatherproof Cushions Toggle */}
              <div className="p-3.5 rounded-xl bg-[#1a1410] border border-[#2b221a] flex items-center justify-between gap-3">
                <div>
                  <span className="font-semibold text-white text-xs block">Water-Repellent Outdoor Cushions</span>
                  <span className="text-[#8c857f] text-[11px] block mt-0.5">Quick-dry foam &amp; removable washable covers</span>
                </div>
                <button
                  type="button"
                  onClick={() => setWeatherproofCushions(!weatherproofCushions)}
                  className={`w-12 h-6 rounded-full transition-colors relative flex items-center px-0.5 shrink-0 ${
                    weatherproofCushions ? 'bg-[#d4af37]' : 'bg-[#3b322a]'
                  }`}
                  aria-label="Toggle Water-Repellent Cushions"
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-black transition-transform ${
                      weatherproofCushions ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#d6d3d1] uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-[#d4af37]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#78716c] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g., Saad Khan"
                      className="w-full min-h-[46px] bg-[#1a1410] border border-[#2f251d] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-[#57534e] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d6d3d1] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp <span className="text-[#d4af37]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#78716c] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+92 3XX XXXXXXX"
                      className="w-full min-h-[46px] bg-[#1a1410] border border-[#2f251d] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-[#57534e] outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Optional Karachi Area */}
              <div>
                <label className="block text-xs font-semibold text-[#d6d3d1] uppercase tracking-wider mb-1.5">
                  Delivery Area in Karachi <span className="text-[#78716c] text-[10px] normal-case">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={clientArea}
                  onChange={(e) => setClientArea(e.target.value)}
                  placeholder="e.g., DHA Phase 6, Clifton, PECHS, Gulshan"
                  className="w-full min-h-[46px] bg-[#1a1410] border border-[#2f251d] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#57534e] outline-none transition-all"
                />
              </div>

              {/* Project Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#d6d3d1] uppercase tracking-wider mb-1.5">
                  Preferred Colors or Custom Dimensions <span className="text-[#78716c] text-[10px] normal-case">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  placeholder="e.g., 4 seater sofa set with table in dark grey rope and beige cushions..."
                  className="w-full bg-[#1a1410] border border-[#2f251d] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg p-3 text-sm text-white placeholder-[#57534e] outline-none transition-all resize-none"
                />
              </div>

              {/* Primary Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:flex-1 min-h-[48px] py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#b38e1b] text-black font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4 fill-black shrink-0" />
                  <span>{loading ? 'Submitting...' : 'Request Price & Photos'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto min-h-[48px] py-3.5 px-5 rounded-lg bg-[#1a281b] border border-[#22c55e]/40 hover:border-[#22c55e] text-[#4ade80] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                  title="Send directly to Kashif Outdoor Furniture via WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-[#22c55e] shrink-0" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-3 border-t border-[#231b14] flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] text-[#8c857f]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Direct Workshop Pricing</span>
                </span>
                <span className="hidden xs:inline text-[#3d3228]">•</span>
                <span>Manzoor Colony Sector C</span>
                <span className="hidden xs:inline text-[#3d3228]">•</span>
                <span>Open · Closes 9 PM</span>
              </div>

            </form>
          </div>
        )}

      </main>
    </div>
  );
}
