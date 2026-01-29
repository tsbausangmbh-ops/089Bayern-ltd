import { Link } from "wouter";
import { Language } from "@/lib/translations";
import { urlPaths, UrlPaths } from "@/lib/urlTranslations";

interface LinkedTextProps {
  text: string;
  language: Language;
  className?: string;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "div";
  maxLinks?: number;
}

interface KeywordMatch {
  keyword: string;
  url: string;
  start: number;
  end: number;
  path: keyof UrlPaths;
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getUrl(path: keyof UrlPaths, language: Language): string {
  return urlPaths[language][path];
}

const keywordMappings: Record<Language, { keywords: string[]; path: keyof UrlPaths }[]> = {
  tr: [
    { keywords: ["güneş paneli", "güneş panelleri", "fotovoltaik", "solar panel", "güneş enerjisi"], path: "solarPanel" },
    { keywords: ["ısı pompası", "ısı pompaları", "Vaillant ısı pompası"], path: "heatPump" },
    { keywords: ["klima", "klimalar", "Samsung klima", "inverter klima"], path: "airConditioning" },
    { keywords: ["enerji depolama", "batarya depolama", "akü sistemi", "batarya"], path: "batteryStorage" },
    { keywords: ["4-in-1 sistem", "4'lü sistem", "komple enerji sistemi"], path: "system" },
    { keywords: ["Antalya kurulum", "Antalya montaj"], path: "installationAntalya" },
    { keywords: ["Alanya kurulum", "Alanya montaj"], path: "installationAlanya" },
    { keywords: ["Ankara kurulum", "Ankara montaj"], path: "installationAnkara" },
  ],
  de: [
    { keywords: ["Solaranlage", "Solaranlagen", "Photovoltaik", "PV-Anlage", "Solarpanel"], path: "solarPanel" },
    { keywords: ["Wärmepumpe", "Wärmepumpen", "Vaillant Wärmepumpe"], path: "heatPump" },
    { keywords: ["Klimaanlage", "Klimaanlagen", "Samsung Klimaanlage"], path: "airConditioning" },
    { keywords: ["Batteriespeicher", "Stromspeicher", "Energiespeicher"], path: "batteryStorage" },
    { keywords: ["4-in-1 System", "Komplettsystem", "Energiesystem"], path: "system" },
    { keywords: ["Installation Antalya", "Montage Antalya"], path: "installationAntalya" },
    { keywords: ["Installation Alanya", "Montage Alanya"], path: "installationAlanya" },
    { keywords: ["Installation Ankara", "Montage Ankara"], path: "installationAnkara" },
  ],
  en: [
    { keywords: ["solar panel", "solar panels", "photovoltaic", "PV system"], path: "solarPanel" },
    { keywords: ["heat pump", "heat pumps", "Vaillant heat pump"], path: "heatPump" },
    { keywords: ["air conditioning", "AC", "Samsung AC"], path: "airConditioning" },
    { keywords: ["battery storage", "energy storage", "battery system"], path: "batteryStorage" },
    { keywords: ["4-in-1 system", "complete system", "energy system"], path: "system" },
    { keywords: ["installation Antalya"], path: "installationAntalya" },
    { keywords: ["installation Alanya"], path: "installationAlanya" },
    { keywords: ["installation Ankara"], path: "installationAnkara" },
  ],
  ru: [
    { keywords: ["солнечная панель", "солнечные панели", "фотоэлектрика"], path: "solarPanel" },
    { keywords: ["тепловой насос", "тепловые насосы"], path: "heatPump" },
    { keywords: ["кондиционер", "кондиционеры"], path: "airConditioning" },
    { keywords: ["аккумулятор", "накопитель энергии"], path: "batteryStorage" },
    { keywords: ["система 4-в-1", "энергосистема"], path: "system" },
  ],
  uk: [
    { keywords: ["сонячна панель", "сонячні панелі"], path: "solarPanel" },
    { keywords: ["тепловий насос", "теплові насоси"], path: "heatPump" },
    { keywords: ["кондиціонер", "кондиціонери"], path: "airConditioning" },
    { keywords: ["акумулятор", "накопичувач"], path: "batteryStorage" },
    { keywords: ["система 4-в-1", "енергосистема"], path: "system" },
  ],
  ar: [
    { keywords: ["لوحة شمسية", "الألواح الشمسية"], path: "solarPanel" },
    { keywords: ["مضخة حرارية"], path: "heatPump" },
    { keywords: ["تكييف", "مكيف"], path: "airConditioning" },
    { keywords: ["بطارية", "تخزين الطاقة"], path: "batteryStorage" },
    { keywords: ["نظام 4 في 1"], path: "system" },
  ],
  hr: [
    { keywords: ["solarni panel", "solarni paneli", "fotonapon"], path: "solarPanel" },
    { keywords: ["toplinska pumpa", "toplinske pumpe"], path: "heatPump" },
    { keywords: ["klima uređaj", "klima"], path: "airConditioning" },
    { keywords: ["baterija", "pohrana energije"], path: "batteryStorage" },
    { keywords: ["4-u-1 sustav", "energetski sustav"], path: "system" },
  ],
};

export function LinkedText({ 
  text, 
  language, 
  className = "", 
  as: Component = "span",
  maxLinks = 3
}: LinkedTextProps) {
  const mappings = keywordMappings[language] || [];
  const matches: KeywordMatch[] = [];
  const usedPaths = new Set<string>();
  
  for (const mapping of mappings) {
    if (usedPaths.has(mapping.path)) continue;
    
    for (const keyword of mapping.keywords) {
      const regex = new RegExp(`\\b(${escapeRegExp(keyword)})\\b`, 'gi');
      let match;
      while ((match = regex.exec(text)) !== null) {
        if (!usedPaths.has(mapping.path)) {
          matches.push({
            keyword: match[1],
            url: getUrl(mapping.path, language),
            start: match.index,
            end: match.index + match[1].length,
            path: mapping.path
          });
          usedPaths.add(mapping.path);
          break;
        }
      }
    }
  }
  
  matches.sort((a, b) => a.start - b.start);
  
  const limitedMatches = matches.slice(0, maxLinks);
  
  const filteredMatches: KeywordMatch[] = [];
  for (const m of limitedMatches) {
    const overlaps = filteredMatches.some(
      existing => (m.start >= existing.start && m.start < existing.end) ||
                  (m.end > existing.start && m.end <= existing.end)
    );
    if (!overlaps) {
      filteredMatches.push(m);
    }
  }
  
  if (filteredMatches.length === 0) {
    return <Component className={className}>{text}</Component>;
  }
  
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  
  for (const m of filteredMatches) {
    if (m.start > lastIndex) {
      parts.push(text.slice(lastIndex, m.start));
    }
    parts.push(
      <Link 
        key={`${m.url}-${m.start}`} 
        href={m.url}
        className="text-primary hover:underline font-medium"
      >
        {m.keyword}
      </Link>
    );
    lastIndex = m.end;
  }
  
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  
  return <Component className={className}>{parts}</Component>;
}
