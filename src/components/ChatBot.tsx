import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  X,
  Send,
  Phone,
  MessageCircle,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  Maximize2,
  Minimize2,
  ChevronDown
} from 'lucide-react';
import { ChatMessage, LeadDetails } from '../types';
import { KASHIF_LOGO_URL } from './BrandLogo';

interface ChatBotProps {
  onOpenEstimate?: () => void;
}

const INITIAL_MESSAGE: ChatMessage = {
  id: 'msg-init-1',
  sender: 'assistant',
  text: "Assalam-o-Alaikum! Welcome to Kashif Outdoor Furniture in Manzoor Colony, Karachi. Whether you're looking for our popular 4-seater sofa set with table in rope, rattan patio lounges, garden swings, or custom outdoor seating, I'm here to help.\n\nHow can I assist with your outdoor space today?",
  timestamp: 'Just now',
};

const SUGGESTIONS = [
  '🛋️ 4 Seater Rope Sofa Set with Table',
  '🪑 Rattan & Wicker Patio Sets',
  '🌴 Garden Swings & Egg Chairs',
  '🏖️ Poolside Loungers & Dining',
  '💰 How does pricing work?',
  '📍 Location & Hours (Closes 9 PM)',
  'السلام علیکم (اردو)'
];

// Client-side fallback knowledge engine
function getClientFallbackReply(input: string): { reply: string; leadDetails?: LeadDetails } {
  const lower = input.toLowerCase().trim();
  const isUrduOrArabic = /[\u0600-\u06FF]/.test(input);

  // Check if user is sharing Pakistani or international phone number / lead info
  const phoneMatch =
    input.match(/(\+?92|0)?\s?3[0-9]{2}[\s-]?[0-9]{7}/) || input.match(/[0-9]{8,13}/);
  const isSharingLead =
    phoneMatch !== null || lower.includes('my name is') || lower.includes('reach me at');

  if (isSharingLead) {
    const extractedPhone = phoneMatch ? phoneMatch[0] : '';
    return {
      reply: `Thank you! I have noted your details.\n\n**Next Steps:**\nOur team at **Kashif Outdoor Furniture** (+92 343 8999282) will reach out shortly to share photos, rope & cushion color options, and pricing.\n\nYou can also tap below to forward your inquiry directly on WhatsApp for the fastest response.`,
      leadDetails: {
        phone: extractedPhone,
        summary: 'Inquiry for Kashif Outdoor Furniture (Manzoor Colony, Karachi)',
      }
    };
  }

  if (isUrduOrArabic) {
    if (lower.includes('قیمت') || lower.includes('سعر') || lower.includes('ریٹ') || lower.includes('کتنے')) {
      return {
        reply: "کاشف آؤٹ ڈور فرنیچر میں خوش آمدید! ہماری قیمتیں ڈیزائن، سیٹنگ کی گنجائش (مثلاً 4 سیٹر روب صوفہ سیٹ مع ٹیبل) اور رسی یا رتن کے انتخاب پر منحصر ہوتی ہیں۔\n\nبراہِ کرم اپنا نام اور واٹس ایپ نمبر شیئر کریں یا براہِ راست +92 343 8999282 پر رابطہ کریں۔"
      };
    }
    if (lower.includes('صوفہ') || lower.includes('rope') || lower.includes('رسی')) {
      return {
        reply: "ہمارا مقبول ترین 4 سیٹر روب صوفہ سیٹ مع ٹیبل اعلیٰ معیار کی UV ریزسٹنٹ رسی، مضبوط فریم اور واٹر پروف کشنز کے ساتھ تیار کیا جاتا ہے۔\n\nکیا آپ تصاویر اور ریٹ جاننا چاہیں گے؟"
      };
    }
    return {
      reply: "وعلیکم السلام! کاشف آؤٹ ڈور فرنیچر (میو چوک، مریم مسجد، منظور کالونی سیکٹر سی، کراچی) میں خوش آمدید۔ ہم 4 سیٹر روب صوفہ سیٹ مع ٹیبل، رتن لاؤنجز، گارڈن جھولے اور آؤٹ ڈور ڈائننگ سیٹس تیار کرتے ہیں۔ ہم روزانہ رات 9 بجے تک کھلے ہیں۔ ہم آپ کی کیا مدد کر سکتے ہیں؟"
    };
  }

  if (lower.includes('4 seater') || lower.includes('rope') || lower.includes('sofa') || lower.includes('table')) {
    return {
      reply: "Our featured **4 Seater Sofa Set with Table in Rope** is handcrafted at our Manzoor Colony workshop:\n\n• **Build:** Heavy-duty rust-resistant metal frame woven with UV-stabilized outdoor braided rope.\n• **Includes:** 4-seater rope seating arrangement + matching rope-woven center table + plush outdoor cushions.\n• **Customization:** Available in multiple rope shades and water-repellent cushion fabrics.\n\nWould you like current photos and pricing sent on WhatsApp (+92 343 8999282)?"
    };
  }

  if (lower.includes('price') || lower.includes('cost') || lower.includes('how much') || lower.includes('rate') || lower.includes('quote')) {
    return {
      reply: "At Kashif Outdoor Furniture, pricing depends on the set design, seating capacity (e.g., 4-seater rope set with table vs. 7-seater L-shape), rope/rattan weave, and cushion fabric.\n\n• **Workshop Direct Rates:** You buy directly from our Manzoor Colony market workshop without middleman markups.\n\nTell me which set you're interested in—or share your WhatsApp number—and we'll send live photos and exact rates!"
    };
  }

  if (lower.includes('rattan') || lower.includes('wicker') || lower.includes('patio') || lower.includes('lounge')) {
    return {
      reply: "We craft custom **PE Rattan & Wicker Patio Sets** designed for Karachi's coastal humidity and sun:\n\n• **Options:** L-shape corner sofas, balcony 2-seater coffee sets, and modular patio lounges.\n• **Durability:** All-weather synthetic rattan that won't crack or fade outdoors.\n\nWhat size terrace or lawn are you furnishing?"
    };
  }

  if (lower.includes('swing') || lower.includes('egg') || lower.includes('chair') || lower.includes('hammock')) {
    return {
      reply: "Our **Garden Swings & Hanging Egg Chairs** are a favorite for Karachi balconies and lawns:\n\n• Single & double hanging cocoon egg chairs in rope or rattan\n• 2 & 3-seater canopy garden swings on heavy-gauge stands\n• Plush tie-on cushions in custom colors\n\nWould you like photos of our in-stock swings?"
    };
  }

  if (lower.includes('pool') || lower.includes('lounger') || lower.includes('dining') || lower.includes('bistro') || lower.includes('umbrella')) {
    return {
      reply: "We build complete outdoor leisure and dining furniture:\n\n• **Outdoor Dining:** 4, 6, and 8-seater braided rope & rattan dining sets\n• **Poolside:** Multi-angle reclining sun loungers & round daybeds for farmhouses\n• **Shade:** Cantilever patio umbrellas & custom pergola shades\n\nAre you looking for a home lawn, farmhouse, or commercial café?"
    };
  }

  if (lower.includes('location') || lower.includes('where') || lower.includes('address') || lower.includes('hours') || lower.includes('contact') || lower.includes('phone') || lower.includes('whatsapp') || lower.includes('9 pm')) {
    return {
      reply: "Here are **Kashif Outdoor Furniture**'s showroom details:\n\n• **Address:** Meo Chowk, Maryam Masjid, Manzoor Colony Sector C, Manzoor Colony, Karachi, Pakistan\n• **Google Maps Plus Code:** V32P+3X Manzoor Colony, Karachi\n• **Phone & WhatsApp:** +92 343 8999282\n• **Hours:** Open · Closes 9:00 PM\n• **Google Rating:** 4.5 ★\n\nWould you like directions or to speak with our team on WhatsApp?"
    };
  }

  return {
    reply: "Welcome to **Kashif Outdoor Furniture** in Manzoor Colony, Karachi!\n\nWe craft:\n• **4 Seater Sofa Set with Table in Rope** (Featured)\n• Rattan & Wicker Patio Lounge Sets\n• Garden Swings & Hanging Egg Chairs\n• Outdoor Dining Sets & Poolside Loungers\n• Rope Re-Weaving & Cushion Replacement\n\nHow can I help with your lawn, terrace, or café project today?"
  };
}

export function ChatBot({ onOpenEstimate }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [leadState, setLeadState] = useState<LeadDetails | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = (textToSend || inputValue).trim();
    if (!messageText || isLoading) return;

    const isRtl = /[\u0600-\u06FF]/.test(messageText);

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isArabic: isRtl,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          history: messages.slice(-6).map((m) => ({
            role: m.sender === 'user' ? 'user' : 'model',
            text: m.text,
          })),
        }),
      });

      let replyText = '';
      if (response.ok) {
        const data = await response.json();
        replyText = data.reply;
      } else {
        const fallback = getClientFallbackReply(messageText);
        replyText = fallback.reply;
        if (fallback.leadDetails) {
          setLeadState(fallback.leadDetails);
        }
      }

      const phoneMatch =
        messageText.match(/(\+?92|0)?\s?3[0-9]{2}[\s-]?[0-9]{7}/) || messageText.match(/[0-9]{8,13}/);
      if (phoneMatch) {
        setLeadState({
          phone: phoneMatch[0],
          summary: messageText,
        });
      }

      const botMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'assistant',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isArabic: /[\u0600-\u06FF]/.test(replyText),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const fallback = getClientFallbackReply(messageText);
      const botMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'assistant',
        text: fallback.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isArabic: /[\u0600-\u06FF]/.test(fallback.reply),
      };
      setMessages((prev) => [...prev, botMsg]);
      if (fallback.leadDetails) {
        setLeadState(fallback.leadDetails);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setLeadState(null);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              className="relative flex items-center"
            >
              {/* Tooltip badge for new visitors */}
              {hasUnread && (
                <div className="absolute right-full mr-3 hidden sm:flex items-center gap-2 bg-[#14100c] border border-[#d4af37]/40 shadow-xl py-2 px-3.5 rounded-xl whitespace-nowrap pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
                  <p className="text-xs font-semibold text-white">
                    Ask Kashif Outdoor Furniture <span className="text-[#d4af37]">💬</span>
                  </p>
                </div>
              )}

              <button
                id="kashif-chat-trigger"
                onClick={handleToggle}
                className="relative group p-4 sm:p-4.5 rounded-2xl bg-gradient-to-br from-[#d4af37] via-[#e5c158] to-[#b38e1b] text-black shadow-[0_4px_25px_rgba(212,175,55,0.45)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
                aria-label="Open Kashif Outdoor Furniture Virtual Assistant"
              >
                <div className="relative">
                  <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-black text-black" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#22c55e] border-2 border-black" />
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed z-50 overflow-hidden shadow-2xl border border-[#d4af37]/35 bg-[#100d0a] flex flex-col ${
              isExpanded
                ? 'inset-2 sm:inset-6 md:inset-10 rounded-2xl'
                : 'bottom-3 right-2 left-2 sm:left-auto sm:right-6 sm:bottom-6 w-auto sm:w-[410px] h-[82dvh] sm:h-[620px] max-h-[720px] rounded-2xl'
            }`}
          >
            {/* Header */}
            <div className="bg-[#19130d] border-b border-[#302417] px-4 py-3.5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-16 rounded-xl bg-[#120e0b] border border-[#d4af37]/50 flex items-center justify-center px-1.5 shadow-md shrink-0">
                  <img
                    src={KASHIF_LOGO_URL}
                    alt="Kashif Outdoor Furniture"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#22c55e] border border-black" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white tracking-wide">Kashif Outdoor Assistant</h3>
                    <span className="hidden xs:inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#271d15] text-[#d4af37] border border-[#d4af37]/20 uppercase">
                      4.5 ★
                    </span>
                  </div>
                  <p className="text-[11px] text-[#9ca3af] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block" />
                    Manzoor Colony, Karachi • Closes 9 PM
                  </p>
                </div>
              </div>

              {/* Header Actions */}
              <div className="flex items-center gap-1">
                <a
                  href="tel:+923438999282"
                  className="p-1.5 rounded-lg text-[#d4af37] hover:bg-[#281e14] transition-colors"
                  title="Call Kashif Outdoor Furniture (+92 343 8999282)"
                >
                  <Phone className="w-4 h-4 fill-current" />
                </a>
                <a
                  href="https://wa.me/923438999282?text=Hello%20Kashif%20Outdoor%20Furniture,%20I%20am%20chatting%20with%20your%20assistant%20and%20need%20help."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-[#4ade80] hover:bg-[#152a17] transition-colors"
                  title="WhatsApp Kashif Outdoor Furniture"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <button
                  onClick={handleResetChat}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                  title="Clear conversation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="hidden sm:inline-flex p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                  title={isExpanded ? 'Minimize size' : 'Expand window'}
                >
                  {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors ml-0.5"
                  title="Close chat"
                >
                  <ChevronDown className="w-4 h-4 sm:hidden" />
                  <X className="w-4 h-4 hidden sm:inline" />
                </button>
              </div>
            </div>

            {/* Quick Showroom Banner */}
            <div className="bg-[#14100c] px-3.5 py-1.5 border-b border-[#251b12] flex items-center justify-between text-[11px] text-[#b8b3ad]">
              <span className="flex items-center gap-1 text-[#d4af37] font-medium">
                <Sparkles className="w-3 h-3" /> Meo Chowk, Manzoor Colony
              </span>
              <a
                href="https://wa.me/923438999282"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4ade80] hover:underline font-semibold"
              >
                +92 343 8999282
              </a>
            </div>

            {/* Chat Body / Messages Area */}
            <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3.5 bg-[#0f0c0a]/90">
              {messages.map((msg) => {
                const isUser = msg.sender === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1`}
                  >
                    <div
                      dir={msg.isArabic ? 'rtl' : 'ltr'}
                      className={`max-w-[88%] sm:max-w-[82%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-words shadow-sm ${
                        isUser
                          ? 'bg-[#d4af37] text-black font-medium rounded-tr-none'
                          : 'bg-[#1b1510] text-[#e7e5e4] border border-[#d4af37]/25 rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-neutral-500 px-1">{msg.timestamp}</span>
                  </div>
                );
              })}

              {/* Lead Summary Confirmation Card if details were collected */}
              {leadState && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-3.5 rounded-xl bg-[#1c1610] border border-[#d4af37]/40 shadow-lg text-xs space-y-2.5"
                >
                  <div className="flex items-center gap-2 text-[#d4af37] font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                    <span>Inquiry Ready for Kashif Outdoor Furniture</span>
                  </div>
                  <p className="text-[#c4bfb9] text-[11px] leading-relaxed">
                    Forward your inquiry directly on WhatsApp for live product photos, rope colors, and workshop pricing:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 pt-1">
                    <a
                      href={`https://wa.me/923438999282?text=${encodeURIComponent(
                        `Hello Kashif Outdoor Furniture, I chatted with your assistant regarding: ${leadState.summary || 'Custom outdoor furniture inquiry'}. Please share photos & pricing.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-[#192b1b] border border-[#22c55e]/50 text-[#4ade80] font-bold text-center flex items-center justify-center gap-1.5 hover:bg-[#203a23] transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#22c55e]" />
                      <span>Send via WhatsApp</span>
                    </a>
                    <a
                      href="tel:+923438999282"
                      className="py-2 px-3 rounded-lg bg-[#d4af37] text-black font-bold text-center flex items-center justify-center gap-1 hover:brightness-110 transition-all"
                    >
                      <Phone className="w-3 h-3 fill-black" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </motion.div>
              )}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-[#d4af37] bg-[#1a140f] p-2.5 rounded-xl w-fit border border-[#d4af37]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] text-[#b8b3ad] ml-1">Kashif Assistant is typing...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Pills */}
            <div
              className="bg-[#14100c] px-3 py-2 border-t border-[#261c13] flex gap-1.5 overflow-x-auto no-scrollbar shrink-0 select-none"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {SUGGESTIONS.map((pill, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(pill)}
                  disabled={isLoading}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#1e1711] hover:bg-[#2a2016] border border-[#3d2e1f] hover:border-[#d4af37]/50 text-[11px] text-[#ded9d2] transition-colors cursor-pointer shrink-0 disabled:opacity-50"
                >
                  {pill}
                </button>
              ))}
            </div>

            {/* Action Bar with Link to Full Estimate Page */}
            {onOpenEstimate && (
              <div className="bg-[#120e0b] px-3 py-1.5 flex items-center justify-between border-t border-[#22180f] text-[11px]">
                <span className="text-neutral-400">Need a custom patio quote?</span>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenEstimate();
                  }}
                  className="text-[#d4af37] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                >
                  Open Fast Estimate Form →
                </button>
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-2.5 sm:p-3 bg-[#17110c] border-t border-[#302417] flex items-center gap-2 shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about 4 seater rope set, rattan, swings, hours..."
                disabled={isLoading}
                className="flex-1 bg-[#0d0a08] border border-[#382b20] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 outline-none transition-all"
              />

              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b38e1b] text-black font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110 active:scale-95 transition-all flex items-center justify-center shrink-0 cursor-pointer shadow-md"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4 fill-black" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
