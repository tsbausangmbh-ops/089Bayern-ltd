type Language = "tr" | "de" | "en" | "ru" | "uk" | "ar" | "hr";
type PageType = "home" | "systeme" | "vorteile" | "rechner" | "faq" | "ueber-uns" | "team" | "legal" | "installation-antalya" | "installation-ankara" | "installation-alanya" | "standorte" | "gunes-paneli" | "isi-pompasi" | "klima" | "enerji-depolama";

interface UrlPaths {
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

const urlPaths: Record<Language, UrlPaths> = {
  tr: { system: "/sistem", benefits: "/avantajlar", calculator: "/hesaplayici", about: "/hakkimizda", faq: "/sss", locations: "/bolgeler", installationAntalya: "/kurulum-antalya", installationAlanya: "/kurulum-alanya", installationAnkara: "/kurulum-ankara", solarPanel: "/gunes-paneli", heatPump: "/isi-pompasi", airConditioning: "/klima", batteryStorage: "/enerji-depolama" },
  de: { system: "/systeme", benefits: "/vorteile", calculator: "/rechner", about: "/ueber-uns", faq: "/faq", locations: "/standorte", installationAntalya: "/installation-antalya", installationAlanya: "/installation-alanya", installationAnkara: "/installation-ankara", solarPanel: "/solaranlage", heatPump: "/waermepumpe", airConditioning: "/klimaanlage", batteryStorage: "/batteriespeicher" },
  en: { system: "/system", benefits: "/benefits", calculator: "/calculator", about: "/about", faq: "/faq", locations: "/locations", installationAntalya: "/installation-antalya", installationAlanya: "/installation-alanya", installationAnkara: "/installation-ankara", solarPanel: "/solar-panel", heatPump: "/heat-pump", airConditioning: "/air-conditioning", batteryStorage: "/battery-storage" },
  ru: { system: "/sistema", benefits: "/preimushchestva", calculator: "/kalkulyator", about: "/o-nas", faq: "/voprosy", locations: "/lokacii", installationAntalya: "/ustanovka-antalya", installationAlanya: "/ustanovka-alanya", installationAnkara: "/ustanovka-ankara", solarPanel: "/solnechnaya-panel", heatPump: "/teplovoy-nasos", airConditioning: "/konditsioner", batteryStorage: "/akkumulyator" },
  uk: { system: "/systema", benefits: "/perevagy", calculator: "/kalkulyator", about: "/pro-nas", faq: "/pytannya", locations: "/lokatsii", installationAntalya: "/vstanovlennya-antalya", installationAlanya: "/vstanovlennya-alanya", installationAnkara: "/vstanovlennya-ankara", solarPanel: "/sonyachna-panel", heatPump: "/teplovyy-nasos", airConditioning: "/kondytsioner", batteryStorage: "/akumulyator" },
  ar: { system: "/nizam", benefits: "/mazaya", calculator: "/hasba", about: "/hawlana", faq: "/asila", locations: "/mawaqie", installationAntalya: "/tarkib-antalya", installationAlanya: "/tarkib-alanya", installationAnkara: "/tarkib-ankara", solarPanel: "/lawha-shamsiya", heatPump: "/midkhkha-harara", airConditioning: "/takyif", batteryStorage: "/batariya" },
  hr: { system: "/sustav", benefits: "/prednosti", calculator: "/kalkulator", about: "/o-nama", faq: "/pitanja", locations: "/lokacije", installationAntalya: "/instalacija-antalya", installationAlanya: "/instalacija-alanya", installationAnkara: "/instalacija-ankara", solarPanel: "/solarni-panel", heatPump: "/toplinska-pumpa", airConditioning: "/klima-uredaj", batteryStorage: "/baterija" },
};

const pageToUrlKey: Record<string, keyof UrlPaths | null> = {
  home: null, systeme: "system", vorteile: "benefits", rechner: "calculator", faq: "faq",
  "ueber-uns": "about", team: "about", legal: null,
  "installation-antalya": "installationAntalya",
  "installation-alanya": "installationAlanya", "installation-ankara": "installationAnkara",
  standorte: "locations", "gunes-paneli": "solarPanel", "isi-pompasi": "heatPump",
  klima: "airConditioning", "enerji-depolama": "batteryStorage"
};

const seoData: Record<Language, Record<string, { title: string; description: string; keywords: string }>> = {
  tr: {
    home: { title: "Antalya Güneş Paneli Kurulumu & Vaillant Isı Pompası Fiyatları 2026 | 089 Bayern 4'ü 1 Arada Villa Enerji Sistemi", description: "Antalya, Alanya, Kemer, Belek, Side, Manavgat'ta güneş paneli, ısı pompası, klima ve enerji depolama. Alman mühendisliği ile %70 enerji tasarrufu. Vaillant & Samsung yetkili bayii. Ücretsiz keşif: +90 507 183 2036", keywords: "antalya villa güneş paneli kurulumu fiyatları 2026, alanya ısı pompası klima sistemi montajı" },
    systeme: { title: "4'ü 1 Arada Enerji Sistemi Antalya Villa | Güneş Paneli + Vaillant Isı Pompası + Samsung Klima + Batarya | 089 Bayern", description: "089 Bayern 4-in-1 German System: Photovoltaik, Wärmepompa, Samsung klima ve lityum batarya tek sistemde. Antalya, Alanya, Kemer'de kurulum. 10 yıl garanti, Alman DIN standartları.", keywords: "4 in 1 enerji sistemi güneş paneli ısı pompası klima batarya" },
    vorteile: { title: "Antalya Villa Güneş Enerjisi ile %70 Tasarruf | 10 Ay Ücretsiz Elektrik ve Isınma Avantajları | 089 Bayern", description: "Akdeniz'in 300+ güneşli günü ile yılda 10 ay ücretsiz elektrik ve ısınma. Antalya, Alanya, Side'da %70 enerji tasarrufu. 4-6 yıl geri ödeme süresi.", keywords: "antalya güneş enerjisi yıllık tasarruf miktarı hesaplama" },
    rechner: { title: "Güneş Paneli Fiyat Hesaplama Antalya Villa m² | Enerji Tasarruf Hesaplayıcı 2026 | 089 Bayern", description: "Antalya, Alanya, Kemer, Side için kişiselleştirilmiş enerji tasarrufu hesabı. Villa m² ve konuma göre güneş paneli, ısı pompası maliyeti ve tasarruf hesaplama.", keywords: "güneş paneli fiyat hesaplama aracı antalya villa m2" },
    faq: { title: "Güneş Paneli Kurulumu Sıkça Sorulan Sorular | Antalya Villa Isı Pompası Klima SSS | 089 Bayern", description: "Antalya'da güneş paneli kurulumu, ısı pompası bakımı, enerji depolama ve 089 Bayern 4-in-1 sistem hakkında en çok sorulan 20 soru ve uzman cevapları.", keywords: "güneş paneli kurulumu kaç gün sürer antalya villa" },
    "ueber-uns": { title: "089 Bayern Hakkımızda | Antalya Merkezli Alman-Türk Enerji Sistemi Uzmanları | Güneş Paneli Isı Pompası Kurulum Firması", description: "089 Bayern Türkiye: 2018'den beri Antalya merkezli Alman kalitesi enerji sistemleri. Antalya, Alanya, Akdeniz bölgesinde 500+ mutlu aile, 10 yıl garanti.", keywords: "089 bayern türkiye antalya merkezli enerji şirketi hakkında" },
    team: { title: "089 Bayern Ekibimiz | Mustafa Sakar & Dalibor Bakmaz | Antalya Güneş Enerjisi Uzman Kadrosu", description: "089 Bayern ekibi: Dalibor Bakmaz ve Mustafa Sakar liderliğinde Alman mühendislik kalitesi. Antalya, Alanya, Muğla'da profesyonel enerji danışmanlığı.", keywords: "089 bayern ekibi enerji danışmanları antalya alanya" },
    legal: { title: "Yasal Bilgiler | 089 Bayern Enerji Sistemleri", description: "089 Bayern yasal politikalar: KVKK, gizlilik politikası, çerez politikası, kullanım şartları ve mesafeli satış sözleşmesi.", keywords: "089 bayern kvkk kişisel verilerin korunması politikası" },
    "installation-antalya": { title: "Güneş Paneli Kurulumu Antalya Merkez | Vaillant Isı Pompası Samsung Klima Montajı Villa Fiyatları | 089 Bayern", description: "Antalya, Kemer, Belek, Side, Alanya'da profesyonel 4'ü 1 arada enerji sistemi kurulumu. Güneş paneli, Vaillant ısı pompası, Samsung klima ve batarya depolama. Alman kalitesi, 10 yıl garanti.", keywords: "antalya kemer belek side güneş paneli kurulum hizmeti" },
    "installation-ankara": { title: "Güneş Paneli Kurulumu Ankara | Vaillant Isı Pompası Samsung Klima Montajı Villa Çankaya Keçiören | 089 Bayern", description: "Ankara ve çevresinde profesyonel 4'ü 1 arada enerji sistemi kurulumu. Güneş paneli, Vaillant ısı pompası, Samsung klima ve batarya depolama. Alman kalitesi, 10 yıl garanti.", keywords: "ankara güneş paneli kurulumu çankaya keçiören yenimahalle" },
    "installation-alanya": { title: "Güneş Paneli Kurulumu Alanya | Vaillant Isı Pompası Samsung Klima Montajı Villa Mahmutlar Kestel | 089 Bayern Şube", description: "Alanya ve çevresinde profesyonel 4'ü 1 arada enerji sistemi kurulumu. 089 Bayern Alanya şubesi. Güneş paneli, Vaillant ısı pompası, Samsung klima ve batarya depolama.", keywords: "alanya mahmutlar kestel oba güneş paneli kurulum hizmeti" },
    standorte: { title: "089 Bayern Hizmet Bölgeleri | Antalya Alanya Muğla İzmir Güneş Paneli Kurulum Noktaları | Türkiye", description: "089 Bayern enerji sistemleri kurulum bölgeleri: Antalya, Alanya, Muğla, İzmir, Split, Dalmaçya. Akdeniz ve Ege'de güneş paneli, ısı pompası, klima kurulumu.", keywords: "089 bayern hizmet bölgeleri türkiye" },
    "gunes-paneli": { title: "Villa Çatısı Güneş Paneli Kurulumu Fiyatları 2026 Antalya | 6-12 kWp Solar Panel Montajı | 089 Bayern", description: "Antalya, Alanya, Kemer, Side'da villa çatısına profesyonel güneş paneli kurulumu. 6-12 kWp photovoltaik sistemler, tier-1 paneller, Alman kalitesi montaj. 300+ güneşli gün ile %70 elektrik tasarrufu.", keywords: "güneş paneli kurulumu antalya villa çatısı fiyatları" },
    "isi-pompasi": { title: "Vaillant Isı Pompası Kurulumu Fiyatları Antalya Villa | Hava Kaynaklı Isıtma Soğutma COP 5.0 | 089 Bayern", description: "Antalya ve Akdeniz bölgesinde Vaillant ısı pompası kurulumu. Hava kaynaklı ısı pompası ile kışın ısıtma yazın soğutma. COP 5.0 verimlilik, %60 enerji tasarrufu.", keywords: "vaillant ısı pompası kurulumu antalya villa fiyatları" },
    klima: { title: "Samsung WindFree Klima Kurulumu Fiyatları Antalya Villa | Sessiz Enerji Verimli Multi-Split Sistem | 089 Bayern", description: "Antalya ve Akdeniz villalarında Samsung WindFree klima sistemi kurulumu. Sessiz ve enerji verimli soğutma-ısıtma. Multi-split sistem, akıllı ev entegrasyonu.", keywords: "samsung klima kurulumu antalya villa windfree sistemi" },
    "enerji-depolama": { title: "Lityum İyon Batarya Depolama Sistemi Kurulumu Antalya Villa | 10-15 kWh Güneş Enerjisi Depolama | 089 Bayern", description: "Antalya ve Akdeniz bölgesinde lityum iyon enerji depolama batarya sistemi kurulumu. Güneş enerjisi ile şarj, gece kullanım. 10-15 kWh kapasite, 6000+ şarj döngüsü.", keywords: "enerji depolama batarya sistemi antalya villa kurulumu" }
  },
  de: {
    home: { title: "089 Bayern | Solaranlage & Wärmepumpe Antalya | Deutsches 4-in-1 System Türkei", description: "Solaranlage, Wärmepumpe, Klimaanlage und Stromspeicher in Antalya, Alanya, Kemer, Belek, Side, Manavgat. Deutsche Ingenieursqualität mit bis zu 70% Energieeinsparung.", keywords: "solaranlage villa antalya installation kosten 2026" },
    systeme: { title: "4-in-1 Deutsches Energiesystem | Solar + Wärmepumpe + Klima + Batterie | 089 Bayern", description: "089 Bayern 4-in-1 German System: Photovoltaik, Wärmepumpe, Samsung Klimaanlage und Lithium-Batterie in einem System. Installation in Antalya, Alanya, Kemer.", keywords: "4 in 1 energiesystem solar wärmepumpe klima batterie" },
    vorteile: { title: "10 Monate Kostenlose Energie | Vorteile Solaranlage Antalya | 089 Bayern", description: "Mit 300+ Sonnentagen am Mittelmeer 10 Monate kostenloser Strom und Heizung. Bis zu 70% Energieeinsparung in Antalya, Alanya, Side.", keywords: "energieeinsparung 70 prozent villa antalya mittelmeer" },
    rechner: { title: "Einsparungsrechner | Solaranlage Kosten Antalya | 089 Bayern", description: "Personalisierte Energieeinsparungsberechnung für Antalya, Alanya, Kemer, Side. Solaranlage und Wärmepumpe Kosten nach Villa m² und Standort.", keywords: "solaranlage kosten rechner villa qm antalya alanya" },
    faq: { title: "Häufige Fragen | Solaranlage & Wärmepumpe | 089 Bayern Antalya", description: "Die 20 häufigsten Fragen zu Solaranlagen, Wärmepumpen, Energiespeicher und dem 089 Bayern 4-in-1 System in Antalya.", keywords: "solaranlage installation dauer antalya villa fragen" },
    "ueber-uns": { title: "Über Uns | Deutsche Energieexperten Standort Türkei | 089 Bayern Antalya", description: "089 Bayern Türkei: Seit 2018 Standort Antalya. Deutsche Qualität für Antalya, Alanya und die Mittelmeerregion. 500+ zufriedene Familien.", keywords: "089 bayern türkei standort antalya energieunternehmen" },
    team: { title: "Unser Team | Deutsch-Türkische Energieexperten | 089 Bayern", description: "Das 089 Bayern Team: Unter der Leitung von Dalibor Bakmaz und Mustafa Sakar. Deutsche Ingenieursqualität in Antalya, Alanya, Muğla.", keywords: "089 bayern team energieberater antalya alanya" },
    legal: { title: "Rechtliche Informationen | 089 Bayern Energiesysteme", description: "089 Bayern rechtliche Richtlinien: Datenschutz, Cookie-Richtlinie, AGB und Fernabsatzvertrag.", keywords: "089 bayern datenschutz kvkk personendaten schutz" },
    "installation-antalya": { title: "4-in-1 Energiesystem-Installation Antalya | Solaranlage & Wärmepumpe | 089 Bayern", description: "Professionelle 4-in-1 Energiesystem-Installation in Antalya, Kemer, Belek, Side, Alanya. Solaranlage, Vaillant Wärmepumpe, Samsung Klimaanlage und Batteriespeicher.", keywords: "antalya kemer belek side solaranlage installation" },
    "installation-ankara": { title: "4-in-1 Energiesystem-Installation Ankara | Solaranlage & Wärmepumpe | 089 Bayern", description: "Professionelle 4-in-1 Energiesystem-Installation in Ankara und Umgebung. Deutsche Qualität, 10 Jahre Garantie. Çankaya, Keçiören, Yenimahalle.", keywords: "ankara solaranlage installation cankaya kecioren villa" },
    "installation-alanya": { title: "4-in-1 Energiesystem-Installation Alanya | Solaranlage & Wärmepumpe | 089 Bayern Niederlassung", description: "Professionelle 4-in-1 Energiesystem-Installation in Alanya und Umgebung. 089 Bayern Niederlassung Alanya. Mahmutlar, Kestel, Oba.", keywords: "alanya mahmutlar kestel oba solaranlage installation" },
    standorte: { title: "Unsere Serviceregionen | Türkei, Kroatien, Griechenland | 089 Bayern", description: "089 Bayern Energiesystem-Installationsregionen: Antalya, Alanya, Muğla, Izmir, Split, Dalmatien.", keywords: "089 bayern serviceregionen türkei kroatien" },
    "gunes-paneli": { title: "Solaranlage Installation Antalya | Villa Dach Solar Panel Montage | 089 Bayern", description: "Professionelle Solaranlage Installation auf Villadächern in Antalya, Alanya, Kemer, Side. 6-12 kWp Photovoltaik Systeme, Tier-1 Panels.", keywords: "solaranlage installation antalya villa dach preise" },
    "isi-pompasi": { title: "Vaillant Wärmepumpe Installation Antalya | Villa Heizung Kühlung | 089 Bayern", description: "Vaillant Wärmepumpe Installation in Antalya und der Mittelmeerregion. COP 5.0 Effizienz, 60% Energieeinsparung.", keywords: "vaillant wärmepumpe installation antalya villa preise" },
    klima: { title: "Samsung Klimaanlage Installation Antalya | WindFree Klima Villa | 089 Bayern", description: "Samsung WindFree Klimaanlage Installation in Antalya und Mittelmeervillen. Leise und energieeffiziente Kühlung-Heizung.", keywords: "samsung klimaanlage installation antalya villa" },
    "enerji-depolama": { title: "Batteriespeicher System Antalya | Lithium-Ionen Speicher Villa | 089 Bayern", description: "Lithium-Ionen Batteriespeicher System Installation in Antalya und der Mittelmeerregion. 10-15 kWh Kapazität, 6000+ Ladezyklen.", keywords: "batteriespeicher system antalya villa installation" }
  },
  en: {
    home: { title: "089 Bayern | Solar Panel & Heat Pump Antalya | German 4-in-1 Energy System Turkey", description: "Solar panels, heat pumps, air conditioning and energy storage in Antalya, Alanya, Kemer, Belek, Side, Manavgat. German engineering with up to 70% energy savings.", keywords: "antalya villa solar panel installation prices 2026" },
    systeme: { title: "4-in-1 German Energy System | Solar + Heat Pump + AC + Battery | 089 Bayern", description: "089 Bayern 4-in-1 German System: Photovoltaics, heat pump, Samsung AC and lithium battery in one system. Installation in Antalya, Alanya, Kemer.", keywords: "4 in 1 energy system solar heat pump ac battery" },
    vorteile: { title: "70% Energy Savings | Benefits of Solar Energy Antalya | 089 Bayern", description: "With 300+ sunny days in the Mediterranean, enjoy 10 months of free electricity and heating. Up to 70% energy savings in Antalya, Alanya, Side.", keywords: "antalya solar energy annual savings calculation" },
    rechner: { title: "Energy Savings Calculator | Solar Panel Cost Antalya | 089 Bayern", description: "Personalized energy savings calculation for Antalya, Alanya, Kemer, Side. Solar panel and heat pump costs by villa size and location.", keywords: "solar panel cost calculator antalya villa" },
    faq: { title: "FAQ | Solar Panel & Heat Pump Questions | 089 Bayern Antalya", description: "The 20 most frequently asked questions about solar panels, heat pumps, energy storage and the 089 Bayern 4-in-1 system in Antalya.", keywords: "solar panel installation how long antalya villa" },
    "ueber-uns": { title: "About Us | German Energy Experts in Turkey | 089 Bayern Antalya", description: "089 Bayern Turkey: Since 2018, based in Antalya. German quality for Antalya, Alanya and the Mediterranean region. 500+ happy families.", keywords: "089 bayern turkey antalya energy company about" },
    team: { title: "Our Team | German-Turkish Energy Experts | 089 Bayern", description: "The 089 Bayern team: Led by Dalibor Bakmaz and Mustafa Sakar. German engineering quality in Antalya, Alanya, Mugla.", keywords: "089 bayern team energy consultants antalya" },
    legal: { title: "Legal Information | 089 Bayern Energy Systems", description: "089 Bayern legal policies: Privacy policy, cookie policy, terms of use and distance sales contract.", keywords: "089 bayern privacy policy terms of use" },
    "installation-antalya": { title: "4-in-1 Energy System Installation Antalya | Solar & Heat Pump | 089 Bayern", description: "Professional 4-in-1 energy system installation in Antalya, Kemer, Belek, Side, Alanya. Solar panels, Vaillant heat pump, Samsung AC and battery storage.", keywords: "antalya kemer belek side solar panel installation" },
    "installation-ankara": { title: "4-in-1 Energy System Installation Ankara | Solar & Heat Pump | 089 Bayern", description: "Professional 4-in-1 energy system installation in Ankara and surroundings. German quality, 10-year warranty.", keywords: "ankara solar panel installation" },
    "installation-alanya": { title: "4-in-1 Energy System Installation Alanya | Solar & Heat Pump | 089 Bayern Branch", description: "Professional 4-in-1 energy system installation in Alanya and surroundings. 089 Bayern Alanya branch.", keywords: "alanya solar panel installation mahmutlar kestel" },
    standorte: { title: "Our Service Regions | Turkey, Croatia, Greece | 089 Bayern", description: "089 Bayern energy system installation regions: Antalya, Alanya, Mugla, Izmir, Split, Dalmatia.", keywords: "089 bayern service regions turkey croatia" },
    "gunes-paneli": { title: "Solar Panel Installation Antalya | Villa Rooftop Solar System | 089 Bayern", description: "Professional solar panel installation on villa rooftops in Antalya, Alanya, Kemer, Side. 6-12 kWp photovoltaic systems.", keywords: "solar panel installation antalya villa rooftop" },
    "isi-pompasi": { title: "Vaillant Heat Pump Installation Antalya | Villa Heating Cooling | 089 Bayern", description: "Vaillant heat pump installation in Antalya and the Mediterranean region. COP 5.0 efficiency, 60% energy savings.", keywords: "vaillant heat pump installation antalya villa" },
    klima: { title: "Samsung Air Conditioning Installation Antalya | WindFree AC Villa | 089 Bayern", description: "Samsung WindFree AC installation in Antalya Mediterranean villas. Silent and energy-efficient cooling-heating.", keywords: "samsung ac installation antalya villa windfree" },
    "enerji-depolama": { title: "Battery Storage System Antalya | Lithium-Ion Villa Storage | 089 Bayern", description: "Lithium-ion battery storage system installation in Antalya and Mediterranean region. 10-15 kWh capacity, 6000+ charge cycles.", keywords: "battery storage system antalya villa installation" }
  },
  ru: {
    home: { title: "089 Bayern | Солнечные панели и тепловой насос Анталья | Немецкая система 4-в-1 Турция", description: "Солнечные панели, тепловые насосы, кондиционеры и накопители энергии в Анталье, Алании, Кемере.", keywords: "солнечные панели анталья установка" },
    systeme: { title: "Энергосистема 4-в-1 | Солнце + Тепловой насос + Кондиционер + Батарея | 089 Bayern", description: "089 Bayern система 4-в-1: фотоэлектрика, тепловой насос, Samsung кондиционер и литиевая батарея.", keywords: "4 в 1 энергосистема солнечная панель" },
    vorteile: { title: "70% экономия энергии | Преимущества солнечной энергии Анталья | 089 Bayern", description: "300+ солнечных дней в Средиземноморье. До 70% экономии энергии.", keywords: "анталья солнечная энергия экономия" },
    rechner: { title: "Калькулятор экономии | Стоимость солнечных панелей Анталья | 089 Bayern", description: "Расчёт экономии энергии для Антальи, Алании, Кемера.", keywords: "калькулятор стоимости солнечных панелей" },
    faq: { title: "Часто задаваемые вопросы | Солнечные панели Анталья | 089 Bayern", description: "20 самых частых вопросов о солнечных панелях и системе 4-в-1.", keywords: "вопросы солнечные панели анталья" },
    "ueber-uns": { title: "О нас | Немецкие энергоэксперты в Турции | 089 Bayern", description: "089 Bayern Турция: с 2018 года в Анталье. 500+ довольных семей.", keywords: "089 bayern турция анталья" },
    team: { title: "Наша команда | 089 Bayern", description: "Команда 089 Bayern: Далибор Бакмаз и Мустафа Сакар.", keywords: "089 bayern команда" },
    legal: { title: "Правовая информация | 089 Bayern", description: "Политика конфиденциальности и условия использования.", keywords: "089 bayern правовая информация" },
    "installation-antalya": { title: "Установка энергосистемы 4-в-1 Анталья | 089 Bayern", description: "Профессиональная установка в Анталье.", keywords: "анталья установка солнечных панелей" },
    "installation-ankara": { title: "Установка энергосистемы 4-в-1 Анкара | 089 Bayern", description: "Профессиональная установка в Анкаре.", keywords: "анкара установка солнечных панелей" },
    "installation-alanya": { title: "Установка энергосистемы 4-в-1 Алания | 089 Bayern Филиал", description: "Профессиональная установка в Алании.", keywords: "алания установка солнечных панелей" },
    standorte: { title: "Регионы обслуживания | 089 Bayern", description: "Регионы установки: Анталья, Алания, Мугла, Измир.", keywords: "089 bayern регионы обслуживания" },
    "gunes-paneli": { title: "Установка солнечных панелей Анталья | 089 Bayern", description: "Профессиональная установка солнечных панелей на виллах.", keywords: "солнечные панели анталья установка" },
    "isi-pompasi": { title: "Установка теплового насоса Vaillant Анталья | 089 Bayern", description: "Установка теплового насоса Vaillant.", keywords: "vaillant тепловой насос анталья" },
    klima: { title: "Установка кондиционера Samsung Анталья | 089 Bayern", description: "Установка Samsung WindFree кондиционера.", keywords: "samsung кондиционер анталья" },
    "enerji-depolama": { title: "Система накопления энергии Анталья | 089 Bayern", description: "Литий-ионная система накопления энергии.", keywords: "аккумулятор система анталья" }
  },
  uk: {
    home: { title: "089 Bayern | Сонячні панелі та тепловий насос Анталія | Німецька система 4-в-1 Туреччина", description: "Сонячні панелі, теплові насоси, кондиціонери та накопичувачі енергії в Анталії.", keywords: "сонячні панелі анталія встановлення" },
    systeme: { title: "Енергосистема 4-в-1 | 089 Bayern", description: "Система 4-в-1: фотоелектрика, тепловий насос, Samsung кондиціонер та батарея.", keywords: "4 в 1 енергосистема" },
    vorteile: { title: "70% економія енергії | Переваги | 089 Bayern", description: "300+ сонячних днів. До 70% економії.", keywords: "сонячна енергія економія" },
    rechner: { title: "Калькулятор економії | 089 Bayern", description: "Розрахунок економії для Анталії.", keywords: "калькулятор сонячних панелей" },
    faq: { title: "Питання та відповіді | 089 Bayern", description: "Часті питання про сонячні панелі.", keywords: "питання сонячні панелі" },
    "ueber-uns": { title: "Про нас | 089 Bayern", description: "089 Bayern Туреччина з 2018 року.", keywords: "089 bayern туреччина" },
    team: { title: "Наша команда | 089 Bayern", description: "Команда 089 Bayern.", keywords: "089 bayern команда" },
    legal: { title: "Правова інформація | 089 Bayern", description: "Політика конфіденційності.", keywords: "089 bayern правова" },
    "installation-antalya": { title: "Встановлення 4-в-1 Анталія | 089 Bayern", description: "Професійне встановлення в Анталії.", keywords: "анталія встановлення" },
    "installation-ankara": { title: "Встановлення 4-в-1 Анкара | 089 Bayern", description: "Професійне встановлення в Анкарі.", keywords: "анкара встановлення" },
    "installation-alanya": { title: "Встановлення 4-в-1 Аланія | 089 Bayern", description: "Професійне встановлення в Аланії.", keywords: "аланія встановлення" },
    standorte: { title: "Регіони обслуговування | 089 Bayern", description: "Регіони встановлення.", keywords: "089 bayern регіони" },
    "gunes-paneli": { title: "Сонячні панелі Анталія | 089 Bayern", description: "Встановлення сонячних панелей.", keywords: "сонячні панелі анталія" },
    "isi-pompasi": { title: "Тепловий насос Vaillant Анталія | 089 Bayern", description: "Встановлення теплового насоса.", keywords: "vaillant тепловий насос" },
    klima: { title: "Кондиціонер Samsung Анталія | 089 Bayern", description: "Встановлення Samsung WindFree.", keywords: "samsung кондиціонер" },
    "enerji-depolama": { title: "Накопичення енергії Анталія | 089 Bayern", description: "Літій-іонна система.", keywords: "акумулятор анталія" }
  },
  ar: {
    home: { title: "089 Bayern | ألواح شمسية ومضخة حرارة أنطاليا | نظام ألماني 4 في 1 تركيا", description: "ألواح شمسية، مضخات حرارة، تكييف وتخزين طاقة في أنطاليا. جودة ألمانية مع توفير 70%.", keywords: "ألواح شمسية أنطاليا تركيب" },
    systeme: { title: "نظام الطاقة 4 في 1 | 089 Bayern", description: "نظام 4 في 1: طاقة شمسية، مضخة حرارة، مكيف سامسونج وبطارية.", keywords: "نظام 4 في 1 طاقة" },
    vorteile: { title: "توفير 70% في الطاقة | المزايا | 089 Bayern", description: "300+ يوم مشمس. توفير حتى 70%.", keywords: "توفير طاقة شمسية" },
    rechner: { title: "حاسبة التوفير | 089 Bayern", description: "حساب توفير الطاقة لأنطاليا.", keywords: "حاسبة ألواح شمسية" },
    faq: { title: "أسئلة شائعة | 089 Bayern", description: "أكثر الأسئلة شيوعاً عن الألواح الشمسية.", keywords: "أسئلة ألواح شمسية" },
    "ueber-uns": { title: "عنا | 089 Bayern", description: "089 Bayern تركيا منذ 2018.", keywords: "089 bayern تركيا" },
    team: { title: "فريقنا | 089 Bayern", description: "فريق 089 Bayern.", keywords: "089 bayern فريق" },
    legal: { title: "معلومات قانونية | 089 Bayern", description: "سياسة الخصوصية والشروط.", keywords: "089 bayern قانوني" },
    "installation-antalya": { title: "تركيب نظام 4 في 1 أنطاليا | 089 Bayern", description: "تركيب احترافي في أنطاليا.", keywords: "أنطاليا تركيب" },
    "installation-ankara": { title: "تركيب نظام 4 في 1 أنقرة | 089 Bayern", description: "تركيب احترافي في أنقرة.", keywords: "أنقرة تركيب" },
    "installation-alanya": { title: "تركيب نظام 4 في 1 ألانيا | 089 Bayern", description: "تركيب احترافي في ألانيا.", keywords: "ألانيا تركيب" },
    standorte: { title: "مناطق الخدمة | 089 Bayern", description: "مناطق التركيب.", keywords: "089 bayern مناطق" },
    "gunes-paneli": { title: "ألواح شمسية أنطاليا | 089 Bayern", description: "تركيب ألواح شمسية.", keywords: "ألواح شمسية أنطاليا" },
    "isi-pompasi": { title: "مضخة حرارة Vaillant أنطاليا | 089 Bayern", description: "تركيب مضخة حرارة Vaillant.", keywords: "vaillant مضخة حرارة" },
    klima: { title: "مكيف Samsung أنطاليا | 089 Bayern", description: "تركيب Samsung WindFree.", keywords: "samsung مكيف" },
    "enerji-depolama": { title: "تخزين الطاقة أنطاليا | 089 Bayern", description: "نظام بطارية ليثيوم أيون.", keywords: "بطارية أنطاليا" }
  },
  hr: {
    home: { title: "089 Bayern | Solarni paneli i toplinska pumpa Antalya | Njemački 4-u-1 sustav Turska", description: "Solarni paneli, toplinske pumpe, klima uređaji i pohrana energije u Antalyi. Njemačka kvaliteta s do 70% uštede.", keywords: "solarni paneli antalya instalacija" },
    systeme: { title: "Energetski sustav 4-u-1 | 089 Bayern", description: "Sustav 4-u-1: fotonapon, toplinska pumpa, Samsung klima i baterija.", keywords: "4 u 1 energetski sustav" },
    vorteile: { title: "70% ušteda energije | Prednosti | 089 Bayern", description: "300+ sunčanih dana. Do 70% uštede.", keywords: "solarna energija ušteda" },
    rechner: { title: "Kalkulator uštede | 089 Bayern", description: "Izračun uštede energije za Antalyu.", keywords: "kalkulator solarnih panela" },
    faq: { title: "Česta pitanja | 089 Bayern", description: "Najčešća pitanja o solarnim panelima.", keywords: "pitanja solarni paneli" },
    "ueber-uns": { title: "O nama | 089 Bayern", description: "089 Bayern Turska od 2018.", keywords: "089 bayern turska" },
    team: { title: "Naš tim | 089 Bayern", description: "Tim 089 Bayern.", keywords: "089 bayern tim" },
    legal: { title: "Pravne informacije | 089 Bayern", description: "Politika privatnosti i uvjeti.", keywords: "089 bayern pravno" },
    "installation-antalya": { title: "Instalacija 4-u-1 Antalya | 089 Bayern", description: "Profesionalna instalacija u Antalyi.", keywords: "antalya instalacija" },
    "installation-ankara": { title: "Instalacija 4-u-1 Ankara | 089 Bayern", description: "Profesionalna instalacija u Ankari.", keywords: "ankara instalacija" },
    "installation-alanya": { title: "Instalacija 4-u-1 Alanya | 089 Bayern Podružnica", description: "Profesionalna instalacija u Alanyi.", keywords: "alanya instalacija" },
    standorte: { title: "Područja usluge | 089 Bayern", description: "Područja instalacije.", keywords: "089 bayern područja" },
    "gunes-paneli": { title: "Solarni paneli Antalya | 089 Bayern", description: "Instalacija solarnih panela.", keywords: "solarni paneli antalya" },
    "isi-pompasi": { title: "Toplinska pumpa Vaillant Antalya | 089 Bayern", description: "Instalacija toplinske pumpe Vaillant.", keywords: "vaillant toplinska pumpa" },
    klima: { title: "Klima uređaj Samsung Antalya | 089 Bayern", description: "Instalacija Samsung WindFree.", keywords: "samsung klima" },
    "enerji-depolama": { title: "Pohrana energije Antalya | 089 Bayern", description: "Litij-ionski sustav baterije.", keywords: "baterija antalya" }
  }
};

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

const legalPages = ["/kvkk", "/gizlilik", "/cerez-politikasi", "/sartlar", "/mesafeli-satis", "/on-bilgilendirme"];

let routeMap: Map<string, { page: PageType; language: Language }> | null = null;

function buildRouteMap(): Map<string, { page: PageType; language: Language }> {
  const map = new Map<string, { page: PageType; language: Language }>();
  map.set("/", { page: "home", language: "tr" });

  const languages: Language[] = ["tr", "de", "en", "ru", "uk", "ar", "hr"];
  const urlKeyToPage: Record<keyof UrlPaths, PageType> = {
    system: "systeme", benefits: "vorteile", calculator: "rechner", about: "ueber-uns",
    faq: "faq", locations: "standorte", installationAntalya: "installation-antalya",
    installationAlanya: "installation-alanya", installationAnkara: "installation-ankara",
    solarPanel: "gunes-paneli", heatPump: "isi-pompasi", airConditioning: "klima",
    batteryStorage: "enerji-depolama"
  };

  for (const lang of languages) {
    const paths = urlPaths[lang];
    for (const [urlKey, path] of Object.entries(paths)) {
      const pageType = urlKeyToPage[urlKey as keyof UrlPaths];
      if (pageType) {
        map.set(path, { page: pageType, language: lang });
      }
    }
  }

  for (const lp of legalPages) {
    map.set(lp, { page: "legal", language: "tr" });
  }

  return map;
}

export function resolveRoute(urlPath: string): { page: PageType; language: Language } | null {
  if (!routeMap) {
    routeMap = buildRouteMap();
  }
  const cleanPath = urlPath.split("?")[0].split("#")[0];
  return routeMap.get(cleanPath) || null;
}

function getPath(page: PageType, lang: Language): string {
  if (page === "home") return "";
  const urlKey = pageToUrlKey[page];
  if (!urlKey) return page;
  return urlPaths[lang]?.[urlKey]?.slice(1) || page;
}

function buildJsonLd(page: PageType, language: Language, data: { title: string; description: string }): string {
  const siteName = language === "tr" ? "089 Bayern Enerji Sistemleri" : language === "de" ? "089 Bayern Energiesysteme" : "089 Bayern Energy Systems";
  const inLanguage = language === "tr" ? "tr-TR" : language === "de" ? "de-DE" : language === "ru" ? "ru-RU" : language === "uk" ? "uk-UA" : language === "ar" ? "ar-SA" : language === "hr" ? "hr-HR" : "en-US";
  const currentPath = getPath(page, language);
  const pageUrl = `https://089bayern.com/${currentPath}`;

  const pageNames: Record<string, Record<string, string>> = {
    home: { tr: "Ana Sayfa", de: "Startseite", en: "Home" },
    systeme: { tr: "4'ü 1 Arada Sistem", de: "4-in-1 System", en: "4-in-1 System" },
    vorteile: { tr: "Avantajlar", de: "Vorteile", en: "Benefits" },
    rechner: { tr: "Tasarruf Hesaplayıcı", de: "Einsparungsrechner", en: "Savings Calculator" },
    faq: { tr: "Sıkça Sorulan Sorular", de: "Häufige Fragen", en: "FAQ" },
    "ueber-uns": { tr: "Hakkımızda", de: "Über Uns", en: "About Us" },
    "installation-antalya": { tr: "Kurulum Antalya", de: "Installation Antalya", en: "Installation Antalya" },
    "installation-ankara": { tr: "Kurulum Ankara", de: "Installation Ankara", en: "Installation Ankara" },
    "installation-alanya": { tr: "Kurulum Alanya", de: "Installation Alanya", en: "Installation Alanya" },
    "gunes-paneli": { tr: "Güneş Paneli", de: "Solaranlage", en: "Solar Panel" },
    "isi-pompasi": { tr: "Isı Pompası", de: "Wärmepumpe", en: "Heat Pump" },
    klima: { tr: "Klima Sistemi", de: "Klimaanlage", en: "Air Conditioning" },
    "enerji-depolama": { tr: "Enerji Depolama", de: "Batteriespeicher", en: "Battery Storage" }
  };

  const breadcrumbItems: any[] = [
    { "@type": "ListItem", "position": 1, "name": pageNames.home[language] || "Ana Sayfa", "item": "https://089bayern.com" }
  ];
  if (page !== "home") {
    breadcrumbItems.push({
      "@type": "ListItem", "position": 2,
      "name": pageNames[page]?.[language] || pageNames[page]?.tr || data.title,
      "item": pageUrl
    });
  }

  const graphItems: any[] = [
    {
      "@type": "WebSite", "@id": "https://089bayern.com/#website",
      "url": "https://089bayern.com", "name": siteName,
      "publisher": { "@id": "https://089bayern.com/#organization" },
      "inLanguage": ["tr-TR", "de-DE", "en-US", "ru-RU", "uk-UA", "ar-SA", "hr-HR"]
    },
    {
      "@type": ["LocalBusiness", "Organization"],
      "@id": "https://089bayern.com/#organization",
      "name": language === "tr" ? "089 Bayern Enerji Sistemleri" : "089 Bayern Energiesysteme",
      "alternateName": ["089 Bayern", "089Bayern"],
      "description": data.description,
      "url": "https://089bayern.com",
      "telephone": "+90-507-183-2036",
      "email": "info@089bayern.com",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress", "streetAddress": "Antalya Merkez",
        "addressLocality": "Antalya", "addressRegion": "Antalya",
        "postalCode": "07000",
        "addressCountry": { "@type": "Country", "name": "Türkiye", "identifier": "TR" }
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 36.8969, "longitude": 30.7133 },
      "areaServed": [
        { "@type": "City", "name": "Antalya" }, { "@type": "City", "name": "Alanya" },
        { "@type": "City", "name": "Kemer" }, { "@type": "City", "name": "Ankara" }
      ],
      "priceRange": "€€€",
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "worstRating": "1", "ratingCount": "500", "reviewCount": "487" },
      "sameAs": ["https://www.facebook.com/089bayern", "https://www.instagram.com/089bayern", "https://www.linkedin.com/company/089bayern"]
    },
    { "@type": "BreadcrumbList", "@id": "https://089bayern.com/#breadcrumb", "itemListElement": breadcrumbItems },
    {
      "@type": "WebPage", "@id": `${pageUrl}#webpage`, "url": pageUrl,
      "name": data.title, "description": data.description,
      "datePublished": "2024-01-01", "dateModified": "2026-02-11",
      "isPartOf": { "@id": "https://089bayern.com/#website" },
      "about": { "@id": "https://089bayern.com/#organization" },
      "breadcrumb": { "@id": "https://089bayern.com/#breadcrumb" },
      "inLanguage": inLanguage
    }
  ];

  const pagesWithSpeakable = ["home", "systeme", "vorteile", "gunes-paneli", "isi-pompasi", "klima", "enerji-depolama", "installation-antalya", "installation-alanya", "installation-ankara"];
  if (pagesWithSpeakable.includes(page)) {
    const wp = graphItems.find((item: any) => item["@type"] === "WebPage");
    if (wp) (wp as any)["speakable"] = { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2"] };
  }

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graphItems });
}

export interface SeoPayload {
  title: string;
  description: string;
  keywords: string;
  language: Language;
  page: PageType;
  canonical: string;
  ogImage: string;
  jsonLd: string;
  hreflangLinks: Array<{ lang: string; href: string }>;
  geoData: { region: string; placename: string; lat: string; lng: string };
  locale: string;
  inLanguage: string;
}

export function buildSeoPayload(page: PageType, language: Language): SeoPayload | null {
  const langData = seoData[language];
  if (!langData) return null;
  const data = langData[page];
  if (!data) return null;

  const currentPath = getPath(page, language);
  const pageUrl = `https://089bayern.com/${currentPath}`;
  const ogImage = ogImageMap[page] || ogImageMap.home;
  const locale = language === "tr" ? "tr_TR" : language === "de" ? "de_DE" : language === "ru" ? "ru_RU" : language === "uk" ? "uk_UA" : language === "ar" ? "ar_SA" : language === "hr" ? "hr_HR" : "en_US";
  const inLanguage = language === "tr" ? "tr-TR" : language === "de" ? "de-DE" : language === "ru" ? "ru-RU" : language === "uk" ? "uk-UA" : language === "ar" ? "ar-SA" : language === "hr" ? "hr-HR" : "en-US";

  const languages: Language[] = ["tr", "de", "en", "ru", "uk", "ar", "hr"];
  const hreflangLinks: Array<{ lang: string; href: string }> = languages.map(lang => ({
    lang: lang as string,
    href: `https://089bayern.com/${getPath(page, lang)}`
  }));
  hreflangLinks.push({ lang: "x-default", href: `https://089bayern.com/${getPath(page, "tr")}` });

  const geoData = page === "installation-ankara"
    ? { region: "TR-06", placename: "Ankara, Türkiye", lat: "39.9334", lng: "32.8597" }
    : page === "installation-alanya"
    ? { region: "TR-07", placename: "Alanya, Türkiye", lat: "36.5437", lng: "31.9994" }
    : { region: "TR-07", placename: "Antalya, Türkiye", lat: "36.8969", lng: "30.7133" };

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    language,
    page,
    canonical: pageUrl,
    ogImage,
    jsonLd: buildJsonLd(page, language, data),
    hreflangLinks,
    geoData,
    locale,
    inLanguage
  };
}

export function getAllCacheUrls(): string[] {
  const urls: string[] = [];
  const primaryLangs: Language[] = ["tr", "de", "en"];
  const pages = Object.keys(pageToUrlKey) as PageType[];

  for (const lang of primaryLangs) {
    for (const page of pages) {
      const path = getPath(page, lang);
      urls.push(`https://089bayern.com/${path}`);
    }
  }

  for (const lp of legalPages) {
    urls.push(`https://089bayern.com${lp}`);
  }

  return Array.from(new Set(urls));
}
