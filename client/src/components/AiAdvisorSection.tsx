import { MessageCircle, Sparkles, HelpCircle, Calculator, Package, Clock } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const sectionContent: Record<string, {
  badge: string;
  title: string;
  subtitle: string;
  placeholder: string;
  features: { icon: typeof MessageCircle; text: string }[];
}> = {
  de: {
    badge: "KI-Berater",
    title: "Ihr persönlicher 089Bayern-Berater",
    subtitle: "Stellen Sie Ihre Fragen zu Kosten, Ablauf, Materialien und mehr. Unser KI-Berater gibt Ihnen sofort Auskunft.",
    placeholder: "Stellen Sie Ihre Fragen zu 089Bayern - Türkiye - ich helfe Ihnen mit Preisinformationen, Ratschlägen und Planungstipps.",
    features: [
      { icon: Calculator, text: "Kostenvoranschläge" },
      { icon: Package, text: "Materialberatung" },
      { icon: Clock, text: "Ablaufplanung" },
      { icon: HelpCircle, text: "Allgemeine Fragen" },
    ],
  },
  tr: {
    badge: "Yapay Zeka Danışmanı",
    title: "Kişisel 089Bayern Danışmanınız",
    subtitle: "Maliyet, süreç, malzeme ve daha fazlası hakkında sorularınızı sorun. Yapay zeka danışmanımız size anında bilgi verir.",
    placeholder: "089Bayern - Türkiye hakkında sorularınızı sorun - fiyat bilgileri, tavsiyeler ve planlama ipuçları konusunda size yardımcı oluyorum.",
    features: [
      { icon: Calculator, text: "Maliyet Tahminleri" },
      { icon: Package, text: "Malzeme Danışmanlığı" },
      { icon: Clock, text: "Süreç Planlama" },
      { icon: HelpCircle, text: "Genel Sorular" },
    ],
  },
  en: {
    badge: "AI Advisor",
    title: "Your Personal 089Bayern Advisor",
    subtitle: "Ask your questions about costs, processes, materials and more. Our AI advisor provides instant answers.",
    placeholder: "Ask your questions about 089Bayern - Türkiye - I help you with pricing information, advice and planning tips.",
    features: [
      { icon: Calculator, text: "Cost Estimates" },
      { icon: Package, text: "Material Advice" },
      { icon: Clock, text: "Process Planning" },
      { icon: HelpCircle, text: "General Questions" },
    ],
  },
  ru: {
    badge: "ИИ-консультант",
    title: "Ваш личный консультант 089Bayern",
    subtitle: "Задайте вопросы о стоимости, процессе, материалах и многом другом. Наш ИИ-консультант даст вам мгновенный ответ.",
    placeholder: "Задайте вопросы о 089Bayern - Türkiye - я помогу вам с информацией о ценах, советами и рекомендациями по планированию.",
    features: [
      { icon: Calculator, text: "Расчёт стоимости" },
      { icon: Package, text: "Консультация по материалам" },
      { icon: Clock, text: "Планирование процесса" },
      { icon: HelpCircle, text: "Общие вопросы" },
    ],
  },
  uk: {
    badge: "ШІ-консультант",
    title: "Ваш особистий консультант 089Bayern",
    subtitle: "Задайте питання про вартість, процес, матеріали та інше. Наш ШІ-консультант надасть вам миттєву відповідь.",
    placeholder: "Задайте питання про 089Bayern - Türkiye - я допоможу вам з інформацією про ціни, порадами та рекомендаціями щодо планування.",
    features: [
      { icon: Calculator, text: "Розрахунок вартості" },
      { icon: Package, text: "Консультація з матеріалів" },
      { icon: Clock, text: "Планування процесу" },
      { icon: HelpCircle, text: "Загальні питання" },
    ],
  },
  ar: {
    badge: "مستشار الذكاء الاصطناعي",
    title: "مستشارك الشخصي من 089Bayern",
    subtitle: "اطرح أسئلتك حول التكاليف والعمليات والمواد والمزيد. يقدم لك مستشار الذكاء الاصطناعي إجابات فورية.",
    placeholder: "اطرح أسئلتك حول 089Bayern - Türkiye - سأساعدك بمعلومات الأسعار والنصائح وإرشادات التخطيط.",
    features: [
      { icon: Calculator, text: "تقدير التكاليف" },
      { icon: Package, text: "استشارات المواد" },
      { icon: Clock, text: "تخطيط العملية" },
      { icon: HelpCircle, text: "أسئلة عامة" },
    ],
  },
  hr: {
    badge: "AI Savjetnik",
    title: "Vaš osobni 089Bayern savjetnik",
    subtitle: "Postavite pitanja o troškovima, procesu, materijalima i više. Naš AI savjetnik daje vam trenutne odgovore.",
    placeholder: "Postavite pitanja o 089Bayern - Türkiye - pomažem vam s informacijama o cijenama, savjetima i planiranjem.",
    features: [
      { icon: Calculator, text: "Procjene troškova" },
      { icon: Package, text: "Savjeti o materijalima" },
      { icon: Clock, text: "Planiranje procesa" },
      { icon: HelpCircle, text: "Opća pitanja" },
    ],
  },
};

export default function AiAdvisorSection() {
  const { language } = useLanguage();
  const content = sectionContent[language] || sectionContent.de;
  const isRTL = language === "ar";

  const openChat = () => {
    const chatButton = document.querySelector('[data-testid="button-open-chat"]') as HTMLElement;
    if (chatButton) {
      chatButton.click();
    }
  };

  return (
    <section 
      className="py-8 md:py-10 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
      data-testid="section-ai-advisor"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNC0yIDQtMiA0LTItMi0yLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      
      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 shadow-xl">
              <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
              <MessageCircle className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">{content.badge}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              {content.title}
            </h2>
            
            <p className="text-white/90 text-sm md:text-base mb-4">
              {content.subtitle}
            </p>

            <div 
              onClick={openChat}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 cursor-pointer hover:bg-white/20 transition-all group"
              data-testid="button-open-ai-advisor"
            >
              <p className="text-white/80 text-sm italic group-hover:text-white transition-colors">
                {content.placeholder}
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
              {content.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full"
                >
                  <feature.icon className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
