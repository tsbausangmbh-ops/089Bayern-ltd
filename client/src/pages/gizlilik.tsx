import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { useLanguage } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function Gizlilik() {
  const { language } = useLanguage();

  const content = {
    tr: {
      backButton: "Ana Sayfa",
      badge: "Gizlilik",
      title: "Gizlilik Politikası",
      subtitle: "Kişisel verilerinizi nasıl topladığımız, kullandığımız ve koruduğumuz hakkında bilgi edinin.",
      lastUpdate: "Son güncelleme",
      dateLocale: "tr-TR",
      
      section1Title: "1. Giriş",
      section1Text: "089 Bayern Enerji Sistemleri Ltd. Şti. olarak gizliliğinize saygı duyuyor ve kişisel verilerinizin korunmasını önemsiyoruz. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda kişisel verilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklamaktadır.",
      
      section2Title: "2. Topladığımız Bilgiler",
      section2Sub1: "2.1 Doğrudan Sağladığınız Bilgiler",
      direct1: "Ad ve soyad",
      direct2: "Telefon numarası",
      direct3: "E-posta adresi",
      direct4: "Adres bilgileri",
      direct5: "Mülk bilgileri (villa, daire, ticari vb.)",
      direct6: "Enerji tüketim bilgileri",
      section2Sub2: "2.2 Otomatik Olarak Toplanan Bilgiler",
      auto1: "IP adresi",
      auto2: "Tarayıcı türü ve versiyonu",
      auto3: "İşletim sistemi",
      auto4: "Ziyaret edilen sayfalar ve süreleri",
      auto5: "Çerez verileri",
      
      section3Title: "3. Bilgilerin Kullanım Amaçları",
      purpose1: "Hizmet taleplerinizi değerlendirmek ve yanıtlamak",
      purpose2: "Size özel teklifler hazırlamak",
      purpose3: "Müşteri hizmetleri sağlamak",
      purpose4: "Web sitemizi geliştirmek",
      purpose5: "Yasal yükümlülüklerimizi yerine getirmek",
      purpose6: "İzniniz dahilinde pazarlama iletişimleri göndermek",
      
      section4Title: "4. Veri Paylaşımı",
      section4Text: "Kişisel verilerinizi aşağıdaki durumlar dışında üçüncü taraflarla paylaşmayız:",
      share1: "Açık izniniz olduğunda",
      share2: "Hizmet sağlayıcılarımızla (kurulum ekipleri, teknik destek vb.)",
      share3: "Yasal zorunluluk halinde",
      share4: "Marka ortaklarımızla (Vaillant, Samsung) garanti işlemleri için",
      
      section5Title: "5. Veri Güvenliği",
      section5Text: "Kişisel verilerinizi korumak için endüstri standardı güvenlik önlemleri uyguluyoruz. Web sitemiz SSL sertifikası ile şifrelenmektedir. Verileriniz güvenli sunucularda saklanmaktadır.",
      
      section6Title: "6. Çerezler",
      section6Text: "Web sitemizde çerezler kullanılmaktadır. Çerezlerin kullanımı hakkında detaylı bilgi için",
      cookiePolicyLink: "Çerez Politikamızı",
      section6TextEnd: "inceleyebilirsiniz.",
      
      section7Title: "7. Haklarınız",
      section7Text: "6698 sayılı KVKK kapsamında kişisel verilerinizle ilgili haklarınız bulunmaktadır. Bu haklar hakkında detaylı bilgi için",
      kvkkLink: "KVKK Aydınlatma Metnimizi",
      section7TextEnd: "inceleyebilirsiniz.",
      
      section8Title: "8. İletişim",
      section8Text: "Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:",
      email: "E-posta",
      kvkkContact: "KVKK İletişim",
      phone: "Telefon",
      
      section9Title: "9. Politika Değişiklikleri",
      section9Text: "Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Değişiklikler web sitemizde yayınlandığı anda yürürlüğe girer. Önemli değişikliklerde sizi bilgilendireceğiz.",
    },
    de: {
      backButton: "Startseite",
      badge: "Datenschutz",
      title: "Datenschutzrichtlinie",
      subtitle: "Erfahren Sie, wie wir Ihre persönlichen Daten erfassen, verwenden und schützen.",
      lastUpdate: "Letzte Aktualisierung",
      dateLocale: "de-DE",
      
      section1Title: "1. Einleitung",
      section1Text: "Bei 089 Bayern Enerji Sistemleri Ltd. Şti. respektieren wir Ihre Privatsphäre und legen Wert auf den Schutz Ihrer personenbezogenen Daten. Diese Datenschutzrichtlinie erläutert, wie wir Ihre personenbezogenen Daten erfassen, verwenden und schützen, wenn Sie unsere Website besuchen und unsere Dienste nutzen.",
      
      section2Title: "2. Von uns erfasste Informationen",
      section2Sub1: "2.1 Von Ihnen bereitgestellte Informationen",
      direct1: "Vor- und Nachname",
      direct2: "Telefonnummer",
      direct3: "E-Mail-Adresse",
      direct4: "Adressinformationen",
      direct5: "Immobilieninformationen (Villa, Wohnung, Gewerbe usw.)",
      direct6: "Energieverbrauchsdaten",
      section2Sub2: "2.2 Automatisch erfasste Informationen",
      auto1: "IP-Adresse",
      auto2: "Browsertyp und -version",
      auto3: "Betriebssystem",
      auto4: "Besuchte Seiten und Verweildauer",
      auto5: "Cookie-Daten",
      
      section3Title: "3. Verwendungszwecke der Informationen",
      purpose1: "Bearbeitung und Beantwortung Ihrer Serviceanfragen",
      purpose2: "Erstellung individueller Angebote für Sie",
      purpose3: "Bereitstellung von Kundenservice",
      purpose4: "Verbesserung unserer Website",
      purpose5: "Erfüllung unserer gesetzlichen Verpflichtungen",
      purpose6: "Versand von Marketingmitteilungen mit Ihrer Zustimmung",
      
      section4Title: "4. Datenweitergabe",
      section4Text: "Wir geben Ihre personenbezogenen Daten nicht an Dritte weiter, außer in folgenden Fällen:",
      share1: "Mit Ihrer ausdrücklichen Einwilligung",
      share2: "An unsere Dienstleister (Installationsteams, technischer Support usw.)",
      share3: "Bei gesetzlicher Verpflichtung",
      share4: "An unsere Markenpartner (Vaillant, Samsung) für Garantieabwicklungen",
      
      section5Title: "5. Datensicherheit",
      section5Text: "Wir setzen branchenübliche Sicherheitsmaßnahmen zum Schutz Ihrer personenbezogenen Daten ein. Unsere Website ist mit einem SSL-Zertifikat verschlüsselt. Ihre Daten werden auf sicheren Servern gespeichert.",
      
      section6Title: "6. Cookies",
      section6Text: "Auf unserer Website werden Cookies verwendet. Für detaillierte Informationen zur Cookie-Nutzung lesen Sie bitte unsere",
      cookiePolicyLink: "Cookie-Richtlinie",
      section6TextEnd: ".",
      
      section7Title: "7. Ihre Rechte",
      section7Text: "Gemäß dem türkischen Datenschutzgesetz Nr. 6698 (KVKK) haben Sie Rechte bezüglich Ihrer personenbezogenen Daten. Für detaillierte Informationen zu diesen Rechten lesen Sie bitte unsere",
      kvkkLink: "KVKK-Datenschutzerklärung",
      section7TextEnd: ".",
      
      section8Title: "8. Kontakt",
      section8Text: "Bei Fragen zu unserer Datenschutzrichtlinie können Sie uns kontaktieren:",
      email: "E-Mail",
      kvkkContact: "KVKK-Kontakt",
      phone: "Telefon",
      
      section9Title: "9. Richtlinienänderungen",
      section9Text: "Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Änderungen treten mit der Veröffentlichung auf unserer Website in Kraft. Bei wesentlichen Änderungen werden wir Sie informieren.",
    },
    en: {
      backButton: "Home",
      badge: "Privacy",
      title: "Privacy Policy",
      subtitle: "Learn how we collect, use, and protect your personal data.",
      lastUpdate: "Last updated",
      dateLocale: "en-US",
      
      section1Title: "1. Introduction",
      section1Text: "At 089 Bayern Enerji Sistemleri Ltd. Şti., we respect your privacy and care about the protection of your personal data. This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website and use our services.",
      
      section2Title: "2. Information We Collect",
      section2Sub1: "2.1 Information You Provide Directly",
      direct1: "First and last name",
      direct2: "Phone number",
      direct3: "Email address",
      direct4: "Address information",
      direct5: "Property information (villa, apartment, commercial, etc.)",
      direct6: "Energy consumption data",
      section2Sub2: "2.2 Automatically Collected Information",
      auto1: "IP address",
      auto2: "Browser type and version",
      auto3: "Operating system",
      auto4: "Pages visited and duration",
      auto5: "Cookie data",
      
      section3Title: "3. Purposes of Information Use",
      purpose1: "Evaluating and responding to your service requests",
      purpose2: "Preparing customized offers for you",
      purpose3: "Providing customer services",
      purpose4: "Improving our website",
      purpose5: "Fulfilling our legal obligations",
      purpose6: "Sending marketing communications with your consent",
      
      section4Title: "4. Data Sharing",
      section4Text: "We do not share your personal data with third parties except in the following cases:",
      share1: "With your explicit consent",
      share2: "With our service providers (installation teams, technical support, etc.)",
      share3: "When legally required",
      share4: "With our brand partners (Vaillant, Samsung) for warranty processes",
      
      section5Title: "5. Data Security",
      section5Text: "We implement industry-standard security measures to protect your personal data. Our website is encrypted with an SSL certificate. Your data is stored on secure servers.",
      
      section6Title: "6. Cookies",
      section6Text: "Cookies are used on our website. For detailed information about cookie usage, please review our",
      cookiePolicyLink: "Cookie Policy",
      section6TextEnd: ".",
      
      section7Title: "7. Your Rights",
      section7Text: "Under the Turkish Personal Data Protection Law No. 6698 (KVKK), you have rights regarding your personal data. For detailed information about these rights, please review our",
      kvkkLink: "KVKK Privacy Notice",
      section7TextEnd: ".",
      
      section8Title: "8. Contact",
      section8Text: "For questions about our privacy policy, you can contact us:",
      email: "Email",
      kvkkContact: "KVKK Contact",
      phone: "Phone",
      
      section9Title: "9. Policy Changes",
      section9Text: "We may update this privacy policy from time to time. Changes take effect upon publication on our website. We will inform you of significant changes.",
    },
    ru: {
      backButton: "Главная",
      badge: "Конфиденциальность",
      title: "Политика конфиденциальности",
      subtitle: "Узнайте, как мы собираем, используем и защищаем ваши персональные данные.",
      lastUpdate: "Последнее обновление",
      dateLocale: "ru-RU",
      
      section1Title: "1. Введение",
      section1Text: "089 Bayern Enerji Sistemleri Ltd. Şti. уважает вашу конфиденциальность и заботится о защите ваших персональных данных. Настоящая Политика конфиденциальности объясняет, как мы собираем, используем и защищаем ваши персональные данные при посещении нашего веб-сайта и использовании наших услуг.",
      
      section2Title: "2. Собираемая информация",
      section2Sub1: "2.1 Информация, которую вы предоставляете",
      direct1: "Имя и фамилия",
      direct2: "Номер телефона",
      direct3: "Адрес электронной почты",
      direct4: "Адресная информация",
      direct5: "Информация о недвижимости (вилла, квартира, коммерческая и т.д.)",
      direct6: "Данные об энергопотреблении",
      section2Sub2: "2.2 Автоматически собираемая информация",
      auto1: "IP-адрес",
      auto2: "Тип и версия браузера",
      auto3: "Операционная система",
      auto4: "Посещённые страницы и время пребывания",
      auto5: "Данные cookie",
      
      section3Title: "3. Цели использования информации",
      purpose1: "Оценка и ответ на ваши запросы на обслуживание",
      purpose2: "Подготовка индивидуальных предложений для вас",
      purpose3: "Предоставление клиентского сервиса",
      purpose4: "Улучшение нашего веб-сайта",
      purpose5: "Выполнение наших юридических обязательств",
      purpose6: "Отправка маркетинговых сообщений с вашего согласия",
      
      section4Title: "4. Передача данных",
      section4Text: "Мы не передаём ваши персональные данные третьим лицам, за исключением следующих случаев:",
      share1: "С вашего явного согласия",
      share2: "Нашим поставщикам услуг (монтажные бригады, техническая поддержка и т.д.)",
      share3: "При наличии законных требований",
      share4: "Нашим партнёрам по брендам (Vaillant, Samsung) для гарантийного обслуживания",
      
      section5Title: "5. Безопасность данных",
      section5Text: "Мы применяем стандартные отраслевые меры безопасности для защиты ваших персональных данных. Наш веб-сайт защищён SSL-сертификатом. Ваши данные хранятся на защищённых серверах.",
      
      section6Title: "6. Cookies",
      section6Text: "На нашем веб-сайте используются файлы cookie. Для получения подробной информации об использовании cookie ознакомьтесь с нашей",
      cookiePolicyLink: "Политикой использования cookie",
      section6TextEnd: ".",
      
      section7Title: "7. Ваши права",
      section7Text: "В соответствии с турецким Законом о защите персональных данных № 6698 (KVKK) вы имеете права в отношении ваших персональных данных. Для получения подробной информации об этих правах ознакомьтесь с нашим",
      kvkkLink: "Уведомлением о конфиденциальности KVKK",
      section7TextEnd: ".",
      
      section8Title: "8. Контакты",
      section8Text: "По вопросам о нашей политике конфиденциальности вы можете связаться с нами:",
      email: "Электронная почта",
      kvkkContact: "Контакт KVKK",
      phone: "Телефон",
      
      section9Title: "9. Изменения политики",
      section9Text: "Мы можем время от времени обновлять эту политику конфиденциальности. Изменения вступают в силу с момента публикации на нашем веб-сайте. О существенных изменениях мы вас уведомим.",
    },
    uk: {
      backButton: "Головна",
      badge: "Конфіденційність",
      title: "Політика конфіденційності",
      subtitle: "Дізнайтеся, як ми збираємо, використовуємо та захищаємо ваші персональні дані.",
      lastUpdate: "Останнє оновлення",
      dateLocale: "uk-UA",
      
      section1Title: "1. Вступ",
      section1Text: "089 Bayern Enerji Sistemleri Ltd. Şti. поважає вашу конфіденційність та піклується про захист ваших персональних даних. Ця Політика конфіденційності пояснює, як ми збираємо, використовуємо та захищаємо ваші персональні дані, коли ви відвідуєте наш веб-сайт та користуєтесь нашими послугами.",
      
      section2Title: "2. Інформація, яку ми збираємо",
      section2Sub1: "2.1 Інформація, яку ви надаєте",
      direct1: "Ім'я та прізвище",
      direct2: "Номер телефону",
      direct3: "Електронна адреса",
      direct4: "Адресна інформація",
      direct5: "Інформація про нерухомість (вілла, квартира, комерційна тощо)",
      direct6: "Дані про споживання енергії",
      section2Sub2: "2.2 Автоматично зібрана інформація",
      auto1: "IP-адреса",
      auto2: "Тип та версія браузера",
      auto3: "Операційна система",
      auto4: "Відвідані сторінки та тривалість",
      auto5: "Дані cookie",
      
      section3Title: "3. Цілі використання інформації",
      purpose1: "Оцінка та відповідь на ваші запити на обслуговування",
      purpose2: "Підготовка індивідуальних пропозицій для вас",
      purpose3: "Надання клієнтського сервісу",
      purpose4: "Покращення нашого веб-сайту",
      purpose5: "Виконання наших юридичних зобов'язань",
      purpose6: "Надсилання маркетингових повідомлень за вашою згодою",
      
      section4Title: "4. Передача даних",
      section4Text: "Ми не передаємо ваші персональні дані третім особам, за винятком наступних випадків:",
      share1: "З вашої явної згоди",
      share2: "Нашим постачальникам послуг (монтажні бригади, технічна підтримка тощо)",
      share3: "При наявності законних вимог",
      share4: "Нашим партнерам по брендам (Vaillant, Samsung) для гарантійного обслуговування",
      
      section5Title: "5. Безпека даних",
      section5Text: "Ми застосовуємо стандартні галузеві заходи безпеки для захисту ваших персональних даних. Наш веб-сайт захищений SSL-сертифікатом. Ваші дані зберігаються на захищених серверах.",
      
      section6Title: "6. Cookies",
      section6Text: "На нашому веб-сайті використовуються файли cookie. Для отримання детальної інформації про використання cookie ознайомтесь з нашою",
      cookiePolicyLink: "Політикою використання cookie",
      section6TextEnd: ".",
      
      section7Title: "7. Ваші права",
      section7Text: "Відповідно до турецького Закону про захист персональних даних № 6698 (KVKK) ви маєте права щодо ваших персональних даних. Для отримання детальної інформації про ці права ознайомтесь з нашим",
      kvkkLink: "Повідомленням про конфіденційність KVKK",
      section7TextEnd: ".",
      
      section8Title: "8. Контакти",
      section8Text: "З питань щодо нашої політики конфіденційності ви можете зв'язатися з нами:",
      email: "Електронна пошта",
      kvkkContact: "Контакт KVKK",
      phone: "Телефон",
      
      section9Title: "9. Зміни політики",
      section9Text: "Ми можемо час від часу оновлювати цю політику конфіденційності. Зміни набувають чинності з моменту публікації на нашому веб-сайті. Про суттєві зміни ми вас повідомимо.",
    },
    ar: {
      backButton: "الصفحة الرئيسية",
      badge: "الخصوصية",
      title: "سياسة الخصوصية",
      subtitle: "تعرف على كيفية جمعنا لبياناتك الشخصية واستخدامها وحمايتها.",
      lastUpdate: "آخر تحديث",
      dateLocale: "ar-SA",
      
      section1Title: "1. المقدمة",
      section1Text: "في 089 Bayern Enerji Sistemleri Ltd. Şti.، نحترم خصوصيتك ونهتم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيف نقوم بجمع واستخدام وحماية بياناتك الشخصية عند زيارة موقعنا واستخدام خدماتنا.",
      
      section2Title: "2. المعلومات التي نجمعها",
      section2Sub1: "2.1 المعلومات التي تقدمها مباشرة",
      direct1: "الاسم الأول واسم العائلة",
      direct2: "رقم الهاتف",
      direct3: "عنوان البريد الإلكتروني",
      direct4: "معلومات العنوان",
      direct5: "معلومات العقار (فيلا، شقة، تجاري، إلخ)",
      direct6: "بيانات استهلاك الطاقة",
      section2Sub2: "2.2 المعلومات المجمعة تلقائياً",
      auto1: "عنوان IP",
      auto2: "نوع وإصدار المتصفح",
      auto3: "نظام التشغيل",
      auto4: "الصفحات المزارة ومدة الزيارة",
      auto5: "بيانات ملفات تعريف الارتباط",
      
      section3Title: "3. أغراض استخدام المعلومات",
      purpose1: "تقييم طلبات الخدمة والرد عليها",
      purpose2: "إعداد عروض مخصصة لك",
      purpose3: "تقديم خدمات العملاء",
      purpose4: "تحسين موقعنا الإلكتروني",
      purpose5: "الوفاء بالتزاماتنا القانونية",
      purpose6: "إرسال اتصالات تسويقية بموافقتك",
      
      section4Title: "4. مشاركة البيانات",
      section4Text: "لا نشارك بياناتك الشخصية مع أطراف ثالثة باستثناء الحالات التالية:",
      share1: "بموافقتك الصريحة",
      share2: "مع مزودي خدماتنا (فرق التركيب، الدعم الفني، إلخ)",
      share3: "عند وجود متطلبات قانونية",
      share4: "مع شركائنا من العلامات التجارية (Vaillant، Samsung) لعمليات الضمان",
      
      section5Title: "5. أمان البيانات",
      section5Text: "نطبق إجراءات أمان قياسية في الصناعة لحماية بياناتك الشخصية. موقعنا مشفر بشهادة SSL. يتم تخزين بياناتك على خوادم آمنة.",
      
      section6Title: "6. ملفات تعريف الارتباط",
      section6Text: "يتم استخدام ملفات تعريف الارتباط على موقعنا. للحصول على معلومات تفصيلية حول استخدام ملفات تعريف الارتباط، يرجى مراجعة",
      cookiePolicyLink: "سياسة ملفات تعريف الارتباط",
      section6TextEnd: ".",
      
      section7Title: "7. حقوقك",
      section7Text: "بموجب قانون حماية البيانات الشخصية التركي رقم 6698 (KVKK)، لديك حقوق بشأن بياناتك الشخصية. للحصول على معلومات تفصيلية حول هذه الحقوق، يرجى مراجعة",
      kvkkLink: "إشعار خصوصية KVKK",
      section7TextEnd: ".",
      
      section8Title: "8. الاتصال",
      section8Text: "لأي أسئلة حول سياسة الخصوصية الخاصة بنا، يمكنك الاتصال بنا:",
      email: "البريد الإلكتروني",
      kvkkContact: "اتصال KVKK",
      phone: "الهاتف",
      
      section9Title: "9. تغييرات السياسة",
      section9Text: "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. تدخل التغييرات حيز التنفيذ عند نشرها على موقعنا. سنبلغك بالتغييرات الجوهرية.",
    },
  };

  const t = content[language as keyof typeof content] || content.tr;
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "rtl" : ""}`} dir={isRTL ? "rtl" : "ltr"}>
      <SEOHead page="legal" />
      <Header />
      
      <section className="relative pt-24 pb-16 overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-6">
              <Shield className="w-4 h-4 mr-2" />
              {t.badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/">
              <Button variant="ghost" data-testid="button-back-home">
                <ArrowLeft className={`w-4 h-4 ${isRTL ? "ml-2 rotate-180" : "mr-2"}`} />
                {t.backButton}
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <p className="text-sm text-muted-foreground mb-8">{t.lastUpdate}: {new Date().toLocaleDateString(t.dateLocale)}</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section1Title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.section1Text}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section2Title}</h2>
            <h3 className="text-lg font-medium mb-2">{t.section2Sub1}</h3>
            <ul className={`list-disc space-y-2 text-muted-foreground mb-4 ${isRTL ? 'list-inside' : 'list-inside'}`}>
              <li>{t.direct1}</li>
              <li>{t.direct2}</li>
              <li>{t.direct3}</li>
              <li>{t.direct4}</li>
              <li>{t.direct5}</li>
              <li>{t.direct6}</li>
            </ul>
            <h3 className="text-lg font-medium mb-2">{t.section2Sub2}</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t.auto1}</li>
              <li>{t.auto2}</li>
              <li>{t.auto3}</li>
              <li>{t.auto4}</li>
              <li>{t.auto5}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section3Title}</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t.purpose1}</li>
              <li>{t.purpose2}</li>
              <li>{t.purpose3}</li>
              <li>{t.purpose4}</li>
              <li>{t.purpose5}</li>
              <li>{t.purpose6}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section4Title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.section4Text}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
              <li>{t.share1}</li>
              <li>{t.share2}</li>
              <li>{t.share3}</li>
              <li>{t.share4}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section5Title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.section5Text}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section6Title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.section6Text} <a href="/cerez-politikasi" className="text-primary hover:underline">{t.cookiePolicyLink}</a> {t.section6TextEnd}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section7Title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.section7Text} <a href="/kvkk" className="text-primary hover:underline">{t.kvkkLink}</a> {t.section7TextEnd}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section8Title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.section8Text}
            </p>
            <div className="bg-muted/50 p-4 rounded-lg mt-4">
              <p className="text-sm"><strong>{t.email}:</strong> info@089bayern.com</p>
              <p className="text-sm"><strong>{t.kvkkContact}:</strong> kvkk@089bayern.com</p>
              <p className="text-sm"><strong>{t.phone}:</strong> +90 507 183 2036 | +49 155 68855141</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section9Title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.section9Text}
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
