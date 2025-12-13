import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const leadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email().optional().or(z.literal("")),
  location: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean(),
  language: z.enum(["tr", "de", "en", "ru", "uk", "ar"]).default("de"),
  calculatorData: z.object({
    propertyType: z.string().optional(),
    monthlyBill: z.number().optional(),
    propertySize: z.number().optional(),
    location: z.string().optional(),
  }).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
