import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cookie, Settings, Check } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const cookieTexts = {
  tr: {
    title: "Çerez Kullanımı",
    description: "Web sitemizde deneyiminizi geliştirmek için çerezler kullanıyoruz. 6698 sayılı KVKK kapsamında kişisel verileriniz korunmaktadır.",
    accept: "Kabul Et",
    reject: "Reddet",
    settings: "Ayarlar",
    necessary: "Zorunlu Çerezler",
    analytics: "Analitik Çerezler",
    marketing: "Pazarlama Çerezleri",
    save: "Kaydet",
    privacyLink: "Gizlilik Politikası",
    cookieLink: "Çerez Politikası",
  },
  de: {
    title: "Cookie-Nutzung",
    description: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Ihre personenbezogenen Daten werden gemäß KVKK geschützt.",
    accept: "Akzeptieren",
    reject: "Ablehnen",
    settings: "Einstellungen",
    necessary: "Notwendige Cookies",
    analytics: "Analytische Cookies",
    marketing: "Marketing-Cookies",
    save: "Speichern",
    privacyLink: "Datenschutz",
    cookieLink: "Cookie-Richtlinie",
  },
  en: {
    title: "Cookie Usage",
    description: "We use cookies to enhance your experience. Your personal data is protected under KVKK regulations.",
    accept: "Accept",
    reject: "Reject",
    settings: "Settings",
    necessary: "Necessary Cookies",
    analytics: "Analytics Cookies",
    marketing: "Marketing Cookies",
    save: "Save",
    privacyLink: "Privacy Policy",
    cookieLink: "Cookie Policy",
  },
  ru: {
    title: "Использование cookie",
    description: "Мы используем cookie для улучшения вашего опыта. Ваши данные защищены законом KVKK.",
    accept: "Принять",
    reject: "Отклонить",
    settings: "Настройки",
    necessary: "Необходимые cookie",
    analytics: "Аналитические cookie",
    marketing: "Маркетинговые cookie",
    save: "Сохранить",
    privacyLink: "Политика конфиденциальности",
    cookieLink: "Политика cookie",
  },
  uk: {
    title: "Використання cookie",
    description: "Ми використовуємо cookie для покращення вашого досвіду. Ваші дані захищені законом KVKK.",
    accept: "Прийняти",
    reject: "Відхилити",
    settings: "Налаштування",
    necessary: "Необхідні cookie",
    analytics: "Аналітичні cookie",
    marketing: "Маркетингові cookie",
    save: "Зберегти",
    privacyLink: "Політика конфіденційності",
    cookieLink: "Політика cookie",
  },
  ar: {
    title: "استخدام ملفات تعريف الارتباط",
    description: "نستخدم ملفات تعريف الارتباط لتحسين تجربتك. بياناتك محمية بموجب قانون KVKK.",
    accept: "قبول",
    reject: "رفض",
    settings: "الإعدادات",
    necessary: "ملفات تعريف الارتباط الضرورية",
    analytics: "ملفات تعريف الارتباط التحليلية",
    marketing: "ملفات تعريف الارتباط التسويقية",
    save: "حفظ",
    privacyLink: "سياسة الخصوصية",
    cookieLink: "سياسة ملفات تعريف الارتباط",
  },
  hr: {
    title: "Korištenje kolačića",
    description: "Koristimo kolačiće za poboljšanje vašeg iskustva. Vaši podaci su zaštićeni prema KVKK regulativama.",
    accept: "Prihvati",
    reject: "Odbij",
    settings: "Postavke",
    necessary: "Neophodni kolačići",
    analytics: "Analitički kolačići",
    marketing: "Marketinški kolačići",
    save: "Spremi",
    privacyLink: "Pravila privatnosti",
    cookieLink: "Pravila o kolačićima",
  },
};

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const { language } = useLanguage();
  const t = cookieTexts[language];

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ 
      necessary: true, 
      analytics: true, 
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ 
      necessary: true, 
      analytics: false, 
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      ...preferences,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-end sm:items-center justify-center p-4" data-testid="cookie-banner">
      <Card className="w-full max-w-lg bg-card shadow-2xl">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">{t.title}</h3>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            {t.description}
          </p>

          {showSettings ? (
            <div className="space-y-3 mb-4">
              <label className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">{t.necessary}</span>
                <Check className="w-5 h-5 text-green-500" />
              </label>
              <label className="flex items-center justify-between p-3 bg-muted/50 rounded-lg cursor-pointer">
                <span className="text-sm">{t.analytics}</span>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences(p => ({ ...p, analytics: e.target.checked }))}
                  className="w-4 h-4 accent-primary"
                  data-testid="checkbox-analytics"
                />
              </label>
              <label className="flex items-center justify-between p-3 bg-muted/50 rounded-lg cursor-pointer">
                <span className="text-sm">{t.marketing}</span>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences(p => ({ ...p, marketing: e.target.checked }))}
                  className="w-4 h-4 accent-primary"
                  data-testid="checkbox-marketing"
                />
              </label>
              <Button onClick={handleSavePreferences} className="w-full" data-testid="button-save-cookies">
                {t.save}
              </Button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <Button onClick={handleAccept} className="flex-1" data-testid="button-accept-cookies">
                {t.accept}
              </Button>
              <Button onClick={handleReject} variant="outline" className="flex-1" data-testid="button-reject-cookies">
                {t.reject}
              </Button>
              <Button onClick={() => setShowSettings(true)} variant="ghost" size="icon" data-testid="button-cookie-settings">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          )}

          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="/gizlilik" className="hover:underline">{t.privacyLink}</a>
            <a href="/cerez-politikasi" className="hover:underline">{t.cookieLink}</a>
          </div>
        </div>
      </Card>
    </div>
  );
}
