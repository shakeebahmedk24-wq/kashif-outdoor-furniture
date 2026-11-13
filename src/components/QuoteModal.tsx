import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  Sparkles, 
  MessageCircle, 
  CheckCircle2 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
}

export function QuoteModal({ isOpen, onClose, initialService }: QuoteModalProps) {
  const [selectedService, setSelectedService] = useState<string>(
    initialService ? initialService.title : '4 Seater Sofa Set with Table in Rope'
  );
  const [propertyType, setPropertyType] = useState<string>('Home Lawn / Garden');
  const [scopeSize, setScopeSize] = useState<string>('4 Seater Set + Table');
  const [weatherproofCushions, setWeatherproofCushions] = useState<boolean>(true);
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleWhatsAppSend = () => {
    const text = `*Kashif Outdoor Furniture - Fast Quote Request*\nItem / Category: ${selectedService}\nSpace: ${propertyType}\nSeating / Scope: ${scopeSize}\nWaterproof Cushions: ${weatherproofCushions ? 'Yes' : 'No'}\nClient Name: ${clientName || 'Valued Client'}\nPhone: ${clientPhone || 'Not provided'}\nLocation: Karachi, Pakistan`;
    window.open(`https://wa.me/923438999282?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative max-w-xl w-full bg-[#14100c] border border-[#d4af37]/40 rounded-2xl p-5 sm:p-7 shadow-2xl my-auto sm:my-8 max-h-[90dvh] overflow-y-auto overflow-x-hidden"
      >
        {/* Top Gold Accent Bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#b38e1b] via-[#d4af37] to-[#b38e1b]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#a8a29e] hover:text-white hover:bg-[#201913] transition-colors"
          aria-label="Close Estimate Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Estimate Request Registered!</h3>
            <p className="text-sm text-[#c7bfb8] max-w-sm mx-auto mb-6">
              Thank you, <strong className="text-[#f5eccd]">{clientName || 'Valued Client'}</strong>. Kashif Outdoor Furniture will review your {selectedService} inquiry and share rope color swatches and pricing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppSend}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#1b2b1d] border border-[#22c55e] text-[#4ade80] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-[#241c15] text-xs text-[#a8a29e] hover:text-white"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] font-semibold uppercase tracking-widest mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Quick Outdoor Quote</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Request a Tailored Quotation
              </h3>
              <p className="text-xs text-[#a8a29e] mt-1">
                Get workshop-direct pricing for our 4-seater rope sets, rattan lounges, swings &amp; patio sets in Karachi.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#d6d3d1] uppercase tracking-wider mb-1.5">
                  Select Item / Category
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-[#1b1510] border border-[#2e2319] focus:border-[#d4af37] rounded-lg px-3 py-2.5 text-sm text-white outline-none"
                >
                  <option value="4 Seater Sofa Set with Table in Rope">4 Seater Sofa Set with Table in Rope</option>
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                  <option value="Complete Lawn / Farmhouse Package">Complete Lawn / Farmhouse Package</option>
                </select>
              </div>

              {/* Space Type & Seating Scope */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#d6d3d1] uppercase tracking-wider mb-1.5">
                    Outdoor Space
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-[#1b1510] border border-[#2e2319] focus:border-[#d4af37] rounded-lg px-3 py-2.5 text-sm text-white outline-none"
                  >
                    <option value="Home Lawn / Garden">Home Lawn / Garden</option>
                    <option value="Rooftop / Terrace">Rooftop / Terrace</option>
                    <option value="Apartment Balcony">Apartment Balcony</option>
                    <option value="Farmhouse / Poolside">Farmhouse / Poolside</option>
                    <option value="Café / Restaurant Courtyard">Café / Restaurant Courtyard</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d6d3d1] uppercase tracking-wider mb-1.5">
                    Seating / Scope
                  </label>
                  <select
                    value={scopeSize}
                    onChange={(e) => setScopeSize(e.target.value)}
                    className="w-full bg-[#1b1510] border border-[#2e2319] focus:border-[#d4af37] rounded-lg px-3 py-2.5 text-sm text-white outline-none"
                  >
                    <option value="2 Seater Balcony Set">2 Seater Balcony Set / Swing</option>
                    <option value="4 Seater Set + Table">4 Seater Set + Center Table</option>
                    <option value="5–7 Seater L-Shape / Lounge">5–7 Seater L-Shape / Lounge</option>
                    <option value="Multiple Sets (Farmhouse / Café)">Multiple Sets (Farmhouse / Café)</option>
                  </select>
                </div>
              </div>

              {/* Weatherproof Cushion Toggle */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#1a1410] border border-[#2b221a]">
                <div className="text-xs">
                  <span className="font-semibold text-white block">Water-Repellent Outdoor Cushions</span>
                  <span className="text-[#8c857f]">High-density outdoor foam &amp; washable zippered covers</span>
                </div>
                <button
                  type="button"
                  onClick={() => setWeatherproofCushions(!weatherproofCushions)}
                  className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-0.5 ${
                    weatherproofCushions ? 'bg-[#d4af37]' : 'bg-[#3b322a]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-black transition-transform ${
                      weatherproofCushions ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Client Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#d6d3d1] uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Saad Khan"
                    className="w-full bg-[#1b1510] border border-[#2e2319] focus:border-[#d4af37] rounded-lg px-3 py-2 text-sm text-white placeholder-[#57534e] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d6d3d1] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+92 3XX XXXXXXX"
                    className="w-full bg-[#1b1510] border border-[#2e2319] focus:border-[#d4af37] rounded-lg px-3 py-2 text-sm text-white placeholder-[#57534e] outline-none"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#b38e1b] text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all"
                >
                  Request Price &amp; Photos
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl bg-[#1b2b1d] border border-[#22c55e]/50 text-[#4ade80] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#223824] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              <div className="text-[11px] text-[#78716c] text-center pt-1">
                📍 Meo Chowk, Maryam Masjid, Manzoor Colony Sector C, Karachi • Open · Closes 9 PM
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
