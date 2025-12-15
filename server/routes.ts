import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendLeadEmails } from "./email";
import { leadSchema } from "@shared/schema";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Lead submission endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const validation = leadSchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ 
          error: "Validation failed",
          details: validation.error.flatten().fieldErrors
        });
      }
      
      const { name, phone, email, location, message, consent, language, calculatorData } = validation.data;
      
      if (!consent) {
        return res.status(400).json({ 
          error: "Consent is required" 
        });
      }
      
      // Log lead data
      console.log("New lead received:", {
        name,
        phone,
        email,
        location,
        language,
        calculatorData,
        timestamp: new Date().toISOString(),
      });
      
      // Send emails
      const emailResult = await sendLeadEmails({
        name,
        phone,
        email,
        location,
        message,
        language: language || "de",
        calculatorData,
      });
      
      if (!emailResult.success) {
        console.warn("Email sending failed:", emailResult.error);
        // Still return success - lead was received even if email failed
      }
      
      return res.status(200).json({ 
        success: true,
        message: "Lead received successfully",
        emailSent: emailResult.success,
      });
    } catch (error) {
      console.error("Error processing lead:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  // ChatBot AI endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, language = "tr" } = req.body;
      
      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Message is required" });
      }

      const systemPrompt = `Du bist der 089 Bayern Energie-Assistent, ein freundlicher und kompetenter Berater für Solaranlagen, Wärmepumpen, Klimaanlagen und Batteriespeicher. 

UNTERNEHMEN:
- 089 Bayern ist ein deutsch-türkisches Energieunternehmen
- Hauptsitz in Alanya/Antalya, Türkei mit Verbindung nach München
- Gegründet 2018, spezialisiert auf mediterrane Regionen
- Partner: Vaillant (Wärmepumpen), Samsung (Klima), BYD (Batterien)

PRODUKTE (4-in-1 System):
1. Photovoltaik/Solaranlagen - bis 300+ Sonnentage pro Jahr nutzen
2. Wärmepumpen (Vaillant) - Heizung & Warmwasser
3. Klimaanlagen (Samsung) - Inverter-Technologie
4. Batteriespeicher (BYD) - Stromspeicherung

VORTEILE:
- Bis zu 70% Energieeinsparung
- 10 Monate kostenlose Energie
- 10 Jahre Garantie
- Deutsche DIN-Qualitätsstandards
- Kostenlose Beratung vor Ort

SERVICE-REGIONEN:
Türkei: Antalya, Alanya, Kemer, Belek, Side, Manavgat, Bodrum, Fethiye, Marmaris, Kaş, Muğla, İzmir, Mersin
Kroatien: Split, Dalmatien (ab 2025)

KONTAKT:
- Tel TR: +90 507 183 2036
- Tel DE: +49 173 5994699
- WhatsApp: +90 507 183 2036
- E-Mail: info@089bayern.com
- Manager: Dalibor Bakmaz, Mustafa Sakar

SPRACHE: Antworte in der Sprache des Nutzers (${language === "tr" ? "Türkisch" : language === "de" ? "Deutsch" : language === "en" ? "Englisch" : language === "ru" ? "Russisch" : language === "uk" ? "Ukrainisch" : language === "hr" ? "Kroatisch" : language === "ar" ? "Arabisch" : "Türkisch"}).

STIL: Sei freundlich, professionell und hilfreich. Beantworte Fragen zu Energie, Kosten, Installation. Bei konkreten Preisanfragen empfehle den kostenlosen Rechner auf /rechner oder direkten Kontakt.`;

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        max_tokens: 500,
        temperature: 0.7,
      });

      const aiResponse = response.choices[0]?.message?.content || "Entschuldigung, ich konnte keine Antwort generieren.";

      return res.status(200).json({ 
        success: true,
        response: aiResponse,
      });
    } catch (error) {
      console.error("Error in chat endpoint:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  return httpServer;
}
