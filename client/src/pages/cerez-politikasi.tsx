import { ArrowLeft, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { useLanguage } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function CerezPolitikasi() {
  const { language } = useLanguage();

  const content = {
    tr: {
      backButton: "Ana Sayfa",
      badge: "Çerez Politikası",
      title: "Çerez Politikası",
      subtitle: "Web sitemizde çerezleri nasıl kullandığımız hakkında bilgi edinin.",
      lastUpdate: "Son güncelleme",
      dateLocale: "tr-TR",
      
      section1Title: "1. Çerez Nedir?",
      section1Text: "Çerezler, web sitelerini ziyaret ettiğinizde cihazınıza (bilgisayar, tablet veya telefon) kaydedilen küçük metin dosyalarıdır. Çerezler, web sitelerinin düzgün çalışmasını sağlar, deneyiminizi kişiselleştirir ve site kullanımı hakkında bilgi toplar.",
      
      section2Title: "2. Kullandığımız Çerez Türleri",
      essential: "2.1 Zorunlu Çerezler",
      essentialText: "Web sitemizin temel işlevleri için gereklidir. Bu çerezler olmadan site düzgün çalışamaz. Oturum yönetimi, güvenlik ve dil tercihleri için kullanılır.",
      analytics: "2.2 Analitik Çerezler",
      analyticsText: "Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olur. Sayfa görüntülemeleri, ziyaret süreleri ve hata raporları gibi bilgileri toplar. Bu bilgiler anonim olarak işlenir.",
      marketing: "2.3 Pazarlama Çerezleri",
      marketingText: "İlgi alanlarınıza göre kişiselleştirilmiş reklamlar sunmak için kullanılır. Üçüncü taraf reklam ağları tarafından yerleştirilebilir.",
      
      section3Title: "3. Kullandığımız Çerezler",
      tableHeader1: "Çerez Adı",
      tableHeader2: "Türü",
      tableHeader3: "Amacı",
      tableHeader4: "Süre",
      cookie1Name: "cookie-consent",
      cookie1Type: "Zorunlu",
      cookie1Purpose: "Çerez tercihlerinizi saklar",
      cookie1Duration: "1 yıl",
      cookie2Name: "preferred-language",
      cookie2Type: "Zorunlu",
      cookie2Purpose: "Dil tercihinizi saklar",
      cookie2Duration: "1 yıl",
      cookie3Name: "_ga",
      cookie3Type: "Analitik",
      cookie3Purpose: "Google Analytics ziyaretçi takibi",
      cookie3Duration: "2 yıl",
      
      section4Title: "4. Çerez Tercihlerinizi Yönetme",
      section4Text: "Çerez tercihlerinizi aşağıdaki yöntemlerle yönetebilirsiniz:",
      manage1: "Web sitemizin çerez banner'ındaki ayarlar üzerinden",
      manage2: "Tarayıcı ayarlarınızdan çerezleri engelleyerek veya silerek",
      manageNote: "Not:",
      manageNoteText: "Zorunlu çerezleri devre dışı bırakırsanız web sitemizin bazı özellikleri düzgün çalışmayabilir.",
      
      section5Title: "5. Tarayıcı Ayarları",
      section5Text: "Çerezleri tarayıcınızdan yönetmek için aşağıdaki bağlantıları kullanabilirsiniz:",
      
      section6Title: "6. İletişim",
      section6Text: "Çerez politikamız hakkında sorularınız için",
      section6TextEnd: "adresinden bizimle iletişime geçebilirsiniz.",
    },
    de: {
      backButton: "Startseite",
      badge: "Cookie-Richtlinie",
      title: "Cookie-Richtlinie",
      subtitle: "Erfahren Sie, wie wir Cookies auf unserer Website verwenden.",
      lastUpdate: "Letzte Aktualisierung",
      dateLocale: "de-DE",
      
      section1Title: "1. Was sind Cookies?",
      section1Text: "Cookies sind kleine Textdateien, die auf Ihrem Gerät (Computer, Tablet oder Telefon) gespeichert werden, wenn Sie Websites besuchen. Cookies sorgen dafür, dass Websites ordnungsgemäß funktionieren, personalisieren Ihre Erfahrung und sammeln Informationen über die Nutzung der Website.",
      
      section2Title: "2. Arten von Cookies, die wir verwenden",
      essential: "2.1 Notwendige Cookies",
      essentialText: "Diese sind für die grundlegenden Funktionen unserer Website erforderlich. Ohne diese Cookies kann die Website nicht ordnungsgemäß funktionieren. Sie werden für Sitzungsverwaltung, Sicherheit und Spracheinstellungen verwendet.",
      analytics: "2.2 Analyse-Cookies",
      analyticsText: "Diese helfen uns zu verstehen, wie Besucher unsere Website nutzen. Sie sammeln Informationen wie Seitenaufrufe, Besuchsdauer und Fehlerberichte. Diese Informationen werden anonym verarbeitet.",
      marketing: "2.3 Marketing-Cookies",
      marketingText: "Diese werden verwendet, um Ihnen personalisierte Werbung basierend auf Ihren Interessen anzuzeigen. Sie können von Werbenetzwerken Dritter platziert werden.",
      
      section3Title: "3. Von uns verwendete Cookies",
      tableHeader1: "Cookie-Name",
      tableHeader2: "Typ",
      tableHeader3: "Zweck",
      tableHeader4: "Dauer",
      cookie1Name: "cookie-consent",
      cookie1Type: "Notwendig",
      cookie1Purpose: "Speichert Ihre Cookie-Einstellungen",
      cookie1Duration: "1 Jahr",
      cookie2Name: "preferred-language",
      cookie2Type: "Notwendig",
      cookie2Purpose: "Speichert Ihre Spracheinstellung",
      cookie2Duration: "1 Jahr",
      cookie3Name: "_ga",
      cookie3Type: "Analyse",
      cookie3Purpose: "Google Analytics Besucherverfolgung",
      cookie3Duration: "2 Jahre",
      
      section4Title: "4. Verwaltung Ihrer Cookie-Einstellungen",
      section4Text: "Sie können Ihre Cookie-Einstellungen auf folgende Weise verwalten:",
      manage1: "Über die Einstellungen in unserem Cookie-Banner auf der Website",
      manage2: "Durch Blockieren oder Löschen von Cookies in Ihren Browsereinstellungen",
      manageNote: "Hinweis:",
      manageNoteText: "Wenn Sie notwendige Cookies deaktivieren, funktionieren einige Funktionen unserer Website möglicherweise nicht ordnungsgemäß.",
      
      section5Title: "5. Browser-Einstellungen",
      section5Text: "Um Cookies über Ihren Browser zu verwalten, können Sie die folgenden Links nutzen:",
      
      section6Title: "6. Kontakt",
      section6Text: "Bei Fragen zu unserer Cookie-Richtlinie kontaktieren Sie uns unter",
      section6TextEnd: ".",
    },
    en: {
      backButton: "Home",
      badge: "Cookie Policy",
      title: "Cookie Policy",
      subtitle: "Learn how we use cookies on our website.",
      lastUpdate: "Last updated",
      dateLocale: "en-US",
      
      section1Title: "1. What are Cookies?",
      section1Text: "Cookies are small text files that are stored on your device (computer, tablet, or phone) when you visit websites. Cookies help websites function properly, personalize your experience, and collect information about site usage.",
      
      section2Title: "2. Types of Cookies We Use",
      essential: "2.1 Essential Cookies",
      essentialText: "These are required for the basic functions of our website. Without these cookies, the site cannot function properly. They are used for session management, security, and language preferences.",
      analytics: "2.2 Analytics Cookies",
      analyticsText: "These help us understand how visitors use our site. They collect information such as page views, visit duration, and error reports. This information is processed anonymously.",
      marketing: "2.3 Marketing Cookies",
      marketingText: "These are used to deliver personalized advertisements based on your interests. They may be placed by third-party advertising networks.",
      
      section3Title: "3. Cookies We Use",
      tableHeader1: "Cookie Name",
      tableHeader2: "Type",
      tableHeader3: "Purpose",
      tableHeader4: "Duration",
      cookie1Name: "cookie-consent",
      cookie1Type: "Essential",
      cookie1Purpose: "Stores your cookie preferences",
      cookie1Duration: "1 year",
      cookie2Name: "preferred-language",
      cookie2Type: "Essential",
      cookie2Purpose: "Stores your language preference",
      cookie2Duration: "1 year",
      cookie3Name: "_ga",
      cookie3Type: "Analytics",
      cookie3Purpose: "Google Analytics visitor tracking",
      cookie3Duration: "2 years",
      
      section4Title: "4. Managing Your Cookie Preferences",
      section4Text: "You can manage your cookie preferences in the following ways:",
      manage1: "Through the settings in our website's cookie banner",
      manage2: "By blocking or deleting cookies in your browser settings",
      manageNote: "Note:",
      manageNoteText: "If you disable essential cookies, some features of our website may not function properly.",
      
      section5Title: "5. Browser Settings",
      section5Text: "To manage cookies through your browser, you can use the following links:",
      
      section6Title: "6. Contact",
      section6Text: "For questions about our cookie policy, contact us at",
      section6TextEnd: ".",
    },
    ru: {
      backButton: "Главная",
      badge: "Политика Cookie",
      title: "Политика использования cookie",
      subtitle: "Узнайте, как мы используем файлы cookie на нашем сайте.",
      lastUpdate: "Последнее обновление",
      dateLocale: "ru-RU",
      
      section1Title: "1. Что такое cookie?",
      section1Text: "Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве (компьютере, планшете или телефоне) при посещении веб-сайтов. Cookie обеспечивают правильную работу веб-сайтов, персонализируют ваш опыт и собирают информацию об использовании сайта.",
      
      section2Title: "2. Типы используемых нами cookie",
      essential: "2.1 Обязательные cookie",
      essentialText: "Необходимы для основных функций нашего веб-сайта. Без этих cookie сайт не может работать должным образом. Они используются для управления сеансами, безопасности и языковых настроек.",
      analytics: "2.2 Аналитические cookie",
      analyticsText: "Помогают нам понять, как посетители используют наш сайт. Они собирают информацию о просмотрах страниц, продолжительности посещений и отчётах об ошибках. Эта информация обрабатывается анонимно.",
      marketing: "2.3 Маркетинговые cookie",
      marketingText: "Используются для показа персонализированной рекламы на основе ваших интересов. Могут размещаться сторонними рекламными сетями.",
      
      section3Title: "3. Используемые нами cookie",
      tableHeader1: "Название cookie",
      tableHeader2: "Тип",
      tableHeader3: "Назначение",
      tableHeader4: "Срок",
      cookie1Name: "cookie-consent",
      cookie1Type: "Обязательный",
      cookie1Purpose: "Сохраняет ваши настройки cookie",
      cookie1Duration: "1 год",
      cookie2Name: "preferred-language",
      cookie2Type: "Обязательный",
      cookie2Purpose: "Сохраняет ваши языковые настройки",
      cookie2Duration: "1 год",
      cookie3Name: "_ga",
      cookie3Type: "Аналитический",
      cookie3Purpose: "Отслеживание посетителей Google Analytics",
      cookie3Duration: "2 года",
      
      section4Title: "4. Управление настройками cookie",
      section4Text: "Вы можете управлять настройками cookie следующими способами:",
      manage1: "Через настройки в баннере cookie на нашем сайте",
      manage2: "Блокируя или удаляя cookie в настройках браузера",
      manageNote: "Примечание:",
      manageNoteText: "Если вы отключите обязательные cookie, некоторые функции нашего сайта могут работать некорректно.",
      
      section5Title: "5. Настройки браузера",
      section5Text: "Для управления cookie через браузер используйте следующие ссылки:",
      
      section6Title: "6. Контакты",
      section6Text: "По вопросам о нашей политике cookie свяжитесь с нами по адресу",
      section6TextEnd: ".",
    },
    uk: {
      backButton: "Головна",
      badge: "Політика Cookie",
      title: "Політика використання cookie",
      subtitle: "Дізнайтеся, як ми використовуємо файли cookie на нашому сайті.",
      lastUpdate: "Останнє оновлення",
      dateLocale: "uk-UA",
      
      section1Title: "1. Що таке cookie?",
      section1Text: "Cookie — це невеликі текстові файли, які зберігаються на вашому пристрої (комп'ютері, планшеті або телефоні) при відвідуванні веб-сайтів. Cookie забезпечують правильну роботу веб-сайтів, персоналізують ваш досвід та збирають інформацію про використання сайту.",
      
      section2Title: "2. Типи cookie, які ми використовуємо",
      essential: "2.1 Обов'язкові cookie",
      essentialText: "Необхідні для основних функцій нашого веб-сайту. Без цих cookie сайт не може працювати належним чином. Вони використовуються для управління сеансами, безпеки та мовних налаштувань.",
      analytics: "2.2 Аналітичні cookie",
      analyticsText: "Допомагають нам зрозуміти, як відвідувачі використовують наш сайт. Вони збирають інформацію про перегляди сторінок, тривалість відвідувань та звіти про помилки. Ця інформація обробляється анонімно.",
      marketing: "2.3 Маркетингові cookie",
      marketingText: "Використовуються для показу персоналізованої реклами на основі ваших інтересів. Можуть розміщуватися сторонніми рекламними мережами.",
      
      section3Title: "3. Cookie, які ми використовуємо",
      tableHeader1: "Назва cookie",
      tableHeader2: "Тип",
      tableHeader3: "Призначення",
      tableHeader4: "Термін",
      cookie1Name: "cookie-consent",
      cookie1Type: "Обов'язковий",
      cookie1Purpose: "Зберігає ваші налаштування cookie",
      cookie1Duration: "1 рік",
      cookie2Name: "preferred-language",
      cookie2Type: "Обов'язковий",
      cookie2Purpose: "Зберігає ваші мовні налаштування",
      cookie2Duration: "1 рік",
      cookie3Name: "_ga",
      cookie3Type: "Аналітичний",
      cookie3Purpose: "Відстеження відвідувачів Google Analytics",
      cookie3Duration: "2 роки",
      
      section4Title: "4. Управління налаштуваннями cookie",
      section4Text: "Ви можете керувати налаштуваннями cookie наступними способами:",
      manage1: "Через налаштування в банері cookie на нашому сайті",
      manage2: "Блокуючи або видаляючи cookie в налаштуваннях браузера",
      manageNote: "Примітка:",
      manageNoteText: "Якщо ви вимкнете обов'язкові cookie, деякі функції нашого сайту можуть працювати некоректно.",
      
      section5Title: "5. Налаштування браузера",
      section5Text: "Для управління cookie через браузер використовуйте наступні посилання:",
      
      section6Title: "6. Контакти",
      section6Text: "З питань щодо нашої політики cookie зв'яжіться з нами за адресою",
      section6TextEnd: ".",
    },
    ar: {
      backButton: "الصفحة الرئيسية",
      badge: "سياسة ملفات تعريف الارتباط",
      title: "سياسة ملفات تعريف الارتباط",
      subtitle: "تعرف على كيفية استخدامنا لملفات تعريف الارتباط على موقعنا.",
      lastUpdate: "آخر تحديث",
      dateLocale: "ar-SA",
      
      section1Title: "1. ما هي ملفات تعريف الارتباط؟",
      section1Text: "ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك (كمبيوتر أو جهاز لوحي أو هاتف) عند زيارة المواقع الإلكترونية. تساعد ملفات تعريف الارتباط المواقع على العمل بشكل صحيح، وتخصيص تجربتك، وجمع معلومات حول استخدام الموقع.",
      
      section2Title: "2. أنواع ملفات تعريف الارتباط التي نستخدمها",
      essential: "2.1 ملفات تعريف الارتباط الضرورية",
      essentialText: "هذه ضرورية للوظائف الأساسية لموقعنا. بدون هذه الملفات، لا يمكن للموقع العمل بشكل صحيح. تُستخدم لإدارة الجلسات والأمان وتفضيلات اللغة.",
      analytics: "2.2 ملفات تعريف الارتباط التحليلية",
      analyticsText: "تساعدنا على فهم كيفية استخدام الزوار لموقعنا. تجمع معلومات مثل مشاهدات الصفحات ومدة الزيارة وتقارير الأخطاء. يتم معالجة هذه المعلومات بشكل مجهول.",
      marketing: "2.3 ملفات تعريف الارتباط التسويقية",
      marketingText: "تُستخدم لعرض إعلانات مخصصة بناءً على اهتماماتك. قد يتم وضعها من قبل شبكات إعلانية تابعة لجهات خارجية.",
      
      section3Title: "3. ملفات تعريف الارتباط التي نستخدمها",
      tableHeader1: "اسم الملف",
      tableHeader2: "النوع",
      tableHeader3: "الغرض",
      tableHeader4: "المدة",
      cookie1Name: "cookie-consent",
      cookie1Type: "ضروري",
      cookie1Purpose: "يخزن تفضيلات ملفات تعريف الارتباط الخاصة بك",
      cookie1Duration: "سنة واحدة",
      cookie2Name: "preferred-language",
      cookie2Type: "ضروري",
      cookie2Purpose: "يخزن تفضيلات اللغة الخاصة بك",
      cookie2Duration: "سنة واحدة",
      cookie3Name: "_ga",
      cookie3Type: "تحليلي",
      cookie3Purpose: "تتبع زوار Google Analytics",
      cookie3Duration: "سنتان",
      
      section4Title: "4. إدارة تفضيلات ملفات تعريف الارتباط",
      section4Text: "يمكنك إدارة تفضيلات ملفات تعريف الارتباط بالطرق التالية:",
      manage1: "من خلال الإعدادات في شريط ملفات تعريف الارتباط على موقعنا",
      manage2: "عن طريق حظر أو حذف ملفات تعريف الارتباط في إعدادات المتصفح",
      manageNote: "ملاحظة:",
      manageNoteText: "إذا قمت بتعطيل ملفات تعريف الارتباط الضرورية، فقد لا تعمل بعض ميزات موقعنا بشكل صحيح.",
      
      section5Title: "5. إعدادات المتصفح",
      section5Text: "لإدارة ملفات تعريف الارتباط من خلال متصفحك، يمكنك استخدام الروابط التالية:",
      
      section6Title: "6. الاتصال",
      section6Text: "لأي أسئلة حول سياسة ملفات تعريف الارتباط، اتصل بنا على",
      section6TextEnd: ".",
    },
  };

  const t = content[language as keyof typeof content] || content.tr;
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "rtl" : ""}`} dir={isRTL ? "rtl" : "ltr"}>
      <SEOHead page="legal" />
      <Header />
      
      <section className="relative pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 md:pb-16 overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <Badge variant="secondary" className="mb-4 sm:mb-6 text-xs sm:text-sm">
              <Cookie className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              {t.badge}
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              {t.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
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
            
            <h3 className="text-lg font-medium mb-2">{t.essential}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.essentialText}
            </p>
            
            <h3 className="text-lg font-medium mb-2">{t.analytics}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.analyticsText}
            </p>
            
            <h3 className="text-lg font-medium mb-2">{t.marketing}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.marketingText}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section3Title}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-border rounded-lg">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium">{t.tableHeader1}</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">{t.tableHeader2}</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">{t.tableHeader3}</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">{t.tableHeader4}</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-muted-foreground">
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">{t.cookie1Name}</td>
                    <td className="px-4 py-2">{t.cookie1Type}</td>
                    <td className="px-4 py-2">{t.cookie1Purpose}</td>
                    <td className="px-4 py-2">{t.cookie1Duration}</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">{t.cookie2Name}</td>
                    <td className="px-4 py-2">{t.cookie2Type}</td>
                    <td className="px-4 py-2">{t.cookie2Purpose}</td>
                    <td className="px-4 py-2">{t.cookie2Duration}</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">{t.cookie3Name}</td>
                    <td className="px-4 py-2">{t.cookie3Type}</td>
                    <td className="px-4 py-2">{t.cookie3Purpose}</td>
                    <td className="px-4 py-2">{t.cookie3Duration}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section4Title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.section4Text}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t.manage1}</li>
              <li>{t.manage2}</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>{t.manageNote}</strong> {t.manageNoteText}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section5Title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.section5Text}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section6Title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.section6Text} <strong>info@089bayern.com</strong> {t.section6TextEnd}
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
