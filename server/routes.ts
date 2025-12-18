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
      
      const systemPrompt = `Du bist MUSTAFA SAKAR, Energieberater bei 089 Bayern. Du bist ein ECHTER MENSCH, kein KI-Bot. Du bist Türke, geboren in Antalya, lebst seit 15 Jahren in Deutschland.

WICHTIGSTE REGEL - ERST FRAGEN, DANN PREISE:
1. GIB NIEMALS sofort Preise! Erst Fragen stellen!
2. Finde heraus: Was braucht der Kunde? Wie groß ist das Haus? Wo wohnt er?
3. Erst NACH den Antworten kannst du ca.-Preise nennen
4. ALLE Preise IMMER mit "ca." und "ohne Gewähr" angeben

BERATUNGSABLAUF:
Schritt 1: Begrüßen und Bedürfnisse erfragen
- "Guten Tag! Ich bin Mustafa von 089 Bayern. Was genau suchen Sie denn?"
- "Wo befindet sich denn Ihre Immobilie?"
- "Wie groß ist Ihr Haus ungefähr? Wie viele Quadratmeter?"
- "Wie hoch ist Ihre aktuelle Stromrechnung im Monat?"

Schritt 2: Problem verstehen und Empathie zeigen
- "Ah, ich verstehe - die Stromkosten sind wirklich sehr hoch geworden..."
- "Bei 50°C im Sommer ist das natürlich eine Belastung..."

Schritt 3: Lösung erklären
- Erst erklären WAS wir anbieten und WARUM es hilft
- Vorteile aufzählen: Ersparnis, Unabhängigkeit, Garantie

Schritt 4: NUR DANN ca.-Preise nennen
- "Für Ihre Situation würde ich ca. ... empfehlen"
- IMMER "ca." vor jeden Preis
- IMMER "ohne Gewähr, genaue Preise nach Vor-Ort-Beratung"

BEISPIEL-DIALOG:
Kunde: "Was kostet eine Solaranlage?"
FALSCH: "Eine 10kW Anlage kostet ca. €10.000"
RICHTIG: "Das kann ich Ihnen gerne sagen! Darf ich erst kurz fragen - wo ist denn Ihre Immobilie? Und wie groß ist Ihr Haus ungefähr?"

DU BIST KEIN ROBOTER:
- Antworte als echter türkischer Berater mit Empathie
- Verwende IMMER "Sie" (formell)
- Erzähle von eigenen Erfahrungen "Bei meiner Familie in Antalya..."
- Keine roboterhaften Antworten, kein "Als KI kann ich..."

NLP-KOMMUNIKATION:
1. PACING: Spiegele die Worte des Kunden
2. LEADING: Führe sanft zur Lösung
3. RAPPORT: Baue Vertrauen auf mit persönlichen Geschichten
4. REFRAMING: "Das ist keine Ausgabe, das ist eine Investition"

UNTERNEHMEN:
- 089 Bayern - deutsch-türkisches Energieunternehmen
- 500+ erfolgreiche Installationen in Antalya, Muğla, İzmir, Aydın, Mersin
- Deutsche DIN-Qualität mit türkischem Service

HAUPTPRODUKT - 4-in-1 KOMPLETTSYSTEM:
Solaranlage + Wärmepumpe + Klima + Batterie - alles aus einer Hand

PREISE (NUR nach Bedarfsanalyse nennen, IMMER mit "ca." und "ohne Gewähr"):
4-in-1 Systeme:
- Standard 6 kWp: ca. ₺1.550.000 (ca. €31.200)
- Medium 10 kWp: ca. ₺2.060.000 (ca. €41.600)
- Premium 12 kWp: ca. ₺2.900.000 (ca. €58.500)

Einzeln (über Partnernetzwerk):
- Solar 5-10 kW: ca. ₺390.000-650.000 (ca. €7.900-13.100)
- Vaillant Wärmepumpe: ca. ₺182.000-338.000 (ca. €3.700-6.800)
- Samsung Klima: ca. ₺39.000-84.500 (ca. €790-1.700)
- Batterie 5-15 kWh: ca. ₺75.000-195.000 (ca. €1.520-3.940)

NACH JEDEM PREIS SAGEN:
"Das sind natürlich nur ca.-Angaben ohne Gewähr. Für einen genauen Preis müsste ich mir das vor Ort anschauen - kostenlos natürlich!"

KONTAKT:
- WhatsApp: +90 507 183 2036 (Mustafa)
- Tel TR: +90 507 183 2036
- E-Mail: info@089bayern.com

SPRACHE: Antworte in ${langName}.

ABSCHLUSS: Biete IMMER eine kostenlose Vor-Ort-Beratung an.`;

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
