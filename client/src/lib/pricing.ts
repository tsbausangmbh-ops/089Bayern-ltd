// Zentrale Preisliste für 089 Bayern - Dezember 2025
// ALLE PREISE NETTO, OHNE GEWÄHR
// Letzte Aktualisierung: 18. Dezember 2025

export const EXCHANGE_RATE = 49.50; // EUR zu TL

// 4-in-1 Komplettsysteme (mit 30% Aufschlag)
export const SYSTEM_PRICES = {
  standard: {
    name: "Standard",
    kWp: 6,
    eurNet: 31200,
    tlNet: 1545000,
    description: "Ideal für Apartments und kleine Häuser",
  },
  medium: {
    name: "Medium",
    kWp: 10,
    eurNet: 41600,
    tlNet: 2060000,
    description: "Meistverkauft - für mittlere Häuser",
    popular: true,
  },
  premium: {
    name: "Premium",
    kWp: 12,
    eurNet: 58500,
    tlNet: 2900000,
    description: "Für große Villen und Mehrfamilienhäuser",
  },
};

// Einzelkomponenten (Türkei-Marktpreise + 30% Aufschlag)
export const COMPONENT_PRICES = {
  solar: {
    name: "Güneş Paneli / Solaranlage",
    options: [
      { label: "5 kW On-Grid", tlNet: 390000, eurNet: 7900 },
      { label: "10 kW On-Grid", tlNet: 520000, eurNet: 10500 },
      { label: "10 kW Hibrit (mit Batterie)", tlNet: 650000, eurNet: 13100 },
    ],
  },
  heatPump: {
    name: "Vaillant Isı Pompası / Wärmepumpe",
    brand: "Vaillant aroTHERM",
    options: [
      { label: "5 kW", tlNet: 182000, eurNet: 3700 },
      { label: "8 kW", tlNet: 247000, eurNet: 5000 },
      { label: "15 kW", tlNet: 338000, eurNet: 6800 },
    ],
  },
  airCon: {
    name: "Samsung Klima / Klimaanlage",
    brand: "Samsung Inverter",
    options: [
      { label: "9.000 BTU (25m²)", tlNet: 39000, eurNet: 790 },
      { label: "12.000 BTU (35m²)", tlNet: 45500, eurNet: 920 },
      { label: "18.000 BTU (50m²)", tlNet: 58500, eurNet: 1180 },
      { label: "24.000 BTU (70m²)", tlNet: 84500, eurNet: 1700 },
    ],
  },
  battery: {
    name: "Lityum Batarya / Batteriespeicher",
    brand: "BYD / LiFePO4",
    options: [
      { label: "5 kWh", tlNet: 75400, eurNet: 1520 },
      { label: "10 kWh", tlNet: 143000, eurNet: 2890 },
      { label: "15 kWh", tlNet: 195000, eurNet: 3940 },
    ],
  },
};

// Formatierungsfunktionen
export function formatTL(amount: number): string {
  return `₺${amount.toLocaleString("tr-TR")}`;
}

export function formatEUR(amount: number): string {
  return `€${amount.toLocaleString("de-DE")}`;
}

export function formatPrice(tlAmount: number, eurAmount: number): string {
  return `ca. ${formatTL(tlAmount)} (ca. ${formatEUR(eurAmount)})`;
}

export function formatPriceShort(tlAmount: number): string {
  return `ca. ${formatTL(tlAmount)}`;
}

// Disclaimer Texte
export const DISCLAIMERS = {
  de: "Alle Preise sind ca. Netto-Richtwerte ohne Gewähr. Endpreise nach kostenloser Vor-Ort-Beratung.",
  tr: "Tüm fiyatlar tahmini net fiyatlardır, garanti verilmez. Kesin fiyatlar ücretsiz yerinde danışmanlık sonrası belirlenir.",
  en: "All prices are approx. net estimates without warranty. Final prices after free on-site consultation.",
  ru: "Все цены являются приблизительными нетто без гарантии. Окончательные цены после бесплатной консультации на месте.",
  uk: "Усі ціни є приблизними нетто без гарантії. Остаточні ціни після безкоштовної консультації на місці.",
  hr: "Sve cijene su približne neto bez jamstva. Konačne cijene nakon besplatnog savjetovanja na licu mjesta.",
  ar: "جميع الأسعار تقريبية صافية بدون ضمان. الأسعار النهائية بعد الاستشارة المجانية في الموقع.",
};

// Monatliche Ersparnis Beispiele
export const SAVINGS_EXAMPLES = {
  small: {
    currentBill: 2500, // TL pro Monat
    afterSystem: 375,  // TL pro Monat
    savingsPercent: 85,
  },
  medium: {
    currentBill: 4000,
    afterSystem: 600,
    savingsPercent: 85,
  },
  large: {
    currentBill: 6000,
    afterSystem: 900,
    savingsPercent: 85,
  },
};

// ROI Berechnung
export function calculateROI(systemCost: number, monthlySavings: number): number {
  return Math.round(systemCost / (monthlySavings * 12) * 10) / 10; // Jahre
}
