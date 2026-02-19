import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/lib/LanguageContext";
import { urlPaths, type UrlPaths } from "@/lib/urlTranslations";
import type { Language } from "@/lib/translations";

interface SEOHeadProps {
  page: "home" | "systeme" | "vorteile" | "rechner" | "faq" | "ueber-uns" | "team" | "legal" | "installation-antalya" | "installation-ankara" | "installation-alanya" | "standorte" | "gunes-paneli" | "isi-pompasi" | "klima" | "enerji-depolama";
  pageTitle?: string;
  customFaqItems?: Array<{ question: string; answer: string }>;
}

const seoData = {
  tr: {
    siteName: "089 Bayern Enerji Sistemleri",
    home: {
      title: "Antalya Güneş Paneli Kurulumu & Vaillant Isı Pompası Fiyatları 2026 | 089 Bayern 4'ü 1 Arada Villa Enerji Sistemi",
      description: "Antalya, Alanya, Kemer, Belek, Side, Manavgat'ta güneş paneli, ısı pompası, klima ve enerji depolama. Alman mühendisliği ile %70 enerji tasarrufu. Vaillant & Samsung yetkili bayii. Ücretsiz keşif: +90 507 183 2036",
    },
    systeme: {
      title: "4'ü 1 Arada Enerji Sistemi Antalya Villa | Güneş Paneli + Vaillant Isı Pompası + Samsung Klima + Batarya | 089 Bayern",
      description: "089 Bayern 4-in-1 German System: Photovoltaik, Wärmepompa, Samsung klima ve lityum batarya tek sistemde. Antalya, Alanya, Kemer'de kurulum. 10 yıl garanti, Alman DIN standartları.",
    },
    vorteile: {
      title: "Antalya Villa Güneş Enerjisi ile %70 Tasarruf | 10 Ay Ücretsiz Elektrik ve Isınma Avantajları | 089 Bayern",
      description: "Akdeniz'in 300+ güneşli günü ile yılda 10 ay ücretsiz elektrik ve ısınma. Antalya, Alanya, Side'da %70 enerji tasarrufu. 4-6 yıl geri ödeme süresi. Ücretsiz hesaplama yapın.",
    },
    rechner: {
      title: "Güneş Paneli Fiyat Hesaplama Antalya Villa m² | Enerji Tasarruf Hesaplayıcı 2026 | 089 Bayern",
      description: "Antalya, Alanya, Kemer, Side için kişiselleştirilmiş enerji tasarrufu hesabı. Villa m² ve konuma göre güneş paneli, ısı pompası maliyeti ve tasarruf hesaplama. Ücretsiz teklif alın.",
    },
    faq: {
      title: "Güneş Paneli Kurulumu Sıkça Sorulan Sorular | Antalya Villa Isı Pompası Klima SSS | 089 Bayern",
      description: "Antalya'da güneş paneli kurulumu, ısı pompası bakımı, enerji depolama ve 089 Bayern 4-in-1 sistem hakkında en çok sorulan 20 soru ve uzman cevapları.",
    },
    "ueber-uns": {
      title: "089 Bayern Hakkımızda | Antalya Merkezli Alman-Türk Enerji Sistemi Uzmanları | Güneş Paneli Isı Pompası Kurulum Firması",
      description: "089 Bayern Türkiye: 2018'den beri Antalya merkezli Alman kalitesi enerji sistemleri. Antalya, Alanya, Akdeniz bölgesinde 500+ mutlu aile, 10 yıl garanti.",
    },
    team: {
      title: "089 Bayern Ekibimiz | Mustafa Sakar & Dalibor Bakmaz | Antalya Güneş Enerjisi Uzman Kadrosu",
      description: "089 Bayern ekibi: Dalibor Bakmaz ve Mustafa Sakar liderliğinde Alman mühendislik kalitesi. Antalya, Alanya, Muğla'da profesyonel enerji danışmanlığı.",
    },
    legal: {
      title: "Yasal Bilgiler | 089 Bayern Enerji Sistemleri",
      description: "089 Bayern yasal politikalar: KVKK, gizlilik politikası, çerez politikası, kullanım şartları ve mesafeli satış sözleşmesi.",
    },
    "installation-antalya": {
      title: "Güneş Paneli Kurulumu Antalya Merkez | Vaillant Isı Pompası Samsung Klima Montajı Villa Fiyatları | 089 Bayern",
      description: "Antalya, Kemer, Belek, Side, Alanya'da profesyonel 4'ü 1 arada enerji sistemi kurulumu. Güneş paneli, Vaillant ısı pompası, Samsung klima ve batarya depolama. Alman kalitesi, 10 yıl garanti.",
    },
    "installation-ankara": {
      title: "Güneş Paneli Kurulumu Ankara | Vaillant Isı Pompası Samsung Klima Montajı Villa Çankaya Keçiören | 089 Bayern",
      description: "Ankara ve çevresinde profesyonel 4'ü 1 arada enerji sistemi kurulumu. Güneş paneli, Vaillant ısı pompası, Samsung klima ve batarya depolama. Alman kalitesi, 10 yıl garanti. Çankaya, Keçiören, Yenimahalle.",
    },
    "installation-alanya": {
      title: "Güneş Paneli Kurulumu Alanya | Vaillant Isı Pompası Samsung Klima Montajı Villa Mahmutlar Kestel | 089 Bayern Şube",
      description: "Alanya ve çevresinde profesyonel 4'ü 1 arada enerji sistemi kurulumu. 089 Bayern Alanya şubesi. Güneş paneli, Vaillant ısı pompası, Samsung klima ve batarya depolama. Mahmutlar, Kestel, Oba.",
    },
    standorte: {
      title: "089 Bayern Hizmet Bölgeleri | Antalya Alanya Muğla İzmir Güneş Paneli Kurulum Noktaları | Türkiye",
      description: "089 Bayern enerji sistemleri kurulum bölgeleri: Antalya, Alanya, Muğla, İzmir, Split, Dalmaçya. Akdeniz ve Ege'de güneş paneli, ısı pompası, klima kurulumu.",
    },
    "gunes-paneli": {
      title: "Villa Çatısı Güneş Paneli Kurulumu Fiyatları 2026 Antalya | 6-12 kWp Solar Panel Montajı | 089 Bayern",
      description: "Antalya, Alanya, Kemer, Side'da villa çatısına profesyonel güneş paneli kurulumu. 6-12 kWp photovoltaik sistemler, tier-1 paneller, Alman kalitesi montaj. 300+ güneşli gün ile %70 elektrik tasarrufu. 10 yıl garanti.",
    },
    "isi-pompasi": {
      title: "Vaillant Isı Pompası Kurulumu Fiyatları Antalya Villa | Hava Kaynaklı Isıtma Soğutma COP 5.0 | 089 Bayern",
      description: "Antalya ve Akdeniz bölgesinde Vaillant ısı pompası kurulumu. Hava kaynaklı ısı pompası ile kışın ısıtma yazın soğutma. COP 5.0 verimlilik, %60 enerji tasarrufu. Alman yetkili servis, 10 yıl garanti.",
    },
    klima: {
      title: "Samsung WindFree Klima Kurulumu Fiyatları Antalya Villa | Sessiz Enerji Verimli Multi-Split Sistem | 089 Bayern",
      description: "Antalya ve Akdeniz villalarında Samsung WindFree klima sistemi kurulumu. Sessiz ve enerji verimli soğutma-ısıtma. Multi-split sistem, akıllı ev entegrasyonu. Yetkili Samsung bayii, 5 yıl garanti.",
    },
    "enerji-depolama": {
      title: "Lityum İyon Batarya Depolama Sistemi Kurulumu Antalya Villa | 10-15 kWh Güneş Enerjisi Depolama | 089 Bayern",
      description: "Antalya ve Akdeniz bölgesinde lityum iyon enerji depolama batarya sistemi kurulumu. Güneş enerjisi ile şarj, gece kullanım. 10-15 kWh kapasite, 6000+ şarj döngüsü. Kesintisiz enerji, 10 yıl garanti.",
    }
  },
  de: {
    siteName: "089 Bayern Energiesysteme",
    home: {
      title: "089 Bayern | Solaranlage & Wärmepumpe Antalya | Deutsches 4-in-1 System Türkei",
      description: "Solaranlage, Wärmepumpe, Klimaanlage und Stromspeicher in Antalya, Alanya, Kemer, Belek, Side, Manavgat. Deutsche Ingenieursqualität mit bis zu 70% Energieeinsparung. Kostenlose Beratung: +90 507 183 2036",
    },
    systeme: {
      title: "4-in-1 Deutsches Energiesystem | Solar + Wärmepumpe + Klima + Batterie | 089 Bayern",
      description: "089 Bayern 4-in-1 German System: Photovoltaik, Wärmepumpe, Samsung Klimaanlage und Lithium-Batterie in einem System. Installation in Antalya, Alanya, Kemer. 10 Jahre Garantie nach DIN-Standards.",
    },
    vorteile: {
      title: "10 Monate Kostenlose Energie | Vorteile Solaranlage Antalya | 089 Bayern",
      description: "Mit 300+ Sonnentagen am Mittelmeer 10 Monate kostenloser Strom und Heizung. Bis zu 70% Energieeinsparung in Antalya, Alanya, Side. Amortisation in 4-6 Jahren.",
    },
    rechner: {
      title: "Einsparungsrechner | Solaranlage Kosten Antalya | 089 Bayern",
      description: "Personalisierte Energieeinsparungsberechnung für Antalya, Alanya, Kemer, Side. Solaranlage und Wärmepumpe Kosten nach Villa m² und Standort. Kostenloses Angebot.",
    },
    faq: {
      title: "Häufige Fragen | Solaranlage & Wärmepumpe | 089 Bayern Antalya",
      description: "Die 20 häufigsten Fragen zu Solaranlagen, Wärmepumpen, Energiespeicher und dem 089 Bayern 4-in-1 System in Antalya beantwortet von unseren Experten.",
    },
    "ueber-uns": {
      title: "Über Uns | Deutsche Energieexperten Standort Türkei | 089 Bayern Antalya",
      description: "089 Bayern Türkei: Seit 2018 Standort Antalya. Deutsche Qualität für Antalya, Alanya und die Mittelmeerregion. 500+ zufriedene Familien, 10 Jahre Garantie.",
    },
    team: {
      title: "Unser Team | Deutsch-Türkische Energieexperten | 089 Bayern",
      description: "Das 089 Bayern Team: Unter der Leitung von Dalibor Bakmaz und Mustafa Sakar. Deutsche Ingenieursqualität in Antalya, Alanya, Muğla.",
    },
    legal: {
      title: "Rechtliche Informationen | 089 Bayern Energiesysteme",
      description: "089 Bayern rechtliche Richtlinien: Datenschutz, Cookie-Richtlinie, AGB und Fernabsatzvertrag.",
    },
    "installation-antalya": {
      title: "4-in-1 Energiesystem-Installation Antalya | Solaranlage & Wärmepumpe | 089 Bayern",
      description: "Professionelle 4-in-1 Energiesystem-Installation in Antalya, Kemer, Belek, Side, Alanya. Solaranlage, Vaillant Wärmepumpe, Samsung Klimaanlage und Batteriespeicher. Deutsche Qualität, 10 Jahre Garantie.",
    },
    "installation-ankara": {
      title: "4-in-1 Energiesystem-Installation Ankara | Solaranlage & Wärmepumpe | 089 Bayern",
      description: "Professionelle 4-in-1 Energiesystem-Installation in Ankara und Umgebung. Solaranlage, Vaillant Wärmepumpe, Samsung Klimaanlage und Batteriespeicher. Deutsche Qualität, 10 Jahre Garantie. Çankaya, Keçiören, Yenimahalle.",
    },
    "installation-alanya": {
      title: "4-in-1 Energiesystem-Installation Alanya | Solaranlage & Wärmepumpe | 089 Bayern Niederlassung",
      description: "Professionelle 4-in-1 Energiesystem-Installation in Alanya und Umgebung. 089 Bayern Niederlassung Alanya. Solaranlage, Vaillant Wärmepumpe, Samsung Klimaanlage und Batteriespeicher. Mahmutlar, Kestel, Oba.",
    },
    standorte: {
      title: "Unsere Serviceregionen | Türkei, Kroatien, Griechenland | 089 Bayern",
      description: "089 Bayern Energiesystem-Installationsregionen: Antalya, Alanya, Muğla, Izmir, Split, Dalmatien. Solaranlage, Wärmepumpe, Klimaanlage Installation am Mittelmeer und in der Ägäis.",
    },
    "gunes-paneli": {
      title: "Solaranlage Installation Antalya | Villa Dach Solar Panel Montage | 089 Bayern",
      description: "Professionelle Solaranlage Installation auf Villadächern in Antalya, Alanya, Kemer, Side. 6-12 kWp Photovoltaik Systeme, Tier-1 Panels, deutsche Qualitätsmontage. 300+ Sonnentage mit 70% Stromersparnis. 10 Jahre Garantie.",
    },
    "isi-pompasi": {
      title: "Vaillant Wärmepumpe Installation Antalya | Villa Heizung Kühlung | 089 Bayern",
      description: "Vaillant Wärmepumpe Installation in Antalya und der Mittelmeerregion. Luft-Wasser-Wärmepumpe für Heizen im Winter und Kühlen im Sommer. COP 5.0 Effizienz, 60% Energieeinsparung. Deutscher autorisierter Service, 10 Jahre Garantie.",
    },
    klima: {
      title: "Samsung Klimaanlage Installation Antalya | WindFree Klima Villa | 089 Bayern",
      description: "Samsung WindFree Klimaanlage Installation in Antalya und Mittelmeervillen. Leise und energieeffiziente Kühlung-Heizung. Multi-Split System, Smart Home Integration. Autorisierter Samsung Händler, 5 Jahre Garantie.",
    },
    "enerji-depolama": {
      title: "Batteriespeicher System Antalya | Lithium-Ionen Speicher Villa | 089 Bayern",
      description: "Lithium-Ionen Batteriespeicher System Installation in Antalya und der Mittelmeerregion. Laden mit Solarenergie, Nachtnutzung. 10-15 kWh Kapazität, 6000+ Ladezyklen. Unterbrechungsfreie Energie, 10 Jahre Garantie.",
    }
  },
  en: {
    siteName: "089 Bayern Energy Systems",
    home: {
      title: "089 Bayern | Solar Panels & Heat Pump Antalya Turkey | German 4-in-1 System",
      description: "Solar panels, heat pumps, air conditioning and battery storage in Antalya, Alanya, Kemer, Belek, Side, Manavgat Turkey. German engineering with up to 70% energy savings. Free consultation: +90 507 183 2036",
    },
    systeme: {
      title: "4-in-1 German Energy System | Solar + Heat Pump + AC + Battery | 089 Bayern Turkey",
      description: "089 Bayern 4-in-1 German System: Photovoltaic, heat pump, Samsung AC and lithium battery in one system. Installation in Antalya, Alanya, Kemer. 10-year warranty, German DIN standards.",
    },
    vorteile: {
      title: "10 Months Free Energy Benefits | Solar Panel Savings Antalya | 089 Bayern",
      description: "With 300+ sunny days in the Mediterranean, enjoy 10 months of free electricity and heating. Up to 70% energy savings in Antalya, Alanya, Side. 4-6 year payback period.",
    },
    rechner: {
      title: "Energy Savings Calculator | Solar Panel Cost Antalya | 089 Bayern",
      description: "Personalized energy savings calculation for Antalya, Alanya, Kemer, Side. Solar panel and heat pump costs based on villa size and location. Free quote.",
    },
    faq: {
      title: "Frequently Asked Questions | Solar & Heat Pump | 089 Bayern Antalya",
      description: "Top 20 questions about solar panels, heat pumps, energy storage and the 089 Bayern 4-in-1 system in Antalya answered by our experts.",
    },
    "ueber-uns": {
      title: "About Us | German Quality Energy Experts Based in Turkey | 089 Bayern Antalya",
      description: "089 Bayern Turkey: Based in Antalya since 2018. German quality energy systems for Antalya, Alanya and the Mediterranean region. 500+ happy families, 10-year warranty.",
    },
    team: {
      title: "Our Team | German-Turkish Energy Experts | 089 Bayern",
      description: "The 089 Bayern Team: Led by Dalibor Bakmaz and Mustafa Sakar. German engineering quality in Antalya, Alanya, Muğla.",
    },
    legal: {
      title: "Legal Information | 089 Bayern Energy Systems",
      description: "089 Bayern legal policies: Privacy policy, cookie policy, terms of use and distance sales agreement.",
    },
    "installation-antalya": {
      title: "4-in-1 Energy System Installation Antalya | Solar Panels & Heat Pump | 089 Bayern",
      description: "Professional 4-in-1 energy system installation in Antalya, Kemer, Belek, Side, Alanya. Solar panels, Vaillant heat pump, Samsung AC and battery storage. German quality, 10-year warranty.",
    },
    "installation-ankara": {
      title: "4-in-1 Energy System Installation Ankara | Solar Panels & Heat Pump | 089 Bayern",
      description: "Professional 4-in-1 energy system installation in Ankara and surroundings. Solar panels, Vaillant heat pump, Samsung AC and battery storage. German quality, 10-year warranty. Çankaya, Keçiören, Yenimahalle.",
    },
    "installation-alanya": {
      title: "4-in-1 Energy System Installation Alanya | Solar Panels & Heat Pump | 089 Bayern Branch",
      description: "Professional 4-in-1 energy system installation in Alanya and surroundings. 089 Bayern Alanya branch. Solar panels, Vaillant heat pump, Samsung AC and battery storage. Mahmutlar, Kestel, Oba.",
    },
    standorte: {
      title: "Our Service Regions | Turkey, Croatia, Greece | 089 Bayern",
      description: "089 Bayern energy system installation regions: Antalya, Alanya, Mugla, Izmir, Split, Dalmatia. Solar panel, heat pump, AC installation in the Mediterranean and Aegean.",
    },
    "gunes-paneli": {
      title: "Solar Panel Installation Antalya | Villa Roof Solar Panel Mounting | 089 Bayern",
      description: "Professional solar panel installation on villa roofs in Antalya, Alanya, Kemer, Side. 6-12 kWp photovoltaic systems, tier-1 panels, German quality mounting. 300+ sunny days with 70% electricity savings. 10-year warranty.",
    },
    "isi-pompasi": {
      title: "Vaillant Heat Pump Installation Antalya | Villa Heating Cooling System | 089 Bayern",
      description: "Vaillant heat pump installation in Antalya and Mediterranean region. Air-source heat pump for winter heating and summer cooling. COP 5.0 efficiency, 60% energy savings. German authorized service, 10-year warranty.",
    },
    klima: {
      title: "Samsung Air Conditioning Installation Antalya | WindFree AC System Villa | 089 Bayern",
      description: "Samsung WindFree air conditioning system installation in Antalya and Mediterranean villas. Quiet and energy-efficient cooling-heating. Multi-split system, smart home integration. Authorized Samsung dealer, 5-year warranty.",
    },
    "enerji-depolama": {
      title: "Battery Storage System Antalya | Lithium-Ion Battery Villa | 089 Bayern",
      description: "Lithium-ion battery storage system installation in Antalya and Mediterranean region. Solar energy charging, nighttime use. 10-15 kWh capacity, 6000+ charge cycles. Uninterrupted energy, 10-year warranty.",
    }
  },
  ru: {
    siteName: "089 Bayern Энергосистемы",
    home: {
      title: "089 Bayern | Солнечные Панели и Тепловой Насос Анталия | Немецкая Система 4-в-1",
      description: "Солнечные панели, тепловые насосы, кондиционеры и накопители энергии в Анталии, Алании, Кемере, Белеке, Сиде, Манавгате. Немецкое качество с экономией до 70%. Бесплатная консультация: +90 507 183 2036",
    },
    systeme: {
      title: "Немецкая Система 4-в-1 | Солнечные + Тепловой Насос + Климат + Батарея | 089 Bayern",
      description: "089 Bayern 4-in-1 German System: Фотовольтаика, тепловой насос, кондиционер Samsung и литиевая батарея в одной системе. Монтаж в Анталии, Алании, Кемере. 10 лет гарантии.",
    },
    vorteile: {
      title: "10 Месяцев Бесплатной Энергии | Преимущества Солнечных Панелей Анталия | 089 Bayern",
      description: "С 300+ солнечными днями на Средиземноморье - 10 месяцев бесплатного электричества и отопления. До 70% экономии в Анталии, Алании, Сиде. Окупаемость 4-6 лет.",
    },
    rechner: {
      title: "Калькулятор Экономии | Стоимость Солнечных Панелей Анталия | 089 Bayern",
      description: "Персональный расчёт экономии для Анталии, Алании, Кемера, Сиде. Стоимость солнечных панелей и теплового насоса по размеру виллы. Бесплатное предложение.",
    },
    faq: {
      title: "Частые Вопросы | Солнечные Панели и Тепловой Насос | 089 Bayern Анталия",
      description: "20 самых частых вопросов о солнечных панелях, тепловых насосах, накопителях энергии и системе 089 Bayern 4-in-1 в Анталии.",
    },
    "ueber-uns": {
      title: "О Нас | Немецкое Качество Энергосистем в Турции | 089 Bayern Анталия",
      description: "089 Bayern Турция: С 2018 года офис в Анталии. Немецкое качество для Анталии, Алании и Средиземноморья. 500+ довольных семей, 10 лет гарантии.",
    },
    team: {
      title: "Наша Команда | Немецко-Турецкие Энергетические Эксперты | 089 Bayern",
      description: "Команда 089 Bayern: Под руководством Далибора Бакмаза и Мустафы Сакара. Немецкое инженерное качество в Анталии, Алании, Мугле.",
    },
    legal: {
      title: "Правовая Информация | 089 Bayern Энергосистемы",
      description: "Правовые политики 089 Bayern: Политика конфиденциальности, политика cookies, условия использования.",
    },
    "installation-antalya": {
      title: "Установка Энергосистемы 4-в-1 Анталия | Солнечные Панели и Тепловой Насос | 089 Bayern",
      description: "Профессиональная установка энергосистемы 4-в-1 в Анталии, Кемере, Белеке, Сиде, Алании. Солнечные панели, тепловой насос Vaillant, кондиционер Samsung и аккумуляторное хранение. Немецкое качество, 10 лет гарантии.",
    },
    "installation-ankara": {
      title: "Установка Энергосистемы 4-в-1 Анкара | Солнечные Панели и Тепловой Насос | 089 Bayern",
      description: "Профессиональная установка энергосистемы 4-в-1 в Анкаре и окрестностях. Солнечные панели, тепловой насос Vaillant, кондиционер Samsung и аккумуляторное хранение. Немецкое качество, 10 лет гарантии. Чанкая, Кечиорен, Йенимахалле.",
    },
    "installation-alanya": {
      title: "Установка Энергосистемы 4-в-1 Аланья | Солнечные Панели и Тепловой Насос | 089 Bayern Филиал",
      description: "Профессиональная установка энергосистемы 4-в-1 в Аланье и окрестностях. Филиал 089 Bayern Аланья. Солнечные панели, тепловой насос Vaillant, кондиционер Samsung и аккумуляторное хранение. Махмутлар, Кестель, Оба.",
    },
    standorte: {
      title: "Наши Регионы Обслуживания | Турция, Хорватия, Греция | 089 Bayern",
      description: "Регионы установки энергосистем 089 Bayern: Анталия, Алания, Мугла, Измир, Сплит, Далмация. Установка солнечных панелей, тепловых насосов, кондиционеров в Средиземноморье и Эгейском регионе.",
    },
    "gunes-paneli": {
      title: "Установка Солнечных Панелей Анталия | Монтаж на Крышу Виллы | 089 Bayern",
      description: "Профессиональная установка солнечных панелей на крыши вилл в Анталии, Алании, Кемере, Сиде. Фотовольтаические системы 6-12 кВт, панели tier-1, немецкое качество монтажа. 300+ солнечных дней, 70% экономии. 10 лет гарантии.",
    },
    "isi-pompasi": {
      title: "Установка Теплового Насоса Vaillant Анталия | Отопление Охлаждение Виллы | 089 Bayern",
      description: "Установка теплового насоса Vaillant в Анталии и Средиземноморском регионе. Воздушный тепловой насос для отопления зимой и охлаждения летом. КПД COP 5.0, 60% экономии. Авторизованный сервис, 10 лет гарантии.",
    },
    klima: {
      title: "Установка Кондиционера Samsung Анталия | WindFree Система для Виллы | 089 Bayern",
      description: "Установка кондиционера Samsung WindFree в Анталии и средиземноморских виллах. Тихое и энергоэффективное охлаждение-отопление. Мульти-сплит система, умный дом. Авторизованный дилер Samsung, 5 лет гарантии.",
    },
    "enerji-depolama": {
      title: "Система Хранения Энергии Анталия | Литий-Ионная Батарея для Виллы | 089 Bayern",
      description: "Установка литий-ионной системы хранения энергии в Анталии и Средиземноморском регионе. Зарядка от солнечной энергии, ночное использование. Ёмкость 10-15 кВтч, 6000+ циклов зарядки. Бесперебойная энергия, 10 лет гарантии.",
    }
  },
  uk: {
    siteName: "089 Bayern Енергосистеми",
    home: {
      title: "089 Bayern | Сонячні Панелі та Тепловий Насос Анталія | Німецька Система 4-в-1",
      description: "Сонячні панелі, теплові насоси, кондиціонери та накопичувачі енергії в Анталії, Аланії, Кемері, Белеку, Сіде, Манавгаті. Німецька якість з економією до 70%. Безкоштовна консультація: +90 507 183 2036",
    },
    systeme: {
      title: "Німецька Система 4-в-1 | Сонячні + Тепловий Насос + Клімат + Батарея | 089 Bayern",
      description: "089 Bayern 4-in-1 German System: Фотовольтаїка, тепловий насос, кондиціонер Samsung та літієва батарея в одній системі. Монтаж в Анталії, Аланії, Кемері. 10 років гарантії.",
    },
    vorteile: {
      title: "10 Місяців Безкоштовної Енергії | Переваги Сонячних Панелей Анталія | 089 Bayern",
      description: "З 300+ сонячними днями на Середземномор'ї - 10 місяців безкоштовної електрики та опалення. До 70% економії в Анталії, Аланії, Сіде. Окупність 4-6 років.",
    },
    rechner: {
      title: "Калькулятор Економії | Вартість Сонячних Панелей Анталія | 089 Bayern",
      description: "Персональний розрахунок економії для Анталії, Аланії, Кемера, Сіде. Вартість сонячних панелей та теплового насоса за розміром вілли. Безкоштовна пропозиція.",
    },
    faq: {
      title: "Часті Питання | Сонячні Панелі та Тепловий Насос | 089 Bayern Анталія",
      description: "20 найчастіших питань про сонячні панелі, теплові насоси, накопичувачі енергії та систему 089 Bayern 4-in-1 в Анталії.",
    },
    "ueber-uns": {
      title: "Про Нас | Німецька Якість Енергосистем у Туреччині | 089 Bayern Анталія",
      description: "089 Bayern Туреччина: З 2018 року офіс в Анталії. Німецька якість для Анталії, Аланії та Середземномор'я. 500+ задоволених родин, 10 років гарантії.",
    },
    team: {
      title: "Наша Команда | Німецько-Турецькі Енергетичні Експерти | 089 Bayern",
      description: "Команда 089 Bayern: Під керівництвом Далібора Бакмаза та Мустафи Сакара. Німецька інженерна якість в Анталії, Аланії, Муглі.",
    },
    legal: {
      title: "Правова Інформація | 089 Bayern Енергосистеми",
      description: "Правові політики 089 Bayern: Політика конфіденційності, політика cookies, умови використання.",
    },
    "installation-antalya": {
      title: "Встановлення Енергосистеми 4-в-1 Анталія | Сонячні Панелі та Тепловий Насос | 089 Bayern",
      description: "Професійне встановлення енергосистеми 4-в-1 в Анталії, Кемері, Белеку, Сіде, Аланії. Сонячні панелі, тепловий насос Vaillant, кондиціонер Samsung та акумуляторне зберігання. Німецька якість, 10 років гарантії.",
    },
    "installation-ankara": {
      title: "Встановлення Енергосистеми 4-в-1 Анкара | Сонячні Панелі та Тепловий Насос | 089 Bayern",
      description: "Професійне встановлення енергосистеми 4-в-1 в Анкарі та околицях. Сонячні панелі, тепловий насос Vaillant, кондиціонер Samsung та акумуляторне зберігання. Німецька якість, 10 років гарантії. Чанкая, Кечіорен, Єнімахалле.",
    },
    "installation-alanya": {
      title: "Встановлення Енергосистеми 4-в-1 Аланья | Сонячні Панелі та Тепловий Насос | 089 Bayern Філія",
      description: "Професійне встановлення енергосистеми 4-в-1 в Аланії та околицях. Філія 089 Bayern Аланья. Сонячні панелі, тепловий насос Vaillant, кондиціонер Samsung та акумуляторне зберігання. Махмутлар, Кестель, Оба.",
    },
    standorte: {
      title: "Наші Регіони Обслуговування | Туреччина, Хорватія, Греція | 089 Bayern",
      description: "Регіони встановлення енергосистем 089 Bayern: Анталія, Аланія, Мугла, Ізмір, Спліт, Далмація. Встановлення сонячних панелей, теплових насосів, кондиціонерів у Середземномор'ї та Егейському регіоні.",
    },
    "gunes-paneli": {
      title: "Встановлення Сонячних Панелей Анталія | Монтаж на Дах Вілли | 089 Bayern",
      description: "Професійне встановлення сонячних панелей на дахи вілл в Анталії, Аланії, Кемері, Сіде. Фотовольтаїчні системи 6-12 кВт, панелі tier-1, німецька якість монтажу. 300+ сонячних днів, 70% економії. 10 років гарантії.",
    },
    "isi-pompasi": {
      title: "Встановлення Теплового Насоса Vaillant Анталія | Опалення Охолодження Вілли | 089 Bayern",
      description: "Встановлення теплового насоса Vaillant в Анталії та Середземноморському регіоні. Повітряний тепловий насос для опалення взимку та охолодження влітку. ККД COP 5.0, 60% економії. Авторизований сервіс, 10 років гарантії.",
    },
    klima: {
      title: "Встановлення Кондиціонера Samsung Анталія | WindFree Система для Вілли | 089 Bayern",
      description: "Встановлення кондиціонера Samsung WindFree в Анталії та середземноморських віллах. Тихе та енергоефективне охолодження-опалення. Мульти-спліт система, розумний дім. Авторизований дилер Samsung, 5 років гарантії.",
    },
    "enerji-depolama": {
      title: "Система Зберігання Енергії Анталія | Літій-Іонна Батарея для Вілли | 089 Bayern",
      description: "Встановлення літій-іонної системи зберігання енергії в Анталії та Середземноморському регіоні. Зарядка від сонячної енергії, нічне використання. Ємність 10-15 кВтг, 6000+ циклів зарядки. Безперебійна енергія, 10 років гарантії.",
    }
  },
  hr: {
    siteName: "089 Bayern Energetski Sustavi",
    home: {
      title: "089 Bayern | Solarni Paneli i Toplinska Pumpa Antalya | Njemački Sustav 4-u-1",
      description: "Solarni paneli, toplinske pumpe, klima i pohrana energije u Antalyi, Alanyi, Kemeru, Beleku, Sideu, Manavgatu. Njemačka kvaliteta s uštedom do 70%. Besplatna konzultacija: +90 507 183 2036",
    },
    systeme: {
      title: "Njemački Sustav 4-u-1 | Solar + Toplinska Pumpa + Klima + Baterija | 089 Bayern",
      description: "089 Bayern 4-in-1 German System: Fotonapon, toplinska pumpa, Samsung klima i litijska baterija u jednom sustavu. Instalacija u Antalyi, Alanyi, Kemeru. 10 godina jamstva.",
    },
    vorteile: {
      title: "10 Mjeseci Besplatne Energije | Prednosti Solarnih Panela Antalya | 089 Bayern",
      description: "S 300+ sunčanih dana na Mediteranu - 10 mjeseci besplatne struje i grijanja. Do 70% uštede u Antalyi, Alanyi, Sideu. Povrat investicije 4-6 godina.",
    },
    rechner: {
      title: "Kalkulator Uštede | Cijena Solarnih Panela Antalya | 089 Bayern",
      description: "Personalizirani izračun uštede za Antalyu, Alanyu, Kemer, Side. Cijena solarnih panela i toplinske pumpe prema veličini vile. Besplatna ponuda.",
    },
    faq: {
      title: "Česta Pitanja | Solarni Paneli i Toplinska Pumpa | 089 Bayern Antalya",
      description: "20 najčešćih pitanja o solarnim panelima, toplinskim pumpama, pohrani energije i sustavu 089 Bayern 4-in-1 u Antalyi.",
    },
    "ueber-uns": {
      title: "O Nama | Njemačka Kvaliteta Energetskih Sustava u Turskoj | 089 Bayern Antalya",
      description: "089 Bayern Turska: Od 2018. sjedište u Antalyi. Njemačka kvaliteta za Antalyu, Alanyu i Mediteran. 500+ zadovoljnih obitelji, 10 godina jamstva.",
    },
    team: {
      title: "Naš Tim | Njemačko-Turski Energetski Stručnjaci | 089 Bayern",
      description: "Tim 089 Bayern: Pod vodstvom Dalibora Bakmaza i Mustafe Sakara. Njemačka inženjerska kvaliteta u Antalyi, Alanyi, Mugli.",
    },
    legal: {
      title: "Pravne Informacije | 089 Bayern Energetski Sustavi",
      description: "Pravne politike 089 Bayern: Politika privatnosti, politika kolačića, uvjeti korištenja.",
    },
    "installation-antalya": {
      title: "Instalacija Energetskog Sustava 4-u-1 Antalya | Solarni Paneli i Toplinska Pumpa | 089 Bayern",
      description: "Profesionalna instalacija energetskog sustava 4-u-1 u Antalyi, Kemeru, Beleku, Sideu, Alanyi. Solarni paneli, Vaillant toplinska pumpa, Samsung klima i pohrana baterije. Njemačka kvaliteta, 10 godina jamstva.",
    },
    "installation-ankara": {
      title: "Instalacija Energetskog Sustava 4-u-1 Ankara | Solarni Paneli i Toplinska Pumpa | 089 Bayern",
      description: "Profesionalna instalacija energetskog sustava 4-u-1 u Ankari i okolici. Solarni paneli, Vaillant toplinska pumpa, Samsung klima i pohrana baterije. Njemačka kvaliteta, 10 godina jamstva. Çankaya, Keçiören, Yenimahalle.",
    },
    "installation-alanya": {
      title: "Instalacija Energetskog Sustava 4-u-1 Alanya | Solarni Paneli i Toplinska Pumpa | 089 Bayern Podružnica",
      description: "Profesionalna instalacija energetskog sustava 4-u-1 u Alanyi i okolici. 089 Bayern podružnica Alanya. Solarni paneli, Vaillant toplinska pumpa, Samsung klima i pohrana baterije. Mahmutlar, Kestel, Oba.",
    },
    standorte: {
      title: "Naše Servisne Regije | Turska, Hrvatska, Grčka | 089 Bayern",
      description: "Regije instalacije energetskih sustava 089 Bayern: Antalya, Alanya, Muğla, Izmir, Split, Dalmacija. Instalacija solarnih panela, toplinskih pumpi, klima na Mediteranu i Egeju.",
    },
    "gunes-paneli": {
      title: "Instalacija Solarnih Panela Antalya | Montaža na Krov Vile | 089 Bayern",
      description: "Profesionalna instalacija solarnih panela na krovove vila u Antalyi, Alanyi, Kemeru, Sideu. Fotonaponski sustavi 6-12 kWp, tier-1 paneli, njemačka kvaliteta montaže. 300+ sunčanih dana, 70% uštede. 10 godina jamstva.",
    },
    "isi-pompasi": {
      title: "Instalacija Toplinske Pumpe Vaillant Antalya | Grijanje Hlađenje Vile | 089 Bayern",
      description: "Instalacija toplinske pumpe Vaillant u Antalyi i mediteranskoj regiji. Zračna toplinska pumpa za grijanje zimi i hlađenje ljeti. COP 5.0 učinkovitost, 60% uštede. Ovlašteni servis, 10 godina jamstva.",
    },
    klima: {
      title: "Instalacija Samsung Klima Uređaja Antalya | WindFree Klima Sustav Vila | 089 Bayern",
      description: "Instalacija Samsung WindFree klima sustava u Antalyi i mediteranskim vilama. Tihi i energetski učinkoviti hlađenje-grijanje. Multi-split sustav, pametni dom integracija. Ovlašteni Samsung zastupnik, 5 godina jamstva.",
    },
    "enerji-depolama": {
      title: "Sustav Pohrane Energije Antalya | Litij-Ionska Baterija Vila | 089 Bayern",
      description: "Instalacija litij-ionskog sustava pohrane energije u Antalyi i mediteranskoj regiji. Punjenje solarnom energijom, noćno korištenje. Kapacitet 10-15 kWh, 6000+ ciklusa punjenja. Neprekidna energija, 10 godina jamstva.",
    }
  },
  ar: {
    siteName: "089 Bayern أنظمة الطاقة",
    home: {
      title: "089 Bayern | الألواح الشمسية ومضخة الحرارة أنطاليا | نظام ألماني 4 في 1",
      description: "الألواح الشمسية، مضخات الحرارة، التكييف وتخزين الطاقة في أنطاليا، ألانيا، كيمير، بيليك، سيدا، مانافغات. جودة ألمانية مع توفير حتى 70%. استشارة مجانية: +90 507 183 2036",
    },
    systeme: {
      title: "نظام ألماني 4 في 1 | شمسي + مضخة حرارة + تكييف + بطارية | 089 Bayern",
      description: "نظام 089 Bayern 4-in-1: الخلايا الكهروضوئية، مضخة الحرارة، تكييف Samsung وبطارية ليثيوم في نظام واحد. التركيب في أنطاليا، ألانيا، كيمير. ضمان 10 سنوات.",
    },
    vorteile: {
      title: "10 أشهر طاقة مجانية | فوائد الألواح الشمسية أنطاليا | 089 Bayern",
      description: "مع 300+ يوم مشمس في البحر المتوسط - 10 أشهر من الكهرباء والتدفئة المجانية. توفير حتى 70% في أنطاليا، ألانيا، سيدا. فترة استرداد 4-6 سنوات.",
    },
    rechner: {
      title: "حاسبة التوفير | تكلفة الألواح الشمسية أنطاليا | 089 Bayern",
      description: "حساب توفير الطاقة المخصص لأنطاليا، ألانيا، كيمير، سيدا. تكلفة الألواح الشمسية ومضخة الحرارة حسب حجم الفيلا. عرض مجاني.",
    },
    faq: {
      title: "الأسئلة الشائعة | الألواح الشمسية ومضخة الحرارة | 089 Bayern أنطاليا",
      description: "أكثر 20 سؤالاً شيوعاً حول الألواح الشمسية، مضخات الحرارة، تخزين الطاقة ونظام 089 Bayern 4-in-1 في أنطاليا.",
    },
    "ueber-uns": {
      title: "عنا | جودة ألمانية لأنظمة الطاقة في تركيا | 089 Bayern أنطاليا",
      description: "089 Bayern تركيا: مقر في أنطاليا منذ 2018. جودة ألمانية لأنطاليا، ألانيا ومنطقة البحر المتوسط. 500+ عائلة سعيدة، ضمان 10 سنوات.",
    },
    team: {
      title: "فريقنا | خبراء الطاقة الألمان-الأتراك | 089 Bayern",
      description: "فريق 089 Bayern: بقيادة داليبور باكماز ومصطفى ساكار. جودة هندسية ألمانية في أنطاليا، ألانيا، موغلا.",
    },
    legal: {
      title: "المعلومات القانونية | 089 Bayern أنظمة الطاقة",
      description: "السياسات القانونية لـ 089 Bayern: سياسة الخصوصية، سياسة ملفات تعريف الارتباط، شروط الاستخدام.",
    },
    "installation-antalya": {
      title: "تركيب نظام الطاقة 4 في 1 أنطاليا | الألواح الشمسية ومضخة الحرارة | 089 Bayern",
      description: "تركيب احترافي لنظام الطاقة 4 في 1 في أنطاليا، كيمير، بيليك، سيدا، ألانيا. الألواح الشمسية، مضخة حرارة Vaillant، تكييف Samsung وتخزين البطارية. جودة ألمانية، ضمان 10 سنوات.",
    },
    "installation-ankara": {
      title: "تركيب نظام الطاقة 4 في 1 أنقرة | الألواح الشمسية ومضخة الحرارة | 089 Bayern",
      description: "تركيب احترافي لنظام الطاقة 4 في 1 في أنقرة والمناطق المحيطة. الألواح الشمسية، مضخة حرارة Vaillant، تكييف Samsung وتخزين البطارية. جودة ألمانية، ضمان 10 سنوات. تشانكايا، كيتشيورين، ينيماهالله.",
    },
    "installation-alanya": {
      title: "تركيب نظام الطاقة 4 في 1 ألانيا | الألواح الشمسية ومضخة الحرارة | 089 Bayern فرع",
      description: "تركيب احترافي لنظام الطاقة 4 في 1 في ألانيا والمناطق المحيطة. فرع 089 Bayern ألانيا. الألواح الشمسية، مضخة حرارة Vaillant، تكييف Samsung وتخزين البطارية. محمودلار، كستل، أوبا.",
    },
    standorte: {
      title: "مناطق خدمتنا | تركيا، كرواتيا، اليونان | 089 Bayern",
      description: "مناطق تركيب أنظمة الطاقة 089 Bayern: أنطاليا، ألانيا، موغلا، إزمير، سبليت، دالماتيا. تركيب الألواح الشمسية، مضخات الحرارة، التكييف في البحر المتوسط وبحر إيجة.",
    },
    "gunes-paneli": {
      title: "تركيب الألواح الشمسية أنطاليا | تركيب لوحة شمسية سقف فيلا | 089 Bayern",
      description: "تركيب احترافي للألواح الشمسية على أسقف الفلل في أنطاليا، ألانيا، كيمير، سيدا. أنظمة كهروضوئية 6-12 كيلوواط، ألواح tier-1، تركيب بجودة ألمانية. 300+ يوم مشمس مع 70% توفير. ضمان 10 سنوات.",
    },
    "isi-pompasi": {
      title: "تركيب مضخة حرارة Vaillant أنطاليا | نظام تدفئة تبريد فيلا | 089 Bayern",
      description: "تركيب مضخة حرارة Vaillant في أنطاليا ومنطقة البحر المتوسط. مضخة حرارة هوائية للتدفئة شتاءً والتبريد صيفاً. كفاءة COP 5.0، 60% توفير. خدمة معتمدة، ضمان 10 سنوات.",
    },
    klima: {
      title: "تركيب تكييف Samsung أنطاليا | نظام WindFree تكييف فيلا | 089 Bayern",
      description: "تركيب نظام تكييف Samsung WindFree في أنطاليا وفلل البحر المتوسط. تبريد وتدفئة هادئة وموفرة للطاقة. نظام multi-split، تكامل منزل ذكي. وكيل Samsung معتمد، ضمان 5 سنوات.",
    },
    "enerji-depolama": {
      title: "نظام تخزين الطاقة أنطاليا | بطارية ليثيوم أيون فيلا | 089 Bayern",
      description: "تركيب نظام تخزين طاقة ليثيوم أيون في أنطاليا ومنطقة البحر المتوسط. شحن بالطاقة الشمسية، استخدام ليلي. سعة 10-15 كيلوواط ساعة، 6000+ دورة شحن. طاقة متواصلة، ضمان 10 سنوات.",
    }
  }
};

export default function SEOHead({ page, pageTitle, customFaqItems }: SEOHeadProps) {
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
    "installation-alanya": { tr: "Kurulum Alanya", de: "Installation Alanya", en: "Installation Alanya", ru: "Установка Алания", uk: "Встановлення Аланія", ar: "تركيب ألانيا", hr: "Instalacija Alanya" },
    "gunes-paneli": { tr: "Güneş Paneli", de: "Solaranlage", en: "Solar Panel", ru: "Солнечная Панель", uk: "Сонячна Панель", ar: "لوحة شمسية", hr: "Solarni Panel" },
    "isi-pompasi": { tr: "Isı Pompası", de: "Wärmepumpe", en: "Heat Pump", ru: "Тепловой Насос", uk: "Тепловий Насос", ar: "مضخة حرارة", hr: "Toplinska Pumpa" },
    klima: { tr: "Klima Sistemi", de: "Klimaanlage", en: "Air Conditioning", ru: "Кондиционер", uk: "Кондиціонер", ar: "تكييف", hr: "Klima Uređaj" },
    "enerji-depolama": { tr: "Enerji Depolama", de: "Batteriespeicher", en: "Battery Storage", ru: "Аккумулятор", uk: "Акумулятор", ar: "تخزين الطاقة", hr: "Pohrana Energije" }
  };

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
    standorte: "locations",
    "gunes-paneli": "solarPanel",
    "isi-pompasi": "heatPump",
    klima: "airConditioning",
    "enerji-depolama": "batteryStorage"
  };

  const urlKey = pageToUrlKey[page];
  const getPath = (lang: Language) => {
    if (page === "home") return "";
    if (!urlKey) return page;
    return urlPaths[lang]?.[urlKey]?.slice(1) || page;
  };
  const currentPath = getPath(language as Language);
  const pageUrl = `https://089bayern.com/${currentPath}`;

  const breadcrumbItems = [
    { "@type": "ListItem", "position": 1, "name": pageNames.home[language] || "Ana Sayfa", "item": "https://089bayern.com" }
  ];
  
  if (page !== "home") {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": pageNames[page]?.[language] || pageNames[page]?.tr || data.title,
      "item": pageUrl
    });
  }

  const founders = [
    {
      "@type": "Person",
      "@id": "https://089bayern.com/#mustafa-sakar",
      "name": "Mustafa Sakar",
      "jobTitle": "CEO / Mitgründer",
      "description": language === "tr" ? "Türkiye ve Almanya arasında köprü kuran enerji uzmanı" : "Energy expert bridging Turkey and Germany",
      "knowsLanguage": ["de", "tr"],
      "worksFor": { "@id": "https://089bayern.com/#organization" },
      "telephone": "+90-507-183-2036",
      "email": "msakar@089bayern.com"
    },
    {
      "@type": "Person",
      "@id": "https://089bayern.com/#dalibor-bakmaz",
      "name": "Dalibor Bakmaz",
      "jobTitle": "CEO / Geschäftsführer",
      "description": language === "tr" ? "15+ yıl Alman enerji sistemleri deneyimi" : "15+ years experience with German energy systems",
      "knowsLanguage": ["de", "hr", "en"],
      "worksFor": { "@id": "https://089bayern.com/#organization" },
      "telephone": "+90-507-192-2036",
      "email": "dbakmaz@089bayern.com"
    }
  ];

  const stripHtml = (html: string): string => html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

  const faqPageUrl = page === "faq" ? pageUrl : null;
  const faqSchema = page === "faq" ? (() => {
    const faqItems = customFaqItems && customFaqItems.length > 0
      ? customFaqItems.map(item => ({
          "@type": "Question" as const,
          "name": stripHtml(item.question),
          "acceptedAnswer": {
            "@type": "Answer" as const,
            "text": stripHtml(item.answer)
          }
        }))
      : [
          {
            "@type": "Question" as const,
            "name": language === "tr" ? "Güneş paneli kurulumu ne kadar sürer?" : language === "de" ? "Wie lange dauert die Installation einer Solaranlage?" : "How long does solar panel installation take?",
            "acceptedAnswer": {
              "@type": "Answer" as const,
              "text": language === "tr" ? "4'ü 1 arada enerji sistemi kurulumu genellikle 3-5 iş günü sürer. Sadece güneş paneli kurulumu 1-2 gün sürer." : language === "de" ? "Die Installation des 4-in-1 Energiesystems dauert in der Regel 3-5 Werktage. Die reine Solaranlagen-Installation dauert 1-2 Tage." : "The 4-in-1 energy system installation typically takes 3-5 business days. Solar panel installation alone takes 1-2 days."
            }
          },
          {
            "@type": "Question" as const,
            "name": language === "tr" ? "Sistem kesintisiz güç sağlayabilir mi?" : language === "de" ? "Kann das System eine Notstromversorgung bieten?" : "Can the system provide backup power?",
            "acceptedAnswer": {
              "@type": "Answer" as const,
              "text": language === "tr" ? "Evet, batarya depolama sistemi ile şebeke kesintilerinde evinize kesintisiz enerji sağlanır. 10-15 kWh kapasite ile 8-12 saat bağımsız çalışma." : language === "de" ? "Ja, mit dem Batteriespeicher wird Ihr Haus bei Netzausfällen unterbrechungsfrei versorgt. 10-15 kWh Kapazität ermöglichen 8-12 Stunden Unabhängigkeit." : "Yes, the battery storage system provides uninterrupted power during grid outages. 10-15 kWh capacity supports 8-12 hours of independent operation."
            }
          },
          {
            "@type": "Question" as const,
            "name": language === "tr" ? "Aşırı sıcaklıklarda performans nasıl?" : language === "de" ? "Wie ist die Leistung bei extremen Temperaturen?" : "How does performance hold up in extreme temperatures?",
            "acceptedAnswer": {
              "@type": "Answer" as const,
              "text": language === "tr" ? "Vaillant ısı pompası -20°C ile +45°C arasında verimli çalışır. Samsung klima 50°C'ye kadar soğutma yapabilir. Akdeniz iklimi için ideal performans." : language === "de" ? "Die Vaillant Wärmepumpe arbeitet effizient von -20°C bis +45°C. Die Samsung Klimaanlage kühlt bis 50°C. Ideale Leistung für das Mittelmeerklima." : "The Vaillant heat pump operates efficiently from -20°C to +45°C. Samsung AC cools up to 50°C. Ideal performance for Mediterranean climate."
            }
          },
          {
            "@type": "Question" as const,
            "name": language === "tr" ? "4'ü 1 arada sistem fiyatı ne kadar?" : language === "de" ? "Was kostet das 4-in-1 System?" : "How much does the 4-in-1 system cost?",
            "acceptedAnswer": {
              "@type": "Answer" as const,
              "text": language === "tr" ? "200m² villa için yaklaşık 35.000-50.000 EUR arasındadır (garantisiz tahmini fiyat). Standart 6kWp: ca. 31.200 EUR, Orta 10kWp: ca. 41.600 EUR, Premium 12kWp: ca. 58.500 EUR." : language === "de" ? "Für eine 200m² Villa ca. 35.000-50.000 EUR (unverbindlicher Richtwert). Standard 6kWp: ca. 31.200 EUR, Mittel 10kWp: ca. 41.600 EUR, Premium 12kWp: ca. 58.500 EUR." : "For a 200m² villa approximately 35,000-50,000 EUR (non-binding estimate). Standard 6kWp: approx. 31,200 EUR, Medium 10kWp: approx. 41,600 EUR, Premium 12kWp: approx. 58,500 EUR."
            }
          },
          {
            "@type": "Question" as const,
            "name": language === "tr" ? "Türkiye'de enerji teşvikleri var mı?" : language === "de" ? "Gibt es Förderungen in der Türkei?" : "Are there energy incentives in Turkey?",
            "acceptedAnswer": {
              "@type": "Answer" as const,
              "text": language === "tr" ? "Türkiye'de güneş enerjisi için vergi indirimleri ve net metering (fazla üretimi şebekeye satma) imkanı bulunmaktadır. Detaylı bilgi için ücretsiz danışmanlık alabilirsiniz." : language === "de" ? "In der Türkei gibt es Steuererleichterungen für Solarenergie und Net-Metering (Überschusseinspeisung). Kontaktieren Sie uns für eine kostenlose Beratung." : "Turkey offers tax benefits for solar energy and net metering (selling excess production to the grid). Contact us for free consultation on available incentives."
            }
          }
        ];

    return {
      "@type": "FAQPage",
      "@id": `${faqPageUrl || pageUrl}#faqpage`,
      "mainEntity": faqItems,
      "mainEntityOfPage": { "@id": `${faqPageUrl || pageUrl}#webpage` },
      "dateModified": "2026-02-16",
      "author": { "@id": "https://089bayern.com/#organization" }
    };
  })() : null;

  const productPages = ["gunes-paneli", "isi-pompasi", "klima", "enerji-depolama"];
  const productSchemas: Record<string, Record<string, { name: string; description: string; brand: string; category: string }>> = {
    "gunes-paneli": {
      tr: { name: "Güneş Paneli Sistemi", description: "Profesyonel villa çatısı güneş paneli kurulumu, 6-12 kWp photovoltaik sistem, tier-1 paneller ile %70 elektrik tasarrufu", brand: "089 Bayern", category: "Güneş Enerjisi Sistemleri" },
      de: { name: "Solaranlage", description: "Professionelle Solaranlagen-Installation für Villen, 6-12 kWp Photovoltaik-System, Tier-1 Module mit bis zu 70% Stromeinsparung", brand: "089 Bayern", category: "Solarenergiesysteme" },
      en: { name: "Solar Panel System", description: "Professional villa rooftop solar panel installation, 6-12 kWp photovoltaic system, tier-1 panels with up to 70% electricity savings", brand: "089 Bayern", category: "Solar Energy Systems" }
    },
    "isi-pompasi": {
      tr: { name: "Vaillant Isı Pompası", description: "Vaillant aroTHERM hava kaynaklı ısı pompası kurulumu, COP 5.0 verimlilik, kışın ısıtma yazın soğutma, %60 enerji tasarrufu", brand: "Vaillant", category: "Isıtma ve Soğutma Sistemleri" },
      de: { name: "Vaillant Wärmepumpe", description: "Vaillant aroTHERM Luft-Wasser-Wärmepumpe Installation, COP 5.0 Effizienz, Heizen im Winter und Kühlen im Sommer, 60% Energieeinsparung", brand: "Vaillant", category: "Heizungs- und Kühlsysteme" },
      en: { name: "Vaillant Heat Pump", description: "Vaillant aroTHERM air-source heat pump installation, COP 5.0 efficiency, heating in winter and cooling in summer, 60% energy savings", brand: "Vaillant", category: "Heating & Cooling Systems" }
    },
    klima: {
      tr: { name: "Samsung WindFree Klima Sistemi", description: "Samsung WindFree sessiz klima sistemi kurulumu, multi-split villa çözümü, akıllı ev entegrasyonu, enerji verimli inverter teknolojisi", brand: "Samsung", category: "Klima Sistemleri" },
      de: { name: "Samsung WindFree Klimaanlage", description: "Samsung WindFree geräuschlose Klimaanlage Installation, Multi-Split Villa-Lösung, Smart-Home Integration, energieeffiziente Inverter-Technologie", brand: "Samsung", category: "Klimaanlagen" },
      en: { name: "Samsung WindFree Air Conditioning", description: "Samsung WindFree silent AC system installation, multi-split villa solution, smart home integration, energy-efficient inverter technology", brand: "Samsung", category: "Air Conditioning Systems" }
    },
    "enerji-depolama": {
      tr: { name: "Enerji Depolama Batarya Sistemi", description: "Lityum iyon batarya depolama sistemi, 10-15 kWh kapasite, 6000+ şarj döngüsü, güneş enerjisi ile entegre, kesintisiz enerji", brand: "Samsung SDI", category: "Enerji Depolama Sistemleri" },
      de: { name: "Batteriespeicher System", description: "Lithium-Ionen Batteriespeicher, 10-15 kWh Kapazität, 6000+ Ladezyklen, integriert mit Solaranlage, unterbrechungsfreie Energie", brand: "Samsung SDI", category: "Energiespeichersysteme" },
      en: { name: "Battery Storage System", description: "Lithium-ion battery storage system, 10-15 kWh capacity, 6000+ charge cycles, integrated with solar, uninterrupted energy", brand: "Samsung SDI", category: "Energy Storage Systems" }
    }
  };

  const currentProductSchema = productPages.includes(page) ? (() => {
    const pData = productSchemas[page]?.[language] || productSchemas[page]?.tr;
    if (!pData) return null;
    return {
      "@type": "Product",
      "@id": `https://089bayern.com/${page}#product`,
      "name": pData.name,
      "description": pData.description,
      "brand": { "@type": "Brand", "name": pData.brand },
      "category": pData.category,
      "manufacturer": { "@id": "https://089bayern.com/#organization" },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "EUR",
        "lowPrice": page === "gunes-paneli" ? "8000" : page === "isi-pompasi" ? "12000" : page === "klima" ? "3000" : "6000",
        "highPrice": page === "gunes-paneli" ? "25000" : page === "isi-pompasi" ? "20000" : page === "klima" ? "8000" : "15000",
        "offerCount": "3",
        "availability": "https://schema.org/InStock",
        "seller": { "@id": "https://089bayern.com/#organization" }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "reviewCount": page === "gunes-paneli" ? "215" : page === "isi-pompasi" ? "142" : page === "klima" ? "98" : "67"
      }
    };
  })() : null;

  const installationPages = ["installation-antalya", "installation-alanya", "installation-ankara"];
  const installationServiceData: Record<string, {
    geo: { lat: number; lng: number };
    areas: Record<string, string[]>;
    officeType: Record<string, string>;
  }> = {
    "installation-antalya": {
      geo: { lat: 36.8969, lng: 30.7133 },
      areas: {
        tr: ["Antalya Merkez", "Konyaaltı", "Muratpaşa", "Kepez", "Lara", "Kundu", "Döşemealtı", "Aksu", "Kemer", "Belek", "Serik", "Side", "Manavgat", "Alanya", "Kaş", "Finike", "Kumluca", "Demre", "Gazipaşa", "Konaklı", "Mahmutlar", "Avsallar", "Oba", "Kestel", "Kargıcak", "Çıralı", "Olimpos", "Çamyuva", "Göynük", "Beldibi", "Bogazkent", "Kadriye", "Kumköy", "Çolaklı"],
        de: ["Antalya Zentrum", "Konyaalti", "Muratpasa", "Kepez", "Lara", "Kundu", "Dosemealti", "Aksu", "Kemer", "Belek", "Serik", "Side", "Manavgat", "Alanya", "Kas", "Finike", "Kumluca", "Demre", "Gazipasa", "Konakli", "Mahmutlar", "Avsallar", "Oba", "Kestel", "Kargicak"],
        en: ["Antalya Center", "Konyaalti", "Muratpasa", "Kepez", "Lara", "Kundu", "Dosemealti", "Aksu", "Kemer", "Belek", "Serik", "Side", "Manavgat", "Alanya", "Kas", "Finike", "Kumluca", "Demre", "Gazipasa", "Konakli", "Mahmutlar", "Avsallar", "Oba", "Kestel", "Kargicak"]
      },
      officeType: { tr: "Merkez", de: "Zentrale", en: "Headquarters", ru: "Главный офис", uk: "Головний офіс", ar: "المقر الرئيسي", hr: "Sjedište" }
    },
    "installation-alanya": {
      geo: { lat: 36.5437, lng: 31.9994 },
      areas: {
        tr: ["Alanya Merkez", "Mahmutlar", "Kestel", "Oba", "Konaklı", "Kargıcak", "Avsallar", "Türkler", "Payallar", "Gazipaşa", "Demirtaş", "Cikcilli"],
        de: ["Alanya Zentrum", "Mahmutlar", "Kestel", "Oba", "Konakli", "Kargicak", "Avsallar", "Turkler", "Payallar", "Gazipasa", "Demirtas", "Cikcilli"],
        en: ["Alanya Center", "Mahmutlar", "Kestel", "Oba", "Konakli", "Kargicak", "Avsallar", "Turkler", "Payallar", "Gazipasa", "Demirtas", "Cikcilli"]
      },
      officeType: { tr: "Şube", de: "Niederlassung", en: "Branch", ru: "Филиал", uk: "Філія", ar: "فرع", hr: "Podružnica" }
    },
    "installation-ankara": {
      geo: { lat: 39.9334, lng: 32.8597 },
      areas: {
        tr: ["Ankara Merkez", "Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Etimesgut", "Sincan", "Gölbaşı", "Pursaklar", "Altındağ", "Batıkent", "Eryaman", "İncek", "Oran", "Beştepe", "Bilkent", "Çayyolu", "Kızılay", "Tunalı Hilmi"],
        de: ["Ankara Zentrum", "Cankaya", "Kecioren", "Yenimahalle", "Mamak", "Etimesgut", "Sincan", "Golbasi", "Pursaklar", "Altindag", "Batikent", "Eryaman", "Incek", "Oran"],
        en: ["Ankara Center", "Cankaya", "Kecioren", "Yenimahalle", "Mamak", "Etimesgut", "Sincan", "Golbasi", "Pursaklar", "Altindag", "Batikent", "Eryaman", "Incek", "Oran"]
      },
      officeType: { tr: "Şube", de: "Niederlassung", en: "Branch", ru: "Филиал", uk: "Філія", ar: "فرع", hr: "Podružnica" }
    }
  };

  const installationServiceSchema = installationPages.includes(page) ? (() => {
    const instData = installationServiceData[page];
    if (!instData) return null;
    const lang = language as Language;
    const areas = instData.areas[lang] || instData.areas.tr || instData.areas.en;
    const cityName = page === "installation-antalya" ? "Antalya" : page === "installation-alanya" ? "Alanya" : "Ankara";

    const serviceNames: Record<string, Record<string, string>> = {
      solar: { tr: "Güneş Paneli Kurulumu", de: "Solaranlagen-Installation", en: "Solar Panel Installation", ru: "Установка солнечных панелей", uk: "Встановлення сонячних панелей", ar: "تركيب الألواح الشمسية", hr: "Instalacija solarnih panela" },
      heatPump: { tr: "Vaillant Isı Pompası Kurulumu", de: "Vaillant Wärmepumpe Installation", en: "Vaillant Heat Pump Installation", ru: "Установка теплового насоса Vaillant", uk: "Встановлення теплового насоса Vaillant", ar: "تركيب مضخة حرارة Vaillant", hr: "Instalacija toplinske pumpe Vaillant" },
      ac: { tr: "Samsung Klima Sistemi Kurulumu", de: "Samsung Klimaanlage Installation", en: "Samsung AC Installation", ru: "Установка кондиционера Samsung", uk: "Встановлення кондиціонера Samsung", ar: "تركيب مكيف Samsung", hr: "Instalacija Samsung klima uređaja" },
      battery: { tr: "Batarya Depolama Sistemi Kurulumu", de: "Batteriespeicher Installation", en: "Battery Storage Installation", ru: "Установка аккумуляторной системы", uk: "Встановлення акумуляторної системи", ar: "تركيب نظام تخزين البطارية", hr: "Instalacija sustava pohrane baterije" }
    };

    const areaServedPlaces = areas.map(area => ({
      "@type": "Place",
      "name": area,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": instData.geo.lat,
        "longitude": instData.geo.lng
      }
    }));

    const services = Object.keys(serviceNames).map((key) => ({
      "@type": "Service",
      "@id": `${pageUrl}#service-${key}`,
      "name": serviceNames[key][lang] || serviceNames[key].tr,
      "provider": { "@id": "https://089bayern.com/#organization" },
      "areaServed": [
        {
          "@type": "City",
          "name": cityName,
          "containedInPlace": { "@type": "Country", "name": "Türkiye" }
        },
        ...areaServedPlaces
      ],
      "serviceType": key === "solar" ? "Solar Energy Installation" : key === "heatPump" ? "Heat Pump Installation" : key === "ac" ? "Air Conditioning Installation" : "Battery Storage Installation",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "price": key === "solar" ? "8000" : key === "heatPump" ? "12000" : key === "ac" ? "3000" : "6000",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock"
      }
    }));

    return services;
  })() : null;

  const graphItems: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": "https://089bayern.com/#website",
      "url": "https://089bayern.com",
      "name": siteName,
      "description": language === "tr" ? "Antalya merkezli Alman kalitesi 4'ü 1 arada enerji sistemleri" : "German quality 4-in-1 energy systems based in Antalya",
      "publisher": { "@id": "https://089bayern.com/#organization" },
      "inLanguage": ["tr-TR", "de-DE", "en-US", "ru-RU", "uk-UA", "ar-SA", "hr-HR"]
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService", "Organization"],
      "@id": "https://089bayern.com/#organization",
      "name": language === "tr" ? "089 Bayern Enerji Sistemleri" : "089 Bayern Energiesysteme",
      "alternateName": ["089 Bayern", "089Bayern", "089 Bayern Enerji", "089 Bayern Energiesysteme"],
      "description": data.description,
      "url": "https://089bayern.com",
      "telephone": "+90-507-183-2036",
      "email": "info@089bayern.com",
      "image": "https://089bayern.com/og-image.jpg",
      "logo": "https://089bayern.com/logo.png",
      "foundingDate": "2020",
      "slogan": language === "tr" ? "Alman Mühendisliği ile %70 Enerji Tasarrufu" : "70% Energieeinsparung mit deutscher Ingenieursqualität",
      "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 10, "maxValue": 50 },
      "founder": founders,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Antalya Merkez",
        "addressLocality": "Antalya",
        "addressRegion": "Antalya",
        "postalCode": "07000",
        "addressCountry": {
          "@type": "Country",
          "name": "Türkiye",
          "identifier": "TR"
        }
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
      },
      "knowsLanguage": ["tr", "de", "en", "hr", "ru"],
      "review": [
        { "@type": "Review", "author": { "@type": "Person", "name": "Mehmet Y." }, "datePublished": "2025-11-15", "reviewBody": language === "tr" ? "Villamıza 4'ü 1 arada sistem kurdurduk. Alman kalitesi gerçekten fark yaratıyor. 6 ayda elektrik faturamız %70 düştü." : "We had the 4-in-1 system installed in our villa. German quality really makes a difference. Our electricity bill dropped 70% in 6 months.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "Klaus H." }, "datePublished": "2025-09-20", "reviewBody": language === "tr" ? "Almanya'dan Antalya'ya taşındık. 089 Bayern sayesinde Alman standartlarında enerji sistemi kurduk." : language === "de" ? "Wir sind von Deutschland nach Antalya gezogen. Dank 089 Bayern haben wir ein Energiesystem nach deutschen Standards." : "We moved from Germany to Antalya. Thanks to 089 Bayern, we set up an energy system to German standards.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "Ayse K." }, "datePublished": "2025-07-10", "reviewBody": language === "tr" ? "Kemer'deki villamız için Vaillant ısı pompası ve güneş paneli taktırdık. Kışın bile ısınma masrafımız neredeyse sıfır." : language === "de" ? "Für unsere Villa in Kemer haben wir eine Vaillant Wärmepumpe und Solaranlage installiert. Selbst im Winter fast null Heizkosten." : "For our villa in Kemer we had a Vaillant heat pump and solar panels installed. Even in winter, heating costs are nearly zero.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } }
      ],
      "sameAs": [
        "https://www.facebook.com/089bayern",
        "https://www.instagram.com/089bayern",
        "https://www.linkedin.com/company/089bayern"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://089bayern.com/#breadcrumb",
      "itemListElement": breadcrumbItems
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      "url": pageUrl,
      "name": title,
      "description": data.description,
      "datePublished": "2024-01-01",
      "dateModified": "2026-02-16",
      "copyrightYear": 2026,
      "copyrightHolder": { "@id": "https://089bayern.com/#organization" },
      "isPartOf": { "@id": "https://089bayern.com/#website" },
      "about": { "@id": "https://089bayern.com/#organization" },
      "breadcrumb": { "@id": "https://089bayern.com/#breadcrumb" },
      "inLanguage": inLanguage,
      "potentialAction": {
        "@type": "ReadAction",
        "target": [pageUrl]
      }
    }
  ];

  if (page === "ueber-uns" || page === "team") {
    founders.forEach(f => graphItems.push(f));
  }

  if (faqSchema) {
    graphItems.push(faqSchema);
  }

  if (currentProductSchema) {
    graphItems.push(currentProductSchema);
  }

  if (installationServiceSchema) {
    installationServiceSchema.forEach(s => graphItems.push(s));
  }

  if (installationPages.includes(page)) {
    graphItems.push({
      "@type": "HowTo",
      "@id": `${pageUrl}#howto`,
      "name": language === "tr" ? "4'ü 1 Arada Enerji Sistemi Kurulum Süreci" : language === "de" ? "4-in-1 Energiesystem Installationsprozess" : language === "ru" ? "Процесс установки энергосистемы 4-в-1" : language === "uk" ? "Процес встановлення енергосистеми 4-в-1" : language === "ar" ? "عملية تركيب نظام الطاقة 4 في 1" : language === "hr" ? "Proces instalacije 4-u-1 energetskog sustava" : "4-in-1 Energy System Installation Process",
      "description": language === "tr" ? "Villanız için enerji sistemi kurulum adımları" : language === "de" ? "Schritte der Energiesystem-Installation für Ihre Villa" : "Steps for energy system installation for your villa",
      "totalTime": "P5D",
      "estimatedCost": { "@type": "MonetaryAmount", "currency": "EUR", "value": "35000-50000" },
      "tool": [
        { "@type": "HowToTool", "name": language === "tr" ? "Güneş Panelleri (Tier-1)" : "Solar Panels (Tier-1)" },
        { "@type": "HowToTool", "name": "Vaillant aroTHERM plus" },
        { "@type": "HowToTool", "name": "Samsung WindFree" },
        { "@type": "HowToTool", "name": language === "tr" ? "LiFePO4 Batarya" : "LiFePO4 Battery" }
      ],
      "step": [
        { "@type": "HowToStep", "position": 1, "name": language === "tr" ? "Ücretsiz Keşif ve Analiz" : language === "de" ? "Kostenlose Beratung und Analyse" : "Free Consultation and Analysis", "text": language === "tr" ? "Uzman ekibimiz villanızı ziyaret eder, enerji ihtiyacınızı analiz eder ve kişiselleştirilmiş çözüm sunar." : language === "de" ? "Unser Expertenteam besucht Ihre Villa, analysiert Ihren Energiebedarf und bietet eine maßgeschneiderte Lösung." : "Our expert team visits your villa, analyzes energy needs and offers a personalized solution." },
        { "@type": "HowToStep", "position": 2, "name": language === "tr" ? "Sistem Tasarımı ve Teklif" : language === "de" ? "Systemdesign und Angebot" : "System Design and Quote", "text": language === "tr" ? "DIN standartlarına uygun sistem tasarımı, detaylı maliyet ve tasarruf hesabı." : language === "de" ? "Systemdesign nach DIN-Normen, detaillierte Kosten- und Einsparungsberechnung." : "System design to DIN standards, detailed cost and savings calculation." },
        { "@type": "HowToStep", "position": 3, "name": language === "tr" ? "Profesyonel Kurulum" : language === "de" ? "Professionelle Installation" : "Professional Installation", "text": language === "tr" ? "Sertifikalı teknisyenler tarafından 3-5 iş günü içinde kurulum tamamlanır." : language === "de" ? "Installation durch zertifizierte Techniker innerhalb von 3-5 Werktagen." : "Installation by certified technicians within 3-5 business days." },
        { "@type": "HowToStep", "position": 4, "name": language === "tr" ? "Test ve Devreye Alma" : language === "de" ? "Test und Inbetriebnahme" : "Testing and Commissioning", "text": language === "tr" ? "Sistem testi, optimizasyon ve müşteri eğitimi. 10 yıl garanti ile teslim." : language === "de" ? "Systemtest, Optimierung und Kundeneinweisung. Übergabe mit 10 Jahren Garantie." : "System testing, optimization and customer training. Handover with 10-year warranty." }
      ]
    });

    const installFaqs = [
      {
        q: language === "tr" ? "Kurulum ne kadar sürer?" : language === "de" ? "Wie lange dauert die Installation?" : "How long does installation take?",
        a: language === "tr" ? "4'ü 1 arada enerji sistemi kurulumu genellikle 3-5 iş günü sürer." : language === "de" ? "Die Installation des 4-in-1 Energiesystems dauert in der Regel 3-5 Werktage." : "The 4-in-1 energy system installation typically takes 3-5 business days."
      },
      {
        q: language === "tr" ? "Garanti süresi ne kadar?" : language === "de" ? "Wie lang ist die Garantiezeit?" : "What is the warranty period?",
        a: language === "tr" ? "Tüm sistemlerimiz 10 yıl garanti ile gelir. Güneş panelleri 25 yıl performans garantisi sunar." : language === "de" ? "Alle unsere Systeme kommen mit 10 Jahren Garantie. Solarpanels bieten 25 Jahre Leistungsgarantie." : "All our systems come with 10-year warranty. Solar panels offer 25-year performance guarantee."
      },
      {
        q: language === "tr" ? "Fiyat aralığı nedir?" : language === "de" ? "Was ist die Preisspanne?" : "What is the price range?",
        a: language === "tr" ? "200m² villa için ca. 35.000-50.000 EUR. Standart 6kWp: ca. 31.200 EUR, Orta 10kWp: ca. 41.600 EUR, Premium 12kWp: ca. 58.500 EUR." : language === "de" ? "Für eine 200m² Villa ca. 35.000-50.000 EUR. Standard 6kWp: ca. 31.200 EUR, Mittel 10kWp: ca. 41.600 EUR, Premium 12kWp: ca. 58.500 EUR." : "For a 200m² villa approx. 35,000-50,000 EUR. Standard 6kWp: ~31,200 EUR, Medium 10kWp: ~41,600 EUR, Premium 12kWp: ~58,500 EUR."
      }
    ];
    graphItems.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faqpage`,
      "mainEntity": installFaqs.map(fq => ({
        "@type": "Question",
        "name": fq.q,
        "acceptedAnswer": { "@type": "Answer", "text": fq.a }
      }))
    });
  }

  const ogImageMap: Record<string, string> = {
    home: "https://089bayern.com/images/hero-villa-solar.webp",
    systeme: "https://089bayern.com/images/hero-system.webp",
    vorteile: "https://089bayern.com/images/hero-benefits.webp",
    rechner: "https://089bayern.com/images/hero-calculator.webp",
    faq: "https://089bayern.com/images/hero-faq.webp",
    "ueber-uns": "https://089bayern.com/images/hero-about.webp",
    team: "https://089bayern.com/images/hero-about.webp",
    "installation-antalya": "https://089bayern.com/images/hero-antalya.webp",
    "installation-alanya": "https://089bayern.com/images/hero-alanya.webp",
    "installation-ankara": "https://089bayern.com/images/hero-ankara.webp",
    "gunes-paneli": "https://089bayern.com/images/hero-solar-panel.webp",
    "isi-pompasi": "https://089bayern.com/images/hero-heat-pump.webp",
    klima: "https://089bayern.com/images/hero-climate.webp",
    "enerji-depolama": "https://089bayern.com/images/hero-battery-storage.webp",
    standorte: "https://089bayern.com/images/hero-villa-solar.webp",
    legal: "https://089bayern.com/images/hero-villa-solar.webp"
  };
  const ogImage = ogImageMap[page] || "https://089bayern.com/images/hero-villa-solar.webp";

  const geoData = page === "installation-ankara"
    ? { region: "TR-06", placename: "Ankara, Türkiye", lat: "39.9334", lng: "32.8597" }
    : page === "installation-alanya"
    ? { region: "TR-07", placename: "Alanya, Türkiye", lat: "36.5437", lng: "31.9994" }
    : { region: "TR-07", placename: "Antalya, Türkiye", lat: "36.8969", lng: "30.7133" };

  const pagesWithSpeakable = ["home", "systeme", "vorteile", "gunes-paneli", "isi-pompasi", "klima", "enerji-depolama", "installation-antalya", "installation-alanya", "installation-ankara"];
  if (pagesWithSpeakable.includes(page)) {
    const webPageSchema = graphItems.find((item) => (item as Record<string, string>)["@type"] === "WebPage");
    if (webPageSchema) {
      (webPageSchema as Record<string, unknown>)["speakable"] = {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2"]
      };
    }
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": graphItems
  };

  return (
    <Helmet>
      <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />
      <title>{title}</title>
      <meta name="description" content={data.description} />
      
      <meta httpEquiv="content-language" content={inLanguage} />
      <meta name="content-language" content={inLanguage} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content="tr_TR" />
      <meta property="og:locale:alternate" content="de_DE" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="ru_RU" />
      <meta property="og:locale:alternate" content="uk_UA" />
      <meta property="og:locale:alternate" content="ar_SA" />
      <meta property="og:locale:alternate" content="hr_HR" />
      <meta property="og:country-name" content="TR" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={data.description.substring(0, 120)} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:url" content={pageUrl} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={data.description.substring(0, 120)} />
      
      <meta name="geo.region" content={geoData.region} />
      <meta name="geo.placename" content={geoData.placename} />
      <meta name="geo.position" content={`${geoData.lat};${geoData.lng}`} />
      <meta name="geo.country" content="TR" />
      <meta name="ICBM" content={`${geoData.lat}, ${geoData.lng}`} />
      <meta name="distribution" content="local" />
      <meta name="coverage" content="Turkey, Antalya, Alanya, Ankara" />
      <meta name="target" content="TR" />
      <meta name="audience" content="all" />
      
      <link rel="canonical" href={pageUrl} />
      <link rel="alternate" hrefLang="tr" href={`https://089bayern.com/${getPath("tr")}`} />
      <link rel="alternate" hrefLang="de" href={`https://089bayern.com/${getPath("de")}`} />
      <link rel="alternate" hrefLang="en" href={`https://089bayern.com/${getPath("en")}`} />
      <link rel="alternate" hrefLang="ru" href={`https://089bayern.com/${getPath("ru")}`} />
      <link rel="alternate" hrefLang="uk" href={`https://089bayern.com/${getPath("uk")}`} />
      <link rel="alternate" hrefLang="ar" href={`https://089bayern.com/${getPath("ar")}`} />
      <link rel="alternate" hrefLang="hr" href={`https://089bayern.com/${getPath("hr")}`} />
      <link rel="alternate" hrefLang="x-default" href={`https://089bayern.com/${getPath("tr")}`} />
      
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
