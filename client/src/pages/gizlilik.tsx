import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Gizlilik() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ana Sayfa
          </Button>
        </Link>

        <h1 className="text-3xl font-bold mb-8">Gizlilik Politikası</h1>
        <p className="text-sm text-muted-foreground mb-8">Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Giriş</h2>
            <p className="text-muted-foreground leading-relaxed">
              089 Bayern Enerji Sistemleri Ltd. Şti. olarak gizliliğinize saygı duyuyor ve kişisel verilerinizin korunmasını önemsiyoruz. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda kişisel verilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Topladığımız Bilgiler</h2>
            <h3 className="text-lg font-medium mb-2">2.1 Doğrudan Sağladığınız Bilgiler</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Ad ve soyad</li>
              <li>Telefon numarası</li>
              <li>E-posta adresi</li>
              <li>Adres bilgileri</li>
              <li>Mülk bilgileri (villa, daire, ticari vb.)</li>
              <li>Enerji tüketim bilgileri</li>
            </ul>
            <h3 className="text-lg font-medium mb-2">2.2 Otomatik Olarak Toplanan Bilgiler</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>IP adresi</li>
              <li>Tarayıcı türü ve versiyonu</li>
              <li>İşletim sistemi</li>
              <li>Ziyaret edilen sayfalar ve süreleri</li>
              <li>Çerez verileri</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Bilgilerin Kullanım Amaçları</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Hizmet taleplerinizi değerlendirmek ve yanıtlamak</li>
              <li>Size özel teklifler hazırlamak</li>
              <li>Müşteri hizmetleri sağlamak</li>
              <li>Web sitemizi geliştirmek</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
              <li>İzniniz dahilinde pazarlama iletişimleri göndermek</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Veri Paylaşımı</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kişisel verilerinizi aşağıdaki durumlar dışında üçüncü taraflarla paylaşmayız:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
              <li>Açık izniniz olduğunda</li>
              <li>Hizmet sağlayıcılarımızla (kurulum ekipleri, teknik destek vb.)</li>
              <li>Yasal zorunluluk halinde</li>
              <li>Marka ortaklarımızla (Vaillant, Samsung) garanti işlemleri için</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Veri Güvenliği</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kişisel verilerinizi korumak için endüstri standardı güvenlik önlemleri uyguluyoruz. Web sitemiz SSL sertifikası ile şifrelenmektedir. Verileriniz güvenli sunucularda saklanmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Çerezler</h2>
            <p className="text-muted-foreground leading-relaxed">
              Web sitemizde çerezler kullanılmaktadır. Çerezlerin kullanımı hakkında detaylı bilgi için <a href="/cerez-politikasi" className="text-primary hover:underline">Çerez Politikamızı</a> inceleyebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Haklarınız</h2>
            <p className="text-muted-foreground leading-relaxed">
              6698 sayılı KVKK kapsamında kişisel verilerinizle ilgili haklarınız bulunmaktadır. Bu haklar hakkında detaylı bilgi için <a href="/kvkk" className="text-primary hover:underline">KVKK Aydınlatma Metnimizi</a> inceleyebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. İletişim</h2>
            <p className="text-muted-foreground leading-relaxed">
              Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
            </p>
            <div className="bg-muted/50 p-4 rounded-lg mt-4">
              <p className="text-sm"><strong>E-posta:</strong> info@089bayern.com</p>
              <p className="text-sm"><strong>KVKK İletişim:</strong> kvkk@089bayern.com</p>
              <p className="text-sm"><strong>Telefon:</strong> +90 507 192 2036</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Politika Değişiklikleri</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Değişiklikler web sitemizde yayınlandığı anda yürürlüğe girer. Önemli değişikliklerde sizi bilgilendireceğiz.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
