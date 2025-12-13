import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendLeadEmails } from "./email";
import { leadSchema } from "@shared/schema";

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

  return httpServer;
}
