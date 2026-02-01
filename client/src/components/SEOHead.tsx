import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/lib/LanguageContext";
import { urlPaths, type UrlPaths } from "@/lib/urlTranslations";
import type { Language } from "@/lib/translations";

interface SEOHeadProps {
  page: "home" | "systeme" | "vorteile" | "rechner" | "faq" | "ueber-uns" | "team" | "legal" | "installation-antalya" | "installation-ankara" | "installation-alanya" | "standorte";
  pageTitle?: string;
}

const seoData = {
  tr: {
    siteName: "089 Bayern Enerji Sistemleri",
    home: {
      title: "089 Bayern | Antalya Güneş Enerjisi & Isı Pompası | Alman 4'ü 1 Arada Sistem",
      description: "Antalya, Alanya, Kemer, Belek, Side, Manavgat'ta güneş paneli, ısı pompası, klima ve enerji depolama. Alman mühendisliği ile %70 enerji tasarrufu. Vaillant & Samsung yetkili bayii. Ücretsiz keşif: +90 507 183 2036",
      keywords: "güneş paneli antalya, ısı pompası alanya, solar panel kemer, güneş enerjisi belek, wärmepumpe side, photovoltaik manavgat, 089 bayern, alman enerji sistemi türkiye, villa güneş enerjisi akdeniz"
    },
    systeme: {
      title: "4'ü 1 Arada Alman Enerji Sistemi | Güneş + Isı Pompası + Klima + Batarya | 089 Bayern Antalya",
      description: "089 Bayern 4-in-1 German System: Photovoltaik, Wärmepompa, Samsung klima ve lityum batarya tek sistemde. Antalya, Alanya, Kemer'de kurulum. 10 yıl garanti, Alman DIN standartları.",
      keywords: "4 in 1 enerji sistemi, güneş paneli ısı pompası entegre, hibrit enerji sistemi antalya, wärmepumpe türkei, photovoltaik akdeniz, villa enerji çözümü"
    },
    vorteile: {
      title: "10 Ay Ücretsiz Enerji Avantajları | Antalya Güneş Enerjisi Tasarrufu | 089 Bayern",
      description: "Akdeniz'in 300+ güneşli günü ile yılda 10 ay ücretsiz elektrik ve ısınma. Antalya, Alanya, Side'da %70 enerji tasarrufu. 4-6 yıl geri ödeme süresi. Ücretsiz hesaplama yapın.",
      keywords: "enerji tasarrufu antalya, güneş enerjisi avantajları, ücretsiz elektrik akdeniz, ısı pompası tasarruf, solar panel yatırım getirisi"
    },
    rechner: {
      title: "Enerji Tasarruf Hesaplayıcı | Antalya Güneş Paneli Fiyat Hesaplama | 089 Bayern",
      description: "Antalya, Alanya, Kemer, Side için kişiselleştirilmiş enerji tasarrufu hesabı. Villa m² ve konuma göre güneş paneli, ısı pompası maliyeti ve tasarruf hesaplama. Ücretsiz teklif alın.",
      keywords: "güneş paneli fiyat hesaplama, enerji tasarrufu hesaplayıcı, solar panel maliyet antalya, ısı pompası fiyat alanya"
    },
    faq: {
      title: "Sıkça Sorulan Sorular | Güneş Enerjisi & Isı Pompası | 089 Bayern Antalya",
      description: "Antalya'da güneş paneli kurulumu, ısı pompası bakımı, enerji depolama ve 089 Bayern 4-in-1 sistem hakkında en çok sorulan 20 soru ve uzman cevapları.",
      keywords: "güneş paneli soru cevap, ısı pompası nasıl çalışır, solar panel bakım, enerji depolama türkiye, 089 bayern destek"
    },
    "ueber-uns": {
      title: "Hakkımızda | München'den Antalya'ya Alman Enerji Uzmanları | 089 Bayern",
      description: "089 Bayern: 2018'den beri Almanya-Türkiye köprüsü. München'den Antalya, Alanya, Akdeniz bölgesine Alman kalitesi enerji sistemleri. 500+ mutlu aile, 10 yıl garanti.",
      keywords: "089 bayern hakkında, alman enerji şirketi türkiye, güneş enerjisi uzmanı antalya, münchen antalya enerji"
    },
    team: {
      title: "Ekibimiz | Alman-Türk Enerji Uzmanları | 089 Bayern Antalya",
      description: "089 Bayern ekibi: Dalibor Bakmaz ve Mustafa Sakar liderliğinde Alman mühendislik kalitesi. Antalya, Alanya, Muğla'da profesyonel enerji danışmanlığı.",
      keywords: "089 bayern ekip, enerji danışmanı antalya, güneş paneli uzmanı alanya"
    },
    legal: {
      title: "Yasal Bilgiler | 089 Bayern Enerji Sistemleri",
      description: "089 Bayern yasal politikalar: KVKK, gizlilik politikası, çerez politikası, kullanım şartları ve mesafeli satış sözleşmesi.",
      keywords: "089 bayern kvkk, gizlilik politikası, kullanım şartları"
    },
    "installation-antalya": {
      title: "4'ü 1 Arada Enerji Sistemi Kurulumu Antalya | Güneş Paneli & Isı Pompası | 089 Bayern",
      description: "Antalya, Kemer, Belek, Side, Alanya'da profesyonel 4'ü 1 arada enerji sistemi kurulumu. Güneş paneli, Vaillant ısı pompası, Samsung klima ve batarya depolama. Alman kalitesi, 10 yıl garanti.",
      keywords: "enerji sistemi kurulum antalya, güneş paneli montaj kemer, ısı pompası kurulum belek, solar panel side, 4 in 1 sistem alanya"
    },
    "installation-ankara": {
      title: "4'ü 1 Arada Enerji Sistemi Kurulumu Ankara | Güneş Paneli & Isı Pompası | 089 Bayern",
      description: "Ankara ve çevresinde profesyonel 4'ü 1 arada enerji sistemi kurulumu. Güneş paneli, Vaillant ısı pompası, Samsung klima ve batarya depolama. Alman kalitesi, 10 yıl garanti. Çankaya, Keçiören, Yenimahalle.",
      keywords: "enerji sistemi kurulum ankara, güneş paneli montaj çankaya, ısı pompası kurulum keçiören, solar panel ankara, 4 in 1 sistem türkiye başkent"
    },
    "installation-alanya": {
      title: "4'ü 1 Arada Enerji Sistemi Kurulumu Alanya | Güneş Paneli & Isı Pompası | 089 Bayern Şubesi",
      description: "Alanya ve çevresinde profesyonel 4'ü 1 arada enerji sistemi kurulumu. 089 Bayern Alanya şubesi. Güneş paneli, Vaillant ısı pompası, Samsung klima ve batarya depolama. Mahmutlar, Kestel, Oba.",
      keywords: "enerji sistemi kurulum alanya, güneş paneli montaj mahmutlar, ısı pompası kurulum kestel, solar panel alanya, 4 in 1 sistem akdeniz"
    },
    standorte: {
      title: "Hizmet Bölgelerimiz | Türkiye, Hırvatistan, Yunanistan | 089 Bayern",
      description: "089 Bayern enerji sistemleri kurulum bölgeleri: Antalya, Alanya, Muğla, İzmir, Split, Dalmaçya. Akdeniz ve Ege'de güneş paneli, ısı pompası, klima kurulumu.",
      keywords: "089 bayern hizmet bölgeleri, güneş paneli kurulum türkiye, solar panel akdeniz, enerji sistemleri hırvatistan"
    }
  },
  de: {
    siteName: "089 Bayern Energiesysteme",
    home: {
      title: "089 Bayern | Solaranlage & Wärmepumpe Antalya | Deutsches 4-in-1 System Türkei",
      description: "Solaranlage, Wärmepumpe, Klimaanlage und Stromspeicher in Antalya, Alanya, Kemer, Belek, Side, Manavgat. Deutsche Ingenieursqualität mit bis zu 70% Energieeinsparung. Kostenlose Beratung: +90 507 183 2036",
      keywords: "solaranlage antalya, wärmepumpe türkei, photovoltaik mittelmeer, solar panel alanya, deutsche energiesysteme türkei, villa solaranlage, 089 bayern"
    },
    systeme: {
      title: "4-in-1 Deutsches Energiesystem | Solar + Wärmepumpe + Klima + Batterie | 089 Bayern",
      description: "089 Bayern 4-in-1 German System: Photovoltaik, Wärmepumpe, Samsung Klimaanlage und Lithium-Batterie in einem System. Installation in Antalya, Alanya, Kemer. 10 Jahre Garantie nach DIN-Standards.",
      keywords: "4 in 1 energiesystem, solar wärmepumpe integration, hybrides energiesystem, deutsches energiesystem türkei"
    },
    vorteile: {
      title: "10 Monate Kostenlose Energie | Vorteile Solaranlage Antalya | 089 Bayern",
      description: "Mit 300+ Sonnentagen am Mittelmeer 10 Monate kostenloser Strom und Heizung. Bis zu 70% Energieeinsparung in Antalya, Alanya, Side. Amortisation in 4-6 Jahren.",
      keywords: "energieeinsparung antalya, solaranlage vorteile türkei, kostenloser strom mittelmeer, wärmepumpe ersparnis"
    },
    rechner: {
      title: "Einsparungsrechner | Solaranlage Kosten Antalya | 089 Bayern",
      description: "Personalisierte Energieeinsparungsberechnung für Antalya, Alanya, Kemer, Side. Solaranlage und Wärmepumpe Kosten nach Villa m² und Standort. Kostenloses Angebot.",
      keywords: "solaranlage kosten rechner, energieeinsparung berechnen, solar preis antalya, wärmepumpe kosten türkei"
    },
    faq: {
      title: "Häufige Fragen | Solaranlage & Wärmepumpe | 089 Bayern Antalya",
      description: "Die 20 häufigsten Fragen zu Solaranlagen, Wärmepumpen, Energiespeicher und dem 089 Bayern 4-in-1 System in Antalya beantwortet von unseren Experten.",
      keywords: "solaranlage fragen antworten, wärmepumpe faq, solar panel wartung, energiespeicher türkei"
    },
    "ueber-uns": {
      title: "Über Uns | Deutsche Energieexperten in Antalya | 089 Bayern",
      description: "089 Bayern: Seit 2018 die Brücke zwischen Deutschland und der Türkei. Deutsche Qualität für Antalya, Alanya und die Mittelmeerregion. 500+ zufriedene Familien, 10 Jahre Garantie.",
      keywords: "089 bayern über uns, deutsches unternehmen türkei, solarexperten antalya, münchen antalya energie"
    },
    team: {
      title: "Unser Team | Deutsch-Türkische Energieexperten | 089 Bayern",
      description: "Das 089 Bayern Team: Unter der Leitung von Dalibor Bakmaz und Mustafa Sakar. Deutsche Ingenieursqualität in Antalya, Alanya, Muğla.",
      keywords: "089 bayern team, energieberater antalya, solarexperten alanya"
    },
    legal: {
      title: "Rechtliche Informationen | 089 Bayern Energiesysteme",
      description: "089 Bayern rechtliche Richtlinien: Datenschutz, Cookie-Richtlinie, AGB und Fernabsatzvertrag.",
      keywords: "089 bayern datenschutz, agb, impressum"
    },
    "installation-antalya": {
      title: "4-in-1 Energiesystem-Installation Antalya | Solaranlage & Wärmepumpe | 089 Bayern",
      description: "Professionelle 4-in-1 Energiesystem-Installation in Antalya, Kemer, Belek, Side, Alanya. Solaranlage, Vaillant Wärmepumpe, Samsung Klimaanlage und Batteriespeicher. Deutsche Qualität, 10 Jahre Garantie.",
      keywords: "energiesystem installation antalya, solaranlage montage kemer, wärmepumpe installation belek, solar panel side, 4 in 1 system alanya"
    },
    "installation-ankara": {
      title: "4-in-1 Energiesystem-Installation Ankara | Solaranlage & Wärmepumpe | 089 Bayern",
      description: "Professionelle 4-in-1 Energiesystem-Installation in Ankara und Umgebung. Solaranlage, Vaillant Wärmepumpe, Samsung Klimaanlage und Batteriespeicher. Deutsche Qualität, 10 Jahre Garantie. Çankaya, Keçiören, Yenimahalle.",
      keywords: "energiesystem installation ankara, solaranlage montage türkei hauptstadt, wärmepumpe installation ankara, solar panel ankara, 4 in 1 system türkei"
    },
    "installation-alanya": {
      title: "4-in-1 Energiesystem-Installation Alanya | Solaranlage & Wärmepumpe | 089 Bayern Niederlassung",
      description: "Professionelle 4-in-1 Energiesystem-Installation in Alanya und Umgebung. 089 Bayern Niederlassung Alanya. Solaranlage, Vaillant Wärmepumpe, Samsung Klimaanlage und Batteriespeicher. Mahmutlar, Kestel, Oba.",
      keywords: "energiesystem installation alanya, solaranlage montage mahmutlar, wärmepumpe installation kestel, solar panel alanya, 4 in 1 system mittelmeer"
    },
    standorte: {
      title: "Unsere Serviceregionen | Türkei, Kroatien, Griechenland | 089 Bayern",
      description: "089 Bayern Energiesystem-Installationsregionen: Antalya, Alanya, Muğla, Izmir, Split, Dalmatien. Solaranlage, Wärmepumpe, Klimaanlage Installation am Mittelmeer und in der Ägäis.",
      keywords: "089 bayern serviceregionen, solaranlage installation türkei, solar panel mittelmeer, energiesysteme kroatien"
    }
  },
  en: {
    siteName: "089 Bayern Energy Systems",
    home: {
      title: "089 Bayern | Solar Panels & Heat Pump Antalya Turkey | German 4-in-1 System",
      description: "Solar panels, heat pumps, air conditioning and battery storage in Antalya, Alanya, Kemer, Belek, Side, Manavgat Turkey. German engineering with up to 70% energy savings. Free consultation: +90 507 183 2036",
      keywords: "solar panels antalya, heat pump turkey, photovoltaic mediterranean, solar panel alanya, german energy systems turkey, villa solar power, 089 bayern"
    },
    systeme: {
      title: "4-in-1 German Energy System | Solar + Heat Pump + AC + Battery | 089 Bayern Turkey",
      description: "089 Bayern 4-in-1 German System: Photovoltaic, heat pump, Samsung AC and lithium battery in one system. Installation in Antalya, Alanya, Kemer. 10-year warranty, German DIN standards.",
      keywords: "4 in 1 energy system, solar heat pump integration, hybrid energy system, german energy system turkey"
    },
    vorteile: {
      title: "10 Months Free Energy Benefits | Solar Panel Savings Antalya | 089 Bayern",
      description: "With 300+ sunny days in the Mediterranean, enjoy 10 months of free electricity and heating. Up to 70% energy savings in Antalya, Alanya, Side. 4-6 year payback period.",
      keywords: "energy savings antalya, solar panel benefits turkey, free electricity mediterranean, heat pump savings"
    },
    rechner: {
      title: "Energy Savings Calculator | Solar Panel Cost Antalya | 089 Bayern",
      description: "Personalized energy savings calculation for Antalya, Alanya, Kemer, Side. Solar panel and heat pump costs based on villa size and location. Free quote.",
      keywords: "solar panel cost calculator, energy savings calculator, solar price antalya, heat pump cost turkey"
    },
    faq: {
      title: "Frequently Asked Questions | Solar & Heat Pump | 089 Bayern Antalya",
      description: "Top 20 questions about solar panels, heat pumps, energy storage and the 089 Bayern 4-in-1 system in Antalya answered by our experts.",
      keywords: "solar panel faq, heat pump questions, solar maintenance, energy storage turkey"
    },
    "ueber-uns": {
      title: "About Us | German Energy Experts in Antalya | 089 Bayern",
      description: "089 Bayern: Since 2018, the bridge between Germany and Turkey. German quality for Antalya, Alanya and the Mediterranean region. 500+ happy families, 10-year warranty.",
      keywords: "089 bayern about us, german company turkey, solar experts antalya, munich antalya energy"
    },
    team: {
      title: "Our Team | German-Turkish Energy Experts | 089 Bayern",
      description: "The 089 Bayern Team: Led by Dalibor Bakmaz and Mustafa Sakar. German engineering quality in Antalya, Alanya, Muğla.",
      keywords: "089 bayern team, energy consultant antalya, solar experts alanya"
    },
    legal: {
      title: "Legal Information | 089 Bayern Energy Systems",
      description: "089 Bayern legal policies: Privacy policy, cookie policy, terms of use and distance sales agreement.",
      keywords: "089 bayern privacy, terms, legal"
    },
    "installation-antalya": {
      title: "4-in-1 Energy System Installation Antalya | Solar Panels & Heat Pump | 089 Bayern",
      description: "Professional 4-in-1 energy system installation in Antalya, Kemer, Belek, Side, Alanya. Solar panels, Vaillant heat pump, Samsung AC and battery storage. German quality, 10-year warranty.",
      keywords: "energy system installation antalya, solar panel installation kemer, heat pump installation belek, solar panel side, 4 in 1 system alanya"
    },
    "installation-ankara": {
      title: "4-in-1 Energy System Installation Ankara | Solar Panels & Heat Pump | 089 Bayern",
      description: "Professional 4-in-1 energy system installation in Ankara and surroundings. Solar panels, Vaillant heat pump, Samsung AC and battery storage. German quality, 10-year warranty. Çankaya, Keçiören, Yenimahalle.",
      keywords: "energy system installation ankara, solar panel installation turkey capital, heat pump installation ankara, solar panel ankara, 4 in 1 system turkey"
    },
    "installation-alanya": {
      title: "4-in-1 Energy System Installation Alanya | Solar Panels & Heat Pump | 089 Bayern Branch",
      description: "Professional 4-in-1 energy system installation in Alanya and surroundings. 089 Bayern Alanya branch. Solar panels, Vaillant heat pump, Samsung AC and battery storage. Mahmutlar, Kestel, Oba.",
      keywords: "energy system installation alanya, solar panel installation mahmutlar, heat pump installation kestel, solar panel alanya, 4 in 1 system mediterranean"
    },
    standorte: {
      title: "Our Service Regions | Turkey, Croatia, Greece | 089 Bayern",
      description: "089 Bayern energy system installation regions: Antalya, Alanya, Mugla, Izmir, Split, Dalmatia. Solar panel, heat pump, AC installation in the Mediterranean and Aegean.",
      keywords: "089 bayern service regions, solar panel installation turkey, solar panel mediterranean, energy systems croatia"
    }
  },
  ru: {
    siteName: "089 Bayern Энергосистемы",
    home: {
      title: "089 Bayern | Солнечные Панели и Тепловой Насос Анталия | Немецкая Система 4-в-1",
      description: "Солнечные панели, тепловые насосы, кондиционеры и накопители энергии в Анталии, Алании, Кемере, Белеке, Сиде, Манавгате. Немецкое качество с экономией до 70%. Бесплатная консультация: +90 507 183 2036",
      keywords: "солнечные панели анталия, тепловой насос турция, фотовольтаика средиземноморье, солнечная энергия алания, немецкие энергосистемы турция, 089 bayern"
    },
    systeme: {
      title: "Немецкая Система 4-в-1 | Солнечные + Тепловой Насос + Климат + Батарея | 089 Bayern",
      description: "089 Bayern 4-in-1 German System: Фотовольтаика, тепловой насос, кондиционер Samsung и литиевая батарея в одной системе. Монтаж в Анталии, Алании, Кемере. 10 лет гарантии.",
      keywords: "система 4 в 1, интеграция солнечная тепловой насос, гибридная энергосистема, немецкая система турция"
    },
    vorteile: {
      title: "10 Месяцев Бесплатной Энергии | Преимущества Солнечных Панелей Анталия | 089 Bayern",
      description: "С 300+ солнечными днями на Средиземноморье - 10 месяцев бесплатного электричества и отопления. До 70% экономии в Анталии, Алании, Сиде. Окупаемость 4-6 лет.",
      keywords: "экономия энергии анталия, преимущества солнечных панелей, бесплатное электричество средиземноморье"
    },
    rechner: {
      title: "Калькулятор Экономии | Стоимость Солнечных Панелей Анталия | 089 Bayern",
      description: "Персональный расчёт экономии для Анталии, Алании, Кемера, Сиде. Стоимость солнечных панелей и теплового насоса по размеру виллы. Бесплатное предложение.",
      keywords: "калькулятор стоимости солнечных панелей, расчёт экономии, цена солнечных панелей анталия"
    },
    faq: {
      title: "Частые Вопросы | Солнечные Панели и Тепловой Насос | 089 Bayern Анталия",
      description: "20 самых частых вопросов о солнечных панелях, тепловых насосах, накопителях энергии и системе 089 Bayern 4-in-1 в Анталии.",
      keywords: "вопросы о солнечных панелях, faq тепловой насос, обслуживание солнечных панелей"
    },
    "ueber-uns": {
      title: "О Нас | Немецкие Энергетические Эксперты в Анталии | 089 Bayern",
      description: "089 Bayern: С 2018 года мост между Германией и Турцией. Немецкое качество для Анталии, Алании и Средиземноморья. 500+ довольных семей, 10 лет гарантии.",
      keywords: "089 bayern о нас, немецкая компания турция, эксперты по солнечной энергии анталия"
    },
    team: {
      title: "Наша Команда | Немецко-Турецкие Энергетические Эксперты | 089 Bayern",
      description: "Команда 089 Bayern: Под руководством Далибора Бакмаза и Мустафы Сакара. Немецкое инженерное качество в Анталии, Алании, Мугле.",
      keywords: "команда 089 bayern, энергетический консультант анталия"
    },
    legal: {
      title: "Правовая Информация | 089 Bayern Энергосистемы",
      description: "Правовые политики 089 Bayern: Политика конфиденциальности, политика cookies, условия использования.",
      keywords: "089 bayern конфиденциальность, условия, правовая информация"
    },
    "installation-antalya": {
      title: "Установка Энергосистемы 4-в-1 Анталия | Солнечные Панели и Тепловой Насос | 089 Bayern",
      description: "Профессиональная установка энергосистемы 4-в-1 в Анталии, Кемере, Белеке, Сиде, Алании. Солнечные панели, тепловой насос Vaillant, кондиционер Samsung и аккумуляторное хранение. Немецкое качество, 10 лет гарантии.",
      keywords: "установка энергосистемы анталия, монтаж солнечных панелей кемер, установка теплового насоса белек, солнечные панели сиде, система 4 в 1 алания"
    },
    "installation-ankara": {
      title: "Установка Энергосистемы 4-в-1 Анкара | Солнечные Панели и Тепловой Насос | 089 Bayern",
      description: "Профессиональная установка энергосистемы 4-в-1 в Анкаре и окрестностях. Солнечные панели, тепловой насос Vaillant, кондиционер Samsung и аккумуляторное хранение. Немецкое качество, 10 лет гарантии. Чанкая, Кечиорен, Йенимахалле.",
      keywords: "установка энергосистемы анкара, монтаж солнечных панелей столица турции, установка теплового насоса анкара, солнечные панели анкара, система 4 в 1 турция"
    },
    "installation-alanya": {
      title: "Установка Энергосистемы 4-в-1 Аланья | Солнечные Панели и Тепловой Насос | 089 Bayern Филиал",
      description: "Профессиональная установка энергосистемы 4-в-1 в Аланье и окрестностях. Филиал 089 Bayern Аланья. Солнечные панели, тепловой насос Vaillant, кондиционер Samsung и аккумуляторное хранение. Махмутлар, Кестель, Оба.",
      keywords: "установка энергосистемы аланья, монтаж солнечных панелей махмутлар, установка теплового насоса кестель, солнечные панели аланья, система 4 в 1 средиземноморье"
    },
    standorte: {
      title: "Наши Регионы Обслуживания | Турция, Хорватия, Греция | 089 Bayern",
      description: "Регионы установки энергосистем 089 Bayern: Анталия, Алания, Мугла, Измир, Сплит, Далмация. Установка солнечных панелей, тепловых насосов, кондиционеров в Средиземноморье и Эгейском регионе.",
      keywords: "089 bayern регионы обслуживания, установка солнечных панелей турция, солнечные панели средиземноморье, энергосистемы хорватия"
    }
  },
  uk: {
    siteName: "089 Bayern Енергосистеми",
    home: {
      title: "089 Bayern | Сонячні Панелі та Тепловий Насос Анталія | Німецька Система 4-в-1",
      description: "Сонячні панелі, теплові насоси, кондиціонери та накопичувачі енергії в Анталії, Аланії, Кемері, Белеку, Сіде, Манавгаті. Німецька якість з економією до 70%. Безкоштовна консультація: +90 507 183 2036",
      keywords: "сонячні панелі анталія, тепловий насос туреччина, фотовольтаїка середземномор'я, сонячна енергія аланія, німецькі енергосистеми туреччина, 089 bayern"
    },
    systeme: {
      title: "Німецька Система 4-в-1 | Сонячні + Тепловий Насос + Клімат + Батарея | 089 Bayern",
      description: "089 Bayern 4-in-1 German System: Фотовольтаїка, тепловий насос, кондиціонер Samsung та літієва батарея в одній системі. Монтаж в Анталії, Аланії, Кемері. 10 років гарантії.",
      keywords: "система 4 в 1, інтеграція сонячна тепловий насос, гібридна енергосистема, німецька система туреччина"
    },
    vorteile: {
      title: "10 Місяців Безкоштовної Енергії | Переваги Сонячних Панелей Анталія | 089 Bayern",
      description: "З 300+ сонячними днями на Середземномор'ї - 10 місяців безкоштовної електрики та опалення. До 70% економії в Анталії, Аланії, Сіде. Окупність 4-6 років.",
      keywords: "економія енергії анталія, переваги сонячних панелей, безкоштовна електрика середземномор'я"
    },
    rechner: {
      title: "Калькулятор Економії | Вартість Сонячних Панелей Анталія | 089 Bayern",
      description: "Персональний розрахунок економії для Анталії, Аланії, Кемера, Сіде. Вартість сонячних панелей та теплового насоса за розміром вілли. Безкоштовна пропозиція.",
      keywords: "калькулятор вартості сонячних панелей, розрахунок економії, ціна сонячних панелей анталія"
    },
    faq: {
      title: "Часті Питання | Сонячні Панелі та Тепловий Насос | 089 Bayern Анталія",
      description: "20 найчастіших питань про сонячні панелі, теплові насоси, накопичувачі енергії та систему 089 Bayern 4-in-1 в Анталії.",
      keywords: "питання про сонячні панелі, faq тепловий насос, обслуговування сонячних панелей"
    },
    "ueber-uns": {
      title: "Про Нас | Німецькі Енергетичні Експерти в Анталії | 089 Bayern",
      description: "089 Bayern: З 2018 року міст між Німеччиною та Туреччиною. Німецька якість для Анталії, Аланії та Середземномор'я. 500+ задоволених родин, 10 років гарантії.",
      keywords: "089 bayern про нас, німецька компанія туреччина, експерти з сонячної енергії анталія"
    },
    team: {
      title: "Наша Команда | Німецько-Турецькі Енергетичні Експерти | 089 Bayern",
      description: "Команда 089 Bayern: Під керівництвом Далібора Бакмаза та Мустафи Сакара. Німецька інженерна якість в Анталії, Аланії, Муглі.",
      keywords: "команда 089 bayern, енергетичний консультант анталія"
    },
    legal: {
      title: "Правова Інформація | 089 Bayern Енергосистеми",
      description: "Правові політики 089 Bayern: Політика конфіденційності, політика cookies, умови використання.",
      keywords: "089 bayern конфіденційність, умови, правова інформація"
    },
    "installation-antalya": {
      title: "Встановлення Енергосистеми 4-в-1 Анталія | Сонячні Панелі та Тепловий Насос | 089 Bayern",
      description: "Професійне встановлення енергосистеми 4-в-1 в Анталії, Кемері, Белеку, Сіде, Аланії. Сонячні панелі, тепловий насос Vaillant, кондиціонер Samsung та акумуляторне зберігання. Німецька якість, 10 років гарантії.",
      keywords: "встановлення енергосистеми анталія, монтаж сонячних панелей кемер, встановлення теплового насоса белек, сонячні панелі сіде, система 4 в 1 аланія"
    },
    "installation-ankara": {
      title: "Встановлення Енергосистеми 4-в-1 Анкара | Сонячні Панелі та Тепловий Насос | 089 Bayern",
      description: "Професійне встановлення енергосистеми 4-в-1 в Анкарі та околицях. Сонячні панелі, тепловий насос Vaillant, кондиціонер Samsung та акумуляторне зберігання. Німецька якість, 10 років гарантії. Чанкая, Кечіорен, Єнімахалле.",
      keywords: "встановлення енергосистеми анкара, монтаж сонячних панелей столиця туреччини, встановлення теплового насоса анкара, сонячні панелі анкара, система 4 в 1 туреччина"
    },
    "installation-alanya": {
      title: "Встановлення Енергосистеми 4-в-1 Аланья | Сонячні Панелі та Тепловий Насос | 089 Bayern Філія",
      description: "Професійне встановлення енергосистеми 4-в-1 в Аланії та околицях. Філія 089 Bayern Аланья. Сонячні панелі, тепловий насос Vaillant, кондиціонер Samsung та акумуляторне зберігання. Махмутлар, Кестель, Оба.",
      keywords: "встановлення енергосистеми аланья, монтаж сонячних панелей махмутлар, встановлення теплового насоса кестель, сонячні панелі аланья, система 4 в 1 середземномор'я"
    },
    standorte: {
      title: "Наші Регіони Обслуговування | Туреччина, Хорватія, Греція | 089 Bayern",
      description: "Регіони встановлення енергосистем 089 Bayern: Анталія, Аланія, Мугла, Ізмір, Спліт, Далмація. Встановлення сонячних панелей, теплових насосів, кондиціонерів у Середземномор'ї та Егейському регіоні.",
      keywords: "089 bayern регіони обслуговування, встановлення сонячних панелей туреччина, сонячні панелі середземномор'я, енергосистеми хорватія"
    }
  },
  hr: {
    siteName: "089 Bayern Energetski Sustavi",
    home: {
      title: "089 Bayern | Solarni Paneli i Toplinska Pumpa Antalya | Njemački Sustav 4-u-1",
      description: "Solarni paneli, toplinske pumpe, klima i pohrana energije u Antalyi, Alanyi, Kemeru, Beleku, Sideu, Manavgatu. Njemačka kvaliteta s uštedom do 70%. Besplatna konzultacija: +90 507 183 2036",
      keywords: "solarni paneli antalya, toplinska pumpa turska, fotonapon mediteran, solarna energija alanya, njemački energetski sustavi turska, 089 bayern"
    },
    systeme: {
      title: "Njemački Sustav 4-u-1 | Solar + Toplinska Pumpa + Klima + Baterija | 089 Bayern",
      description: "089 Bayern 4-in-1 German System: Fotonapon, toplinska pumpa, Samsung klima i litijska baterija u jednom sustavu. Instalacija u Antalyi, Alanyi, Kemeru. 10 godina jamstva.",
      keywords: "sustav 4 u 1, integracija solarna toplinska pumpa, hibridni energetski sustav, njemački sustav turska"
    },
    vorteile: {
      title: "10 Mjeseci Besplatne Energije | Prednosti Solarnih Panela Antalya | 089 Bayern",
      description: "S 300+ sunčanih dana na Mediteranu - 10 mjeseci besplatne struje i grijanja. Do 70% uštede u Antalyi, Alanyi, Sideu. Povrat investicije 4-6 godina.",
      keywords: "ušteda energije antalya, prednosti solarnih panela, besplatna struja mediteran"
    },
    rechner: {
      title: "Kalkulator Uštede | Cijena Solarnih Panela Antalya | 089 Bayern",
      description: "Personalizirani izračun uštede za Antalyu, Alanyu, Kemer, Side. Cijena solarnih panela i toplinske pumpe prema veličini vile. Besplatna ponuda.",
      keywords: "kalkulator cijene solarnih panela, izračun uštede, cijena solarnih panela antalya"
    },
    faq: {
      title: "Česta Pitanja | Solarni Paneli i Toplinska Pumpa | 089 Bayern Antalya",
      description: "20 najčešćih pitanja o solarnim panelima, toplinskim pumpama, pohrani energije i sustavu 089 Bayern 4-in-1 u Antalyi.",
      keywords: "pitanja o solarnim panelima, faq toplinska pumpa, održavanje solarnih panela"
    },
    "ueber-uns": {
      title: "O Nama | Njemački Energetski Stručnjaci u Antalyi | 089 Bayern",
      description: "089 Bayern: Od 2018. most između Njemačke i Turske. Njemačka kvaliteta za Antalyu, Alanyu i Mediteran. 500+ zadovoljnih obitelji, 10 godina jamstva.",
      keywords: "089 bayern o nama, njemačka tvrtka turska, stručnjaci za solarnu energiju antalya"
    },
    team: {
      title: "Naš Tim | Njemačko-Turski Energetski Stručnjaci | 089 Bayern",
      description: "Tim 089 Bayern: Pod vodstvom Dalibora Bakmaza i Mustafe Sakara. Njemačka inženjerska kvaliteta u Antalyi, Alanyi, Mugli.",
      keywords: "tim 089 bayern, energetski savjetnik antalya"
    },
    legal: {
      title: "Pravne Informacije | 089 Bayern Energetski Sustavi",
      description: "Pravne politike 089 Bayern: Politika privatnosti, politika kolačića, uvjeti korištenja.",
      keywords: "089 bayern privatnost, uvjeti, pravne informacije"
    },
    "installation-antalya": {
      title: "Instalacija Energetskog Sustava 4-u-1 Antalya | Solarni Paneli i Toplinska Pumpa | 089 Bayern",
      description: "Profesionalna instalacija energetskog sustava 4-u-1 u Antalyi, Kemeru, Beleku, Sideu, Alanyi. Solarni paneli, Vaillant toplinska pumpa, Samsung klima i pohrana baterije. Njemačka kvaliteta, 10 godina jamstva.",
      keywords: "instalacija energetskog sustava antalya, montaža solarnih panela kemer, instalacija toplinske pumpe belek, solarni paneli side, sustav 4 u 1 alanya"
    },
    "installation-ankara": {
      title: "Instalacija Energetskog Sustava 4-u-1 Ankara | Solarni Paneli i Toplinska Pumpa | 089 Bayern",
      description: "Profesionalna instalacija energetskog sustava 4-u-1 u Ankari i okolici. Solarni paneli, Vaillant toplinska pumpa, Samsung klima i pohrana baterije. Njemačka kvaliteta, 10 godina jamstva. Çankaya, Keçiören, Yenimahalle.",
      keywords: "instalacija energetskog sustava ankara, montaža solarnih panela turska prijestolnica, instalacija toplinske pumpe ankara, solarni paneli ankara, sustav 4 u 1 turska"
    },
    "installation-alanya": {
      title: "Instalacija Energetskog Sustava 4-u-1 Alanya | Solarni Paneli i Toplinska Pumpa | 089 Bayern Podružnica",
      description: "Profesionalna instalacija energetskog sustava 4-u-1 u Alanyi i okolici. 089 Bayern podružnica Alanya. Solarni paneli, Vaillant toplinska pumpa, Samsung klima i pohrana baterije. Mahmutlar, Kestel, Oba.",
      keywords: "instalacija energetskog sustava alanya, montaža solarnih panela mahmutlar, instalacija toplinske pumpe kestel, solarni paneli alanya, sustav 4 u 1 sredozemlje"
    },
    standorte: {
      title: "Naše Servisne Regije | Turska, Hrvatska, Grčka | 089 Bayern",
      description: "Regije instalacije energetskih sustava 089 Bayern: Antalya, Alanya, Muğla, Izmir, Split, Dalmacija. Instalacija solarnih panela, toplinskih pumpi, klima na Mediteranu i Egeju.",
      keywords: "089 bayern servisne regije, instalacija solarnih panela turska, solarni paneli mediteran, energetski sustavi hrvatska"
    }
  },
  ar: {
    siteName: "089 Bayern أنظمة الطاقة",
    home: {
      title: "089 Bayern | الألواح الشمسية ومضخة الحرارة أنطاليا | نظام ألماني 4 في 1",
      description: "الألواح الشمسية، مضخات الحرارة، التكييف وتخزين الطاقة في أنطاليا، ألانيا، كيمير، بيليك، سيدا، مانافغات. جودة ألمانية مع توفير حتى 70%. استشارة مجانية: +90 507 183 2036",
      keywords: "الألواح الشمسية أنطاليا، مضخة حرارة تركيا، الطاقة الشمسية ألانيا، أنظمة الطاقة الألمانية تركيا، 089 bayern"
    },
    systeme: {
      title: "نظام ألماني 4 في 1 | شمسي + مضخة حرارة + تكييف + بطارية | 089 Bayern",
      description: "نظام 089 Bayern 4-in-1: الخلايا الكهروضوئية، مضخة الحرارة، تكييف Samsung وبطارية ليثيوم في نظام واحد. التركيب في أنطاليا، ألانيا، كيمير. ضمان 10 سنوات.",
      keywords: "نظام 4 في 1، تكامل الطاقة الشمسية مضخة الحرارة، نظام طاقة هجين، نظام ألماني تركيا"
    },
    vorteile: {
      title: "10 أشهر طاقة مجانية | فوائد الألواح الشمسية أنطاليا | 089 Bayern",
      description: "مع 300+ يوم مشمس في البحر المتوسط - 10 أشهر من الكهرباء والتدفئة المجانية. توفير حتى 70% في أنطاليا، ألانيا، سيدا. فترة استرداد 4-6 سنوات.",
      keywords: "توفير الطاقة أنطاليا، فوائد الألواح الشمسية، كهرباء مجانية البحر المتوسط"
    },
    rechner: {
      title: "حاسبة التوفير | تكلفة الألواح الشمسية أنطاليا | 089 Bayern",
      description: "حساب توفير الطاقة المخصص لأنطاليا، ألانيا، كيمير، سيدا. تكلفة الألواح الشمسية ومضخة الحرارة حسب حجم الفيلا. عرض مجاني.",
      keywords: "حاسبة تكلفة الألواح الشمسية، حساب التوفير، سعر الألواح الشمسية أنطاليا"
    },
    faq: {
      title: "الأسئلة الشائعة | الألواح الشمسية ومضخة الحرارة | 089 Bayern أنطاليا",
      description: "أكثر 20 سؤالاً شيوعاً حول الألواح الشمسية، مضخات الحرارة، تخزين الطاقة ونظام 089 Bayern 4-in-1 في أنطاليا.",
      keywords: "أسئلة الألواح الشمسية، أسئلة مضخة الحرارة، صيانة الألواح الشمسية"
    },
    "ueber-uns": {
      title: "عنا | خبراء الطاقة الألمان في أنطاليا | 089 Bayern",
      description: "089 Bayern: منذ 2018 الجسر بين ألمانيا وتركيا. جودة ألمانية لأنطاليا، ألانيا ومنطقة البحر المتوسط. 500+ عائلة سعيدة، ضمان 10 سنوات.",
      keywords: "089 bayern عنا، شركة ألمانية تركيا، خبراء الطاقة الشمسية أنطاليا"
    },
    team: {
      title: "فريقنا | خبراء الطاقة الألمان-الأتراك | 089 Bayern",
      description: "فريق 089 Bayern: بقيادة داليبور باكماز ومصطفى ساكار. جودة هندسية ألمانية في أنطاليا، ألانيا، موغلا.",
      keywords: "فريق 089 bayern، مستشار الطاقة أنطاليا"
    },
    legal: {
      title: "المعلومات القانونية | 089 Bayern أنظمة الطاقة",
      description: "السياسات القانونية لـ 089 Bayern: سياسة الخصوصية، سياسة ملفات تعريف الارتباط، شروط الاستخدام.",
      keywords: "089 bayern الخصوصية، الشروط، المعلومات القانونية"
    },
    "installation-antalya": {
      title: "تركيب نظام الطاقة 4 في 1 أنطاليا | الألواح الشمسية ومضخة الحرارة | 089 Bayern",
      description: "تركيب احترافي لنظام الطاقة 4 في 1 في أنطاليا، كيمير، بيليك، سيدا، ألانيا. الألواح الشمسية، مضخة حرارة Vaillant، تكييف Samsung وتخزين البطارية. جودة ألمانية، ضمان 10 سنوات.",
      keywords: "تركيب نظام الطاقة أنطاليا، تركيب الألواح الشمسية كيمير، تركيب مضخة الحرارة بيليك، الألواح الشمسية سيدا، نظام 4 في 1 ألانيا"
    },
    "installation-ankara": {
      title: "تركيب نظام الطاقة 4 في 1 أنقرة | الألواح الشمسية ومضخة الحرارة | 089 Bayern",
      description: "تركيب احترافي لنظام الطاقة 4 في 1 في أنقرة والمناطق المحيطة. الألواح الشمسية، مضخة حرارة Vaillant، تكييف Samsung وتخزين البطارية. جودة ألمانية، ضمان 10 سنوات. تشانكايا، كيتشيورين، ينيماهالله.",
      keywords: "تركيب نظام الطاقة أنقرة، تركيب الألواح الشمسية عاصمة تركيا، تركيب مضخة الحرارة أنقرة، الألواح الشمسية أنقرة، نظام 4 في 1 تركيا"
    },
    "installation-alanya": {
      title: "تركيب نظام الطاقة 4 في 1 ألانيا | الألواح الشمسية ومضخة الحرارة | 089 Bayern فرع",
      description: "تركيب احترافي لنظام الطاقة 4 في 1 في ألانيا والمناطق المحيطة. فرع 089 Bayern ألانيا. الألواح الشمسية، مضخة حرارة Vaillant، تكييف Samsung وتخزين البطارية. محمودلار، كستل، أوبا.",
      keywords: "تركيب نظام الطاقة ألانيا، تركيب الألواح الشمسية محمودلار، تركيب مضخة الحرارة كستل، الألواح الشمسية ألانيا، نظام 4 في 1 البحر المتوسط"
    },
    standorte: {
      title: "مناطق خدمتنا | تركيا، كرواتيا، اليونان | 089 Bayern",
      description: "مناطق تركيب أنظمة الطاقة 089 Bayern: أنطاليا، ألانيا، موغلا، إزمير، سبليت، دالماتيا. تركيب الألواح الشمسية، مضخات الحرارة، التكييف في البحر المتوسط وبحر إيجة.",
      keywords: "089 bayern مناطق الخدمة، تركيب الألواح الشمسية تركيا، الألواح الشمسية البحر المتوسط، أنظمة الطاقة كرواتيا"
    }
  }
};

export default function SEOHead({ page, pageTitle }: SEOHeadProps) {
  const { language } = useLanguage();
  
  const data = seoData[language]?.[page] || seoData.tr[page];
  const siteName = seoData[language]?.siteName || seoData.tr.siteName;
  
  if (!data) return null;

  const title = pageTitle || data.title;
  const locale = language === 'tr' ? 'tr_TR' : language === 'de' ? 'de_DE' : language === 'ru' ? 'ru_RU' : language === 'uk' ? 'uk_UA' : language === 'ar' ? 'ar_SA' : language === 'hr' ? 'hr_HR' : 'en_US';
  const inLanguage = language === "tr" ? "tr-TR" : language === "de" ? "de-DE" : language === "ru" ? "ru-RU" : language === "uk" ? "uk-UA" : language === "ar" ? "ar-SA" : language === "hr" ? "hr-HR" : "en-US";
  
  const pageNames: Record<string, Record<string, string>> = {
    home: { tr: "Ana Sayfa", de: "Startseite", en: "Home", ru: "Главная", uk: "Головна", ar: "الرئيسية", hr: "Početna" },
    systeme: { tr: "4'ü 1 Arada Sistem", de: "4-in-1 System", en: "4-in-1 System", ru: "Система 4-в-1", uk: "Система 4-в-1", ar: "نظام 4 في 1", hr: "4-u-1 Sustav" },
    vorteile: { tr: "Avantajlar", de: "Vorteile", en: "Benefits", ru: "Преимущества", uk: "Переваги", ar: "المزايا", hr: "Prednosti" },
    rechner: { tr: "Tasarruf Hesaplayıcı", de: "Einsparungsrechner", en: "Savings Calculator", ru: "Калькулятор", uk: "Калькулятор", ar: "الحاسبة", hr: "Kalkulator" },
    faq: { tr: "Sıkça Sorulan Sorular", de: "Häufige Fragen", en: "FAQ", ru: "Вопросы", uk: "Питання", ar: "الأسئلة", hr: "Pitanja" },
    "ueber-uns": { tr: "Hakkımızda", de: "Über Uns", en: "About Us", ru: "О нас", uk: "Про нас", ar: "عنا", hr: "O nama" },
    "installation-antalya": { tr: "Kurulum Antalya", de: "Installation Antalya", en: "Installation Antalya", ru: "Установка Анталья", uk: "Встановлення Анталія", ar: "تركيب أنطاليا", hr: "Instalacija Antalya" },
    "installation-ankara": { tr: "Kurulum Ankara", de: "Installation Ankara", en: "Installation Ankara", ru: "Установка Анкара", uk: "Встановлення Анкара", ar: "تركيب أنقرة", hr: "Instalacija Ankara" },
    "installation-alanya": { tr: "Kurulum Alanya", de: "Installation Alanya", en: "Installation Alanya", ru: "Установка Алания", uk: "Встановлення Аланія", ar: "تركيب ألانيا", hr: "Instalacija Alanya" }
  };

  const breadcrumbItems = [
    { "@type": "ListItem", "position": 1, "name": pageNames.home[language] || "Ana Sayfa", "item": "https://089bayern.com" }
  ];
  
  if (page !== "home") {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": pageNames[page]?.[language] || pageNames[page]?.tr || data.title,
      "item": `https://089bayern.com/${page === "ueber-uns" ? (language === "tr" ? "hakkimizda" : page) : page}`
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://089bayern.com/#organization",
        "name": language === "tr" ? "089 Bayern Enerji Sistemleri" : "089 Bayern Energiesysteme",
        "description": data.description,
        "url": "https://089bayern.com",
        "telephone": "+90-507-183-2036",
        "email": "info@089bayern.com",
        "image": "https://089bayern.com/og-image.jpg",
        "logo": "https://089bayern.com/logo.png",
        "foundingDate": "2020",
        "slogan": language === "tr" ? "Alman Mühendisliği ile %70 Enerji Tasarrufu" : "70% Energieeinsparung mit deutscher Ingenieursqualität",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Antalya Merkez",
          "addressLocality": "Antalya",
          "addressRegion": "Akdeniz",
          "postalCode": "07000",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 36.8969,
          "longitude": 30.7133
        },
        "areaServed": [
          { "@type": "City", "name": "Antalya" },
          { "@type": "City", "name": "Alanya" },
          { "@type": "City", "name": "Kemer" },
          { "@type": "City", "name": "Belek" },
          { "@type": "City", "name": "Side" },
          { "@type": "City", "name": "Manavgat" },
          { "@type": "City", "name": "Mahmutlar" },
          { "@type": "City", "name": "Fethiye" },
          { "@type": "City", "name": "Bodrum" },
          { "@type": "City", "name": "Muğla" },
          { "@type": "City", "name": "İzmir" },
          { "@type": "City", "name": "Ankara" }
        ],
        "priceRange": "€€€",
        "currenciesAccepted": "EUR, TRY, USD",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer",
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "09:00", "closes": "18:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "14:00" }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "500",
          "reviewCount": "487"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": language === "tr" ? "Enerji Sistemleri" : "Energy Systems",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": language === "tr" ? "Güneş Paneli Kurulumu" : "Solar Panel Installation", "description": language === "tr" ? "Profesyonel güneş enerjisi sistemi kurulumu" : "Professional solar energy system installation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": language === "tr" ? "Vaillant Isı Pompası" : "Vaillant Heat Pump", "description": language === "tr" ? "Alman kalitesi ısı pompası kurulumu" : "German quality heat pump installation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": language === "tr" ? "Samsung Klima Sistemi" : "Samsung Air Conditioning", "description": language === "tr" ? "Samsung yetkili klima kurulumu" : "Samsung authorized AC installation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": language === "tr" ? "Enerji Depolama Bataryası" : "Battery Storage System", "description": language === "tr" ? "Lityum iyon enerji depolama" : "Lithium-ion energy storage" } }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://089bayern.com/#breadcrumb",
        "itemListElement": breadcrumbItems
      },
      {
        "@type": "WebPage",
        "@id": `https://089bayern.com/${page}#webpage`,
        "url": `https://089bayern.com/${page === "home" ? "" : page}`,
        "name": title,
        "description": data.description,
        "datePublished": "2024-01-01",
        "dateModified": "2026-02-01",
        "isPartOf": { "@id": "https://089bayern.com/#website" },
        "about": { "@id": "https://089bayern.com/#organization" },
        "breadcrumb": { "@id": "https://089bayern.com/#breadcrumb" },
        "inLanguage": inLanguage,
        "potentialAction": {
          "@type": "ReadAction",
          "target": [`https://089bayern.com/${page === "home" ? "" : page}`]
        }
      }
    ]
  };

  return (
    <Helmet>
      <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />
      <title>{title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />
      <meta property="og:image" content="https://089bayern.com/og-image.jpg" />
      <meta property="og:url" content={`https://089bayern.com/${page === "home" ? "" : page}`} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content="https://089bayern.com/og-image.jpg" />
      
      <meta name="geo.region" content="TR-07" />
      <meta name="geo.placename" content="Antalya" />
      <meta name="geo.position" content="36.8969;30.7133" />
      <meta name="ICBM" content="36.8969, 30.7133" />
      
      {(() => {
        const pageToUrlKey: Record<string, keyof UrlPaths | null> = {
          home: null,
          systeme: "system",
          vorteile: "benefits",
          rechner: "calculator",
          faq: "faq",
          "ueber-uns": "about",
          "installation-antalya": "installationAntalya",
          "installation-alanya": "installationAlanya",
          "installation-ankara": "installationAnkara",
          standorte: "locations"
        };
        
        const urlKey = pageToUrlKey[page];
        const getPath = (lang: Language) => {
          if (page === "home") return "";
          if (!urlKey) return page;
          return urlPaths[lang]?.[urlKey]?.slice(1) || page;
        };
        
        const currentPath = getPath(language as Language);
        const canonicalUrl = `https://089bayern.com/${currentPath}`;
        
        return (
          <>
            <link rel="canonical" href={canonicalUrl} />
            <link rel="alternate" hrefLang="tr" href={`https://089bayern.com/${getPath("tr")}`} />
            <link rel="alternate" hrefLang="de" href={`https://089bayern.com/${getPath("de")}`} />
            <link rel="alternate" hrefLang="en" href={`https://089bayern.com/${getPath("en")}`} />
            <link rel="alternate" hrefLang="ru" href={`https://089bayern.com/${getPath("ru")}`} />
            <link rel="alternate" hrefLang="uk" href={`https://089bayern.com/${getPath("uk")}`} />
            <link rel="alternate" hrefLang="ar" href={`https://089bayern.com/${getPath("ar")}`} />
            <link rel="alternate" hrefLang="hr" href={`https://089bayern.com/${getPath("hr")}`} />
            <link rel="alternate" hrefLang="x-default" href={`https://089bayern.com/${getPath("tr")}`} />
          </>
        );
      })()}
      
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

export const geoLocations = {
  antalya: { name: "Antalya", lat: 36.8969, lng: 30.7133, sun: "2900+" },
  alanya: { name: "Alanya", lat: 36.5437, lng: 31.9994, sun: "2950+" },
  kemer: { name: "Kemer", lat: 36.5985, lng: 30.5592, sun: "2900+" },
  belek: { name: "Belek", lat: 36.8525, lng: 31.0559, sun: "2920+" },
  side: { name: "Side", lat: 36.7700, lng: 31.3875, sun: "2950+" },
  manavgat: { name: "Manavgat", lat: 36.7872, lng: 31.4435, sun: "2940+" },
  mahmutlar: { name: "Mahmutlar", lat: 36.4739, lng: 32.0847, sun: "2950+" },
  konakli: { name: "Konaklı", lat: 36.5200, lng: 31.9200, sun: "2950+" },
  gazipasa: { name: "Gazipaşa", lat: 36.2679, lng: 32.3097, sun: "2940+" },
  mugla: { name: "Muğla", lat: 37.2153, lng: 28.3636, sun: "2850+" },
  fethiye: { name: "Fethiye", lat: 36.6221, lng: 29.1164, sun: "2880+" },
  bodrum: { name: "Bodrum", lat: 37.0344, lng: 27.4305, sun: "2820+" },
  marmaris: { name: "Marmaris", lat: 36.8510, lng: 28.2742, sun: "2860+" },
  izmir: { name: "İzmir", lat: 38.4237, lng: 27.1428, sun: "2750+" },
  kusadasi: { name: "Kuşadası", lat: 37.8579, lng: 27.2610, sun: "2780+" },
  didim: { name: "Didim", lat: 37.3833, lng: 27.2667, sun: "2800+" },
  aydin: { name: "Aydın", lat: 37.8560, lng: 27.8416, sun: "2760+" },
  mersin: { name: "Mersin", lat: 36.8121, lng: 34.6415, sun: "2900+" }
};

export const serviceAreas = {
  tr: "Antalya, Alanya, Kemer, Belek, Side, Manavgat, Mahmutlar, Konaklı, Gazipaşa, Muğla, Fethiye, Bodrum, Marmaris, İzmir, Kuşadası, Didim, Aydın, Mersin",
  de: "Antalya, Alanya, Kemer, Belek, Side, Manavgat, Mahmutlar, Konaklı, Gazipaşa, Muğla, Fethiye, Bodrum, Marmaris, İzmir, Kuşadası, Didim, Aydın, Mersin",
  en: "Antalya, Alanya, Kemer, Belek, Side, Manavgat, Mahmutlar, Konaklı, Gazipaşa, Muğla, Fethiye, Bodrum, Marmaris, Izmir, Kusadasi, Didim, Aydin, Mersin",
  ru: "Анталия, Алания, Кемер, Белек, Сиде, Манавгат, Махмутлар, Конаклы, Газипаша, Мугла, Фетхие, Бодрум, Мармарис, Измир, Кушадасы, Дидим, Айдын, Мерсин",
  uk: "Анталія, Аланія, Кемер, Белек, Сіде, Манавгат, Махмутлар, Конакли, Газіпаша, Мугла, Фетхіє, Бодрум, Мармаріс, Ізмір, Кушадаси, Дідім, Айдин, Мерсін",
  ar: "أنطاليا، ألانيا، كيمير، بيليك، سيدا، مانافغات، محمودلار، كوناكلي، غازي باشا، موغلا، فتحية، بودروم، مرمريس، إزمير، كوشاداسي، ديديم، أيدين، مرسين",
  hr: "Antalya, Alanya, Kemer, Belek, Side, Manavgat, Mahmutlar, Konaklı, Gazipaşa, Muğla, Fethiye, Bodrum, Marmaris, İzmir, Kuşadası, Didim, Aydın, Mersin"
};
