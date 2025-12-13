import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { translations } from "@/lib/translations";
import { useLanguage } from "@/lib/LanguageContext";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="fixed left-1/2 -translate-x-1/2 top-24 z-50" data-testid="chatbot-container">
      <div className="flex items-start gap-3 mb-3">
        <div className="bg-card/95 backdrop-blur-sm rounded-xl px-5 py-2 shadow-xl border border-border/50 text-right w-80">
          <p className="text-sm font-semibold text-foreground leading-tight">{t.chatbotTitle}</p>
          <p className="text-xs text-muted-foreground leading-tight">{t.chatbotSubtitle}</p>
        </div>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="w-12 h-12 rounded-full shadow-xl bg-gradient-to-r from-orange-500 to-orange-600 border-0 flex-shrink-0"
          data-testid="button-open-chat"
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <MessageCircle className="w-5 h-5" />
          )}
        </Button>
      </div>
      {isOpen && (
        <Card className="w-96 shadow-2xl border-primary/20 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">{t.chatbotAssistant}</h4>
                <p className="text-white/70 text-xs">{t.chatbotOnline}</p>
              </div>
            </div>
            <Button 
              size="icon" 
              variant="ghost" 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
              data-testid="button-close-chat"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="h-80 p-4 bg-muted/30 overflow-y-auto">
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-card rounded-xl rounded-tl-none p-4 shadow-sm max-w-[95%]">
                  <p className="text-sm text-foreground">
                    {t.chatbotGreeting}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {t.chatbotHelpText}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-3 border-t border-border bg-card">
            <form 
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                setMessage("");
              }}
            >
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.chatbotPlaceholder}
                className="flex-1 h-12 text-base"
                data-testid="input-chat-message"
              />
              <Button 
                type="submit" 
                size="icon"
                className="bg-gradient-to-r from-orange-500 to-orange-600 h-12 w-12"
                data-testid="button-send-message"
              >
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </Card>
      )}
    </div>
  );
}
