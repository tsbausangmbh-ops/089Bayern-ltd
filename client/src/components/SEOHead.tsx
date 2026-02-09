import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/lib/LanguageContext";
import { urlPaths, type UrlPaths } from "@/lib/urlTranslations";
import type { Language } from "@/lib/translations";

interface SEOHeadProps {
  page: "home" | "systeme" | "vorteile" | "rechner" | "faq" | "ueber-uns" | "team" | "legal" | "installation-antalya" | "installation-ankara" | "installation-alanya" | "standorte" | "gunes-paneli" | "isi-pompasi" | "klima" | "enerji-depolama";
  pageTitle?: string;
}

const seoData = {
  tr: {
    siteName: "089 Bayern Enerji Sistemleri",
    home: {
      title: "Antalya Güneş Paneli Kurulumu & Vaillant Isı Pompası Fiyatları 2026 | 089 Bayern 4'ü 1 Arada Villa Enerji Sistemi",
      description: "Antalya, Alanya, Kemer, Belek, Side, Manavgat'ta güneş paneli, ısı pompası, klima ve enerji depolama. Alman mühendisliği ile %70 enerji tasarrufu. Vaillant & Samsung yetkili bayii. Ücretsiz keşif: +90 507 183 2036",
      keywords: "antalya villa güneş paneli kurulumu fiyatları 2026, alanya ısı pompası klima sistemi montajı, kemer belek side güneş enerjisi sistemleri, akdeniz bölgesi 4 in 1 enerji çözümü alman kalitesi, vaillant ısı pompası samsung klima yetkili bayi antalya, villa çatısı solar panel montaj maliyeti hesaplama, 089 bayern enerji sistemleri türkiye müşteri yorumları, manavgat gazipaşa güneş paneli batarya depolama kurulumu"
    },
    systeme: {
      title: "4'ü 1 Arada Enerji Sistemi Antalya Villa | Güneş Paneli + Vaillant Isı Pompası + Samsung Klima + Batarya | 089 Bayern",
      description: "089 Bayern 4-in-1 German System: Photovoltaik, Wärmepompa, Samsung klima ve lityum batarya tek sistemde. Antalya, Alanya, Kemer'de kurulum. 10 yıl garanti, Alman DIN standartları.",
      keywords: "4 in 1 enerji sistemi güneş paneli ısı pompası klima batarya, antalya villa hibrit enerji sistemi alman mühendisliği, vaillant ısı pompası samsung klima entegrasyonu tek sistem, güneş enerjisi ısı pompası birlikte çalışan akıllı sistem, alman DIN standartları enerji sistemi 10 yıl garanti türkiye, photovoltaik solar panel inverter batarya akıllı ev sistemi, 4 lü 1 arada enerji paketi antalya alanya kemer kurulum, off-grid şebekeden bağımsız enerji sistemi villa akdeniz"
    },
    vorteile: {
      title: "Antalya Villa Güneş Enerjisi ile %70 Tasarruf | 10 Ay Ücretsiz Elektrik ve Isınma Avantajları | 089 Bayern",
      description: "Akdeniz'in 300+ güneşli günü ile yılda 10 ay ücretsiz elektrik ve ısınma. Antalya, Alanya, Side'da %70 enerji tasarrufu. 4-6 yıl geri ödeme süresi. Ücretsiz hesaplama yapın.",
      keywords: "antalya güneş enerjisi yıllık tasarruf miktarı hesaplama, 300 güneşli gün akdeniz ücretsiz elektrik ısınma avantajı, güneş paneli yatırım geri ödeme süresi 4 yıl türkiye, villa enerji bağımsızlığı şebekeden bağımsız yaşam akdeniz, ısı pompası ile kış aylarında ücretsiz ısınma antalya, güneş enerjisi ile emlak değer artışı yüzde 15 villa, enerji tasarrufu ile aylık elektrik faturası sıfıra yakın, samsung klima ile yazın ücretsiz soğutma akdeniz iklimi"
    },
    rechner: {
      title: "Güneş Paneli Fiyat Hesaplama Antalya Villa m² | Enerji Tasarruf Hesaplayıcı 2026 | 089 Bayern",
      description: "Antalya, Alanya, Kemer, Side için kişiselleştirilmiş enerji tasarrufu hesabı. Villa m² ve konuma göre güneş paneli, ısı pompası maliyeti ve tasarruf hesaplama. Ücretsiz teklif alın.",
      keywords: "güneş paneli fiyat hesaplama aracı antalya villa m2, enerji tasarrufu hesaplayıcı ısı pompası klima batarya maliyeti, solar panel kurulum maliyeti ve geri ödeme süresi hesabı, villa büyüklüğüne göre 4 in 1 sistem fiyat teklifi, antalya alanya kemer bölgesine özel enerji hesaplama, güneş paneli kaç kwp gerekir villa için hesaplama, aylık elektrik tasarrufu ne kadar güneş paneli ile, ücretsiz keşif ve fiyat teklifi 089 bayern enerji"
    },
    faq: {
      title: "Güneş Paneli Kurulumu Sıkça Sorulan Sorular | Antalya Villa Isı Pompası Klima SSS | 089 Bayern",
      description: "Antalya'da güneş paneli kurulumu, ısı pompası bakımı, enerji depolama ve 089 Bayern 4-in-1 sistem hakkında en çok sorulan 20 soru ve uzman cevapları.",
      keywords: "güneş paneli kurulumu kaç gün sürer antalya villa, ısı pompası nasıl çalışır kış aylarında verimlilik sorusu, güneş enerjisi sistemi bakım maliyeti yıllık ne kadar, 4 in 1 enerji sistemi fiyatı ne kadar 2026 türkiye, güneş paneli garanti süresi ve sigorta kapsamı nedir, batarya depolama sistemi kaç yıl dayanır lityum iyon, antalya güneş paneli izin ve ruhsat süreci nasıl işler, vaillant ısı pompası samsung klima yetkili servis türkiye"
    },
    "ueber-uns": {
      title: "089 Bayern Hakkımızda | Antalya Merkezli Alman-Türk Enerji Sistemi Uzmanları | Güneş Paneli Isı Pompası Kurulum Firması",
      description: "089 Bayern Türkiye: 2018'den beri Antalya merkezli Alman kalitesi enerji sistemleri. Antalya, Alanya, Akdeniz bölgesinde 500+ mutlu aile, 10 yıl garanti.",
      keywords: "089 bayern türkiye antalya merkezli enerji şirketi hakkında, antalya alman kalitesi enerji sistemleri uzman ekibi, dalibor bakmaz mustafa sakar enerji uzmanları biyografi, 500 aile güneş paneli ısı pompası referans projeleri, alman mühendisliği türkiye akdeniz bölgesi enerji kurulum, 2018 den beri villa enerji çözümleri antalya alanya, alman DIN standartları sertifikalı enerji sistemi montajı, 089 bayern müşteri memnuniyeti ve referanslar türkiye"
    },
    team: {
      title: "089 Bayern Ekibimiz | Mustafa Sakar & Dalibor Bakmaz | Antalya Güneş Enerjisi Uzman Kadrosu",
      description: "089 Bayern ekibi: Dalibor Bakmaz ve Mustafa Sakar liderliğinde Alman mühendislik kalitesi. Antalya, Alanya, Muğla'da profesyonel enerji danışmanlığı.",
      keywords: "089 bayern ekibi enerji danışmanları antalya alanya, mustafa sakar ceo alman türk enerji uzmanı profili, dalibor bakmaz kurucu alman enerji mühendisi biyografi, profesyonel güneş paneli montaj ekibi akdeniz bölgesi, sertifikalı vaillant ısı pompası teknisyenleri türkiye, samsung klima yetkili kurulum uzmanları antalya, enerji danışmanlığı ücretsiz keşif hizmeti villa sahipleri, alman türk mühendislik ekibi güneş enerjisi uzmanlığı"
    },
    legal: {
      title: "Yasal Bilgiler | 089 Bayern Enerji Sistemleri",
      description: "089 Bayern yasal politikalar: KVKK, gizlilik politikası, çerez politikası, kullanım şartları ve mesafeli satış sözleşmesi.",
      keywords: "089 bayern kvkk kişisel verilerin korunması politikası, gizlilik politikası çerez kullanımı bilgilendirme, kullanım şartları mesafeli satış sözleşmesi, cayma hakkı ön bilgilendirme formu yasal haklar, enerji sistemi garanti şartları ve koşulları, 089 bayern iletişim şikayet ve öneri bildirimi, veri işleme aydınlatma metni ticari elektronik ileti, tüketici hakları enerji sistemi kurulum sözleşmesi"
    },
    "installation-antalya": {
      title: "Güneş Paneli Kurulumu Antalya Merkez | Vaillant Isı Pompası Samsung Klima Montajı Villa Fiyatları | 089 Bayern",
      description: "Antalya, Kemer, Belek, Side, Alanya'da profesyonel 4'ü 1 arada enerji sistemi kurulumu. Güneş paneli, Vaillant ısı pompası, Samsung klima ve batarya depolama. Alman kalitesi, 10 yıl garanti.",
      keywords: "antalya kemer belek side güneş paneli kurulum hizmeti, antalya merkez villa çatısı solar panel montaj fiyatları, vaillant ısı pompası profesyonel kurulum antalya alanya, samsung klima sistemi montajı akdeniz villalarında, 4 in 1 enerji sistemi antalya 10 yıl garanti alman kalitesi, antalya lara kundu döşemealtı güneş enerjisi kurulumu, güneş paneli ısı pompası klima batarya tek seferde montaj, antalya bölgesi ücretsiz keşif ve enerji analizi hizmeti"
    },
    "installation-ankara": {
      title: "Güneş Paneli Kurulumu Ankara | Vaillant Isı Pompası Samsung Klima Montajı Villa Çankaya Keçiören | 089 Bayern",
      description: "Ankara ve çevresinde profesyonel 4'ü 1 arada enerji sistemi kurulumu. Güneş paneli, Vaillant ısı pompası, Samsung klima ve batarya depolama. Alman kalitesi, 10 yıl garanti. Çankaya, Keçiören, Yenimahalle.",
      keywords: "ankara güneş paneli kurulumu çankaya keçiören yenimahalle, ankara villa ısı pompası montajı kış ayları verimlilik, 4 in 1 enerji sistemi ankara başkent alman mühendisliği, güneş paneli ankara kara iklim performansı soğuk havada, vaillant ısı pompası ankara merkez kurulum ve bakım, samsung klima batarya depolama ankara villa çözümleri, ankara etimesgut sincan güneş enerjisi sistemi kurulumu, ankara bölgesi ücretsiz keşif enerji tasarrufu analizi"
    },
    "installation-alanya": {
      title: "Güneş Paneli Kurulumu Alanya | Vaillant Isı Pompası Samsung Klima Montajı Villa Mahmutlar Kestel | 089 Bayern Şube",
      description: "Alanya ve çevresinde profesyonel 4'ü 1 arada enerji sistemi kurulumu. 089 Bayern Alanya şubesi. Güneş paneli, Vaillant ısı pompası, Samsung klima ve batarya depolama. Mahmutlar, Kestel, Oba.",
      keywords: "alanya mahmutlar kestel oba güneş paneli kurulum hizmeti, alanya villa solar panel montaj fiyatları 089 bayern şube, vaillant ısı pompası kurulumu alanya sahil villalarında, samsung klima sistemi alanya sıcak iklim soğutma çözümü, 4 in 1 enerji sistemi alanya 300 güneşli gün avantajı, alanya gazipaşa konaklı güneş enerjisi batarya depolama, alanya bölgesi ücretsiz keşif ve enerji analizi hizmeti, akdeniz sahil villası güneş paneli ısı pompası entegrasyonu"
    },
    standorte: {
      title: "089 Bayern Hizmet Bölgeleri | Antalya Alanya Muğla İzmir Güneş Paneli Kurulum Noktaları | Türkiye",
      description: "089 Bayern enerji sistemleri kurulum bölgeleri: Antalya, Alanya, Muğla, İzmir, Split, Dalmaçya. Akdeniz ve Ege'de güneş paneli, ısı pompası, klima kurulumu.",
      keywords: "089 bayern hizmet bölgeleri türkiye hırvatistan yunanistan, antalya alanya muğla izmir güneş paneli kurulum bölgeleri, fethiye bodrum marmaris enerji sistemi montaj hizmeti, akdeniz ege sahil bölgesi villa enerji çözümleri, split dalmaçya hırvatistan güneş enerjisi sistemi kurulumu, türkiye geneli villa enerji danışmanlığı ücretsiz keşif, mersin adana güney sahil enerji sistemi kurulum planı, 089 bayern yeni bölge genişleme planı 2026 hedefler"
    },
    "gunes-paneli": {
      title: "Villa Çatısı Güneş Paneli Kurulumu Fiyatları 2026 Antalya | 6-12 kWp Solar Panel Montajı | 089 Bayern",
      description: "Antalya, Alanya, Kemer, Side'da villa çatısına profesyonel güneş paneli kurulumu. 6-12 kWp photovoltaik sistemler, tier-1 paneller, Alman kalitesi montaj. 300+ güneşli gün ile %70 elektrik tasarrufu. 10 yıl garanti.",
      keywords: "güneş paneli kurulumu antalya villa çatısı fiyatları, solar panel montajı alanya kemer belek side akdeniz, photovoltaik sistem 6 kwp 10 kwp 12 kwp villa çatısı, güneş paneli fiyatları 2026 türkiye antalya bölgesi, villa çatısına güneş paneli kaç kwp gerekir hesaplama, tier 1 güneş paneli markaları monokristal performans, güneş enerjisi ile elektrik faturası sıfıra nasıl düşer, 089 bayern güneş paneli kurulum referansları antalya alanya"
    },
    "isi-pompasi": {
      title: "Vaillant Isı Pompası Kurulumu Fiyatları Antalya Villa | Hava Kaynaklı Isıtma Soğutma COP 5.0 | 089 Bayern",
      description: "Antalya ve Akdeniz bölgesinde Vaillant ısı pompası kurulumu. Hava kaynaklı ısı pompası ile kışın ısıtma yazın soğutma. COP 5.0 verimlilik, %60 enerji tasarrufu. Alman yetkili servis, 10 yıl garanti.",
      keywords: "vaillant ısı pompası kurulumu antalya villa fiyatları, hava kaynaklı ısı pompası akdeniz iklimi verimlilik, ısı pompası ile villa ısıtma soğutma sistemi türkiye, vaillant arotherm ısı pompası cop değeri performans, ısı pompası elektrik tüketimi ve aylık maliyet hesabı, villa ısı pompası montajı alanya kemer belek side, yerden ısıtma ısı pompası entegrasyonu akdeniz villası, 089 bayern vaillant yetkili bayi servis antalya türkiye"
    },
    klima: {
      title: "Samsung WindFree Klima Kurulumu Fiyatları Antalya Villa | Sessiz Enerji Verimli Multi-Split Sistem | 089 Bayern",
      description: "Antalya ve Akdeniz villalarında Samsung WindFree klima sistemi kurulumu. Sessiz ve enerji verimli soğutma-ısıtma. Multi-split sistem, akıllı ev entegrasyonu. Yetkili Samsung bayii, 5 yıl garanti.",
      keywords: "samsung klima kurulumu antalya villa windfree sistemi, samsung windfree klima sessiz soğutma villa akdeniz, multi split klima sistemi villa montajı antalya alanya, samsung klima fiyatları 2026 enerji verimli inverter, villa klima sistemi kaç btu gerekir hesaplama rehberi, samsung klima akıllı ev wifi uzaktan kontrol sistemi, klima montajı profesyonel kurulum antalya kemer belek, 089 bayern samsung yetkili bayi klima servisi türkiye"
    },
    "enerji-depolama": {
      title: "Lityum İyon Batarya Depolama Sistemi Kurulumu Antalya Villa | 10-15 kWh Güneş Enerjisi Depolama | 089 Bayern",
      description: "Antalya ve Akdeniz bölgesinde lityum iyon enerji depolama batarya sistemi kurulumu. Güneş enerjisi ile şarj, gece kullanım. 10-15 kWh kapasite, 6000+ şarj döngüsü. Kesintisiz enerji, 10 yıl garanti.",
      keywords: "enerji depolama batarya sistemi antalya villa kurulumu, lityum iyon batarya güneş paneli entegrasyonu fiyatları, ev tipi batarya depolama sistemi 10 kwh 15 kwh kapasite, güneş enerjisi gece kullanımı batarya ile depolama, samsung sdi batarya depolama sistemi yetkili bayi türkiye, off grid şebekeden bağımsız enerji batarya çözümü villa, enerji depolama sistemi fiyatları 2026 türkiye antalya, 089 bayern batarya depolama kurulum referansları akdeniz"
    }
  },
  de: {
    siteName: "089 Bayern Energiesysteme",
    home: {
      title: "089 Bayern | Solaranlage & Wärmepumpe Antalya | Deutsches 4-in-1 System Türkei",
      description: "Solaranlage, Wärmepumpe, Klimaanlage und Stromspeicher in Antalya, Alanya, Kemer, Belek, Side, Manavgat. Deutsche Ingenieursqualität mit bis zu 70% Energieeinsparung. Kostenlose Beratung: +90 507 183 2036",
      keywords: "solaranlage villa antalya installation kosten 2026, wärmepumpe türkei mittelmeer vaillant montage, 4 in 1 energiesystem deutsch qualität antalya alanya, photovoltaik anlage villa dach kemer belek side, samsung klimaanlage batteriespeicher integration villa, deutsche energietechnik türkei 089 bayern erfahrungen, villa energieversorgung komplett autark mittelmeer, kostenlose beratung energiesystem antalya telefon"
    },
    systeme: {
      title: "4-in-1 Deutsches Energiesystem | Solar + Wärmepumpe + Klima + Batterie | 089 Bayern",
      description: "089 Bayern 4-in-1 German System: Photovoltaik, Wärmepumpe, Samsung Klimaanlage und Lithium-Batterie in einem System. Installation in Antalya, Alanya, Kemer. 10 Jahre Garantie nach DIN-Standards.",
      keywords: "4 in 1 energiesystem solar wärmepumpe klima batterie, hybrides energiesystem villa antalya deutsche qualität, vaillant wärmepumpe samsung klima integration system, photovoltaik inverter batteriespeicher smart home, deutsches din standard energiesystem 10 jahre garantie, off-grid netzunabhängige energieversorgung villa türkei, 4 fach energiepaket antalya alanya kemer installation, solaranlage wärmepumpe kombiniert ein ansprechpartner"
    },
    vorteile: {
      title: "10 Monate Kostenlose Energie | Vorteile Solaranlage Antalya | 089 Bayern",
      description: "Mit 300+ Sonnentagen am Mittelmeer 10 Monate kostenloser Strom und Heizung. Bis zu 70% Energieeinsparung in Antalya, Alanya, Side. Amortisation in 4-6 Jahren.",
      keywords: "energieeinsparung 70 prozent villa antalya mittelmeer, 300 sonnentage kostenloser strom heizung berechnung, solaranlage amortisation 4 jahre rendite türkei villa, immobilienwert steigerung 15 prozent solaranlage villa, wärmepumpe winter kostenlos heizen antalya mittelmeer, energieunabhängigkeit villa netzunabhängig autark leben, monatliche stromrechnung null euro solaranlage batterie, samsung klima kostenlos kühlen sommer mittelmeer klima"
    },
    rechner: {
      title: "Einsparungsrechner | Solaranlage Kosten Antalya | 089 Bayern",
      description: "Personalisierte Energieeinsparungsberechnung für Antalya, Alanya, Kemer, Side. Solaranlage und Wärmepumpe Kosten nach Villa m² und Standort. Kostenloses Angebot.",
      keywords: "solaranlage kosten rechner villa qm antalya alanya, energieeinsparung berechnen wärmepumpe klima batterie, solar installation kosten amortisation berechnung türkei, villa größe 4 in 1 system preisangebot kalkulation, antalya alanya kemer region energieberechnung kostenlos, solaranlage kwp bedarf villa berechnung dachfläche, monatliche stromersparnis solaranlage wärmepumpe rechner, kostenlose besichtigung preisangebot 089 bayern energie"
    },
    faq: {
      title: "Häufige Fragen | Solaranlage & Wärmepumpe | 089 Bayern Antalya",
      description: "Die 20 häufigsten Fragen zu Solaranlagen, Wärmepumpen, Energiespeicher und dem 089 Bayern 4-in-1 System in Antalya beantwortet von unseren Experten.",
      keywords: "solaranlage installation dauer antalya villa fragen, wärmepumpe funktionsweise winter effizienz häufige frage, energiesystem wartungskosten jährlich wie viel türkei, 4 in 1 energiesystem preis 2026 türkei villa kosten, solaranlage garantie versicherung was ist abgedeckt, batteriespeicher lebensdauer lithium ionen wie lange, antalya solaranlage genehmigung baugenehmigung prozess, vaillant wärmepumpe samsung klima autorisierter service"
    },
    "ueber-uns": {
      title: "Über Uns | Deutsche Energieexperten Standort Türkei | 089 Bayern Antalya",
      description: "089 Bayern Türkei: Seit 2018 Standort Antalya. Deutsche Qualität für Antalya, Alanya und die Mittelmeerregion. 500+ zufriedene Familien, 10 Jahre Garantie.",
      keywords: "089 bayern türkei standort antalya energieunternehmen, antalya deutsche qualität energiesysteme experten team, dalibor bakmaz mustafa sakar energieexperten biografie, 500 familien solaranlage wärmepumpe referenzprojekte, deutsche ingenieursqualität mittelmeer region installation, seit 2018 villa energielösungen antalya alanya türkei, din standard zertifiziertes energiesystem montage, 089 bayern kundenzufriedenheit referenzen bewertungen"
    },
    team: {
      title: "Unser Team | Deutsch-Türkische Energieexperten | 089 Bayern",
      description: "Das 089 Bayern Team: Unter der Leitung von Dalibor Bakmaz und Mustafa Sakar. Deutsche Ingenieursqualität in Antalya, Alanya, Muğla.",
      keywords: "089 bayern team energieberater antalya alanya experten, mustafa sakar ceo deutsch türkischer energieexperte, dalibor bakmaz gründer deutscher energieingenieur profil, professionelles solar montage team mittelmeer region, zertifizierte vaillant wärmepumpe techniker türkei, samsung klima autorisierte installations experten, energieberatung kostenlose besichtigung villa service, deutsch türkisches ingenieur team solarenergie expertise"
    },
    legal: {
      title: "Rechtliche Informationen | 089 Bayern Energiesysteme",
      description: "089 Bayern rechtliche Richtlinien: Datenschutz, Cookie-Richtlinie, AGB und Fernabsatzvertrag.",
      keywords: "089 bayern datenschutz kvkk personendaten schutz, datenschutzrichtlinie cookie nutzung informationen, nutzungsbedingungen fernabsatzvertrag widerrufsrecht, verbraucherschutz energiesystem installations vertrag, garantiebedingungen energiesystem konditionen detail, 089 bayern kontakt beschwerde feedback meldung, datenverarbeitung aufklärung elektronische mitteilung, verbraucherrechte energiesystem installation vertrag"
    },
    "installation-antalya": {
      title: "4-in-1 Energiesystem-Installation Antalya | Solaranlage & Wärmepumpe | 089 Bayern",
      description: "Professionelle 4-in-1 Energiesystem-Installation in Antalya, Kemer, Belek, Side, Alanya. Solaranlage, Vaillant Wärmepumpe, Samsung Klimaanlage und Batteriespeicher. Deutsche Qualität, 10 Jahre Garantie.",
      keywords: "antalya kemer belek side solaranlage installation service, antalya villa dachmontage solar panel preis angebot, vaillant wärmepumpe professionelle installation antalya, samsung klimaanlage montage mittelmeer villen region, 4 in 1 energiesystem antalya 10 jahre garantie deutsch, antalya lara kundu dosemealti solarenergie installation, solaranlage wärmepumpe klima batterie komplett montage, antalya region kostenlose besichtigung energieanalyse"
    },
    "installation-ankara": {
      title: "4-in-1 Energiesystem-Installation Ankara | Solaranlage & Wärmepumpe | 089 Bayern",
      description: "Professionelle 4-in-1 Energiesystem-Installation in Ankara und Umgebung. Solaranlage, Vaillant Wärmepumpe, Samsung Klimaanlage und Batteriespeicher. Deutsche Qualität, 10 Jahre Garantie. Çankaya, Keçiören, Yenimahalle.",
      keywords: "ankara solaranlage installation cankaya kecioren villa, ankara villa wärmepumpe montage winter effizienz, 4 in 1 energiesystem ankara hauptstadt deutsche qualität, solaranlage ankara kontinentalklima leistung kälte, vaillant wärmepumpe ankara zentrum installation wartung, samsung klima batteriespeicher ankara villa lösungen, ankara etimesgut sincan solarenergie system installation, ankara region kostenlose besichtigung energieanalyse"
    },
    "installation-alanya": {
      title: "4-in-1 Energiesystem-Installation Alanya | Solaranlage & Wärmepumpe | 089 Bayern Niederlassung",
      description: "Professionelle 4-in-1 Energiesystem-Installation in Alanya und Umgebung. 089 Bayern Niederlassung Alanya. Solaranlage, Vaillant Wärmepumpe, Samsung Klimaanlage und Batteriespeicher. Mahmutlar, Kestel, Oba.",
      keywords: "alanya mahmutlar kestel oba solaranlage installation, alanya villa solar panel montage preise 089 bayern filiale, vaillant wärmepumpe installation alanya küsten villen, samsung klima system alanya heißes klima kühlung lösung, 4 in 1 energiesystem alanya 300 sonnentage vorteil, alanya gazipasa konakli solarenergie batteriespeicher, alanya region kostenlose besichtigung energieanalyse, mittelmeer küsten villa solar wärmepumpe integration"
    },
    standorte: {
      title: "Unsere Serviceregionen | Türkei, Kroatien, Griechenland | 089 Bayern",
      description: "089 Bayern Energiesystem-Installationsregionen: Antalya, Alanya, Muğla, Izmir, Split, Dalmatien. Solaranlage, Wärmepumpe, Klimaanlage Installation am Mittelmeer und in der Ägäis.",
      keywords: "089 bayern serviceregionen türkei kroatien griechenland, antalya alanya mugla izmir solaranlage regions service, fethiye bodrum marmaris energiesystem montage service, mittelmeer ägäis küstenregion villa energielösungen, split dalmatien kroatien solarenergie system installation, türkei landesweit villa energieberatung kostenlos, mersin adana südküste energiesystem installations plan, 089 bayern neue region expansion plan 2026 ziele"
    },
    "gunes-paneli": {
      title: "Solaranlage Installation Antalya | Villa Dach Solar Panel Montage | 089 Bayern",
      description: "Professionelle Solaranlage Installation auf Villadächern in Antalya, Alanya, Kemer, Side. 6-12 kWp Photovoltaik Systeme, Tier-1 Panels, deutsche Qualitätsmontage. 300+ Sonnentage mit 70% Stromersparnis. 10 Jahre Garantie.",
      keywords: "solaranlage installation antalya villa dach preise, solar panel montage alanya kemer belek mittelmeer, photovoltaik system 6 kwp 10 kwp 12 kwp villa dach, solaranlage preise 2026 türkei antalya region kosten, villa dach solaranlage kwp bedarf berechnung planung, tier 1 solar panel marken monokristallin leistung, stromrechnung null euro solaranlage wie funktioniert, 089 bayern solaranlage installation referenzen antalya"
    },
    "isi-pompasi": {
      title: "Vaillant Wärmepumpe Installation Antalya | Villa Heizung Kühlung | 089 Bayern",
      description: "Vaillant Wärmepumpe Installation in Antalya und der Mittelmeerregion. Luft-Wasser-Wärmepumpe für Heizen im Winter und Kühlen im Sommer. COP 5.0 Effizienz, 60% Energieeinsparung. Deutscher autorisierter Service, 10 Jahre Garantie.",
      keywords: "vaillant wärmepumpe installation antalya villa preise, luft wasser wärmepumpe mittelmeer klima effizienz, wärmepumpe villa heizung kühlung system türkei kosten, vaillant arotherm wärmepumpe cop leistung bewertung, wärmepumpe stromverbrauch monatliche kosten berechnung, villa wärmepumpe montage alanya kemer belek side, fußbodenheizung wärmepumpe integration mittelmeer villa, 089 bayern vaillant autorisierter händler service antalya"
    },
    klima: {
      title: "Samsung Klimaanlage Installation Antalya | WindFree Klima Villa | 089 Bayern",
      description: "Samsung WindFree Klimaanlage Installation in Antalya und Mittelmeervillen. Leise und energieeffiziente Kühlung-Heizung. Multi-Split System, Smart Home Integration. Autorisierter Samsung Händler, 5 Jahre Garantie.",
      keywords: "samsung klimaanlage installation antalya villa windfree, samsung windfree klima leise kühlung villa mittelmeer, multi split klima system villa montage antalya alanya, samsung klima preise 2026 energieeffizient inverter, villa klimaanlage btu bedarf berechnung ratgeber guide, samsung klima smart home wifi fernsteuerung system, klima montage professionelle installation antalya kemer, 089 bayern samsung autorisierter händler klima service"
    },
    "enerji-depolama": {
      title: "Batteriespeicher System Antalya | Lithium-Ionen Speicher Villa | 089 Bayern",
      description: "Lithium-Ionen Batteriespeicher System Installation in Antalya und der Mittelmeerregion. Laden mit Solarenergie, Nachtnutzung. 10-15 kWh Kapazität, 6000+ Ladezyklen. Unterbrechungsfreie Energie, 10 Jahre Garantie.",
      keywords: "batteriespeicher system antalya villa installation kosten, lithium ionen batterie solaranlage integration preise, haus batteriespeicher system 10 kwh 15 kwh kapazität, solarenergie nacht nutzung batterie speicherung system, samsung sdi batteriespeicher autorisierter händler türkei, off grid netzunabhängig energie batterie lösung villa, batteriespeicher system preise 2026 türkei antalya kosten, 089 bayern batteriespeicher installation referenzen mittelmeer"
    }
  },
  en: {
    siteName: "089 Bayern Energy Systems",
    home: {
      title: "089 Bayern | Solar Panels & Heat Pump Antalya Turkey | German 4-in-1 System",
      description: "Solar panels, heat pumps, air conditioning and battery storage in Antalya, Alanya, Kemer, Belek, Side, Manavgat Turkey. German engineering with up to 70% energy savings. Free consultation: +90 507 183 2036",
      keywords: "solar panel installation antalya villa cost prices 2026, heat pump air conditioning system alanya installation, kemer belek side solar energy systems mediterranean, 4 in 1 energy solution german quality antalya turkey, vaillant heat pump samsung ac authorized dealer antalya, villa roof solar panel installation cost calculator, 089 bayern energy systems turkey customer reviews, manavgat gazipasa solar panel battery storage installation"
    },
    systeme: {
      title: "4-in-1 German Energy System | Solar + Heat Pump + AC + Battery | 089 Bayern Turkey",
      description: "089 Bayern 4-in-1 German System: Photovoltaic, heat pump, Samsung AC and lithium battery in one system. Installation in Antalya, Alanya, Kemer. 10-year warranty, German DIN standards.",
      keywords: "4 in 1 energy system solar heat pump ac battery, antalya villa hybrid energy system german engineering, vaillant heat pump samsung ac integration single system, solar energy heat pump combined smart system turkey, german DIN standard energy system 10 year warranty, photovoltaic solar panel inverter battery smart home, 4 in 1 energy package antalya alanya kemer installation, off-grid independent energy system villa mediterranean"
    },
    vorteile: {
      title: "10 Months Free Energy Benefits | Solar Panel Savings Antalya | 089 Bayern",
      description: "With 300+ sunny days in the Mediterranean, enjoy 10 months of free electricity and heating. Up to 70% energy savings in Antalya, Alanya, Side. 4-6 year payback period.",
      keywords: "antalya solar energy annual savings calculation amount, 300 sunny days mediterranean free electricity heating, solar panel investment payback period 4 years turkey, villa energy independence off-grid living mediterranean, heat pump free heating winter months antalya turkey, solar energy property value increase 15 percent villa, energy savings monthly electricity bill near zero cost, samsung ac free cooling summer mediterranean climate"
    },
    rechner: {
      title: "Energy Savings Calculator | Solar Panel Cost Antalya | 089 Bayern",
      description: "Personalized energy savings calculation for Antalya, Alanya, Kemer, Side. Solar panel and heat pump costs based on villa size and location. Free quote.",
      keywords: "solar panel price calculator antalya villa per sqm, energy savings calculator heat pump ac battery cost, solar panel installation cost payback period calculation, villa size 4 in 1 system price quote estimate turkey, antalya alanya kemer region energy calculation free, solar panel how many kwp needed villa calculation, monthly electricity savings how much with solar panels, free survey and price quote 089 bayern energy turkey"
    },
    faq: {
      title: "Frequently Asked Questions | Solar & Heat Pump | 089 Bayern Antalya",
      description: "Top 20 questions about solar panels, heat pumps, energy storage and the 089 Bayern 4-in-1 system in Antalya answered by our experts.",
      keywords: "solar panel installation how many days antalya villa, heat pump how it works winter efficiency question, solar energy system maintenance cost annual how much, 4 in 1 energy system price how much 2026 turkey, solar panel warranty period insurance coverage details, battery storage system how many years lithium ion, antalya solar panel permit licensing process how works, vaillant heat pump samsung ac authorized service turkey"
    },
    "ueber-uns": {
      title: "About Us | German Quality Energy Experts Based in Turkey | 089 Bayern Antalya",
      description: "089 Bayern Turkey: Based in Antalya since 2018. German quality energy systems for Antalya, Alanya and the Mediterranean region. 500+ happy families, 10-year warranty.",
      keywords: "089 bayern turkey based antalya energy company about, antalya based german quality energy systems expert team, dalibor bakmaz mustafa sakar energy experts biography, 500 families solar panel heat pump reference projects, german engineering turkey mediterranean region installation, since 2018 villa energy solutions antalya alanya turkey, german DIN standard certified energy system installation, 089 bayern customer satisfaction references reviews turkey"
    },
    team: {
      title: "Our Team | German-Turkish Energy Experts | 089 Bayern",
      description: "The 089 Bayern Team: Led by Dalibor Bakmaz and Mustafa Sakar. German engineering quality in Antalya, Alanya, Muğla.",
      keywords: "089 bayern team energy consultants antalya alanya, mustafa sakar ceo german turkish energy expert profile, dalibor bakmaz founder german energy engineer biography, professional solar panel installation team mediterranean, certified vaillant heat pump technicians turkey service, samsung ac authorized installation experts antalya, energy consulting free survey service villa owners, german turkish engineering team solar energy expertise"
    },
    legal: {
      title: "Legal Information | 089 Bayern Energy Systems",
      description: "089 Bayern legal policies: Privacy policy, cookie policy, terms of use and distance sales agreement.",
      keywords: "089 bayern privacy personal data protection policy, privacy policy cookie usage information disclosure, terms of use distance sales agreement conditions, right of withdrawal pre-information form legal rights, energy system warranty terms and conditions details, 089 bayern contact complaint feedback notification, data processing disclosure electronic communication, consumer rights energy system installation contract"
    },
    "installation-antalya": {
      title: "4-in-1 Energy System Installation Antalya | Solar Panels & Heat Pump | 089 Bayern",
      description: "Professional 4-in-1 energy system installation in Antalya, Kemer, Belek, Side, Alanya. Solar panels, Vaillant heat pump, Samsung AC and battery storage. German quality, 10-year warranty.",
      keywords: "antalya kemer belek side solar panel installation service, antalya central villa roof solar panel installation prices, vaillant heat pump professional installation antalya alanya, samsung ac system installation mediterranean villas region, 4 in 1 energy system antalya 10 year warranty german, antalya lara kundu dosemealti solar energy installation, solar panel heat pump ac battery complete installation, antalya region free survey and energy analysis service"
    },
    "installation-ankara": {
      title: "4-in-1 Energy System Installation Ankara | Solar Panels & Heat Pump | 089 Bayern",
      description: "Professional 4-in-1 energy system installation in Ankara and surroundings. Solar panels, Vaillant heat pump, Samsung AC and battery storage. German quality, 10-year warranty. Çankaya, Keçiören, Yenimahalle.",
      keywords: "ankara solar panel installation cankaya kecioren villa, ankara villa heat pump installation winter efficiency, 4 in 1 energy system ankara capital german engineering, solar panel ankara continental climate cold weather performance, vaillant heat pump ankara center installation maintenance, samsung ac battery storage ankara villa solutions turkey, ankara etimesgut sincan solar energy system installation, ankara region free survey energy savings analysis service"
    },
    "installation-alanya": {
      title: "4-in-1 Energy System Installation Alanya | Solar Panels & Heat Pump | 089 Bayern Branch",
      description: "Professional 4-in-1 energy system installation in Alanya and surroundings. 089 Bayern Alanya branch. Solar panels, Vaillant heat pump, Samsung AC and battery storage. Mahmutlar, Kestel, Oba.",
      keywords: "alanya mahmutlar kestel oba solar panel installation, alanya villa solar panel installation prices 089 bayern, vaillant heat pump installation alanya coastal villas, samsung ac system alanya hot climate cooling solution, 4 in 1 energy system alanya 300 sunny days advantage, alanya gazipasa konakli solar energy battery storage, alanya region free survey and energy analysis service, mediterranean coastal villa solar heat pump integration"
    },
    standorte: {
      title: "Our Service Regions | Turkey, Croatia, Greece | 089 Bayern",
      description: "089 Bayern energy system installation regions: Antalya, Alanya, Mugla, Izmir, Split, Dalmatia. Solar panel, heat pump, AC installation in the Mediterranean and Aegean.",
      keywords: "089 bayern service regions turkey croatia greece, antalya alanya mugla izmir solar panel installation, fethiye bodrum marmaris energy system installation, mediterranean aegean coastal region villa energy solutions, split dalmatia croatia solar energy system installation, turkey nationwide villa energy consulting free survey, mersin adana south coast energy system installation, 089 bayern new region expansion plan 2026 targets"
    },
    "gunes-paneli": {
      title: "Solar Panel Installation Antalya | Villa Roof Solar Panel Mounting | 089 Bayern",
      description: "Professional solar panel installation on villa roofs in Antalya, Alanya, Kemer, Side. 6-12 kWp photovoltaic systems, tier-1 panels, German quality mounting. 300+ sunny days with 70% electricity savings. 10-year warranty.",
      keywords: "solar panel installation antalya villa roof prices, solar panel mounting alanya kemer belek side mediterranean, photovoltaic system 6 kwp 10 kwp 12 kwp villa roof, solar panel prices 2026 turkey antalya region costs, villa roof solar panel how many kwp needed calculation, tier 1 solar panel brands monocrystalline performance, solar energy electricity bill zero how to achieve guide, 089 bayern solar panel installation references antalya"
    },
    "isi-pompasi": {
      title: "Vaillant Heat Pump Installation Antalya | Villa Heating Cooling System | 089 Bayern",
      description: "Vaillant heat pump installation in Antalya and Mediterranean region. Air-source heat pump for winter heating and summer cooling. COP 5.0 efficiency, 60% energy savings. German authorized service, 10-year warranty.",
      keywords: "vaillant heat pump installation antalya villa prices, air source heat pump mediterranean climate efficiency, heat pump villa heating cooling system turkey cost, vaillant arotherm heat pump cop performance rating, heat pump electricity consumption monthly cost calculation, villa heat pump installation alanya kemer belek side, underfloor heating heat pump integration mediterranean, 089 bayern vaillant authorized dealer service antalya"
    },
    klima: {
      title: "Samsung Air Conditioning Installation Antalya | WindFree AC System Villa | 089 Bayern",
      description: "Samsung WindFree air conditioning system installation in Antalya and Mediterranean villas. Quiet and energy-efficient cooling-heating. Multi-split system, smart home integration. Authorized Samsung dealer, 5-year warranty.",
      keywords: "samsung air conditioning installation antalya villa windfree, samsung windfree ac quiet cooling villa mediterranean, multi split ac system villa installation antalya alanya, samsung ac prices 2026 energy efficient inverter model, villa ac system how many btu needed calculation guide, samsung ac smart home wifi remote control system, ac installation professional mounting antalya kemer, 089 bayern samsung authorized dealer ac service turkey"
    },
    "enerji-depolama": {
      title: "Battery Storage System Antalya | Lithium-Ion Battery Villa | 089 Bayern",
      description: "Lithium-ion battery storage system installation in Antalya and Mediterranean region. Solar energy charging, nighttime use. 10-15 kWh capacity, 6000+ charge cycles. Uninterrupted energy, 10-year warranty.",
      keywords: "battery storage system antalya villa installation cost, lithium ion battery solar panel integration prices, home battery storage system 10 kwh 15 kwh capacity, solar energy nighttime use battery storage solution, samsung sdi battery storage system authorized dealer, off grid independent energy battery solution villa, battery storage system prices 2026 turkey antalya, 089 bayern battery storage installation references turkey"
    }
  },
  ru: {
    siteName: "089 Bayern Энергосистемы",
    home: {
      title: "089 Bayern | Солнечные Панели и Тепловой Насос Анталия | Немецкая Система 4-в-1",
      description: "Солнечные панели, тепловые насосы, кондиционеры и накопители энергии в Анталии, Алании, Кемере, Белеке, Сиде, Манавгате. Немецкое качество с экономией до 70%. Бесплатная консультация: +90 507 183 2036",
      keywords: "солнечные панели анталия вилла установка цены 2026, тепловой насос кондиционер алания монтаж система, кемер белек сиде солнечная энергия системы средиземноморье, 4 в 1 энергетическое решение немецкое качество анталия, vaillant тепловой насос samsung авторизованный дилер, установка солнечных панелей на крышу виллы стоимость, 089 bayern энергосистемы турция отзывы клиентов, манавгат газипаша солнечные панели батарея установка"
    },
    systeme: {
      title: "Немецкая Система 4-в-1 | Солнечные + Тепловой Насос + Климат + Батарея | 089 Bayern",
      description: "089 Bayern 4-in-1 German System: Фотовольтаика, тепловой насос, кондиционер Samsung и литиевая батарея в одной системе. Монтаж в Анталии, Алании, Кемере. 10 лет гарантии.",
      keywords: "система 4 в 1 солнечные панели тепловой насос климат батарея, анталия вилла гибридная энергосистема немецкая инженерия, vaillant тепловой насос samsung интеграция единая система, солнечная энергия тепловой насос комбинированная умная система, немецкие стандарты DIN энергосистема 10 лет гарантии, фотовольтаика солнечная панель инвертор батарея умный дом, пакет энергии 4 в 1 анталия алания кемер установка, автономная энергосистема независимая от сети вилла средиземноморье"
    },
    vorteile: {
      title: "10 Месяцев Бесплатной Энергии | Преимущества Солнечных Панелей Анталия | 089 Bayern",
      description: "С 300+ солнечными днями на Средиземноморье - 10 месяцев бесплатного электричества и отопления. До 70% экономии в Анталии, Алании, Сиде. Окупаемость 4-6 лет.",
      keywords: "анталия солнечная энергия годовая экономия расчёт сумма, 300 солнечных дней средиземноморье бесплатное электричество, окупаемость солнечных панелей 4 года турция инвестиции, энергетическая независимость виллы автономная жизнь, тепловой насос бесплатное отопление зимой анталия, солнечная энергия увеличение стоимости недвижимости 15 процентов, экономия энергии ежемесячный счёт за электричество нулевой, samsung кондиционер бесплатное охлаждение лето средиземноморье"
    },
    rechner: {
      title: "Калькулятор Экономии | Стоимость Солнечных Панелей Анталия | 089 Bayern",
      description: "Персональный расчёт экономии для Анталии, Алании, Кемера, Сиде. Стоимость солнечных панелей и теплового насоса по размеру виллы. Бесплатное предложение.",
      keywords: "калькулятор цен солнечных панелей анталия вилла м2, калькулятор экономии тепловой насос кондиционер стоимость, установка солнечных панелей стоимость окупаемость расчёт, размер виллы система 4 в 1 ценовое предложение, анталия алания кемер расчёт энергии бесплатно, солнечные панели сколько квт нужно для виллы, ежемесячная экономия электричества солнечные панели, бесплатный осмотр ценовое предложение 089 bayern энергия"
    },
    faq: {
      title: "Частые Вопросы | Солнечные Панели и Тепловой Насос | 089 Bayern Анталия",
      description: "20 самых частых вопросов о солнечных панелях, тепловых насосах, накопителях энергии и системе 089 Bayern 4-in-1 в Анталии.",
      keywords: "установка солнечных панелей сколько дней анталия вилла, тепловой насос как работает зимой эффективность вопрос, солнечная система обслуживание стоимость годовая сколько, система 4 в 1 цена сколько стоит 2026 турция, гарантия солнечных панелей страховка что покрывает, батарея хранения сколько лет служит литий ионная, анталия солнечные панели разрешение лицензия процесс, vaillant тепловой насос samsung авторизованный сервис"
    },
    "ueber-uns": {
      title: "О Нас | Немецкое Качество Энергосистем в Турции | 089 Bayern Анталия",
      description: "089 Bayern Турция: С 2018 года офис в Анталии. Немецкое качество для Анталии, Алании и Средиземноморья. 500+ довольных семей, 10 лет гарантии.",
      keywords: "089 bayern турция анталия офис энергетическая компания, анталия немецкое качество энергосистемы команда экспертов, далибор бакмаз мустафа сакар энергетические эксперты, 500 семей солнечные панели тепловой насос проекты, немецкая инженерия средиземноморье установка энергосистем, с 2018 года энергетические решения анталия алания, немецкие стандарты DIN сертифицированная установка, 089 bayern удовлетворённость клиентов отзывы турция"
    },
    team: {
      title: "Наша Команда | Немецко-Турецкие Энергетические Эксперты | 089 Bayern",
      description: "Команда 089 Bayern: Под руководством Далибора Бакмаза и Мустафы Сакара. Немецкое инженерное качество в Анталии, Алании, Мугле.",
      keywords: "команда 089 bayern энергетические консультанты анталия, мустафа сакар генеральный директор энергетический эксперт, далибор бакмаз основатель немецкий инженер биография, профессиональная команда монтажа солнечных панелей, сертифицированные техники vaillant тепловой насос турция, samsung авторизованные специалисты по установке, энергетическое консультирование бесплатный осмотр вилла, немецко-турецкая инженерная команда солнечная энергия"
    },
    legal: {
      title: "Правовая Информация | 089 Bayern Энергосистемы",
      description: "Правовые политики 089 Bayern: Политика конфиденциальности, политика cookies, условия использования.",
      keywords: "089 bayern защита персональных данных политика, политика конфиденциальности использование cookies, условия использования дистанционная продажа договор, право отказа предварительная информация юридические права, гарантийные условия энергосистемы детали положения, 089 bayern контакт жалоба обратная связь обращение, обработка данных уведомление электронное сообщение, права потребителей договор установки энергосистемы"
    },
    "installation-antalya": {
      title: "Установка Энергосистемы 4-в-1 Анталия | Солнечные Панели и Тепловой Насос | 089 Bayern",
      description: "Профессиональная установка энергосистемы 4-в-1 в Анталии, Кемере, Белеке, Сиде, Алании. Солнечные панели, тепловой насос Vaillant, кондиционер Samsung и аккумуляторное хранение. Немецкое качество, 10 лет гарантии.",
      keywords: "анталия кемер белек сиде солнечные панели установка, анталия центр вилла крыша солнечная панель монтаж цены, vaillant тепловой насос профессиональная установка анталия, samsung кондиционер монтаж средиземноморские виллы, система 4 в 1 анталия 10 лет гарантии немецкое качество, анталия лара кунду дошемеалты солнечная энергия установка, солнечная панель тепловой насос кондиционер батарея монтаж, анталия регион бесплатный осмотр энергоанализ услуга"
    },
    "installation-ankara": {
      title: "Установка Энергосистемы 4-в-1 Анкара | Солнечные Панели и Тепловой Насос | 089 Bayern",
      description: "Профессиональная установка энергосистемы 4-в-1 в Анкаре и окрестностях. Солнечные панели, тепловой насос Vaillant, кондиционер Samsung и аккумуляторное хранение. Немецкое качество, 10 лет гарантии. Чанкая, Кечиорен, Йенимахалле.",
      keywords: "анкара установка солнечных панелей чанкая кечиорен вилла, анкара вилла тепловой насос монтаж зима эффективность, система 4 в 1 анкара столица немецкая инженерия, солнечные панели анкара континентальный климат производительность, vaillant тепловой насос анкара центр установка обслуживание, samsung кондиционер батарея анкара решения для виллы, анкара этимесгут синджан солнечная энергия установка, анкара регион бесплатный осмотр анализ экономии энергии"
    },
    "installation-alanya": {
      title: "Установка Энергосистемы 4-в-1 Аланья | Солнечные Панели и Тепловой Насос | 089 Bayern Филиал",
      description: "Профессиональная установка энергосистемы 4-в-1 в Аланье и окрестностях. Филиал 089 Bayern Аланья. Солнечные панели, тепловой насос Vaillant, кондиционер Samsung и аккумуляторное хранение. Махмутлар, Кестель, Оба.",
      keywords: "алания махмутлар кестель оба солнечные панели установка, алания вилла солнечная панель монтаж цены 089 bayern, vaillant тепловой насос установка алания прибрежные виллы, samsung кондиционер алания жаркий климат охлаждение, система 4 в 1 алания 300 солнечных дней преимущество, алания газипаша конаклы солнечная энергия батарея, алания регион бесплатный осмотр энергоанализ услуга, средиземноморская вилла солнечная панель тепловой насос"
    },
    standorte: {
      title: "Наши Регионы Обслуживания | Турция, Хорватия, Греция | 089 Bayern",
      description: "Регионы установки энергосистем 089 Bayern: Анталия, Алания, Мугла, Измир, Сплит, Далмация. Установка солнечных панелей, тепловых насосов, кондиционеров в Средиземноморье и Эгейском регионе.",
      keywords: "089 bayern регионы обслуживания турция хорватия греция, анталия алания мугла измир установка солнечных панелей, фетхие бодрум мармарис энергосистема монтаж сервис, средиземноморье эгейское побережье энергетические решения, сплит далмация хорватия солнечная энергия установка, турция вилла энергетическое консультирование бесплатно, мерсин адана южное побережье энергосистема установка, 089 bayern расширение регионов план 2026 цели развития"
    },
    "gunes-paneli": {
      title: "Установка Солнечных Панелей Анталия | Монтаж на Крышу Виллы | 089 Bayern",
      description: "Профессиональная установка солнечных панелей на крыши вилл в Анталии, Алании, Кемере, Сиде. Фотовольтаические системы 6-12 кВт, панели tier-1, немецкое качество монтажа. 300+ солнечных дней, 70% экономии. 10 лет гарантии.",
      keywords: "установка солнечных панелей анталия вилла крыша цены, монтаж солнечных панелей алания кемер белек средиземноморье, фотовольтаическая система 6 квт 10 квт 12 квт вилла, цены солнечных панелей 2026 турция анталия регион, крыша виллы солнечные панели сколько квт расчёт, tier 1 марки солнечных панелей монокристаллические, солнечная энергия счёт за электричество нулевой, 089 bayern установка солнечных панелей отзывы анталия"
    },
    "isi-pompasi": {
      title: "Установка Теплового Насоса Vaillant Анталия | Отопление Охлаждение Виллы | 089 Bayern",
      description: "Установка теплового насоса Vaillant в Анталии и Средиземноморском регионе. Воздушный тепловой насос для отопления зимой и охлаждения летом. КПД COP 5.0, 60% экономии. Авторизованный сервис, 10 лет гарантии.",
      keywords: "vaillant тепловой насос установка анталия вилла цены, воздушный тепловой насос средиземноморский климат кпд, тепловой насос отопление охлаждение виллы турция, vaillant arotherm тепловой насос cop производительность, тепловой насос потребление электричества ежемесячная стоимость, монтаж теплового насоса алания кемер белек сиде, тёплый пол интеграция тепловой насос средиземноморская вилла, 089 bayern vaillant авторизованный дилер сервис анталия"
    },
    klima: {
      title: "Установка Кондиционера Samsung Анталия | WindFree Система для Виллы | 089 Bayern",
      description: "Установка кондиционера Samsung WindFree в Анталии и средиземноморских виллах. Тихое и энергоэффективное охлаждение-отопление. Мульти-сплит система, умный дом. Авторизованный дилер Samsung, 5 лет гарантии.",
      keywords: "samsung кондиционер установка анталия вилла windfree, samsung windfree тихое охлаждение вилла средиземноморье, мульти сплит система монтаж виллы анталия алания, samsung кондиционер цены 2026 энергоэффективный инвертор, кондиционер для виллы сколько btu нужно расчёт, samsung кондиционер умный дом wifi дистанционное управление, монтаж кондиционера профессиональная установка анталия, 089 bayern samsung авторизованный дилер сервис турция"
    },
    "enerji-depolama": {
      title: "Система Хранения Энергии Анталия | Литий-Ионная Батарея для Виллы | 089 Bayern",
      description: "Установка литий-ионной системы хранения энергии в Анталии и Средиземноморском регионе. Зарядка от солнечной энергии, ночное использование. Ёмкость 10-15 кВтч, 6000+ циклов зарядки. Бесперебойная энергия, 10 лет гарантии.",
      keywords: "система хранения энергии батарея анталия вилла установка, литий ионная батарея интеграция солнечных панелей цены, домашняя система хранения 10 квтч 15 квтч ёмкость, солнечная энергия ночное использование батарея хранение, samsung sdi батарея хранения авторизованный дилер турция, автономная энергия батарея решение для виллы off grid, система хранения энергии цены 2026 турция анталия, 089 bayern установка батарей хранения отзывы средиземноморье"
    }
  },
  uk: {
    siteName: "089 Bayern Енергосистеми",
    home: {
      title: "089 Bayern | Сонячні Панелі та Тепловий Насос Анталія | Німецька Система 4-в-1",
      description: "Сонячні панелі, теплові насоси, кондиціонери та накопичувачі енергії в Анталії, Аланії, Кемері, Белеку, Сіде, Манавгаті. Німецька якість з економією до 70%. Безкоштовна консультація: +90 507 183 2036",
      keywords: "сонячні панелі анталія вілла встановлення ціни 2026, тепловий насос кондиціонер аланія монтаж система, кемер белек сіде сонячна енергія системи середземномор'я, 4 в 1 енергетичне рішення німецька якість анталія, vaillant тепловий насос samsung авторизований дилер, встановлення сонячних панелей на дах вілли вартість, 089 bayern енергосистеми туреччина відгуки клієнтів, манавгат газіпаша сонячні панелі батарея встановлення"
    },
    systeme: {
      title: "Німецька Система 4-в-1 | Сонячні + Тепловий Насос + Клімат + Батарея | 089 Bayern",
      description: "089 Bayern 4-in-1 German System: Фотовольтаїка, тепловий насос, кондиціонер Samsung та літієва батарея в одній системі. Монтаж в Анталії, Аланії, Кемері. 10 років гарантії.",
      keywords: "система 4 в 1 сонячні панелі тепловий насос клімат батарея, анталія вілла гібридна енергосистема німецька інженерія, vaillant тепловий насос samsung інтеграція єдина система, сонячна енергія тепловий насос комбінована розумна система, німецькі стандарти DIN енергосистема 10 років гарантії, фотовольтаїка сонячна панель інвертор батарея розумний дім, пакет енергії 4 в 1 анталія аланія кемер встановлення, автономна енергосистема незалежна від мережі вілла"
    },
    vorteile: {
      title: "10 Місяців Безкоштовної Енергії | Переваги Сонячних Панелей Анталія | 089 Bayern",
      description: "З 300+ сонячними днями на Середземномор'ї - 10 місяців безкоштовної електрики та опалення. До 70% економії в Анталії, Аланії, Сіде. Окупність 4-6 років.",
      keywords: "анталія сонячна енергія річна економія розрахунок сума, 300 сонячних днів середземномор'я безкоштовна електрика, окупність сонячних панелей 4 роки туреччина інвестиції, енергетична незалежність вілли автономне життя середземномор'я, тепловий насос безкоштовне опалення взимку анталія, сонячна енергія збільшення вартості нерухомості 15 відсотків, економія енергії щомісячний рахунок за електрику нульовий, samsung кондиціонер безкоштовне охолодження літо клімат"
    },
    rechner: {
      title: "Калькулятор Економії | Вартість Сонячних Панелей Анталія | 089 Bayern",
      description: "Персональний розрахунок економії для Анталії, Аланії, Кемера, Сіде. Вартість сонячних панелей та теплового насоса за розміром вілли. Безкоштовна пропозиція.",
      keywords: "калькулятор цін сонячних панелей анталія вілла м2, калькулятор економії тепловий насос кондиціонер вартість, встановлення сонячних панелей вартість окупність розрахунок, розмір вілли система 4 в 1 цінова пропозиція, анталія аланія кемер розрахунок енергії безкоштовно, сонячні панелі скільки квт потрібно для вілли, щомісячна економія електрики сонячні панелі розрахунок, безкоштовний огляд цінова пропозиція 089 bayern енергія"
    },
    faq: {
      title: "Часті Питання | Сонячні Панелі та Тепловий Насос | 089 Bayern Анталія",
      description: "20 найчастіших питань про сонячні панелі, теплові насоси, накопичувачі енергії та систему 089 Bayern 4-in-1 в Анталії.",
      keywords: "встановлення сонячних панелей скільки днів анталія вілла, тепловий насос як працює взимку ефективність питання, сонячна система обслуговування вартість річна скільки, система 4 в 1 ціна скільки коштує 2026 туреччина, гарантія сонячних панелей страхування що покриває, батарея зберігання скільки років служить літій іонна, анталія сонячні панелі дозвіл ліцензія процес, vaillant тепловий насос samsung авторизований сервіс"
    },
    "ueber-uns": {
      title: "Про Нас | Німецька Якість Енергосистем у Туреччині | 089 Bayern Анталія",
      description: "089 Bayern Туреччина: З 2018 року офіс в Анталії. Німецька якість для Анталії, Аланії та Середземномор'я. 500+ задоволених родин, 10 років гарантії.",
      keywords: "089 bayern туреччина анталія офіс енергетична компанія, анталія німецька якість енергосистеми команда експертів, далібор бакмаз мустафа сакар енергетичні експерти, 500 родин сонячні панелі тепловий насос проекти, німецька інженерія середземномор'я встановлення енергосистем, з 2018 року енергетичні рішення анталія аланія, німецькі стандарти DIN сертифіковане встановлення, 089 bayern задоволеність клієнтів відгуки туреччина"
    },
    team: {
      title: "Наша Команда | Німецько-Турецькі Енергетичні Експерти | 089 Bayern",
      description: "Команда 089 Bayern: Під керівництвом Далібора Бакмаза та Мустафи Сакара. Німецька інженерна якість в Анталії, Аланії, Муглі.",
      keywords: "команда 089 bayern енергетичні консультанти анталія, мустафа сакар генеральний директор енергетичний експерт, далібор бакмаз засновник німецький інженер біографія, професійна команда монтажу сонячних панелей середземномор'я, сертифіковані техніки vaillant тепловий насос туреччина, samsung авторизовані спеціалісти з встановлення, енергетичне консультування безкоштовний огляд вілла, німецько-турецька інженерна команда сонячна енергія"
    },
    legal: {
      title: "Правова Інформація | 089 Bayern Енергосистеми",
      description: "Правові політики 089 Bayern: Політика конфіденційності, політика cookies, умови використання.",
      keywords: "089 bayern захист персональних даних політика, політика конфіденційності використання cookies інформація, умови використання дистанційний продаж договір, право відмови попередня інформація юридичні права, гарантійні умови енергосистеми деталі положення, 089 bayern контакт скарга зворотний зв'язок звернення, обробка даних повідомлення електронне повідомлення, права споживачів договір встановлення енергосистеми"
    },
    "installation-antalya": {
      title: "Встановлення Енергосистеми 4-в-1 Анталія | Сонячні Панелі та Тепловий Насос | 089 Bayern",
      description: "Професійне встановлення енергосистеми 4-в-1 в Анталії, Кемері, Белеку, Сіде, Аланії. Сонячні панелі, тепловий насос Vaillant, кондиціонер Samsung та акумуляторне зберігання. Німецька якість, 10 років гарантії.",
      keywords: "анталія кемер белек сіде сонячні панелі встановлення, анталія центр вілла дах сонячна панель монтаж ціни, vaillant тепловий насос професійне встановлення анталія, samsung кондиціонер монтаж середземноморські вілли, система 4 в 1 анталія 10 років гарантії німецька якість, анталія лара кунду дошемеалти сонячна енергія встановлення, сонячна панель тепловий насос кондиціонер батарея монтаж, анталія регіон безкоштовний огляд енергоаналіз послуга"
    },
    "installation-ankara": {
      title: "Встановлення Енергосистеми 4-в-1 Анкара | Сонячні Панелі та Тепловий Насос | 089 Bayern",
      description: "Професійне встановлення енергосистеми 4-в-1 в Анкарі та околицях. Сонячні панелі, тепловий насос Vaillant, кондиціонер Samsung та акумуляторне зберігання. Німецька якість, 10 років гарантії. Чанкая, Кечіорен, Єнімахалле.",
      keywords: "анкара встановлення сонячних панелей чанкая кечіорен вілла, анкара вілла тепловий насос монтаж зима ефективність, система 4 в 1 анкара столиця німецька інженерія, сонячні панелі анкара континентальний клімат продуктивність, vaillant тепловий насос анкара центр встановлення обслуговування, samsung кондиціонер батарея анкара рішення для вілли, анкара етімесгут сінджан сонячна енергія встановлення, анкара регіон безкоштовний огляд аналіз економії енергії"
    },
    "installation-alanya": {
      title: "Встановлення Енергосистеми 4-в-1 Аланья | Сонячні Панелі та Тепловий Насос | 089 Bayern Філія",
      description: "Професійне встановлення енергосистеми 4-в-1 в Аланії та околицях. Філія 089 Bayern Аланья. Сонячні панелі, тепловий насос Vaillant, кондиціонер Samsung та акумуляторне зберігання. Махмутлар, Кестель, Оба.",
      keywords: "аланія махмутлар кестель оба сонячні панелі встановлення, аланія вілла сонячна панель монтаж ціни 089 bayern, vaillant тепловий насос встановлення аланія прибережні вілли, samsung кондиціонер аланія спекотний клімат охолодження, система 4 в 1 аланія 300 сонячних днів перевага, аланія газіпаша конакли сонячна енергія батарея, аланія регіон безкоштовний огляд енергоаналіз послуга, середземноморська вілла сонячна панель тепловий насос"
    },
    standorte: {
      title: "Наші Регіони Обслуговування | Туреччина, Хорватія, Греція | 089 Bayern",
      description: "Регіони встановлення енергосистем 089 Bayern: Анталія, Аланія, Мугла, Ізмір, Спліт, Далмація. Встановлення сонячних панелей, теплових насосів, кондиціонерів у Середземномор'ї та Егейському регіоні.",
      keywords: "089 bayern регіони обслуговування туреччина хорватія греція, анталія аланія мугла ізмір встановлення сонячних панелей, фетхіє бодрум мармаріс енергосистема монтаж сервіс, середземномор'я егейське узбережжя енергетичні рішення, спліт далмація хорватія сонячна енергія встановлення, туреччина вілла енергетичне консультування безкоштовно, мерсін адана південне узбережжя енергосистема встановлення, 089 bayern розширення регіонів план 2026 цілі розвитку"
    },
    "gunes-paneli": {
      title: "Встановлення Сонячних Панелей Анталія | Монтаж на Дах Вілли | 089 Bayern",
      description: "Професійне встановлення сонячних панелей на дахи вілл в Анталії, Аланії, Кемері, Сіде. Фотовольтаїчні системи 6-12 кВт, панелі tier-1, німецька якість монтажу. 300+ сонячних днів, 70% економії. 10 років гарантії.",
      keywords: "встановлення сонячних панелей анталія вілла дах ціни, монтаж сонячних панелей аланія кемер белек середземномор'я, фотовольтаїчна система 6 квт 10 квт 12 квт вілла, ціни сонячних панелей 2026 туреччина анталія регіон, дах вілли сонячні панелі скільки квт розрахунок, tier 1 марки сонячних панелей монокристалічні, сонячна енергія рахунок за електрику нульовий, 089 bayern встановлення сонячних панелей відгуки анталія"
    },
    "isi-pompasi": {
      title: "Встановлення Теплового Насоса Vaillant Анталія | Опалення Охолодження Вілли | 089 Bayern",
      description: "Встановлення теплового насоса Vaillant в Анталії та Середземноморському регіоні. Повітряний тепловий насос для опалення взимку та охолодження влітку. ККД COP 5.0, 60% економії. Авторизований сервіс, 10 років гарантії.",
      keywords: "vaillant тепловий насос встановлення анталія вілла ціни, повітряний тепловий насос середземноморський клімат ккд, тепловий насос опалення охолодження вілли туреччина, vaillant arotherm тепловий насос cop продуктивність, тепловий насос споживання електрики щомісячна вартість, монтаж теплового насоса аланія кемер белек сіде, тепла підлога інтеграція тепловий насос середземноморська вілла, 089 bayern vaillant авторизований дилер сервіс анталія"
    },
    klima: {
      title: "Встановлення Кондиціонера Samsung Анталія | WindFree Система для Вілли | 089 Bayern",
      description: "Встановлення кондиціонера Samsung WindFree в Анталії та середземноморських віллах. Тихе та енергоефективне охолодження-опалення. Мульти-спліт система, розумний дім. Авторизований дилер Samsung, 5 років гарантії.",
      keywords: "samsung кондиціонер встановлення анталія вілла windfree, samsung windfree тихе охолодження вілла середземномор'я, мульті спліт система монтаж вілли анталія аланія, samsung кондиціонер ціни 2026 енергоефективний інвертор, кондиціонер для вілли скільки btu потрібно розрахунок, samsung кондиціонер розумний дім wifi дистанційне керування, монтаж кондиціонера професійне встановлення анталія, 089 bayern samsung авторизований дилер сервіс туреччина"
    },
    "enerji-depolama": {
      title: "Система Зберігання Енергії Анталія | Літій-Іонна Батарея для Вілли | 089 Bayern",
      description: "Встановлення літій-іонної системи зберігання енергії в Анталії та Середземноморському регіоні. Зарядка від сонячної енергії, нічне використання. Ємність 10-15 кВтг, 6000+ циклів зарядки. Безперебійна енергія, 10 років гарантії.",
      keywords: "система зберігання енергії батарея анталія вілла встановлення, літій іонна батарея інтеграція сонячних панелей ціни, домашня система зберігання 10 квтг 15 квтг ємність, сонячна енергія нічне використання батарея зберігання, samsung sdi батарея зберігання авторизований дилер туреччина, автономна енергія батарея рішення для вілли off grid, система зберігання енергії ціни 2026 туреччина анталія, 089 bayern встановлення батарей зберігання відгуки"
    }
  },
  hr: {
    siteName: "089 Bayern Energetski Sustavi",
    home: {
      title: "089 Bayern | Solarni Paneli i Toplinska Pumpa Antalya | Njemački Sustav 4-u-1",
      description: "Solarni paneli, toplinske pumpe, klima i pohrana energije u Antalyi, Alanyi, Kemeru, Beleku, Sideu, Manavgatu. Njemačka kvaliteta s uštedom do 70%. Besplatna konzultacija: +90 507 183 2036",
      keywords: "solarni paneli antalya vila instalacija cijene 2026, toplinska pumpa klima sustav alanya montaža, kemer belek side solarna energija sustavi mediteran, 4 u 1 energetsko rješenje njemačka kvaliteta antalya, vaillant toplinska pumpa samsung ovlašteni zastupnik, instalacija solarnih panela na krov vile troškovi, 089 bayern energetski sustavi turska recenzije kupaca, manavgat gazipasa solarni paneli baterija instalacija"
    },
    systeme: {
      title: "Njemački Sustav 4-u-1 | Solar + Toplinska Pumpa + Klima + Baterija | 089 Bayern",
      description: "089 Bayern 4-in-1 German System: Fotonapon, toplinska pumpa, Samsung klima i litijska baterija u jednom sustavu. Instalacija u Antalyi, Alanyi, Kemeru. 10 godina jamstva.",
      keywords: "sustav 4 u 1 solarni paneli toplinska pumpa klima baterija, antalya vila hibridni energetski sustav njemačko inženjerstvo, vaillant toplinska pumpa samsung klima integracija sustav, solarna energija toplinska pumpa kombinirani pametni sustav, njemački DIN standardi energetski sustav 10 godina jamstva, fotonapon solarni panel inverter baterija pametni dom, paket energije 4 u 1 antalya alanya kemer instalacija, autonomni energetski sustav neovisan o mreži vila mediteran"
    },
    vorteile: {
      title: "10 Mjeseci Besplatne Energije | Prednosti Solarnih Panela Antalya | 089 Bayern",
      description: "S 300+ sunčanih dana na Mediteranu - 10 mjeseci besplatne struje i grijanja. Do 70% uštede u Antalyi, Alanyi, Sideu. Povrat investicije 4-6 godina.",
      keywords: "antalya solarna energija godišnja ušteda izračun iznos, 300 sunčanih dana mediteran besplatna struja grijanje, povrat investicije solarni paneli 4 godine turska, energetska neovisnost vile autonomni život mediteran, toplinska pumpa besplatno grijanje zimi antalya turska, solarna energija povećanje vrijednosti nekretnine 15 posto, ušteda energije mjesečni račun za struju blizu nule, samsung klima besplatno hlađenje ljeto mediteranska klima"
    },
    rechner: {
      title: "Kalkulator Uštede | Cijena Solarnih Panela Antalya | 089 Bayern",
      description: "Personalizirani izračun uštede za Antalyu, Alanyu, Kemer, Side. Cijena solarnih panela i toplinske pumpe prema veličini vile. Besplatna ponuda.",
      keywords: "kalkulator cijena solarnih panela antalya vila m2, kalkulator uštede toplinska pumpa klima baterija trošak, instalacija solarnih panela trošak povrat izračun, veličina vile sustav 4 u 1 cjenovna ponuda kalkulacija, antalya alanya kemer regija izračun energije besplatno, solarni paneli koliko kwp potrebno za vilu izračun, mjesečna ušteda električne energije solarni paneli, besplatni pregled cjenovna ponuda 089 bayern energija"
    },
    faq: {
      title: "Česta Pitanja | Solarni Paneli i Toplinska Pumpa | 089 Bayern Antalya",
      description: "20 najčešćih pitanja o solarnim panelima, toplinskim pumpama, pohrani energije i sustavu 089 Bayern 4-in-1 u Antalyi.",
      keywords: "instalacija solarnih panela koliko dana antalya vila, toplinska pumpa kako radi zimi učinkovitost pitanje, solarni sustav troškovi održavanja godišnje koliko, sustav 4 u 1 cijena koliko košta 2026 turska, jamstvo solarnih panela osiguranje što pokriva detalji, baterija pohrana koliko godina traje litij ionska, antalya solarni paneli dozvola licenca proces kako, vaillant toplinska pumpa samsung klima ovlašteni servis"
    },
    "ueber-uns": {
      title: "O Nama | Njemačka Kvaliteta Energetskih Sustava u Turskoj | 089 Bayern Antalya",
      description: "089 Bayern Turska: Od 2018. sjedište u Antalyi. Njemačka kvaliteta za Antalyu, Alanyu i Mediteran. 500+ zadovoljnih obitelji, 10 godina jamstva.",
      keywords: "089 bayern turska antalya sjedište energetska tvrtka, antalya njemačka kvaliteta energetski sustavi tim stručnjaka, dalibor bakmaz mustafa sakar energetski stručnjaci biografija, 500 obitelji solarni paneli toplinska pumpa referentni projekti, njemačko inženjerstvo mediteran regija instalacija energije, od 2018 vila energetska rješenja antalya alanya turska, njemački DIN standardi certificirana instalacija sustava, 089 bayern zadovoljstvo kupaca reference recenzije turska"
    },
    team: {
      title: "Naš Tim | Njemačko-Turski Energetski Stručnjaci | 089 Bayern",
      description: "Tim 089 Bayern: Pod vodstvom Dalibora Bakmaza i Mustafe Sakara. Njemačka inženjerska kvaliteta u Antalyi, Alanyi, Mugli.",
      keywords: "089 bayern tim energetski savjetnici antalya alanya, mustafa sakar direktor njemačko-turski energetski stručnjak, dalibor bakmaz osnivač njemački energetski inženjer profil, profesionalni tim za montažu solarnih panela mediteran, certificirani vaillant toplinska pumpa tehničari turska, samsung klima ovlašteni stručnjaci za instalaciju, energetsko savjetovanje besplatni pregled vila usluga, njemačko-turski inženjerski tim solarna energija ekspertiza"
    },
    legal: {
      title: "Pravne Informacije | 089 Bayern Energetski Sustavi",
      description: "Pravne politike 089 Bayern: Politika privatnosti, politika kolačića, uvjeti korištenja.",
      keywords: "089 bayern zaštita osobnih podataka politika privatnosti, politika privatnosti korištenje kolačića informacije, uvjeti korištenja ugovor o prodaji na daljinu, pravo odustajanja prethodno informiranje zakonska prava, jamstveni uvjeti energetski sustav detalji odredbe, 089 bayern kontakt pritužba povratna informacija prijava, obrada podataka obavijest elektronička komunikacija, prava potrošača ugovor o instalaciji energetskog sustava"
    },
    "installation-antalya": {
      title: "Instalacija Energetskog Sustava 4-u-1 Antalya | Solarni Paneli i Toplinska Pumpa | 089 Bayern",
      description: "Profesionalna instalacija energetskog sustava 4-u-1 u Antalyi, Kemeru, Beleku, Sideu, Alanyi. Solarni paneli, Vaillant toplinska pumpa, Samsung klima i pohrana baterije. Njemačka kvaliteta, 10 godina jamstva.",
      keywords: "antalya kemer belek side solarni paneli instalacija usluga, antalya centar vila krov solarni panel montaža cijene, vaillant toplinska pumpa profesionalna instalacija antalya, samsung klima sustav montaža mediteranske vile regija, sustav 4 u 1 antalya 10 godina jamstva njemačka kvaliteta, antalya lara kundu dosemealti solarna energija instalacija, solarni panel toplinska pumpa klima baterija komplet montaža, antalya regija besplatni pregled i energetska analiza usluga"
    },
    "installation-ankara": {
      title: "Instalacija Energetskog Sustava 4-u-1 Ankara | Solarni Paneli i Toplinska Pumpa | 089 Bayern",
      description: "Profesionalna instalacija energetskog sustava 4-u-1 u Ankari i okolici. Solarni paneli, Vaillant toplinska pumpa, Samsung klima i pohrana baterije. Njemačka kvaliteta, 10 godina jamstva. Çankaya, Keçiören, Yenimahalle.",
      keywords: "ankara instalacija solarnih panela cankaya kecioren vila, ankara vila toplinska pumpa montaža zima učinkovitost, sustav 4 u 1 ankara glavni grad njemačka kvaliteta, solarni paneli ankara kontinentalna klima performanse hladnoća, vaillant toplinska pumpa ankara centar instalacija održavanje, samsung klima baterija pohrana ankara vila rješenja, ankara etimesgut sincan solarna energija sustav instalacija, ankara regija besplatni pregled analiza uštede energije"
    },
    "installation-alanya": {
      title: "Instalacija Energetskog Sustava 4-u-1 Alanya | Solarni Paneli i Toplinska Pumpa | 089 Bayern Podružnica",
      description: "Profesionalna instalacija energetskog sustava 4-u-1 u Alanyi i okolici. 089 Bayern podružnica Alanya. Solarni paneli, Vaillant toplinska pumpa, Samsung klima i pohrana baterije. Mahmutlar, Kestel, Oba.",
      keywords: "alanya mahmutlar kestel oba solarni paneli instalacija, alanya vila solarni panel montaža cijene 089 bayern, vaillant toplinska pumpa instalacija alanya obalne vile, samsung klima sustav alanya vruća klima hlađenje rješenje, sustav 4 u 1 alanya 300 sunčanih dana prednost, alanya gazipasa konakli solarna energija baterija pohrana, alanya regija besplatni pregled i energetska analiza, mediteranska obalna vila solarni panel toplinska pumpa"
    },
    standorte: {
      title: "Naše Servisne Regije | Turska, Hrvatska, Grčka | 089 Bayern",
      description: "Regije instalacije energetskih sustava 089 Bayern: Antalya, Alanya, Muğla, Izmir, Split, Dalmacija. Instalacija solarnih panela, toplinskih pumpi, klima na Mediteranu i Egeju.",
      keywords: "089 bayern servisne regije turska hrvatska grčka, antalya alanya mugla izmir instalacija solarnih panela, fethiye bodrum marmaris energetski sustav montaža servis, mediteran egej obalna regija vila energetska rješenja, split dalmacija hrvatska solarna energija sustav instalacija, turska vila energetsko savjetovanje besplatni pregled, mersin adana južna obala energetski sustav instalacija, 089 bayern nova regija ekspanzija plan 2026 ciljevi"
    },
    "gunes-paneli": {
      title: "Instalacija Solarnih Panela Antalya | Montaža na Krov Vile | 089 Bayern",
      description: "Profesionalna instalacija solarnih panela na krovove vila u Antalyi, Alanyi, Kemeru, Sideu. Fotonaponski sustavi 6-12 kWp, tier-1 paneli, njemačka kvaliteta montaže. 300+ sunčanih dana, 70% uštede. 10 godina jamstva.",
      keywords: "instalacija solarnih panela antalya vila krov cijene, montaža solarnih panela alanya kemer belek mediteran, fotonaponski sustav 6 kwp 10 kwp 12 kwp vila krov, cijene solarnih panela 2026 turska antalya regija, krov vile solarni paneli koliko kwp izračun potreba, tier 1 marke solarnih panela monokristalni performanse, solarna energija račun za struju nula kako funkcionira, 089 bayern instalacija solarnih panela reference antalya"
    },
    "isi-pompasi": {
      title: "Instalacija Toplinske Pumpe Vaillant Antalya | Grijanje Hlađenje Vile | 089 Bayern",
      description: "Instalacija toplinske pumpe Vaillant u Antalyi i mediteranskoj regiji. Zračna toplinska pumpa za grijanje zimi i hlađenje ljeti. COP 5.0 učinkovitost, 60% uštede. Ovlašteni servis, 10 godina jamstva.",
      keywords: "vaillant toplinska pumpa instalacija antalya vila cijene, zračna toplinska pumpa mediteranska klima učinkovitost, toplinska pumpa grijanje hlađenje vile turska troškovi, vaillant arotherm toplinska pumpa cop performanse ocjena, toplinska pumpa potrošnja električne energije mjesečni trošak, montaža toplinske pumpe alanya kemer belek side vila, podno grijanje integracija toplinska pumpa mediteranska vila, 089 bayern vaillant ovlašteni zastupnik servis antalya"
    },
    klima: {
      title: "Instalacija Samsung Klima Uređaja Antalya | WindFree Klima Sustav Vila | 089 Bayern",
      description: "Instalacija Samsung WindFree klima sustava u Antalyi i mediteranskim vilama. Tihi i energetski učinkoviti hlađenje-grijanje. Multi-split sustav, pametni dom integracija. Ovlašteni Samsung zastupnik, 5 godina jamstva.",
      keywords: "samsung klima instalacija antalya vila windfree sustav, samsung windfree klima tiho hlađenje vila mediteran, multi split klima sustav montaža vila antalya alanya, samsung klima cijene 2026 energetski učinkovit inverter, vila klima sustav koliko btu potrebno izračun vodič, samsung klima pametni dom wifi daljinsko upravljanje, montaža klima profesionalna instalacija antalya kemer, 089 bayern samsung ovlašteni zastupnik klima servis turska"
    },
    "enerji-depolama": {
      title: "Sustav Pohrane Energije Antalya | Litij-Ionska Baterija Vila | 089 Bayern",
      description: "Instalacija litij-ionskog sustava pohrane energije u Antalyi i mediteranskoj regiji. Punjenje solarnom energijom, noćno korištenje. Kapacitet 10-15 kWh, 6000+ ciklusa punjenja. Neprekidna energija, 10 godina jamstva.",
      keywords: "sustav pohrane energije baterija antalya vila instalacija, litij ionska baterija integracija solarnih panela cijene, kućni sustav pohrane baterije 10 kwh 15 kwh kapacitet, solarna energija noćno korištenje baterija pohrana rješenje, samsung sdi baterija pohrana ovlašteni zastupnik turska, autonomna energija baterija rješenje za vilu off grid, sustav pohrane energije cijene 2026 turska antalya, 089 bayern instalacija pohrane baterija reference mediteran"
    }
  },
  ar: {
    siteName: "089 Bayern أنظمة الطاقة",
    home: {
      title: "089 Bayern | الألواح الشمسية ومضخة الحرارة أنطاليا | نظام ألماني 4 في 1",
      description: "الألواح الشمسية، مضخات الحرارة، التكييف وتخزين الطاقة في أنطاليا، ألانيا، كيمير، بيليك، سيدا، مانافغات. جودة ألمانية مع توفير حتى 70%. استشارة مجانية: +90 507 183 2036",
      keywords: "الألواح الشمسية أنطاليا فيلا تركيب أسعار 2026، مضخة حرارة تكييف ألانيا تركيب نظام، كيمير بيليك سيدا طاقة شمسية أنظمة البحر المتوسط، حل طاقة 4 في 1 جودة ألمانية أنطاليا تركيا، vaillant مضخة حرارة samsung وكيل معتمد أنطاليا، تركيب ألواح شمسية سقف فيلا تكلفة حساب، 089 bayern أنظمة الطاقة تركيا آراء العملاء، مانافغات غازي باشا ألواح شمسية بطارية تركيب"
    },
    systeme: {
      title: "نظام ألماني 4 في 1 | شمسي + مضخة حرارة + تكييف + بطارية | 089 Bayern",
      description: "نظام 089 Bayern 4-in-1: الخلايا الكهروضوئية، مضخة الحرارة، تكييف Samsung وبطارية ليثيوم في نظام واحد. التركيب في أنطاليا، ألانيا، كيمير. ضمان 10 سنوات.",
      keywords: "نظام 4 في 1 ألواح شمسية مضخة حرارة تكييف بطارية، أنطاليا فيلا نظام طاقة هجين هندسة ألمانية، vaillant مضخة حرارة samsung تكييف تكامل نظام واحد، طاقة شمسية مضخة حرارة نظام ذكي مشترك تركيا، معايير DIN ألمانية نظام طاقة ضمان 10 سنوات، كهروضوئي لوحة شمسية عاكس بطارية منزل ذكي، حزمة طاقة 4 في 1 أنطاليا ألانيا كيمير تركيب، نظام طاقة مستقل عن الشبكة فيلا البحر المتوسط"
    },
    vorteile: {
      title: "10 أشهر طاقة مجانية | فوائد الألواح الشمسية أنطاليا | 089 Bayern",
      description: "مع 300+ يوم مشمس في البحر المتوسط - 10 أشهر من الكهرباء والتدفئة المجانية. توفير حتى 70% في أنطاليا، ألانيا، سيدا. فترة استرداد 4-6 سنوات.",
      keywords: "أنطاليا طاقة شمسية توفير سنوي حساب المبلغ، 300 يوم مشمس البحر المتوسط كهرباء مجانية تدفئة، استرداد استثمار ألواح شمسية 4 سنوات تركيا، استقلال طاقة فيلا حياة مستقلة عن الشبكة، مضخة حرارة تدفئة مجانية شتاء أنطاليا تركيا، طاقة شمسية زيادة قيمة العقار 15 بالمئة فيلا، توفير طاقة فاتورة كهرباء شهرية قريبة من الصفر، samsung تكييف تبريد مجاني صيف مناخ البحر المتوسط"
    },
    rechner: {
      title: "حاسبة التوفير | تكلفة الألواح الشمسية أنطاليا | 089 Bayern",
      description: "حساب توفير الطاقة المخصص لأنطاليا، ألانيا، كيمير، سيدا. تكلفة الألواح الشمسية ومضخة الحرارة حسب حجم الفيلا. عرض مجاني.",
      keywords: "حاسبة أسعار الألواح الشمسية أنطاليا فيلا متر مربع، حاسبة التوفير مضخة حرارة تكييف بطارية تكلفة، تركيب ألواح شمسية تكلفة فترة استرداد حساب، حجم فيلا نظام 4 في 1 عرض سعر تقدير، أنطاليا ألانيا كيمير منطقة حساب طاقة مجاني، ألواح شمسية كم كيلوواط مطلوب للفيلا حساب، توفير كهرباء شهري كم مع الألواح الشمسية، معاينة مجانية عرض سعر 089 bayern طاقة تركيا"
    },
    faq: {
      title: "الأسئلة الشائعة | الألواح الشمسية ومضخة الحرارة | 089 Bayern أنطاليا",
      description: "أكثر 20 سؤالاً شيوعاً حول الألواح الشمسية، مضخات الحرارة، تخزين الطاقة ونظام 089 Bayern 4-in-1 في أنطاليا.",
      keywords: "تركيب ألواح شمسية كم يوم أنطاليا فيلا سؤال، مضخة حرارة كيف تعمل شتاء كفاءة سؤال شائع، نظام طاقة شمسية تكلفة صيانة سنوية كم، نظام 4 في 1 السعر كم 2026 تركيا فيلا، ضمان ألواح شمسية تأمين ما يغطيه تفاصيل، بطارية تخزين كم سنة تدوم ليثيوم أيون عمر، أنطاليا ألواح شمسية تصريح ترخيص إجراءات كيف، vaillant مضخة حرارة samsung خدمة معتمدة تركيا"
    },
    "ueber-uns": {
      title: "عنا | جودة ألمانية لأنظمة الطاقة في تركيا | 089 Bayern أنطاليا",
      description: "089 Bayern تركيا: مقر في أنطاليا منذ 2018. جودة ألمانية لأنطاليا، ألانيا ومنطقة البحر المتوسط. 500+ عائلة سعيدة، ضمان 10 سنوات.",
      keywords: "089 bayern تركيا أنطاليا مقر شركة طاقة معلومات، أنطاليا جودة ألمانية أنظمة طاقة فريق خبراء، داليبور باكماز مصطفى ساكار خبراء طاقة سيرة ذاتية، 500 عائلة ألواح شمسية مضخة حرارة مشاريع مرجعية، هندسة ألمانية البحر المتوسط منطقة تركيب أنظمة طاقة، منذ 2018 حلول طاقة فيلا أنطاليا ألانيا تركيا، معايير DIN ألمانية تركيب نظام طاقة معتمد، 089 bayern رضا العملاء مراجع تقييمات تركيا"
    },
    team: {
      title: "فريقنا | خبراء الطاقة الألمان-الأتراك | 089 Bayern",
      description: "فريق 089 Bayern: بقيادة داليبور باكماز ومصطفى ساكار. جودة هندسية ألمانية في أنطاليا، ألانيا، موغلا.",
      keywords: "فريق 089 bayern مستشارو طاقة أنطاليا ألانيا، مصطفى ساكار مدير تنفيذي خبير طاقة ألماني تركي، داليبور باكماز مؤسس مهندس طاقة ألماني سيرة ذاتية، فريق تركيب ألواح شمسية محترف البحر المتوسط، فنيون معتمدون vaillant مضخة حرارة تركيا خدمة، samsung خبراء تركيب معتمدون أنطاليا تركيا، استشارات طاقة معاينة مجانية خدمة أصحاب الفلل، فريق هندسي ألماني تركي خبرة طاقة شمسية"
    },
    legal: {
      title: "المعلومات القانونية | 089 Bayern أنظمة الطاقة",
      description: "السياسات القانونية لـ 089 Bayern: سياسة الخصوصية، سياسة ملفات تعريف الارتباط، شروط الاستخدام.",
      keywords: "089 bayern حماية البيانات الشخصية سياسة الخصوصية، سياسة الخصوصية استخدام ملفات تعريف الارتباط معلومات، شروط الاستخدام عقد البيع عن بعد الشروط، حق الانسحاب نموذج معلومات مسبقة حقوق قانونية، شروط ضمان نظام الطاقة تفاصيل الأحكام والشروط، 089 bayern اتصال شكوى ملاحظات إبلاغ تواصل، معالجة البيانات إشعار رسالة إلكترونية اتصال، حقوق المستهلك عقد تركيب نظام الطاقة قانوني"
    },
    "installation-antalya": {
      title: "تركيب نظام الطاقة 4 في 1 أنطاليا | الألواح الشمسية ومضخة الحرارة | 089 Bayern",
      description: "تركيب احترافي لنظام الطاقة 4 في 1 في أنطاليا، كيمير، بيليك، سيدا، ألانيا. الألواح الشمسية، مضخة حرارة Vaillant، تكييف Samsung وتخزين البطارية. جودة ألمانية، ضمان 10 سنوات.",
      keywords: "أنطاليا كيمير بيليك سيدا ألواح شمسية تركيب خدمة، أنطاليا مركز فيلا سقف لوحة شمسية تركيب أسعار، vaillant مضخة حرارة تركيب احترافي أنطاليا ألانيا، samsung تكييف تركيب فلل البحر المتوسط منطقة، نظام 4 في 1 أنطاليا ضمان 10 سنوات جودة ألمانية، أنطاليا لارا كوندو دوشمة ألتي طاقة شمسية تركيب، لوحة شمسية مضخة حرارة تكييف بطارية تركيب كامل، أنطاليا منطقة معاينة مجانية تحليل طاقة خدمة"
    },
    "installation-ankara": {
      title: "تركيب نظام الطاقة 4 في 1 أنقرة | الألواح الشمسية ومضخة الحرارة | 089 Bayern",
      description: "تركيب احترافي لنظام الطاقة 4 في 1 في أنقرة والمناطق المحيطة. الألواح الشمسية، مضخة حرارة Vaillant، تكييف Samsung وتخزين البطارية. جودة ألمانية، ضمان 10 سنوات. تشانكايا، كيتشيورين، ينيماهالله.",
      keywords: "أنقرة تركيب ألواح شمسية تشانكايا كيتشيورين فيلا، أنقرة فيلا مضخة حرارة تركيب شتاء كفاءة أداء، نظام 4 في 1 أنقرة عاصمة هندسة ألمانية جودة، ألواح شمسية أنقرة مناخ قاري أداء برد شتاء، vaillant مضخة حرارة أنقرة مركز تركيب صيانة، samsung تكييف بطارية تخزين أنقرة حلول فيلا، أنقرة إتيمسغوت سينجان طاقة شمسية نظام تركيب، أنقرة منطقة معاينة مجانية تحليل توفير الطاقة"
    },
    "installation-alanya": {
      title: "تركيب نظام الطاقة 4 في 1 ألانيا | الألواح الشمسية ومضخة الحرارة | 089 Bayern فرع",
      description: "تركيب احترافي لنظام الطاقة 4 في 1 في ألانيا والمناطق المحيطة. فرع 089 Bayern ألانيا. الألواح الشمسية، مضخة حرارة Vaillant، تكييف Samsung وتخزين البطارية. محمودلار، كستل، أوبا.",
      keywords: "ألانيا محمودلار كستل أوبا ألواح شمسية تركيب خدمة، ألانيا فيلا لوحة شمسية تركيب أسعار 089 bayern، vaillant مضخة حرارة تركيب ألانيا فلل ساحلية، samsung تكييف ألانيا مناخ حار حل تبريد نظام، نظام 4 في 1 ألانيا 300 يوم مشمس ميزة فائدة، ألانيا غازي باشا كوناكلي طاقة شمسية بطارية، ألانيا منطقة معاينة مجانية تحليل طاقة خدمة، فيلا ساحلية البحر المتوسط لوحة شمسية مضخة حرارة"
    },
    standorte: {
      title: "مناطق خدمتنا | تركيا، كرواتيا، اليونان | 089 Bayern",
      description: "مناطق تركيب أنظمة الطاقة 089 Bayern: أنطاليا، ألانيا، موغلا، إزمير، سبليت، دالماتيا. تركيب الألواح الشمسية، مضخات الحرارة، التكييف في البحر المتوسط وبحر إيجة.",
      keywords: "089 bayern مناطق الخدمة تركيا كرواتيا اليونان، أنطاليا ألانيا موغلا إزمير تركيب ألواح شمسية، فتحية بودروم مرمريس نظام طاقة تركيب خدمة، البحر المتوسط بحر إيجة منطقة ساحلية حلول طاقة، سبليت دالماتيا كرواتيا طاقة شمسية نظام تركيب، تركيا فيلا استشارات طاقة معاينة مجانية على مستوى البلاد، مرسين أضنة ساحل جنوبي نظام طاقة خطة تركيب، 089 bayern توسع مناطق جديدة خطة 2026 أهداف"
    },
    "gunes-paneli": {
      title: "تركيب الألواح الشمسية أنطاليا | تركيب لوحة شمسية سقف فيلا | 089 Bayern",
      description: "تركيب احترافي للألواح الشمسية على أسقف الفلل في أنطاليا، ألانيا، كيمير، سيدا. أنظمة كهروضوئية 6-12 كيلوواط، ألواح tier-1، تركيب بجودة ألمانية. 300+ يوم مشمس مع 70% توفير. ضمان 10 سنوات.",
      keywords: "تركيب ألواح شمسية أنطاليا فيلا سقف أسعار، تركيب لوحة شمسية ألانيا كيمير بيليك البحر المتوسط، نظام كهروضوئي 6 كيلوواط 10 كيلوواط 12 كيلوواط فيلا، أسعار ألواح شمسية 2026 تركيا أنطاليا منطقة، سقف فيلا ألواح شمسية كم كيلوواط مطلوب حساب، tier 1 ماركات ألواح شمسية أحادية البلورة أداء، طاقة شمسية فاتورة كهرباء صفر كيف تحقق ذلك، 089 bayern تركيب ألواح شمسية مراجع أنطاليا ألانيا"
    },
    "isi-pompasi": {
      title: "تركيب مضخة حرارة Vaillant أنطاليا | نظام تدفئة تبريد فيلا | 089 Bayern",
      description: "تركيب مضخة حرارة Vaillant في أنطاليا ومنطقة البحر المتوسط. مضخة حرارة هوائية للتدفئة شتاءً والتبريد صيفاً. كفاءة COP 5.0، 60% توفير. خدمة معتمدة، ضمان 10 سنوات.",
      keywords: "vaillant مضخة حرارة تركيب أنطاليا فيلا أسعار، مضخة حرارة هوائية مناخ البحر المتوسط كفاءة، مضخة حرارة تدفئة تبريد فيلا تركيا تكلفة نظام، vaillant arotherm مضخة حرارة cop أداء تقييم، مضخة حرارة استهلاك كهرباء تكلفة شهرية حساب، تركيب مضخة حرارة فيلا ألانيا كيمير بيليك سيدا، تدفئة أرضية تكامل مضخة حرارة فيلا البحر المتوسط، 089 bayern vaillant وكيل معتمد خدمة أنطاليا تركيا"
    },
    klima: {
      title: "تركيب تكييف Samsung أنطاليا | نظام WindFree تكييف فيلا | 089 Bayern",
      description: "تركيب نظام تكييف Samsung WindFree في أنطاليا وفلل البحر المتوسط. تبريد وتدفئة هادئة وموفرة للطاقة. نظام multi-split، تكامل منزل ذكي. وكيل Samsung معتمد، ضمان 5 سنوات.",
      keywords: "samsung تكييف تركيب أنطاليا فيلا windfree نظام، samsung windfree تكييف هادئ تبريد فيلا البحر المتوسط، multi split تكييف نظام تركيب فيلا أنطاليا ألانيا، samsung تكييف أسعار 2026 موفر للطاقة إنفرتر، فيلا تكييف كم btu مطلوب حساب دليل إرشادي، samsung تكييف منزل ذكي wifi تحكم عن بعد نظام، تركيب تكييف احترافي أنطاليا كيمير بيليك خدمة، 089 bayern samsung وكيل معتمد خدمة تكييف تركيا"
    },
    "enerji-depolama": {
      title: "نظام تخزين الطاقة أنطاليا | بطارية ليثيوم أيون فيلا | 089 Bayern",
      description: "تركيب نظام تخزين طاقة ليثيوم أيون في أنطاليا ومنطقة البحر المتوسط. شحن بالطاقة الشمسية، استخدام ليلي. سعة 10-15 كيلوواط ساعة، 6000+ دورة شحن. طاقة متواصلة، ضمان 10 سنوات.",
      keywords: "نظام تخزين طاقة بطارية أنطاليا فيلا تركيب تكلفة، بطارية ليثيوم أيون تكامل ألواح شمسية أسعار، نظام تخزين بطارية منزلي 10 كيلوواط 15 كيلوواط سعة، طاقة شمسية استخدام ليلي بطارية تخزين حل، samsung sdi بطارية تخزين وكيل معتمد تركيا، طاقة مستقلة عن الشبكة بطارية حل فيلا off grid، نظام تخزين طاقة أسعار 2026 تركيا أنطاليا، 089 bayern تركيب تخزين بطارية مراجع البحر المتوسط"
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

  const faqSchema = page === "faq" ? {
    "@type": "FAQPage",
    "@id": `https://089bayern.com/${page}#faqpage`,
    "mainEntity": [
      {
        "@type": "Question",
        "name": language === "tr" ? "Güneş paneli kurulumu ne kadar sürer?" : language === "de" ? "Wie lange dauert die Installation einer Solaranlage?" : "How long does solar panel installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === "tr" ? "4'ü 1 arada enerji sistemi kurulumu genellikle 3-5 iş günü sürer. Sadece güneş paneli kurulumu 1-2 gün sürer." : language === "de" ? "Die Installation des 4-in-1 Energiesystems dauert in der Regel 3-5 Werktage. Die reine Solaranlagen-Installation dauert 1-2 Tage." : "The 4-in-1 energy system installation typically takes 3-5 business days. Solar panel installation alone takes 1-2 days."
        }
      },
      {
        "@type": "Question",
        "name": language === "tr" ? "Sistem kesintisiz güç sağlayabilir mi?" : language === "de" ? "Kann das System eine Notstromversorgung bieten?" : "Can the system provide backup power?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === "tr" ? "Evet, batarya depolama sistemi ile şebeke kesintilerinde evinize kesintisiz enerji sağlanır. 10-15 kWh kapasite ile 8-12 saat bağımsız çalışma." : language === "de" ? "Ja, mit dem Batteriespeicher wird Ihr Haus bei Netzausfällen unterbrechungsfrei versorgt. 10-15 kWh Kapazität ermöglichen 8-12 Stunden Unabhängigkeit." : "Yes, the battery storage system provides uninterrupted power during grid outages. 10-15 kWh capacity supports 8-12 hours of independent operation."
        }
      },
      {
        "@type": "Question",
        "name": language === "tr" ? "Aşırı sıcaklıklarda performans nasıl?" : language === "de" ? "Wie ist die Leistung bei extremen Temperaturen?" : "How does performance hold up in extreme temperatures?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === "tr" ? "Vaillant ısı pompası -20°C ile +45°C arasında verimli çalışır. Samsung klima 50°C'ye kadar soğutma yapabilir. Akdeniz iklimi için ideal performans." : language === "de" ? "Die Vaillant Wärmepumpe arbeitet effizient von -20°C bis +45°C. Die Samsung Klimaanlage kühlt bis 50°C. Ideale Leistung für das Mittelmeerklima." : "The Vaillant heat pump operates efficiently from -20°C to +45°C. Samsung AC cools up to 50°C. Ideal performance for Mediterranean climate."
        }
      },
      {
        "@type": "Question",
        "name": language === "tr" ? "4'ü 1 arada sistem fiyatı ne kadar?" : language === "de" ? "Was kostet das 4-in-1 System?" : "How much does the 4-in-1 system cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === "tr" ? "200m² villa için yaklaşık 35.000-50.000 EUR arasındadır (garantisiz tahmini fiyat). Standart 6kWp: ca. 31.200 EUR, Orta 10kWp: ca. 41.600 EUR, Premium 12kWp: ca. 58.500 EUR." : language === "de" ? "Für eine 200m² Villa ca. 35.000-50.000 EUR (unverbindlicher Richtwert). Standard 6kWp: ca. 31.200 EUR, Mittel 10kWp: ca. 41.600 EUR, Premium 12kWp: ca. 58.500 EUR." : "For a 200m² villa approximately 35,000-50,000 EUR (non-binding estimate). Standard 6kWp: approx. 31,200 EUR, Medium 10kWp: approx. 41,600 EUR, Premium 12kWp: approx. 58,500 EUR."
        }
      },
      {
        "@type": "Question",
        "name": language === "tr" ? "Türkiye'de enerji teşvikleri var mı?" : language === "de" ? "Gibt es Förderungen in der Türkei?" : "Are there energy incentives in Turkey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === "tr" ? "Türkiye'de güneş enerjisi için vergi indirimleri ve net metering (fazla üretimi şebekeye satma) imkanı bulunmaktadır. Detaylı bilgi için ücretsiz danışmanlık alabilirsiniz." : language === "de" ? "In der Türkei gibt es Steuererleichterungen für Solarenergie und Net-Metering (Überschusseinspeisung). Kontaktieren Sie uns für eine kostenlose Beratung." : "Turkey offers tax benefits for solar energy and net metering (selling excess production to the grid). Contact us for free consultation on available incentives."
        }
      }
    ]
  } : null;

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
      "@type": ["LocalBusiness", "Organization"],
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
      "dateModified": "2026-02-09",
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

  const schema = {
    "@context": "https://schema.org",
    "@graph": graphItems
  };

  return (
    <Helmet>
      <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />
      <title>{title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      
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
      <meta property="og:image" content="https://089bayern.com/og-image.jpg" />
      <meta property="og:url" content={pageUrl} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content="https://089bayern.com/og-image.jpg" />
      
      <meta name="geo.region" content="TR-07" />
      <meta name="geo.placename" content="Antalya, Türkiye" />
      <meta name="geo.position" content="36.8969;30.7133" />
      <meta name="geo.country" content="TR" />
      <meta name="ICBM" content="36.8969, 30.7133" />
      <meta name="distribution" content="global" />
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
