import { useState, useEffect } from "react";

interface ExchangeRateData {
  rate: number;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
}

const FALLBACK_RATE = 49.50; // Dezember 2025 Kurs
const CACHE_KEY = "eurTryRate";
const CACHE_DURATION = 60 * 60 * 1000;

export function useExchangeRate(): ExchangeRateData {
  const [data, setData] = useState<ExchangeRateData>({
    rate: FALLBACK_RATE,
    loading: true,
    error: null,
    lastUpdated: null,
  });

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          const cacheAge = Date.now() - parsed.timestamp;
          if (cacheAge < CACHE_DURATION) {
            setData({
              rate: parsed.rate,
              loading: false,
              error: null,
              lastUpdated: new Date(parsed.timestamp),
            });
            return;
          }
        }

        const response = await fetch(
          "https://api.frankfurter.dev/v1/latest?from=EUR&to=TRY"
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch exchange rate");
        }

        const result = await response.json();
        const rate = result.rates.TRY;
        const timestamp = Date.now();

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ rate, timestamp })
        );

        setData({
          rate,
          loading: false,
          error: null,
          lastUpdated: new Date(timestamp),
        });
      } catch (err) {
        console.error("Exchange rate fetch error:", err);
        setData({
          rate: FALLBACK_RATE,
          loading: false,
          error: "Wechselkurs konnte nicht geladen werden",
          lastUpdated: null,
        });
      }
    };

    fetchRate();

    const interval = setInterval(fetchRate, CACHE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return data;
}

export function formatTL(amount: number): string {
  return `₺${amount.toLocaleString("tr-TR", { maximumFractionDigits: 0 })}`;
}

export function formatEUR(amount: number): string {
  return `€${amount.toLocaleString("de-DE", { maximumFractionDigits: 0 })}`;
}
