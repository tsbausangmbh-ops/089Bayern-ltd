import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, isRTL } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  detectedCountry: string | null;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const VALID_LANGUAGES: Language[] = ["tr", "de", "en", "ru", "uk", "ar", "hr"];

const countryToLanguage: Record<string, Language> = {
  TR: "tr",
  HR: "hr",
  DE: "de",
  AT: "de",
  CH: "de",
  RU: "ru",
  UA: "uk",
  SA: "ar",
  AE: "ar",
  EG: "ar",
  GB: "en",
  US: "en",
};

async function detectCountryFromIP(): Promise<string | null> {
  try {
    const response = await fetch("http://ip-api.com/json/?fields=countryCode");
    if (response.ok) {
      const data = await response.json();
      return data.countryCode || null;
    }
  } catch (error) {
    console.log("IP detection failed, using default language");
  }
  return null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("preferred-language") as Language;
      if (saved && VALID_LANGUAGES.includes(saved)) {
        return saved;
      }
    }
    return "de";
  });

  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);
  const [hasAutoDetected, setHasAutoDetected] = useState(false);

  useEffect(() => {
    const autoDetectLanguage = async () => {
      if (typeof window === "undefined") return;
      
      const hasUserPreference = localStorage.getItem("preferred-language");
      if (hasUserPreference || hasAutoDetected) return;

      const country = await detectCountryFromIP();
      if (country) {
        setDetectedCountry(country);
        const detectedLang = countryToLanguage[country];
        if (detectedLang && VALID_LANGUAGES.includes(detectedLang)) {
          setLanguage(detectedLang);
        }
      }
      setHasAutoDetected(true);
    };

    autoDetectLanguage();
  }, [hasAutoDetected]);

  useEffect(() => {
    localStorage.setItem("preferred-language", language);
    document.documentElement.dir = isRTL(language) ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, detectedCountry }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
