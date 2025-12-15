import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, ArrowRight, Phone, Sun, Zap, Settings, Shield, 
  Clock, Wrench, Battery, Thermometer, MapPin, PlugZap, AlertTriangle,
  Home, TrendingUp, Leaf, Building, Award, Gift, Calculator
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import heroImage from "@assets/generated_images/modern_villa_with_solar_panels.png";

export default function FAQ() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();

  const scrollToCalculator = () => {
    setLocation("/#calculator");
  };

  const content = {
    tr: {
      badge: "Sıkça Sorulan Sorular",
      title: "Merak Ettikleriniz",
      titleHighlight: "Yanıtlarıyla",
      subtitle: "Güneş enerjisi, ısı pompası ve entegre enerji sistemleri hakkında tüm sorularınızın kapsamlı cevaplarını burada bulabilirsiniz. Akdeniz bölgesinde enerji bağımsızlığına giden yolda size rehberlik ediyoruz.",
      ctaTitle: "Başka Sorularınız mı Var?",
      ctaText: "Uzman ekibimiz tüm sorularınızı yanıtlamak için hazır. Eviniz için özel bir enerji çözümü oluşturmak üzere ücretsiz danışmanlık hizmetimizden yararlanın.",
      ctaButton: "Ücretsiz Keşif Al",
      ctaButton2: "Hemen Arayın",
      
      faq1Question: "Güneş paneli sistemi ne kadar tasarruf sağlar ve yatırımım ne zaman geri döner?",
      faq1Answer: "Akdeniz bölgesinde yılda ortalama 300 güneş günü ile güneş paneli sisteminiz elektrik faturanızda %60-80 oranında tasarruf sağlayabilir. Ortalama bir villa için kurulum maliyeti, enerji tasarrufları sayesinde 4-6 yıl içinde kendini amorti eder. Bunun ötesinde, güneş paneli kurulu evler emlak piyasasında %10-15 daha değerli kabul edilir. Alman DIN standartlarında üretilen panellerimiz 25 yıl performans garantisi ile gelir, bu da uzun vadeli yatırım güvenliği anlamına gelir. Antalya bölgesinde bir villa için ortalama yıllık tasarruf 15.000-25.000 TL arasında değişmektedir.",

      faq2Question: "Isı pompası sistemi nasıl çalışır ve Akdeniz ikliminde verimli mi?",
      faq2Answer: "Isı pompası, dış havadan ısı enerjisi çekerek evinizi ısıtır veya soğutur - tıpkı ters çalışan bir buzdolabı gibi. Akdeniz'in ılıman kış sıcaklıkları (ortalama 10-15°C), ısı pompalarının maksimum verimlilikle çalışması için idealdir. Vaillant aroTHERM sistemimiz, harcanan her 1 kW elektrik için 4-5 kW ısı enerjisi üretir (COP 4-5). Bu, geleneksel elektrikli ısıtmaya kıyasla %75'e varan enerji tasarrufu demektir. Yazın ise aynı sistem evinizi doğal gazdan bağımsız olarak soğutur. Sistem, -20°C'ye kadar verimli çalışabilir, ancak Akdeniz ikliminde bu sınırlara nadiren ulaşılır.",

      faq3Question: "4-in-1 Alman sistemi nedir ve neden tek başına panellerden daha avantajlı?",
      faq3Answer: "4-in-1 Alman sistemi, güneş panelleri, ısı pompası, klima sistemi ve enerji depolama ünitesini entegre eden kapsamlı bir enerji çözümüdür. Bu sistem, bileşenlerin birbirini tamamlamasını sağlayarak maksimum verimlilik elde eder. Güneş panelleri gündüz elektrik üretirken, fazla enerji BYD bataryalarında depolanır. Isı pompası bu enerjiyi kullanarak evinizi ısıtır veya soğutur. Samsung klima ünitesi ise hassas sıcaklık kontrolü sağlar. Tek tek satın almaya kıyasla %20-30 maliyet avantajı ve %40'a varan verimlilik artışı sunar. Tüm sistemin tek bir garanti altında olması, bakım ve servis süreçlerini de kolaylaştırır.",

      faq4Question: "Kurulum süreci nasıl işliyor ve ne kadar sürer?",
      faq4Answer: "Kurulum sürecimiz profesyonel ve şeffaftır. İlk olarak ücretsiz keşif ziyareti yapılır ve evinizin enerji ihtiyacı analiz edilir. Ardından size özel bir sistem tasarımı ve fiyat teklifi hazırlanır. Onayınızın ardından, ekipman tedariki 2-3 hafta sürer. Kurulum işlemi, sistem büyüklüğüne bağlı olarak 3-5 gün içinde tamamlanır. Güneş paneli montajı, elektrik bağlantıları, inverter kurulumu ve sistem testleri bu süreye dahildir. Kurulum sırasında evinizde minimum kesinti yaşanır ve günlük yaşamınız etkilenmez. Son olarak, sistem devreye alınır ve kullanım eğitimi verilir.",

      faq5Question: "Garanti koşulları nelerdir ve arıza durumunda ne olur?",
      faq5Answer: "Sistemlerimiz kapsamlı garanti koşulları ile korunmaktadır. Güneş panellerinde 25 yıl performans garantisi (ilk 10 yıl %90, sonraki 15 yıl %80 verimlilik), inverterlerde 10 yıl, ısı pompası ve klima sistemlerinde 5 yıl üretici garantisi sunulmaktadır. Ek olarak, 2 yıl işçilik garantisi veriyoruz. Arıza durumunda 7/24 çağrı merkezimiz aktiftir ve Antalya bölgesinde 24-48 saat içinde yerinde servis sağlanır. Yedek parça stokumuz sayesinde onarımlar hızlıca tamamlanır. Garanti kapsamındaki tüm işlemler ücretsizdir.",

      faq6Question: "Sistem maliyeti ne kadar ve finansman seçenekleri var mı?",
      faq6Answer: "Sistem maliyeti, evinizin büyüklüğüne ve enerji ihtiyacınıza göre değişir. Ortalama bir villa için 4-in-1 sistem maliyeti 200.000-400.000 TL arasındadır. Ancak yıllık 15.000-25.000 TL tasarruf ile 4-6 yılda yatırımınız geri döner. Finansman seçenekleri olarak anlaşmalı bankalarımız aracılığıyla 36-60 ay vadeli kredi imkanı sunuyoruz. Ayrıca peşin ödemelerde %5-10 indirim uygulanmaktadır. Ücretsiz keşif sonrasında size özel ödeme planları hazırlanır ve aylık taksit tutarınız, tasarruf edeceğiniz elektrik faturasından düşük kalacak şekilde ayarlanabilir.",

      faq7Question: "Sistemin bakımı nasıl yapılır ve maliyeti nedir?",
      faq7Answer: "Güneş panelleri minimum bakım gerektirir - yılda 2-3 kez yüzey temizliği yeterlidir. Akdeniz ikliminde toz ve polen birikimi nedeniyle bu temizlik verimlilik için önemlidir. Isı pompası ve klima sistemi için yılda bir profesyonel bakım önerilir. Bu bakım, filtre temizliği, soğutucu gaz kontrolü ve sistem performans testlerini içerir. Yıllık bakım anlaşması maliyeti ortalama 2.000-3.000 TL'dir ve bu anlaşma kapsamında öncelikli servis hizmeti sunulur. Batarya sistemleri ise bakım gerektirmez ve 10 yıl garanti kapsamındadır.",

      faq8Question: "BYD enerji depolama sistemi nasıl çalışır ve neden önemli?",
      faq8Answer: "BYD Battery-Box, gündüz üretilen fazla güneş enerjisini depolayarak gece veya bulutlu günlerde kullanmanızı sağlar. LiFePO4 (Lityum Demir Fosfat) teknolojisi ile 10.000+ şarj döngüsü kapasitesine sahiptir - bu da 25+ yıl ömür demektir. Modüler yapısı sayesinde 5 kWh'den 50 kWh'e kadar genişletilebilir. Şebeke kesintilerinde otomatik olarak devreye girerek kesintisiz güç sağlar. Akıllı enerji yönetimi ile elektriğin en pahalı olduğu saatlerde bataryadan, ucuz olduğu saatlerde şebekeden enerji kullanarak tasarrufunuzu maksimize eder.",

      faq9Question: "Samsung klima sistemi diğer markalardan farkı nedir?",
      faq9Answer: "Samsung Wind-Free klima teknolojisi, 23.000 mikro delikten yayılan hava akışı ile direkt rüzgar hissi olmadan serinletme sağlar. Bu özellik, özellikle yatak odalarında konforlu uyku için idealdir. AI (yapay zeka) destekli sensörler, odadaki insan sayısını ve konumlarını algılayarak enerjiyi optimize eder. Wi-Fi bağlantısı ile SmartThings uygulaması üzerinden uzaktan kontrol mümkündür. R32 çevreci soğutucu gaz kullanımı ile %67 daha düşük küresel ısınma potansiyeli sunar. Vaillant ısı pompası ile entegre çalışarak hibrit ısıtma-soğutma sağlar.",

      faq10Question: "Akdeniz iklimi için sistem neden ideal?",
      faq10Answer: "Akdeniz iklimi, enerji sistemleri için dünya üzerindeki en uygun bölgelerden biridir. Yılda ortalama 300 güneş günü ile güneş panelleri maksimum verimde çalışır. Kışın ılıman sıcaklıklar (5-15°C arası) ısı pompalarının COP değerini yüksek tutar - soğuk iklimlerdeki verimsizlik sorunu burada yaşanmaz. Yazın yüksek sıcaklıklarda (35-40°C) klima ihtiyacı güneş enerjisi ile karşılanır. Nem oranının düşük olması panel verimini artırır. Deniz tuzunun etkisi için özel koruma kaplamalı panellerimiz, kıyı bölgelerinde bile uzun ömürlü performans sunar.",

      faq11Question: "Şebekeden tamamen bağımsız olabilir miyim?",
      faq11Answer: "Evet, off-grid (şebekeden bağımsız) sistem kurulumu mümkündür ancak on-grid (şebekeye bağlı) hibrit sistemler genellikle daha avantajlıdır. Hibrit sistemde, gündüz ürettiğiniz fazla elektriği şebekeye satarak gelir elde edebilir veya kredi biriktirebilirsiniz. Gece veya kış aylarında ihtiyaç duyduğunuzda şebekeden destek alabilirsiniz. Tam bağımsızlık için daha büyük batarya kapasitesi ve jeneratör desteği gerekir ki bu maliyeti %30-50 artırır. Çoğu villa sahibi için hibrit sistem, hem ekonomik hem de pratik en iyi çözümdür.",

      faq12Question: "Elektrik kesintilerinde sistem çalışmaya devam eder mi?",
      faq12Answer: "Evet, BYD batarya sistemi ile donatılmış hibrit sistemimiz elektrik kesintilerinde kesintisiz güç sağlar. Şebeke kesintisi algılandığında sistem otomatik olarak ada moduna (island mode) geçer ve evinize bataryadan enerji vermeye devam eder. 10 kWh kapasiteli bir batarya, ortalama bir evin temel ihtiyaçlarını (buzdolabı, aydınlatma, internet, TV) 8-12 saat karşılayabilir. Gündüz güneş varsa batarya şarj olmaya devam eder. Kritik cihazlarınız (tıbbi ekipmanlar gibi) için öncelikli devre tasarımı yapılabilir.",

      faq13Question: "Her çatı güneş paneli için uygun mu?",
      faq13Answer: "Çoğu çatı tipi güneş paneli kurulumu için uygundur, ancak bazı faktörler verimliği etkiler. İdeal koşullar: güneye bakan yüzey, 30-35 derece eğim ve gölgesiz alan. Düz çatılarda özel montaj sistemleri ile optimal açı sağlanır. Kiremit, beton, metal çatı kaplamaları hepsine uygun montaj çözümlerimiz mevcuttur. Çatı yaşı ve taşıma kapasitesi değerlendirilir - paneller m² başına sadece 12-15 kg ağırlık ekler. Ücretsiz keşif ziyaretinde drone ile çatı analizi yapılır ve gölgeleme simülasyonu ile yıllık üretim tahmini hesaplanır.",

      faq14Question: "Yatırımın geri ödeme süresi ne kadar?",
      faq14Answer: "Geri ödeme süresi, sistem büyüklüğü ve enerji tüketim alışkanlıklarınıza bağlı olarak 4-7 yıl arasında değişir. Akdeniz bölgesinde yüksek güneşlenme oranı bu süreyi kısaltır. Hesaplamaya dahil edilen faktörler: mevcut elektrik faturanız, sistem kapasitesi, panellerin yönü ve açısı, batarya kullanımı. Elektrik fiyatlarının yıllık %20-30 artış eğilimi göz önüne alındığında, gerçek geri ödeme süresi genellikle hesaplanandan 1-2 yıl daha kısadır. 25 yıllık panel ömrü boyunca toplam tasarruf, yatırımın 5-8 katına ulaşabilir.",

      faq15Question: "Sistem ne kadar enerji verimli?",
      faq15Answer: "Entegre sistemimiz, bileşenlerin sinerjik çalışması sayesinde olağanüstü verimlilik sunar. Güneş panellerimiz %21-22 dönüşüm verimine sahiptir - sektör ortalamasının üzerinde. Vaillant ısı pompası COP 4.5 ile çalışır, yani 1 kW elektrik ile 4.5 kW ısı üretir. Samsung klimalar A+++ enerji sınıfında SEER 8+ değerine sahiptir. BYD bataryalar %95+ şarj-deşarj verimiyle enerji kaybını minimize eder. Tüm sistem, akıllı enerji yönetim sistemi ile optimize edilerek toplam verimliliği %85-90 seviyesinde tutar.",

      faq16Question: "Çevresel faydaları nelerdir?",
      faq16Answer: "Güneş enerjisi sistemi, evinizin karbon ayak izini önemli ölçüde azaltır. Ortalama bir villa sistemi yılda 4-6 ton CO2 emisyonunu önler - bu, 200+ ağacın yıllık karbondioksit emilimine eşdeğerdir. Fosil yakıt bağımlılığını azaltarak enerji güvenliğine katkı sağlar. Kullanılan malzemeler geri dönüştürülebilir niteliktedir. Samsung klimaların R32 gazı, eski R410A'ya göre %67 daha düşük küresel ısınma potansiyeline sahiptir. Yeşil enerji kullanarak çocuklarınıza daha temiz bir dünya bırakırsınız.",

      faq17Question: "Sistem mülk değerimi artırır mı?",
      faq17Answer: "Evet, araştırmalar güneş enerjisi sistemli evlerin %10-15 daha yüksek fiyatla satıldığını göstermektedir. Alıcılar için düşük enerji maliyeti büyük bir çekicilik unsurudur. Enerji verimliliği sertifikası (EPC) puanınız yükselir. Türkiye'de emlak piyasasında 'akıllı ev' ve 'yeşil ev' talebi her geçen yıl artmaktadır. Kiralık mülkler için de enerji tasarruflu ev avantajı daha yüksek kira getirisi sağlar. Sistemin transferi mümkündür - yeni mülk sahibine garanti devri yapılabilir.",

      faq18Question: "Türkiye'de güneş enerjisi teşvikleri var mı?",
      faq18Answer: "Türkiye'de güneş enerjisi için çeşitli teşvik mekanizmaları mevcuttur. Konutlar için 10 kW'a kadar sistemlerde üretim fazlası elektrik şebekeye satılabilir ve mahsuplaşma yapılır. KDV indirimi bazı dönemlerde uygulanmaktadır. Belediyeler yerel teşvikler sunabilir - Antalya Büyükşehir Belediyesi zaman zaman destek programları açıklamaktadır. Yenilenebilir enerji yatırımları için düşük faizli kredi imkanları mevcuttur. TEDAŞ bağlantı süreçleri sadeleştirilmiştir. Güncel teşvikler için ücretsiz danışmanlık hizmetimizden yararlanabilirsiniz.",

      faq19Question: "Alman kalitesi neden önemli?",
      faq19Answer: "Almanya, güneş enerjisi ve ısı pompası teknolojilerinde dünya lideridir. DIN (Deutsches Institut für Normung) standartları, dünyanın en sıkı kalite ve güvenlik gereksinimlerini belirler. Vaillant, 145 yıllık deneyimi ile Avrupa'nın en güvenilir ısıtma markasıdır. Alman mühendislik yaklaşımı uzun ömür, yüksek verimlilik ve güvenilirlik demektir. Bakım ihtiyacı minimumda kalır, arıza oranları düşüktür. 089 Bayern olarak bu kaliteyi Türkiye'ye taşıyoruz ve Alman standartlarında kurulum hizmeti sunuyoruz.",

      faq20Question: "Ücretsiz keşif nasıl işliyor ve neler dahil?",
      faq20Answer: "Ücretsiz keşif hizmetimiz kapsamlı bir değerlendirme sürecidir. Önce telefon veya WhatsApp üzerinden ön görüşme yapılır ve ihtiyaçlarınız belirlenir. Ardından uzman ekibimiz evinize gelir ve detaylı inceleme yapar: çatı analizi (drone ile), elektrik tüketim geçmişi, mevcut tesisat durumu, gölgeleme analizi. 3D simülasyon ile yıllık üretim tahmini hazırlanır. Size özel sistem tasarımı ve detaylı maliyet analizi sunulur. Tüm bu hizmetler tamamen ücretsiz ve satın alma zorunluluğu yoktur. Karar sizin - biz sadece en iyi çözümü sunmak için buradayız."
    },
    de: {
      badge: "Häufig gestellte Fragen",
      title: "Ihre Fragen",
      titleHighlight: "Unsere Antworten",
      subtitle: "Hier finden Sie umfassende Antworten auf alle Ihre Fragen zu Solarenergie, Wärmepumpen und integrierten Energiesystemen. Wir begleiten Sie auf dem Weg zur Energieunabhängigkeit in der Mittelmeerregion.",
      ctaTitle: "Haben Sie weitere Fragen?",
      ctaText: "Unser Expertenteam steht bereit, alle Ihre Fragen zu beantworten. Nutzen Sie unsere kostenlose Beratung, um eine maßgeschneiderte Energielösung für Ihr Zuhause zu erstellen.",
      ctaButton: "Kostenlose Beratung",
      ctaButton2: "Jetzt anrufen",
      
      faq1Question: "Wie viel spart ein Solarsystem und wann amortisiert sich meine Investition?",
      faq1Answer: "In der Mittelmeerregion mit durchschnittlich 300 Sonnentagen pro Jahr kann Ihr Solarsystem Ihre Stromrechnung um 60-80% reduzieren. Die Installationskosten für eine durchschnittliche Villa amortisieren sich dank der Energieeinsparungen innerhalb von 4-6 Jahren. Darüber hinaus werden Häuser mit Solaranlagen auf dem Immobilienmarkt als 10-15% wertvoller angesehen. Unsere nach deutschen DIN-Standards gefertigten Panels kommen mit 25 Jahren Leistungsgarantie, was langfristige Investitionssicherheit bedeutet. Die durchschnittliche jährliche Ersparnis für eine Villa in der Region Antalya liegt zwischen 15.000 und 25.000 TL.",

      faq2Question: "Wie funktioniert eine Wärmepumpe und ist sie im Mittelmeerklima effizient?",
      faq2Answer: "Eine Wärmepumpe entzieht der Außenluft Wärmeenergie, um Ihr Zuhause zu heizen oder zu kühlen - wie ein umgekehrter Kühlschrank. Die milden Wintertemperaturen am Mittelmeer (durchschnittlich 10-15°C) sind ideal für den Betrieb von Wärmepumpen mit maximaler Effizienz. Unser Vaillant aroTHERM System erzeugt für jede verbrauchte 1 kW Strom 4-5 kW Wärmeenergie (COP 4-5). Das bedeutet bis zu 75% Energieeinsparung im Vergleich zu herkömmlicher Elektroheizung. Im Sommer kühlt dasselbe System Ihr Zuhause unabhängig von Erdgas. Das System kann effizient bis -20°C arbeiten, wobei diese Grenzen im Mittelmeerklima selten erreicht werden.",

      faq3Question: "Was ist das deutsche 4-in-1 System und warum ist es vorteilhafter als Einzelkomponenten?",
      faq3Answer: "Das deutsche 4-in-1 System ist eine umfassende Energielösung, die Solarmodule, Wärmepumpe, Klimasystem und Energiespeicher integriert. Dieses System erreicht maximale Effizienz, indem die Komponenten synergistisch zusammenarbeiten. Während die Solarmodule tagsüber Strom erzeugen, wird überschüssige Energie in BYD-Batterien gespeichert. Die Wärmepumpe nutzt diese Energie zum Heizen oder Kühlen. Die Samsung-Klimaanlage sorgt für präzise Temperaturregelung. Im Vergleich zum Einzelkauf bietet es 20-30% Kostenvorteil und bis zu 40% Effizienzsteigerung. Die einheitliche Garantie erleichtert auch Wartungs- und Serviceprozesse.",

      faq4Question: "Wie läuft der Installationsprozess ab und wie lange dauert er?",
      faq4Answer: "Unser Installationsprozess ist professionell und transparent. Zunächst erfolgt ein kostenloser Besichtigungstermin, bei dem der Energiebedarf Ihres Hauses analysiert wird. Dann wird ein individuelles Systemdesign und Preisangebot erstellt. Nach Ihrer Genehmigung dauert die Ausrüstungsbeschaffung 2-3 Wochen. Die Installation wird je nach Systemgröße in 3-5 Tagen abgeschlossen. Solarpanelmontage, elektrische Anschlüsse, Wechselrichterinstallation und Systemtests sind in dieser Zeit enthalten. Während der Installation gibt es minimale Unterbrechungen und Ihr Alltag wird nicht beeinträchtigt. Abschließend wird das System in Betrieb genommen und eine Nutzungsschulung durchgeführt.",

      faq5Question: "Was sind die Garantiebedingungen und was passiert bei einer Störung?",
      faq5Answer: "Unsere Systeme sind durch umfassende Garantiebedingungen geschützt. Für Solarmodule gibt es 25 Jahre Leistungsgarantie (erste 10 Jahre 90%, nächste 15 Jahre 80% Effizienz), für Wechselrichter 10 Jahre, für Wärmepumpen- und Klimasysteme 5 Jahre Herstellergarantie. Zusätzlich bieten wir 2 Jahre Arbeitsgarantie. Im Störungsfall ist unser Callcenter rund um die Uhr erreichbar und in der Region Antalya wird innerhalb von 24-48 Stunden vor Ort Service geleistet. Dank unseres Ersatzteillagers werden Reparaturen schnell abgeschlossen. Alle Leistungen im Garantieumfang sind kostenlos.",

      faq6Question: "Wie hoch sind die Systemkosten und gibt es Finanzierungsmöglichkeiten?",
      faq6Answer: "Die Systemkosten variieren je nach Größe Ihres Hauses und Energiebedarf. Die durchschnittlichen Kosten für ein 4-in-1 System für eine Villa liegen zwischen 200.000 und 400.000 TL. Mit jährlichen Einsparungen von 15.000-25.000 TL amortisiert sich Ihre Investition jedoch in 4-6 Jahren. Als Finanzierungsoption bieten wir über unsere Partnerbanken Kredite mit 36-60 Monaten Laufzeit an. Außerdem gibt es 5-10% Rabatt bei Barzahlung. Nach der kostenlosen Besichtigung werden individuelle Zahlungspläne erstellt, wobei Ihre monatliche Rate unter der eingesparten Stromrechnung liegen kann.",

      faq7Question: "Wie wird das System gewartet und was kostet es?",
      faq7Answer: "Solarmodule erfordern minimale Wartung - 2-3 Mal jährliche Oberflächenreinigung ist ausreichend. Diese Reinigung ist im Mittelmeerklima wegen Staub- und Pollenansammlungen für die Effizienz wichtig. Für Wärmepumpe und Klimasystem wird eine jährliche professionelle Wartung empfohlen. Diese Wartung umfasst Filterreinigung, Kältemittelkontrolle und Systemleistungstests. Die jährlichen Wartungsvertragskosten betragen durchschnittlich 2.000-3.000 TL und beinhalten prioritären Service. Batteriesysteme erfordern keine Wartung und sind 10 Jahre garantiert.",

      faq8Question: "Wie funktioniert das BYD Energiespeichersystem und warum ist es wichtig?",
      faq8Answer: "Die BYD Battery-Box speichert tagsüber erzeugte überschüssige Solarenergie für die Nutzung nachts oder an bewölkten Tagen. Mit LiFePO4-Technologie (Lithium-Eisenphosphat) hat sie eine Kapazität von über 10.000 Ladezyklen - das bedeutet 25+ Jahre Lebensdauer. Dank modularem Aufbau ist sie von 5 kWh bis 50 kWh erweiterbar. Bei Netzausfällen schaltet sie automatisch ein und liefert unterbrechungsfreie Stromversorgung. Intelligentes Energiemanagement maximiert Ihre Einsparungen, indem zu Spitzenzeiten Batterie- und zu Nebenzeiten Netzstrom verwendet wird.",

      faq9Question: "Was unterscheidet das Samsung Klimasystem von anderen Marken?",
      faq9Answer: "Die Samsung Wind-Free Klimatechnologie bietet Kühlung ohne direktes Windgefühl durch Luftstrom aus 23.000 Mikrolöchern. Diese Funktion ist ideal für komfortablen Schlaf, besonders in Schlafzimmern. KI-gestützte Sensoren erkennen Personenzahl und -position im Raum und optimieren den Energieverbrauch. Fernsteuerung über die SmartThings-App via WLAN ist möglich. Die Verwendung des umweltfreundlichen Kältemittels R32 bietet 67% niedrigeres Treibhauspotenzial. Integriert mit der Vaillant Wärmepumpe ermöglicht es hybrides Heizen und Kühlen.",

      faq10Question: "Warum ist das System ideal für das Mittelmeerklima?",
      faq10Answer: "Das Mittelmeerklima ist eine der günstigsten Regionen der Welt für Energiesysteme. Mit durchschnittlich 300 Sonnentagen pro Jahr arbeiten Solarmodule mit maximaler Effizienz. Im Winter halten milde Temperaturen (5-15°C) den COP-Wert der Wärmepumpen hoch - die Effizienzprobleme kalter Klimazonen treten hier nicht auf. Im Sommer bei hohen Temperaturen (35-40°C) wird der Klimabedarf durch Solarenergie gedeckt. Die niedrige Luftfeuchtigkeit erhöht die Paneleffizienz. Unsere speziell beschichteten Panels für Salzluft bieten auch in Küstengebieten langlebige Leistung.",

      faq11Question: "Kann ich vollständig netzunabhängig werden?",
      faq11Answer: "Ja, Off-Grid-Installationen (netzunabhängig) sind möglich, aber On-Grid-Hybridsysteme (netzgekoppelt) sind in der Regel vorteilhafter. Im Hybridsystem können Sie tagsüber erzeugten überschüssigen Strom ans Netz verkaufen oder Guthaben sammeln. Nachts oder im Winter können Sie bei Bedarf Netzunterstützung erhalten. Für völlige Unabhängigkeit sind größere Batteriekapazität und Generatorunterstützung erforderlich, was die Kosten um 30-50% erhöht. Für die meisten Villenbesitzer ist das Hybridsystem die wirtschaftlichste und praktischste Lösung.",

      faq12Question: "Funktioniert das System bei Stromausfällen weiter?",
      faq12Answer: "Ja, unser mit BYD-Batterie ausgestattetes Hybridsystem bietet bei Stromausfällen unterbrechungsfreie Versorgung. Bei erkanntem Netzausfall schaltet das System automatisch in den Inselbetrieb (Island Mode) und versorgt Ihr Haus weiter aus der Batterie. Eine 10-kWh-Batterie kann die Grundbedürfnisse eines durchschnittlichen Haushalts (Kühlschrank, Beleuchtung, Internet, TV) 8-12 Stunden abdecken. Bei Sonnenschein tagsüber lädt die Batterie weiter. Für kritische Geräte (wie medizinische Ausrüstung) kann eine Prioritätsschaltung konzipiert werden.",

      faq13Question: "Ist jedes Dach für Solarmodule geeignet?",
      faq13Answer: "Die meisten Dachtypen sind für die Installation von Solarmodulen geeignet, aber einige Faktoren beeinflussen die Effizienz. Ideale Bedingungen: nach Süden ausgerichtete Fläche, 30-35 Grad Neigung und schattenfreier Bereich. Auf Flachdächern wird mit speziellen Montagesystemen der optimale Winkel erreicht. Für Ziegel-, Beton- und Metalldächer haben wir passende Montagelösungen. Dachalter und Tragfähigkeit werden bewertet - Module fügen nur 12-15 kg pro m² hinzu. Beim kostenlosen Besichtigungstermin wird eine Drohnen-Dachanalyse durchgeführt und mit Verschattungssimulation die jährliche Produktion berechnet.",

      faq14Question: "Wie lang ist die Amortisationszeit?",
      faq14Answer: "Die Amortisationszeit variiert je nach Systemgröße und Ihren Energieverbrauchsgewohnheiten zwischen 4-7 Jahren. Die hohe Sonneneinstrahlung in der Mittelmeerregion verkürzt diese Zeit. In die Berechnung einfließende Faktoren: Ihre aktuelle Stromrechnung, Systemkapazität, Ausrichtung und Winkel der Module, Batterienutzung. Angesichts des jährlichen Anstiegs der Strompreise um 20-30% ist die tatsächliche Amortisationszeit oft 1-2 Jahre kürzer als berechnet. Über die 25-jährige Modullebensdauer kann die Gesamtersparnis das 5-8-fache der Investition erreichen.",

      faq15Question: "Wie energieeffizient ist das System?",
      faq15Answer: "Unser integriertes System bietet dank synergistischer Komponentenarbeit außergewöhnliche Effizienz. Unsere Solarmodule haben einen Wirkungsgrad von 21-22% - über dem Branchendurchschnitt. Die Vaillant Wärmepumpe arbeitet mit COP 4,5, d.h. 1 kW Strom erzeugt 4,5 kW Wärme. Samsung-Klimaanlagen haben A+++ Energieklasse mit SEER 8+ Wert. BYD-Batterien minimieren Energieverluste mit 95%+ Lade-Entlade-Effizienz. Das gesamte System wird durch intelligentes Energiemanagement optimiert und hält die Gesamteffizienz bei 85-90%.",

      faq16Question: "Was sind die Umweltvorteile?",
      faq16Answer: "Ein Solarsystem reduziert den CO2-Fußabdruck Ihres Hauses erheblich. Ein durchschnittliches Villensystem verhindert jährlich 4-6 Tonnen CO2-Emissionen - das entspricht der jährlichen CO2-Aufnahme von über 200 Bäumen. Es trägt zur Energiesicherheit bei, indem die Abhängigkeit von fossilen Brennstoffen reduziert wird. Die verwendeten Materialien sind recycelbar. Das R32-Gas der Samsung-Klimaanlagen hat ein 67% geringeres Treibhauspotenzial als das alte R410A. Mit grüner Energie hinterlassen Sie Ihren Kindern eine sauberere Welt.",

      faq17Question: "Erhöht das System meinen Immobilienwert?",
      faq17Answer: "Ja, Studien zeigen, dass Häuser mit Solarenergie zu 10-15% höheren Preisen verkauft werden. Niedrige Energiekosten sind für Käufer ein großer Anziehungspunkt. Ihre Energieeffizienz-Bewertung (EPC) steigt. In der Türkei wächst die Nachfrage nach 'Smart Homes' und 'Green Homes' auf dem Immobilienmarkt jährlich. Bei Mietobjekten bringt der Vorteil eines energieeffizienten Hauses höhere Mieteinnahmen. Die Systemübertragung ist möglich - die Garantie kann auf den neuen Eigentümer übertragen werden.",

      faq18Question: "Gibt es in der Türkei Förderungen für Solarenergie?",
      faq18Answer: "In der Türkei gibt es verschiedene Fördermechanismen für Solarenergie. Für Wohngebäude mit Systemen bis 10 kW kann überschüssiger Strom ans Netz verkauft und verrechnet werden. MwSt-Ermäßigungen werden zeitweise angewandt. Kommunen können lokale Förderungen anbieten - die Großstadtgemeinde Antalya kündigt gelegentlich Unterstützungsprogramme an. Es gibt zinsgünstige Kreditmöglichkeiten für erneuerbare Energieinvestitionen. TEDAŞ-Anschlussprozesse wurden vereinfacht. Nutzen Sie unsere kostenlose Beratung für aktuelle Förderungen.",

      faq19Question: "Warum ist deutsche Qualität wichtig?",
      faq19Answer: "Deutschland ist weltweit führend in Solar- und Wärmepumpentechnologie. DIN-Standards (Deutsches Institut für Normung) legen die strengsten Qualitäts- und Sicherheitsanforderungen der Welt fest. Vaillant ist mit 145 Jahren Erfahrung Europas vertrauenswürdigste Heizungsmarke. Der deutsche Ingenieursansatz bedeutet Langlebigkeit, hohe Effizienz und Zuverlässigkeit. Der Wartungsbedarf bleibt minimal, Ausfallraten sind niedrig. Als 089 Bayern bringen wir diese Qualität in die Türkei und bieten Installation nach deutschen Standards.",

      faq20Question: "Wie funktioniert die kostenlose Beratung und was ist enthalten?",
      faq20Answer: "Unsere kostenlose Beratung ist ein umfassender Bewertungsprozess. Zunächst erfolgt ein Vorgespräch per Telefon oder WhatsApp, um Ihre Bedürfnisse zu ermitteln. Dann besucht unser Expertenteam Ihr Haus für eine detaillierte Untersuchung: Dachanalyse (per Drohne), Stromverbrauchshistorie, Zustand der bestehenden Installation, Verschattungsanalyse. Mit 3D-Simulation wird eine jährliche Produktionsprognose erstellt. Sie erhalten ein individuelles Systemdesign und eine detaillierte Kostenanalyse. All diese Leistungen sind völlig kostenlos und ohne Kaufverpflichtung. Die Entscheidung liegt bei Ihnen - wir sind nur hier, um die beste Lösung anzubieten."
    },
    en: {
      badge: "Frequently Asked Questions",
      title: "Your Questions",
      titleHighlight: "Answered",
      subtitle: "Find comprehensive answers to all your questions about solar energy, heat pumps, and integrated energy systems here. We guide you on the path to energy independence in the Mediterranean region.",
      ctaTitle: "Have More Questions?",
      ctaText: "Our expert team is ready to answer all your questions. Take advantage of our free consultation service to create a customized energy solution for your home.",
      ctaButton: "Free Consultation",
      ctaButton2: "Call Now",
      
      faq1Question: "How much does a solar panel system save and when will my investment pay off?",
      faq1Answer: "In the Mediterranean region with an average of 300 sunny days per year, your solar system can reduce your electricity bill by 60-80%. Installation costs for an average villa pay for themselves within 4-6 years thanks to energy savings. Furthermore, homes with solar panels are considered 10-15% more valuable in the real estate market. Our panels manufactured to German DIN standards come with a 25-year performance guarantee, meaning long-term investment security. The average annual savings for a villa in the Antalya region ranges between 15,000-25,000 TL.",

      faq2Question: "How does a heat pump system work and is it efficient in Mediterranean climate?",
      faq2Answer: "A heat pump extracts heat energy from outside air to heat or cool your home - like a refrigerator working in reverse. The mild winter temperatures in the Mediterranean (average 10-15°C) are ideal for heat pumps to operate at maximum efficiency. Our Vaillant aroTHERM system produces 4-5 kW of heat energy for every 1 kW of electricity consumed (COP 4-5). This means up to 75% energy savings compared to conventional electric heating. In summer, the same system cools your home independently of natural gas. The system can work efficiently down to -20°C, though these limits are rarely reached in the Mediterranean climate.",

      faq3Question: "What is the German 4-in-1 system and why is it more advantageous than individual panels?",
      faq3Answer: "The German 4-in-1 system is a comprehensive energy solution that integrates solar panels, heat pump, climate system, and energy storage unit. This system achieves maximum efficiency by having components complement each other. While solar panels produce electricity during the day, excess energy is stored in BYD batteries. The heat pump uses this energy to heat or cool your home. The Samsung climate unit provides precise temperature control. Compared to buying separately, it offers 20-30% cost advantage and up to 40% efficiency increase. Having the entire system under one warranty also simplifies maintenance and service processes.",

      faq4Question: "How does the installation process work and how long does it take?",
      faq4Answer: "Our installation process is professional and transparent. First, a free site visit is made and your home's energy needs are analyzed. Then a customized system design and price quote is prepared. After your approval, equipment procurement takes 2-3 weeks. Installation is completed in 3-5 days depending on system size. Solar panel mounting, electrical connections, inverter installation, and system tests are included in this period. During installation, there's minimal disruption and your daily life is not affected. Finally, the system is commissioned and usage training is provided.",

      faq5Question: "What are the warranty conditions and what happens in case of a malfunction?",
      faq5Answer: "Our systems are protected by comprehensive warranty conditions. Solar panels come with 25-year performance guarantee (first 10 years 90%, next 15 years 80% efficiency), inverters with 10 years, heat pump and climate systems with 5 years manufacturer warranty. Additionally, we provide 2 years workmanship warranty. In case of malfunction, our 24/7 call center is active and on-site service is provided within 24-48 hours in the Antalya region. Thanks to our spare parts stock, repairs are completed quickly. All services under warranty are free of charge.",

      faq6Question: "What does the system cost and are there financing options?",
      faq6Answer: "System costs vary according to your home's size and energy needs. The average cost of a 4-in-1 system for a villa ranges between 200,000-400,000 TL. However, with annual savings of 15,000-25,000 TL, your investment pays back in 4-6 years. As a financing option, we offer loans with 36-60 month terms through our partner banks. Additionally, there's a 5-10% discount for cash payments. After the free site visit, customized payment plans are prepared, and your monthly installment can be set lower than your saved electricity bill.",

      faq7Question: "How is the system maintained and what does it cost?",
      faq7Answer: "Solar panels require minimal maintenance - 2-3 times annual surface cleaning is sufficient. This cleaning is important for efficiency in the Mediterranean climate due to dust and pollen accumulation. For heat pump and climate system, annual professional maintenance is recommended. This maintenance includes filter cleaning, refrigerant check, and system performance tests. Annual maintenance contract cost is approximately 2,000-3,000 TL and includes priority service. Battery systems require no maintenance and are covered under 10-year warranty.",

      faq8Question: "How does the BYD energy storage system work and why is it important?",
      faq8Answer: "The BYD Battery-Box stores excess solar energy produced during the day for use at night or on cloudy days. With LiFePO4 (Lithium Iron Phosphate) technology, it has a capacity of 10,000+ charge cycles - meaning 25+ years lifespan. Thanks to its modular design, it's expandable from 5 kWh to 50 kWh. During grid outages, it automatically activates to provide uninterrupted power supply. Smart energy management maximizes your savings by using battery power during peak hours and grid power during off-peak hours.",

      faq9Question: "What makes the Samsung climate system different from other brands?",
      faq9Answer: "Samsung Wind-Free climate technology provides cooling without direct wind sensation through airflow from 23,000 micro holes. This feature is ideal for comfortable sleep, especially in bedrooms. AI-powered sensors detect the number and position of people in the room to optimize energy use. Remote control via WiFi through the SmartThings app is possible. The use of eco-friendly R32 refrigerant gas offers 67% lower global warming potential. Integrated with the Vaillant heat pump, it enables hybrid heating and cooling.",

      faq10Question: "Why is the system ideal for Mediterranean climate?",
      faq10Answer: "The Mediterranean climate is one of the most suitable regions in the world for energy systems. With an average of 300 sunny days per year, solar panels operate at maximum efficiency. In winter, mild temperatures (5-15°C) keep the heat pump COP values high - the efficiency problems of cold climates don't occur here. In summer at high temperatures (35-40°C), air conditioning needs are met by solar energy. Low humidity increases panel efficiency. Our specially coated panels for salt air offer long-lasting performance even in coastal areas.",

      faq11Question: "Can I become completely grid-independent?",
      faq11Answer: "Yes, off-grid installation is possible, but on-grid hybrid systems are generally more advantageous. In a hybrid system, you can sell excess electricity produced during the day to the grid or accumulate credits. At night or during winter, you can receive grid support when needed. For complete independence, larger battery capacity and generator support are required, which increases costs by 30-50%. For most villa owners, the hybrid system is the most economical and practical solution.",

      faq12Question: "Does the system continue to work during power outages?",
      faq12Answer: "Yes, our hybrid system equipped with BYD battery provides uninterrupted power during power outages. When a grid outage is detected, the system automatically switches to island mode and continues to supply energy from the battery to your home. A 10 kWh capacity battery can cover the basic needs of an average home (refrigerator, lighting, internet, TV) for 8-12 hours. If there's sunlight during the day, the battery continues to charge. Priority circuit design can be made for critical devices (like medical equipment).",

      faq13Question: "Is every roof suitable for solar panels?",
      faq13Answer: "Most roof types are suitable for solar panel installation, but some factors affect efficiency. Ideal conditions: south-facing surface, 30-35 degree slope, and shadow-free area. On flat roofs, special mounting systems achieve the optimal angle. We have suitable mounting solutions for tile, concrete, and metal roof coverings. Roof age and load-bearing capacity are evaluated - panels add only 12-15 kg per m². During the free site visit, drone roof analysis is performed and annual production is calculated with shading simulation.",

      faq14Question: "What is the payback period on the investment?",
      faq14Answer: "The payback period varies between 4-7 years depending on system size and your energy consumption habits. The high solar radiation in the Mediterranean region shortens this period. Factors included in the calculation: your current electricity bill, system capacity, panel orientation and angle, battery usage. Considering the annual 20-30% increase trend in electricity prices, the actual payback period is often 1-2 years shorter than calculated. Over the 25-year panel lifespan, total savings can reach 5-8 times the investment.",

      faq15Question: "How energy efficient is the system?",
      faq15Answer: "Our integrated system offers extraordinary efficiency thanks to synergistic component operation. Our solar panels have 21-22% conversion efficiency - above industry average. The Vaillant heat pump operates at COP 4.5, meaning 1 kW of electricity produces 4.5 kW of heat. Samsung air conditioners have A+++ energy class with SEER 8+ value. BYD batteries minimize energy loss with 95%+ charge-discharge efficiency. The entire system is optimized with smart energy management, keeping total efficiency at 85-90%.",

      faq16Question: "What are the environmental benefits?",
      faq16Answer: "A solar energy system significantly reduces your home's carbon footprint. An average villa system prevents 4-6 tons of CO2 emissions annually - equivalent to the annual carbon dioxide absorption of over 200 trees. It contributes to energy security by reducing fossil fuel dependency. The materials used are recyclable. Samsung air conditioners' R32 gas has 67% lower global warming potential than the old R410A. By using green energy, you leave a cleaner world for your children.",

      faq17Question: "Does the system increase my property value?",
      faq17Answer: "Yes, studies show that homes with solar energy sell for 10-15% higher prices. Low energy costs are a major attraction for buyers. Your Energy Performance Certificate (EPC) rating increases. In Turkey, demand for 'smart homes' and 'green homes' in the real estate market grows every year. For rental properties, the advantage of an energy-efficient home provides higher rental income. System transfer is possible - warranty can be transferred to the new owner.",

      faq18Question: "Are there solar energy incentives in Turkey?",
      faq18Answer: "Various incentive mechanisms exist for solar energy in Turkey. For residences with systems up to 10 kW, excess production can be sold to the grid and offset. VAT reductions are applied during certain periods. Municipalities can offer local incentives - Antalya Metropolitan Municipality occasionally announces support programs. Low-interest loan options are available for renewable energy investments. TEDAŞ connection processes have been simplified. Take advantage of our free consultation for current incentives.",

      faq19Question: "Why is German quality important?",
      faq19Answer: "Germany is the world leader in solar energy and heat pump technology. DIN (German Institute for Standardization) standards set the world's strictest quality and safety requirements. Vaillant, with 145 years of experience, is Europe's most trusted heating brand. The German engineering approach means longevity, high efficiency, and reliability. Maintenance needs remain minimal, failure rates are low. As 089 Bayern, we bring this quality to Turkey and provide installation service according to German standards.",

      faq20Question: "How does the free site visit work and what's included?",
      faq20Answer: "Our free site visit service is a comprehensive evaluation process. First, a preliminary discussion is held via phone or WhatsApp to determine your needs. Then our expert team visits your home for detailed inspection: roof analysis (by drone), electricity consumption history, existing installation condition, shading analysis. A 3D simulation calculates annual production estimate. You receive a customized system design and detailed cost analysis. All these services are completely free with no purchase obligation. The decision is yours - we're just here to offer the best solution."
    },
    ru: {
      badge: "Часто задаваемые вопросы",
      title: "Ваши вопросы",
      titleHighlight: "Наши ответы",
      subtitle: "Здесь вы найдёте исчерпывающие ответы на все ваши вопросы о солнечной энергии, тепловых насосах и интегрированных энергетических системах. Мы сопровождаем вас на пути к энергетической независимости в Средиземноморском регионе.",
      ctaTitle: "Есть ещё вопросы?",
      ctaText: "Наша команда экспертов готова ответить на все ваши вопросы. Воспользуйтесь нашей бесплатной консультацией для создания индивидуального энергетического решения для вашего дома.",
      ctaButton: "Бесплатная консультация",
      ctaButton2: "Позвоните сейчас",
      
      faq1Question: "Сколько экономит система солнечных панелей и когда окупятся мои инвестиции?",
      faq1Answer: "В Средиземноморском регионе, где в среднем 300 солнечных дней в году, ваша солнечная система может снизить счёт за электричество на 60-80%. Затраты на установку для средней виллы окупаются за 4-6 лет благодаря экономии энергии. Кроме того, дома с солнечными панелями считаются на 10-15% более ценными на рынке недвижимости. Наши панели, изготовленные по немецким стандартам DIN, имеют 25-летнюю гарантию производительности. Средняя годовая экономия для виллы в регионе Анталии составляет 15 000-25 000 TL.",

      faq2Question: "Как работает система теплового насоса и эффективна ли она в средиземноморском климате?",
      faq2Answer: "Тепловой насос извлекает тепловую энергию из наружного воздуха для обогрева или охлаждения вашего дома — как холодильник, работающий наоборот. Мягкие зимние температуры Средиземноморья (в среднем 10-15°C) идеальны для работы тепловых насосов с максимальной эффективностью. Наша система Vaillant aroTHERM производит 4-5 кВт тепловой энергии на каждый потреблённый 1 кВт электроэнергии (COP 4-5). Это означает до 75% экономии энергии по сравнению с обычным электрическим отоплением. Система может эффективно работать до -20°C, хотя в средиземноморском климате эти пределы достигаются редко.",

      faq3Question: "Что такое немецкая система 4-в-1 и почему она выгоднее отдельных компонентов?",
      faq3Answer: "Немецкая система 4-в-1 — это комплексное энергетическое решение, объединяющее солнечные панели, тепловой насос, климатическую систему и накопитель энергии. Эта система достигает максимальной эффективности благодаря синергии компонентов. Пока солнечные панели производят электричество днём, избыточная энергия накапливается в батареях BYD. Тепловой насос использует эту энергию для обогрева или охлаждения. Климатическая система Samsung обеспечивает точный контроль температуры. По сравнению с раздельной покупкой система даёт 20-30% экономии и до 40% повышения эффективности.",

      faq4Question: "Как проходит процесс установки и сколько он занимает?",
      faq4Answer: "Наш процесс установки профессионален и прозрачен. Сначала проводится бесплатный осмотр и анализ энергетических потребностей вашего дома. Затем готовится индивидуальный проект системы и ценовое предложение. После вашего одобрения поставка оборудования занимает 2-3 недели. Установка завершается за 3-5 дней в зависимости от размера системы. Монтаж панелей, электрические подключения, установка инвертора и тесты системы включены в этот период. Во время установки минимальные неудобства, и ваша повседневная жизнь не нарушается.",

      faq5Question: "Каковы условия гарантии и что происходит при неисправности?",
      faq5Answer: "Наши системы защищены комплексными гарантийными условиями. На солнечные панели — 25 лет гарантии производительности (первые 10 лет 90%, следующие 15 лет 80% эффективности), на инверторы — 10 лет, на тепловые насосы и климатические системы — 5 лет гарантии производителя. Дополнительно мы предоставляем 2 года гарантии на работы. При неисправности наш колл-центр работает круглосуточно, и в регионе Анталии сервис на месте предоставляется в течение 24-48 часов.",

      faq6Question: "Сколько стоит система и есть ли варианты финансирования?",
      faq6Answer: "Стоимость системы варьируется в зависимости от размера вашего дома и потребностей в энергии. Средняя стоимость системы 4-в-1 для виллы составляет 200 000-400 000 TL. Однако при годовой экономии 15 000-25 000 TL ваши инвестиции окупаются за 4-6 лет. В качестве варианта финансирования мы предлагаем кредиты на 36-60 месяцев через наши банки-партнёры. Также предусмотрена скидка 5-10% при оплате наличными.",

      faq7Question: "Как обслуживается система и сколько это стоит?",
      faq7Answer: "Солнечные панели требуют минимального обслуживания — достаточно 2-3 очистки поверхности в год. Эта очистка важна для эффективности в средиземноморском климате из-за накопления пыли и пыльцы. Для теплового насоса и климатической системы рекомендуется ежегодное профессиональное обслуживание. Это обслуживание включает очистку фильтров, проверку хладагента и тесты производительности. Годовой контракт на обслуживание стоит около 2 000-3 000 TL. Аккумуляторные системы не требуют обслуживания и имеют 10-летнюю гарантию.",

      faq8Question: "Как работает система накопления энергии BYD и почему она важна?",
      faq8Answer: "BYD Battery-Box сохраняет избыточную солнечную энергию, произведённую днём, для использования ночью или в пасмурные дни. С технологией LiFePO4 (литий-железо-фосфат) она имеет ёмкость более 10 000 циклов зарядки — это более 25 лет службы. Благодаря модульной конструкции расширяется от 5 кВт·ч до 50 кВт·ч. При отключении сети автоматически включается для обеспечения бесперебойного питания.",

      faq9Question: "Чем климатическая система Samsung отличается от других брендов?",
      faq9Answer: "Технология Samsung Wind-Free обеспечивает охлаждение без прямого потока воздуха через 23 000 микроотверстий. Эта функция идеальна для комфортного сна, особенно в спальнях. Датчики с ИИ определяют количество и положение людей в комнате для оптимизации энергопотребления. Возможно дистанционное управление через приложение SmartThings по WiFi. Использование экологичного хладагента R32 обеспечивает на 67% меньший потенциал глобального потепления.",

      faq10Question: "Почему система идеальна для средиземноморского климата?",
      faq10Answer: "Средиземноморский климат — один из наиболее подходящих регионов в мире для энергетических систем. При среднем 300 солнечных дней в году солнечные панели работают с максимальной эффективностью. Зимой мягкие температуры (5-15°C) поддерживают высокие значения COP тепловых насосов. Летом при высоких температурах (35-40°C) потребности в кондиционировании покрываются солнечной энергией. Низкая влажность повышает эффективность панелей.",

      faq11Question: "Могу ли я стать полностью независимым от сети?",
      faq11Answer: "Да, автономная установка возможна, но гибридные системы, подключённые к сети, обычно более выгодны. В гибридной системе вы можете продавать избыточное электричество в сеть или накапливать кредиты. Ночью или зимой вы можете получать поддержку от сети при необходимости. Для полной независимости требуются большая ёмкость батарей и генератор, что увеличивает стоимость на 30-50%.",

      faq12Question: "Работает ли система при отключении электричества?",
      faq12Answer: "Да, наша гибридная система с батареей BYD обеспечивает бесперебойное питание при отключениях. При обнаружении отключения сети система автоматически переключается в островной режим и продолжает питать ваш дом от батареи. Батарея ёмкостью 10 кВт·ч может покрывать базовые потребности среднего дома (холодильник, освещение, интернет, ТВ) в течение 8-12 часов.",

      faq13Question: "Подходит ли каждая крыша для солнечных панелей?",
      faq13Answer: "Большинство типов крыш подходят для установки солнечных панелей, но некоторые факторы влияют на эффективность. Идеальные условия: поверхность, обращённая на юг, уклон 30-35 градусов и отсутствие затенения. На плоских крышах специальные монтажные системы обеспечивают оптимальный угол. У нас есть подходящие решения для черепичных, бетонных и металлических крыш. Панели добавляют всего 12-15 кг на м².",

      faq14Question: "Каков срок окупаемости инвестиций?",
      faq14Answer: "Срок окупаемости варьируется от 4 до 7 лет в зависимости от размера системы и ваших привычек потребления энергии. Высокая солнечная радиация в Средиземноморском регионе сокращает этот период. Учитывая ежегодный рост цен на электроэнергию на 20-30%, фактический срок окупаемости часто на 1-2 года короче расчётного. За 25-летний срок службы панелей общая экономия может достичь 5-8-кратного размера инвестиций.",

      faq15Question: "Насколько энергоэффективна система?",
      faq15Answer: "Наша интегрированная система предлагает исключительную эффективность благодаря синергии компонентов. Наши солнечные панели имеют КПД преобразования 21-22% — выше среднего по отрасли. Тепловой насос Vaillant работает с COP 4,5, то есть 1 кВт электричества производит 4,5 кВт тепла. Кондиционеры Samsung имеют класс энергоэффективности A+++ с SEER 8+. Батареи BYD минимизируют потери энергии с эффективностью заряда-разряда 95%+.",

      faq16Question: "Каковы экологические преимущества?",
      faq16Answer: "Система солнечной энергии значительно сокращает углеродный след вашего дома. Средняя система для виллы предотвращает 4-6 тонн выбросов CO2 ежегодно — это эквивалентно годовому поглощению углекислого газа более чем 200 деревьями. Она способствует энергетической безопасности, снижая зависимость от ископаемого топлива. Используемые материалы подлежат переработке.",

      faq17Question: "Повышает ли система стоимость моей недвижимости?",
      faq17Answer: "Да, исследования показывают, что дома с солнечной энергией продаются на 10-15% дороже. Низкие затраты на энергию являются большим преимуществом для покупателей. Ваш рейтинг энергоэффективности (EPC) повышается. В Турции спрос на «умные дома» и «зелёные дома» на рынке недвижимости растёт с каждым годом. Для арендной недвижимости преимущество энергоэффективного дома обеспечивает более высокий доход от аренды.",

      faq18Question: "Есть ли в Турции субсидии на солнечную энергию?",
      faq18Answer: "В Турции существуют различные механизмы стимулирования солнечной энергии. Для жилых помещений с системами до 10 кВт избыточное производство может продаваться в сеть и компенсироваться. Снижение НДС применяется в определённые периоды. Муниципалитеты могут предлагать местные субсидии — муниципалитет Анталии периодически объявляет программы поддержки. Доступны кредиты под низкий процент для инвестиций в возобновляемую энергию.",

      faq19Question: "Почему важно немецкое качество?",
      faq19Answer: "Германия является мировым лидером в технологиях солнечной энергии и тепловых насосов. Стандарты DIN (Немецкий институт стандартизации) устанавливают самые строгие в мире требования к качеству и безопасности. Vaillant с 145-летним опытом — самый надёжный бренд отопления в Европе. Немецкий инженерный подход означает долговечность, высокую эффективность и надёжность. Как 089 Bayern, мы привносим это качество в Турцию.",

      faq20Question: "Как проходит бесплатный осмотр и что входит?",
      faq20Answer: "Наша услуга бесплатного осмотра — это комплексный процесс оценки. Сначала проводится предварительная беседа по телефону или WhatsApp для определения ваших потребностей. Затем наша команда экспертов посещает ваш дом для детального осмотра: анализ крыши (с помощью дрона), история потребления электроэнергии, состояние существующей установки, анализ затенения. 3D-моделирование рассчитывает прогноз годового производства. Вы получаете индивидуальный проект системы и детальный анализ затрат. Все эти услуги полностью бесплатны без обязательств покупки."
    },
    uk: {
      badge: "Часті запитання",
      title: "Ваші запитання",
      titleHighlight: "Наші відповіді",
      subtitle: "Тут ви знайдете вичерпні відповіді на всі ваші запитання про сонячну енергію, теплові насоси та інтегровані енергетичні системи. Ми супроводжуємо вас на шляху до енергетичної незалежності в Середземноморському регіоні.",
      ctaTitle: "Маєте ще запитання?",
      ctaText: "Наша команда експертів готова відповісти на всі ваші запитання. Скористайтеся нашою безкоштовною консультацією для створення індивідуального енергетичного рішення для вашого дому.",
      ctaButton: "Безкоштовна консультація",
      ctaButton2: "Зателефонуйте зараз",
      
      faq1Question: "Скільки економить система сонячних панелей і коли окупляться мої інвестиції?",
      faq1Answer: "У Середземноморському регіоні, де в середньому 300 сонячних днів на рік, ваша сонячна система може знизити рахунок за електрику на 60-80%. Витрати на встановлення для середньої вілли окупаються за 4-6 років завдяки економії енергії. Крім того, будинки з сонячними панелями вважаються на 10-15% ціннішими на ринку нерухомості. Наші панелі, виготовлені за німецькими стандартами DIN, мають 25-річну гарантію продуктивності. Середня річна економія для вілли в регіоні Анталії становить 15 000-25 000 TL.",

      faq2Question: "Як працює система теплового насоса і чи ефективна вона в середземноморському кліматі?",
      faq2Answer: "Тепловий насос витягує теплову енергію з зовнішнього повітря для обігріву або охолодження вашого дому — як холодильник, що працює навпаки. М'які зимові температури Середземномор'я (в середньому 10-15°C) ідеальні для роботи теплових насосів з максимальною ефективністю. Наша система Vaillant aroTHERM виробляє 4-5 кВт теплової енергії на кожен спожитий 1 кВт електроенергії (COP 4-5). Це означає до 75% економії енергії порівняно зі звичайним електричним опаленням.",

      faq3Question: "Що таке німецька система 4-в-1 і чому вона вигідніша за окремі компоненти?",
      faq3Answer: "Німецька система 4-в-1 — це комплексне енергетичне рішення, що об'єднує сонячні панелі, тепловий насос, кліматичну систему та накопичувач енергії. Ця система досягає максимальної ефективності завдяки синергії компонентів. Поки сонячні панелі виробляють електрику вдень, надлишкова енергія накопичується в батареях BYD. Тепловий насос використовує цю енергію для обігріву або охолодження. Порівняно з роздільною покупкою система дає 20-30% економії та до 40% підвищення ефективності.",

      faq4Question: "Як проходить процес встановлення і скільки він займає?",
      faq4Answer: "Наш процес встановлення професійний і прозорий. Спочатку проводиться безкоштовний огляд і аналіз енергетичних потреб вашого дому. Потім готується індивідуальний проект системи та цінова пропозиція. Після вашого схвалення постачання обладнання займає 2-3 тижні. Встановлення завершується за 3-5 днів залежно від розміру системи. Монтаж панелей, електричні підключення, встановлення інвертора та тести системи включені в цей період.",

      faq5Question: "Які умови гарантії і що відбувається при несправності?",
      faq5Answer: "Наші системи захищені комплексними гарантійними умовами. На сонячні панелі — 25 років гарантії продуктивності (перші 10 років 90%, наступні 15 років 80% ефективності), на інвертори — 10 років, на теплові насоси та кліматичні системи — 5 років гарантії виробника. Додатково ми надаємо 2 роки гарантії на роботи. При несправності наш кол-центр працює цілодобово, і в регіоні Анталії сервіс на місці надається протягом 24-48 годин.",

      faq6Question: "Скільки коштує система і чи є варіанти фінансування?",
      faq6Answer: "Вартість системи варіюється залежно від розміру вашого дому та потреб в енергії. Середня вартість системи 4-в-1 для вілли становить 200 000-400 000 TL. Однак при річній економії 15 000-25 000 TL ваші інвестиції окупаються за 4-6 років. Як варіант фінансування ми пропонуємо кредити на 36-60 місяців через наші банки-партнери. Також передбачена знижка 5-10% при оплаті готівкою.",

      faq7Question: "Як обслуговується система і скільки це коштує?",
      faq7Answer: "Сонячні панелі потребують мінімального обслуговування — достатньо 2-3 очищення поверхні на рік. Це очищення важливе для ефективності в середземноморському кліматі через накопичення пилу та пилку. Для теплового насоса та кліматичної системи рекомендується щорічне професійне обслуговування. Це обслуговування включає очищення фільтрів, перевірку холодоагенту та тести продуктивності. Річний контракт на обслуговування коштує близько 2 000-3 000 TL.",

      faq8Question: "Як працює система накопичення енергії BYD і чому вона важлива?",
      faq8Answer: "BYD Battery-Box зберігає надлишкову сонячну енергію, вироблену вдень, для використання вночі або в похмурі дні. З технологією LiFePO4 (літій-залізо-фосфат) вона має ємність понад 10 000 циклів зарядки — це понад 25 років служби. Завдяки модульній конструкції розширюється від 5 кВт·год до 50 кВт·год. При відключенні мережі автоматично вмикається для забезпечення безперебійного живлення.",

      faq9Question: "Чим кліматична система Samsung відрізняється від інших брендів?",
      faq9Answer: "Технологія Samsung Wind-Free забезпечує охолодження без прямого потоку повітря через 23 000 мікроотворів. Ця функція ідеальна для комфортного сну, особливо в спальнях. Датчики з ШІ визначають кількість та положення людей у кімнаті для оптимізації енергоспоживання. Можливе дистанційне керування через додаток SmartThings по WiFi. Використання екологічного холодоагенту R32 забезпечує на 67% менший потенціал глобального потепління.",

      faq10Question: "Чому система ідеальна для середземноморського клімату?",
      faq10Answer: "Середземноморський клімат — один з найбільш підходящих регіонів у світі для енергетичних систем. При середніх 300 сонячних днях на рік сонячні панелі працюють з максимальною ефективністю. Взимку м'які температури (5-15°C) підтримують високі значення COP теплових насосів. Влітку при високих температурах (35-40°C) потреби в кондиціонуванні покриваються сонячною енергією. Низька вологість підвищує ефективність панелей.",

      faq11Question: "Чи можу я стати повністю незалежним від мережі?",
      faq11Answer: "Так, автономне встановлення можливе, але гібридні системи, підключені до мережі, зазвичай вигідніші. У гібридній системі ви можете продавати надлишкове електрику в мережу або накопичувати кредити. Вночі або взимку ви можете отримувати підтримку від мережі за потреби. Для повної незалежності потрібні більша ємність батарей і генератор, що збільшує вартість на 30-50%.",

      faq12Question: "Чи працює система при відключенні електрики?",
      faq12Answer: "Так, наша гібридна система з батареєю BYD забезпечує безперебійне живлення при відключеннях. При виявленні відключення мережі система автоматично перемикається в острівний режим і продовжує живити ваш дім від батареї. Батарея ємністю 10 кВт·год може покривати базові потреби середнього дому (холодильник, освітлення, інтернет, ТВ) протягом 8-12 годин.",

      faq13Question: "Чи підходить кожен дах для сонячних панелей?",
      faq13Answer: "Більшість типів дахів підходять для встановлення сонячних панелей, але деякі фактори впливають на ефективність. Ідеальні умови: поверхня, звернена на південь, нахил 30-35 градусів і відсутність затінення. На плоских дахах спеціальні монтажні системи забезпечують оптимальний кут. У нас є підходящі рішення для черепичних, бетонних і металевих дахів. Панелі додають лише 12-15 кг на м².",

      faq14Question: "Який термін окупності інвестицій?",
      faq14Answer: "Термін окупності варіюється від 4 до 7 років залежно від розміру системи та ваших звичок споживання енергії. Висока сонячна радіація в Середземноморському регіоні скорочує цей період. Враховуючи щорічне зростання цін на електроенергію на 20-30%, фактичний термін окупності часто на 1-2 роки коротший за розрахунковий. За 25-річний термін служби панелей загальна економія може досягти 5-8-кратного розміру інвестицій.",

      faq15Question: "Наскільки енергоефективна система?",
      faq15Answer: "Наша інтегрована система пропонує виняткову ефективність завдяки синергії компонентів. Наші сонячні панелі мають ККД перетворення 21-22% — вище середнього по галузі. Тепловий насос Vaillant працює з COP 4,5, тобто 1 кВт електрики виробляє 4,5 кВт тепла. Кондиціонери Samsung мають клас енергоефективності A+++ з SEER 8+. Батареї BYD мінімізують втрати енергії з ефективністю заряду-розряду 95%+.",

      faq16Question: "Які екологічні переваги?",
      faq16Answer: "Система сонячної енергії значно скорочує вуглецевий слід вашого дому. Середня система для вілли запобігає 4-6 тоннам викидів CO2 щорічно — це еквівалентно річному поглинанню вуглекислого газу понад 200 деревами. Вона сприяє енергетичній безпеці, знижуючи залежність від викопного палива. Використовувані матеріали підлягають переробці.",

      faq17Question: "Чи підвищує система вартість моєї нерухомості?",
      faq17Answer: "Так, дослідження показують, що будинки з сонячною енергією продаються на 10-15% дорожче. Низькі витрати на енергію є великою перевагою для покупців. Ваш рейтинг енергоефективності (EPC) підвищується. В Туреччині попит на «розумні будинки» та «зелені будинки» на ринку нерухомості зростає щороку. Для орендної нерухомості перевага енергоефективного будинку забезпечує вищий дохід від оренди.",

      faq18Question: "Чи є в Туреччині субсидії на сонячну енергію?",
      faq18Answer: "В Туреччині існують різні механізми стимулювання сонячної енергії. Для житлових приміщень з системами до 10 кВт надлишкове виробництво може продаватися в мережу і компенсуватися. Зниження ПДВ застосовується в певні періоди. Муніципалітети можуть пропонувати місцеві субсидії — муніципалітет Анталії періодично оголошує програми підтримки. Доступні кредити під низький відсоток для інвестицій у відновлювану енергію.",

      faq19Question: "Чому важлива німецька якість?",
      faq19Answer: "Німеччина є світовим лідером у технологіях сонячної енергії та теплових насосів. Стандарти DIN (Німецький інститут стандартизації) встановлюють найсуворіші у світі вимоги до якості та безпеки. Vaillant зі 145-річним досвідом — найнадійніший бренд опалення в Європі. Німецький інженерний підхід означає довговічність, високу ефективність і надійність. Як 089 Bayern, ми привносимо цю якість в Туреччину.",

      faq20Question: "Як проходить безкоштовний огляд і що входить?",
      faq20Answer: "Наша послуга безкоштовного огляду — це комплексний процес оцінки. Спочатку проводиться попередня бесіда по телефону або WhatsApp для визначення ваших потреб. Потім наша команда експертів відвідує ваш дім для детального огляду: аналіз даху (за допомогою дрона), історія споживання електроенергії, стан існуючої установки, аналіз затінення. 3D-моделювання розраховує прогноз річного виробництва. Ви отримуєте індивідуальний проект системи та детальний аналіз витрат. Усі ці послуги повністю безкоштовні без зобов'язань покупки."
    },
    ar: {
      badge: "الأسئلة الشائعة",
      title: "أسئلتكم",
      titleHighlight: "إجاباتنا",
      subtitle: "هنا تجدون إجابات شاملة على جميع أسئلتكم حول الطاقة الشمسية والمضخات الحرارية وأنظمة الطاقة المتكاملة. نرشدكم في رحلتكم نحو الاستقلال الطاقي في منطقة البحر المتوسط.",
      ctaTitle: "هل لديك المزيد من الأسئلة؟",
      ctaText: "فريق خبرائنا مستعد للإجابة على جميع أسئلتك. استفد من خدمة الاستشارة المجانية لإنشاء حل طاقة مخصص لمنزلك.",
      ctaButton: "استشارة مجانية",
      ctaButton2: "اتصل الآن",
      
      faq1Question: "كم توفر لوحة الطاقة الشمسية ومتى ستسترد استثماري؟",
      faq1Answer: "في منطقة البحر المتوسط مع متوسط 300 يوم مشمس سنوياً، يمكن لنظامك الشمسي تقليل فاتورة الكهرباء بنسبة 60-80%. تكاليف التركيب لفيلا متوسطة تسترد نفسها خلال 4-6 سنوات بفضل توفير الطاقة. علاوة على ذلك، تعتبر المنازل المزودة بالألواح الشمسية أكثر قيمة بنسبة 10-15% في سوق العقارات. ألواحنا المصنعة وفق معايير DIN الألمانية تأتي مع ضمان أداء لمدة 25 عاماً. متوسط التوفير السنوي لفيلا في منطقة أنطاليا يتراوح بين 15,000-25,000 ليرة تركية.",

      faq2Question: "كيف يعمل نظام المضخة الحرارية وهل هو فعال في مناخ البحر المتوسط؟",
      faq2Answer: "المضخة الحرارية تستخرج الطاقة الحرارية من الهواء الخارجي لتدفئة أو تبريد منزلك - مثل ثلاجة تعمل بالعكس. درجات الحرارة الشتوية المعتدلة في البحر المتوسط (متوسط 10-15 درجة مئوية) مثالية لتشغيل المضخات الحرارية بأقصى كفاءة. نظام Vaillant aroTHERM الخاص بنا ينتج 4-5 كيلوواط من الطاقة الحرارية لكل 1 كيلوواط من الكهرباء المستهلكة (COP 4-5). هذا يعني توفيراً في الطاقة يصل إلى 75% مقارنة بالتدفئة الكهربائية التقليدية.",

      faq3Question: "ما هو النظام الألماني 4-في-1 ولماذا هو أفضل من المكونات المنفردة؟",
      faq3Answer: "النظام الألماني 4-في-1 هو حل طاقة شامل يدمج الألواح الشمسية والمضخة الحرارية ونظام التكييف ووحدة تخزين الطاقة. يحقق هذا النظام أقصى كفاءة من خلال تكامل المكونات. بينما تنتج الألواح الشمسية الكهرباء نهاراً، يتم تخزين الطاقة الزائدة في بطاريات BYD. تستخدم المضخة الحرارية هذه الطاقة للتدفئة أو التبريد. مقارنة بالشراء المنفصل، يوفر 20-30% في التكلفة وزيادة في الكفاءة تصل إلى 40%.",

      faq4Question: "كيف تتم عملية التركيب وكم تستغرق؟",
      faq4Answer: "عملية التركيب لدينا احترافية وشفافة. أولاً، يتم إجراء زيارة مجانية لتحليل احتياجات منزلك من الطاقة. ثم يتم إعداد تصميم نظام مخصص وعرض أسعار. بعد موافقتك، يستغرق توريد المعدات 2-3 أسابيع. يكتمل التركيب في 3-5 أيام حسب حجم النظام. تشمل هذه الفترة تركيب الألواح والتوصيلات الكهربائية وتركيب العاكس واختبارات النظام.",

      faq5Question: "ما هي شروط الضمان وماذا يحدث في حالة العطل؟",
      faq5Answer: "أنظمتنا محمية بشروط ضمان شاملة. الألواح الشمسية لديها ضمان أداء 25 عاماً (أول 10 سنوات 90%، الـ 15 سنة التالية 80% كفاءة)، العاكسات 10 سنوات، المضخات الحرارية وأنظمة التكييف 5 سنوات ضمان الشركة المصنعة. بالإضافة إلى ذلك، نقدم سنتين ضمان على العمل. في حالة العطل، مركز الاتصال لدينا متاح على مدار الساعة طوال الأسبوع ويتم توفير الخدمة في الموقع خلال 24-48 ساعة في منطقة أنطاليا.",

      faq6Question: "كم تكلفة النظام وهل توجد خيارات تمويل؟",
      faq6Answer: "تختلف تكلفة النظام حسب حجم منزلك واحتياجاتك من الطاقة. متوسط تكلفة نظام 4-في-1 لفيلا يتراوح بين 200,000-400,000 ليرة تركية. ومع ذلك، مع توفير سنوي قدره 15,000-25,000 ليرة تركية، يسترد استثمارك في 4-6 سنوات. كخيار تمويل، نقدم قروضاً بمدة 36-60 شهراً من خلال بنوكنا الشريكة. كما يوجد خصم 5-10% للدفع النقدي.",

      faq7Question: "كيف تتم صيانة النظام وكم تكلف؟",
      faq7Answer: "الألواح الشمسية تتطلب صيانة بسيطة - تنظيف السطح 2-3 مرات سنوياً يكفي. هذا التنظيف مهم للكفاءة في مناخ البحر المتوسط بسبب تراكم الغبار وحبوب اللقاح. للمضخة الحرارية ونظام التكييف، يوصى بصيانة احترافية سنوية. تشمل هذه الصيانة تنظيف الفلاتر وفحص غاز التبريد واختبارات أداء النظام. تكلفة عقد الصيانة السنوي حوالي 2,000-3,000 ليرة تركية.",

      faq8Question: "كيف يعمل نظام تخزين الطاقة BYD ولماذا هو مهم؟",
      faq8Answer: "BYD Battery-Box يخزن الطاقة الشمسية الزائدة المنتجة نهاراً لاستخدامها ليلاً أو في الأيام الغائمة. مع تقنية LiFePO4 (فوسفات حديد الليثيوم)، لديه سعة تزيد عن 10,000 دورة شحن - وهذا يعني أكثر من 25 عاماً من العمر الافتراضي. بفضل تصميمه المعياري، يمكن توسيعه من 5 كيلوواط ساعة إلى 50 كيلوواط ساعة. عند انقطاع الشبكة، ينشط تلقائياً لتوفير طاقة بدون انقطاع.",

      faq9Question: "ما الذي يميز نظام تكييف Samsung عن العلامات التجارية الأخرى؟",
      faq9Answer: "تقنية Samsung Wind-Free توفر تبريداً بدون إحساس بالرياح المباشرة من خلال تدفق الهواء من 23,000 ثقب صغير. هذه الميزة مثالية للنوم المريح، خاصة في غرف النوم. المستشعرات المدعومة بالذكاء الاصطناعي تكتشف عدد الأشخاص ومواقعهم في الغرفة لتحسين استهلاك الطاقة. التحكم عن بعد عبر تطبيق SmartThings ممكن عبر WiFi. استخدام غاز التبريد الصديق للبيئة R32 يوفر إمكانية احترار عالمي أقل بنسبة 67%.",

      faq10Question: "لماذا النظام مثالي لمناخ البحر المتوسط؟",
      faq10Answer: "مناخ البحر المتوسط هو من أنسب المناطق في العالم لأنظمة الطاقة. مع متوسط 300 يوم مشمس سنوياً، تعمل الألواح الشمسية بأقصى كفاءة. في الشتاء، تحافظ درجات الحرارة المعتدلة (5-15 درجة مئوية) على قيم COP عالية للمضخات الحرارية. في الصيف عند درجات الحرارة المرتفعة (35-40 درجة مئوية)، تلبي الطاقة الشمسية احتياجات التكييف. الرطوبة المنخفضة تزيد كفاءة الألواح.",

      faq11Question: "هل يمكنني أن أصبح مستقلاً تماماً عن الشبكة؟",
      faq11Answer: "نعم، التركيب المستقل عن الشبكة ممكن، لكن الأنظمة الهجينة المتصلة بالشبكة عادة ما تكون أكثر فائدة. في النظام الهجين، يمكنك بيع الكهرباء الزائدة المنتجة نهاراً للشبكة أو تجميع رصيد. في الليل أو الشتاء، يمكنك الحصول على دعم من الشبكة عند الحاجة. للاستقلال الكامل، تحتاج سعة بطارية أكبر ودعم مولد، مما يزيد التكلفة بنسبة 30-50%.",

      faq12Question: "هل يستمر النظام في العمل أثناء انقطاع الكهرباء؟",
      faq12Answer: "نعم، نظامنا الهجين المجهز ببطارية BYD يوفر طاقة بدون انقطاع أثناء انقطاع الكهرباء. عند اكتشاف انقطاع الشبكة، ينتقل النظام تلقائياً إلى وضع الجزيرة ويستمر في تزويد منزلك بالطاقة من البطارية. بطارية بسعة 10 كيلوواط ساعة يمكنها تغطية الاحتياجات الأساسية لمنزل متوسط (ثلاجة، إضاءة، إنترنت، تلفزيون) لمدة 8-12 ساعة.",

      faq13Question: "هل كل سقف مناسب للألواح الشمسية؟",
      faq13Answer: "معظم أنواع الأسطح مناسبة لتركيب الألواح الشمسية، لكن بعض العوامل تؤثر على الكفاءة. الظروف المثالية: سطح يواجه الجنوب، ميل 30-35 درجة، ومنطقة خالية من الظل. على الأسطح المسطحة، أنظمة التركيب الخاصة تحقق الزاوية المثلى. لدينا حلول تركيب مناسبة للأسطح المبلطة والخرسانية والمعدنية. الألواح تضيف فقط 12-15 كجم لكل متر مربع.",

      faq14Question: "ما هي فترة استرداد الاستثمار؟",
      faq14Answer: "تتراوح فترة الاسترداد بين 4-7 سنوات حسب حجم النظام وعادات استهلاكك للطاقة. الإشعاع الشمسي العالي في منطقة البحر المتوسط يقصر هذه الفترة. بالنظر إلى الزيادة السنوية في أسعار الكهرباء بنسبة 20-30%، فإن فترة الاسترداد الفعلية غالباً ما تكون أقصر بـ 1-2 سنة من المحسوبة. على مدى 25 عاماً من عمر الألواح، يمكن أن يصل إجمالي التوفير إلى 5-8 أضعاف الاستثمار.",

      faq15Question: "ما مدى كفاءة النظام في استهلاك الطاقة؟",
      faq15Answer: "يوفر نظامنا المتكامل كفاءة استثنائية بفضل التآزر بين المكونات. ألواحنا الشمسية لديها كفاءة تحويل 21-22% - أعلى من متوسط الصناعة. المضخة الحرارية Vaillant تعمل بـ COP 4.5، أي أن 1 كيلوواط من الكهرباء ينتج 4.5 كيلوواط من الحرارة. مكيفات Samsung لديها تصنيف طاقة A+++ مع قيمة SEER 8+. بطاريات BYD تقلل فقدان الطاقة بكفاءة شحن-تفريغ 95%+.",

      faq16Question: "ما هي الفوائد البيئية؟",
      faq16Answer: "نظام الطاقة الشمسية يقلل بشكل كبير من البصمة الكربونية لمنزلك. نظام فيلا متوسط يمنع 4-6 أطنان من انبعاثات CO2 سنوياً - وهذا يعادل امتصاص ثاني أكسيد الكربون السنوي لأكثر من 200 شجرة. يساهم في أمن الطاقة عن طريق تقليل الاعتماد على الوقود الأحفوري. المواد المستخدمة قابلة لإعادة التدوير.",

      faq17Question: "هل يزيد النظام من قيمة ملكيتي؟",
      faq17Answer: "نعم، تظهر الدراسات أن المنازل المزودة بالطاقة الشمسية تباع بأسعار أعلى بنسبة 10-15%. تكاليف الطاقة المنخفضة تعتبر عامل جذب كبير للمشترين. يرتفع تصنيف شهادة أداء الطاقة (EPC) الخاص بك. في تركيا، الطلب على \"المنازل الذكية\" و\"المنازل الخضراء\" في سوق العقارات ينمو كل عام. للعقارات المؤجرة، ميزة المنزل الموفر للطاقة توفر دخل إيجار أعلى.",

      faq18Question: "هل توجد حوافز للطاقة الشمسية في تركيا؟",
      faq18Answer: "توجد آليات حوافز مختلفة للطاقة الشمسية في تركيا. للمساكن ذات الأنظمة حتى 10 كيلوواط، يمكن بيع الإنتاج الزائد للشبكة وتعويضه. تطبق تخفيضات ضريبة القيمة المضافة في فترات معينة. يمكن للبلديات تقديم حوافز محلية - تعلن بلدية أنطاليا الكبرى أحياناً عن برامج دعم. تتوفر خيارات قروض بفائدة منخفضة للاستثمارات في الطاقة المتجددة.",

      faq19Question: "لماذا الجودة الألمانية مهمة؟",
      faq19Answer: "ألمانيا هي الرائدة عالمياً في تقنيات الطاقة الشمسية والمضخات الحرارية. معايير DIN (المعهد الألماني للتوحيد القياسي) تضع أصعب متطلبات الجودة والسلامة في العالم. Vaillant مع 145 عاماً من الخبرة هي أكثر علامة تجارية موثوقة للتدفئة في أوروبا. النهج الهندسي الألماني يعني الطول العمر والكفاءة العالية والموثوقية. كـ 089 Bayern، نجلب هذه الجودة إلى تركيا.",

      faq20Question: "كيف تتم الزيارة المجانية وماذا تتضمن؟",
      faq20Answer: "خدمة الزيارة المجانية لدينا هي عملية تقييم شاملة. أولاً، يتم إجراء مناقشة أولية عبر الهاتف أو واتساب لتحديد احتياجاتك. ثم يزور فريق خبرائنا منزلك لفحص تفصيلي: تحليل السقف (بالطائرة بدون طيار)، تاريخ استهلاك الكهرباء، حالة التركيب الحالي، تحليل الظل. محاكاة ثلاثية الأبعاد تحسب تقدير الإنتاج السنوي. تحصل على تصميم نظام مخصص وتحليل تكلفة مفصل. كل هذه الخدمات مجانية تماماً بدون التزام بالشراء."
    },
  };

  const c = content[language as keyof typeof content] || content.de;
  const isRtl = language === "ar";

  const faqs = [
    { icon: Sun, question: c.faq1Question, answer: c.faq1Answer, color: "from-amber-500 to-orange-600" },
    { icon: Zap, question: c.faq2Question, answer: c.faq2Answer, color: "from-primary to-blue-600" },
    { icon: Settings, question: c.faq3Question, answer: c.faq3Answer, color: "from-emerald-500 to-teal-600" },
    { icon: Clock, question: c.faq4Question, answer: c.faq4Answer, color: "from-violet-500 to-purple-600" },
    { icon: Shield, question: c.faq5Question, answer: c.faq5Answer, color: "from-cyan-500 to-blue-600" },
    { icon: Calculator, question: c.faq6Question, answer: c.faq6Answer, color: "from-rose-500 to-pink-600" },
    { icon: Wrench, question: c.faq7Question, answer: c.faq7Answer, color: "from-slate-500 to-gray-600" },
    { icon: Battery, question: c.faq8Question, answer: c.faq8Answer, color: "from-green-500 to-emerald-600" },
    { icon: Thermometer, question: c.faq9Question, answer: c.faq9Answer, color: "from-sky-500 to-cyan-600" },
    { icon: MapPin, question: c.faq10Question, answer: c.faq10Answer, color: "from-orange-500 to-red-600" },
    { icon: PlugZap, question: c.faq11Question, answer: c.faq11Answer, color: "from-indigo-500 to-violet-600" },
    { icon: AlertTriangle, question: c.faq12Question, answer: c.faq12Answer, color: "from-yellow-500 to-amber-600" },
    { icon: Home, question: c.faq13Question, answer: c.faq13Answer, color: "from-stone-500 to-neutral-600" },
    { icon: TrendingUp, question: c.faq14Question, answer: c.faq14Answer, color: "from-lime-500 to-green-600" },
    { icon: Zap, question: c.faq15Question, answer: c.faq15Answer, color: "from-blue-500 to-indigo-600" },
    { icon: Leaf, question: c.faq16Question, answer: c.faq16Answer, color: "from-teal-500 to-emerald-600" },
    { icon: Building, question: c.faq17Question, answer: c.faq17Answer, color: "from-purple-500 to-fuchsia-600" },
    { icon: Gift, question: c.faq18Question, answer: c.faq18Answer, color: "from-red-500 to-rose-600" },
    { icon: Award, question: c.faq19Question, answer: c.faq19Answer, color: "from-amber-500 to-yellow-600" },
    { icon: HelpCircle, question: c.faq20Question, answer: c.faq20Answer, color: "from-primary to-accent" },
  ];

  return (
    <div className={`min-h-screen bg-background ${isRtl ? "rtl" : ""}`} dir={isRtl ? "rtl" : "ltr"} data-testid="page-faq">
      <SEOHead page="faq" />
      <Header onCtaClick={scrollToCalculator} />
      
      <section className="relative pt-20 pb-8 overflow-hidden" data-testid="section-faq-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
          <div className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-accent/80 to-orange-600/80 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 shadow-lg">
                <div className="w-7 h-7 bg-white/20 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xs">089</span>
                </div>
                <span className="text-white text-sm font-bold">Bayern 4-in-1</span>
              </div>
              <Badge variant="secondary" className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <HelpCircle className={`w-4 h-4 ${isRtl ? "ml-2" : "mr-2"}`} />
                {c.badge}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {c.title}{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
                {c.titleHighlight}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              {c.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToCalculator}
                size="lg"
                className="bg-gradient-to-r from-accent to-orange-600 border-0 shadow-lg px-8"
                data-testid="button-faq-hero-cta"
              >
                {c.ctaButton}
                <ArrowRight className={`w-5 h-5 ${isRtl ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white bg-white/10 backdrop-blur-sm px-8" 
                onClick={() => window.location.href = "tel:+905071832036"}
                data-testid="button-faq-hero-phone"
              >
                <Phone className={`w-5 h-5 ${isRtl ? "ml-2" : "mr-2"}`} />
                +90 507 183 2036
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background" data-testid="section-faq-list">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border/50 overflow-visible" data-testid={`card-faq-${index}`}>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${faq.color} flex items-center justify-center flex-shrink-0`}>
                      <faq.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-foreground leading-tight pt-1">
                      {faq.question}
                    </h2>
                  </div>
                  <div className={`${isRtl ? "pr-14 md:pr-16" : "pl-14 md:pl-16"}`}>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" data-testid="section-faq-cta">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.ctaTitle}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{c.ctaText}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToCalculator}
              size="lg"
              className="bg-gradient-to-r from-accent to-orange-600 border-0 shadow-lg px-8"
              data-testid="button-faq-cta"
            >
              {c.ctaButton}
              <ArrowRight className={`w-5 h-5 ${isRtl ? "mr-2 rotate-180" : "ml-2"}`} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 bg-white/50 backdrop-blur-sm px-8" 
              onClick={() => window.location.href = "tel:+905071832036"}
              data-testid="button-faq-phone"
            >
              <Phone className={`w-5 h-5 ${isRtl ? "ml-2" : "mr-2"}`} />
              {c.ctaButton2}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
