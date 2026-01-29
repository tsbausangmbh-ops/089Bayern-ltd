import nodemailer from "nodemailer";

// Email templates for all 6 languages
const emailTemplates: Record<string, {
  subject: string;
  greeting: string;
  thankYou: string;
  receivedInfo: string;
  nextSteps: string;
  step1: string;
  step2: string;
  step3: string;
  questions: string;
  regards: string;
  team: string;
}> = {
  tr: {
    subject: "089Bayern - Talebinizi Aldık",
    greeting: "Merhaba",
    thankYou: "Enerji sistemi danışmanlık talebiniz için teşekkür ederiz!",
    receivedInfo: "Bilgilerinizi aldık ve en kısa sürede sizinle iletişime geçeceğiz.",
    nextSteps: "Sonraki Adımlar:",
    step1: "Uzmanımız sizi 2 saat içinde arayacak",
    step2: "Ücretsiz keşif randevusu ayarlanacak",
    step3: "Size özel teklif sunulacak",
    questions: "Sorularınız için bize ulaşabilirsiniz:",
    regards: "Saygılarımızla",
    team: "089Bayern Enerji Ekibi",
  },
  de: {
    subject: "089Bayern - Wir haben Ihre Anfrage erhalten",
    greeting: "Guten Tag",
    thankYou: "Vielen Dank für Ihre Anfrage zur Energieberatung!",
    receivedInfo: "Wir haben Ihre Informationen erhalten und werden uns schnellstmöglich bei Ihnen melden.",
    nextSteps: "Nächste Schritte:",
    step1: "Unser Experte wird Sie innerhalb von 2 Stunden anrufen",
    step2: "Ein kostenloser Besichtigungstermin wird vereinbart",
    step3: "Sie erhalten ein individuelles Angebot",
    questions: "Bei Fragen erreichen Sie uns unter:",
    regards: "Mit freundlichen Grüßen",
    team: "Ihr 089Bayern Energie-Team",
  },
  en: {
    subject: "089Bayern - We Received Your Request",
    greeting: "Hello",
    thankYou: "Thank you for your energy system consultation request!",
    receivedInfo: "We have received your information and will contact you as soon as possible.",
    nextSteps: "Next Steps:",
    step1: "Our expert will call you within 2 hours",
    step2: "A free site visit will be scheduled",
    step3: "You will receive a personalized quote",
    questions: "For questions, you can reach us at:",
    regards: "Best regards",
    team: "Your 089Bayern Energy Team",
  },
  ru: {
    subject: "089Bayern - Мы получили ваш запрос",
    greeting: "Здравствуйте",
    thankYou: "Благодарим вас за запрос на консультацию по энергосистемам!",
    receivedInfo: "Мы получили вашу информацию и свяжемся с вами в ближайшее время.",
    nextSteps: "Следующие шаги:",
    step1: "Наш эксперт позвонит вам в течение 2 часов",
    step2: "Будет назначен бесплатный осмотр объекта",
    step3: "Вы получите индивидуальное предложение",
    questions: "По вопросам обращайтесь:",
    regards: "С уважением",
    team: "Команда 089Bayern Energy",
  },
  uk: {
    subject: "089Bayern - Ми отримали ваш запит",
    greeting: "Вітаємо",
    thankYou: "Дякуємо за ваш запит на консультацію з енергосистем!",
    receivedInfo: "Ми отримали вашу інформацію і зв'яжемося з вами найближчим часом.",
    nextSteps: "Наступні кроки:",
    step1: "Наш експерт зателефонує вам протягом 2 годин",
    step2: "Буде призначений безкоштовний огляд об'єкта",
    step3: "Ви отримаєте індивідуальну пропозицію",
    questions: "З питань звертайтесь:",
    regards: "З повагою",
    team: "Команда 089Bayern Energy",
  },
  ar: {
    subject: "089Bayern - استلمنا طلبك",
    greeting: "مرحباً",
    thankYou: "شكراً لك على طلب استشارة نظام الطاقة!",
    receivedInfo: "لقد تلقينا معلوماتك وسنتواصل معك في أقرب وقت ممكن.",
    nextSteps: "الخطوات التالية:",
    step1: "سيتصل بك خبيرنا خلال ساعتين",
    step2: "سيتم جدولة زيارة موقع مجانية",
    step3: "ستحصل على عرض مخصص",
    questions: "للاستفسارات تواصل معنا:",
    regards: "مع أطيب التحيات",
    team: "فريق 089Bayern للطاقة",
  },
  hr: {
    subject: "089Bayern - Primili smo vaš zahtjev",
    greeting: "Pozdrav",
    thankYou: "Hvala vam na upitu za savjetovanje o energetskim sustavima!",
    receivedInfo: "Primili smo vaše podatke i kontaktirat ćemo vas što je prije moguće.",
    nextSteps: "Sljedeći koraci:",
    step1: "Naš stručnjak će vas nazvati u roku od 2 sata",
    step2: "Zakazat ćemo besplatan pregled objekta",
    step3: "Primit ćete personaliziranu ponudu",
    questions: "Za pitanja nas možete kontaktirati:",
    regards: "S poštovanjem",
    team: "Vaš 089Bayern Energy tim",
  },
};

// Create transporter only if SMTP credentials are available
function createTransporter() {
  const user = process.env.IONOS_SMTP_USER;
  const pass = process.env.IONOS_SMTP_PASSWORD;
  
  if (!user || !pass) {
    console.warn("IONOS SMTP credentials not configured. Email sending disabled.");
    return null;
  }
  
  return nodemailer.createTransport({
    host: "smtp.ionos.de",
    port: 465,
    secure: true,
    auth: { user, pass },
  });
}

// Generate HTML email for customer confirmation
function generateCustomerEmail(name: string, language: string): string {
  const t = emailTemplates[language] || emailTemplates.de;
  const isRTL = language === "ar";
  
  return `
<!DOCTYPE html>
<html dir="${isRTL ? "rtl" : "ltr"}" lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">089Bayern</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Energie-Systeme</p>
  </div>
  
  <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
    <h2 style="color: #1e40af; margin-top: 0;">${t.greeting} ${name}!</h2>
    
    <p style="font-size: 16px;">${t.thankYou}</p>
    <p>${t.receivedInfo}</p>
    
    <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
      <h3 style="color: #1e40af; margin-top: 0;">${t.nextSteps}</h3>
      <ul style="padding-left: 20px;">
        <li style="margin-bottom: 10px;">${t.step1}</li>
        <li style="margin-bottom: 10px;">${t.step2}</li>
        <li style="margin-bottom: 10px;">${t.step3}</li>
      </ul>
    </div>
    
    <p style="color: #666;">${t.questions}</p>
    <p>
      <a href="tel:+905071832036" style="color: #1e40af; text-decoration: none;">+90 507 183 2036</a><br>
      <a href="https://wa.me/905071832036" style="color: #25d366; text-decoration: none;">WhatsApp</a>
    </p>
    
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    
    <p style="margin-bottom: 5px;">${t.regards},</p>
    <p style="font-weight: bold; color: #1e40af;">${t.team}</p>
  </div>
</body>
</html>
  `.trim();
}

// Generate notification email for 089Bayern team
function generateTeamNotificationEmail(leadData: {
  name: string;
  phone: string;
  email?: string;
  location?: string;
  message?: string;
  language: string;
  calculatorData?: {
    propertyType?: string;
    monthlyBill?: number;
    propertySize?: number;
    location?: string;
  };
}): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: #10b981; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0;">Neue Anfrage!</h1>
  </div>
  
  <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
    <h2 style="color: #059669; margin-top: 0;">Kontaktdaten</h2>
    
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 40%;">Name:</td>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${leadData.name}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Telefon:</td>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
          <a href="tel:${leadData.phone}">${leadData.phone}</a>
        </td>
      </tr>
      ${leadData.email ? `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">E-Mail:</td>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
          <a href="mailto:${leadData.email}">${leadData.email}</a>
        </td>
      </tr>
      ` : ""}
      ${leadData.location ? `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Standort:</td>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${leadData.location}</td>
      </tr>
      ` : ""}
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Sprache:</td>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${leadData.language.toUpperCase()}</td>
      </tr>
    </table>
    
    ${leadData.message ? `
    <h3 style="color: #059669; margin-top: 20px;">Nachricht:</h3>
    <p style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
      ${leadData.message}
    </p>
    ` : ""}
    
    ${leadData.calculatorData ? `
    <h3 style="color: #059669; margin-top: 20px;">Calculator-Daten:</h3>
    <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px;">
      ${leadData.calculatorData.propertyType ? `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Immobilientyp:</td>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${leadData.calculatorData.propertyType}</td>
      </tr>
      ` : ""}
      ${leadData.calculatorData.monthlyBill ? `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Monatliche Rechnung:</td>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${leadData.calculatorData.monthlyBill} ₺</td>
      </tr>
      ` : ""}
      ${leadData.calculatorData.propertySize ? `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Fläche:</td>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${leadData.calculatorData.propertySize} m²</td>
      </tr>
      ` : ""}
      ${leadData.calculatorData.location ? `
      <tr>
        <td style="padding: 10px; font-weight: bold;">Region:</td>
        <td style="padding: 10px;">${leadData.calculatorData.location}</td>
      </tr>
      ` : ""}
    </table>
    ` : ""}
    
    <div style="margin-top: 30px; text-align: center;">
      <a href="tel:${leadData.phone}" style="display: inline-block; background: #10b981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">
        Jetzt anrufen
      </a>
    </div>
  </div>
</body>
</html>
  `.trim();
}

export async function sendLeadEmails(leadData: {
  name: string;
  phone: string;
  email?: string;
  location?: string;
  message?: string;
  language: string;
  calculatorData?: {
    propertyType?: string;
    monthlyBill?: number;
    propertySize?: number;
    location?: string;
  };
}): Promise<{ success: boolean; error?: string }> {
  const transporter = createTransporter();
  
  if (!transporter) {
    console.log("Email sending skipped - no SMTP credentials");
    return { success: true }; // Return success so form still works
  }
  
  const fromEmail = process.env.IONOS_SMTP_USER;
  const t = emailTemplates[leadData.language] || emailTemplates.de;
  
  try {
    // Send confirmation to customer (if email provided)
    if (leadData.email) {
      await transporter.sendMail({
        from: `"089Bayern" <${fromEmail}>`,
        to: leadData.email,
        subject: t.subject,
        html: generateCustomerEmail(leadData.name, leadData.language),
      });
      console.log(`Confirmation email sent to ${leadData.email}`);
    }
    
    // Send notification to 089Bayern team
    await transporter.sendMail({
      from: `"089Bayern Website" <${fromEmail}>`,
      to: fromEmail, // Send to the same email (team inbox)
      subject: `Neue Anfrage von ${leadData.name}`,
      html: generateTeamNotificationEmail(leadData),
    });
    console.log("Team notification email sent");
    
    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: String(error) };
  }
}
