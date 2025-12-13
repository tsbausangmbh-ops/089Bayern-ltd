import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/lib/LanguageContext";

export default function OnBilgilendirme() {
  const { language } = useLanguage();

  const content = {
    tr: {
      backButton: "Ana Sayfa",
      title: "Ön Bilgilendirme Formu",
      subtitle: "6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği'nin 5. maddesi uyarınca tüketicinin bilgilendirilmesi amaçlı ön bilgilendirme formu",
      lastUpdate: "Son güncelleme",
      dateLocale: "tr-TR",

      section1Title: "1. Satıcı Bilgileri",
      tradeName: "Ticari Unvan",
      tradeNameValue: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Adres",
      addressValue: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Alanya/Antalya, Türkiye",
      phone: "Telefon",
      email: "E-posta",
      website: "Web Sitesi",
      tradeRegNo: "Ticaret Sicil No",
      mersisNo: "MERSIS No",
      taxOffice: "Vergi Dairesi / No",
      toBeUpdated: "[Kayıt sonrası güncellenecektir]",

      section2Title: "2. Ürün/Hizmet Bilgileri",
      section2Intro: "Şirketimiz aşağıdaki enerji sistemleri ürün ve hizmetlerini sunmaktadır:",
      solarTitle: "Güneş Enerji Sistemleri",
      solar1: "Güneş paneli kurulumu",
      solar2: "İnverter sistemleri",
      solar3: "Montaj ve kablolama",
      solar4: "Elektrik bağlantısı",
      heatPumpTitle: "Isı Pompası Sistemleri",
      heatPump1: "Vaillant yetkili satışı",
      heatPump2: "Profesyonel kurulum",
      heatPump3: "Devreye alma",
      heatPump4: "Garanti kapsamında servis",
      acTitle: "Klima Sistemleri",
      ac1: "Samsung yetkili satışı",
      ac2: "Ev ve ticari klimalar",
      ac3: "VRF sistemleri",
      ac4: "Bakım ve onarım",
      storageTitle: "Enerji Depolama",
      storage1: "BYD batarya sistemleri",
      storage2: "Ev tipi depolama",
      storage3: "Ticari depolama",
      storage4: "Hibrit sistemler",

      section3Title: "3. Satış Fiyatı ve Ödeme Koşulları",
      price1: "Tüm fiyatlar Türk Lirası (TL) cinsindendir",
      price2: "KDV dahil/hariç durumu teklifte açıkça belirtilir",
      price3: "Fiyatlar ücretsiz keşif sonrasında belirlenir",
      price4: "Teklifler 30 gün süreyle geçerlidir",
      paymentMethods: "Ödeme Yöntemleri:",
      payment1: "Nakit ödeme",
      payment2: "Banka havalesi / EFT",
      payment3: "Kredi kartı (tek çekim veya taksitli)",
      payment4: "Proje bazlı taksitli ödeme planları",

      section4Title: "4. Teslimat Bilgileri",
      delivery1: "Teslimat süresi proje kapsamına göre değişir",
      delivery2: "Kurulum gerektiren sistemlerde tarih karşılıklı mutabakatla belirlenir",
      delivery3: "Hizmet bölgemiz: Antalya, Muğla, Aydın, Denizli ve çevresi",
      delivery4: "Teslimat ücreti proje teklifine dahildir",
      delivery5: "Yasal süre olarak en geç 30 gün içinde teslimat yapılır",

      section5Title: "5. Cayma Hakkı",
      withdrawalInfo: "14 Gün Cayma Hakkı",
      withdrawalText: "6502 sayılı Kanun gereği, sözleşme imzalandıktan sonra 14 gün içinde herhangi bir gerekçe göstermeksizin cayma hakkınız bulunmaktadır.",
      withdrawalExceptions: "Cayma Hakkı İstisnaları:",
      exception1: "Kişisel ihtiyaçlara göre özel olarak hazırlanan ürünler",
      exception2: "Kurulum hizmeti başlatılmış sistemler",
      exception3: "Ambalajı açılmış, kullanılmış ürünler",
      exception4: "Özel sipariş üzerine temin edilen ürünler",
      withdrawalNotice: "Cayma Bildirimi:",
      withdrawalNoticeText: "Cayma hakkınızı kullanmak için 14 gün içinde info@089bayern.com adresine e-posta göndererek veya +90 507 183 2036 numarasını arayarak bildirimde bulunabilirsiniz.",

      section6Title: "6. Garanti Koşulları",
      productCol: "Ürün",
      durationCol: "Garanti Süresi",
      typeCol: "Garanti Türü",
      solarPanels: "Güneş Panelleri",
      solarWarranty: "25 yıl",
      performanceWarranty: "Performans garantisi",
      vaillantPump: "Vaillant Isı Pompası",
      vaillantWarranty: "10 yıl",
      manufacturerWarranty: "Üretici garantisi",
      samsungAC: "Samsung Klima",
      samsungWarranty: "5 yıl",
      bydBattery: "BYD Batarya",
      bydWarranty: "10 yıl",
      workmanship: "İşçilik/Kurulum",
      workmanshipWarranty: "2 yıl",
      bayernWarranty: "089 Bayern garantisi",

      section7Title: "7. Şikayet ve Uyuşmazlık",
      section7Intro: "Şikayet ve uyuşmazlık halinde aşağıdaki mercilere başvurabilirsiniz:",
      complaint1: "Tüketici Hakem Heyetleri (belirli tutarların altındaki uyuşmazlıklar için)",
      complaint2: "Tüketici Mahkemeleri",
      complaint3: "Türkiye Tüketici Şikayet Hattı: 175",
      jurisdiction: "Yetkili mahkeme ve hakem heyeti: Antalya",

      section8Title: "8. Kişisel Verilerin Korunması",
      section8Text: "Kişisel verileriniz 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında korunmaktadır. Detaylı bilgi için",
      kvkkLink: "KVKK Aydınlatma Metni",
      section8TextEnd: "sayfamızı inceleyebilirsiniz.",

      contactTitle: "İletişim Bilgileri",
      generalContact: "Genel İletişim",
      whatsapp: "WhatsApp",
      workingHours: "Çalışma Saatleri",
      weekdays: "Pazartesi - Cuma: 09:00 - 18:00",
      saturday: "Cumartesi: 09:00 - 14:00",
      sunday: "Pazar: Kapalı",

      footer: "Bu ön bilgilendirme formu, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği kapsamında hazırlanmıştır.",
    },
    de: {
      backButton: "Startseite",
      title: "Vorabinformationsformular",
      subtitle: "Vorabinformationsformular zur Verbraucherinformation gemäß Artikel 5 des türkischen Verbraucherschutzgesetzes Nr. 6502 und der Verordnung über Fernabsatzverträge",
      lastUpdate: "Letzte Aktualisierung",
      dateLocale: "de-DE",

      section1Title: "1. Verkäuferinformationen",
      tradeName: "Handelsname",
      tradeNameValue: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Adresse",
      addressValue: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Alanya/Antalya, Türkei",
      phone: "Telefon",
      email: "E-Mail",
      website: "Webseite",
      tradeRegNo: "Handelsregisternummer",
      mersisNo: "MERSIS-Nr.",
      taxOffice: "Finanzamt / Steuernummer",
      toBeUpdated: "[Wird nach der Registrierung aktualisiert]",

      section2Title: "2. Produkt-/Dienstleistungsinformationen",
      section2Intro: "Unser Unternehmen bietet folgende Energiesystemprodukte und -dienstleistungen an:",
      solarTitle: "Solarenergiesysteme",
      solar1: "Solarmodul-Installation",
      solar2: "Wechselrichtersysteme",
      solar3: "Montage und Verkabelung",
      solar4: "Elektrischer Anschluss",
      heatPumpTitle: "Wärmepumpensysteme",
      heatPump1: "Vaillant autorisierter Verkauf",
      heatPump2: "Professionelle Installation",
      heatPump3: "Inbetriebnahme",
      heatPump4: "Service unter Garantie",
      acTitle: "Klimaanlagen",
      ac1: "Samsung autorisierter Verkauf",
      ac2: "Privat- und Gewerbeklimaanlagen",
      ac3: "VRF-Systeme",
      ac4: "Wartung und Reparatur",
      storageTitle: "Energiespeicherung",
      storage1: "BYD-Batteriesysteme",
      storage2: "Heimspeicher",
      storage3: "Gewerbliche Speicher",
      storage4: "Hybridsysteme",

      section3Title: "3. Verkaufspreis und Zahlungsbedingungen",
      price1: "Alle Preise in Türkischer Lira (TL)",
      price2: "MwSt. inklusiv/exklusiv wird im Angebot klar angegeben",
      price3: "Preise werden nach kostenloser Besichtigung festgelegt",
      price4: "Angebote sind 30 Tage gültig",
      paymentMethods: "Zahlungsmethoden:",
      payment1: "Barzahlung",
      payment2: "Banküberweisung / EFT",
      payment3: "Kreditkarte (Einmalzahlung oder Ratenzahlung)",
      payment4: "Projektbezogene Ratenzahlungspläne",

      section4Title: "4. Lieferinformationen",
      delivery1: "Lieferzeit variiert je nach Projektumfang",
      delivery2: "Bei installationspflichtigen Systemen wird der Termin in gegenseitiger Absprache festgelegt",
      delivery3: "Unser Servicegebiet: Antalya, Muğla, Aydın, Denizli und Umgebung",
      delivery4: "Lieferkosten sind im Projektangebot enthalten",
      delivery5: "Gesetzliche Lieferfrist: maximal 30 Tage",

      section5Title: "5. Widerrufsrecht",
      withdrawalInfo: "14 Tage Widerrufsrecht",
      withdrawalText: "Gemäß Gesetz Nr. 6502 haben Sie innerhalb von 14 Tagen nach Vertragsunterzeichnung das Recht, ohne Angabe von Gründen vom Vertrag zurückzutreten.",
      withdrawalExceptions: "Ausnahmen vom Widerrufsrecht:",
      exception1: "Produkte, die speziell nach persönlichen Bedürfnissen angefertigt wurden",
      exception2: "Systeme, bei denen die Installation begonnen wurde",
      exception3: "Geöffnete oder benutzte Produkte",
      exception4: "Produkte, die auf Sonderbestellung beschafft wurden",
      withdrawalNotice: "Widerrufsmitteilung:",
      withdrawalNoticeText: "Um Ihr Widerrufsrecht auszuüben, können Sie innerhalb von 14 Tagen eine E-Mail an info@089bayern.com senden oder unter +90 507 183 2036 anrufen.",

      section6Title: "6. Garantiebedingungen",
      productCol: "Produkt",
      durationCol: "Garantiedauer",
      typeCol: "Garantieart",
      solarPanels: "Solarmodule",
      solarWarranty: "25 Jahre",
      performanceWarranty: "Leistungsgarantie",
      vaillantPump: "Vaillant Wärmepumpe",
      vaillantWarranty: "10 Jahre",
      manufacturerWarranty: "Herstellergarantie",
      samsungAC: "Samsung Klimaanlage",
      samsungWarranty: "5 Jahre",
      bydBattery: "BYD Batterie",
      bydWarranty: "10 Jahre",
      workmanship: "Arbeitsleistung/Installation",
      workmanshipWarranty: "2 Jahre",
      bayernWarranty: "089 Bayern Garantie",

      section7Title: "7. Beschwerden und Streitigkeiten",
      section7Intro: "Bei Beschwerden und Streitigkeiten können Sie folgende Stellen kontaktieren:",
      complaint1: "Verbraucherschlichtungsstellen (für Streitigkeiten unter bestimmten Beträgen)",
      complaint2: "Verbrauchergerichte",
      complaint3: "Türkische Verbraucherbeschwerde-Hotline: 175",
      jurisdiction: "Zuständiges Gericht und Schlichtungsstelle: Antalya",

      section8Title: "8. Datenschutz",
      section8Text: "Ihre personenbezogenen Daten werden gemäß dem türkischen Datenschutzgesetz Nr. 6698 (KVKK) geschützt. Für detaillierte Informationen besuchen Sie unsere",
      kvkkLink: "KVKK-Datenschutzerklärung",
      section8TextEnd: ".",

      contactTitle: "Kontaktinformationen",
      generalContact: "Allgemeiner Kontakt",
      whatsapp: "WhatsApp",
      workingHours: "Geschäftszeiten",
      weekdays: "Montag - Freitag: 09:00 - 18:00",
      saturday: "Samstag: 09:00 - 14:00",
      sunday: "Sonntag: Geschlossen",

      footer: "Dieses Vorabinformationsformular wurde gemäß dem türkischen Verbraucherschutzgesetz Nr. 6502 und der Verordnung über Fernabsatzverträge erstellt.",
    },
    en: {
      backButton: "Home",
      title: "Preliminary Information Form",
      subtitle: "Preliminary information form for consumer information pursuant to Article 5 of the Turkish Consumer Protection Law No. 6502 and the Distance Contracts Regulation",
      lastUpdate: "Last updated",
      dateLocale: "en-US",

      section1Title: "1. Seller Information",
      tradeName: "Trade Name",
      tradeNameValue: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Address",
      addressValue: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Alanya/Antalya, Turkey",
      phone: "Phone",
      email: "Email",
      website: "Website",
      tradeRegNo: "Trade Registry No",
      mersisNo: "MERSIS No",
      taxOffice: "Tax Office / No",
      toBeUpdated: "[To be updated after registration]",

      section2Title: "2. Product/Service Information",
      section2Intro: "Our company offers the following energy system products and services:",
      solarTitle: "Solar Energy Systems",
      solar1: "Solar panel installation",
      solar2: "Inverter systems",
      solar3: "Mounting and cabling",
      solar4: "Electrical connection",
      heatPumpTitle: "Heat Pump Systems",
      heatPump1: "Vaillant authorized sales",
      heatPump2: "Professional installation",
      heatPump3: "Commissioning",
      heatPump4: "Service under warranty",
      acTitle: "Air Conditioning Systems",
      ac1: "Samsung authorized sales",
      ac2: "Residential and commercial air conditioners",
      ac3: "VRF systems",
      ac4: "Maintenance and repair",
      storageTitle: "Energy Storage",
      storage1: "BYD battery systems",
      storage2: "Residential storage",
      storage3: "Commercial storage",
      storage4: "Hybrid systems",

      section3Title: "3. Sales Price and Payment Terms",
      price1: "All prices are in Turkish Lira (TL)",
      price2: "VAT inclusive/exclusive status is clearly stated in the quotation",
      price3: "Prices are determined after free site survey",
      price4: "Quotations are valid for 30 days",
      paymentMethods: "Payment Methods:",
      payment1: "Cash payment",
      payment2: "Bank transfer / EFT",
      payment3: "Credit card (single payment or installments)",
      payment4: "Project-based installment payment plans",

      section4Title: "4. Delivery Information",
      delivery1: "Delivery time varies depending on project scope",
      delivery2: "For systems requiring installation, the date is determined by mutual agreement",
      delivery3: "Our service area: Antalya, Muğla, Aydın, Denizli and surrounding areas",
      delivery4: "Delivery cost is included in the project quotation",
      delivery5: "Legal delivery period: maximum 30 days",

      section5Title: "5. Right of Withdrawal",
      withdrawalInfo: "14 Day Right of Withdrawal",
      withdrawalText: "Pursuant to Law No. 6502, you have the right to withdraw from the contract within 14 days after signing without giving any reason.",
      withdrawalExceptions: "Exceptions to the Right of Withdrawal:",
      exception1: "Products specially prepared according to personal needs",
      exception2: "Systems where installation service has started",
      exception3: "Opened or used products",
      exception4: "Products procured on special order",
      withdrawalNotice: "Withdrawal Notice:",
      withdrawalNoticeText: "To exercise your right of withdrawal, you can send an email to info@089bayern.com or call +90 507 183 2036 within 14 days.",

      section6Title: "6. Warranty Terms",
      productCol: "Product",
      durationCol: "Warranty Period",
      typeCol: "Warranty Type",
      solarPanels: "Solar Panels",
      solarWarranty: "25 years",
      performanceWarranty: "Performance warranty",
      vaillantPump: "Vaillant Heat Pump",
      vaillantWarranty: "10 years",
      manufacturerWarranty: "Manufacturer warranty",
      samsungAC: "Samsung Air Conditioning",
      samsungWarranty: "5 years",
      bydBattery: "BYD Battery",
      bydWarranty: "10 years",
      workmanship: "Workmanship/Installation",
      workmanshipWarranty: "2 years",
      bayernWarranty: "089 Bayern warranty",

      section7Title: "7. Complaints and Disputes",
      section7Intro: "In case of complaints and disputes, you can contact the following authorities:",
      complaint1: "Consumer Arbitration Committees (for disputes below certain amounts)",
      complaint2: "Consumer Courts",
      complaint3: "Turkey Consumer Complaint Line: 175",
      jurisdiction: "Authorized court and arbitration committee: Antalya",

      section8Title: "8. Personal Data Protection",
      section8Text: "Your personal data is protected under the Turkish Personal Data Protection Law No. 6698 (KVKK). For detailed information, please review our",
      kvkkLink: "KVKK Privacy Notice",
      section8TextEnd: "page.",

      contactTitle: "Contact Information",
      generalContact: "General Contact",
      whatsapp: "WhatsApp",
      workingHours: "Working Hours",
      weekdays: "Monday - Friday: 09:00 - 18:00",
      saturday: "Saturday: 09:00 - 14:00",
      sunday: "Sunday: Closed",

      footer: "This preliminary information form has been prepared in accordance with the Turkish Consumer Protection Law No. 6502 and the Distance Contracts Regulation.",
    },
    ru: {
      backButton: "Главная",
      title: "Форма предварительной информации",
      subtitle: "Форма предварительной информации для потребителей в соответствии со статьёй 5 турецкого Закона о защите прав потребителей № 6502 и Положения о дистанционных договорах",
      lastUpdate: "Последнее обновление",
      dateLocale: "ru-RU",

      section1Title: "1. Информация о продавце",
      tradeName: "Торговое наименование",
      tradeNameValue: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Адрес",
      addressValue: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Алания/Анталья, Турция",
      phone: "Телефон",
      email: "Электронная почта",
      website: "Веб-сайт",
      tradeRegNo: "Регистрационный номер",
      mersisNo: "Номер MERSIS",
      taxOffice: "Налоговая инспекция / Номер",
      toBeUpdated: "[Будет обновлено после регистрации]",

      section2Title: "2. Информация о товарах/услугах",
      section2Intro: "Наша компания предлагает следующие энергосистемные продукты и услуги:",
      solarTitle: "Солнечные энергосистемы",
      solar1: "Установка солнечных панелей",
      solar2: "Инверторные системы",
      solar3: "Монтаж и прокладка кабелей",
      solar4: "Электрическое подключение",
      heatPumpTitle: "Системы тепловых насосов",
      heatPump1: "Авторизованная продажа Vaillant",
      heatPump2: "Профессиональная установка",
      heatPump3: "Ввод в эксплуатацию",
      heatPump4: "Сервис по гарантии",
      acTitle: "Системы кондиционирования",
      ac1: "Авторизованная продажа Samsung",
      ac2: "Бытовые и коммерческие кондиционеры",
      ac3: "VRF системы",
      ac4: "Техническое обслуживание и ремонт",
      storageTitle: "Накопление энергии",
      storage1: "Батарейные системы BYD",
      storage2: "Домашнее хранение",
      storage3: "Коммерческое хранение",
      storage4: "Гибридные системы",

      section3Title: "3. Цена продажи и условия оплаты",
      price1: "Все цены указаны в турецких лирах (TL)",
      price2: "Включение/исключение НДС чётко указывается в предложении",
      price3: "Цены определяются после бесплатного осмотра",
      price4: "Предложения действительны 30 дней",
      paymentMethods: "Способы оплаты:",
      payment1: "Наличный расчёт",
      payment2: "Банковский перевод / EFT",
      payment3: "Кредитная карта (единовременно или в рассрочку)",
      payment4: "Проектные планы рассрочки",

      section4Title: "4. Информация о доставке",
      delivery1: "Сроки доставки зависят от объёма проекта",
      delivery2: "Для систем, требующих установки, дата определяется по взаимному согласованию",
      delivery3: "Наша зона обслуживания: Анталья, Мугла, Айдын, Денизли и окрестности",
      delivery4: "Стоимость доставки включена в проектное предложение",
      delivery5: "Законный срок доставки: максимум 30 дней",

      section5Title: "5. Право на отказ",
      withdrawalInfo: "14 дней на отказ",
      withdrawalText: "В соответствии с Законом № 6502 вы имеете право отказаться от договора в течение 14 дней после подписания без объяснения причин.",
      withdrawalExceptions: "Исключения из права на отказ:",
      exception1: "Товары, специально изготовленные по личным потребностям",
      exception2: "Системы, где начата установка",
      exception3: "Вскрытые или использованные товары",
      exception4: "Товары, приобретённые по специальному заказу",
      withdrawalNotice: "Уведомление об отказе:",
      withdrawalNoticeText: "Для осуществления права на отказ вы можете отправить электронное письмо на info@089bayern.com или позвонить по телефону +90 507 183 2036 в течение 14 дней.",

      section6Title: "6. Гарантийные условия",
      productCol: "Продукт",
      durationCol: "Срок гарантии",
      typeCol: "Тип гарантии",
      solarPanels: "Солнечные панели",
      solarWarranty: "25 лет",
      performanceWarranty: "Гарантия производительности",
      vaillantPump: "Тепловой насос Vaillant",
      vaillantWarranty: "10 лет",
      manufacturerWarranty: "Гарантия производителя",
      samsungAC: "Кондиционер Samsung",
      samsungWarranty: "5 лет",
      bydBattery: "Батарея BYD",
      bydWarranty: "10 лет",
      workmanship: "Работа/Установка",
      workmanshipWarranty: "2 года",
      bayernWarranty: "Гарантия 089 Bayern",

      section7Title: "7. Жалобы и споры",
      section7Intro: "В случае жалоб и споров вы можете обратиться в следующие органы:",
      complaint1: "Комиссии по защите прав потребителей (для споров ниже определённых сумм)",
      complaint2: "Суды по делам потребителей",
      complaint3: "Горячая линия жалоб потребителей Турции: 175",
      jurisdiction: "Компетентный суд и комиссия: Анталья",

      section8Title: "8. Защита персональных данных",
      section8Text: "Ваши персональные данные защищены в соответствии с турецким Законом о защите персональных данных № 6698 (KVKK). Для получения подробной информации ознакомьтесь с нашим",
      kvkkLink: "Уведомлением о конфиденциальности KVKK",
      section8TextEnd: ".",

      contactTitle: "Контактная информация",
      generalContact: "Общий контакт",
      whatsapp: "WhatsApp",
      workingHours: "Часы работы",
      weekdays: "Понедельник - Пятница: 09:00 - 18:00",
      saturday: "Суббота: 09:00 - 14:00",
      sunday: "Воскресенье: Закрыто",

      footer: "Эта форма предварительной информации подготовлена в соответствии с турецким Законом о защите прав потребителей № 6502 и Положением о дистанционных договорах.",
    },
    uk: {
      backButton: "Головна",
      title: "Форма попередньої інформації",
      subtitle: "Форма попередньої інформації для споживачів відповідно до статті 5 турецького Закону про захист прав споживачів № 6502 та Положення про дистанційні договори",
      lastUpdate: "Останнє оновлення",
      dateLocale: "uk-UA",

      section1Title: "1. Інформація про продавця",
      tradeName: "Торгова назва",
      tradeNameValue: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Адреса",
      addressValue: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Аланія/Анталія, Туреччина",
      phone: "Телефон",
      email: "Електронна пошта",
      website: "Веб-сайт",
      tradeRegNo: "Реєстраційний номер",
      mersisNo: "Номер MERSIS",
      taxOffice: "Податкова інспекція / Номер",
      toBeUpdated: "[Буде оновлено після реєстрації]",

      section2Title: "2. Інформація про товари/послуги",
      section2Intro: "Наша компанія пропонує наступні енергосистемні продукти та послуги:",
      solarTitle: "Сонячні енергосистеми",
      solar1: "Встановлення сонячних панелей",
      solar2: "Інверторні системи",
      solar3: "Монтаж та прокладання кабелів",
      solar4: "Електричне підключення",
      heatPumpTitle: "Системи теплових насосів",
      heatPump1: "Авторизований продаж Vaillant",
      heatPump2: "Професійне встановлення",
      heatPump3: "Введення в експлуатацію",
      heatPump4: "Сервіс за гарантією",
      acTitle: "Системи кондиціонування",
      ac1: "Авторизований продаж Samsung",
      ac2: "Побутові та комерційні кондиціонери",
      ac3: "VRF системи",
      ac4: "Технічне обслуговування та ремонт",
      storageTitle: "Накопичення енергії",
      storage1: "Батарейні системи BYD",
      storage2: "Домашнє зберігання",
      storage3: "Комерційне зберігання",
      storage4: "Гібридні системи",

      section3Title: "3. Ціна продажу та умови оплати",
      price1: "Усі ціни вказані в турецьких лірах (TL)",
      price2: "Включення/виключення ПДВ чітко вказується в пропозиції",
      price3: "Ціни визначаються після безкоштовного огляду",
      price4: "Пропозиції дійсні 30 днів",
      paymentMethods: "Способи оплати:",
      payment1: "Готівковий розрахунок",
      payment2: "Банківський переказ / EFT",
      payment3: "Кредитна картка (одноразово або в розстрочку)",
      payment4: "Проектні плани розстрочки",

      section4Title: "4. Інформація про доставку",
      delivery1: "Терміни доставки залежать від обсягу проекту",
      delivery2: "Для систем, що потребують встановлення, дата визначається за взаємною згодою",
      delivery3: "Наша зона обслуговування: Анталія, Мугла, Айдин, Денізлі та околиці",
      delivery4: "Вартість доставки включена в проектну пропозицію",
      delivery5: "Законний термін доставки: максимум 30 днів",

      section5Title: "5. Право на відмову",
      withdrawalInfo: "14 днів на відмову",
      withdrawalText: "Відповідно до Закону № 6502 ви маєте право відмовитися від договору протягом 14 днів після підписання без пояснення причин.",
      withdrawalExceptions: "Винятки з права на відмову:",
      exception1: "Товари, спеціально виготовлені за особистими потребами",
      exception2: "Системи, де розпочато встановлення",
      exception3: "Розкриті або використані товари",
      exception4: "Товари, придбані за спеціальним замовленням",
      withdrawalNotice: "Повідомлення про відмову:",
      withdrawalNoticeText: "Для здійснення права на відмову ви можете надіслати електронного листа на info@089bayern.com або зателефонувати за номером +90 507 183 2036 протягом 14 днів.",

      section6Title: "6. Гарантійні умови",
      productCol: "Продукт",
      durationCol: "Термін гарантії",
      typeCol: "Тип гарантії",
      solarPanels: "Сонячні панелі",
      solarWarranty: "25 років",
      performanceWarranty: "Гарантія продуктивності",
      vaillantPump: "Тепловий насос Vaillant",
      vaillantWarranty: "10 років",
      manufacturerWarranty: "Гарантія виробника",
      samsungAC: "Кондиціонер Samsung",
      samsungWarranty: "5 років",
      bydBattery: "Батарея BYD",
      bydWarranty: "10 років",
      workmanship: "Робота/Встановлення",
      workmanshipWarranty: "2 роки",
      bayernWarranty: "Гарантія 089 Bayern",

      section7Title: "7. Скарги та спори",
      section7Intro: "У разі скарг та спорів ви можете звернутися до наступних органів:",
      complaint1: "Комісії із захисту прав споживачів (для спорів нижче певних сум)",
      complaint2: "Суди у справах споживачів",
      complaint3: "Гаряча лінія скарг споживачів Туреччини: 175",
      jurisdiction: "Компетентний суд та комісія: Анталія",

      section8Title: "8. Захист персональних даних",
      section8Text: "Ваші персональні дані захищені відповідно до турецького Закону про захист персональних даних № 6698 (KVKK). Для отримання детальної інформації ознайомтесь з нашим",
      kvkkLink: "Повідомленням про конфіденційність KVKK",
      section8TextEnd: ".",

      contactTitle: "Контактна інформація",
      generalContact: "Загальний контакт",
      whatsapp: "WhatsApp",
      workingHours: "Години роботи",
      weekdays: "Понеділок - П'ятниця: 09:00 - 18:00",
      saturday: "Субота: 09:00 - 14:00",
      sunday: "Неділя: Закрито",

      footer: "Ця форма попередньої інформації підготовлена відповідно до турецького Закону про захист прав споживачів № 6502 та Положення про дистанційні договори.",
    },
    ar: {
      backButton: "الصفحة الرئيسية",
      title: "نموذج المعلومات المسبقة",
      subtitle: "نموذج المعلومات المسبقة لإعلام المستهلك وفقاً للمادة 5 من قانون حماية المستهلك التركي رقم 6502 ولائحة العقود عن بعد",
      lastUpdate: "آخر تحديث",
      dateLocale: "ar-SA",

      section1Title: "1. معلومات البائع",
      tradeName: "الاسم التجاري",
      tradeNameValue: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "العنوان",
      addressValue: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 ألانيا/أنطاليا، تركيا",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      website: "الموقع الإلكتروني",
      tradeRegNo: "رقم السجل التجاري",
      mersisNo: "رقم MERSIS",
      taxOffice: "مكتب الضرائب / الرقم",
      toBeUpdated: "[سيتم التحديث بعد التسجيل]",

      section2Title: "2. معلومات المنتج/الخدمة",
      section2Intro: "تقدم شركتنا منتجات وخدمات أنظمة الطاقة التالية:",
      solarTitle: "أنظمة الطاقة الشمسية",
      solar1: "تركيب الألواح الشمسية",
      solar2: "أنظمة العاكس",
      solar3: "التركيب والأسلاك",
      solar4: "التوصيل الكهربائي",
      heatPumpTitle: "أنظمة المضخات الحرارية",
      heatPump1: "مبيعات Vaillant المعتمدة",
      heatPump2: "التركيب الاحترافي",
      heatPump3: "التشغيل",
      heatPump4: "الخدمة تحت الضمان",
      acTitle: "أنظمة التكييف",
      ac1: "مبيعات Samsung المعتمدة",
      ac2: "مكيفات سكنية وتجارية",
      ac3: "أنظمة VRF",
      ac4: "الصيانة والإصلاح",
      storageTitle: "تخزين الطاقة",
      storage1: "أنظمة بطاريات BYD",
      storage2: "التخزين المنزلي",
      storage3: "التخزين التجاري",
      storage4: "الأنظمة الهجينة",

      section3Title: "3. سعر البيع وشروط الدفع",
      price1: "جميع الأسعار بالليرة التركية (TL)",
      price2: "يُذكر وضع ضريبة القيمة المضافة بوضوح في العرض",
      price3: "تُحدد الأسعار بعد المعاينة المجانية",
      price4: "العروض صالحة لمدة 30 يوماً",
      paymentMethods: "طرق الدفع:",
      payment1: "الدفع نقداً",
      payment2: "تحويل بنكي / EFT",
      payment3: "بطاقة ائتمان (دفعة واحدة أو أقساط)",
      payment4: "خطط الدفع بالتقسيط حسب المشروع",

      section4Title: "4. معلومات التسليم",
      delivery1: "يختلف وقت التسليم حسب نطاق المشروع",
      delivery2: "للأنظمة التي تتطلب التركيب، يتم تحديد التاريخ بالاتفاق المتبادل",
      delivery3: "منطقة خدمتنا: أنطاليا، موغلا، أيدين، دنيزلي والمناطق المحيطة",
      delivery4: "تكلفة التسليم مشمولة في عرض المشروع",
      delivery5: "فترة التسليم القانونية: 30 يوماً كحد أقصى",

      section5Title: "5. حق الانسحاب",
      withdrawalInfo: "حق الانسحاب خلال 14 يوماً",
      withdrawalText: "وفقاً للقانون رقم 6502، لديك الحق في الانسحاب من العقد خلال 14 يوماً بعد التوقيع دون إبداء أي سبب.",
      withdrawalExceptions: "استثناءات حق الانسحاب:",
      exception1: "المنتجات المعدة خصيصاً حسب الاحتياجات الشخصية",
      exception2: "الأنظمة التي بدأت خدمة التركيب فيها",
      exception3: "المنتجات المفتوحة أو المستخدمة",
      exception4: "المنتجات المشتراة بطلب خاص",
      withdrawalNotice: "إشعار الانسحاب:",
      withdrawalNoticeText: "لممارسة حق الانسحاب، يمكنك إرسال بريد إلكتروني إلى info@089bayern.com أو الاتصال على +90 507 183 2036 خلال 14 يوماً.",

      section6Title: "6. شروط الضمان",
      productCol: "المنتج",
      durationCol: "فترة الضمان",
      typeCol: "نوع الضمان",
      solarPanels: "الألواح الشمسية",
      solarWarranty: "25 سنة",
      performanceWarranty: "ضمان الأداء",
      vaillantPump: "مضخة حرارية Vaillant",
      vaillantWarranty: "10 سنوات",
      manufacturerWarranty: "ضمان الشركة المصنعة",
      samsungAC: "تكييف Samsung",
      samsungWarranty: "5 سنوات",
      bydBattery: "بطارية BYD",
      bydWarranty: "10 سنوات",
      workmanship: "العمالة/التركيب",
      workmanshipWarranty: "سنتان",
      bayernWarranty: "ضمان 089 Bayern",

      section7Title: "7. الشكاوى والنزاعات",
      section7Intro: "في حالة الشكاوى والنزاعات، يمكنك الاتصال بالجهات التالية:",
      complaint1: "لجان تحكيم المستهلك (للنزاعات دون مبالغ معينة)",
      complaint2: "محاكم المستهلك",
      complaint3: "خط شكاوى المستهلك التركي: 175",
      jurisdiction: "المحكمة ولجنة التحكيم المختصة: أنطاليا",

      section8Title: "8. حماية البيانات الشخصية",
      section8Text: "بياناتك الشخصية محمية بموجب قانون حماية البيانات الشخصية التركي رقم 6698 (KVKK). للحصول على معلومات تفصيلية، يرجى مراجعة",
      kvkkLink: "إشعار خصوصية KVKK",
      section8TextEnd: ".",

      contactTitle: "معلومات الاتصال",
      generalContact: "الاتصال العام",
      whatsapp: "واتساب",
      workingHours: "ساعات العمل",
      weekdays: "الاثنين - الجمعة: 09:00 - 18:00",
      saturday: "السبت: 09:00 - 14:00",
      sunday: "الأحد: مغلق",

      footer: "تم إعداد نموذج المعلومات المسبقة هذا وفقاً لقانون حماية المستهلك التركي رقم 6502 ولائحة العقود عن بعد.",
    },
  };

  const t = content[language as keyof typeof content] || content.tr;
  const isRTL = language === 'ar';

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className={`w-4 h-4 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
            {t.backButton}
          </Button>
        </Link>

        <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
        <p className="text-sm text-muted-foreground mb-8">{t.subtitle}</p>
        <p className="text-sm text-muted-foreground mb-8">{t.lastUpdate}: {new Date().toLocaleDateString(t.dateLocale)}</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section1Title}</h2>
            <div className="bg-muted/50 p-4 rounded-lg space-y-2">
              <p className="text-sm"><strong>{t.tradeName}:</strong> {t.tradeNameValue}</p>
              <p className="text-sm"><strong>{t.address}:</strong> {t.addressValue}</p>
              <p className="text-sm"><strong>{t.phone}:</strong> +90 507 183 2036</p>
              <p className="text-sm"><strong>{t.email}:</strong> info@089bayern.com</p>
              <p className="text-sm"><strong>{t.website}:</strong> www.089bayern.com</p>
              <p className="text-sm"><strong>{t.tradeRegNo}:</strong> {t.toBeUpdated}</p>
              <p className="text-sm"><strong>{t.mersisNo}:</strong> {t.toBeUpdated}</p>
              <p className="text-sm"><strong>{t.taxOffice}:</strong> {t.toBeUpdated}</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section2Title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">{t.section2Intro}</p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">{t.solarTitle}</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>{t.solar1}</li>
                  <li>{t.solar2}</li>
                  <li>{t.solar3}</li>
                  <li>{t.solar4}</li>
                </ul>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">{t.heatPumpTitle}</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>{t.heatPump1}</li>
                  <li>{t.heatPump2}</li>
                  <li>{t.heatPump3}</li>
                  <li>{t.heatPump4}</li>
                </ul>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">{t.acTitle}</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>{t.ac1}</li>
                  <li>{t.ac2}</li>
                  <li>{t.ac3}</li>
                  <li>{t.ac4}</li>
                </ul>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">{t.storageTitle}</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>{t.storage1}</li>
                  <li>{t.storage2}</li>
                  <li>{t.storage3}</li>
                  <li>{t.storage4}</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section3Title}</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t.price1}</li>
              <li>{t.price2}</li>
              <li>{t.price3}</li>
              <li>{t.price4}</li>
            </ul>
            <h3 className="font-medium mt-4 mb-2">{t.paymentMethods}</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t.payment1}</li>
              <li>{t.payment2}</li>
              <li>{t.payment3}</li>
              <li>{t.payment4}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section4Title}</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t.delivery1}</li>
              <li>{t.delivery2}</li>
              <li>{t.delivery3}</li>
              <li>{t.delivery4}</li>
              <li>{t.delivery5}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section5Title}</h2>
            <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg mb-4">
              <p className="font-medium text-primary mb-2">{t.withdrawalInfo}</p>
              <p className="text-sm text-muted-foreground">{t.withdrawalText}</p>
            </div>
            <h3 className="font-medium mb-2">{t.withdrawalExceptions}</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t.exception1}</li>
              <li>{t.exception2}</li>
              <li>{t.exception3}</li>
              <li>{t.exception4}</li>
            </ul>
            <h3 className="font-medium mt-4 mb-2">{t.withdrawalNotice}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.withdrawalNoticeText}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section6Title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">{t.productCol}</th>
                    <th className="border border-border p-3 text-left">{t.durationCol}</th>
                    <th className="border border-border p-3 text-left">{t.typeCol}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">{t.solarPanels}</td>
                    <td className="border border-border p-3">{t.solarWarranty}</td>
                    <td className="border border-border p-3">{t.performanceWarranty}</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border p-3">{t.vaillantPump}</td>
                    <td className="border border-border p-3">{t.vaillantWarranty}</td>
                    <td className="border border-border p-3">{t.manufacturerWarranty}</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">{t.samsungAC}</td>
                    <td className="border border-border p-3">{t.samsungWarranty}</td>
                    <td className="border border-border p-3">{t.manufacturerWarranty}</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border p-3">{t.bydBattery}</td>
                    <td className="border border-border p-3">{t.bydWarranty}</td>
                    <td className="border border-border p-3">{t.manufacturerWarranty}</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">{t.workmanship}</td>
                    <td className="border border-border p-3">{t.workmanshipWarranty}</td>
                    <td className="border border-border p-3">{t.bayernWarranty}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section7Title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">{t.section7Intro}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t.complaint1}</li>
              <li>{t.complaint2}</li>
              <li>{t.complaint3}</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">{t.jurisdiction}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section8Title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.section8Text}{" "}
              <Link href="/kvkk" className="text-primary hover:underline">
                {t.kvkkLink}
              </Link>{" "}
              {t.section8TextEnd}
            </p>
          </section>

          <section className="bg-muted/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{t.contactTitle}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-medium mb-2">{t.generalContact}</h3>
                <p className="text-sm text-muted-foreground">{t.phone}: +90 507 183 2036</p>
                <p className="text-sm text-muted-foreground">{t.email}: info@089bayern.com</p>
                <p className="text-sm text-muted-foreground">{t.whatsapp}: +90 507 183 2036</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">{t.workingHours}</h3>
                <p className="text-sm text-muted-foreground">{t.weekdays}</p>
                <p className="text-sm text-muted-foreground">{t.saturday}</p>
                <p className="text-sm text-muted-foreground">{t.sunday}</p>
              </div>
            </div>
          </section>

          <section className="border-t pt-6">
            <p className="text-sm text-muted-foreground text-center">{t.footer}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
