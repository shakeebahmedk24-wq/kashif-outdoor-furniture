import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;

// Lazy initialization of Gemini client as per security guidelines
let aiClient: GoogleGenAI | null = null;
function getAi(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    try {
      aiClient = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    } catch (e) {
      console.warn("Failed to initialize GoogleGenAI:", e);
    }
  }
  return aiClient;
}

const SYSTEM_INSTRUCTION = `You are the official virtual assistant for Kashif Outdoor Furniture, an outdoor furniture market workshop & showroom located at Meo Chowk, Maryam Masjid, Manzoor Colony Sector C, Manzoor Colony, Karachi, Pakistan (Google Maps Plus Code: V32P+3X Manzoor Colony, Karachi, Pakistan). You help website visitors learn about our handcrafted outdoor furniture, get pricing guidance, and contact the showroom.

## About the business
- Name: Kashif Outdoor Furniture
- Category: Outdoor Furniture Market / Workshop & Showroom
- Rating: 4.5 stars on Google Maps
- Featured / Latest Owner Highlight: 4 seater sofa set with table in rope
- Location: Meo Chowk, Maryam Masjid, Manzoor Colony Sector C, Manzoor Colony, Karachi, Pakistan (Plus Code: V32P+3X Manzoor Colony, Karachi, Pakistan)
- Core Products & Services:
  - Rope Sofa Sets & Lounge Sets (including our featured 4 seater sofa set with table in rope, 5 & 7-seater rope sectionals, UV-resistant braided rope weaving)
  - Rattan & Wicker Patio Sets (all-weather PE rattan corner sofas, balcony coffee sets, terrace seating)
  - Garden Swings & Hanging Egg Chairs (single & double cocoon egg chairs, 2 & 3-seater canopy garden swings)
  - Outdoor Dining & Bistro Sets (4, 6, and 8-seater lawn dining tables & chairs, compact balcony bistro sets)
  - Poolside Loungers & Daybeds (reclining sun loungers, farmhouse pool round daybeds)
  - Gazebos, Umbrellas & Shade (cantilever patio umbrellas, pergolas, waterproof outdoor shade canopies)
  - Rope Re-Weaving & Cushion Repair (rope & wicker restoration, frame powder coating, water-repellent cushion replacement)
  - Complete Terrace, Lawn & Café Fit-Outs across Karachi (DHA, Clifton, PECHS, Gulshan, Bahria Town, Super Highway farmhouses)
- Contact Details:
  - Phone & WhatsApp: +92 343 8999282
- Operating Hours: Open daily · Closes 9:00 PM

## Your role
1. Answer questions about outdoor furniture products, rope and rattan materials, cushion durability, custom colors/sizes, showroom address, and hours using ONLY the information provided here. If you do not know exact pricing or live stock, say so honestly and offer to connect the visitor via phone or WhatsApp (+92 343 8999282).
2. Highlight our featured "4 seater sofa set with table in rope" when visitors ask about popular sets or rope furniture.
3. Collect lead details when a visitor wants a quote or photos:
   - Name
   - Phone or WhatsApp number
   - Furniture item/category needed (e.g., 4 seater rope sofa set, swing, rattan set)
   - Area in Karachi or approximate size
   Summarize what you collected clearly so they can forward it via WhatsApp.
4. If someone asks for exact prices, explain that pricing depends on the set design, seating capacity, rope/rattan material, and cushion fabric, and that Kashif Outdoor Furniture offers direct market workshop rates — then offer to share photos and an exact quote via WhatsApp (+92 343 8999282).

## Tone & style
- Warm, helpful, and concise — like a knowledgeable showroom team member in Karachi.
- Use simple, everyday language with short sentences and occasional bullet points.
- Default to English, and reply in Urdu (or Roman Urdu if the user writes in Roman Urdu) when appropriate.
- Never sound overly salesy or invent prices/timelines you haven't been given.

## Boundaries
- Do not invent prices, delivery dates, or guarantees not provided here.
- Keep all conversation focused on Kashif Outdoor Furniture's outdoor furniture and services.`;

function generateLocalResponse(message: string): string {
  const lower = message.toLowerCase().trim();
  const isUrduOrArabic = /[\u0600-\u06FF]/.test(message);

  if (isUrduOrArabic) {
    if (lower.includes('قیمت') || lower.includes('سعر') || lower.includes('ریٹ')) {
      return "کاشف آؤٹ ڈور فرنیچر میں خوش آمدید! ہماری قیمتیں ڈیزائن، سیٹنگ (مثلاً 4 سیٹر روب صوفہ سیٹ مع ٹیبل) اور مٹیریل پر منحصر ہوتی ہیں۔\n\nتصاویر اور مکمل تفصیل کے لیے اپنا نام اور واٹس ایپ نمبر بتائیں یا براہِ راست +92 343 8999282 پر کال یا واٹس ایپ کریں۔";
    }
    return "وعلیکم السلام! کاشف آؤٹ ڈور فرنیچر (میو چوک، مریم مسجد، منظور کالونی سیکٹر سی، کراچی) میں خوش آمدید۔ ہم 4 سیٹر روب صوفہ سیٹ مع ٹیبل، رتن سیٹس، گارڈن جھولے اور آؤٹ ڈور ڈائننگ تیار کرتے ہیں۔ ہم رات 9 بجے تک کھلے ہیں۔ ہم آپ کی کیا مدد کر سکتے ہیں؟";
  }

  if (lower.includes('4 seater') || lower.includes('rope') || lower.includes('sofa') || lower.includes('table')) {
    return "Our featured **4 Seater Sofa Set with Table in Rope** is handcrafted in our Manzoor Colony workshop:\n\n• **Craftsmanship:** UV-resistant braided outdoor rope over a sturdy rust-resistant frame.\n• **Includes:** 4-seater rope seating + matching center table + water-repellent outdoor cushions.\n• **Custom Colors:** Choose your preferred rope shade and cushion fabric.\n\nWould you like photos and pricing sent to your WhatsApp (+92 343 8999282)?";
  }

  if (lower.includes('price') || lower.includes('cost') || lower.includes('how much') || lower.includes('rate') || lower.includes('quote')) {
    return "At **Kashif Outdoor Furniture**, pricing depends on the set design, seating capacity (such as our 4-seater rope sofa set with table), material weave, and cushion selection.\n\nBecause we craft directly at our Manzoor Colony market workshop, you get honest factory-direct rates. Share your name and WhatsApp number—or message **+92 343 8999282**—and we'll share live photos and pricing!";
  }

  if (lower.includes('where') || lower.includes('location') || lower.includes('address') || lower.includes('hours') || lower.includes('time') || lower.includes('open') || lower.includes('contact') || lower.includes('phone') || lower.includes('whatsapp')) {
    return "Here are **Kashif Outdoor Furniture**'s showroom & contact details:\n\n• **Address:** Meo Chowk, Maryam Masjid, Manzoor Colony Sector C, Manzoor Colony, Karachi, Pakistan\n• **Plus Code:** V32P+3X Manzoor Colony, Karachi\n• **Phone & WhatsApp:** +92 343 8999282\n• **Hours:** Open · Closes 9:00 PM\n• **Google Rating:** 4.5 ★\n\nWould you like Google Maps directions or to request a quote?";
  }

  if (lower.includes('rattan') || lower.includes('wicker') || lower.includes('swing') || lower.includes('egg') || lower.includes('pool') || lower.includes('dining') || lower.includes('lounger')) {
    return "At Kashif Outdoor Furniture, we build durable outdoor collections for Karachi lawns, terraces, farmhouses, and cafés:\n\n• **Rope & Rattan Sofa Sets** (including our 4-seater rope sofa set with table)\n• **Garden Swings & Hanging Egg Chairs**\n• **Outdoor Dining Sets & Poolside Loungers**\n• **Rope Re-Weaving & Cushion Repair**\n\nWhich item are you looking for, and what size is your outdoor space?";
  }

  return "Welcome to **Kashif Outdoor Furniture** in Manzoor Colony, Karachi! We specialize in handcrafted outdoor furniture including our featured **4 seater sofa set with table in rope**, PE rattan patio lounges, garden swings, poolside loungers, and outdoor dining sets.\n\nWe are open until 9:00 PM and reachable at **+92 343 8999282**. How can I help you today?";
}

async function startServer() {
  const app = express();

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", app: "Kashif Outdoor Furniture Virtual Assistant" });
  });

  // Chatbot conversation endpoint
  app.post("/api/chat", async (req: Request, res: Response) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== "string") {
        res.status(400).json({ error: "Message is required" });
        return;
      }

      const ai = getAi();

      if (ai) {
        try {
          const contents: Array<{ role: "user" | "model"; parts: Array<{ text: string }> }> = [];

          if (Array.isArray(history)) {
            for (const item of history.slice(-8)) {
              if (item.text && (item.role === "user" || item.role === "model" || item.role === "assistant")) {
                contents.push({
                  role: item.role === "assistant" ? "model" : (item.role as "user" | "model"),
                  parts: [{ text: item.text }],
                });
              }
            }
          }

          contents.push({
            role: "user",
            parts: [{ text: message }],
          });

          const response = await ai.models.generateContent({
            model: "gemini-3.8-flash",
            contents,
            config: {
              systemInstruction: SYSTEM_INSTRUCTION,
              temperature: 0.7,
            },
          });

          const replyText = response.text || generateLocalResponse(message);
          res.json({ reply: replyText, source: "gemini" });
          return;
        } catch (geminiError) {
          console.warn("Gemini API call failed, falling back to local expert:", geminiError);
          const fallbackReply = generateLocalResponse(message);
          res.json({ reply: fallbackReply, source: "local_fallback" });
          return;
        }
      }

      const localReply = generateLocalResponse(message);
      res.json({ reply: localReply, source: "local" });
    } catch (err) {
      console.error("Error in /api/chat:", err);
      res.status(500).json({ error: "Failed to process chat request" });
    }
  });

  // Vite development middleware or production static serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
