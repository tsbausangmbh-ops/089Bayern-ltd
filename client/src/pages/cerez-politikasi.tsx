import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CerezPolitikasi() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ana Sayfa
          </Button>
        </Link>

        <h1 className="text-3xl font-bold mb-8">Çerez Politikası</h1>
        <p className="text-sm text-muted-foreground mb-8">Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Çerez Nedir?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Çerezler, web sitelerini ziyaret ettiğinizde cihazınıza (bilgisayar, tablet veya telefon) kaydedilen küçük metin dosyalarıdır. Çerezler, web sitelerinin düzgün çalışmasını sağlar, deneyiminizi kişiselleştirir ve site kullanımı hakkında bilgi toplar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Kullandığımız Çerez Türleri</h2>
            
            <h3 className="text-lg font-medium mb-2">2.1 Zorunlu Çerezler</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Web sitemizin temel işlevleri için gereklidir. Bu çerezler olmadan site düzgün çalışamaz. Oturum yönetimi, güvenlik ve dil tercihleri için kullanılır.
            </p>
            
            <h3 className="text-lg font-medium mb-2">2.2 Analitik Çerezler</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olur. Sayfa görüntülemeleri, ziyaret süreleri ve hata raporları gibi bilgileri toplar. Bu bilgiler anonim olarak işlenir.
            </p>
            
            <h3 className="text-lg font-medium mb-2">2.3 Pazarlama Çerezleri</h3>
            <p className="text-muted-foreground leading-relaxed">
              İlgi alanlarınıza göre kişiselleştirilmiş reklamlar sunmak için kullanılır. Üçüncü taraf reklam ağları tarafından yerleştirilebilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Kullandığımız Çerezler</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-border rounded-lg">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium">Çerez Adı</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Türü</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Amacı</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Süre</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-muted-foreground">
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">cookie-consent</td>
                    <td className="px-4 py-2">Zorunlu</td>
                    <td className="px-4 py-2">Çerez tercihlerinizi saklar</td>
                    <td className="px-4 py-2">1 yıl</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">preferred-language</td>
                    <td className="px-4 py-2">Zorunlu</td>
                    <td className="px-4 py-2">Dil tercihinizi saklar</td>
                    <td className="px-4 py-2">1 yıl</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">_ga</td>
                    <td className="px-4 py-2">Analitik</td>
                    <td className="px-4 py-2">Google Analytics ziyaretçi takibi</td>
                    <td className="px-4 py-2">2 yıl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Çerez Tercihlerinizi Yönetme</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Çerez tercihlerinizi aşağıdaki yöntemlerle yönetebilirsiniz:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Web sitemizin çerez banner'ındaki ayarlar üzerinden</li>
              <li>Tarayıcı ayarlarınızdan çerezleri engelleyerek veya silerek</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Not:</strong> Zorunlu çerezleri devre dışı bırakırsanız web sitemizin bazı özellikleri düzgün çalışmayabilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Tarayıcı Ayarları</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Çerezleri tarayıcınızdan yönetmek için aşağıdaki bağlantıları kullanabilirsiniz:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/tr/kb/cerezler-web-sitelerinin-bilgisayarinizda-depoladi" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/tr-tr/microsoft-edge/microsoft-edge-de-tanımlama-bilgilerini-silme-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. İletişim</h2>
            <p className="text-muted-foreground leading-relaxed">
              Çerez politikamız hakkında sorularınız için <strong>info@089bayern.com</strong> adresinden bizimle iletişime geçebilirsiniz.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
