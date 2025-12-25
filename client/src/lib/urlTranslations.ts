import { Language } from "./translations";

export interface UrlPaths {
  system: string;
  benefits: string;
  calculator: string;
  about: string;
  faq: string;
  locations: string;
  installationAntalya: string;
  installationAlanya: string;
  installationAnkara: string;
  solarPanel: string;
  heatPump: string;
  airConditioning: string;
  batteryStorage: string;
}

export const urlPaths: Record<Language, UrlPaths> = {
  tr: {
    system: "/sistem",
    benefits: "/avantajlar",
    calculator: "/hesaplayici",
    about: "/hakkimizda",
    faq: "/sss",
    locations: "/bolgeler",
    installationAntalya: "/kurulum-antalya",
    installationAlanya: "/kurulum-alanya",
    installationAnkara: "/kurulum-ankara",
    solarPanel: "/gunes-paneli",
    heatPump: "/isi-pompasi",
    airConditioning: "/klima",
    batteryStorage: "/enerji-depolama",
  },
  de: {
    system: "/systeme",
    benefits: "/vorteile",
    calculator: "/rechner",
    about: "/ueber-uns",
    faq: "/faq",
    locations: "/standorte",
    installationAntalya: "/installation-antalya",
    installationAlanya: "/installation-alanya",
    installationAnkara: "/installation-ankara",
    solarPanel: "/solaranlage",
    heatPump: "/waermepumpe",
    airConditioning: "/klimaanlage",
    batteryStorage: "/batteriespeicher",
  },
  en: {
    system: "/system",
    benefits: "/benefits",
    calculator: "/calculator",
    about: "/about",
    faq: "/faq",
    locations: "/locations",
    installationAntalya: "/installation-antalya",
    installationAlanya: "/installation-alanya",
    installationAnkara: "/installation-ankara",
    solarPanel: "/solar-panel",
    heatPump: "/heat-pump",
    airConditioning: "/air-conditioning",
    batteryStorage: "/battery-storage",
  },
  ru: {
    system: "/sistema",
    benefits: "/preimushchestva",
    calculator: "/kalkulyator",
    about: "/o-nas",
    faq: "/voprosy",
    locations: "/lokacii",
    installationAntalya: "/ustanovka-antalya",
    installationAlanya: "/ustanovka-alanya",
    installationAnkara: "/ustanovka-ankara",
    solarPanel: "/solnechnaya-panel",
    heatPump: "/teplovoy-nasos",
    airConditioning: "/konditsioner",
    batteryStorage: "/akkumulyator",
  },
  uk: {
    system: "/systema",
    benefits: "/perevagy",
    calculator: "/kalkulyator",
    about: "/pro-nas",
    faq: "/pytannya",
    locations: "/lokatsii",
    installationAntalya: "/vstanovlennya-antalya",
    installationAlanya: "/vstanovlennya-alanya",
    installationAnkara: "/vstanovlennya-ankara",
    solarPanel: "/sonyachna-panel",
    heatPump: "/teplovyy-nasos",
    airConditioning: "/kondytsioner",
    batteryStorage: "/akumulyator",
  },
  ar: {
    system: "/nizam",
    benefits: "/mazaya",
    calculator: "/hasba",
    about: "/hawlana",
    faq: "/asila",
    locations: "/mawaqie",
    installationAntalya: "/tarkib-antalya",
    installationAlanya: "/tarkib-alanya",
    installationAnkara: "/tarkib-ankara",
    solarPanel: "/lawha-shamsiya",
    heatPump: "/midkhkha-harara",
    airConditioning: "/takyif",
    batteryStorage: "/batariya",
  },
  hr: {
    system: "/sustav",
    benefits: "/prednosti",
    calculator: "/kalkulator",
    about: "/o-nama",
    faq: "/pitanja",
    locations: "/lokacije",
    installationAntalya: "/instalacija-antalya",
    installationAlanya: "/instalacija-alanya",
    installationAnkara: "/instalacija-ankara",
    solarPanel: "/solarni-panel",
    heatPump: "/toplinska-pumpa",
    airConditioning: "/klima-uredaj",
    batteryStorage: "/baterija",
  },
};

export function getLocalizedUrl(path: keyof UrlPaths, language: Language): string {
  return urlPaths[language][path];
}

export function getOfficeBadge(type: "headquarters" | "branch", language: Language): string {
  const badges: Record<Language, { headquarters: string; branch: string }> = {
    tr: { headquarters: "Merkez", branch: "Şube" },
    de: { headquarters: "Zentrale", branch: "Niederlassung" },
    en: { headquarters: "Headquarters", branch: "Branch" },
    ru: { headquarters: "Главный офис", branch: "Филиал" },
    uk: { headquarters: "Головний офіс", branch: "Філія" },
    ar: { headquarters: "المقر الرئيسي", branch: "فرع" },
    hr: { headquarters: "Sjedište", branch: "Podružnica" },
  };
  return badges[language][type];
}
