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

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div 
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center"
        data-testid="chatbot-container"
      >
        <div
          onClick={toggleChat}
          className="bg-gradient-to-b from-orange-500 to-orange-600 px-2 py-6 rounded-l-lg shadow-xl cursor-pointer hover:px-3 transition-all duration-200 flex flex-col items-center gap-2"
          data-testid="button-open-chat"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span 
            className="text-white text-xs font-semibold whitespace-nowrap"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
089Bayern - KI Agent
          </span>
        </div>
      </div>

      {isOpen && (
        <div className="fixed right-0 top-0 h-full z-50 flex" data-testid="chatbot-panel">
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeChat}
          />
          <Card className="relative ml-auto w-96 h-full shadow-2xl border-l border-primary/20 rounded-none overflow-hidden flex flex-col">
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
                onClick={closeChat}
                className="text-white hover:bg-white/20"
                data-testid="button-close-chat"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="flex-1 p-4 bg-muted/30 overflow-y-auto">
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
        </div>
      )}
    </>
  );
}
