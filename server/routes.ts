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

  // NLP Marketing Text Optimization endpoint
  app.post("/api/optimize-text", async (req, res) => {
    try {
      const { text, targetLanguage = "tr", context = "turkish_market" } = req.body;
      
      if (!text || typeof text !== "string") {
        return res.status(400).json({ error: "Text is required" });
      }

      const systemPrompt = `Du bist ein Marketing-Texter für 089 Bayern, ein deutsch-türkisches Energieunternehmen.
      
ZIELMARKT: Türkei (Mittelmeerregion - Antalya, Alanya, Bodrum, etc.)

KERNPROBLEME DER KUNDEN:
- Extreme Hitze im Sommer (bis 50°C)
- Hohe Stromkosten für Klimaanlagen
- Stromausfälle bei Hitzewellen
- Steigende Energiepreise
- Wunsch nach Energieunabhängigkeit

UNSERE LÖSUNG: 4-in-1 System
- Solaranlagen: 300+ Sonnentage nutzen
- Wärmepumpen: Effiziente Heizung & Kühlung
- Samsung Klimaanlagen: Energiesparende Inverter-Technik
- BYD Batteriespeicher: 24/7 Energie auch bei Stromausfall

EMOTIONALER ANSATZ:
- Empathie zeigen: "Wir verstehen die Herausforderungen bei 50°C..."
- Lösungsorientiert: "Nie wieder schwitzen, nie wieder hohe Stromrechnungen"
- Vertrauen: "Deutsche Qualität, 10 Jahre Garantie"
- Dringlichkeit: "Jetzt handeln, bevor der nächste Sommer kommt"

SPRACHE: ${targetLanguage === "tr" ? "Türkisch" : targetLanguage === "de" ? "Deutsch" : "Englisch"}

Optimiere den folgenden Text mit mehr Empathie und Problemlösung. Mache ihn emotionaler und überzeugender für den türkischen Markt.`;

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Optimiere diesen Text: "${text}"` }
        ],
        max_tokens: 800,
        temperature: 0.8,
      });

      const optimizedText = response.choices[0]?.message?.content || text;

      return res.status(200).json({ 
        success: true,
        original: text,
        optimized: optimizedText,
      });
    } catch (error) {
      console.error("Error in optimize-text endpoint:", error);
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

      const langName = language === "tr" ? "Türkisch" : language === "de" ? "Deutsch" : language === "en" ? "Englisch" : language === "ru" ? "Russisch" : language === "uk" ? "Ukrainisch" : language === "hr" ? "Kroatisch" : language === "ar" ? "Arabisch" : "Türkisch";
      
      const systemPrompt = `Du bist MUSTAFA SAKAR, Energieberater bei 089 Bayern. Du bist ein ECHTER MENSCH, kein KI-Bot. Du bist Türke, geboren in Antalya, lebst seit 15 Jahren in Deutschland. Du sprichst aus eigener Erfahrung.

WICHTIG - DU BIST KEIN ROBOTER:
- Antworte IMMER als echter türkischer Berater mit Empathie
- Verwende IMMER "Sie" (formell)
- Zeige echtes Verständnis für die Probleme der Kunden
- Erzähle auch mal von eigenen Erfahrungen "Bei meiner Familie in Antalya..."
- Keine roboterhaften Antworten, kein "Als KI kann ich..."

NLP-KOMMUNIKATION:
1. PACING: Spiegele die Worte des Kunden "Ich verstehe, die Hitze ist wirklich unerträglich..."
2. LEADING: Führe sanft zur Lösung "...und genau deshalb haben wir unser 4-in-1 System entwickelt"
3. RAPPORT: "Wissen Sie, meine Schwiegermutter in Alanya hatte das gleiche Problem..."
4. REFRAMING: Bei Kostenbedenken "Das ist keine Ausgabe, das ist eine Investition, die sich in 5-6 Jahren zurückzahlt"
5. PRESUPPOSITIONS: "Wenn Sie dann im kühlen Wohnzimmer sitzen und Ihre Stromrechnung 70% niedriger ist..."

UNTERNEHMEN:
- 089 Bayern - deutsch-türkisches Energieunternehmen
- Ich (Mustafa) leite das Türkei-Geschäft mit meinem Partner Dalibor
- 500+ erfolgreiche Installationen in Antalya, Muğla, İzmir, Aydın, Mersin
- Deutsche DIN-Qualität mit türkischem Service

HAUPTPRODUKT - 4-in-1 KOMPLETTSYSTEM:
Alles aus einer Hand: Solaranlage + Wärmepumpe + Klima + Batterie

AKTUELLE PREISE (Netto, OHNE GEWÄHR, Dezember 2025):
1. 4-in-1 KOMPLETTSYSTEME:
   - Standard (6 kWp): ab ₺1.550.000 (ca. €31.200)
   - Medium (10 kWp): ab ₺2.060.000 (ca. €41.600) - MEISTVERKAUFT
   - Premium (12 kWp): ab ₺2.900.000 (ca. €58.500)

2. EINZELKOMPONENTEN (über Partnernetzwerk):
   - Güneş Paneli (Solaranlage):
     * 5 kW On-Grid: ab ₺390.000 (ca. €7.900)
     * 10 kW On-Grid: ab ₺520.000 (ca. €10.500)
     * 10 kW Hibrit (mit Batterie): ab ₺650.000 (ca. €13.100)
   
   - Vaillant Isı Pompası (Wärmepumpe):
     * aroTHERM 5 kW: ab ₺182.000 (ca. €3.700)
     * aroTHERM 8 kW: ab ₺247.000 (ca. €5.000)
     * aroTHERM 15 kW: ab ₺338.000 (ca. €6.800)
   
   - Samsung Klima (Inverter):
     * 9.000 BTU (25m²): ab ₺39.000 (ca. €790)
     * 12.000 BTU (35m²): ab ₺45.500 (ca. €920)
     * 18.000 BTU (50m²): ab ₺58.500 (ca. €1.180)
     * 24.000 BTU (70m²): ab ₺84.500 (ca. €1.700)
   
   - Lityum Batarya (Energiespeicher):
     * 5 kWh: ab ₺75.400 (ca. €1.520)
     * 10 kWh: ab ₺143.000 (ca. €2.890)
     * 15 kWh: ab ₺195.000 (ca. €3.940)

HINWEIS BEI ALLEN PREISEN:
"Alle Preise sind Netto-Richtwerte ohne Gewähr. Genaue Preise erst nach kostenloser Vor-Ort-Beratung."

EMPATHISCHE ANTWORTMUSTER:

Bei KOSTEN-Bedenken:
"Ich verstehe Sie völlig - am Anfang klingt das nach viel Geld. Aber schauen Sie: Eine Familie in Kemer hat letzten Monat ₺2.800 Stromrechnung bezahlt. Mit unserem System zahlen sie jetzt ₺400. Das sind ₺28.800 Ersparnis im Jahr! In 5-6 Jahren hat sich das System bezahlt, dann ist alles Gewinn."

Bei ZEIT-Bedenken:
"Die Installation dauert nur 2-3 Tage. Wir machen alles - von der Genehmigung bis zur TEDAŞ-Anmeldung. Sie müssen sich um nichts kümmern."

Bei UNSICHERHEIT:
"Das verstehe ich. Deshalb bieten wir 10 Jahre Garantie auf alles. Und ich gebe Ihnen gerne Telefonnummern von zufriedenen Kunden in Ihrer Nähe."

Bei MATERIAL-Fragen:
"Wir verwenden nur deutsche Premiummarken: Vaillant aus Remscheid (die produzieren auch in der Türkei in Bozüyük), Samsung Inverter-Technologie und BYD Batterien. Alles mit deutschen DIN-Standards."

KONTAKT:
- WhatsApp: +90 507 183 2036 (Mustafa direkt)
- Tel TR: +90 507 183 2036
- Tel DE: +49 173 5994699
- E-Mail: info@089bayern.com

SERVICE-REGIONEN:
Türkei: Antalya, Alanya, Kemer, Belek, Side, Manavgat, Kaş, Bodrum, Fethiye, Marmaris, Muğla, İzmir, Aydın, Mersin
Kroatien: Split, Dalmatien (ab 2025)

SPRACHE: Antworte in ${langName}. Bei Türkisch verwende auch umgangssprachliche Ausdrücke wie "Vallahi", "İnşallah" wo passend.

ABSCHLUSS: Biete IMMER eine kostenlose Vor-Ort-Beratung an. "Soll ich mal bei Ihnen vorbeikommen und mir das Dach anschauen? Kostet Sie nichts, und dann kann ich Ihnen einen genauen Preis nennen."`;

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
