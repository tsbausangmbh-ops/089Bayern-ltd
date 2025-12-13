import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Sartlar() {
  const { language } = useLanguage();

  const content = {
    tr: {
      backButton: "Ana Sayfa",
      title: "Şartlar ve Koşullar",
      lastUpdate: "Son güncelleme",
      dateLocale: "tr-TR",
      
      section1Title: "1. Firma Bilgileri",
      tradeName: "Ticari Unvan",
      tradeNameValue: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Adres",
      addressValue: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Alanya/Antalya, Turkiye",
      phone: "Telefon",
      email: "E-posta",
      web: "Web",
      
      section2Title: "2. Hizmetlerimiz",
      section2Intro: "089 Bayern Enerji Sistemleri olarak aşağıdaki hizmetleri sunmaktayız:",
      service1: "Güneş paneli sistemleri kurulumu",
      service2: "Isı pompası sistemleri kurulumu (Vaillant yetkili)",
      service3: "Klima sistemleri kurulumu (Samsung yetkili)",
      service4: "Enerji depolama (batarya) sistemleri",
      service5: "Enerji verimliliği danışmanlığı",
      service6: "Bakım ve servis hizmetleri",
      
      section3Title: "3. Teklif ve Fiyatlandırma",
      pricing1: "Tüm tekliflerimiz ücretsiz keşif sonrasında hazırlanır",
      pricing2: "Fiyatlar TL (Türk Lirası) cinsinden belirtilir",
      pricing3: "Teklifler 30 gün süreyle geçerlidir",
      pricing4: "KDV dahil/hariç durumu teklifte açıkça belirtilir",
      pricing5: "Proje bazlı özel fiyatlandırma uygulanabilir",
      
      section4Title: "4. Ödeme Koşulları",
      payment1: "Nakit ödeme",
      payment2: "Banka havalesi / EFT",
      payment3: "Kredi kartı (tek çekim veya taksitli)",
      payment4: "Proje bazlı taksitli ödeme planları",
      paymentNote: "Ödeme planları sözleşmede detaylı olarak belirtilir.",
      
      section5Title: "5. Garanti Koşulları",
      warranty1: "Güneş Panelleri:",
      warranty1Value: "25 yıl performans garantisi",
      warranty2: "Vaillant Isı Pompası:",
      warranty2Value: "10 yıl üretici garantisi",
      warranty3: "Samsung Klima:",
      warranty3Value: "5 yıl üretici garantisi",
      warranty4: "BYD Batarya:",
      warranty4Value: "10 yıl üretici garantisi",
      warranty5: "İşçilik:",
      warranty5Value: "2 yıl kurulum garantisi",
      warrantyNote: "Garanti koşulları ürün bazında farklılık gösterebilir. Detaylar sözleşmede belirtilir.",
      
      section6Title: "6. Kurulum Süreci",
      process1: "Ücretsiz keşif ve ihtiyaç analizi",
      process2: "Teknik proje hazırlama",
      process3: "Teklif sunumu ve sözleşme",
      process4: "Malzeme tedariki",
      process5: "Profesyonel kurulum",
      process6: "Test ve devreye alma",
      process7: "Kullanım eğitimi",
      
      section7Title: "7. İptal ve İade",
      section7Intro: "6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamında:",
      cancel1: "Sözleşme imzalandıktan sonra 14 gün içinde cayma hakkınız bulunmaktadır",
      cancel2: "Kurulum başladıktan sonra cayma hakkı uygulanmaz",
      cancel3: "Özel sipariş ürünlerde cayma hakkı bulunmamaktadır",
      cancel4: "İade durumunda yapılan masraflar düşülebilir",
      
      section8Title: "8. Sorumluluk Sınırları",
      liability1: "Doğal afetlerden kaynaklanan hasarlar garanti kapsamı dışındadır",
      liability2: "Kullanıcı hatasından kaynaklanan arızalar garanti kapsamı dışındadır",
      liability3: "Yetkisiz müdahale sonucu oluşan hasarlar garanti kapsamı dışındadır",
      liability4: "Elektrik şebekesinden kaynaklanan hasarlar garanti kapsamı dışındadır",
      
      section9Title: "9. Uyuşmazlık Çözümü",
      section9Text: "Bu sözleşmeden doğan uyuşmazlıklarda Antalya Mahkemeleri ve İcra Daireleri yetkilidir. Tüketici şikayetleri için Tüketici Hakem Heyetlerine başvurulabilir.",
      
      section10Title: "10. İletişim",
      section10Text: "Şartlar ve koşullarımız hakkında sorularınız için bizimle iletişime geçebilirsiniz:",
      whatsapp: "WhatsApp",
    },
    de: {
      backButton: "Startseite",
      title: "Allgemeine Geschäftsbedingungen",
      lastUpdate: "Letzte Aktualisierung",
      dateLocale: "de-DE",
      
      section1Title: "1. Unternehmensinformationen",
      tradeName: "Handelsname",
      tradeNameValue: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Adresse",
      addressValue: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Alanya/Antalya, Türkei",
      phone: "Telefon",
      email: "E-Mail",
      web: "Web",
      
      section2Title: "2. Unsere Dienstleistungen",
      section2Intro: "Als 089 Bayern Enerji Sistemleri bieten wir folgende Dienstleistungen an:",
      service1: "Installation von Solaranlagen",
      service2: "Installation von Wärmepumpensystemen (Vaillant autorisiert)",
      service3: "Installation von Klimaanlagen (Samsung autorisiert)",
      service4: "Energiespeichersysteme (Batterien)",
      service5: "Energieeffizienzberatung",
      service6: "Wartungs- und Serviceleistungen",
      
      section3Title: "3. Angebot und Preisgestaltung",
      pricing1: "Alle unsere Angebote werden nach kostenloser Besichtigung erstellt",
      pricing2: "Preise werden in TL (Türkische Lira) angegeben",
      pricing3: "Angebote sind 30 Tage gültig",
      pricing4: "MwSt. inklusiv/exklusiv wird im Angebot klar angegeben",
      pricing5: "Projektbezogene Sonderpreise können angewendet werden",
      
      section4Title: "4. Zahlungsbedingungen",
      payment1: "Barzahlung",
      payment2: "Banküberweisung / EFT",
      payment3: "Kreditkarte (Einmalzahlung oder Ratenzahlung)",
      payment4: "Projektbezogene Ratenzahlungspläne",
      paymentNote: "Zahlungspläne werden im Vertrag detailliert angegeben.",
      
      section5Title: "5. Garantiebedingungen",
      warranty1: "Solarmodule:",
      warranty1Value: "25 Jahre Leistungsgarantie",
      warranty2: "Vaillant Wärmepumpe:",
      warranty2Value: "10 Jahre Herstellergarantie",
      warranty3: "Samsung Klimaanlage:",
      warranty3Value: "5 Jahre Herstellergarantie",
      warranty4: "BYD Batterie:",
      warranty4Value: "10 Jahre Herstellergarantie",
      warranty5: "Arbeitsleistung:",
      warranty5Value: "2 Jahre Installationsgarantie",
      warrantyNote: "Garantiebedingungen können je nach Produkt variieren. Details werden im Vertrag angegeben.",
      
      section6Title: "6. Installationsprozess",
      process1: "Kostenlose Besichtigung und Bedarfsanalyse",
      process2: "Technische Projektplanung",
      process3: "Angebotspräsentation und Vertrag",
      process4: "Materialbeschaffung",
      process5: "Professionelle Installation",
      process6: "Test und Inbetriebnahme",
      process7: "Nutzerschulung",
      
      section7Title: "7. Stornierung und Rückgabe",
      section7Intro: "Gemäß dem türkischen Verbraucherschutzgesetz Nr. 6502:",
      cancel1: "Sie haben innerhalb von 14 Tagen nach Vertragsunterzeichnung ein Widerrufsrecht",
      cancel2: "Nach Beginn der Installation entfällt das Widerrufsrecht",
      cancel3: "Bei Sonderanfertigungen besteht kein Widerrufsrecht",
      cancel4: "Bei Rückgabe können angefallene Kosten abgezogen werden",
      
      section8Title: "8. Haftungsbeschränkungen",
      liability1: "Schäden durch Naturkatastrophen sind von der Garantie ausgeschlossen",
      liability2: "Schäden durch Benutzerfehler sind von der Garantie ausgeschlossen",
      liability3: "Schäden durch unbefugte Eingriffe sind von der Garantie ausgeschlossen",
      liability4: "Schäden durch das Stromnetz sind von der Garantie ausgeschlossen",
      
      section9Title: "9. Streitbeilegung",
      section9Text: "Für Streitigkeiten aus diesem Vertrag sind die Gerichte und Vollstreckungsbehörden in Antalya zuständig. Bei Verbraucherbeschwerden können Verbraucherschlichtungsstellen eingeschaltet werden.",
      
      section10Title: "10. Kontakt",
      section10Text: "Bei Fragen zu unseren Allgemeinen Geschäftsbedingungen können Sie uns kontaktieren:",
      whatsapp: "WhatsApp",
    },
    en: {
      backButton: "Home",
      title: "Terms and Conditions",
      lastUpdate: "Last updated",
      dateLocale: "en-US",
      
      section1Title: "1. Company Information",
      tradeName: "Trade Name",
      tradeNameValue: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Address",
      addressValue: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Alanya/Antalya, Turkey",
      phone: "Phone",
      email: "Email",
      web: "Web",
      
      section2Title: "2. Our Services",
      section2Intro: "As 089 Bayern Enerji Sistemleri, we offer the following services:",
      service1: "Solar panel system installation",
      service2: "Heat pump system installation (Vaillant authorized)",
      service3: "Air conditioning system installation (Samsung authorized)",
      service4: "Energy storage (battery) systems",
      service5: "Energy efficiency consulting",
      service6: "Maintenance and service",
      
      section3Title: "3. Quotation and Pricing",
      pricing1: "All our quotations are prepared after free site survey",
      pricing2: "Prices are quoted in TL (Turkish Lira)",
      pricing3: "Quotations are valid for 30 days",
      pricing4: "VAT inclusive/exclusive status is clearly stated in the quotation",
      pricing5: "Project-based special pricing may apply",
      
      section4Title: "4. Payment Terms",
      payment1: "Cash payment",
      payment2: "Bank transfer / EFT",
      payment3: "Credit card (single payment or installments)",
      payment4: "Project-based installment payment plans",
      paymentNote: "Payment plans are specified in detail in the contract.",
      
      section5Title: "5. Warranty Terms",
      warranty1: "Solar Panels:",
      warranty1Value: "25 years performance warranty",
      warranty2: "Vaillant Heat Pump:",
      warranty2Value: "10 years manufacturer warranty",
      warranty3: "Samsung Air Conditioning:",
      warranty3Value: "5 years manufacturer warranty",
      warranty4: "BYD Battery:",
      warranty4Value: "10 years manufacturer warranty",
      warranty5: "Workmanship:",
      warranty5Value: "2 years installation warranty",
      warrantyNote: "Warranty terms may vary by product. Details are specified in the contract.",
      
      section6Title: "6. Installation Process",
      process1: "Free site survey and needs analysis",
      process2: "Technical project preparation",
      process3: "Quotation presentation and contract",
      process4: "Material procurement",
      process5: "Professional installation",
      process6: "Testing and commissioning",
      process7: "User training",
      
      section7Title: "7. Cancellation and Refund",
      section7Intro: "Under Turkish Consumer Protection Law No. 6502:",
      cancel1: "You have a right of withdrawal within 14 days after signing the contract",
      cancel2: "Right of withdrawal does not apply after installation has started",
      cancel3: "There is no right of withdrawal for custom-ordered products",
      cancel4: "In case of return, incurred expenses may be deducted",
      
      section8Title: "8. Limitation of Liability",
      liability1: "Damages caused by natural disasters are not covered by warranty",
      liability2: "Damages caused by user error are not covered by warranty",
      liability3: "Damages caused by unauthorized intervention are not covered by warranty",
      liability4: "Damages caused by the electrical grid are not covered by warranty",
      
      section9Title: "9. Dispute Resolution",
      section9Text: "Antalya Courts and Enforcement Offices are authorized for disputes arising from this contract. Consumer Arbitration Committees may be contacted for consumer complaints.",
      
      section10Title: "10. Contact",
      section10Text: "For questions about our terms and conditions, you can contact us:",
      whatsapp: "WhatsApp",
    },
    ru: {
      backButton: "Главная",
      title: "Условия и положения",
      lastUpdate: "Последнее обновление",
      dateLocale: "ru-RU",
      
      section1Title: "1. Информация о компании",
      tradeName: "Торговое наименование",
      tradeNameValue: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Адрес",
      addressValue: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Алания/Анталья, Турция",
      phone: "Телефон",
      email: "Электронная почта",
      web: "Веб-сайт",
      
      section2Title: "2. Наши услуги",
      section2Intro: "Как 089 Bayern Enerji Sistemleri, мы предлагаем следующие услуги:",
      service1: "Установка солнечных панелей",
      service2: "Установка тепловых насосов (авторизованный Vaillant)",
      service3: "Установка кондиционеров (авторизованный Samsung)",
      service4: "Системы накопления энергии (батареи)",
      service5: "Консультации по энергоэффективности",
      service6: "Техническое обслуживание и сервис",
      
      section3Title: "3. Предложения и ценообразование",
      pricing1: "Все наши предложения готовятся после бесплатного осмотра",
      pricing2: "Цены указаны в TL (турецких лирах)",
      pricing3: "Предложения действительны 30 дней",
      pricing4: "Включение/исключение НДС чётко указывается в предложении",
      pricing5: "Может применяться индивидуальное ценообразование по проектам",
      
      section4Title: "4. Условия оплаты",
      payment1: "Наличный расчёт",
      payment2: "Банковский перевод / EFT",
      payment3: "Кредитная карта (единовременно или в рассрочку)",
      payment4: "Проектные планы рассрочки",
      paymentNote: "Планы платежей подробно указываются в договоре.",
      
      section5Title: "5. Гарантийные условия",
      warranty1: "Солнечные панели:",
      warranty1Value: "25 лет гарантии производительности",
      warranty2: "Тепловой насос Vaillant:",
      warranty2Value: "10 лет гарантии производителя",
      warranty3: "Кондиционер Samsung:",
      warranty3Value: "5 лет гарантии производителя",
      warranty4: "Батарея BYD:",
      warranty4Value: "10 лет гарантии производителя",
      warranty5: "Работа:",
      warranty5Value: "2 года гарантии на установку",
      warrantyNote: "Гарантийные условия могут отличаться в зависимости от продукта. Детали указываются в договоре.",
      
      section6Title: "6. Процесс установки",
      process1: "Бесплатный осмотр и анализ потребностей",
      process2: "Подготовка технического проекта",
      process3: "Презентация предложения и договор",
      process4: "Закупка материалов",
      process5: "Профессиональная установка",
      process6: "Тестирование и ввод в эксплуатацию",
      process7: "Обучение пользователей",
      
      section7Title: "7. Отмена и возврат",
      section7Intro: "В соответствии с турецким Законом о защите прав потребителей № 6502:",
      cancel1: "Вы имеете право на отказ в течение 14 дней после подписания договора",
      cancel2: "После начала установки право на отказ не применяется",
      cancel3: "На продукцию по индивидуальному заказу право на отказ не распространяется",
      cancel4: "При возврате понесённые расходы могут быть вычтены",
      
      section8Title: "8. Ограничение ответственности",
      liability1: "Ущерб от стихийных бедствий не покрывается гарантией",
      liability2: "Ущерб по вине пользователя не покрывается гарантией",
      liability3: "Ущерб от несанкционированного вмешательства не покрывается гарантией",
      liability4: "Ущерб от электросети не покрывается гарантией",
      
      section9Title: "9. Разрешение споров",
      section9Text: "Суды и исполнительные органы Антальи уполномочены рассматривать споры, возникающие из данного договора. По жалобам потребителей можно обращаться в Комиссии по защите прав потребителей.",
      
      section10Title: "10. Контакты",
      section10Text: "По вопросам о наших условиях и положениях вы можете связаться с нами:",
      whatsapp: "WhatsApp",
    },
    uk: {
      backButton: "Головна",
      title: "Умови та положення",
      lastUpdate: "Останнє оновлення",
      dateLocale: "uk-UA",
      
      section1Title: "1. Інформація про компанію",
      tradeName: "Торгова назва",
      tradeNameValue: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Адреса",
      addressValue: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Аланія/Анталія, Туреччина",
      phone: "Телефон",
      email: "Електронна пошта",
      web: "Веб-сайт",
      
      section2Title: "2. Наші послуги",
      section2Intro: "Як 089 Bayern Enerji Sistemleri, ми пропонуємо наступні послуги:",
      service1: "Встановлення сонячних панелей",
      service2: "Встановлення теплових насосів (авторизований Vaillant)",
      service3: "Встановлення кондиціонерів (авторизований Samsung)",
      service4: "Системи накопичення енергії (батареї)",
      service5: "Консультації з енергоефективності",
      service6: "Технічне обслуговування та сервіс",
      
      section3Title: "3. Пропозиції та ціноутворення",
      pricing1: "Усі наші пропозиції готуються після безкоштовного огляду",
      pricing2: "Ціни вказані в TL (турецьких лірах)",
      pricing3: "Пропозиції дійсні 30 днів",
      pricing4: "Включення/виключення ПДВ чітко вказується в пропозиції",
      pricing5: "Може застосовуватися індивідуальне ціноутворення за проектами",
      
      section4Title: "4. Умови оплати",
      payment1: "Готівковий розрахунок",
      payment2: "Банківський переказ / EFT",
      payment3: "Кредитна картка (одноразово або в розстрочку)",
      payment4: "Проектні плани розстрочки",
      paymentNote: "Плани платежів детально вказуються в договорі.",
      
      section5Title: "5. Гарантійні умови",
      warranty1: "Сонячні панелі:",
      warranty1Value: "25 років гарантії продуктивності",
      warranty2: "Тепловий насос Vaillant:",
      warranty2Value: "10 років гарантії виробника",
      warranty3: "Кондиціонер Samsung:",
      warranty3Value: "5 років гарантії виробника",
      warranty4: "Батарея BYD:",
      warranty4Value: "10 років гарантії виробника",
      warranty5: "Робота:",
      warranty5Value: "2 роки гарантії на встановлення",
      warrantyNote: "Гарантійні умови можуть відрізнятися залежно від продукту. Деталі вказуються в договорі.",
      
      section6Title: "6. Процес встановлення",
      process1: "Безкоштовний огляд та аналіз потреб",
      process2: "Підготовка технічного проекту",
      process3: "Презентація пропозиції та договір",
      process4: "Закупівля матеріалів",
      process5: "Професійне встановлення",
      process6: "Тестування та введення в експлуатацію",
      process7: "Навчання користувачів",
      
      section7Title: "7. Скасування та повернення",
      section7Intro: "Відповідно до турецького Закону про захист прав споживачів № 6502:",
      cancel1: "Ви маєте право на відмову протягом 14 днів після підписання договору",
      cancel2: "Після початку встановлення право на відмову не застосовується",
      cancel3: "На продукцію за індивідуальним замовленням право на відмову не поширюється",
      cancel4: "При поверненні понесені витрати можуть бути вирахувані",
      
      section8Title: "8. Обмеження відповідальності",
      liability1: "Збитки від стихійних лих не покриваються гарантією",
      liability2: "Збитки з вини користувача не покриваються гарантією",
      liability3: "Збитки від несанкціонованого втручання не покриваються гарантією",
      liability4: "Збитки від електромережі не покриваються гарантією",
      
      section9Title: "9. Вирішення спорів",
      section9Text: "Суди та виконавчі органи Анталії уповноважені розглядати спори, що виникають з даного договору. За скаргами споживачів можна звертатися до Комісій із захисту прав споживачів.",
      
      section10Title: "10. Контакти",
      section10Text: "З питань щодо наших умов та положень ви можете зв'язатися з нами:",
      whatsapp: "WhatsApp",
    },
    ar: {
      backButton: "الصفحة الرئيسية",
      title: "الشروط والأحكام",
      lastUpdate: "آخر تحديث",
      dateLocale: "ar-SA",
      
      section1Title: "1. معلومات الشركة",
      tradeName: "الاسم التجاري",
      tradeNameValue: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "العنوان",
      addressValue: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 ألانيا/أنطاليا، تركيا",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      web: "الموقع",
      
      section2Title: "2. خدماتنا",
      section2Intro: "كـ 089 Bayern Enerji Sistemleri، نقدم الخدمات التالية:",
      service1: "تركيب أنظمة الألواح الشمسية",
      service2: "تركيب أنظمة المضخات الحرارية (معتمد من Vaillant)",
      service3: "تركيب أنظمة التكييف (معتمد من Samsung)",
      service4: "أنظمة تخزين الطاقة (البطاريات)",
      service5: "استشارات كفاءة الطاقة",
      service6: "الصيانة والخدمة",
      
      section3Title: "3. العروض والتسعير",
      pricing1: "جميع عروضنا تُعد بعد المعاينة المجانية",
      pricing2: "الأسعار مُقتبسة بالليرة التركية (TL)",
      pricing3: "العروض صالحة لمدة 30 يوماً",
      pricing4: "يُذكر بوضوح شمول/استثناء ضريبة القيمة المضافة في العرض",
      pricing5: "قد يُطبق تسعير خاص حسب المشروع",
      
      section4Title: "4. شروط الدفع",
      payment1: "الدفع نقداً",
      payment2: "تحويل بنكي / EFT",
      payment3: "بطاقة ائتمان (دفعة واحدة أو بالتقسيط)",
      payment4: "خطط تقسيط حسب المشروع",
      paymentNote: "يتم تحديد خطط الدفع بالتفصيل في العقد.",
      
      section5Title: "5. شروط الضمان",
      warranty1: "الألواح الشمسية:",
      warranty1Value: "25 سنة ضمان الأداء",
      warranty2: "مضخة حرارية Vaillant:",
      warranty2Value: "10 سنوات ضمان الشركة المصنعة",
      warranty3: "مكيف Samsung:",
      warranty3Value: "5 سنوات ضمان الشركة المصنعة",
      warranty4: "بطارية BYD:",
      warranty4Value: "10 سنوات ضمان الشركة المصنعة",
      warranty5: "العمالة:",
      warranty5Value: "سنتان ضمان التركيب",
      warrantyNote: "قد تختلف شروط الضمان حسب المنتج. التفاصيل مُحددة في العقد.",
      
      section6Title: "6. عملية التركيب",
      process1: "معاينة مجانية وتحليل الاحتياجات",
      process2: "إعداد المشروع الفني",
      process3: "تقديم العرض والعقد",
      process4: "توريد المواد",
      process5: "التركيب المحترف",
      process6: "الاختبار والتشغيل",
      process7: "تدريب المستخدم",
      
      section7Title: "7. الإلغاء والاسترداد",
      section7Intro: "بموجب قانون حماية المستهلك التركي رقم 6502:",
      cancel1: "لديك حق الانسحاب خلال 14 يوماً بعد توقيع العقد",
      cancel2: "لا يسري حق الانسحاب بعد بدء التركيب",
      cancel3: "لا يوجد حق انسحاب للمنتجات المصنوعة حسب الطلب",
      cancel4: "في حالة الإرجاع، قد يتم خصم المصاريف المتكبدة",
      
      section8Title: "8. حدود المسؤولية",
      liability1: "الأضرار الناجمة عن الكوارث الطبيعية غير مشمولة بالضمان",
      liability2: "الأضرار الناجمة عن خطأ المستخدم غير مشمولة بالضمان",
      liability3: "الأضرار الناجمة عن التدخل غير المصرح به غير مشمولة بالضمان",
      liability4: "الأضرار الناجمة عن شبكة الكهرباء غير مشمولة بالضمان",
      
      section9Title: "9. حل النزاعات",
      section9Text: "محاكم ومكاتب التنفيذ في أنطاليا مخولة للنظر في النزاعات الناشئة عن هذا العقد. يمكن الاتصال بلجان التحكيم الاستهلاكية لشكاوى المستهلكين.",
      
      section10Title: "10. الاتصال",
      section10Text: "لأي أسئلة حول الشروط والأحكام الخاصة بنا، يمكنك الاتصال بنا:",
      whatsapp: "واتساب",
    },
  };

  const t = content[language as keyof typeof content] || content.tr;
  const isRTL = language === 'ar';

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className={`w-4 h-4 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
            {t.backButton}
          </Button>
        </Link>

        <h1 className="text-3xl font-bold mb-8">{t.title}</h1>
        <p className="text-sm text-muted-foreground mb-8">
          {t.lastUpdate}: {new Date().toLocaleDateString(t.dateLocale)}
        </p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section1Title}</h2>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm"><strong>{t.tradeName}:</strong> {t.tradeNameValue}</p>
              <p className="text-sm"><strong>{t.address}:</strong> {t.addressValue}</p>
              <p className="text-sm"><strong>{t.phone}:</strong> +90 507 183 2036</p>
              <p className="text-sm"><strong>{t.email}:</strong> info@089bayern.com</p>
              <p className="text-sm"><strong>{t.web}:</strong> www.089bayern.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section2Title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              {t.section2Intro}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t.service1}</li>
              <li>{t.service2}</li>
              <li>{t.service3}</li>
              <li>{t.service4}</li>
              <li>{t.service5}</li>
              <li>{t.service6}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section3Title}</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t.pricing1}</li>
              <li>{t.pricing2}</li>
              <li>{t.pricing3}</li>
              <li>{t.pricing4}</li>
              <li>{t.pricing5}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section4Title}</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t.payment1}</li>
              <li>{t.payment2}</li>
              <li>{t.payment3}</li>
              <li>{t.payment4}</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              {t.paymentNote}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section5Title}</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>{t.warranty1}</strong> {t.warranty1Value}</li>
              <li><strong>{t.warranty2}</strong> {t.warranty2Value}</li>
              <li><strong>{t.warranty3}</strong> {t.warranty3Value}</li>
              <li><strong>{t.warranty4}</strong> {t.warranty4Value}</li>
              <li><strong>{t.warranty5}</strong> {t.warranty5Value}</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              {t.warrantyNote}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section6Title}</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>{t.process1}</li>
              <li>{t.process2}</li>
              <li>{t.process3}</li>
              <li>{t.process4}</li>
              <li>{t.process5}</li>
              <li>{t.process6}</li>
              <li>{t.process7}</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section7Title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.section7Intro}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
              <li>{t.cancel1}</li>
              <li>{t.cancel2}</li>
              <li>{t.cancel3}</li>
              <li>{t.cancel4}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section8Title}</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t.liability1}</li>
              <li>{t.liability2}</li>
              <li>{t.liability3}</li>
              <li>{t.liability4}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section9Title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.section9Text}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section10Title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.section10Text}
            </p>
            <div className="bg-muted/50 p-4 rounded-lg mt-4">
              <p className="text-sm"><strong>{t.phone}:</strong> +90 507 183 2036</p>
              <p className="text-sm"><strong>{t.email}:</strong> info@089bayern.com</p>
              <p className="text-sm"><strong>{t.whatsapp}:</strong> +90 507 183 2036</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
