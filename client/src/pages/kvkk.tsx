import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { useLanguage } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function KVKK() {
  const { language } = useLanguage();

  const content = {
    tr: {
      backButton: "Ana Sayfa",
      badge: "Veri Koruma",
      title: "KVKK Aydınlatma Metni",
      subtitle: "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında haklarınız ve veri işleme politikalarımız hakkında bilgi edinin.",
      lastUpdate: "Son güncelleme",
      
      section1Title: "1. Veri Sorumlusu",
      section1Text: "6698 sayılı Kişisel Verilerin Korunması Kanunu (\"KVKK\") kapsamında, kişisel verileriniz veri sorumlusu sıfatıyla 089 Bayern Enerji Sistemleri Ltd. Şti. tarafından aşağıda açıklanan kapsamda işlenebilecektir.",
      company: "Firma",
      companyName: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Adres",
      addressText: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Alanya/Antalya, Turkiye",
      phone: "Telefon",
      email: "E-posta",
      dataProtectionOfficer: "KVKK Sorumlusu",
      
      section2Title: "2. İşlenen Kişisel Veriler",
      section2Intro: "Şirketimiz tarafından aşağıdaki kişisel veriler işlenmektedir:",
      identityInfo: "Kimlik Bilgileri:",
      identityInfoText: "Ad, soyad",
      contactInfo: "İletişim Bilgileri:",
      contactInfoText: "Telefon numarası, e-posta adresi, adres",
      requestInfo: "Talep Bilgileri:",
      requestInfoText: "Hizmet talepleri, mülk bilgileri, enerji tüketim verileri",
      securityInfo: "İşlem Güvenliği:",
      securityInfoText: "IP adresi, çerez verileri, oturum bilgileri",
      
      section3Title: "3. Kişisel Verilerin İşlenme Amaçları",
      section3Intro: "Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:",
      purpose1: "Hizmet taleplerinin değerlendirilmesi ve yanıtlanması",
      purpose2: "Teklif hazırlanması ve sunulması",
      purpose3: "Sözleşme süreçlerinin yürütülmesi",
      purpose4: "Müşteri ilişkileri yönetimi",
      purpose5: "Yasal yükümlülüklerin yerine getirilmesi",
      purpose6: "İletişim faaliyetlerinin yürütülmesi",
      
      section4Title: "4. Kişisel Verilerin Aktarılması",
      section4Text: "Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, iş ortaklarımıza, tedarikçilerimize, kanunen yetkili kamu kurumlarına ve özel kişilere KVKK'nın 8. ve 9. maddelerinde belirtilen şartlara uygun olarak aktarılabilecektir.",
      
      section5Title: "5. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi",
      section5Text: "Kişisel verileriniz; web sitemiz, telefon, e-posta, WhatsApp ve yüz yüze görüşmeler aracılığıyla otomatik veya otomatik olmayan yöntemlerle toplanmaktadır. Bu veriler KVKK'nın 5. maddesinde belirtilen hukuki sebeplere dayanarak işlenmektedir.",
      
      section6Title: "6. Kişisel Veri Sahibinin Hakları",
      section6Intro: "KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:",
      right1: "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
      right2: "Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme",
      right3: "Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme",
      right4: "Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme",
      right5: "Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme",
      right6: "KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme",
      right7: "İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme",
      right8: "Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme",
      
      section7Title: "7. Başvuru Yöntemi",
      section7Text: "Yukarıda belirtilen haklarınızı kullanmak için kvkk@089bayern.com adresine e-posta göndererek veya şirket adresimize yazılı başvuru yaparak bizimle iletişime geçebilirsiniz. Başvurularınız en geç 30 gün içinde yanıtlanacaktır.",
      
      section8Title: "8. Veri Saklama Süresi",
      section8Text: "Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı süreleri boyunca saklanmaktadır.",
    },
    de: {
      backButton: "Startseite",
      badge: "Datenschutz",
      title: "Datenschutzerklärung (KVKK)",
      subtitle: "Informieren Sie sich über Ihre Rechte und unsere Datenverarbeitungsrichtlinien gemäß dem türkischen Datenschutzgesetz Nr. 6698.",
      lastUpdate: "Letzte Aktualisierung",
      
      section1Title: "1. Verantwortliche Stelle",
      section1Text: "Im Rahmen des türkischen Datenschutzgesetzes Nr. 6698 (\"KVKK\") können Ihre personenbezogenen Daten von 089 Bayern Enerji Sistemleri Ltd. Şti. als verantwortliche Stelle im unten beschriebenen Umfang verarbeitet werden.",
      company: "Unternehmen",
      companyName: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Adresse",
      addressText: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Alanya/Antalya, Türkei",
      phone: "Telefon",
      email: "E-Mail",
      dataProtectionOfficer: "Datenschutzbeauftragter",
      
      section2Title: "2. Verarbeitete personenbezogene Daten",
      section2Intro: "Folgende personenbezogene Daten werden von unserem Unternehmen verarbeitet:",
      identityInfo: "Identitätsdaten:",
      identityInfoText: "Vor- und Nachname",
      contactInfo: "Kontaktdaten:",
      contactInfoText: "Telefonnummer, E-Mail-Adresse, Anschrift",
      requestInfo: "Anfragedaten:",
      requestInfoText: "Serviceanfragen, Immobilieninformationen, Energieverbrauchsdaten",
      securityInfo: "Sicherheitsdaten:",
      securityInfoText: "IP-Adresse, Cookie-Daten, Sitzungsinformationen",
      
      section3Title: "3. Zwecke der Datenverarbeitung",
      section3Intro: "Ihre personenbezogenen Daten werden für folgende Zwecke verarbeitet:",
      purpose1: "Bearbeitung und Beantwortung von Serviceanfragen",
      purpose2: "Erstellung und Unterbreitung von Angeboten",
      purpose3: "Durchführung von Vertragsprozessen",
      purpose4: "Kundenbeziehungsmanagement",
      purpose5: "Erfüllung gesetzlicher Pflichten",
      purpose6: "Durchführung von Kommunikationsaktivitäten",
      
      section4Title: "4. Weitergabe personenbezogener Daten",
      section4Text: "Ihre personenbezogenen Daten können zur Erreichung der oben genannten Zwecke gemäß den Artikeln 8 und 9 des KVKK an unsere Geschäftspartner, Lieferanten, gesetzlich befugte öffentliche Einrichtungen und Privatpersonen weitergegeben werden.",
      
      section5Title: "5. Erhebungsmethode und Rechtsgrundlage",
      section5Text: "Ihre personenbezogenen Daten werden über unsere Website, Telefon, E-Mail, WhatsApp und persönliche Gespräche mit automatischen oder nicht-automatischen Methoden erhoben. Diese Daten werden auf Grundlage der in Artikel 5 des KVKK genannten Rechtsgrundlagen verarbeitet.",
      
      section6Title: "6. Rechte der betroffenen Person",
      section6Intro: "Gemäß Artikel 11 des KVKK haben Sie folgende Rechte:",
      right1: "Auskunft darüber, ob Ihre personenbezogenen Daten verarbeitet werden",
      right2: "Informationen über die Verarbeitung Ihrer personenbezogenen Daten anzufordern",
      right3: "Den Zweck der Datenverarbeitung und deren zweckgemäße Verwendung zu erfahren",
      right4: "Die Dritten zu kennen, an die Ihre Daten im In- oder Ausland übermittelt werden",
      right5: "Die Berichtigung unvollständiger oder fehlerhafter Daten zu verlangen",
      right6: "Die Löschung oder Vernichtung Ihrer Daten gemäß Artikel 7 des KVKK zu verlangen",
      right7: "Widerspruch gegen Entscheidungen einzulegen, die ausschließlich durch automatisierte Systeme getroffen werden",
      right8: "Schadensersatz bei rechtswidriger Verarbeitung Ihrer Daten zu verlangen",
      
      section7Title: "7. Antragsverfahren",
      section7Text: "Um Ihre oben genannten Rechte auszuüben, können Sie uns per E-Mail an kvkk@089bayern.com oder schriftlich an unsere Firmenadresse kontaktieren. Ihre Anfragen werden innerhalb von maximal 30 Tagen beantwortet.",
      
      section8Title: "8. Speicherdauer",
      section8Text: "Ihre personenbezogenen Daten werden für die Dauer des Verarbeitungszwecks und gemäß den gesetzlichen Verjährungsfristen aufbewahrt.",
    },
    en: {
      backButton: "Home",
      badge: "Data Protection",
      title: "Data Protection Notice (KVKK)",
      subtitle: "Learn about your rights and our data processing policies under the Turkish Personal Data Protection Law No. 6698.",
      lastUpdate: "Last update",
      
      section1Title: "1. Data Controller",
      section1Text: "Within the scope of the Turkish Personal Data Protection Law No. 6698 (\"KVKK\"), your personal data may be processed by 089 Bayern Enerji Sistemleri Ltd. Şti. as the data controller in the scope explained below.",
      company: "Company",
      companyName: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Address",
      addressText: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Alanya/Antalya, Turkey",
      phone: "Phone",
      email: "Email",
      dataProtectionOfficer: "Data Protection Officer",
      
      section2Title: "2. Processed Personal Data",
      section2Intro: "The following personal data is processed by our company:",
      identityInfo: "Identity Information:",
      identityInfoText: "Name, surname",
      contactInfo: "Contact Information:",
      contactInfoText: "Phone number, email address, address",
      requestInfo: "Request Information:",
      requestInfoText: "Service requests, property information, energy consumption data",
      securityInfo: "Security Information:",
      securityInfoText: "IP address, cookie data, session information",
      
      section3Title: "3. Purposes of Data Processing",
      section3Intro: "Your personal data is processed for the following purposes:",
      purpose1: "Evaluating and responding to service requests",
      purpose2: "Preparing and presenting offers",
      purpose3: "Conducting contract processes",
      purpose4: "Customer relationship management",
      purpose5: "Fulfilling legal obligations",
      purpose6: "Conducting communication activities",
      
      section4Title: "4. Transfer of Personal Data",
      section4Text: "Your personal data may be transferred to our business partners, suppliers, legally authorized public institutions and private persons in accordance with Articles 8 and 9 of KVKK for the realization of the purposes stated above.",
      
      section5Title: "5. Collection Method and Legal Basis",
      section5Text: "Your personal data is collected through our website, phone, email, WhatsApp and face-to-face meetings by automatic or non-automatic methods. This data is processed based on the legal grounds specified in Article 5 of KVKK.",
      
      section6Title: "6. Rights of the Data Subject",
      section6Intro: "Under Article 11 of KVKK, you have the following rights:",
      right1: "To learn whether your personal data is processed",
      right2: "To request information if your personal data has been processed",
      right3: "To learn the purpose of processing and whether they are used in accordance with their purpose",
      right4: "To know the third parties to whom your personal data is transferred domestically or abroad",
      right5: "To request correction of incomplete or incorrect personal data",
      right6: "To request deletion or destruction of personal data under the conditions stipulated in Article 7 of KVKK",
      right7: "To object to the emergence of a result against oneself by analyzing the processed data exclusively through automated systems",
      right8: "To claim compensation for damages in case of unlawful processing of personal data",
      
      section7Title: "7. Application Method",
      section7Text: "To exercise your rights stated above, you can contact us by sending an email to kvkk@089bayern.com or by written application to our company address. Your applications will be answered within 30 days at the latest.",
      
      section8Title: "8. Data Retention Period",
      section8Text: "Your personal data is stored for the duration required by the processing purpose and for the statute of limitations periods stipulated in the relevant legislation.",
    },
    ru: {
      backButton: "Главная",
      badge: "Защита данных",
      title: "Уведомление о защите данных (KVKK)",
      subtitle: "Узнайте о ваших правах и нашей политике обработки данных в соответствии с турецким Законом о защите персональных данных № 6698.",
      lastUpdate: "Последнее обновление",
      
      section1Title: "1. Ответственный за обработку данных",
      section1Text: "В соответствии с турецким Законом о защите персональных данных № 6698 (\"KVKK\") ваши персональные данные могут обрабатываться компанией 089 Bayern Enerji Sistemleri Ltd. Şti. как ответственной стороной в объёме, описанном ниже.",
      company: "Компания",
      companyName: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Адрес",
      addressText: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Alanya/Antalya, Турция",
      phone: "Телефон",
      email: "Эл. почта",
      dataProtectionOfficer: "Ответственный за защиту данных",
      
      section2Title: "2. Обрабатываемые персональные данные",
      section2Intro: "Наша компания обрабатывает следующие персональные данные:",
      identityInfo: "Идентификационные данные:",
      identityInfoText: "Имя, фамилия",
      contactInfo: "Контактные данные:",
      contactInfoText: "Номер телефона, адрес электронной почты, адрес",
      requestInfo: "Данные запросов:",
      requestInfoText: "Заявки на услуги, информация о недвижимости, данные об энергопотреблении",
      securityInfo: "Данные безопасности:",
      securityInfoText: "IP-адрес, данные cookies, информация о сессии",
      
      section3Title: "3. Цели обработки данных",
      section3Intro: "Ваши персональные данные обрабатываются в следующих целях:",
      purpose1: "Оценка и ответ на запросы услуг",
      purpose2: "Подготовка и представление предложений",
      purpose3: "Проведение договорных процессов",
      purpose4: "Управление отношениями с клиентами",
      purpose5: "Выполнение юридических обязательств",
      purpose6: "Осуществление коммуникационной деятельности",
      
      section4Title: "4. Передача персональных данных",
      section4Text: "Ваши персональные данные могут передаваться нашим деловым партнёрам, поставщикам, уполномоченным государственным органам и частным лицам в соответствии со статьями 8 и 9 KVKK для достижения вышеуказанных целей.",
      
      section5Title: "5. Метод сбора и правовое основание",
      section5Text: "Ваши персональные данные собираются через наш веб-сайт, телефон, электронную почту, WhatsApp и личные встречи автоматическими или неавтоматическими методами. Эти данные обрабатываются на основании правовых оснований, указанных в статье 5 KVKK.",
      
      section6Title: "6. Права субъекта данных",
      section6Intro: "В соответствии со статьёй 11 KVKK вы имеете следующие права:",
      right1: "Узнать, обрабатываются ли ваши персональные данные",
      right2: "Запросить информацию об обработке ваших персональных данных",
      right3: "Узнать цель обработки и используются ли данные в соответствии с их целью",
      right4: "Знать третьих лиц, которым передаются ваши персональные данные внутри страны или за рубежом",
      right5: "Требовать исправления неполных или неточных персональных данных",
      right6: "Требовать удаления или уничтожения персональных данных в соответствии со статьёй 7 KVKK",
      right7: "Возражать против результата, возникшего в результате анализа обработанных данных исключительно автоматизированными системами",
      right8: "Требовать возмещения ущерба в случае незаконной обработки персональных данных",
      
      section7Title: "7. Способ подачи заявления",
      section7Text: "Для реализации вышеуказанных прав вы можете связаться с нами по электронной почте kvkk@089bayern.com или письменно по адресу нашей компании. Ваши заявления будут рассмотрены в течение 30 дней.",
      
      section8Title: "8. Срок хранения данных",
      section8Text: "Ваши персональные данные хранятся в течение срока, необходимого для цели обработки, и в течение сроков давности, предусмотренных соответствующим законодательством.",
    },
    uk: {
      backButton: "Головна",
      badge: "Захист даних",
      title: "Повідомлення про захист даних (KVKK)",
      subtitle: "Дізнайтеся про ваші права та нашу політику обробки даних відповідно до турецького Закону про захист персональних даних № 6698.",
      lastUpdate: "Останнє оновлення",
      
      section1Title: "1. Відповідальна сторона",
      section1Text: "У межах турецького Закону про захист персональних даних № 6698 (\"KVKK\") ваші персональні дані можуть оброблятися компанією 089 Bayern Enerji Sistemleri Ltd. Şti. як відповідальною стороною в обсязі, описаному нижче.",
      company: "Компанія",
      companyName: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Адреса",
      addressText: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Alanya/Antalya, Туреччина",
      phone: "Телефон",
      email: "Ел. пошта",
      dataProtectionOfficer: "Відповідальний за захист даних",
      
      section2Title: "2. Персональні дані, що обробляються",
      section2Intro: "Наша компанія обробляє такі персональні дані:",
      identityInfo: "Ідентифікаційні дані:",
      identityInfoText: "Ім'я, прізвище",
      contactInfo: "Контактні дані:",
      contactInfoText: "Номер телефону, адреса електронної пошти, адреса",
      requestInfo: "Дані запитів:",
      requestInfoText: "Запити на послуги, інформація про нерухомість, дані про енергоспоживання",
      securityInfo: "Дані безпеки:",
      securityInfoText: "IP-адреса, дані cookies, інформація про сесію",
      
      section3Title: "3. Цілі обробки даних",
      section3Intro: "Ваші персональні дані обробляються з такими цілями:",
      purpose1: "Оцінка та відповідь на запити послуг",
      purpose2: "Підготовка та надання пропозицій",
      purpose3: "Проведення договірних процесів",
      purpose4: "Управління відносинами з клієнтами",
      purpose5: "Виконання юридичних зобов'язань",
      purpose6: "Здійснення комунікаційної діяльності",
      
      section4Title: "4. Передача персональних даних",
      section4Text: "Ваші персональні дані можуть передаватися нашим діловим партнерам, постачальникам, уповноваженим державним органам та приватним особам відповідно до статей 8 і 9 KVKK для досягнення вищезазначених цілей.",
      
      section5Title: "5. Метод збору та правова основа",
      section5Text: "Ваші персональні дані збираються через наш веб-сайт, телефон, електронну пошту, WhatsApp та особисті зустрічі автоматичними або неавтоматичними методами. Ці дані обробляються на підставі правових основ, зазначених у статті 5 KVKK.",
      
      section6Title: "6. Права суб'єкта даних",
      section6Intro: "Відповідно до статті 11 KVKK ви маєте такі права:",
      right1: "Дізнатися, чи обробляються ваші персональні дані",
      right2: "Запитати інформацію про обробку ваших персональних даних",
      right3: "Дізнатися мету обробки та чи використовуються дані відповідно до їх мети",
      right4: "Знати третіх осіб, яким передаються ваші персональні дані всередині країни або за кордоном",
      right5: "Вимагати виправлення неповних або неточних персональних даних",
      right6: "Вимагати видалення або знищення персональних даних відповідно до статті 7 KVKK",
      right7: "Заперечувати проти результату, що виник внаслідок аналізу оброблених даних виключно автоматизованими системами",
      right8: "Вимагати відшкодування збитків у разі незаконної обробки персональних даних",
      
      section7Title: "7. Спосіб подання заяви",
      section7Text: "Для реалізації вищезазначених прав ви можете зв'язатися з нами електронною поштою kvkk@089bayern.com або письмово за адресою нашої компанії. Ваші заяви будуть розглянуті протягом 30 днів.",
      
      section8Title: "8. Термін зберігання даних",
      section8Text: "Ваші персональні дані зберігаються протягом терміну, необхідного для мети обробки, та протягом строків давності, передбачених відповідним законодавством.",
    },
    ar: {
      backButton: "الصفحة الرئيسية",
      badge: "حماية البيانات",
      title: "إشعار حماية البيانات (KVKK)",
      subtitle: "تعرف على حقوقك وسياسات معالجة البيانات لدينا بموجب قانون حماية البيانات الشخصية التركي رقم 6698.",
      lastUpdate: "آخر تحديث",
      
      section1Title: "1. المسؤول عن البيانات",
      section1Text: "في نطاق قانون حماية البيانات الشخصية التركي رقم 6698 (\"KVKK\")، يمكن معالجة بياناتك الشخصية من قبل شركة 089 Bayern Enerji Sistemleri Ltd. Şti. كمسؤول عن البيانات في النطاق الموضح أدناه.",
      company: "الشركة",
      companyName: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "العنوان",
      addressText: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Alanya/Antalya, تركيا",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      dataProtectionOfficer: "مسؤول حماية البيانات",
      
      section2Title: "2. البيانات الشخصية المعالجة",
      section2Intro: "تتم معالجة البيانات الشخصية التالية من قبل شركتنا:",
      identityInfo: "بيانات الهوية:",
      identityInfoText: "الاسم الأول، اسم العائلة",
      contactInfo: "بيانات الاتصال:",
      contactInfoText: "رقم الهاتف، عنوان البريد الإلكتروني، العنوان",
      requestInfo: "بيانات الطلبات:",
      requestInfoText: "طلبات الخدمة، معلومات العقار، بيانات استهلاك الطاقة",
      securityInfo: "بيانات الأمان:",
      securityInfoText: "عنوان IP، بيانات ملفات تعريف الارتباط، معلومات الجلسة",
      
      section3Title: "3. أغراض معالجة البيانات",
      section3Intro: "تتم معالجة بياناتك الشخصية للأغراض التالية:",
      purpose1: "تقييم طلبات الخدمة والرد عليها",
      purpose2: "إعداد وتقديم العروض",
      purpose3: "تنفيذ عمليات العقود",
      purpose4: "إدارة علاقات العملاء",
      purpose5: "الوفاء بالالتزامات القانونية",
      purpose6: "تنفيذ أنشطة الاتصال",
      
      section4Title: "4. نقل البيانات الشخصية",
      section4Text: "يمكن نقل بياناتك الشخصية إلى شركائنا التجاريين والموردين والمؤسسات العامة المخولة قانونياً والأشخاص الخاصين وفقاً للمادتين 8 و9 من KVKK لتحقيق الأغراض المذكورة أعلاه.",
      
      section5Title: "5. طريقة الجمع والأساس القانوني",
      section5Text: "يتم جمع بياناتك الشخصية من خلال موقعنا الإلكتروني والهاتف والبريد الإلكتروني وواتساب والاجتماعات الشخصية بطرق آلية أو غير آلية. تتم معالجة هذه البيانات بناءً على الأسس القانونية المحددة في المادة 5 من KVKK.",
      
      section6Title: "6. حقوق صاحب البيانات",
      section6Intro: "بموجب المادة 11 من KVKK، لديك الحقوق التالية:",
      right1: "معرفة ما إذا كانت بياناتك الشخصية تتم معالجتها",
      right2: "طلب معلومات حول معالجة بياناتك الشخصية",
      right3: "معرفة غرض المعالجة وما إذا كانت تُستخدم وفقاً لغرضها",
      right4: "معرفة الأطراف الثالثة التي يتم نقل بياناتك الشخصية إليها داخلياً أو خارجياً",
      right5: "طلب تصحيح البيانات الشخصية غير المكتملة أو غير الصحيحة",
      right6: "طلب حذف أو إتلاف البيانات الشخصية وفقاً للمادة 7 من KVKK",
      right7: "الاعتراض على نتيجة ناشئة عن تحليل البيانات المعالجة حصرياً بواسطة أنظمة آلية",
      right8: "المطالبة بالتعويض عن الأضرار في حالة المعالجة غير القانونية للبيانات الشخصية",
      
      section7Title: "7. طريقة التقديم",
      section7Text: "لممارسة حقوقك المذكورة أعلاه، يمكنك الاتصال بنا عبر البريد الإلكتروني kvkk@089bayern.com أو بالتقديم الخطي إلى عنوان شركتنا. سيتم الرد على طلباتك خلال 30 يوماً كحد أقصى.",
      
      section8Title: "8. فترة الاحتفاظ بالبيانات",
      section8Text: "يتم الاحتفاظ ببياناتك الشخصية طوال المدة المطلوبة لغرض المعالجة ولفترات التقادم المنصوص عليها في التشريعات ذات الصلة.",
    },
  };

  const t = content[language as keyof typeof content] || content.tr;
  const isRTL = language === "ar";
  const dateLocale = language === "tr" ? "tr-TR" : language === "de" ? "de-DE" : language === "ru" ? "ru-RU" : language === "uk" ? "uk-UA" : language === "ar" ? "ar-SA" : "en-US";

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "rtl" : ""}`} dir={isRTL ? "rtl" : "ltr"}>
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
        <p className="text-sm text-muted-foreground mb-8">{t.lastUpdate}: {new Date().toLocaleDateString(dateLocale)}</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section1Title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.section1Text}
            </p>
            <div className="bg-muted/50 p-4 rounded-lg mt-4">
              <p className="text-sm"><strong>{t.company}:</strong> {t.companyName}</p>
              <p className="text-sm"><strong>{t.address}:</strong> {t.addressText}</p>
              <p className="text-sm"><strong>{t.phone}:</strong> +90 507 183 2036 | +49 173 5994699</p>
              <p className="text-sm"><strong>{t.email}:</strong> info@089bayern.com</p>
              <p className="text-sm"><strong>{t.dataProtectionOfficer}:</strong> kvkk@089bayern.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section2Title}</h2>
            <p className="text-muted-foreground mb-3">{t.section2Intro}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>{t.identityInfo}</strong> {t.identityInfoText}</li>
              <li><strong>{t.contactInfo}</strong> {t.contactInfoText}</li>
              <li><strong>{t.requestInfo}</strong> {t.requestInfoText}</li>
              <li><strong>{t.securityInfo}</strong> {t.securityInfoText}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section3Title}</h2>
            <p className="text-muted-foreground mb-3">{t.section3Intro}</p>
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
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section5Title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.section5Text}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section6Title}</h2>
            <p className="text-muted-foreground mb-3">{t.section6Intro}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t.right1}</li>
              <li>{t.right2}</li>
              <li>{t.right3}</li>
              <li>{t.right4}</li>
              <li>{t.right5}</li>
              <li>{t.right6}</li>
              <li>{t.right7}</li>
              <li>{t.right8}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section7Title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.section7Text}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.section8Title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.section8Text}
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
