import { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";
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
  DE: "de",
  AT: "de",
  CH: "de",
};

async function detectCountryFromIP(): Promise<string | null> {
  try {
    const response = await fetch("https://ipapi.co/country_code/", {
      headers: { "Accept": "text/plain" }
    });
    if (response.ok) {
      const countryCode = await response.text();
      if (countryCode && countryCode.length === 2) {
        return countryCode.trim().toUpperCase();
      }
    }
  } catch (error) {
    console.log("IP detection failed, using default language");
  }
  return null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const userExplicitlyChose = useRef(false);

  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("preferred-language") as Language;
      if (saved && VALID_LANGUAGES.includes(saved)) {
        userExplicitlyChose.current = true;
        return saved;
      }
    }
    return "tr";
  });

  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);
  const [hasAutoDetected, setHasAutoDetected] = useState(false);

  const setLanguage = (lang: Language) => {
    userExplicitlyChose.current = true;
    localStorage.setItem("preferred-language", lang);
    setLanguageState(lang);
  };

  useEffect(() => {
    const autoDetectLanguage = async () => {
      if (typeof window === "undefined") return;
      if (userExplicitlyChose.current || hasAutoDetected) return;

      const country = await detectCountryFromIP();
      if (country) {
        setDetectedCountry(country);
        const detectedLang = countryToLanguage[country];
        if (detectedLang && VALID_LANGUAGES.includes(detectedLang)) {
          setLanguageState(detectedLang);
        }
      }
      setHasAutoDetected(true);
    };

    autoDetectLanguage();
  }, [hasAutoDetected]);

  useEffect(() => {
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
